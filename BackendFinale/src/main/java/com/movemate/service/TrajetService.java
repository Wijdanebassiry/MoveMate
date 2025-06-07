package com.movemate.service;

import com.movemate.model.Trajet;
import com.movemate.repository.TrajetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TrajetService {

    @Autowired
    private TrajetRepository trajetRepository;

    public Trajet publierTrajet(Trajet trajet) {
        return trajetRepository.save(trajet);
    }

    public List<Trajet> listerTousLesTrajets() {
        return trajetRepository.findAll();
    }

    public List<Trajet> rechercherParLieu(String depart, String arrivee) {
        return trajetRepository.findByLieuDepartAndLieuArrivee(depart, arrivee);
    }

    public Optional<Trajet> trouverParId(Long id) {
        return trajetRepository.findById(id);
    }

    public void supprimer(Long id) {
        trajetRepository.deleteById(id);
    }
}
