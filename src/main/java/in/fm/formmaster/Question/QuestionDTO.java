package in.fm.formmaster.Question;

import in.fm.formmaster.User.UserSummaryDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuestionDTO {

    private Long id;

    private String questionname;

    private String label;

    private Long answertypeid;

    private Long formid;

    private String description;

    private Integer validate;

    private Integer required;

    private Integer active;

    private UserSummaryDTO createdBy;

    private UserSummaryDTO modifiedBy;

    private LocalDateTime createdOn;

    private LocalDateTime modifiedOn;
}