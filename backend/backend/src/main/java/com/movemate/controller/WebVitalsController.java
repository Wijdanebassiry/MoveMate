package com.movemate.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/performance")
public class WebVitalsController {

    @PostMapping("/web-vitals")
    public ResponseEntity<String> receiveWebVitals(@RequestBody Map<String, Object> vitalsData) {
        System.out.println("📊 Web Vitals reçus : " + vitalsData);
        // Tu peux les stocker en base, les logger, ou les analyser ici
        return ResponseEntity.ok("Web Vitals reçus");
    }
}

