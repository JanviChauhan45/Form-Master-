package in.fm.formmaster.User;

import in.fm.formmaster.Role.Role;
import in.fm.formmaster.constants.AppConstants;
import in.fm.formmaster.constants.Gender;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Entity
@Table(name = "users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column

    private String firstname;
    @Column

    private String lastname;
    @Column

    private String email;
    @Column
    private String password;
    @Column
    private String contactno;
    @Column
    private Integer gender = Gender.MALE;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "role")
    private Role roleid;

    @Column
    private Timestamp valid_from;

    @Column
    private Timestamp valid_to;

    @Column
    private Integer active = AppConstants.ACTIVE;

    @Column
    private String profile_img;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "created_by")
    private User createdBy;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "modified_by")
    private User modifiedBy;

    @Column
    private LocalDateTime createdOn;
    @Column
    private LocalDateTime modifiedOn;

    @Column
    private String ipAddress;


    @PrePersist
    public void prePersist() {
        createdOn = LocalDateTime.now();
        modifiedOn = LocalDateTime.now();
    }


}
