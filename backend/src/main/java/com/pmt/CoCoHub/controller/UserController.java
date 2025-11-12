package com.pmt.CoCoHub.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pmt.CoCoHub.dto.UserSignInDTO;
import com.pmt.CoCoHub.dto.UserSignUpDTO;
import com.pmt.CoCoHub.model.User;
import com.pmt.CoCoHub.service.UserService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class UserController {
    
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public ResponseEntity signUpUser(@RequestBody UserSignUpDTO userSingUpDTO) {
        User user = userService.registerUser(userSingUpDTO);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/signin")
    public ResponseEntity signUpUser(@RequestBody UserSignInDTO userSingInDTO) {
        User user = userService.signInUser(userSingInDTO);
        return ResponseEntity.ok(user);
    }
    
}