package in.fm.formmaster.Module;

import java.util.List;

public interface ModuleService {
    ModuleDTO createModule(ModuleDTO moduleDTO);
    ModuleDTO updateModule(ModuleDTO moduleDTO);
    ModuleDTO deleteModule(Long id);
    List<ModuleDTO> getAllModules();
}
