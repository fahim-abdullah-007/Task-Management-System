#!/bin/bash

# Task Manager Frontend Startup Script
# Starts the React/Vite frontend on port 5173

echo "==========================================="
echo "🚀 Task Manager - Frontend Starting"
echo "==========================================="
echo ""
echo "Node Version:"
node --version
echo "npm Version:"
npm --version
echo ""

cd frontend || exit

echo "Installing dependencies..."
npm install

echo ""
echo "==========================================="
echo "Starting Vite Development Server..."
echo "Frontend will run on: http://localhost:5173"
echo "Press Ctrl+C to stop"
echo "==========================================="
echo ""

npm run dev
