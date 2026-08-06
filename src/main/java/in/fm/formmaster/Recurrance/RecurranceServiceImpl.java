package in.fm.formmaster.Recurrance;

import in.fm.formmaster.User.User;
import in.fm.formmaster.constants.AppConstants;
import in.fm.formmaster.exception.ResourceAlreadyExists;
import in.fm.formmaster.utility.RequestUtils;
import in.fm.formmaster.utility.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecurranceServiceImpl implements RecurranceService {
    @Autowired
    private RecurranceRepository repo;

    @Override
    public RecurranceDTO create(RecurranceDTO dto) {
        if(repo.existsByRecurranceName(dto.getRecurranceName())){
            throw new ResourceAlreadyExists("Recurrance already exists");
        }
        User loggedInUser = SecurityUtils.getLoggedInUser();

        Recurrance recurrance = new Recurrance();

        recurrance.setRecurranceName(dto.getRecurranceName());
        recurrance.setActive(AppConstants.ACTIVE);
        recurrance.setCreatedBy(loggedInUser);
        recurrance.setModifiedBy(loggedInUser);
        recurrance.setIpAddress(RequestUtils.getIpAddress());

        Recurrance saved = repo.save(recurrance);

        RecurranceDTO dto1 = new RecurranceDTO();
        dto1.setRecurranceName(dto.getRecurranceName());
        dto1.setActive(saved.getActive());
        dto1.setCreatedOn(saved.getCreatedOn());
        dto1.setModifiedOn(saved.getModifiedOn());
        dto1.setCreatedOn(saved.getCreatedOn());
        dto1.setModifiedOn(saved.getModifiedOn());

        return dto1;


    }

    @Override
    public RecurranceDTO update(Long id, RecurranceDTO dto) {
        return null;
    }

    @Override
    public String delete(Long id) {
        return "";
    }

    @Override
    public RecurranceDTO get(Long id) {
        return null;
    }

    @Override
    public List<RecurranceDTO> getAll() {
        List<Recurrance> recurrances = repo.findByActiveNot(9);
        return recurrances.stream().map(rec ->{
            RecurranceDTO dto = new RecurranceDTO();
            dto.setRecurranceName(rec.getRecurranceName());
            dto.setActive(rec.getActive());
            dto.setCreatedOn(rec.getCreatedOn());
            dto.setModifiedOn(rec.getModifiedOn());
            dto.setCreatedOn(rec.getCreatedOn());
            dto.setModifiedOn(rec.getModifiedOn());
            return dto;

        }).toList();

    }
}
