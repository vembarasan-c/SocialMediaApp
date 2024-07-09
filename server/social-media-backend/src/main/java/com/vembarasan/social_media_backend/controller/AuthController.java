package com.vembarasan.social_media_backend.controller;


import com.vembarasan.social_media_backend.service.AuthenticationService;
import com.vembarasan.social_media_backend.model.User;
import com.vembarasan.social_media_backend.model.AuthenticationResponse;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin("http://localhost:5173/")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationService authenticationService;

    public AuthController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }


    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody User req) {

        return ResponseEntity.ok(authenticationService.register(req));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody User req) {
        return ResponseEntity.ok(authenticationService.authenticate(req));
    }


    @GetMapping("/user/{username}")
    public User getUser(@PathVariable String username){
        return authenticationService.getUser(username);
    }

    @GetMapping("/adminonly")
    public ResponseEntity<String>  adminonly(){
        return ResponseEntity.ok("Admin only access");
    }

}