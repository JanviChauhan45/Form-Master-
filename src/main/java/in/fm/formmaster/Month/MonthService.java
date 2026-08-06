package in.fm.formmaster.Month;

import java.util.List;

public interface MonthService {
    MonthDTO addMonth(MonthDTO dto);
    MonthDTO updateMonth(Long id, MonthDTO dto);
    String deleteMonth(Long id);
    List<MonthDTO> getMonths();
    MonthDTO getMonth(Long id);
}
