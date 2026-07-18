package in.fm.formmaster.Role;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/role")
public class RoleController {
    @Autowired
    private RoleService roleService;

    @GetMapping
    public ResponseEntity<List<RoleDTO>> getAllRoles(){

        return ResponseEntity.ok(roleService.getAllRoles());

    }

    @PostMapping("/create")
    public ResponseEntity<RoleDTO> createRole(@RequestBody RoleDTO roleDTO){
        roleService.createRole(roleDTO);
        return  ResponseEntity.ok().body(new RoleDTO());
    }
}
