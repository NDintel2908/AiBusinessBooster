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

  // Redirect route for VNPAY payment links
  app.get("/go", (req: Request, res: Response) => {
    const paymentUrl = req.query.paymentUrl as string;
    
    if (!paymentUrl) {
      // Khi không có paymentUrl, chuyển hướng đến trang Go để hiển thị giao diện
      return res.redirect('/go.html');
    }
    
    try {
      // Decode the payment URL
      const decodedUrl = decodeURIComponent(paymentUrl);
      
      // Redirect to the payment gateway
      return res.redirect(decodedUrl);
    } catch (error) {
      console.error("Error decoding payment URL:", error);
      return res.status(400).send("Invalid payment URL");
    }
  });

  return http.createServer(app);
}