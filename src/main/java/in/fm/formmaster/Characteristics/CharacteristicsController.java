package in.fm.formmaster.Characteristics;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/char")
public class CharacteristicsController {
    @Autowired
    private CharacteristicsService service;

    @PostMapping("/add")
    public ResponseEntity<?> addChar(@Valid @RequestBody CharacteristicsDTO dto)
    {
        try{
            CharacteristicsDTO dto1 = service.create(dto);
            return ResponseEntity.ok().body(dto1);
        }catch(Exception e){
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<CharacteristicsDTO>>  getAll()
    {
        List<CharacteristicsDTO> list = service.getAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CharacteristicsDTO> getOne(@PathVariable long id){
        CharacteristicsDTO dto = service.getOne(id);
        return ResponseEntity.ok().body(dto);
    }
}
