package in.fm.formmaster.AnswerType;

import in.fm.formmaster.User.User;
import in.fm.formmaster.User.UserMapper;
import in.fm.formmaster.constants.AnsTypeConstant;
import in.fm.formmaster.constants.AppConstants;
import in.fm.formmaster.exception.ResourceAlreadyExists;
import in.fm.formmaster.utility.RequestUtils;
import in.fm.formmaster.utility.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnswerTypeServiceImpl implements AnswerTypeService {
    @Autowired
    private AnswerTypeRepository repo;
    @Override
    public List<AnswerTypeDTO> getAll() {

        List<AnswerType> list = repo.findByActiveNot(9);

        return list.stream().map(anstype -> {

            AnswerTypeDTO dto = new AnswerTypeDTO();

            dto.setId(anstype.getId());
            dto.setAnswerTypename(anstype.getAnswerTypename());
            dto.setActive(anstype.getActive());
            dto.setValidate(anstype.getValidate());
            dto.setCreatedOn(anstype.getCreatedOn());
            dto.setModifiedOn(anstype.getModifiedOn());

            dto.setCreatedBy(UserMapper.toSummaryDTO(anstype.getCreatedBy()));
            dto.setModifiedBy(UserMapper.toSummaryDTO(anstype.getModifiedBy()));

            return dto;

        }).toList();
    }

    @Override
    public AnswerTypeDTO save(AnswerTypeDTO dto) {
        if(repo.existsByAnswerTypeName(dto.getAnswerTypename())){
            throw new ResourceAlreadyExists("Answer Type Name Already Exists");
        }
        User loggedInUser = SecurityUtils.getLoggedInUser();
        AnswerType answerType = new AnswerType();
        answerType.setAnswerTypename(dto.getAnswerTypename());
        answerType.setActive(AppConstants.ACTIVE);
        answerType.setValidate(AnsTypeConstant.INVALID);
        answerType.setCreatedBy(loggedInUser);
        answerType.setModifiedBy(loggedInUser);
        answerType.setIpAddress(RequestUtils.getIpAddress());
        AnswerType saved = repo.save(answerType);

        AnswerTypeDTO answerTypeDTO = new AnswerTypeDTO();
        answerTypeDTO.setId(saved.getId());
        answerTypeDTO.setAnswerTypename(saved.getAnswerTypename());
        answerTypeDTO.setActive(saved.getActive());
        answerTypeDTO.setValidate(saved.getValidate());
        answerTypeDTO.setCreatedBy(UserMapper.toSummaryDTO(saved.getCreatedBy()));
        answerTypeDTO.setModifiedBy(UserMapper.toSummaryDTO(saved.getModifiedBy()));
        answerTypeDTO.setCreatedOn(saved.getCreatedOn());
        answerTypeDTO.setModifiedOn(saved.getModifiedOn());


        return null;
    }

    @Override
    public AnswerTypeDTO update(AnswerTypeDTO dto) {
        return null;
    }

    @Override
    public String delete(Integer id) {
        return "";
    }

    @Override
    public AnswerTypeDTO get(Integer id) {
        return null;
    }
}
