package com.pmt.CoCoHub.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pmt.CoCoHub.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByRoleName(String roleName);
}
