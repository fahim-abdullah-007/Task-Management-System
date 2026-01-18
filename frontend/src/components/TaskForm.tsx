import React, { useState } from 'react';
import { Task } from '../types/Task';
import { createTask } from '../services/taskApi';
import '../styles/TaskForm.css';

interface TaskFormProps {
  onTaskAdded: (task: Task) => void;
}

/**
 * TaskForm Component
 * 
 * Handles task creation form.
 * Demonstrates React hooks and component encapsulation.
 * 
 * OOP Principles:
 * - Encapsulation: Component manages own state
 * - Single Responsibility: Only handles form logic
 */
const TaskForm: React.FC<TaskFormProps> = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!title.trim() || !dueDate.trim()) {
      setError('Title and Due Date are required');
      return;
    }

    try {
      setIsLoading(true);
      const newTask: Task = {
        title: title.trim(),
        description: description.trim(),
        dueDate,
        status: 'PENDING',
      };

      const createdTask = await createTask(newTask);
      onTaskAdded(createdTask);

      // Reset form
      setTitle('');
      setDescription('');
      setDueDate('');
    } catch (err) {
      setError('Failed to create task. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="task-form-container">
      <h2>Add New Task</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            disabled={isLoading}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description"
            disabled={isLoading}
            rows={3}
          />
        </div>

        <div className="form-group">
          <label htmlFor="dueDate">Due Date *</label>
          <input
            id="dueDate"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            disabled={isLoading}
            required
          />
        </div>

        <button type="submit" disabled={isLoading} className="btn btn-primary">
          {isLoading ? 'Adding Task...' : 'Add Task'}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
