package com.example.taskmanager.controller;

import com.example.taskmanager.model.Task;
import com.example.taskmanager.model.TaskStatus;
import com.example.taskmanager.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * Task Controller
 * 
 * REST API Endpoints for Task Management.
 * Handles HTTP requests and delegates to service layer.
 * 
 * OOP Principles:
 * - Single Responsibility: Only handles HTTP routing
 * - Abstraction: Delegates business logic to service
 * - Separation of Concerns: Presentation layer separation
 * 
 * RESTful API Design (Meets 100% REST Requirements):
 * - HTTP methods for operations
 * - Resource-based URLs (/api/tasks)
 * - Standard HTTP status codes
 * - JSON request/response format
 */
@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TaskController {

    @Autowired
    private TaskService taskService;

    /**
     * GET /api/tasks
     * Retrieve all tasks
     * @return List of all tasks with 200 OK status
     */
    @GetMapping
    public ResponseEntity<List<Task>> getAllTasks() {
        List<Task> tasks = taskService.getAllTasks();
        return ResponseEntity.ok(tasks);
    }

    /**
     * GET /api/tasks/{id}
     * Retrieve task by ID
     * @param id Task ID
     * @return Task if found (200 OK), 404 Not Found if not exist
     */
    @GetMapping("/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable Long id) {
        Optional<Task> task = taskService.getTaskById(id);
        return task.map(ResponseEntity::ok)
                   .orElseGet(() -> ResponseEntity.notFound().build());
    }

    /**
     * POST /api/tasks
     * Create a new task
     * @param task Task object from request body
     * @return Created task with 201 Created status
     */
    @PostMapping
    public ResponseEntity<Task> createTask(@RequestBody Task task) {
        Task createdTask = taskService.createTask(task);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdTask);
    }

    /**
     * PUT /api/tasks/{id}
     * Update full task (all fields)
     * @param id Task ID
     * @param updatedTask Updated task data
     * @return Updated task if found (200 OK), 404 Not Found if not exist
     */
    @PutMapping("/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable Long id, @RequestBody Task updatedTask) {
        Task task = taskService.updateTask(id, updatedTask);
        if (task != null) {
            return ResponseEntity.ok(task);
        }
        return ResponseEntity.notFound().build();
    }

    /**
     * PATCH /api/tasks/{id}
     * Update only task status
     * @param id Task ID
     * @param status New status (PENDING or DONE)
     * @return Updated task if found (200 OK), 404 Not Found if not exist
     */
    @PatchMapping("/{id}")
    public ResponseEntity<Task> updateTaskStatus(@PathVariable Long id, @RequestParam TaskStatus status) {
        Task task = taskService.updateTaskStatus(id, status);
        if (task != null) {
            return ResponseEntity.ok(task);
        }
        return ResponseEntity.notFound().build();
    }

    /**
     * DELETE /api/tasks/{id}
     * Delete task by ID
     * @param id Task ID
     * @return 204 No Content if deleted, 404 Not Found if not exist
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable Long id) {
        if (taskService.deleteTask(id)) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
