package in.fm.formmaster.SubCharacteristics;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface SubCharacterisicsRepository
        extends JpaRepository<SubCharacteristics, Long> {

    List<SubCharacteristics> findByActiveNot(Integer active);

    List<SubCharacteristics> findByCharid_IdAndActive(
            Long charid,
            Integer active
    );
}
