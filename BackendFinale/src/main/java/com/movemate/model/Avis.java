package com.movemate.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Avis {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int note;

    @Column(columnDefinition = "TEXT")
    private String commentaire;

    private LocalDate date;

    @ManyToOne
    private Utilisateur auteur;
}
