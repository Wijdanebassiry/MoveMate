package com.movemate.controller;

import com.movemate.dto.LoginRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*") // Autorise les requêtes du frontend (en développement)
public class LoginController {

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest request) {
        // ⚠️ À remplacer par une vraie vérification depuis une base de données ou un service
        if ("user@example.com".equals(request.getEmail()) && "password123".equals(request.getPassword())) {
            return ResponseEntity.ok("Connexion réussie ✅");
        } else {
            return ResponseEntity.status(401).body("Identifiants incorrects ❌");
        }
    }
}
