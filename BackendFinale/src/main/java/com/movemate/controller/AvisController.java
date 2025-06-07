package com.movemate.controller;

import com.movemate.model.Avis;
import com.movemate.service.AvisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/avis")
@CrossOrigin
public class AvisController {

    @Autowired
    private AvisService avisService;

    @PostMapping
    public Avis ajouter(@RequestBody Avis avis) {
        return avisService.ajouterAvis(avis);
    }

    @GetMapping
    public List<Avis> getAll() {
        return avisService.listerAvis();
    }
}
