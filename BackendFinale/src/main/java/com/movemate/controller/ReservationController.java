package com.movemate.controller;

import com.movemate.model.Reservation;
import com.movemate.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/reservations")
@CrossOrigin
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @PostMapping
    public Reservation reserver(@RequestBody Reservation reservation) {
        return reservationService.reserver(reservation);
    }

    @GetMapping
    public List<Reservation> getAll() {
        return reservationService.listerToutes();
    }

    @GetMapping("/{id}")
    public Optional<Reservation> getById(@PathVariable Long id) {
        return reservationService.trouverParId(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        reservationService.supprimer(id);
    }
}
