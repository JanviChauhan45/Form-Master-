package in.fm.formmaster.Characteristics;

import in.fm.formmaster.User.UserSummaryDTO;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class CharacteristicsDTO {
    private Long id;
    private String name;
    private Integer active;
    private UserSummaryDTO createdBy;
    private UserSummaryDTO modifiedBy;
    private LocalDateTime createdOn;
    private LocalDateTime modifiedOn;
}
