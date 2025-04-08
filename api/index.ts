import express from 'express';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../server/storage';
import { contactSchema } from '../shared/schema';
import { z } from 'zod';

// Tạo handler cho serverless function
const handler = async (req: VercelRequest, res: VercelResponse) => {
  // Đảm bảo đây là request POST
  if (req.method === 'POST') {
    try {
      // Validate request body
      const validatedData = contactSchema.parse(req.body);
      
      // Lưu contact submission
      const contact = await storage.saveContactSubmission(validatedData);
      
      // Trả về kết quả thành công
      return res.status(200).json({ 
        success: true, 
        message: "Contact form submitted successfully",
        contactId: contact.id
      });
    } catch (error) {
      // Xử lý lỗi validation
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } 
      
      // Xử lý lỗi khác
      console.error("Error submitting contact form:", error);
      return res.status(500).json({ 
        success: false, 
        message: "Failed to submit contact form" 
      });
    }
  } else {
    // Trả về phương thức không được hỗ trợ
    return res.status(405).json({ message: "Method not allowed" });
  }
};

export default handler;