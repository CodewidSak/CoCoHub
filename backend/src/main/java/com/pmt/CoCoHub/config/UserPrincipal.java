package com.pmt.CoCoHub.config;

import java.util.Collection;
import java.util.Collections;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.pmt.CoCoHub.model.User;
import com.pmt.CoCoHub.model.Role;

public class UserPrincipal implements UserDetails {
    private User user;
    
    public UserPrincipal(User user) {
        this.user = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        String role = user.getRole().getRoleName();
        if(role == null || role.isEmpty()) {
            role = "USER";
            user.setRole(new Role(role));
        }
        return Collections.singleton(new SimpleGrantedAuthority("ROLE_" + role));
    }

    @Override
    public String getPassword() {
       return user.getPassword();
    }

    @Override
    public String getUsername() {
       return user.getEmail();
    }
    
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }
    
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }
    
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }
    
    @Override
    public boolean isEnabled() {
        return true;
    }
}
