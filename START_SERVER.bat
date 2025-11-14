@echo off
echo Starting local server on http://localhost:8000
echo.
echo Open your browser to: http://localhost:8000
echo Press Ctrl+C to stop
echo.
python -m http.server 8000
