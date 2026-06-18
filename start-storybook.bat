@echo off
REM Launch the design-system Storybook. Double-click or run from a terminal.
cd /d "%~dp0"
echo Starting Storybook at http://localhost:6006/ ...
echo (Press Ctrl+C in this window to stop it.)
call npm run storybook
pause
