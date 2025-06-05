package com.movemate.repository;

import com.movemate.model.User;

import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends com.movemate.repository.JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}