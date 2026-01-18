# 🚀 QUICK COMMAND REFERENCE

## Starting the Application

### Fastest Way (Recommended)
```bash
# Terminal 1
./run-backend.sh

# Terminal 2  
./run-frontend.sh

# Browser
http://localhost:5173
```

### Manual Way
```bash
# Terminal 1: Backend
cd backend
mvn spring-boot:run

# Terminal 2: Frontend
cd frontend
npm run dev

# Browser
http://localhost:5173
```

---

## Testing the API

### Get All Tasks
```bash
curl http://localhost:8080/api/tasks
```

### Get Specific Task
```bash
curl http://localhost:8080/api/tasks/1
```

### Create New Task
```bash
curl -X POST http://localhost:8080/api/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Task",
    "description": "Task description",
    "dueDate": "2026-02-01",
    "status": "PENDING"
  }'
```

### Update Entire Task
```bash
curl -X PUT http://localhost:8080/api/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Task",
    "description": "Updated description",
    "dueDate": "2026-03-01",
    "status": "DONE"
  }'
```

### Update Only Status
```bash
curl -X PATCH "http://localhost:8080/api/tasks/1?status=DONE"
```

### Delete Task
```bash
curl -X DELETE http://localhost:8080/api/tasks/1
```

---

## Useful URLs

| Service | URL |
|---------|-----|
| Frontend | http://localhost:5173 |
| API Base | http://localhost:8080/api/tasks |
| H2 Console | http://localhost:8080/h2-console |

---

## Common Commands

### Build Backend
```bash
cd backend
mvn clean install
```

### Rebuild Frontend
```bash
cd frontend
npm install
npm run build
```

### Clean Everything
```bash
# Backend
cd backend && mvn clean

# Frontend
cd frontend && rm -rf node_modules && npm install
```

### Stop Services

```bash
# Find and kill backend (port 8080)
lsof -ti:8080 | xargs kill -9

# Find and kill frontend (port 5173)
lsof -ti:5173 | xargs kill -9
```

---

## File Locations

| File | Purpose |
|------|---------|
| README.md | Full documentation |
| QUICKSTART.md | Quick setup guide |
| PROJECT-SUMMARY.md | Technical overview |
| COMPLETION-STATUS.md | Project status |
| run-backend.sh | Start backend script |
| run-frontend.sh | Start frontend script |
| backend/pom.xml | Maven configuration |
| frontend/package.json | npm configuration |
| .devcontainer/ | Docker setup |

---

## Project Directories

```
.                              # Root
├── backend/                   # Spring Boot project
│   ├── src/main/java/        # Java source files
│   ├── src/main/resources/   # Application properties
│   └── pom.xml               # Maven config
├── frontend/                 # React project
│   ├── src/                  # React source
│   ├── package.json          # npm config
│   └── index.html            # Entry HTML
├── .devcontainer/            # Docker config
├── run-backend.sh            # Backend startup
├── run-frontend.sh           # Frontend startup
└── README.md                 # Main docs
```

---

## Dependencies Installed

### Backend (Maven)
- Spring Boot 3.2
- Spring Data JPA
- H2 Database
- Lombok (optional)

### Frontend (npm)
- React 18
- TypeScript 5
- Vite 5
- Axios (HTTP client)

---

## Expected Output

### Backend Startup
```
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::        (v3.2.0)

...
Started TaskManagerApplication in 5.432 seconds
```

### Frontend Startup
```
  VITE v5.0.0  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

---

## Troubleshooting Quick Fixes

### "Port already in use"
```bash
# Find process on port
lsof -i :8080      # Backend
lsof -i :5173      # Frontend

# Kill process
kill -9 <PID>
```

### "mvn: command not found"
```bash
# Install Maven
sudo apt-get install maven

# Or use Maven wrapper if available
./mvnw spring-boot:run
```

### "npm: command not found"
```bash
# Install Node.js and npm
sudo apt-get install nodejs npm

# Update npm
npm install -g npm@latest
```

### "Cannot find module"
```bash
cd frontend
npm install
```

### "Cannot compile Java"
```bash
cd backend
mvn clean install -DskipTests
```

---

## Database Info

**H2 Console:**
- URL: http://localhost:8080/h2-console
- JDBC URL: jdbc:h2:mem:taskdb
- User: sa
- Password: (empty)

**Note:** Data is reset when backend restarts

---

## Frontend UI Quick Guide

1. **Add Task**
   - Fill form on left side
   - Click "Add Task" button
   - Task appears in list

2. **View Tasks**
   - All tasks shown in right panel
   - Shows title, description, due date, status

3. **Mark Done**
   - Click "✓ Mark Done" button
   - Status changes to DONE
   - Visual styling updates

4. **Reopen Task**
   - Click "↻ Reopen" button  
   - Status changes to PENDING

5. **Delete Task**
   - Click "🗑 Delete" button
   - Confirm deletion
   - Task removed from list

6. **Filter Tasks**
   - Click "All" to see all tasks
   - Click "Pending" to see pending only
   - Click "Done" to see completed only

---

## REST API Response Examples

### Success Response
```json
{
  "id": 1,
  "title": "Complete assignment",
  "description": "Finish the full-stack project",
  "status": "PENDING",
  "dueDate": "2026-02-01"
}
```

### Error Response
```json
{
  "timestamp": "2026-01-17T15:30:00.000+00:00",
  "status": 404,
  "error": "Not Found",
  "message": "Task not found"
}
```

---

## Success Indicators

✅ Backend: "Started TaskManagerApplication"  
✅ Frontend: "VITE v5.0.0 ready"  
✅ Browser: App loads at http://localhost:5173  
✅ Form works: Can add tasks  
✅ List updates: Tasks appear in real-time  
✅ Buttons work: Can toggle status and delete  

---

## All APIs Summary

| Operation | HTTP | Endpoint | Status Code |
|-----------|------|----------|------------|
| Get All | GET | /api/tasks | 200 |
| Get One | GET | /api/tasks/{id} | 200/404 |
| Create | POST | /api/tasks | 201 |
| Update Full | PUT | /api/tasks/{id} | 200/404 |
| Update Status | PATCH | /api/tasks/{id} | 200/404 |
| Delete | DELETE | /api/tasks/{id} | 204/404 |

---

## Quick Documentation Links

- **Full Guide**: [README.md](README.md)
- **Quick Start**: [QUICKSTART.md](QUICKSTART.md)
- **Technical Details**: [PROJECT-SUMMARY.md](PROJECT-SUMMARY.md)
- **Status**: [COMPLETION-STATUS.md](COMPLETION-STATUS.md)
- **This File**: [QUICK-REFERENCE.md](QUICK-REFERENCE.md)

---

## One-Line Startup

```bash
./run-backend.sh & ./run-frontend.sh
```

Then open: **http://localhost:5173**

---

**That's it! You're ready to go! 🚀**
