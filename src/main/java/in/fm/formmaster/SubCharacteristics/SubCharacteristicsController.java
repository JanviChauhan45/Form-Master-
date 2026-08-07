package in.fm.formmaster.SubCharacteristics;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subcar")
public class SubCharacteristicsController {
    @Autowired
    private SubCharacteristicsService service;

    @PostMapping("/add")
    public ResponseEntity<?> addSubCharacteristics(@Valid @RequestBody SubCharacteristicsDTO dto){
        try {
            SubCharacteristicsDTO dto1 = service.add(dto);
            return ResponseEntity.ok().body(dto1);
        }catch(Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<SubCharacteristicsDTO> getSubCharacteristics(@PathVariable long id){
        try{
            SubCharacteristicsDTO dto = service.findById(id);
            return ResponseEntity.ok().body(dto);
        }catch(Exception e){
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<SubCharacteristicsDTO>> getAllSubCharacteristics(){
        List<SubCharacteristicsDTO> list = service.findAll();
        return  ResponseEntity.ok().body(list);
    }
}
