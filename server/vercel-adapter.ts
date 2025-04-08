import { Express } from 'express';
import { log } from './vite';
import path from 'path';

/**
 * Cấu hình Express app cho môi trường Vercel
 * @param app Express app instance
 * @returns Express app với cấu hình Vercel
 */
export function setupVercelAdapter(app: Express): Express {
  // Detect if we're running on Vercel
  const isVercel = process.env.VERCEL === '1';
  
  if (isVercel) {
    log('Running on Vercel environment', 'vercel-adapter');
    
    // Set CORS headers for Vercel environment
    app.use((req, res, next) => {
      // Set security headers
      res.setHeader('X-Powered-By', 'NexusMatch AI');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      
      // Handle OPTIONS method
      if (req.method === 'OPTIONS') {
        return res.status(200).end();
      }
      
      next();
    });
    
    // Set production mode on Vercel
    app.set('env', 'production');
    process.env.NODE_ENV = 'production';
  }
  
  return app;
}