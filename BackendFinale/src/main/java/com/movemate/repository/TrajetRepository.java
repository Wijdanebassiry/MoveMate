package com.movemate.repository;

import com.movemate.model.Trajet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TrajetRepository extends JpaRepository<Trajet, Long> {
    List<Trajet> findByLieuDepartAndLieuArrivee(String lieuDepart, String lieuArrivee);
}
