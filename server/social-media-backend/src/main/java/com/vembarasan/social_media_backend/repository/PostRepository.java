package com.vembarasan.social_media_backend.repository;

import com.vembarasan.social_media_backend.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post,Long> {
}

