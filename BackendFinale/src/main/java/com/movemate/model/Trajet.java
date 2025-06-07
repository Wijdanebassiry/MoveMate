package com.movemate.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Trajet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String lieuDepart;
    private String lieuArrivee;
    private LocalDateTime dateHeure;
    private double prix;
    private int placesDisponibles;

    @ManyToOne
    private Conducteur conducteur;
}
