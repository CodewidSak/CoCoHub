package com.pmt.CoCoHub.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.pmt.CoCoHub.dto.UserSignInDTO;
import com.pmt.CoCoHub.dto.UserSignUpDTO;
import com.pmt.CoCoHub.model.Role;
import com.pmt.CoCoHub.model.User;
import com.pmt.CoCoHub.repository.RoleRepository;
import com.pmt.CoCoHub.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);

    public UserService(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    // registerUser
    public User registerUser(UserSignUpDTO dto) {
        // Check if email already exists
        if (userRepository.findByEmail(dto.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }

        // Validate input
        if (dto.getUserName() == null || dto.getUserName().trim().isEmpty()) {
            throw new RuntimeException("Username is required");
        }
        if (dto.getEmail() == null || dto.getEmail().trim().isEmpty()) {
            throw new RuntimeException("Email is required");
        }
        if (dto.getPassword() == null || dto.getPassword().length() < 6) {
            throw new RuntimeException("Password must be at least 6 characters");
        }

        User user = new User();
        user.setUserName(dto.getUserName().trim());
        user.setEmail(dto.getEmail().trim().toLowerCase());
        user.setPassword(encoder.encode(dto.getPassword()));
        
        // Assign default USER role
        Role userRole = roleRepository.findByRoleName("USER")
                .orElseGet(() -> {
                    Role newRole = new Role();
                    newRole.setRoleName("USER");
                    return roleRepository.save(newRole);
                });
        
        user.setRole(userRole);
        
        return userRepository.save(user);
    }

    // signInUser
    public Map<String, Object> signInUser(UserSignInDTO dto) {
        User user = userRepository.findByEmail(dto.getEmail().trim().toLowerCase())
                .orElseThrow(() -> new RuntimeException("Invalid email or password"));

        // Compare encoded password with plain text password
        if (!encoder.matches(dto.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid email or password");
        }

        // Create response with user data only (no JWT for now)
        Map<String, Object> response = new HashMap<>();
        
        Map<String, Object> userData = new HashMap<>();
        userData.put("id", user.getId());
        userData.put("userName", user.getUserName());
        userData.put("email", user.getEmail());
        userData.put("role", user.getRole() != null ? user.getRole().getRoleName() : new Role("USER"));
        
        response.put("user", userData);
        response.put("message", "Login successful");
        
        return response;
    }
}
