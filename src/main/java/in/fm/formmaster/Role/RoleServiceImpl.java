package in.fm.formmaster.Role;

import in.fm.formmaster.exception.ResourceAlreadyExists;
import in.fm.formmaster.exception.ResourceNotFound;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RoleServiceImpl implements RoleService {
    @Autowired
    private RoleRepository roleRepository;
    @Override
    public RoleDTO createRole(RoleDTO roleDTO) {
        try {
            if (roleRepository.existsByRole(roleDTO.getRole())) {
                throw new ResourceAlreadyExists("Already exists");
            }
            Role role = new Role();
            role.setRole(roleDTO.getRole());
            role.setCreatedOn(roleDTO.getCreatedOn());
            role.setModifiedOn(roleDTO.getModifiedOn());

            roleRepository.save(role);

            RoleDTO roleDTO2 = new RoleDTO();
            roleDTO2.setRole(role.getRole());
            roleDTO2.setCreatedOn(role.getCreatedOn());
            roleDTO2.setModifiedOn(role.getModifiedOn());

            return roleDTO2;

        }catch (Exception e){
            throw new IllegalArgumentException(e.getMessage());
        }

    }

    @Override
    public RoleDTO updateRole(RoleDTO roleDTO) {
        return null;
    }

    @Override
    public void deleteRole(RoleDTO roleDTO) {

    }

    @Override

    public List<RoleDTO> getAllRoles() {

        List<Role> roles = roleRepository.findAll();

        List<RoleDTO> roleDTOs = new ArrayList<>();

        for(Role role : roles){

            RoleDTO dto = new RoleDTO();

            dto.setId(role.getId());      // VERY IMPORTANT
            dto.setRole(role.getRole());

            roleDTOs.add(dto);

        }

        return roleDTOs;
    }
}
