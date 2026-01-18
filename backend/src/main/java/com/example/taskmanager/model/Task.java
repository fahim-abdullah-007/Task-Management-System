package com.example.taskmanager.model;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDate;

/**
 * Task Entity
 * 
 * Domain model representing a task in the system.
 * This class demonstrates key OOP principles:
 * - Encapsulation: Private fields with public getters/setters
 * - Abstraction: JPA annotations abstract database details
 * - Single Responsibility: Task only manages task data
 * 
 * OOP Principles Used:
 * - Encapsulation: Private fields
 * - Abstraction: JPA/Hibernate abstracts database operations
 * - Enum Usage: TaskStatus provides type-safe status values
 */
@Entity
@Table(name = "tasks")
public class Task {

    // Encapsulation: Private fields
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 255)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TaskStatus status = TaskStatus.PENDING;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(nullable = false)
    private LocalDate dueDate;

    // Constructors
    public Task() {
    }

    public Task(String title, String description, LocalDate dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.status = TaskStatus.PENDING;
    }

    // Getters and Setters (Encapsulation)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public TaskStatus getStatus() {
        return status;
    }

    public void setStatus(TaskStatus status) {
        this.status = status;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    public void setDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
    }

    // toString for debugging
    @Override
    public String toString() {
        return "Task{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", status=" + status +
                ", dueDate=" + dueDate +
                '}';
    }
}
