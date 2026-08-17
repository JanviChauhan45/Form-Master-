package in.fm.formmaster.Form;

import in.fm.formmaster.Characteristics.Characteristics;
import in.fm.formmaster.Month.Month;
import in.fm.formmaster.Recurrance.Recurrance;
import in.fm.formmaster.SubCharacteristics.SubCharacteristics;
import in.fm.formmaster.User.User;
import in.fm.formmaster.constants.AppConstants;
import jakarta.persistence.*;
import in.fm.formmaster.Module.Module;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "mst_form")
public class Form {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "formid")
    private Long id;

    @Column
    private String title;

    @Column
    private String aliasname;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "module_id")
    private Module moduleid;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "characteristic_id")
    private Characteristics characteristicid;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "subCharacteristic_id")
    private SubCharacteristics  subCharacteristicid;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "recurrance_id")
    private Recurrance  recurranceid;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "month_id")
    private Month monthId;

    @Column
    private Date effectiveDate;

    @Column
    private String compliancePeriod;

    @Column
    private String description;

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
