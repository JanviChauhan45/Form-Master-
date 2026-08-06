package in.fm.formmaster.Module;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/module")
public class ModuleController {

        @Autowired
        private ModuleService moduleService;

        @GetMapping("/getAll")
        public ResponseEntity<List<ModuleDTO>> getAllModules(){
            List<ModuleDTO>  dto = moduleService.getAllModules();
            return ResponseEntity.ok(dto);
        }

        @PostMapping("/add")
        public ResponseEntity<?> addModule(@Valid @RequestBody ModuleDTO dto){
            try{
                ModuleDTO dto1 = moduleService.createModule(dto);
                return ResponseEntity.ok(dto1);

            }catch(Exception e){
                return ResponseEntity.badRequest().build();
            }
        }

        @GetMapping("/{id}")
        public ResponseEntity<?> getModule (@Valid @PathVariable Long id){
            try{
                moduleService.getModuleById(id);
                return ResponseEntity.ok(moduleService.getModuleById(id));

            }
            catch(Exception e){
                return ResponseEntity.badRequest().build();

            }
        }
}
