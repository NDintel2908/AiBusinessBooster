import { Express } from 'express';
import { log } from './vite';

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
    
    // Cấu hình các header bảo mật
    app.use((req, res, next) => {
      res.setHeader('X-Powered-By', 'NexusMatch AI');
      next();
    });
    
    // Đặt app trong chế độ production khi chạy trên Vercel
    app.set('env', 'production');
  }
  
  return app;
}