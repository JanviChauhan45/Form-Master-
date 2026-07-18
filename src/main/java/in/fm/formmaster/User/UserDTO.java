package in.fm.formmaster.User;

import in.fm.formmaster.Role.Role;
import in.fm.formmaster.constants.AppConstants;
import in.fm.formmaster.constants.Gender;
import jakarta.persistence.*;
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
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private String contactno;
    private Integer gender ;
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
