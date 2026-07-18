package in.fm.formmaster.Role;

import java.util.List;

public interface RoleService {
    public RoleDTO createRole(RoleDTO roleDTO);
    public RoleDTO updateRole(RoleDTO roleDTO);
    public void deleteRole(RoleDTO roleDTO);
    public List<RoleDTO> getAllRoles();
}
