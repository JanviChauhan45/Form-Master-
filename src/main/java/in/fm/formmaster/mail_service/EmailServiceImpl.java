package in.fm.formmaster.mail_service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    @Value("${spring.mail.username}")
    private String sender;

    @Override
    public String sendSimpleMail(MailDetailsDTO dto) {
        try{
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(sender);
            message.setTo(dto.getRecipient());
            message.setSubject(dto.getSubject());
            message.setText(dto.getContent());
            javaMailSender.send(message);


            return "Mail Sent Successfully!";
        }catch (Exception e){
            return "Error sending email";
        }

    }

    @Override
    public String sendMailAttachment(MailDetailsDTO dto) {
        return "";
    }
}
