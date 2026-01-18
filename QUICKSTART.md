# 🚀 Quick Start Guide - Task Manager

## ✅ Project Completed & Ready to Run

All files are in place and dependencies are installed. Follow the steps below to run the application.

---

## 📋 What's Included

✅ **Backend** (Spring Boot) - Port 8080  
✅ **Frontend** (React + TypeScript) - Port 5173  
✅ **Database** (H2 In-Memory)  
✅ **Full CRUD API** (6 endpoints)  
✅ **Complete Documentation**  

---

## 🚀 How to Run

### Option 1: Using Provided Scripts (Recommended)

#### Terminal 1: Start Backend
```bash
./run-backend.sh
```

#### Terminal 2: Start Frontend
```bash
./run-frontend.sh
```

### Option 2: Manual Commands

#### Terminal 1: Backend
```bash
cd backend
mvn spring-boot:run
```

You'll see: `Started TaskManagerApplication`

#### Terminal 2: Frontend
```bash
cd frontend
npm run dev
```

You'll see: `Local: http://localhost:5173/`

---

## 🌐 Open the Application

Once both services are running:

1. **Open browser**: `http://localhost:5173`
2. You should see the Task Manager UI
3. Start adding tasks!

---

## 📊 What to Test

### Backend API (in another terminal):

```bash
# Get all tasks
curl http://localhost:8080/api/tasks

# Create a task
curl -X POST http://localhost:8080/api/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Learn Full Stack",
    "description": "Complete the task manager project",
    "dueDate": "2026-02-01",
    "status": "PENDING"
  }'

# Get specific task
curl http://localhost:8080/api/tasks/1

# Mark as done
curl -X PATCH "http://localhost:8080/api/tasks/1?status=DONE"

# Delete task
curl -X DELETE http://localhost:8080/api/tasks/1
```

### Frontend UI:

1. Click "Add New Task"
2. Fill in: Title, Description, Due Date
3. Click "Add Task"
4. See task appear in the list
5. Click "✓ Mark Done" to toggle status
6. Use filters: All / Pending / Done
7. Click "🗑 Delete" to remove

---

## 🔍 Project Structure

```
Assigment/
├── backend/
│   ├── src/main/java/com/example/taskmanager/
│   │   ├── controller/TaskController.java      (REST API)
│   │   ├── service/TaskService.java            (Business Logic)
│   │   ├── repository/TaskRepository.java      (Database)
│   │   ├── model/Task.java                     (Entity)
│   │   └── model/TaskStatus.java               (Enum)
│   └── pom.xml                                  (Dependencies)
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.tsx
│   │   │   ├── TaskList.tsx
│   │   │   └── TaskItem.tsx
│   │   ├── services/taskApi.ts                 (API Client)
│   │   ├── types/Task.ts                       (Types)
│   │   ├── styles/                             (CSS)
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── package.json                             (Dependencies)
│
├── .devcontainer/                              (Docker Setup)
├── run-backend.sh                              (Backend Script)
├── run-frontend.sh                             (Frontend Script)
└── README.md                                   (Full Documentation)
```

---

## 🔧 Ports & URLs

| Service | URL | Port |
|---------|-----|------|
| Frontend | http://localhost:5173 | 5173 |
| Backend API | http://localhost:8080/api/tasks | 8080 |
| H2 Console | http://localhost:8080/h2-console | 8080 |

---

## 🎯 REST API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/{id}` | Get specific task |
| POST | `/api/tasks` | Create task |
| PUT | `/api/tasks/{id}` | Update task |
| PATCH | `/api/tasks/{id}` | Update status |
| DELETE | `/api/tasks/{id}` | Delete task |

---

## ⚙️ System Architecture

```
User Browser
    ↓
React UI (http://localhost:5173)
    ↓ REST API Calls
Spring Boot Backend (http://localhost:8080)
    ↓
H2 Database (In-Memory)
```

---

## 🎓 Key OOP Concepts Demonstrated

✅ **Encapsulation** - Private fields with public getters/setters  
✅ **Abstraction** - Service layer hides implementation  
✅ **Inheritance** - JpaRepository extends Spring's interface  
✅ **Polymorphism** - Runtime implementation of JpaRepository  
✅ **Enum** - TaskStatus for type-safe values  
✅ **Separation of Concerns** - Controller → Service → Repository layers  

---

## 🐛 Troubleshooting

### Port Already in Use

**Port 8080 (Backend):**
```bash
lsof -ti:8080 | xargs kill -9
```

**Port 5173 (Frontend):**
```bash
lsof -ti:5173 | xargs kill -9
```

### Dependencies Issue

```bash
# Backend
cd backend && mvn clean install

# Frontend
cd frontend && npm install
```

### CORS Error

Make sure both services are running:
- Backend on port 8080
- Frontend on port 5173

---

## 📝 Database Info

**H2 In-Memory Database**

- URL: `jdbc:h2:mem:taskdb`
- User: `sa`
- Password: (none)
- **Auto-reset**: Database is recreated each time the backend starts
- **Auto-cleanup**: All data is lost when backend stops (this is intentional for testing)

---

## ✨ Features

✅ Create tasks with title, description, and due date  
✅ View all tasks in a list  
✅ Filter tasks by status (Pending/Done)  
✅ Update task status with one click  
✅ Delete tasks with confirmation  
✅ Real-time synchronization with backend  
✅ Error handling and validation  
✅ Responsive design for mobile  

---

## 📚 Technology Stack

- **Frontend**: React 18 + TypeScript 5 + Vite
- **Backend**: Spring Boot 3.2 + Spring Data JPA
- **Database**: H2 In-Memory
- **Build**: Maven + npm
- **Runtime**: Java 17 LTS

---

## 🎉 You're All Set!

The project is **fully functional and ready to use**.

**Next Steps:**
1. Run `./run-backend.sh` in terminal 1
2. Run `./run-frontend.sh` in terminal 2
3. Open `http://localhost:5173` in your browser
4. Start managing tasks!

---

**Questions?** Check [README.md](README.md) for complete documentation.

**Happy Coding! 🚀**
