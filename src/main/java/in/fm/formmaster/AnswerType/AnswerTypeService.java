package in.fm.formmaster.AnswerType;

import java.util.List;

public interface AnswerTypeService {
    List<AnswerTypeDTO> getAll();
    AnswerTypeDTO save(AnswerTypeDTO dto);
    AnswerTypeDTO update(AnswerTypeDTO dto);
    String delete(Long id);
    AnswerTypeDTO get(Long id);

}
