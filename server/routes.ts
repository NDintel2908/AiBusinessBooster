import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { contactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission API endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = contactSchema.parse(req.body);
      
      // Store the contact form submission
      const contact = await storage.saveContactSubmission(validatedData);
      
      res.status(200).json({ 
        success: true, 
        message: "Contact form submitted successfully",
        contactId: contact.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Error submitting contact form:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit contact form" 
        });
      }
    }
  });

  // Direct payment redirection route
  app.get("/go", (req: Request, res: Response) => {
    try {
      const paymentUrl = req.query.paymentUrl as string;
      
      if (!paymentUrl) {
        // Nếu không có URL, hiển thị thông báo lỗi
        return res.send(`
          <!DOCTYPE html>
          <html lang="vi">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Chuyển hướng thanh toán</title>
            <style>
              body { 
                font-family: sans-serif; 
                background-color: #111827; 
                color: #ffffff;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
              }
              .error { color: red; font-weight: bold; }
            </style>
          </head>
          <body>
            <div class="error">Không tìm thấy URL thanh toán</div>
          </body>
          </html>
        `);
      }
      
      // Phương pháp 1: Chuyển hướng trực tiếp từ server
      try {
        // Giải mã URL và chuyển hướng trực tiếp
        const decodedUrl = decodeURIComponent(paymentUrl);
        
        // Log URL trước khi chuyển hướng (để debug)
        console.log("Redirecting to:", decodedUrl);
        
        // Chuyển hướng ngay lập tức
        return res.redirect(decodedUrl);
      } catch (decodeError) {
        console.error("Error decoding URL:", decodeError);
        
        // Nếu gặp lỗi giải mã, sử dụng phương pháp client-side với URL gốc
        // Phương pháp 2: Sử dụng client-side redirect khi phương pháp 1 thất bại
        return res.send(`
          <!DOCTYPE html>
          <html lang="vi">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Chuyển hướng đến cổng thanh toán</title>
            <script>
              // Chuyển hướng ngay lập tức khi trang được tải
              window.location.href = "${paymentUrl}";
            </script>
            <style>
              body {
                margin: 0;
                padding: 0;
                background-color: #111827;
                color: white;
                font-family: sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                flex-direction: column;
              }
              .spinner {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                border: 3px solid rgba(255, 255, 255, 0.1);
                border-top-color: #3B82F6;
                animation: spin 1s linear infinite;
                margin-bottom: 20px;
              }
              @keyframes spin {
                to {transform: rotate(360deg);}
              }
            </style>
          </head>
          <body>
            <div class="spinner"></div>
            <p>Đang chuyển hướng đến cổng thanh toán...</p>
          </body>
          </html>
        `);
      }
    } catch (error) {
      console.error("Error in /go route:", error);
      res.status(500).send("Có lỗi xảy ra khi xử lý yêu cầu chuyển hướng");
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
