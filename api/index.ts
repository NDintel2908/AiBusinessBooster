import type { VercelRequest, VercelResponse } from '@vercel/node';

// Root API handler để kiểm tra health và routing
export default function handler(req: VercelRequest, res: VercelResponse) {
  // Đảm bảo CORS headers cho requests từ mọi origin
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Xử lý CORS preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  // Health check và API info cho GET requests
  return res.status(200).json({
    success: true,
    message: "API is operational",
    version: "1.0.0",
    endpoints: [
      { path: "/api", methods: ["GET"], description: "API health check" },
      { path: "/api/contact", methods: ["POST"], description: "Contact form submission endpoint" }
    ],
    timestamp: new Date().toISOString()
  });
}