import React, { useEffect, useState } from 'react';
import { Task } from '../types/Task';
import { getAllTasks } from '../services/taskApi';
import TaskItem from './TaskItem';
import '../styles/TaskList.css';

interface TaskListProps {
  refreshTrigger: number; // Trigger for refresh
  onTasksLoaded?: (tasks: Task[]) => void;
}

/**
 * TaskList Component
 * 
 * Displays list of all tasks with filtering and sorting.
 * Manages task list state and coordinates with API.
 * 
 * OOP Principles:
 * - Encapsulation: Component manages list state
 * - Abstraction: Uses API service layer
 * - Single Responsibility: Displays and manages task list
 */
const TaskList: React.FC<TaskListProps> = ({ refreshTrigger, onTasksLoaded }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState<'ALL' | 'PENDING' | 'DONE'>('ALL');

  const fetchTasks = async () => {
    try {
      setIsLoading(true);
      setError('');
      const data = await getAllTasks();
      setTasks(data);
      onTasksLoaded?.(data);
    } catch (err) {
      setError('Failed to load tasks');
      console.error('Error loading tasks:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [refreshTrigger]);

  const handleTaskUpdated = (updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const handleTaskDeleted = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks =
    filter === 'ALL' ? tasks : tasks.filter((task) => task.status === filter);

  return (
    <div className="task-list-container">
      <div className="task-list-header">
        <h2>Tasks ({filteredTasks.length})</h2>
        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === 'ALL' ? 'active' : ''}`}
            onClick={() => setFilter('ALL')}
          >
            All
          </button>
          <button
            className={`filter-btn ${filter === 'PENDING' ? 'active' : ''}`}
            onClick={() => setFilter('PENDING')}
          >
            Pending
          </button>
          <button
            className={`filter-btn ${filter === 'DONE' ? 'active' : ''}`}
            onClick={() => setFilter('DONE')}
          >
            Done
          </button>
        </div>
      </div>

      {error && <div className="error-message">{error}</div>}

      {isLoading ? (
        <div className="loading">Loading tasks...</div>
      ) : filteredTasks.length === 0 ? (
        <div className="no-tasks">
          {tasks.length === 0
            ? 'No tasks yet. Create one to get started!'
            : `No ${filter.toLowerCase()} tasks`}
        </div>
      ) : (
        <div className="task-list">
          {filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onTaskUpdated={handleTaskUpdated}
              onTaskDeleted={handleTaskDeleted}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
