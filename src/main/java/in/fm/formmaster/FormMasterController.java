package in.fm.formmaster;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FormMasterController {

    @GetMapping("/index")
    public String indexPage() {

        return "index";
    }

    @GetMapping("/master_users")
    public String masterUsers() {

        return "master_users";
    }

    @GetMapping("/master_form")
    public String masterForm() {

        return "master_form";
    }

    @GetMapping("/profile")
    public String profilePage() {
        return "profile";
    }

    @GetMapping("/fill_forms")
    public String fillForms() {

        return "fill_forms";
    }

    @GetMapping("/complete_forms")
    public String completeForms() {

        return "complete_forms";
    }
}
