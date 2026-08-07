package in.fm.formmaster.SubCharacteristics;

import java.util.List;

public interface SubCharacteristicsService {
    SubCharacteristicsDTO add(SubCharacteristicsDTO dto);
    SubCharacteristicsDTO update(Long id,SubCharacteristicsDTO dto);
    String delete(Long id);
    SubCharacteristicsDTO findById(Long id);
    List<SubCharacteristicsDTO> findAll();

}
