package com.vembarasan.social_media_backend.controller;


import com.vembarasan.social_media_backend.model.Post;
import com.vembarasan.social_media_backend.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

import java.util.List;


@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("/api/posts")
public class PostController {

    @Autowired
    private PostRepository postRepository;

    private static final String UPLOAD_DIR = "uploads/";

    @GetMapping("/get")
    public List<Post> getAllPosts(){
        return postRepository.findAll();
    }


    @PostMapping("/save")
    public Post createNewPost(@RequestParam("image") MultipartFile file,
                           @RequestParam("content") String content,
                           @RequestParam("imageName") String imageName,
                              @RequestParam("name") String username,
                           @RequestParam("date") String date


    ) throws IOException {

        // Save post details in the database
        Post post = new Post();
        post.setContent(content);
        post.setName(username);
        post.setDate(date);
        post.setImageUrl(file.getOriginalFilename());
        post.setImageName(imageName);
        post.setData(file.getBytes()); // Store image data as byte array
        return postRepository.save(post);
    }
    
    @PutMapping("/{postId}/like")
    public Post updateLike(@PathVariable Long postId){
        Post post = postRepository.findById(postId).orElseThrow();
        post.setLikes(post.getLikes() + 1);
        return postRepository.save(post);
    }

}
