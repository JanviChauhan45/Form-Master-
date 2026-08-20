package in.fm.formmaster.Question;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/question")
public class QuestionController {

    @Autowired
    private QuestionService service;

    @PostMapping("/add")
    public ResponseEntity<?> save(
            @RequestBody QuestionDTO dto) {

        try {

            QuestionDTO savedQuestion =
                    service.createQuestion(dto);

            return ResponseEntity
                    .ok()
                    .body(savedQuestion);

        } catch (Exception e) {

            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());
        }
    }


    @PutMapping("/{id}")
    public ResponseEntity<?> update(
            @PathVariable Long id,
            @RequestBody QuestionDTO dto) {

        try {

            QuestionDTO updatedQuestion =
                    service.updateQuestion(id, dto);

            return ResponseEntity
                    .ok()
                    .body(updatedQuestion);

        } catch (Exception e) {

            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());
        }
    }



    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(
            @PathVariable Long id) {

        try {

            String message =
                    service.deleteQuestion(id);

            return ResponseEntity
                    .ok()
                    .body(message);

        } catch (Exception e) {

            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());
        }
    }


    @GetMapping("/getAll")
    public ResponseEntity<?> getAllQuestions() {

        try {

            List<QuestionDTO> list =
                    service.getAllQuestions();

            return ResponseEntity
                    .ok()
                    .body(list);

        } catch (Exception e) {

            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());
        }
    }



    @GetMapping("/{id}")
    public ResponseEntity<?> getQuestion(
            @PathVariable Long id) {

        try {

            QuestionDTO dto =
                    service.getQuestion(id);

            return ResponseEntity
                    .ok()
                    .body(dto);

        } catch (Exception e) {

            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());
        }
    }
}