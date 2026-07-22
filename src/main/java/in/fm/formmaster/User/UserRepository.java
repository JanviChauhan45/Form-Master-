package in.fm.formmaster.User;

import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findById(Long id);
    boolean existsById(Long id);
    boolean existsByEmailIgnoreCase(String email);
    List<User> findByActiveNot(Integer active);
    Optional<User> findByEmail(String email);




}
