/**
 * Task Type Definition
 * 
 * TypeScript interface for Task data structure.
 * Ensures type safety across frontend components.
 * 
 * OOP Principle: Abstraction
 * - Defines contract for Task data
 * - Enables compile-time type checking
 */
export interface Task {
  id?: number;
  title: string;
  description: string;
  status: 'PENDING' | 'DONE';
  dueDate: string; // ISO date format (YYYY-MM-DD)
}
