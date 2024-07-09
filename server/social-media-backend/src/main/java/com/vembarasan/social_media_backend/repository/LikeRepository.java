package com.vembarasan.social_media_backend.repository;

import com.vembarasan.social_media_backend.model.Like;
import com.vembarasan.social_media_backend.model.Post;
import com.vembarasan.social_media_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LikeRepository extends JpaRepository<Like, Long> {
    boolean existsByUserAndPost(User user, Post post);
    long countByPost(Post post);
    Like findByUserAndPost(User user, Post post);
}
