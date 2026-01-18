import axios from 'axios';
import { Task } from '../types/Task';

// Dynamically determine API URL based on environment
const API_URL = (() => {
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    const protocol = window.location.protocol;
    
    // If running on Codespace (github.dev domain)
    // URL pattern: <codespace-name>-<port>.app.github.dev
    // Example: silver-space-zebra-x57r57xgvw4xhp6wx-5173.app.github.dev
    if (hostname.includes('.app.github.dev') || hostname.includes('.preview.app.github.dev')) {
      // Replace the port number (5173/5174) with backend port (8080)
      const backendHostname = hostname
        .replace(/-5173\./, '-8080.')
        .replace(/-5174\./, '-8080.')
        .replace(/-5173-/, '-8080-')
        .replace(/-5174-/, '-8080-');
      return `${protocol}//${backendHostname}/api/tasks`;
    }
    
    // For local development (localhost or 127.0.0.1) - use proxy
    return '/api/tasks';
  }
  return '/api/tasks';
})();

console.log('API URL configured as:', API_URL);
console.log('Frontend hostname:', typeof window !== 'undefined' ? window.location.hostname : 'N/A');


/**
 * Task API Service
 * 
 * Encapsulates all HTTP calls to backend.
 * Provides abstraction layer for component-to-API communication.
 * 
 * OOP Principles:
 * - Abstraction: Hides HTTP complexity
 * - Encapsulation: Centralizes API logic
 * - Single Responsibility: Only handles API calls
 */

// Get all tasks
export const getAllTasks = async (): Promise<Task[]> => {
  try {
    const response = await axios.get<Task[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

// Get task by ID
export const getTaskById = async (id: number): Promise<Task> => {
  try {
    const response = await axios.get<Task>(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching task ${id}:`, error);
    throw error;
  }
};

// Create new task
export const createTask = async (task: Task): Promise<Task> => {
  try {
    const response = await axios.post<Task>(API_URL, task);
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

// Update full task
export const updateTask = async (id: number, task: Task): Promise<Task> => {
  try {
    const response = await axios.put<Task>(`${API_URL}/${id}`, task);
    return response.data;
  } catch (error) {
    console.error(`Error updating task ${id}:`, error);
    throw error;
  }
};

// Update only task status
export const updateTaskStatus = async (id: number, status: 'PENDING' | 'DONE'): Promise<Task> => {
  try {
    const response = await axios.patch<Task>(`${API_URL}/${id}?status=${status}`);
    return response.data;
  } catch (error) {
    console.error(`Error updating task status ${id}:`, error);
    throw error;
  }
};

// Delete task
export const deleteTask = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(`Error deleting task ${id}:`, error);
    throw error;
  }
};
