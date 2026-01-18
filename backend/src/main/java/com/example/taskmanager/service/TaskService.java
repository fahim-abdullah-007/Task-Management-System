package com.example.taskmanager.service;

import com.example.taskmanager.model.Task;
import com.example.taskmanager.model.TaskStatus;
import com.example.taskmanager.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

/**
 * Task Service
 * 
 * Business Logic Layer - Contains all task-related business logic.
 * Acts as a bridge between Controller and Repository.
 * 
 * OOP Principles:
 * - Separation of Concerns: Service handles business logic
 * - Abstraction: Service abstracts repository operations
 * - Encapsulation: Private repository, public service methods
 * 
 * Flow: Controller → Service → Repository → Database
 */
@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    /**
     * Get all tasks
     * @return List of all tasks
     */
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    /**
     * Get task by ID
     * @param id Task ID
     * @return Optional containing task if found
     */
    public Optional<Task> getTaskById(Long id) {
        return taskRepository.findById(id);
    }

    /**
     * Create a new task
     * @param task Task to create
     * @return Created task with generated ID
     */
    public Task createTask(Task task) {
        if (task.getStatus() == null) {
            task.setStatus(TaskStatus.PENDING);
        }
        return taskRepository.save(task);
    }

    /**
     * Update entire task
     * @param id Task ID
     * @param updatedTask Updated task data
     * @return Updated task or null if not found
     */
    public Task updateTask(Long id, Task updatedTask) {
        Optional<Task> existingTask = taskRepository.findById(id);
        if (existingTask.isPresent()) {
            Task task = existingTask.get();
            task.setTitle(updatedTask.getTitle());
            task.setDescription(updatedTask.getDescription());
            task.setStatus(updatedTask.getStatus());
            task.setDueDate(updatedTask.getDueDate());
            return taskRepository.save(task);
        }
        return null;
    }

    /**
     * Update only task status
     * @param id Task ID
     * @param status New status
     * @return Updated task or null if not found
     */
    public Task updateTaskStatus(Long id, TaskStatus status) {
        Optional<Task> existingTask = taskRepository.findById(id);
        if (existingTask.isPresent()) {
            Task task = existingTask.get();
            task.setStatus(status);
            return taskRepository.save(task);
        }
        return null;
    }

    /**
     * Delete task
     * @param id Task ID
     * @return true if deleted, false if not found
     */
    public boolean deleteTask(Long id) {
        if (taskRepository.existsById(id)) {
            taskRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
