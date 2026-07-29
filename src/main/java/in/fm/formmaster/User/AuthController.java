package in.fm.formmaster.User;

import in.fm.formmaster.constants.AppConstants;
import in.fm.formmaster.security.JwtService;
import in.fm.formmaster.session.UserSession;
import in.fm.formmaster.session.UserSessionRepository;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserSessionRepository userSessionRepository;


    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> login(
            @RequestBody LoginRequestDTO loginRequest,
            HttpServletResponse response) {



        Authentication authentication =
                authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(
                                loginRequest.getEmail(),
                                loginRequest.getPassword()
                        )
                );




        CustomUserDetails customUserDetails =
                (CustomUserDetails) authentication.getPrincipal();




        User user = customUserDetails.getUser();




        UserSession existingSession =
                userSessionRepository
                        .findByUserAndActive(
                                user,
                                AppConstants.ACTIVE
                        )
                        .orElse(null);

        if (existingSession != null) {

            // If the existing session is still valid, reuse it
            if (existingSession.getExpiryAt().isAfter(java.time.Instant.now())) {

                String token = jwtService.generateToken(
                        customUserDetails,
                        existingSession.getTokenid()   // use your getter name here
                );

                Cookie cookie = new Cookie("jwt", token);
                cookie.setHttpOnly(true);
                cookie.setSecure(false);
                cookie.setPath("/");
                cookie.setMaxAge(60 * 60);

                response.addCookie(cookie);

                return ResponseEntity.ok(
                        new LoginResponseDTO(
                                token,
                                "Bearer",
                                user.getRoleid().getRole()
                        )
                );
            }

            // Existing session has expired
            existingSession.setActive(AppConstants.DELETED);
            userSessionRepository.save(existingSession);
        }

        String tokenId =
                UUID.randomUUID().toString();


        String token =
                jwtService.generateToken(
                        customUserDetails,
                        tokenId
                );




        UserSession userSession =
                new UserSession(
                        tokenId,
                        user,
                        jwtService
                                .extractExpiration(token)
                                .toInstant(),
                        AppConstants.ACTIVE
                );




        userSessionRepository.save(userSession);




        Cookie cookie =
                new Cookie(
                        "jwt",
                        token
                );

        cookie.setHttpOnly(true);


        cookie.setSecure(false);


        cookie.setPath("/");


        cookie.setMaxAge(60 * 60);

        response.addCookie(cookie);




        return ResponseEntity.ok(
                new LoginResponseDTO(
                        token,
                        "Bearer",
                        user.getRoleid().getRole()
                )
        );
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(
            HttpServletRequest request,
            HttpServletResponse response) {


        Cookie[] cookies = request.getCookies();

        String jwt = null;


        if (cookies != null) {

            for (Cookie cookie : cookies) {

                if ("jwt".equals(cookie.getName())) {

                    jwt = cookie.getValue();

                    break;
                }
            }
        }


        if (jwt != null) {

            String tokenId =
                    jwtService.extractTokenId(jwt);

            UserSession session =
                    userSessionRepository.findById(tokenId).orElse(null);

            if (session != null) {

                session.setActive(AppConstants.INACTIVE);

                userSessionRepository.save(session);
            }
        }


        Cookie deleteCookie =
                new Cookie("jwt", null);

        deleteCookie.setHttpOnly(true);

        deleteCookie.setSecure(false);

        deleteCookie.setPath("/");


        deleteCookie.setMaxAge(0);


        response.addCookie(deleteCookie);


        return ResponseEntity.ok(
                "Logged out successfully"
        );
    }


    @GetMapping("/me")
    public ResponseEntity<UserDTO> getCurrentUser(Authentication authentication) {

        CustomUserDetails customUserDetails =
                (CustomUserDetails) authentication.getPrincipal();

        User user = customUserDetails.getUser();

        UserDTO dto = new UserDTO();

        dto.setId(user.getId());
        dto.setFirstname(user.getFirstname());
        dto.setLastname(user.getLastname());
        dto.setEmail(user.getEmail());
        dto.setContactno(user.getContactno());
        dto.setGender(user.getGender());
        dto.setRoleid(user.getRoleid().getId());
        dto.setActive(user.getActive());
        dto.setProfile_img(user.getProfile_img());

        return ResponseEntity.ok(dto);
    }
}