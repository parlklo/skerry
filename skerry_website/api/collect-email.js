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

    const { 
      email, 
      campaign = 'free_website_2025', 
      source = 'website',
      utm_platform,
      utm_content_type, 
      utm_creator
    } = req.body;

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
          email_sent_at: new Date().toISOString(),
          // UTM tracking data
          utm_platform: utm_platform || null,
          utm_content_type: utm_content_type || null,
          utm_creator: utm_creator || null
        }
      ])
      .select()
      .single();

    if (insertError) {
      console.error('Error saving email to database:', insertError);
      return res.status(500).json({ message: 'Ett fel uppstod när e-postadressen skulle sparas.' });
    }

    // Send Tally form link to user with lead_id for tracking
    const leadId = newLead.lead_id;
    const tallyLink = `https://tally.so/r/w5gyeQ?lead_id=${leadId}${utm_creator ? `&utm_creator=${utm_creator}` : ''}`;
    
    const userEmailData = await resend.emails.send({
      from: 'Kasper från Skerry <noreply@skerry.ai>',
      to: [email],
      subject: 'Formulär för din kostnadsfria hemsida',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 1000px; margin: 0; padding: 20px; color: #333; line-height: 1.6; font-size: 16px;">
          <p>Hej!</p>
          
          <p>För att komma igång behöver vi veta lite mer om vad du tänker kring din hemsida.</p>
          
          <p style="margin: 25px 0;">
            <a href="${tallyLink}" 
               style="background-color: #2563eb; 
                      color: white; 
                      padding: 10px 18px; 
                      text-decoration: none; 
                      border-radius: 3px; 
                      font-weight: 500;
                      border: 1px solid #1d4ed8;
                      display: inline-block;
                      font-size: 16px;">
              Fyll i formuläret här
            </a>
          </p>
          
          <p>Efter att formuläret är inskickat kommer vi tillbaka med ett förslag på din hemsida inom 7 arbetsdagar.</p>
          
          <p>Mvh,<br>
          Kasper<br>
          <span style="color: #666;">Skerry</span></p>
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
            ${utm_platform ? `<p><strong>Plattform:</strong> ${utm_platform}</p>` : ''}
            ${utm_content_type ? `<p><strong>Innehållstyp:</strong> ${utm_content_type}</p>` : ''}
            ${utm_creator ? `<p><strong>Skapare:</strong> ${utm_creator}</p>` : ''}
            <p><strong>Lead ID:</strong> ${leadId}</p>
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
