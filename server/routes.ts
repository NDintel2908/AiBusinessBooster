import type { Express } from "express";
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

  // Payment redirection route
  app.get("/go", (req, res) => {
    try {
      // Trả về HTML với script chuyển hướng
      return res.send(`
        <!DOCTYPE html>
        <html lang="vi">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Đang chuyển hướng...</title>
          <script>
            const url = new URL(location.href);
            const params = new URLSearchParams(url.search);
            const paymentUrl = params.get('paymentUrl');
            if (paymentUrl) {
              location.href = paymentUrl;
            }
          </script>
          <style>
            body {
              margin: 0;
              padding: 0;
              background-color: #111827;
              color: white;
              font-family: sans-serif;
            }
            .loading {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              height: 100vh;
              text-align: center;
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
          <div class="loading">
            <div class="spinner"></div>
            <p>Đang chuyển hướng đến cổng thanh toán...</p>
          </div>
        </body>
        </html>
      `);
    } catch (error) {
      console.error("Error processing redirect:", error);
      res.status(500).send("Có lỗi xảy ra khi chuyển hướng");
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
