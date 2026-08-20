package in.fm.formmaster.Question;

import in.fm.formmaster.AnswerType.AnswerType;
import in.fm.formmaster.AnswerType.AnswerTypeRepository;
import in.fm.formmaster.Form.Form;
import in.fm.formmaster.Form.FormRepository;
import in.fm.formmaster.User.User;
import in.fm.formmaster.User.UserMapper;
import in.fm.formmaster.constants.AppConstants;
import in.fm.formmaster.exception.ResourceNotFound;
import in.fm.formmaster.utility.RequestUtils;
import in.fm.formmaster.utility.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private FormRepository formRepository;

    @Autowired
    private AnswerTypeRepository ansrepo;


    // =========================================================
    // CREATE
    // =========================================================

    @Override
    public QuestionDTO createQuestion(QuestionDTO dto) {

        User loggedInUser = SecurityUtils.getLoggedInUser();

        Question question = new Question();


        // -----------------------------------------------------
        // 1. Find Answer Type
        // -----------------------------------------------------

        AnswerType answerType =
                ansrepo.findById(dto.getAnswertypeid())
                        .orElseThrow(() ->
                                new ResourceNotFound(
                                        "AnswerType not found at Id "
                                                + dto.getAnswertypeid()
                                )
                        );


        // -----------------------------------------------------
        // 2. Find Form
        // -----------------------------------------------------

        Form form =
                formRepository.findById(dto.getFormid())
                        .orElseThrow(() ->
                                new ResourceNotFound(
                                        "Form not found at Id "
                                                + dto.getFormid()
                                )
                        );


        // -----------------------------------------------------
        // 3. Set Question data
        // -----------------------------------------------------

        question.setQuestionname(
                dto.getQuestionname()
        );

        question.setLabel(
                dto.getLabel()
        );

        question.setDescription(
                dto.getDescription()
        );

        question.setValidate(
                dto.getValidate()
        );

        question.setRequired(
                dto.getRequired()
        );

        question.setActive(
                AppConstants.ACTIVE
        );


        // -----------------------------------------------------
        // 4. Set relationships
        // -----------------------------------------------------

        question.setAnswertypeid(
                answerType
        );

        question.setFormid(
                form
        );


        // -----------------------------------------------------
        // 5. Audit
        // -----------------------------------------------------

        question.setCreatedBy(
                loggedInUser
        );

        question.setModifiedBy(
                loggedInUser
        );

        question.setIpAddress(
                RequestUtils.getIpAddress()
        );


        // -----------------------------------------------------
        // 6. Save
        // -----------------------------------------------------

        Question saved =
                questionRepository.save(question);


        // -----------------------------------------------------
        // 7. Entity → DTO
        // -----------------------------------------------------

        return mapToDTO(saved);
    }


    // =========================================================
    // UPDATE
    // =========================================================

    @Override
    public QuestionDTO updateQuestion(Long id, QuestionDTO dto) {

        User loggedInUser =
                SecurityUtils.getLoggedInUser();


        // -----------------------------------------------------
        // 1. Find existing Question
        // -----------------------------------------------------

        Question question =
                questionRepository.findById(id)
                        .orElseThrow(() ->
                                new ResourceNotFound(
                                        "Question not found at Id "
                                                + id
                                )
                        );


        // -----------------------------------------------------
        // 2. Check if Question is deleted
        // -----------------------------------------------------

        if (question.getActive() != null &&
                question.getActive().equals(9)) {

            throw new ResourceNotFound(
                    "Question is already deleted"
            );
        }


        // -----------------------------------------------------
        // 3. Find Answer Type
        // -----------------------------------------------------

        AnswerType answerType =
                ansrepo.findById(dto.getAnswertypeid())
                        .orElseThrow(() ->
                                new ResourceNotFound(
                                        "AnswerType not found at Id "
                                                + dto.getAnswertypeid()
                                )
                        );


        // -----------------------------------------------------
        // 4. Find Form
        // -----------------------------------------------------

        Form form =
                formRepository.findById(dto.getFormid())
                        .orElseThrow(() ->
                                new ResourceNotFound(
                                        "Form not found at Id "
                                                + dto.getFormid()
                                )
                        );


        // -----------------------------------------------------
        // 5. Update Question data
        // -----------------------------------------------------

        question.setQuestionname(
                dto.getQuestionname()
        );

        question.setLabel(
                dto.getLabel()
        );

        question.setDescription(
                dto.getDescription()
        );

        question.setValidate(
                dto.getValidate()
        );

        question.setRequired(
                dto.getRequired()
        );


        // -----------------------------------------------------
        // 6. Update relationships
        // -----------------------------------------------------

        question.setAnswertypeid(
                answerType
        );

        question.setFormid(
                form
        );


        // -----------------------------------------------------
        // 7. Modified audit
        // -----------------------------------------------------

        question.setModifiedBy(
                loggedInUser
        );

        question.setIpAddress(
                RequestUtils.getIpAddress()
        );


        // -----------------------------------------------------
        // 8. Save
        // -----------------------------------------------------

        Question updated =
                questionRepository.save(question);


        return mapToDTO(updated);
    }


    // =========================================================
    // DELETE
    // =========================================================

    @Override
    public String deleteQuestion(Long id) {

        User loggedInUser =
                SecurityUtils.getLoggedInUser();


        // -----------------------------------------------------
        // 1. Find Question
        // -----------------------------------------------------

        Question question =
                questionRepository.findById(id)
                        .orElseThrow(() ->
                                new ResourceNotFound(
                                        "Question not found at Id "
                                                + id
                                )
                        );


        // -----------------------------------------------------
        // 2. Check already deleted
        // -----------------------------------------------------

        if (question.getActive() != null &&
                question.getActive().equals(9)) {

            throw new ResourceNotFound(
                    "Question is already deleted"
            );
        }


        // -----------------------------------------------------
        // 3. Soft delete
        // -----------------------------------------------------

        question.setActive(9);


        // -----------------------------------------------------
        // 4. Audit
        // -----------------------------------------------------

        question.setModifiedBy(
                loggedInUser
        );

        question.setIpAddress(
                RequestUtils.getIpAddress()
        );


        // -----------------------------------------------------
        // 5. Save
        // -----------------------------------------------------

        questionRepository.save(question);


        return "Question deleted successfully";
    }


    // =========================================================
    // GET ALL
    // =========================================================

    @Override
    public List<QuestionDTO> getAllQuestions() {

        List<Question> list =
                questionRepository.findByActiveNot(9);

        return list.stream()
                .map(this::mapToDTO)
                .toList();
    }


    // =========================================================
    // GET BY ID
    // =========================================================

    @Override
    public QuestionDTO getQuestion(Long id) {

        Question question =
                questionRepository.findById(id)
                        .orElseThrow(() ->
                                new ResourceNotFound(
                                        "Question not found at Id "
                                                + id
                                )
                        );


        if (question.getActive() != null &&
                question.getActive().equals(9)) {

            throw new ResourceNotFound(
                    "Question not found at Id "
                            + id
            );
        }


        return mapToDTO(question);
    }


    // =========================================================
    // ENTITY → DTO
    // =========================================================

    private QuestionDTO mapToDTO(Question question) {

        QuestionDTO dto = new QuestionDTO();


        dto.setId(
                question.getId()
        );


        dto.setQuestionname(
                question.getQuestionname()
        );


        dto.setLabel(
                question.getLabel()
        );


        // -----------------------------------------------------
        // Answer Type
        // -----------------------------------------------------

        if (question.getAnswertypeid() != null) {

            dto.setAnswertypeid(
                    question.getAnswertypeid()
                            .getId()
            );
        }


        // -----------------------------------------------------
        // Form
        // -----------------------------------------------------

        if (question.getFormid() != null) {

            dto.setFormid(
                    question.getFormid()
                            .getId()
            );
        }


        dto.setDescription(
                question.getDescription()
        );


        dto.setValidate(
                question.getValidate()
        );


        dto.setRequired(
                question.getRequired()
        );


        dto.setActive(
                question.getActive()
        );


        // -----------------------------------------------------
        // Created By
        // -----------------------------------------------------

        if (question.getCreatedBy() != null) {

            dto.setCreatedBy(
                    UserMapper.toSummaryDTO(
                            question.getCreatedBy()
                    )
            );
        }


        // -----------------------------------------------------
        // Modified By
        // -----------------------------------------------------

        if (question.getModifiedBy() != null) {

            dto.setModifiedBy(
                    UserMapper.toSummaryDTO(
                            question.getModifiedBy()
                    )
            );
        }


        // -----------------------------------------------------
        // Dates
        // -----------------------------------------------------

        dto.setCreatedOn(
                question.getCreatedOn()
        );

        dto.setModifiedOn(
                question.getModifiedOn()
        );


        return dto;
    }
}