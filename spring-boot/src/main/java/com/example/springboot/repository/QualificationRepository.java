package com.example.springboot.repository;

import java.util.Optional;

import com.example.springboot.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springboot.models.Qualification;

import java.util.List;

@Repository
public interface QualificationRepository extends JpaRepository<Qualification, Long> {
    Optional<Qualification> findByName(String name);

    List<Qualification> findByOwner(Long id);

    Optional<Qualification> findById(Long id);
}
