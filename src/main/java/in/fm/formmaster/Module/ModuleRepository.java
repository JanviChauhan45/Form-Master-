package in.fm.formmaster.Module;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ModuleRepository extends JpaRepository<Module,Long> {

    boolean existsByModuleName(String moduleName);
    List<Module> findByActiveNot(Integer active);


}
