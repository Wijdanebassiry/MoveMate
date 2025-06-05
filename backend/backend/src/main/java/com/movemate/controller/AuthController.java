package com.movemate.controller;

import com.movemate.dto.JwtResponse;
import com.movemate.dto.LoginRequest;
import com.movemate.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<JwtResponse> login(@Valid @RequestBody LoginRequest request) {
        String token = authService.authenticateAndGenerateToken(request.getEmail(), request.getPassword());
        return ResponseEntity.ok(new JwtResponse(token));
    }
}
