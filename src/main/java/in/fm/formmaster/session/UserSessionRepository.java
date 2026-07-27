package in.fm.formmaster.session;
import in.fm.formmaster.User.User;
import jakarta.persistence.Id;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserSessionRepository extends JpaRepository<UserSession, String> {

    boolean existsByTokenidAndActive(
            String tokenid,
            int active
    );

    Optional<UserSession> findByUserAndActive(
            User user,
            int active
    );
    Optional<UserSession> findByTokenidAndActive(
            String tokenid,
            int active
    );
}
