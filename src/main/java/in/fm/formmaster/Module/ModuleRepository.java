package in.fm.formmaster.Module;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ModuleRepository extends JpaRepository<Module,Long> {

    boolean existsByModuleName(String moduleName);

}
