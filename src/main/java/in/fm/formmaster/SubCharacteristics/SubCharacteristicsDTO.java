package in.fm.formmaster.SubCharacteristics;

import in.fm.formmaster.User.UserSummaryDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SubCharacteristicsDTO {
    private Long id;
    private String name;
    private Long charid;
    private Integer active;
    private UserSummaryDTO createdBy;
    private UserSummaryDTO modifiedBy;
    private LocalDateTime createdOn;
    private LocalDateTime modifiedOn;
}
