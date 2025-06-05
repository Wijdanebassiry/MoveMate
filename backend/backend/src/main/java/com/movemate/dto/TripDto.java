package com.movemate.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TripDto {
    private Long id;
    private String depart;
    private String destination;
    private String date;
    private int availableSeats;
}
