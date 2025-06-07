package com.movemate.controller;

import com.movemate.model.Utilisateur;
import com.movemate.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/utilisateurs")
@CrossOrigin
public class UtilisateurController {

    @Autowired
    private UtilisateurService utilisateurService;

    @PostMapping("/register")
    public Utilisateur register(@RequestBody Utilisateur utilisateur) {
        return utilisateurService.enregistrer(utilisateur);
    }

    @GetMapping
    public List<Utilisateur> getAll() {
        return utilisateurService.listerTous();
    }

    @GetMapping("/{id}")
    public Optional<Utilisateur> getById(@PathVariable Long id) {
        return utilisateurService.trouverParId(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        utilisateurService.supprimer(id);
    }
}
