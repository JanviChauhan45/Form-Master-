package in.fm.formmaster.Form;

import org.springframework.stereotype.Service;

import java.util.List;


public interface FormService {
    FormDTO addForm(FormDTO dto);
    FormDTO updateForm(FormDTO dto,Long id);
    String delete(Long id);
    List<FormDTO> getAll();
    FormDTO getById(Long id);
}
