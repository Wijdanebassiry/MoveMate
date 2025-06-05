package com.movemate.controller;

import com.movemate.security.UserDetailsImpl;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @GetMapping("/profile")
    public String profile(@AuthenticationPrincipal UserDetailsImpl userDetails) {
        return "Bonjour, " + userDetails.getUsername();
    }
}
