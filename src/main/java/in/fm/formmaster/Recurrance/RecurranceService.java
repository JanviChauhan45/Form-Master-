package in.fm.formmaster.Recurrance;

import java.util.List;

public interface RecurranceService {
    RecurranceDTO create(RecurranceDTO dto);
    RecurranceDTO update(Long id,RecurranceDTO dto);
    String delete(Long id);
    RecurranceDTO get(Long id);
    List<RecurranceDTO> getAll();

}
