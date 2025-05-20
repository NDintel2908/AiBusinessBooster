import express, { Express, Request, Response } from "express";
import http from "http";
import { storage } from "./storage";
import { contactSchema } from "@shared/schema";
import z from "zod";

export async function registerRoutes(app: Express): Promise<http.Server> {
  // API routes
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate contact form data
      const validatedData = contactSchema.parse(req.body);
      
      // Save contact submission
      const contact = await storage.saveContactSubmission(validatedData);
      
      // Return success response
      return res.status(200).json({
        success: true,
        data: contact
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          error: error.errors
        });
      }
      
      return res.status(500).json({
        success: false,
        error: "An unexpected error occurred"
      });
    }
  });

  // Đơn giản hóa route cho chuyển hướng thanh toán VNPAY
  app.get("/go", (req: Request, res: Response) => {
    // Lấy tham số paymentUrl từ query string
    const paymentUrl = req.query.paymentUrl as string;
    
    // Kiểm tra xem có paymentUrl không
    if (!paymentUrl) {
      return res.status(400).send("Missing payment URL");
    }
    
    try {
      // Giải mã URL
      const decodedUrl = decodeURIComponent(paymentUrl);
      
      // Thiết lập headers để tránh cache trên trình duyệt
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
      res.setHeader('Surrogate-Control', 'no-store');
      
      // Chuyển hướng ngay lập tức đến URL đã giải mã
      // Sử dụng HTTP 302 Found để đảm bảo chuyển hướng nhanh
      return res.redirect(302, decodedUrl);
    } catch (error) {
      console.error("Error decoding payment URL:", error);
      return res.status(400).send("Invalid payment URL format");
    }
  });

  return http.createServer(app);
}