package in.fm.formmaster.Question;

import java.util.List;

public interface QuestionService {

    QuestionDTO createQuestion(QuestionDTO dto);

    QuestionDTO updateQuestion(Long id, QuestionDTO dto);

    String deleteQuestion(Long id);

    QuestionDTO getQuestion(Long id);

    List<QuestionDTO> getAllQuestions();
}
