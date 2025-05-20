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

  // Không xử lý route "/go" ở server-side nữa vì đã có static file
  // Để static file client/public/go/index.html xử lý

  return http.createServer(app);
}