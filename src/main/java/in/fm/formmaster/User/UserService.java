package in.fm.formmaster.User;

import java.util.List;

public interface UserService {

     UserDTO createUser(UserDTO userDTO);
     UserDTO getUserById(Long id);
     List<UserDTO> getAllUsers();
     public void deleteUser(Long id);
     UserDTO updateUser(UserDTO userDTO ,Long id);
    // UserDTO getAllGenders();

}
