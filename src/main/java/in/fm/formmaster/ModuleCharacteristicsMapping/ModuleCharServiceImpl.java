package in.fm.formmaster.ModuleCharacteristicsMapping;

import in.fm.formmaster.Characteristics.Characteristics;
import in.fm.formmaster.Characteristics.CharacteristicsRepository;
import in.fm.formmaster.Module.ModuleRepository;
import in.fm.formmaster.User.User;
import in.fm.formmaster.User.UserMapper;
import in.fm.formmaster.constants.AppConstants;
import in.fm.formmaster.exception.ResourceNotFound;
import in.fm.formmaster.utility.RequestUtils;
import in.fm.formmaster.utility.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import in.fm.formmaster.Module.Module;

import java.util.List;
@Service
public class ModuleCharServiceImpl implements ModuleCharService{
    @Autowired
    private ModuleCharRepository repo;

    @Autowired
    private ModuleRepository moduleRepo;

    @Autowired
    private CharacteristicsRepository charRepo;
    @Override
    public ModuleCharacterMappingDTO add(ModuleCharacterMappingDTO moduleCharacterMappingDTO) {
        User loggedInUser = SecurityUtils.getLoggedInUser();

        ModuleCharacteristicsMapping mcm = new ModuleCharacteristicsMapping();

        Characteristics characteristics = charRepo.findById(moduleCharacterMappingDTO.getCharacteristicsId())
                .orElseThrow(()->  new ResourceNotFound("Characteristics not found"));

        Module module = moduleRepo.findById(moduleCharacterMappingDTO.getModuleId())
                .orElseThrow(() -> new ResourceNotFound("Module not found"));

        mcm.setCharacteristicId(characteristics);
        mcm.setModuleId(module);

        mcm.setActive(AppConstants.ACTIVE);
        mcm.setCreatedBy(loggedInUser);
        mcm.setModifiedBy(loggedInUser);

        mcm.setIpAddress(RequestUtils.getIpAddress());
        ModuleCharacteristicsMapping saved = repo.save(mcm);

        ModuleCharacterMappingDTO savedDTO = new ModuleCharacterMappingDTO();

        savedDTO.setId(saved.getId());
        savedDTO.setCharacteristicsId(saved.getCharacteristicId().getId());
        savedDTO.setModuleId(saved.getModuleId().getId());
        savedDTO.setModuleName(saved.getModuleId().getModuleName());
        savedDTO.setCharacteristicsName(saved.getCharacteristicId().getName());
        savedDTO.setActive(saved.getActive());
        savedDTO.setCreatedBy(UserMapper.toSummaryDTO(saved.getCreatedBy()));
        savedDTO.setModifiedBy(UserMapper.toSummaryDTO(saved.getModifiedBy()));

        savedDTO.setCreatedOn(saved.getCreatedOn());
        savedDTO.setModifiedOn(saved.getModifiedOn());

        return savedDTO;
    }

    @Override
    public ModuleCharacterMappingDTO update(ModuleCharacterMappingDTO moduleCharacterMappingDTO) {
        return null;
    }

    @Override
    public String delete(ModuleCharacterMappingDTO moduleCharacterMappingDTO) {
        return "";
    }

    @Override
    public List<ModuleCharacterMappingDTO> getAll() {
        List<ModuleCharacteristicsMapping> list = repo.findByActiveNot(9);
        return list.stream().map(li -> {
           ModuleCharacterMappingDTO dto = new ModuleCharacterMappingDTO();
           dto.setId(li.getId());
            dto.setModuleName(li.getModuleId().getModuleName());
            dto.setCharacteristicsName(li.getCharacteristicId().getName());
           dto.setCreatedBy(UserMapper.toSummaryDTO(li.getCreatedBy()));
           dto.setModifiedBy(UserMapper.toSummaryDTO(li.getModifiedBy()));
           dto.setCreatedOn(li.getCreatedOn());
           dto.setModifiedOn(li.getModifiedOn());
           return dto;
        }).toList();

    }

    @Override
    public ModuleCharacterMappingDTO getOne(Long id) {
        try {
            ModuleCharacteristicsMapping mcm = repo.findById(id).orElseThrow(() -> new ResourceNotFound("ModuleCharacteristicMapping id not found"));
            ModuleCharacterMappingDTO dto = new ModuleCharacterMappingDTO();
            dto.setId(mcm.getId());
            dto.setCharacteristicsId(mcm.getCharacteristicId().getId());
            dto.setModuleId(mcm.getModuleId().getId());
            dto.setActive(mcm.getActive());
            dto.setCreatedBy(UserMapper.toSummaryDTO(mcm.getCreatedBy()));
            //dto.setModifiedBy(UserMapper.toSummaryDTO(mcm.getModifiedBy()));
            dto.setCreatedOn(mcm.getCreatedOn());
            //dto.setModifiedOn(mcm.getModifiedOn());
            return dto;
        }catch (Exception e){
            throw new IllegalArgumentException(e);
        }

    }

    @Override
    public List<ModuleCharacterMappingDTO> getByModule(Long moduleId) {

        List<ModuleCharacteristicsMapping> list =
                repo.findByModuleId_IdAndActive(moduleId, AppConstants.ACTIVE);

        return list.stream().map(li -> {

            ModuleCharacterMappingDTO dto = new ModuleCharacterMappingDTO();

            dto.setId(li.getId());

            dto.setModuleId(li.getModuleId().getId());
            dto.setModuleName(li.getModuleId().getModuleName());

            dto.setCharacteristicsId(li.getCharacteristicId().getId());
            dto.setCharacteristicsName(li.getCharacteristicId().getName());

            return dto;

        }).toList();
    }


}
