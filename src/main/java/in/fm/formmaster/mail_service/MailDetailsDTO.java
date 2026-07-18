package in.fm.formmaster.mail_service;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MailDetailsDTO {
    private String recipient;
    private String subject;
    private String content;
    private String attachment;

}
