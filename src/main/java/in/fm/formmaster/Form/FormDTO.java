package in.fm.formmaster.Form;

import in.fm.formmaster.User.UserSummaryDTO;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FormDTO {

    private Long id;
    @Size(min = 3 , max = 50 , message = "Title must be between 3 and 50 characters")
    @NotBlank(message = "Title name is required")
    private String title;
    @Size(min= 2,max = 10 , message = "Alias must be between 2 and 10 characters")
    @NotBlank(message = "Alias name is required")
    private String alias;
    @Size(min = 10,max = 255,message = "Description must be between 10 and 255 characters")
    @NotBlank(message = "Description is required")
    private String description;

    @NotNull(message= "Module is required")
    private Long moduleid;
    @NotNull(message = "Characteristics Id is required")
    private Long characteristicsid;
    @NotNull(message = "SubCharacteristics Id is required")
    private Long subCharacteristicsid;
    @NotNull(message = "RecurranceId is required")
    private Long recurranceid;
    @NotNull(message = "Month is required")
    private Long month;
    @NotBlank(message = "Effective Date is required")
    private String effectiveDate;
    @Size(min = 5 , max = 70 , message = "Compliance Period must be between 5 and 70 characters")
    @NotBlank(message = "Compliance Period is required")
    private String compliancePeriod;
    private Integer active;

    private UserSummaryDTO createdBy;
    private UserSummaryDTO modifiedBy;
    private LocalDateTime createdOn;
    private LocalDateTime modifiedOn;

}
