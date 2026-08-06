package in.fm.formmaster.Month;

import in.fm.formmaster.User.User;
import in.fm.formmaster.User.UserMapper;
import in.fm.formmaster.constants.AppConstants;
import in.fm.formmaster.exception.ResourceAlreadyExists;
import in.fm.formmaster.exception.ResourceNotFound;
import in.fm.formmaster.utility.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MonthServiceImpl  implements MonthService {
    @Autowired
    private MonthRepository repo;


    @Override
    public MonthDTO addMonth(MonthDTO dto) {
        if(repo.existsByMonthname(dto.getMonthName())){
            throw new ResourceAlreadyExists("Module already exists");
        }

       if(dto.getMonthName() == null || dto.getMonthName().trim().isEmpty()){
           throw new IllegalArgumentException("Month name cannot be empty");
       }

       User loggedInUser = SecurityUtils.getLoggedInUser();
       Month month = new Month();

       month.setMonthname(dto.getMonthName());
       month.setActive(AppConstants.ACTIVE);
       month.setCreatedBy(loggedInUser);
       month.setModifiedBy(loggedInUser);

       Month saved = repo.save(month);

       MonthDTO response = new MonthDTO();
       response.setId(saved.getId());
       response.setMonthName(month.getMonthname());
       response.setActive(AppConstants.ACTIVE);
       response.setCreatedBy(UserMapper.toSummaryDTO(saved.getCreatedBy()));
       response.setModifiedBy(UserMapper.toSummaryDTO(saved.getModifiedBy()));

       response.setCreatedOn(saved.getCreatedOn());
       response.setModifiedOn(saved.getModifiedOn());

        return response;
    }

    @Override
    public MonthDTO updateMonth(Long id, MonthDTO dto) {
        return null;
    }

    @Override
    public String deleteMonth(Long id) {
        return "";
    }

    @Override
    public List<MonthDTO> getMonths() {
        List<Month> months = repo.findByActiveNot(9);
        return months.stream().map(mod ->{
            MonthDTO dto = new MonthDTO();
            dto.setId(mod.getId());
            dto.setMonthName(mod.getMonthname());
            dto.setActive(AppConstants.ACTIVE);
            dto.setCreatedBy(UserMapper.toSummaryDTO(mod.getCreatedBy()));
            dto.setModifiedBy(UserMapper.toSummaryDTO(mod.getModifiedBy()));
            dto.setCreatedOn(mod.getCreatedOn());
            dto.setModifiedOn(mod.getModifiedOn());
            return dto;

        }).toList();


    }

    @Override
    public MonthDTO getMonth(Long id) {
        try{
            Month month = repo.findById(id).orElseThrow(() -> new ResourceNotFound("Month not found "));
            MonthDTO dto = new MonthDTO();
            dto.setId(month.getId());
            dto.setMonthName(month.getMonthname());
            dto.setActive(AppConstants.ACTIVE);
            dto.setCreatedBy(UserMapper.toSummaryDTO(month.getCreatedBy()));
            dto.setModifiedBy(UserMapper.toSummaryDTO(month.getModifiedBy()));
            dto.setCreatedOn(month.getCreatedOn());
            dto.setModifiedOn(month.getModifiedOn());
            return dto;
        }
        catch(Exception e){
            throw new IllegalArgumentException(e);
        }

    }
}
