package com.movemate.controller;

import com.movemate.dto.TripDto;
import com.movemate.dto.BookingRequest;
import com.movemate.service.TripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trips")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class TripController {

    private final TripService tripService;

    @Autowired
    public TripController(TripService tripService) {
        this.tripService = tripService;
    }

    @GetMapping("/user")
    public ResponseEntity<List<TripDto>> getUserTrips() {
        return ResponseEntity.ok(tripService.getMockTrips());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TripDto> getTripDetails(@PathVariable Long id) {
        TripDto trip = tripService.getTripById(id);
        return trip != null
                ? ResponseEntity.ok(trip)
                : ResponseEntity.notFound().build();
    }

    @PostMapping("/{id}/book")
    public ResponseEntity<?> bookSeats(@PathVariable Long id, @RequestBody BookingRequest request) {
        return tripService.bookSeats(id, request);
    }
}
