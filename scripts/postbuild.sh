
#!/bin/bash

# Create Vercel output directories
mkdir -p .vercel/output/static
mkdir -p .vercel/output/functions/api

# Copy static files
if [ -d "dist" ]; then
  cp -r dist/* .vercel/output/static/
  echo "Successfully copied build files to Vercel output directory"
else
  echo "Error: dist directory not found. Build may have failed."
  exit 1
fi

# Copy API files
if [ -d "api" ]; then
  cp -r api/* .vercel/output/functions/api/
  echo "Successfully copied API files"
fi
