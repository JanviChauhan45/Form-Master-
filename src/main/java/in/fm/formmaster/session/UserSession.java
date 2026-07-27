package in.fm.formmaster.session;

import in.fm.formmaster.User.User;
import in.fm.formmaster.constants.AppConstants;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;

@Entity
@Table(name = "user_session")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserSession {
    @Id
    private String tokenid;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "expiry_at", nullable = false)
    private Instant expiryAt;

    @Column(nullable = false)
    private int active = AppConstants.ACTIVE;


}
