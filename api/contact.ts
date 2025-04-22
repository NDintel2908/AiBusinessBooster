
import { VercelRequest, VercelResponse } from '@vercel/node';
import sgMail from '@sendgrid/mail';
import { contactSchema } from '@shared/schema';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const validatedData = contactSchema.parse(req.body);
    const { name, email, company, requirements } = validatedData;

    const msg = {
      to: 'bao.nguyen@bcp.global',
      from: 'contact@bcp.global', // This should be your verified sender
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company}
Requirements: ${requirements || 'Not specified'}
      `,
      html: `
<strong>Name:</strong> ${name}<br>
<strong>Email:</strong> ${email}<br>
<strong>Company:</strong> ${company}<br>
<strong>Requirements:</strong> ${requirements || 'Not specified'}<br>
      `,
    };

    await sgMail.send(msg);
    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({ success: false, message: 'Failed to process contact form' });
  }
}
