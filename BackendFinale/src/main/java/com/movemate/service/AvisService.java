package com.movemate.service;

import com.movemate.model.Avis;
import com.movemate.repository.AvisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AvisService {

    @Autowired
    private AvisRepository avisRepository;

    public Avis ajouterAvis(Avis avis) {
        return avisRepository.save(avis);
    }

    public List<Avis> listerAvis() {
        return avisRepository.findAll();
    }
}
