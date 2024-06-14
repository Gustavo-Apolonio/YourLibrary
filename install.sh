#!/bin/bash

# Function to check if a command executed successfully
check_command_status() {
    if [ $? -ne 0 ]; then
        echo "Error: Command failed. Exiting."
        exit 1
    fi
}

# Install Backend and Frontend dependencies
echo "Installing Backend..."
cd ./backend
npm install --save
check_command_status

echo "Installing Backend Development Dependencies..."
npm install --save-dev
check_command_status

echo "Installing Frontend..."
cd ../frontend
npm install --save
check_command_status

echo "Installing Frontend Development Dependencies..."
npm install --save-dev
check_command_status

echo "Installing App Dependencies..."
cd ..
npm install --save
check_command_status

if [ "$1" = "build" ]; then
  bash build.sh
  echo "Build and installation completed successfully."
else
  echo "Installation completed successfully."
fi
