package in.fm.formmaster.Module;

import in.fm.formmaster.User.CustomUserDetails;
import in.fm.formmaster.User.User;
import in.fm.formmaster.User.UserMapper;
import in.fm.formmaster.constants.AppConstants;
import in.fm.formmaster.exception.BusinessException;
import in.fm.formmaster.exception.ResourceAlreadyExists;
import in.fm.formmaster.exception.ResourceNotFound;
import in.fm.formmaster.utility.RequestUtils;
import in.fm.formmaster.utility.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import in.fm.formmaster.User.UserSummaryDTO;
import java.util.List;

@Service
public class ModuleServiceImpl implements ModuleService {
    @Autowired
    private ModuleRepository repo;
    @Override
    public ModuleDTO createModule(ModuleDTO dto) {
        if(repo.existsByModuleName(dto.getModuleName())){
            throw new ResourceAlreadyExists("Module already exists");
        }

        if(dto.getModuleShortName()==null ||
                dto.getModuleShortName().trim().isEmpty()){

            throw new IllegalArgumentException("Module Short Name required");
        }

        User loggedInUser = SecurityUtils.getLoggedInUser();

        Module module = new Module();

        module.setModuleName(dto.getModuleName());
        module.setModuleShortName(dto.getModuleShortName());
        module.setActive(AppConstants.ACTIVE);

        module.setCreatedBy(loggedInUser);
        module.setModifiedBy(loggedInUser);
        module.setIpAddress(RequestUtils.getIpAddress());

        Module saved = repo.save(module);

        ModuleDTO response = new ModuleDTO();

        response.setId(saved.getId());
        response.setModuleName(saved.getModuleName());
        response.setModuleShortName(saved.getModuleShortName());
        response.setActive(saved.getActive());

        response.setCreatedBy(UserMapper.toSummaryDTO(saved.getCreatedBy()));
        response.setModifiedBy(UserMapper.toSummaryDTO(saved.getModifiedBy()));

        response.setCreatedOn(saved.getCreatedOn());
        response.setModifiedOn(saved.getModifiedOn());

        return response;

    }

    @Override
    public ModuleDTO updateModule(ModuleDTO moduleDTO) {
        return null;
    }

    @Override
    public ModuleDTO deleteModule(Long id) {
        return null;
    }

    @Override
    public List<ModuleDTO> getAllModules() {
        List<Module> modules = repo.findByActiveNot(9);
        return modules.stream().map( mod ->{
            ModuleDTO dto = new ModuleDTO();
            dto.setId(mod.getId());
            dto.setModuleName(mod.getModuleName());
            dto.setModuleShortName(mod.getModuleShortName());
            dto.setActive(mod.getActive());
            dto.setCreatedBy(UserMapper.toSummaryDTO(mod.getCreatedBy()));
            dto.setModifiedBy(UserMapper.toSummaryDTO(mod.getModifiedBy()));
            dto.setCreatedOn(mod.getCreatedOn());
            dto.setModifiedOn(mod.getModifiedOn());
            return dto;
        }).toList();



    }

    @Override
    public ModuleDTO getModuleById(Long id) {
        try{
            Module module = repo.findById(id).orElseThrow(() -> new ResourceNotFound("Id Not Found"));
            ModuleDTO dto = new ModuleDTO();
            dto.setId(module.getId());
            dto.setModuleName(module.getModuleName());
            dto.setModuleShortName(module.getModuleShortName());
            dto.setActive(module.getActive());
            dto.setCreatedBy(UserMapper.toSummaryDTO(module.getCreatedBy()));
            dto.setModifiedBy(UserMapper.toSummaryDTO(module.getModifiedBy()));
            dto.setCreatedOn(module.getCreatedOn());
            dto.setModifiedOn(module.getModifiedOn());
            return dto;
        }catch(Exception e){
            throw new IllegalArgumentException(e);
        }

    }
}
