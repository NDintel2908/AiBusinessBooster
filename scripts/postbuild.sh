#!/bin/bash

# Create the Vercel output static directory if it doesn't exist
mkdir -p .vercel/output/static

# Copy all contents from dist to .vercel/output/static
if [ -d "dist" ]; then
  cp -r dist/* .vercel/output/static/
  echo "Successfully copied build files to Vercel output directory"
else
  echo "Error: dist directory not found. Build may have failed."
  exit 1
fi
