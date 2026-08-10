package in.fm.formmaster.SubCharacteristics;

import in.fm.formmaster.Characteristics.CharacteristicsDTO;

import java.util.List;

public interface SubCharacteristicsService {
    SubCharacteristicsDTO add(SubCharacteristicsDTO dto);
    SubCharacteristicsDTO update(Long id,SubCharacteristicsDTO dto);
    String delete(Long id);
    SubCharacteristicsDTO findById(Long id);
    List<SubCharacteristicsDTO> findAll();
    public List<SubCharacteristicsDTO> findAllByCharacteristicsId(Long charid);

}
