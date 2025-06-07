package com.movemate.controller;

import com.movemate.model.Trajet;
import com.movemate.service.TrajetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/trajets")
@CrossOrigin
public class TrajetController {

    @Autowired
    private TrajetService trajetService;

    @PostMapping
    public Trajet publier(@RequestBody Trajet trajet) {
        return trajetService.publierTrajet(trajet);
    }

    @GetMapping
    public List<Trajet> getAll() {
        return trajetService.listerTousLesTrajets();
    }

    @GetMapping("/search")
    public List<Trajet> rechercher(@RequestParam String depart, @RequestParam String arrivee) {
        return trajetService.rechercherParLieu(depart, arrivee);
    }

    @GetMapping("/{id}")
    public Optional<Trajet> getById(@PathVariable Long id) {
        return trajetService.trouverParId(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        trajetService.supprimer(id);
    }
}
