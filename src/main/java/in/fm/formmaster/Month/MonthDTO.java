package in.fm.formmaster.Month;

import in.fm.formmaster.User.UserSummaryDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MonthDTO {
    private Long id;
    private String monthName;
    private Integer active;
    private UserSummaryDTO createdBy;
    private UserSummaryDTO modifiedBy;
    private LocalDateTime createdOn;
    private LocalDateTime modifiedOn;
}
