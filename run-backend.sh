#!/bin/bash

# Task Manager Backend Startup Script
# Starts the Spring Boot backend on port 8080

echo "==========================================="
echo "🚀 Task Manager - Backend Starting"
echo "==========================================="
echo ""
echo "Java Version:"
java -version
echo ""
echo "Building backend..."
cd backend || exit
mvn clean install -DskipTests

echo ""
echo "==========================================="
echo "Starting Spring Boot Backend..."
echo "Backend will run on: http://localhost:8080"
echo "API Endpoints: http://localhost:8080/api/tasks"
echo "H2 Console: http://localhost:8080/h2-console (optional)"
echo "==========================================="
echo ""

mvn spring-boot:run
