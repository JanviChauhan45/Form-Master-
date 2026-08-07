package in.fm.formmaster.AnswerType;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/answertype")
public class AnswerTypeController {
    @Autowired
    private AnswerTypeService service;

    @PostMapping
    public ResponseEntity<?> save(@RequestBody AnswerTypeDTO dto) {
        try{
            AnswerTypeDTO dto1 = service.save(dto);
            return ResponseEntity.ok().body(dto1);

        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<?> getAllAnsType(){
        List<AnswerTypeDTO> list = service.getAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id){
        try{
           AnswerTypeDTO dto = service.get(id);
           return ResponseEntity.ok().body(dto);
        }catch(Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
