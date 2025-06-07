package com.movemate.repository;

import com.movemate.model.Conducteur;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConducteurRepository extends JpaRepository<Conducteur, Long> {
}
