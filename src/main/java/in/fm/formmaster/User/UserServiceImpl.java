package in.fm.formmaster.User;


import in.fm.formmaster.Role.Role;
import in.fm.formmaster.Role.RoleRepository;
import in.fm.formmaster.constants.AppConstants;
import in.fm.formmaster.constants.Gender;
import in.fm.formmaster.exception.ResourceNotFound;
import in.fm.formmaster.mail_service.EmailService;
import in.fm.formmaster.mail_service.MailDetailsDTO;
import in.fm.formmaster.utility.PasswordGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDate;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import static aQute.bnd.annotation.headers.Category.users;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository repo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private RoleRepository roleRepo;

    @Autowired
    private EmailService emailService;

    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");

    @Override
    public UserDTO createUser(UserDTO userDTO) {
       try {
           if(repo.existsByEmailIgnoreCase(userDTO.getEmail())){
                throw new ResourceNotFound("Email already exists");
           }
           User user = new  User();
           String password = PasswordGenerator.generatePassword(10);

           System.out.println(password);
           user.setFirstname(userDTO.getFirstname());
           user.setLastname(userDTO.getLastname());
           user.setEmail(userDTO.getEmail());
           user.setPassword(passwordEncoder.encode(password));
            Role role = roleRepo.findById(userDTO.getRoleid())
                            .orElseThrow(()-> new ResourceNotFound("Role not found "));
            user.setRoleid(role);


           user.setContactno(userDTO.getContactno());
           user.setGender(userDTO.getGender());
           LocalDate validFrom = LocalDate.parse(userDTO.getValid_from(), formatter);
           LocalDate validTo = LocalDate.parse(userDTO.getValid_to(), formatter);

           user.setValid_from(
                   Timestamp.valueOf(validFrom.atStartOfDay())
           );

           user.setValid_to(
                   Timestamp.valueOf(validTo.atStartOfDay())
           );
           user.setActive(AppConstants.ACTIVE);

           if(userDTO.getImage() != null && ! userDTO.getImage().isEmpty()) {
                String uploadDir ="E:/upload/";
                Path uploadPath = Paths.get(uploadDir);
                try {
                    if (!Files.exists(uploadPath)) {
                        Files.createDirectories(uploadPath);

                    }
                    String filename = UUID.randomUUID().toString() + "_" + userDTO.getImage().getOriginalFilename();
                    Path filePath = uploadPath.resolve(filename);
                    Files.copy(userDTO.getImage().getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
                    user.setProfile_img(filename);
                }catch(Exception e){
                    throw new IllegalArgumentException(e);

                }

           }
          // user.setProfile_img(userDTO.getProfile_img());
           System.out.println(user.getProfile_img());


           user.setCreatedBy(userDTO.getCreatedBy());
           user.setCreatedOn(userDTO.getCreatedOn());
           user.setModifiedBy(userDTO.getModifiedBy());
           user.setModifiedOn(userDTO.getModifiedOn());
           user.setIpAddress(user.getIpAddress());
           repo.save(user);
           //email
           MailDetailsDTO mailDTO = new MailDetailsDTO();

           mailDTO.setRecipient(user.getEmail());
           mailDTO.setSubject("Welcome to FormMaster");
           mailDTO.setContent(
                   "Hello " + user.getFirstname() + ",\n\n"
                           + "Your account has been created successfully.\n\n"
                           + "Email : " + user.getEmail() + "\n"
                           + "Password : " + password + "\n\n"
                           + "Please change your password after your first login."
           );
           mailDTO.setAttachment(null);
           emailService.sendSimpleMail(mailDTO);

            UserDTO dto = new  UserDTO();
            dto.setId(user.getId());
            dto.setFirstname(user.getFirstname());
            dto.setLastname(user.getLastname());
            dto.setEmail(user.getEmail());
            dto.setRoleid(user.getRoleid().getId());
            dto.setPassword(user.getPassword());
            dto.setContactno(user.getContactno());
            dto.setGender(user.getGender());
           dto.setValid_from(
                   user.getValid_from()
                           .toLocalDateTime()
                           .toLocalDate()
                           .format(formatter)
           );

           dto.setValid_to(
                   user.getValid_to()
                           .toLocalDateTime()
                           .toLocalDate()
                           .format(formatter)
           );
            dto.setActive(user.getActive());
            dto.setProfile_img(user.getProfile_img());
            dto.setCreatedBy(user.getCreatedBy());
            dto.setCreatedOn(user.getCreatedOn());
            dto.setModifiedBy(user.getModifiedBy());
            dto.setModifiedOn(user.getModifiedOn());

           System.out.println("Gender: " + dto.getGender());
           System.out.println("Role: " + dto.getRoleid());

           return dto;
       }catch (Exception e){
            throw new IllegalArgumentException(e.getMessage());
       }
    }

    @Override
    public UserDTO getUserById(Long id) {
        return null;
    }

    @Override
    public List<UserDTO> getAllUsers() {
        try{
        List<User> users = repo.findByActiveNot(9);
        List<UserDTO> userDTOList = new ArrayList<>();
        for(User u : users ){
            UserDTO dto = new UserDTO();
            dto.setId(u.getId());
            dto.setFirstname(u.getFirstname());
            dto.setLastname(u.getLastname());
            dto.setEmail(u.getEmail());
            dto.setRoleid(u.getRoleid().getId());
            dto.setPassword(u.getPassword());
            dto.setContactno(u.getContactno());
            dto.setGender(u.getGender());
            if (u.getValid_from() != null) {
                dto.setValid_from(
                        u.getValid_from()
                                .toLocalDateTime()
                                .toLocalDate()
                                .format(formatter)
                );
            } else {
                dto.setValid_from(null);
            }

            if (u.getValid_to() != null) {
                dto.setValid_to(
                        u.getValid_to()
                                .toLocalDateTime()
                                .toLocalDate()
                                .format(formatter)
                );
            } else {
                dto.setValid_to(null);
            }
            dto.setActive(u.getActive());
            dto.setCreatedBy(u.getCreatedBy());
            dto.setCreatedOn(u.getCreatedOn());
            dto.setModifiedBy(u.getModifiedBy());
            dto.setModifiedOn(u.getModifiedOn());
            dto.setProfile_img(u.getProfile_img());
            userDTOList.add(dto);

        }
        return userDTOList;

        } catch (Exception e) {
            throw new IllegalArgumentException(e.getMessage());
        }

    }

    @Override
    public void deleteUser(Long id) {

        try {

            User user = repo.findById(id)
                    .orElseThrow(() ->
                            new ResourceNotFound("User not found"));

            // Soft Delete
            user.setActive(AppConstants.DELETED);

            // End Validity Today
            user.setValid_to(
                    Timestamp.valueOf(LocalDate.now().atStartOfDay())
            );

            // Audit Fields
            user.setModifiedOn(LocalDateTime.now());

            // If you have logged-in user information,
            // you can also set ModifiedBy here.
            // user.setModifiedBy(...);

            repo.save(user);

        } catch (Exception e) {
            throw new IllegalArgumentException(e.getMessage());
        }
    }

    @Override
    public UserDTO updateUser(UserDTO userDTO, Long id) {

        try {

            // Find Existing User
            User user = repo.findById(id)
                    .orElseThrow(() -> new ResourceNotFound("User not found"));

            // Update Basic Details
            user.setFirstname(userDTO.getFirstname());
            user.setLastname(userDTO.getLastname());
            user.setEmail(userDTO.getEmail());
            user.setContactno(userDTO.getContactno());
            user.setGender(userDTO.getGender());

            // Update Role
            Role role = roleRepo.findById(userDTO.getRoleid())
                    .orElseThrow(() -> new ResourceNotFound("Role not found"));

            user.setRoleid(role);

            // Update Password (Only if user entered a new password)
            if (userDTO.getPassword() != null && !userDTO.getPassword().isBlank()) {
                user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
            }

            // Update Valid Dates
            LocalDate validFrom = LocalDate.parse(userDTO.getValid_from(), formatter);
            LocalDate validTo = LocalDate.parse(userDTO.getValid_to(), formatter);

            user.setValid_from(
                    Timestamp.valueOf(validFrom.atStartOfDay())
            );

            user.setValid_to(
                    Timestamp.valueOf(validTo.atStartOfDay())
            );

            // Update Profile Image
            if (userDTO.getImage() != null && !userDTO.getImage().isEmpty()) {

                String uploadDir = "E:/upload/";
                Path uploadPath = Paths.get(uploadDir);

                if (!Files.exists(uploadPath)) {
                    Files.createDirectories(uploadPath);
                }

                String filename = UUID.randomUUID().toString()
                        + "_"
                        + userDTO.getImage().getOriginalFilename();

                Path filePath = uploadPath.resolve(filename);

                Files.copy(
                        userDTO.getImage().getInputStream(),
                        filePath,
                        StandardCopyOption.REPLACE_EXISTING
                );

                user.setProfile_img(filename);
            }

            // Audit Fields
            user.setModifiedBy(userDTO.getModifiedBy());
            user.setModifiedOn(LocalDateTime.now(ZoneId.systemDefault()));

            // Save User
            repo.save(user);

            // Prepare Response DTO
            UserDTO dto = new UserDTO();

            dto.setId(user.getId());
            dto.setFirstname(user.getFirstname());
            dto.setLastname(user.getLastname());
            dto.setEmail(user.getEmail());
            dto.setContactno(user.getContactno());
            dto.setGender(user.getGender());

            dto.setRoleid(user.getRoleid().getId());

            dto.setProfile_img(user.getProfile_img());

            dto.setValid_from(
                    user.getValid_from()
                            .toLocalDateTime()
                            .toLocalDate()
                            .format(formatter)
            );

            dto.setValid_to(
                    user.getValid_to()
                            .toLocalDateTime()
                            .toLocalDate()
                            .format(formatter)
            );

            dto.setActive(user.getActive());

            dto.setCreatedBy(user.getCreatedBy());
            dto.setCreatedOn(user.getCreatedOn());

            dto.setModifiedBy(user.getModifiedBy());
            dto.setModifiedOn(user.getModifiedOn());

            return dto;

        } catch (Exception e) {
            throw new IllegalArgumentException(e.getMessage());
        }
    }

//    @Override
//    public UserDTO getAllGenders() {
//        repo.getA
//    }
}
