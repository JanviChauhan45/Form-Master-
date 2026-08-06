package in.fm.formmaster.Month;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/months")
public class MonthController {
    @Autowired
    private MonthService monthService;

    @GetMapping("/getAll")
    public ResponseEntity<List<MonthDTO>> getAllMonths(){
        List<MonthDTO> dto = monthService.getMonths();
        return ResponseEntity.ok(dto);
    }

    @PostMapping("/add")
    public ResponseEntity<?> addMonth(@Valid @RequestBody MonthDTO dto){
        try{
            MonthDTO dto1 = monthService.addMonth(dto);
            return ResponseEntity.ok(dto1);
        }catch(Exception e){
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<MonthDTO> getMonth(@Valid @PathVariable Long id){
        try{
            monthService.getMonth(id);
            return ResponseEntity.ok(monthService.getMonth(id));
        }catch(Exception e){
            return ResponseEntity.badRequest().build();
        }
    }
}
