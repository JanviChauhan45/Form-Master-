package in.fm.formmaster.session;

import jakarta.persistence.Id;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserSessionRepository extends JpaRepository<UserSession, Long> {
}
