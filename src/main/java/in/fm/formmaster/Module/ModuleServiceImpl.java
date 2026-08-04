package in.fm.formmaster.Module;

import in.fm.formmaster.User.CustomUserDetails;
import in.fm.formmaster.User.User;
import in.fm.formmaster.constants.AppConstants;
import in.fm.formmaster.exception.BusinessException;
import in.fm.formmaster.exception.ResourceAlreadyExists;
import in.fm.formmaster.utility.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ModuleServiceImpl implements ModuleService {
    @Autowired
    private ModuleRepository repo;
    @Override
    public ModuleDTO createModule(ModuleDTO dto) {
    try{

        if(repo.existsByModuleName(dto.getModuleName())){
            throw new ResourceAlreadyExists("Module already exists");
        }
        Module module = new Module();
        module.setModuleName(dto.getModuleName());
        module.setModuleShortName(dto.getModuleShortName());
        if(module.getModuleShortName() == null){
            throw new IllegalArgumentException("Module short name cannot be null");
        }


        module.setActive(AppConstants.ACTIVE);

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        CustomUserDetails userDetails =
                (CustomUserDetails) authentication.getPrincipal();

        User loggedInUser = SecurityUtils.getLoggedInUser();
        module.setCreatedBy(loggedInUser);
        module.setModifiedBy(loggedInUser);
        module.setModifiedOn(dto.getModifiedOn());
        module.setCreatedOn(dto.getCreatedOn());
        repo.save(module);

        ModuleDTO dto2 = new ModuleDTO();
        dto2.setId(module.getId());
        dto2.setModuleShortName(module.getModuleShortName());
        dto2.setModuleName(module.getModuleName());
        dto2.setActive(module.getActive());
        dto2.setCreatedBy(module.getCreatedBy());
        dto2.setModifiedBy(module.getModifiedBy());
        return dto2;

    } catch (Exception e) {
        throw new RuntimeException(e);
    }

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
        return List.of();
    }
}
