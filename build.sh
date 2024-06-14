#!/bin/bash

# Function to check if a command executed successfully
check_command_status() {
    if [ $? -ne 0 ]; then
        echo "Error: Command failed. Exiting."
        exit 1
    fi
}

# Build process
echo "Building Backend..."
npm run build --prefix backend
check_command_status

echo "Building Frontend..."
npm run build --prefix frontend
check_command_status

# Delete current build directories
echo "Deleting current frontend build directory..."
rm -rf "./backend/src/frontend"
check_command_status

# Create new build directory and move build files
echo "Creating new frontend build directory..."
mkdir -p "./backend/src/frontend/build"
check_command_status

echo "Moving frontend build files..."
cp -r "./frontend/build" "./backend/src/frontend"
check_command_status

echo "Build completed successfully."
