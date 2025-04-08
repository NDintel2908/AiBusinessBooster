import type { VercelRequest, VercelResponse } from '@vercel/node';

// Định nghĩa schema cho contact form
interface ContactRequest {
  name: string;
  email: string;
  company: string;
  requirements?: string;
}

// Interface cho contact data
interface Contact {
  id: number;
  name: string;
  email: string;
  company: string;
  requirements?: string;
  createdAt: Date;
}

// Validate function
function validateContact(data: any): { valid: boolean; errors?: string[] } {
  const errors: string[] = [];
  
  if (!data.name || data.name.trim().length === 0) {
    errors.push("Name is required");
  }
  
  if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.push("Valid email is required");
  }
  
  if (!data.company || data.company.trim().length === 0) {
    errors.push("Company name is required");
  }
  
  return {
    valid: errors.length === 0,
    errors: errors.length > 0 ? errors : undefined
  };
}

// Lưu trữ dữ liệu tạm thời
const contactSubmissions: Contact[] = [];
let contactId = 1;

// Hàm lưu contact submission
async function saveContactSubmission(data: ContactRequest): Promise<Contact> {
  const contact: Contact = {
    id: contactId++,
    name: data.name,
    email: data.email,
    company: data.company,
    requirements: data.requirements || '',
    createdAt: new Date()
  };
  
  contactSubmissions.push(contact);
  return contact;
}

// Tạo handler cho serverless function
const handler = async (req: VercelRequest, res: VercelResponse) => {
  // Đảm bảo CORS headers cho requests từ mọi origin
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Xử lý CORS preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  // Đảm bảo đây là request POST
  if (req.method === 'POST') {
    try {
      // Validate request body
      const validation = validateContact(req.body);
      if (!validation.valid) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: validation.errors 
        });
      }
      
      // Lưu contact submission
      const contact = await saveContactSubmission(req.body as ContactRequest);
      
      // Trả về kết quả thành công
      return res.status(200).json({ 
        success: true, 
        message: "Contact form submitted successfully",
        contactId: contact.id
      });
    } catch (error) {      
      // Xử lý lỗi khác
      console.error("Error submitting contact form:", error);
      return res.status(500).json({ 
        success: false, 
        message: "Failed to submit contact form" 
      });
    }
  } else {
    // Trả về phương thức không được hỗ trợ
    return res.status(405).json({ 
      success: false,
      message: "Method not allowed" 
    });
  }
};

export default handler;