import { app } from '../server/app';
import { registerRoutes } from '../server/routes';

// Đăng ký tất cả các routes API
registerRoutes(app);

// Export handler cho Vercel serverless
export default app;