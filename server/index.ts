import { app } from "./app";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

(async () => {
  // Check if running on Vercel
  const isVercel = process.env.VERCEL === '1';
  
  if (isVercel) {
    log('Setting up for Vercel deployment environment', 'server');
    // In Vercel we don't need to start a server as it's handled by the platform
    // We only register the routes for the API
    await registerRoutes(app);
  } else {
    // Đăng ký tất cả các routes API
    const server = await registerRoutes(app);

    // importantly only setup vite in development and after
    // setting up all the other routes so the catch-all route
    // doesn't interfere with the other routes
    if (app.get("env") === "development") {
      await setupVite(app, server);
    } else {
      serveStatic(app);
    }

    // Use environment port or fallback to 5000
    // Vercel will set process.env.PORT in production
    const port = process.env.PORT || 5000;
    server.listen({
      port: parseInt(port.toString()),
      host: "0.0.0.0",
      reusePort: true,
    }, () => {
      log(`serving on port ${port}`);
    });
  }
})();
