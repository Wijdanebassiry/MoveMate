package com.movemate.service;

public interface AuthService {
    String authenticateAndGenerateToken(String email, String password);
}

