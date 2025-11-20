@echo off
echo ========================================
echo   CollabFlow Admin Dashboard
echo   Starting Vite Development Server...
echo ========================================
echo.

REM Check if node_modules exists
if not exist "node_modules\" (
    echo [1/2] Installing dependencies...
    echo This may take a few minutes on first run...
    echo.
    call npm install
    echo.
    echo Dependencies installed successfully!
    echo.
) else (
    echo Dependencies already installed.
    echo.
)

echo [2/2] Starting development server...
echo.
echo The admin dashboard will open at:
echo http://localhost:3000/admin
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

call npm run dev

pause
