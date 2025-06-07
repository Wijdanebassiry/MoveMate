package com.movemate.service;

import com.movemate.model.Utilisateur;
import com.movemate.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Utilisateur utilisateur = utilisateurRepository.findByEmail(email);
        if (utilisateur == null) {
            throw new UsernameNotFoundException("Utilisateur non trouvé avec l'email : " + email);
        }

        return User.builder()
                .username(utilisateur.getEmail())
                .password(utilisateur.getPassword())
                .roles("USER")
                .build();
    }
}
