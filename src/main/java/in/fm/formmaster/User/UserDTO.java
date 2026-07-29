package in.fm.formmaster.User;

import in.fm.formmaster.Role.Role;
import in.fm.formmaster.constants.AppConstants;
import in.fm.formmaster.constants.Gender;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

    private Long id;
    @NotBlank(message = "FirstName is required")
    @Pattern(
            regexp = "^[A-Za-z0-9_ ]+$",
            message = "FirstName can contain only letters, numbers and underscore"
    )
    @Size(min = 2,max = 30)
    private String firstname;
    @NotBlank(message = "LastName is required")
    @Pattern(
            regexp = "^[A-Za-z0-9_ ]+$",
            message = "LastName can contain only letters, numbers and underscore"
    )
    @Size(min = 2,max = 30)
    private String lastname;

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format" )
    @Pattern(
            regexp = "^[a-zA-Z][a-zA-Z0-9._-]*@(gmail|yahoo|outlook|yopmail)\\.com$",
            message = "Email must start with a letter and use valid domain")
    @Size(min= 10 , max = 60)
    private String email;
    private String password;

    private String contactno;

    @NotNull(message = "Gender is required")
    private Integer gender ;
    @NotNull(message = "Role is required")
    private Long roleid;
    private String valid_from;
    private String valid_to;
    private Integer active ;
    private String profile_img;
    private MultipartFile image;
    private User createdBy;
    private User modifiedBy;
    private LocalDateTime createdOn;
    private LocalDateTime modifiedOn;

}
