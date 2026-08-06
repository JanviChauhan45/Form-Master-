package in.fm.formmaster.Characteristics;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CharacteristicsRepository extends JpaRepository<Characteristics, Long> {
    boolean existsByName(String name);
    List<Characteristics> findByActiveNot(Integer active);
}
