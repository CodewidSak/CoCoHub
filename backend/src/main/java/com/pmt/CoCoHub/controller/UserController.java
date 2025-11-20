package com.pmt.CoCoHub.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pmt.CoCoHub.dto.UserSignInDTO;
import com.pmt.CoCoHub.dto.UserSignUpDTO;
import com.pmt.CoCoHub.model.User;
import com.pmt.CoCoHub.service.UserService;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/v1/auth")
public class UserController {
    
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserSignUpDTO userSignUpDTO) {
        try {
            System.out.println("=== Registration Request Received ===");
            System.out.println("Username: " + userSignUpDTO.getUserName());
            System.out.println("Email: " + userSignUpDTO.getEmail());
            System.out.println("Password length: " + (userSignUpDTO.getPassword() != null ? userSignUpDTO.getPassword().length() : "null"));
            
            User user = userService.registerUser(userSignUpDTO);
            
            System.out.println("User registered successfully with ID: " + user.getId());
            
            return ResponseEntity.ok().body(Map.of(
                "message", "User registered successfully",
                "user", Map.of(
                    "id", user.getId(),
                    "userName", user.getUserName(),
                    "email", user.getEmail()
                )
            ));
        } catch (RuntimeException e) {
            System.err.println("Registration error: " + e.getMessage());
            e.printStackTrace();
            return ResponseEntity.badRequest().body(Map.of(
                "message", e.getMessage()
            ));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserSignInDTO userSignInDTO) {
        try {
            Map<String, Object> response = userService.signInUser(userSignInDTO);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Map.of(
                "message", e.getMessage()
            ));
        }
    }
    
    @GetMapping("/hello")
    public ResponseEntity<?> helloUser() {
        return ResponseEntity.ok("Hello User");
    }
    
    @GetMapping("/test")
    public ResponseEntity<?> testEndpoint() {
        return ResponseEntity.ok(Map.of(
            "message", "Backend is working!",
            "timestamp", System.currentTimeMillis()
        ));
    }
    
}