package in.fm.formmaster.ModuleCharacteristicsMapping;


import java.util.List;

public interface ModuleCharService {
    ModuleCharacterMappingDTO add(ModuleCharacterMappingDTO moduleCharacterMappingDTO);
    ModuleCharacterMappingDTO update(ModuleCharacterMappingDTO moduleCharacterMappingDTO);
    String delete(ModuleCharacterMappingDTO moduleCharacterMappingDTO);
    List<ModuleCharacterMappingDTO> getAll();
    ModuleCharacterMappingDTO getOne(Long id);
    public List<ModuleCharacterMappingDTO> getByModule(Long moduleId);

}
