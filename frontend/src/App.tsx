import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Task } from './types/Task';
import './styles/App.css';

/**
 * App Component (Main)
 * 
 * Root component that orchestrates the entire application.
 * Demonstrates component composition and state management.
 * 
 * OOP Principles:
 * - Composition: Uses smaller components (TaskForm, TaskList)
 * - Encapsulation: App manages overall app state
 * - Abstraction: Delegates specifics to child components
 */
const App: React.FC = () => {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [taskCount, setTaskCount] = useState(0);

  const handleTaskAdded = () => {
    // Trigger TaskList to refresh
    setRefreshTrigger((prev) => prev + 1);
  };

  const handleTasksLoaded = (tasks: Task[]) => {
    setTaskCount(tasks.length);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📋 Task Manager</h1>
        <p className="subtitle">Full Stack CRUD Application</p>
      </header>

      <main className="app-main">
        <div className="stats">
          <span>Total Tasks: <strong>{taskCount}</strong></span>
        </div>

        <div className="app-grid">
          <TaskForm onTaskAdded={handleTaskAdded} />
          <TaskList refreshTrigger={refreshTrigger} onTasksLoaded={handleTasksLoaded} />
        </div>
      </main>

      <footer className="app-footer">
        <p>
          Built with React + TypeScript • Spring Boot • H2 Database
        </p>
      </footer>
    </div>
  );
};

export default App;
