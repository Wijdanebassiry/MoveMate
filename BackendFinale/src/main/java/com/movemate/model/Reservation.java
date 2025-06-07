package com.movemate.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate dateReservation;

    @Enumerated(EnumType.STRING)
    private StatutReservation statut;

    @ManyToOne
    private Passager passager;

    @ManyToOne
    private Trajet trajet;
}
