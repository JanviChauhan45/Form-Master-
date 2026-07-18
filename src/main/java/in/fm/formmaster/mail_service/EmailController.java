package in.fm.formmaster.mail_service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class EmailController {

    @Autowired
    private EmailService emailService;
    @PostMapping("/sendMail")
    public String sendMail(@RequestBody MailDetailsDTO dto){

        return emailService.sendSimpleMail(dto);
    }
}
