package in.fm.formmaster.ModuleCharacteristicsMapping;

import in.fm.formmaster.User.UserSummaryDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ModuleCharacterMappingDTO {
    private Long id;
    private Long characteristicsId;
    private Long moduleId;
    private String moduleName;
    private String characteristicsName;
    private Integer active;
    private UserSummaryDTO createdBy;
    private UserSummaryDTO modifiedBy;
    private LocalDateTime createdOn;
    private LocalDateTime modifiedOn;
}
