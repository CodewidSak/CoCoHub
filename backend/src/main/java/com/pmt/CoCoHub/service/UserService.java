package com.pmt.CoCoHub.service;

import org.springframework.stereotype.Service;

import com.pmt.CoCoHub.dto.UserSignInDTO;
import com.pmt.CoCoHub.dto.UserSignUpDTO;
import com.pmt.CoCoHub.model.User;
import com.pmt.CoCoHub.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // registerUser
    public User registerUser(UserSignUpDTO dto) {
        if (userRepository.findByEmail(dto.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists!");
        }

        User user = new User();
        user.setUserName(dto.getName()); // ← DTO se "name" aa raha hai
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword()); // baad mein BCrypt
        return userRepository.save(user);
    }

    // signInUser
    public User signInUser(UserSignInDTO dto) {
        User user = userRepository.findByEmail(dto.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!user.getPassword().equals(dto.getPassword())) {
            throw new RuntimeException("Wrong password");
        }
        return user;
    }
}
