package in.fm.formmaster.Month;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MonthRepository extends JpaRepository<Month,Long> {

    boolean existsByMonthname(String Monthname);
    List<Month> findByActiveNot(Integer active);
    Optional<Month> findById(Long id);
}
