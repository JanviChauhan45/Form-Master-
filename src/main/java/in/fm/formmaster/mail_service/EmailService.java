package in.fm.formmaster.mail_service;

public interface EmailService {
    //for sending simple email
    String sendSimpleMail(MailDetailsDTO dto);

    //to send email with attachment
    String sendMailAttachment(MailDetailsDTO dto);


}
