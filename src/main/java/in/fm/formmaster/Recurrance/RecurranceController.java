package in.fm.formmaster.Recurrance;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RequestMapping("/api/recurrance")
@RestController
public class RecurranceController {
    @Autowired
    private RecurranceService service;

    @GetMapping("/getAll")
    public ResponseEntity<List<RecurranceDTO>> getRecurrances(){
        List<RecurranceDTO> recurrances = service.getAll();
        return new ResponseEntity<>(recurrances, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RecurranceDTO> getRecurranceById(@Valid @PathVariable long id){
        RecurranceDTO recurrance = service.get(id);
        return ResponseEntity.ok(recurrance);
    }

    @PostMapping
    public ResponseEntity<RecurranceDTO> createRecurrance( @Valid @RequestBody RecurranceDTO recurrance){
        RecurranceDTO recurranceDTO = service.create(recurrance);
        return ResponseEntity.ok(recurranceDTO);
    }
}
