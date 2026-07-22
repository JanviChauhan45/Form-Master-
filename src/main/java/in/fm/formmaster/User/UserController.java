package in.fm.formmaster.User;

import in.fm.formmaster.constants.Gender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("/getAll")
    public ResponseEntity<List<UserDTO>> getAllUsers() {

        List<UserDTO> users = userService.getAllUsers();
        return ResponseEntity.ok(users);

    }

//    @GetMapping("/genders")
//    public ResponseEntity<Gender[]> getGenders() {
//        return ResponseEntity.ok(userService.getAllGenders());
//    }

    @PostMapping(consumes = "multipart/form-data")
    public ResponseEntity<?> createUser(@Valid @ModelAttribute UserDTO userDTO) {
        try {
            UserDTO savedUser = userService.createUser(userDTO);
            System.out.println("Gender = " + userDTO.getGender());
            System.out.println("Role = " + userDTO.getRoleid());

            return ResponseEntity.ok().body(savedUser);
        }catch(Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }


    }
    @GetMapping("/me")
    public String me(Authentication authentication) {
        return authentication.getName();
    }

    @PutMapping(value = "/{id}",consumes = "multipart/form-data")
    public ResponseEntity<?> updateUser(@Valid @ModelAttribute UserDTO userDTO,@PathVariable Long id) {
        try{
           UserDTO response =  userService.updateUser(userDTO,id);
            return ResponseEntity.ok().body(response);

        }catch(Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        try{
           userService.deleteUser(id);
            return ResponseEntity.status(HttpStatus.OK).body("User deleted successfully");
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }


    @GetMapping("/{id}")
    public ResponseEntity<?> getUser(@PathVariable Long id){
        try{
            userService.getUserById(id);
            return ResponseEntity.ok().body(userService.getUserById(id));
        }
        catch(Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
