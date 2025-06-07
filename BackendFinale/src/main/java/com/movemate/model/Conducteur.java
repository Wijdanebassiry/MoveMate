package com.movemate.model;

import jakarta.persistence.Entity;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Conducteur extends Utilisateur {
    private String vehicule;
}
