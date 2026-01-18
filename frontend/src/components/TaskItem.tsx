import React from 'react';
import { Task } from '../types/Task';
import { updateTaskStatus, deleteTask } from '../services/taskApi';
import '../styles/TaskItem.css';

interface TaskItemProps {
  task: Task;
  onTaskUpdated: (task: Task) => void;
  onTaskDeleted: (taskId: number) => void;
}

/**
 * TaskItem Component
 * 
 * Displays individual task and handles task actions.
 * Demonstrates component composition and event handling.
 * 
 * OOP Principles:
 * - Encapsulation: Component manages task interactions
 * - Single Responsibility: Handles one task display/actions
 */
const TaskItem: React.FC<TaskItemProps> = ({ task, onTaskUpdated, onTaskDeleted }) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleToggleStatus = async () => {
    try {
      setIsLoading(true);
      const newStatus = task.status === 'PENDING' ? 'DONE' : 'PENDING';
      const updatedTask = await updateTaskStatus(task.id!, newStatus);
      onTaskUpdated(updatedTask);
    } catch (error) {
      console.error('Failed to update task status:', error);
      alert('Failed to update task status');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this task?')) {
      return;
    }

    try {
      setIsLoading(true);
      await deleteTask(task.id!);
      onTaskDeleted(task.id!);
    } catch (error) {
      console.error('Failed to delete task:', error);
      alert('Failed to delete task');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`task-item ${task.status.toLowerCase()}`}>
      <div className="task-content">
        <div className="task-header">
          <h3 className={task.status === 'DONE' ? 'completed' : ''}>{task.title}</h3>
          <span className={`status-badge status-${task.status.toLowerCase()}`}>
            {task.status}
          </span>
        </div>
        {task.description && <p className="task-description">{task.description}</p>}
        <div className="task-footer">
          <span className="due-date">Due: {new Date(task.dueDate).toLocaleDateString()}</span>
        </div>
      </div>
      <div className="task-actions">
        <button
          onClick={handleToggleStatus}
          disabled={isLoading}
          className={`btn btn-${task.status === 'PENDING' ? 'success' : 'secondary'}`}
          title={task.status === 'PENDING' ? 'Mark as Done' : 'Mark as Pending'}
        >
          {task.status === 'PENDING' ? '✓ Mark Done' : '↻ Reopen'}
        </button>
        <button
          onClick={handleDelete}
          disabled={isLoading}
          className="btn btn-danger"
          title="Delete task"
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
