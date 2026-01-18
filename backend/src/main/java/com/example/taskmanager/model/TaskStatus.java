package com.example.taskmanager.model;

/**
 * TaskStatus Enum
 * 
 * Represents the possible states of a task.
 * This is an excellent OOP design providing:
 * - Type safety (only valid values allowed)
 * - Abstraction (hides implementation details)
 * - Encapsulation (contains related constants)
 * 
 * OOP Principle: Abstraction & Encapsulation
 */
public enum TaskStatus {
    PENDING("Pending"),
    DONE("Done");

    private final String displayName;

    TaskStatus(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}
