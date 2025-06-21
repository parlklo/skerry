import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Alla fält är obligatoriska' });
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Skerry Kontaktformulär <noreply@skerry.ai>', // Now using your verified domain
      to: ['kasperparlklo@skerry.ai'],
      subject: `Nytt meddelande från ${name} via skerry.ai`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f97316;">Nytt kontaktformulär meddelande</h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Från:</strong> ${name}</p>
            <p><strong>E-post:</strong> ${email}</p>
          </div>
          
          <div style="background-color: white; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="margin-top: 0;">Meddelande:</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
            Detta meddelande skickades via kontaktformuläret på skerry.ai
          </p>
        </div>
      `,
    });

    console.log('Email sent successfully:', data);
    
    return res.status(200).json({ 
      message: 'Meddelandet har skickats!',
      success: true 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    
    return res.status(500).json({ 
      message: 'Ett fel uppstod när meddelandet skulle skickas. Försök igen senare.',
      success: false 
    });
  }
} 