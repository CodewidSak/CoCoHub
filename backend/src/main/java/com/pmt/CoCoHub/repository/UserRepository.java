package com.pmt.CoCoHub.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pmt.CoCoHub.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}