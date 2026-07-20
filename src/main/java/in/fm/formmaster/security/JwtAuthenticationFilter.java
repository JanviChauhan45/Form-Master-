package in.fm.formmaster.security;

import in.fm.formmaster.User.CustomUserDetailsService;
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

            filterChain.doFilter(
                    request,
                    response
            );

            return;
        }




        try {

            // Extract email from "sub" claim
            String email =
                    jwtService.extractUsername(jwt);


            // Extract tokenId from "jti" claim
            String tokenId =
                    jwtService.extractTokenId(jwt);


            // ==========================================
            // STEP 5: Check tokenId exists in database
            // ==========================================

            boolean sessionExists =
                    tokenId != null
                            && userSessionRepository.existsById(tokenId);


            System.out.println("========================");
            System.out.println("Email = " + email);
            System.out.println("Token ID = " + tokenId);
            System.out.println("Session Exists = " + sessionExists);
            System.out.println("========================");



            if (email != null
                    && sessionExists
                    && SecurityContextHolder
                    .getContext()
                    .getAuthentication() == null) {




                UserDetails userDetails =
                        userDetailsService
                                .loadUserByUsername(email);




                if (jwtService.isTokenValid(
                        jwt,
                        userDetails)) {



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


                    System.out.println(
                            "JWT VALID - User Authenticated"
                    );

                    System.out.println(
                            "Authorities = "
                                    + userDetails.getAuthorities()
                    );
                }
            }


            // ==========================================
            // If session does not exist:
            //
            // Do nothing.
            //
            // SecurityContext remains unauthenticated.
            // Spring Security will reject protected APIs.
            // ==========================================

            if (!sessionExists) {

                System.out.println(
                        "JWT session does not exist in database"
                );
            }


        } catch (JwtException | IllegalArgumentException e) {

            // ==========================================
            // JWT can reach here if it is:
            //
            // - Expired
            // - Malformed
            // - Signature invalid
            // - Corrupted
            //
            // Do NOT authenticate the user.
            // ==========================================

            System.out.println(
                    "Invalid JWT: "
                            + e.getMessage()
            );


            // Make absolutely sure the SecurityContext
            // does not contain authentication

            SecurityContextHolder.clearContext();
        }


        // ==========================================
        // STEP 11: Continue the Spring Security
        //          filter chain
        // ==========================================

        filterChain.doFilter(
                request,
                response
        );
    }
}