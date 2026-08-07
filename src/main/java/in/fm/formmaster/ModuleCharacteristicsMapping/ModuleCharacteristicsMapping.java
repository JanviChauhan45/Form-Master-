package in.fm.formmaster.ModuleCharacteristicsMapping;

import in.fm.formmaster.Characteristics.Characteristics;
import in.fm.formmaster.User.User;
import in.fm.formmaster.constants.AppConstants;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import in.fm.formmaster.Module.Module;

import java.time.LocalDateTime;

@Entity
@Table(name ="mst_module_characteristics_mapping")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ModuleCharacteristicsMapping {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Characteristics characteristicId;

    @ManyToOne(fetch = FetchType.LAZY )
    private Module moduleId;

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
