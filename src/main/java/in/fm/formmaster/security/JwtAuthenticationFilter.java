package in.fm.formmaster.security;

import in.fm.formmaster.User.CustomUserDetailsService;
import in.fm.formmaster.constants.AppConstants;
import in.fm.formmaster.session.UserSession;
import in.fm.formmaster.session.UserSessionRepository;
import io.jsonwebtoken.JwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.time.Instant;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final CustomUserDetailsService userDetailsService;
    private final UserSessionRepository userSessionRepository;

    public JwtAuthenticationFilter(
            JwtService jwtService,
            CustomUserDetailsService userDetailsService,
            UserSessionRepository userSessionRepository) {

        this.jwtService = jwtService;
        this.userDetailsService = userDetailsService;
        this.userSessionRepository = userSessionRepository;
    }

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain)
            throws ServletException, IOException {

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

        if (jwt == null || jwt.isBlank()) {

            filterChain.doFilter(request, response);
            return;
        }

        try {

            String email = jwtService.extractUsername(jwt);

            String tokenId = jwtService.extractTokenId(jwt);

            UserSession session =
                    tokenId == null
                            ? null
                            : userSessionRepository
                            .findByTokenidAndActive(
                                    tokenId,
                                    AppConstants.ACTIVE
                            )
                            .orElse(null);


            if (session == null) {

                System.out.println("JWT session does not exist or is inactive.");

                filterChain.doFilter(request, response);
                return;
            }

            // Session expired
            if (session.getExpiryAt().isBefore(Instant.now())) {

                session.setActive(AppConstants.INACTIVE);

                userSessionRepository.save(session);

                System.out.println("JWT session expired. Marked as INACTIVE.");

                SecurityContextHolder.clearContext();

                filterChain.doFilter(request, response);

                return;
            }



            if (email != null
                    && SecurityContextHolder.getContext().getAuthentication() == null) {

                UserDetails userDetails =
                        userDetailsService.loadUserByUsername(email);

                if (jwtService.isTokenValid(jwt, userDetails)) {

                    UsernamePasswordAuthenticationToken authToken =
                            new UsernamePasswordAuthenticationToken(
                                    userDetails,
                                    null,
                                    userDetails.getAuthorities()
                            );

                    authToken.setDetails(
                            new WebAuthenticationDetailsSource()
                                    .buildDetails(request)
                    );

                    SecurityContextHolder
                            .getContext()
                            .setAuthentication(authToken);

                    System.out.println("JWT VALID - User Authenticated");
                    System.out.println("Authorities = " + userDetails.getAuthorities());
                }
            }

        } catch (JwtException | IllegalArgumentException e) {

            System.out.println("Invalid JWT: " + e.getMessage());

            SecurityContextHolder.clearContext();
        }

        filterChain.doFilter(request, response);
    }
}