package in.fm.formmaster.SubCharacteristics;

import in.fm.formmaster.Characteristics.Characteristics;
import in.fm.formmaster.Characteristics.CharacteristicsDTO;
import in.fm.formmaster.Characteristics.CharacteristicsRepository;
import in.fm.formmaster.User.User;
import in.fm.formmaster.User.UserMapper;
import in.fm.formmaster.constants.AppConstants;
import in.fm.formmaster.exception.ResourceNotFound;
import in.fm.formmaster.utility.RequestUtils;
import in.fm.formmaster.utility.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
public class SubCharacteristicsImpl implements SubCharacteristicsService {
    @Autowired
    private SubCharacterisicsRepository repo;

    @Autowired
    private CharacteristicsRepository charRepo;

    @Override
    public SubCharacteristicsDTO add(SubCharacteristicsDTO dto) {
        User loggedInUser = SecurityUtils.getLoggedInUser();
        SubCharacteristics  sub = new SubCharacteristics();

        sub.setName(dto.getName());
        Characteristics characteristics = charRepo.findById(dto.getCharid())
                .orElseThrow(() -> new ResourceNotFound("Characteristics not found"));
        sub.setCharid(characteristics);
        sub.setActive(AppConstants.ACTIVE);
        sub.setCreatedBy(loggedInUser);
       // sub.setModifiedBy(loggedInUser);
        sub.setIpAddress(RequestUtils.getIpAddress());


        SubCharacteristics saved = repo.save(sub);

        SubCharacteristicsDTO savedDTO = new SubCharacteristicsDTO();
        savedDTO.setId(saved.getId());
        savedDTO.setName(saved.getName());
        savedDTO.setCharid(saved.getCharid().getId());
        savedDTO.setActive(saved.getActive());
        savedDTO.setCreatedBy(UserMapper.toSummaryDTO(saved.getCreatedBy()));
       // savedDTO.setModifiedBy(UserMapper.toSummaryDTO(saved.getModifiedBy()));
        savedDTO.setCreatedOn(saved.getCreatedOn());
        //savedDTO.setModifiedOn(saved.getModifiedOn());


        return savedDTO;
    }

    @Override
    public SubCharacteristicsDTO update(Long id, SubCharacteristicsDTO dto) {
        return null;
    }

    @Override
    public String delete(Long id) {
        return "";
    }

    @Override
    public SubCharacteristicsDTO findById(Long id) {
        try{
            SubCharacteristics sc = repo.findById(id).orElseThrow(() -> new ResourceNotFound("SubCharacteristics not found"));
            SubCharacteristicsDTO dto = new SubCharacteristicsDTO();
            dto.setId(sc.getId());
            dto.setName(sc.getName());
            dto.setCharid(sc.getCharid().getId());
            dto.setActive(sc.getActive());
            dto.setCreatedOn(sc.getCreatedOn());
            dto.setModifiedBy(UserMapper.toSummaryDTO(sc.getModifiedBy()));
            dto.setModifiedOn(sc.getModifiedOn());
            dto.setCreatedBy(UserMapper.toSummaryDTO(sc.getCreatedBy()));

            return dto;
        }catch(Exception e){
            throw new IllegalArgumentException(e);
        }

    }

    @Override
    public List<SubCharacteristicsDTO> findAll() {
        List<SubCharacteristics> list = repo.findByActiveNot(9);
        return list.stream().map( li -> {
            SubCharacteristicsDTO dto = new SubCharacteristicsDTO();
            dto.setId(li.getId());
            dto.setName(li.getName());
            dto.setCharid(li.getCharid().getId());
            dto.setActive(li.getActive());

            dto.setCreatedOn(li.getCreatedOn());
            dto.setModifiedOn(li.getModifiedOn());
            dto.setModifiedBy(UserMapper.toSummaryDTO(li.getModifiedBy()));
            dto.setCreatedBy(UserMapper.toSummaryDTO(li.getCreatedBy()));
            return dto;
        }).toList();

    }

    @Override
    public List<SubCharacteristicsDTO> findAllByCharacteristicsId(Long charid) {

        List<SubCharacteristics> list =
                repo.findByCharid_IdAndActive(
                        charid,
                        AppConstants.ACTIVE
                );

        return list.stream().map(sc -> {

            SubCharacteristicsDTO dto = new SubCharacteristicsDTO();

            dto.setId(sc.getId());
            dto.setName(sc.getName());
            dto.setCharid(sc.getCharid().getId());
            dto.setActive(sc.getActive());

            dto.setCreatedOn(sc.getCreatedOn());
            dto.setModifiedOn(sc.getModifiedOn());

            if (sc.getCreatedBy() != null) {
                dto.setCreatedBy(
                        UserMapper.toSummaryDTO(sc.getCreatedBy())
                );
            }

            if (sc.getModifiedBy() != null) {
                dto.setModifiedBy(
                        UserMapper.toSummaryDTO(sc.getModifiedBy())
                );
            }

            return dto;

        }).toList();
    }


}
