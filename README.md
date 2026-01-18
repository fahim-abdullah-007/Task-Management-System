# Task Management System – Full Stack CRUD Application

A complete full-stack application demonstrating Object-Oriented Programming principles, REST API design, and modern web technologies.

## 🎯 Project Overview

This is a **React + TypeScript + Spring Boot + H2 Database** application that implements a comprehensive task management system with full CRUD (Create, Read, Update, Delete) functionality.

### System Architecture

```
React + TypeScript (Frontend)
        ↓ (REST API - JSON)
Spring Boot (Backend)
        ↓ (JPA/Hibernate)
H2 Database (In-Memory)
```

## 📦 Domain Model

### Task Entity
- id: Long (Primary Key)
- title: String (Required)
- description: String (Optional)
- status: TaskStatus (PENDING / DONE)
- dueDate: LocalDate (Required)

### TaskStatus Enum
- PENDING: "Pending"
- DONE: "Done"

## 🏗️ Repository Structure

```
Assigment/
├── frontend/                    # React + TypeScript (Vite)
├── backend/                     # Spring Boot (Maven)
├── .devcontainer/              # GitHub Codespaces Setup
└── README.md
```

## 🔗 REST API Endpoints (6 CRUD Operations)

| HTTP | Endpoint | Description |
|------|----------|-------------|
| **GET** | `/api/tasks` | Get all tasks |
| **GET** | `/api/tasks/{id}` | Get task by ID |
| **POST** | `/api/tasks` | Create new task |
| **PUT** | `/api/tasks/{id}` | Update full task |
| **PATCH** | `/api/tasks/{id}` | Update task status |
| **DELETE** | `/api/tasks/{id}` | Delete task |

## 🚀 Getting Started

### Prerequisites
- Java 17+
- Node.js 18+
- Maven

### Quick Start

#### Terminal 1: Start Backend

```bash
cd backend
mvn spring-boot:run
```

Backend will run on `http://localhost:8080`

#### Terminal 2: Start Frontend

```bash
cd frontend
npm install    # First time only
npm run dev
```

Frontend will run on `http://localhost:5173`

### Using GitHub Codespaces

1. Open repository in GitHub Codespaces
2. Wait for dev container initialization
3. In Terminal 1:
   ```bash
   cd backend && mvn spring-boot:run
   ```
4. In Terminal 2:
   ```bash
   cd frontend && npm run dev
   ```
5. Open `http://localhost:5173` in browser

## 🏗️ Backend Design (Spring Boot - OOP)

### Package Structure & Request Flow

```
HTTP Request
    ↓
TaskController (REST Handler)
    ↓ delegates to
TaskService (Business Logic)
    ↓ delegates to
TaskRepository (Data Access)
    ↓ operates on
H2 Database
    ↓ returns
JSON Response
```

### OOP Principles Demonstrated

| Concept | Implementation |
|---------|-----------------|
| **Encapsulation** | Private fields in Task with public getters/setters |
| **Abstraction** | Service layer abstracts business logic from controller |
| **Inheritance** | JpaRepository extends Spring's generic CRUD interface |
| **Polymorphism** | JpaRepository provides runtime implementation |
| **Enum** | TaskStatus enum for type-safe status values |
| **Separation of Concerns** | Controller → Service → Repository → Database layers |

### File Descriptions

- **TaskManagerApplication.java** - Spring Boot entry point
- **Task.java** - JPA Entity with encapsulation
- **TaskStatus.java** - Enum for type-safe abstraction
- **TaskController.java** - REST API endpoints (Layer 1)
- **TaskService.java** - Business logic (Layer 2)
- **TaskRepository.java** - Database interface (Layer 3)

## 🎨 Frontend Design (React + TypeScript)

### Component Hierarchy

```
App (Root)
  ├── TaskForm (Create new task)
  └── TaskList (Display filtered tasks)
      └── TaskItem (Individual task with actions)
```

### Features Implemented

- ✅ Display all tasks with real-time filtering
- ✅ Add new task with form validation
- ✅ Update task status (PENDING ↔ DONE)
- ✅ Delete task with confirmation dialog
- ✅ REST API integration via Axios
- ✅ Error handling and loading states
- ✅ Responsive design (Desktop & Mobile)

### File Descriptions

- **App.tsx** - Main component orchestrating the app
- **TaskForm.tsx** - Create task form component
- **TaskList.tsx** - Display and filter task list
- **TaskItem.tsx** - Individual task display and actions
- **taskApi.ts** - Axios service for API calls
- **Task.ts** - TypeScript interface for type safety

