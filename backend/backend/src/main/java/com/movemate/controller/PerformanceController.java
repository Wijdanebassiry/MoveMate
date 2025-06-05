package com.movemate.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/performance")
public class PerformanceController {

    @PostMapping("/web-vitals")
    public ResponseEntity<?> receiveWebVitals(@RequestBody Map<String, Object> metrics) {
        System.out.println("Web Vitals reçus : " + metrics);
        return ResponseEntity.ok("Données reçues");
    }
}

