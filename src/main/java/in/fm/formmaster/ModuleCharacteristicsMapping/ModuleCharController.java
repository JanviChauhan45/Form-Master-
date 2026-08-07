package in.fm.formmaster.ModuleCharacteristicsMapping;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/modulechar")
public class ModuleCharController {
    @Autowired
    private ModuleCharService service;

    @PostMapping("/add")
    public ResponseEntity<?> save(@Valid @RequestBody ModuleCharacterMappingDTO dto) {
        try {
            ModuleCharacterMappingDTO dto1 = service.add(dto);
            return ResponseEntity.ok(dto1);
        }catch (Exception e){
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<ModuleCharacterMappingDTO>> getAll() {
        try{
            List<ModuleCharacterMappingDTO> list = service.getAll();
            return ResponseEntity.ok(list);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<ModuleCharacterMappingDTO> getOne(@PathVariable long id) {
        try {
            ModuleCharacterMappingDTO dto = service.getOne(id);
            return ResponseEntity.ok(dto);
        }catch (Exception e){
            return ResponseEntity.badRequest().build();
        }
    }
}
