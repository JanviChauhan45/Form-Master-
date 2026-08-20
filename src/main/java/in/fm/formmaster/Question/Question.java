package in.fm.formmaster.Question;

import in.fm.formmaster.AnswerType.AnswerType;
import in.fm.formmaster.Form.Form;
import in.fm.formmaster.User.User;
import in.fm.formmaster.constants.AppConstants;
import in.fm.formmaster.constants.Required;
import in.fm.formmaster.constants.Validate;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "mst_question")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String questionname;

    private String label;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "answer_type_id")
    private AnswerType answertypeid;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "form_id")
    private Form formid;

    private String description;

    private Integer validate = Validate.Is_Invalid;

    private Integer required = Required.Is_Required;

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