## 📝 Database Configuration

**H2 In-Memory Database**

- **URL:** `jdbc:h2:mem:taskdb`
- **User:** `sa` (no password)
- **Console:** `http://localhost:8080/h2-console` (optional)
- **Auto-cleanup:** Tables are dropped on application shutdown

### Application Properties

```properties
server.port=8080
spring.datasource.url=jdbc:h2:mem:taskdb
spring.jpa.hibernate.ddl-auto=create-drop
spring.h2.console.enabled=true
```

## 📚 Technology Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | React 18 + TypeScript 5 + Vite + Axios |
| **Backend** | Spring Boot 3.2 + JPA/Hibernate |
| **Database** | H2 (In-Memory) |
| **Build Tools** | Maven 3.9 + npm/Node.js 22 |
| **Runtime** | Java 17 LTS |
| **DevOps** | Docker (Dev Container) |

## 🧪 Testing the API

### Using cURL

```bash
# Get all tasks
curl http://localhost:8080/api/tasks

# Create new task
curl -X POST http://localhost:8080/api/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Complete assignment",
    "description": "Full-stack task manager",
    "dueDate": "2026-02-01",
    "status": "PENDING"
  }'

# Get specific task
curl http://localhost:8080/api/tasks/1

# Update task status to DONE
curl -X PATCH "http://localhost:8080/api/tasks/1?status=DONE"

# Delete task
curl -X DELETE http://localhost:8080/api/tasks/1
```

### Using Frontend UI

1. Open `http://localhost:5173`
2. Fill in the form on the left (Title, Description, Due Date)
3. Click "Add Task" button
4. Task appears in the list on the right
5. Click "✓ Mark Done" to toggle status
6. Click "🗑 Delete" to remove task
7. Use filter buttons to view All/Pending/Done tasks

## 🎓 Learning Outcomes

This project demonstrates:

1. Full-Stack Development (Frontend ↔ Backend integration)
2. REST API Design (Proper HTTP methods & status codes)
3. Object-Oriented Programming (SOLID principles)
4. Spring Boot Framework (Dependency injection, JPA/Hibernate)
5. React + TypeScript (Components, hooks, state management)
6. Database Design (Entity modeling, CRUD operations)
7. Layered Architecture (Separation of concerns)
8. Error Handling (Try-catch, proper HTTP responses)
9. Responsive Design (CSS Grid, Flexbox, Media queries)
10. DevOps (Docker containers, dev environments)

## 🐛 Troubleshooting

### Backend won't start
```bash
# Check if port 8080 is in use
netstat -an | grep 8080

# Kill process on port 8080 (Linux/Mac)
lsof -ti:8080 | xargs kill -9
```

### Frontend compilation error
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### CORS errors
- Verify TaskController has: `@CrossOrigin(origins = "http://localhost:5173")`
- Ensure frontend is running on port 5173

### API not responding
- Check backend is running: `http://localhost:8080/api/tasks` in browser
- Check network tab in browser DevTools for 404 or connection errors

## 📋 Request/Response Flow

```
1. User fills TaskForm
   ↓
2. JavaScript calls taskApi.createTask()
   ↓
3. Axios POSTs JSON to /api/tasks
   ↓
4. TaskController receives request
   ↓
5. TaskService validates & processes
   ↓
6. TaskRepository.save() persists to H2
   ↓
7. Task returned as JSON response
   ↓
8. Frontend receives response
   ↓
9. TaskList component re-renders
   ↓
10. New task appears in UI
```

## ✅ Assignment Completion Checklist

- ✅ Task Entity (id, title, description, status, dueDate)
- ✅ TaskStatus Enum (PENDING, DONE)
- ✅ REST API with 6 CRUD endpoints
- ✅ Spring Boot with layered architecture
- ✅ React + TypeScript frontend
- ✅ H2 in-memory database
- ✅ Full CRUD functionality (Create, Read, Update, Delete)
- ✅ Error handling
- ✅ Responsive UI design
- ✅ Dev container setup
- ✅ OOP design principles
- ✅ Complete documentation

## 📖 Git Commit History

The project follows clean Git commits:

```
1. init backend project
2. add Task entity and enum
3. implement CRUD API
4. setup frontend project
5. connect frontend with backend
6. add devcontainer setup
7. update documentation
```

---

**Project ready to run! 🚀**

For questions or issues, check the troubleshooting section above.
