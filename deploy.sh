#!/bin/bash

# Simple deployment script for Windows
echo "Building the project..."
npm run build

echo "Creating deployment directory..."
if [ ! -d "deploy" ]; then
  mkdir deploy
fi

echo "Copying build files..."
cp -r build/* deploy/

echo "Build files are in the 'deploy' directory"
echo "You can now manually upload these files to GitHub Pages or any hosting service"

echo "Files ready for deployment:"
ls -la deploy/
