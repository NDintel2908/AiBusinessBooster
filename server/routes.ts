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
      // Trả về HTML với script chuyển hướng cải tiến
      return res.send(`
        <!DOCTYPE html>
        <html lang="vi">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Đang chuyển hướng...</title>
          <script>
            // Script xử lý chuyển hướng thanh toán
            (function() {
              const url = new URL(location.href);
              const path = url.pathname;
              const params = url.search;

              // Trường hợp 1: Chuyển hướng khi có tham số paymentUrl
              const allowedHosts = ['vnpayment.vn', 'sandbox.vnpayment.vn'];
              const paymentUrl = new URLSearchParams(location.search).get('paymentUrl');
              if (paymentUrl) {
                try {
                  const host = new URL(paymentUrl).hostname;
                  if (allowedHosts.includes(host)) location.href = paymentUrl;
                  else console.error('Domain không được phép');
                } catch {
                  console.error('URL không hợp lệ');
                }
                return;
              }

              // Trường hợp 2: Chuyển hướng khi từ VNPAY trở về
              if (path.includes('/dev-vnpay-return')) {
                const newUrl = 'https://dev.bcp.global/vnpay-return' + params;
                location.href = newUrl;
                return;
              } else if (path.includes('/vnpay-return')) {
                const newUrl = 'https://bcp.global/vnpay-return' + params;
                location.href = newUrl;
                return;
              }
            })();
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