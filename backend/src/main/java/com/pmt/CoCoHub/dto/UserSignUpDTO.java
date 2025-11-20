package com.pmt.CoCoHub.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class UserSignUpDTO {
    @JsonProperty("fullName")
    private String userName;
    private String email;   
    private String password;    
}
