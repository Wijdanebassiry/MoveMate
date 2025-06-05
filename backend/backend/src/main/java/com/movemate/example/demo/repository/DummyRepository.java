package com.movemate.example.demo.repository;

import org.springframework.stereotype.Repository;

@Repository
public class DummyRepository {
    public String getData() {
        return "Données de test du repository.";
    }
}
