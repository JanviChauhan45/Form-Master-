package in.fm.formmaster.Characteristics;

import java.util.List;

public interface CharacteristicsService {
    CharacteristicsDTO create(CharacteristicsDTO dto);
    CharacteristicsDTO update(Long id,CharacteristicsDTO dto);
    String delete(Long id);
    List<CharacteristicsDTO> getAll();
    CharacteristicsDTO getOne(Long id);


}
