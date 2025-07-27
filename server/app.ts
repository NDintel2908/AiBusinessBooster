import express, { type Request, Response, NextFunction } from "express";
import { setupVercelAdapter } from "./vercel-adapter";
import { log } from "./vite";

// Tạo Express app để chia sẻ với API handler của Vercel
export const createApp = () => {
  const app = express();
  
  // Cấu hình adapter cho Vercel
  setupVercelAdapter(app);
  
  // Cấu hình Express middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  
  // Middleware ghi log
  app.use((req, res, next) => {
    const start = Date.now();
    const path = req.path;
    let capturedJsonResponse: Record<string, any> | undefined = undefined;
  
    const originalResJson = res.json;
    res.json = function (bodyJson, ...args) {
      capturedJsonResponse = bodyJson;
      return originalResJson.apply(res, [bodyJson, ...args]);
    };
  
    res.on("finish", () => {
      const duration = Date.now() - start;
      if (path.startsWith("/api")) {
        let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
        if (capturedJsonResponse) {
          logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
        }
  
        if (logLine.length > 80) {
          logLine = logLine.slice(0, 79) + "…";
        }
  
        log(logLine);
      }
    });
  
    next();
  });
  
  // Error handling middleware
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
  
    res.status(status).json({ message });
    throw err;
  });
  
  return app;
};

// Tạo một instance mặc định
export const app = createApp();