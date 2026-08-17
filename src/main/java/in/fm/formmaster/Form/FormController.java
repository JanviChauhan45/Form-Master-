package in.fm.formmaster.Form;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/form")
public class FormController {

    @Autowired
    private FormService service;


    @PostMapping("/add")
    public ResponseEntity<?> addForm(
            @Valid @RequestBody FormDTO dto) {

        try {

            FormDTO savedDTO = service.addForm(dto);

            return ResponseEntity.ok(savedDTO);

        } catch (Exception e) {

            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());
        }
    }




    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateForm(
            @PathVariable Long id,
            @Valid @RequestBody FormDTO dto) {

        try {

            FormDTO updatedDTO =
                    service.updateForm(dto, id);

            return ResponseEntity.ok(updatedDTO);

        } catch (Exception e) {

            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());
        }
    }




    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteForm(
            @PathVariable Long id) {

        try {

            String response = service.delete(id);

            return ResponseEntity.ok(response);

        } catch (Exception e) {

            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());
        }
    }




    @GetMapping("/getAll")
    public ResponseEntity<List<FormDTO>> getAllForms() {

        List<FormDTO> list = service.getAll();

        return ResponseEntity.ok(list);
    }




    @GetMapping("/{id}")
    public ResponseEntity<?> getFormById(
            @PathVariable Long id) {

        try {

            FormDTO dto = service.getById(id);

            return ResponseEntity.ok(dto);

        } catch (Exception e) {

            return ResponseEntity
                    .notFound()
                    .build();
        }
    }
}
