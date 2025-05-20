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

  // Redirect route for VNPAY payment links - Server-side implementation
  app.get("/go", (req: Request, res: Response) => {
    const paymentUrl = req.query.paymentUrl as string;
    
    if (!paymentUrl) {
      return res.status(400).send("Missing payment URL");
    }
    
    try {
      // Thử xử lý server-side redirect trước
      const decodedUrl = decodeURIComponent(paymentUrl);
      
      // Set headers để không cache trang chuyển hướng
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
      
      // Chuyển hướng trực tiếp từ server
      return res.redirect(302, decodedUrl);
    } catch (error) {
      console.error("Error decoding payment URL:", error);
      
      // Fallback đến client-side redirect nếu có lỗi
      return res.redirect(`/payment-redirect.html?paymentUrl=${encodeURIComponent(paymentUrl)}`);
    }
  });

  return http.createServer(app);
}