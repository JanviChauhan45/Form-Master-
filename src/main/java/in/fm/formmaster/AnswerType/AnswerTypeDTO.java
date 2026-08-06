package in.fm.formmaster.AnswerType;

import in.fm.formmaster.User.UserSummaryDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AnswerTypeDTO {
    private Long id;
    private String answerTypename;
    private Integer active;
    private Integer validate;
    private UserSummaryDTO createdBy;
    private UserSummaryDTO modifiedBy;
    private LocalDateTime createdOn;
    private LocalDateTime modifiedOn;
}
