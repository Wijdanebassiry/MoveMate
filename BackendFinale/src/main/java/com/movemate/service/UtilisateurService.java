package com.movemate.service;

import com.movemate.model.Utilisateur;
import com.movemate.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;
import java.util.Optional;

@Service
public class UtilisateurService {

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Utilisateur enregistrer(Utilisateur utilisateur) {
        utilisateur.setPassword(passwordEncoder.encode(utilisateur.getPassword()));
        return utilisateurRepository.save(utilisateur);
    }

    public List<Utilisateur> listerTous() {
        return utilisateurRepository.findAll();
    }

    public Optional<Utilisateur> trouverParId(Long id) {
        return utilisateurRepository.findById(id);
    }

    public void supprimer(Long id) {
        utilisateurRepository.deleteById(id);
    }

    public Utilisateur trouverParEmail(String email) {
        return utilisateurRepository.findByEmail(email);
    }
}
