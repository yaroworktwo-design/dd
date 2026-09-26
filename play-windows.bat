@echo off
rem Dymok i Milena: installs dependencies once, starts the game server and opens the browser.
cd /d "%~dp0"
where npm >nul 2>nul || (echo Please install Node.js LTS from https://nodejs.org/ & pause & exit /b 1)
if not exist node_modules call npm install
start "" http://localhost:5173
call npm run dev
