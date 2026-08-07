package in.fm.formmaster.ModuleCharacteristicsMapping;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ModuleCharRepository extends JpaRepository<ModuleCharacteristicsMapping,Long> {
    Optional<ModuleCharacteristicsMapping> findById(Long id);
    List<ModuleCharacteristicsMapping> findByActiveNot(Integer active);
    List<ModuleCharacteristicsMapping> findByModuleId_IdAndActive(Long moduleId, Integer active);

}
