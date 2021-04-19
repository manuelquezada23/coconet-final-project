package com.example.springboot.security.token.repository;

import com.example.springboot.security.token.SecureToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SecureTokenRepository extends JpaRepository<SecureToken, Long > {

    SecureToken findByToken(final String token);
    Long removeByToken(String token);
}