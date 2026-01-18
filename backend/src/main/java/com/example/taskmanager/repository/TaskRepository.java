package com.example.taskmanager.repository;

import com.example.taskmanager.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Task Repository
 * 
 * Data Access Layer - Interface for database operations.
 * Extends JpaRepository to get CRUD operations automatically.
 * 
 * OOP Principle: Abstraction (Polymorphism)
 * - JpaRepository provides a generic CRUD interface
 * - Hides database implementation details
 * - Spring provides implementation at runtime
 */
@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    // JpaRepository provides:
    // - save(T entity)
    // - findById(ID id)
    // - findAll()
    // - delete(T entity)
    // - deleteById(ID id)
    // - All other standard CRUD operations
}
