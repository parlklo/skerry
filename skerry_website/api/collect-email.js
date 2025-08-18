import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const resend = new Resend(process.env.RESEND_LEADS_API_KEY);

// Supabase client for server-side operations
const supabaseUrl = 'https://zmpcqjouhspwrlbfouze.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Simple in-memory rate limiting
const rateLimitMap = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const windowMs = 60000; // 1 minute
  const maxRequests = 5; // Max 5 email registrations per minute per IP
  
  const requests = rateLimitMap.get(ip) || [];
  const validRequests = requests.filter(time => now - time < windowMs);
  
  if (validRequests.length >= maxRequests) {
    return true;
  }
  
  validRequests.push(now);
  rateLimitMap.set(ip, validRequests);
  return false;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

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
    // Rate limiting
    const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
    if (isRateLimited(clientIp)) {
      return res.status(429).json({ 
        message: 'För många förfrågningar. Försök igen om en minut.',
        success: false 
      });
    }

    const { email, campaign = 'free_website_2025', source = 'website' } = req.body;

    // Validate required fields
    if (!email) {
      return res.status(400).json({ message: 'E-postadress krävs' });
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return res.status(400).json({ message: 'Ogiltig e-postadress' });
    }

    // Check if email already exists for this campaign
    const { data: existingLead, error: checkError } = await supabase
      .from('email_leads')
      .select('id, created_at')
      .eq('email', email)
      .eq('campaign', campaign)
      .single();

    if (checkError && checkError.code !== 'PGRST116') { // PGRST116 = no rows found
      console.error('Error checking existing email:', checkError);
      return res.status(500).json({ message: 'Ett fel uppstod. Försök igen senare.' });
    }

    // If email already exists for this campaign
    if (existingLead) {
      const createdDate = new Date(existingLead.created_at).toLocaleDateString('sv-SE');
      return res.status(409).json({ 
        message: `Du har redan registrerat dig för detta erbjudande (${createdDate}). Kolla din e-post för formulärlänken!`,
        success: false,
        alreadyExists: true
      });
    }

    // Save to database
    const { data: newLead, error: insertError } = await supabase
      .from('email_leads')
      .insert([
        {
          email,
          campaign,
          source,
          email_sent_at: new Date().toISOString()
        }
      ])
      .select()
      .single();

    if (insertError) {
      console.error('Error saving email to database:', insertError);
      return res.status(500).json({ message: 'Ett fel uppstod när e-postadressen skulle sparas.' });
    }

    // Send Tally form link to user
    const tallyLink = 'https://tally.so/r/w5gyeQ';
    
    const userEmailData = await resend.emails.send({
      from: 'Skerry <noreply@skerry.ai>',
      to: [email],
      subject: 'Din kostnadsfria hemsida väntar! 🚀',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb;">
          <div style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); padding: 40px 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">
              Tack för ditt intresse! 🎉
            </h1>
            <p style="color: #fed7aa; margin: 10px 0 0 0; font-size: 16px;">
              Din kostnadsfria hemsida är bara några klick bort
            </p>
          </div>
          
          <div style="padding: 40px 20px; background-color: white;">
            <h2 style="color: #1f2937; margin-bottom: 20px;">Nästa steg:</h2>
            
            <p style="color: #4b5563; line-height: 1.6; margin-bottom: 25px;">
              För att vi ska kunna skapa din perfekta hemsida behöver vi veta lite mer om dig och ditt företag. 
              Klicka på knappen nedan för att fylla i vårt snabba formulär:
            </p>
            
            <div style="text-align: center; margin: 35px 0;">
              <a href="${tallyLink}" 
                 style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); 
                        color: white; 
                        padding: 15px 30px; 
                        text-decoration: none; 
                        border-radius: 8px; 
                        font-weight: bold; 
                        font-size: 16px;
                        display: inline-block;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                Fyll i formuläret här →
              </a>
            </div>
            
            <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; border-left: 4px solid #22c55e; margin: 25px 0;">
              <h3 style="color: #166534; margin: 0 0 10px 0; font-size: 16px;">Vad händer sedan?</h3>
              <ul style="color: #166534; margin: 0; padding-left: 20px;">
                <li>Vi granskar din ansökan inom 24h</li>
                <li>Du får en personlig design-skiss</li>
                <li>Leverans inom cirka 1 vecka</li>
                <li>Du betalar bara om du är 100% nöjd</li>
              </ul>
            </div>
            
            <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
              Har du frågor? Svara bara på det här mailet så återkommer vi snabbt!
            </p>
            
            <hr style="border: none; height: 1px; background-color: #e5e7eb; margin: 30px 0;">
            
            <p style="color: #9ca3af; font-size: 12px; text-align: center;">
              Med vänliga hälsningar,<br>
              <strong>Team Skerry</strong><br>
              Stockholm, Sverige
            </p>
          </div>
        </div>
      `,
    });

    // Send notification to you
    const notificationData = await resend.emails.send({
      from: 'Skerry Notifications <noreply@skerry.ai>',
      to: ['kasperparlklo@skerry.ai'],
      subject: `🎯 Ny lead: ${email} (${campaign})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f97316;">Ny email-registrering!</h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>E-post:</strong> ${email}</p>
            <p><strong>Kampanj:</strong> ${campaign}</p>
            <p><strong>Källa:</strong> ${source}</p>
            <p><strong>Tid:</strong> ${new Date().toLocaleString('sv-SE')}</p>
          </div>
          
          <p style="color: #6b7280; font-size: 14px;">
            Tally-formuläret har skickats till användaren automatiskt.
          </p>
        </div>
      `,
    });

    console.log('Email sent to user:', userEmailData);
    console.log('Notification sent:', notificationData);
    
    return res.status(200).json({ 
      message: 'Tack! Kolla din e-post för nästa steg.',
      success: true 
    });

  } catch (error) {
    console.error('Error in collect-email handler:', error);
    
    return res.status(500).json({ 
      message: 'Ett fel uppstod. Försök igen senare.',
      success: false 
    });
  }
}
