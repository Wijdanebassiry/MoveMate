package com.movemate.service;

import com.movemate.dto.TripDto;
import com.movemate.dto.BookingRequest;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface TripService {
    List<TripDto> getMockTrips();
    TripDto getTripById(Long id);
    ResponseEntity<?> bookSeats(Long id, BookingRequest request);
}
