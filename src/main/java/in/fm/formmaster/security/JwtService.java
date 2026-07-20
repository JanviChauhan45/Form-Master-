package in.fm.formmaster.security;

import in.fm.formmaster.User.CustomUserDetails;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtService {

    private static final String SECRET_KEY =
            "thisIsAVeryLongSecretKeyForHS384AlgorithmMustBeAtLeast48BytesLong123456";



    private SecretKey getSigningKey() {
        return Keys.hmacShaKeyFor(
                SECRET_KEY.getBytes(StandardCharsets.UTF_8)
        );
    }
    private String createToken(
            Map<String, Object> claims,
            UserDetails userDetails,
            String tokenId) {

        return Jwts.builder()
                .claims(claims)
                .subject(userDetails.getUsername())


                .id(tokenId)

                .issuedAt(new Date())
                .expiration(
                        new Date(
                                System.currentTimeMillis()
                                        + 1000 * 60 * 60
                        )
                )
                .signWith(getSigningKey())
                .compact();
    }

    public String generateToken(
            UserDetails userDetails,
            String tokenId) {

        Map<String, Object> claims = new HashMap<>();

        CustomUserDetails customUser =
                (CustomUserDetails) userDetails;

        claims.put(
                "role",
                customUser.getUser()
                        .getRoleid()
                        .getRole()
        );

        return createToken(
                claims,
                userDetails,
                tokenId
        );
    }

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public String extractTokenId(String token) {

        return extractClaim(
                token,
                Claims::getId
        );
    }

    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public <T> T extractClaim(String token,
                              Function<Claims, T> claimsResolver) {

        Claims claims = Jwts.parser()
                .verifyWith(getSigningKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();

        return claimsResolver.apply(claims);
    }

    public boolean isTokenValid(String token,
                                UserDetails userDetails) {

        final String username = extractUsername(token);

        return username.equals(userDetails.getUsername())
                && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {

        return extractExpiration(token)
                .before(new Date());

    }
    public String extractRole(String token) {

        return extractClaim(
                token,
                claims -> claims.get("role", String.class)
        );
    }

}