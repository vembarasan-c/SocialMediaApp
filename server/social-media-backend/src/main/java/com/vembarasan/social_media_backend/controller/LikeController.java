package com.vembarasan.social_media_backend.controller;

import com.vembarasan.social_media_backend.service.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("/api/likes")
public class LikeController {

    @Autowired
    private LikeService likeService;

    @PostMapping("/{postId}")
    public ResponseEntity<Void> likePost(@RequestParam Long userId, @PathVariable Long postId) {
        System.out.println(userId +" "+ postId);
        likeService.likePost(userId, postId);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{postId}")
    public ResponseEntity<Void> unlikePost(@RequestParam Long userId, @PathVariable Long postId) {
        likeService.unlikePost(userId, postId);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{postId}/count")
    public ResponseEntity<Long> getLikeCount(@PathVariable Long postId) {
        long count = likeService.getLikeCount(postId);
        return ResponseEntity.ok(count);
    }

    @GetMapping("/check")
    public ResponseEntity<Boolean> hasLiked(@RequestParam Long userId, @RequestParam Long postId) {
        boolean liked = likeService.hasLiked(userId, postId);
        return ResponseEntity.ok(liked);
    }


}
