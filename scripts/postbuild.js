import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const distPath = path.resolve(__dirname, '..', 'dist');
const vercelOutputPath = path.resolve(__dirname, '..', '.vercel', 'output', 'static');

// Ensure Vercel output directory exists
if (!fs.existsSync(vercelOutputPath)) {
  fs.mkdirSync(vercelOutputPath, { recursive: true });
  console.log('Created Vercel output directory');
}

// Copy dist files to Vercel output directory
if (fs.existsSync(distPath)) {
  // Read all files and directories from dist
  const distFiles = fs.readdirSync(distPath);
  
  distFiles.forEach(file => {
    const distFilePath = path.join(distPath, file);
    const vercelFilePath = path.join(vercelOutputPath, file);
    
    if (fs.statSync(distFilePath).isDirectory()) {
      // It's a directory, create it in the Vercel output directory if it doesn't exist
      if (!fs.existsSync(vercelFilePath)) {
        fs.mkdirSync(vercelFilePath, { recursive: true });
      }
      
      // Copy directory contents recursively
      copyDirectoryRecursively(distFilePath, vercelFilePath);
    } else {
      // It's a file, copy it
      fs.copyFileSync(distFilePath, vercelFilePath);
    }
  });
  
  console.log('Successfully copied build files to Vercel output directory');
} else {
  console.error('Cannot find the build directory. Make sure the build command ran successfully.');
  process.exit(1);
}

// Function to copy directory contents recursively
function copyDirectoryRecursively(sourceDir, targetDir) {
  // Read all files/directories in the source directory
  const items = fs.readdirSync(sourceDir);
  
  items.forEach(item => {
    const sourcePath = path.join(sourceDir, item);
    const targetPath = path.join(targetDir, item);
    
    if (fs.statSync(sourcePath).isDirectory()) {
      // It's a directory, create it in the target directory if it doesn't exist
      if (!fs.existsSync(targetPath)) {
        fs.mkdirSync(targetPath, { recursive: true });
      }
      
      // Recursively copy its contents
      copyDirectoryRecursively(sourcePath, targetPath);
    } else {
      // It's a file, copy it
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
}