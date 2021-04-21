package com.example.springboot.repository;

import java.util.Optional;

import com.example.springboot.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springboot.models.Client;

import java.util.List;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {
    Optional<Client> findByName(String name);

    List<Client> findByOwner(Long id);

    Optional<Client> findById(Long id);
}
