package com.vembarasan.social_media_backend.repository;

import com.vembarasan.social_media_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    public Optional<User> findByUsername(String username);

}
