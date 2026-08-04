package in.fm.formmaster.Module;

import in.fm.formmaster.User.User;
import in.fm.formmaster.constants.AppConstants;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name ="mst_module")
public class Module {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String moduleName;

    @Column
    private String moduleShortName;

    @Column
    private Integer active = AppConstants.ACTIVE;

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

    @PreUpdate
    public void preUpdate() {
        modifiedOn = LocalDateTime.now();
    }

}
