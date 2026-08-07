package in.fm.formmaster.Characteristics;

import in.fm.formmaster.User.User;
import in.fm.formmaster.User.UserMapper;
import in.fm.formmaster.constants.AppConstants;
import in.fm.formmaster.exception.ResourceAlreadyExists;
import in.fm.formmaster.exception.ResourceNotFound;
import in.fm.formmaster.utility.RequestUtils;
import in.fm.formmaster.utility.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CharacteristicsServiceImpl implements CharacteristicsService {
    @Autowired
    private CharacteristicsRepository repo;
    @Override
    public CharacteristicsDTO create(CharacteristicsDTO dto) {
        try {
            if (repo.existsByName(dto.getName())) {
                throw new ResourceAlreadyExists("Characteristics already exists");
            }
            User loggedInUser = SecurityUtils.getLoggedInUser();

            Characteristics charc = new Characteristics();
            charc.setName(dto.getName());
            charc.setActive(AppConstants.ACTIVE);
            charc.setCreatedBy(loggedInUser);
            //charc.setModifiedBy(loggedInUser);
            charc.setIpAddress(RequestUtils.getIpAddress());

            Characteristics saved = repo.save(charc);
            CharacteristicsDTO savedDTO = new CharacteristicsDTO();
            savedDTO.setId(saved.getId());
            savedDTO.setName(saved.getName());
            savedDTO.setActive(saved.getActive());
            savedDTO.setCreatedBy(UserMapper.toSummaryDTO(saved.getCreatedBy()));
          //  savedDTO.setModifiedBy(UserMapper.toSummaryDTO(saved.getModifiedBy()));

            savedDTO.setCreatedOn(saved.getCreatedOn());
            //savedDTO.setModifiedOn(saved.getModifiedOn());

            return savedDTO;
        } catch (IllegalArgumentException e) {
            throw e;
        }

    }

    @Override
    public CharacteristicsDTO update(Long id, CharacteristicsDTO dto) {
        return null;
    }

    @Override
    public String delete(Long id) {
        return "";
    }

    @Override
    public List<CharacteristicsDTO> getAll() {
        try {

            List<Characteristics> list = repo.findByActiveNot(9);
            return list.stream().map(charc -> {
                CharacteristicsDTO dto = new CharacteristicsDTO();
                dto.setId(charc.getId());
                dto.setName(charc.getName());
                dto.setActive(charc.getActive());
                dto.setCreatedBy(UserMapper.toSummaryDTO(charc.getCreatedBy()));
                dto.setModifiedBy(UserMapper.toSummaryDTO(charc.getModifiedBy()));
                dto.setCreatedOn(charc.getCreatedOn());
                dto.setModifiedOn(charc.getModifiedOn());
                return dto;
            }).toList();
        }catch(Exception e){
            throw new IllegalArgumentException(e);
        }
    }

    @Override
    public CharacteristicsDTO getOne(Long id) {
        try{
            Characteristics charc = repo.findById(id).orElseThrow(()-> new ResourceNotFound("Id Not Found"));
            CharacteristicsDTO dto = new CharacteristicsDTO();
            dto.setId(charc.getId());
            dto.setName(charc.getName());
            dto.setActive(charc.getActive());
            dto.setCreatedBy(UserMapper.toSummaryDTO(charc.getCreatedBy()));
            dto.setModifiedBy(UserMapper.toSummaryDTO(charc.getModifiedBy()));
            dto.setCreatedOn(charc.getCreatedOn());
            dto.setModifiedOn(charc.getModifiedOn());

            return dto;

        }catch(Exception e){
            throw new IllegalArgumentException(e);
        }
       
    }
}
