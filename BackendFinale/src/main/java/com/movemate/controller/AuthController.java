package com.movemate.controller;

import com.movemate.model.Utilisateur;
import com.movemate.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public String login(@RequestBody Map<String, String> loginData) {
        String email = loginData.get("email");
        String password = loginData.get("password");

        Utilisateur utilisateur = utilisateurRepository.findByEmail(email);
        if (utilisateur == null) {
            throw new UsernameNotFoundException("Utilisateur non trouvé");
        }

        if (!passwordEncoder.matches(password, utilisateur.getPassword())) {
            throw new BadCredentialsException("Mot de passe incorrect");
        }

        return "Connexion réussie !";
    }
}
