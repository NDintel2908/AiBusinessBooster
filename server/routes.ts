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

  // Handle the /go route by serving the index.html with client-side route
  app.get("/go", (req: Request, res: Response) => {
    // Just send the index.html file and let client-side routing handle it
    const indexPath = 'index.html';
    res.sendFile(indexPath, { root: './public' });
  });
  
  // API endpoint to get the decoded payment URL
  app.get("/api/payment-redirect", (req: Request, res: Response) => {
    try {
      // Get the payment URL from the query string
      const paymentUrl = req.query.paymentUrl as string;
      
      if (!paymentUrl) {
        return res.status(400).json({
          success: false,
          error: "Missing payment URL"
        });
      }
      
      // Decode the URL
      const decodedUrl = decodeURIComponent(paymentUrl);
      console.log("Payment URL received:", decodedUrl);
      
      // Return the decoded URL to the client
      return res.status(200).json({
        success: true,
        url: decodedUrl
      });
    } catch (error) {
      console.error("Error processing payment URL:", error);
      return res.status(400).json({
        success: false,
        error: "Invalid payment URL format"
      });
    }
  });

  return http.createServer(app);
}