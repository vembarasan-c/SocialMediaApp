package com.vembarasan.social_media_backend.service;

import com.vembarasan.social_media_backend.model.Like;
import com.vembarasan.social_media_backend.model.Post;
import com.vembarasan.social_media_backend.model.User;
import com.vembarasan.social_media_backend.repository.LikeRepository;
import com.vembarasan.social_media_backend.repository.PostRepository;
import com.vembarasan.social_media_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LikeService {

    @Autowired
    private LikeRepository likeRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PostRepository postRepository;



    public void likePost(Long userId, Long postId) {
        User user = userRepository.findById(userId).orElseThrow();
        Post post = postRepository.findById(postId).orElseThrow();
        if (likeRepository.existsByUserAndPost(user, post)) {
            throw new RuntimeException("User already liked this post");
        }
        Like like = new Like();
        like.setUser(user);
        like.setPost(post);
        likeRepository.save(like);
    }

    public void unlikePost(Long userId, Long postId) {
        User user = userRepository.findById(userId).orElseThrow();
        Post post = postRepository.findById(postId).orElseThrow();
        Like like = likeRepository.findByUserAndPost(user, post);
        if (like != null) {
            likeRepository.delete(like);
        }
    }

    public long getLikeCount(Long postId) {
        Post post = postRepository.findById(postId).orElseThrow();
        return likeRepository.countByPost(post);
    }


    public boolean hasLiked(Long userId, Long postId) {
        User user = userRepository.findById(userId).orElseThrow();
        Post post = postRepository.findById(postId).orElseThrow();
        return likeRepository.existsByUserAndPost(user, post);
    }


}
