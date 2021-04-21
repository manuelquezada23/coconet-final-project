package com.example.springboot.repository;

import java.util.Optional;

import com.example.springboot.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springboot.models.Project;

import java.util.List;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
    Optional<Project> findByName(String name);

    List<Project> findByOwner(Long id);

    Optional<Project> findById(Long id);
}
