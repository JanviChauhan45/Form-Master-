package in.fm.formmaster.Module;

import in.fm.formmaster.User.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ModuleDTO {
    private Long id;
    private String moduleName;
    private String moduleShortName;
    private Integer  active ;
    private User createdBy;
    private User modifiedBy;
    private LocalDateTime createdOn;
    private LocalDateTime modifiedOn;
}
