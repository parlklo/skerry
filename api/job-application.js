import { createClient } from '@supabase/supabase-js';

// Supabase client for server-side operations
const supabaseUrl = 'https://zmpcqjouhspwrlbfouze.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

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
    console.log('Job application webhook received:', JSON.stringify(req.body, null, 2));

    // Tally skickar data i olika format beroende på formulär
    const payload = req.body;
    
    // Extrahera relevant data från Tally webhook
    let applicantData = {
      name: null,
      email: null,
      phone: null,
      experience: null,
      motivation: null,
      portfolio: null,
      availability: null
    };

    // Parse Tally fields
    if (payload.data && payload.data.fields) {
      payload.data.fields.forEach(field => {
        switch (field.key) {
          case 'name':
          case 'full_name':
            applicantData.name = field.value;
            break;
          case 'email':
            applicantData.email = field.value;
            break;
          case 'phone':
          case 'telephone':
            applicantData.phone = field.value;
            break;
          case 'experience':
          case 'work_experience':
            applicantData.experience = field.value;
            break;
          case 'motivation':
          case 'why_apply':
            applicantData.motivation = field.value;
            break;
          case 'portfolio':
          case 'portfolio_url':
            applicantData.portfolio = field.value;
            break;
          case 'availability':
          case 'start_date':
            applicantData.availability = field.value;
            break;
        }
      });
    }

    // Validate required fields
    if (!applicantData.name || !applicantData.email) {
      console.error('Missing required fields in job application:', applicantData);
      return res.status(400).json({ 
        message: 'Namn och e-post krävs för ansökan',
        success: false 
      });
    }

    // Save job application to database (you might want to create a separate table for this)
    const { data: newApplication, error: insertError } = await supabase
      .from('job_applications') // You'll need to create this table
      .insert([
        {
          position: 'Junior Content Creator',
          name: applicantData.name,
          email: applicantData.email,
          phone: applicantData.phone,
          experience: applicantData.experience,
          motivation: applicantData.motivation,
          portfolio: applicantData.portfolio,
          availability: applicantData.availability,
          status: 'new',
          applied_at: new Date().toISOString()
        }
      ])
      .select()
      .single();

    if (insertError) {
      console.error('Error saving job application:', insertError);
      // For now, continue even if DB save fails - we still want to send the notification
    }

    // Send notification to you about new job application
    try {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_LEADS_API_KEY);

      await resend.emails.send({
        from: 'Skerry Karriär <noreply@skerry.ai>',
        to: ['kasperparlklo@skerry.ai'],
        subject: `🎯 Ny jobbansökan: ${applicantData.name} - Junior Content Creator`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #f97316;">Ny jobbansökan mottagen!</h2>
            
            <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #16a34a;">
              <h3 style="margin-top: 0; color: #16a34a;">Kandidatinformation</h3>
              <p><strong>Position:</strong> Junior Content Creator</p>
              <p><strong>Namn:</strong> ${applicantData.name}</p>
              <p><strong>E-post:</strong> ${applicantData.email}</p>
              ${applicantData.phone ? `<p><strong>Telefon:</strong> ${applicantData.phone}</p>` : ''}
              ${applicantData.availability ? `<p><strong>Tillgänglighet:</strong> ${applicantData.availability}</p>` : ''}
              ${applicantData.portfolio ? `<p><strong>Portfolio:</strong> <a href="${applicantData.portfolio}">${applicantData.portfolio}</a></p>` : ''}
            </div>
            
            ${applicantData.experience ? `
              <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <h4 style="margin-top: 0; color: #92400e;">Erfarenhet</h4>
                <p style="white-space: pre-wrap;">${applicantData.experience}</p>
              </div>
            ` : ''}
            
            ${applicantData.motivation ? `
              <div style="background-color: #e0f2fe; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <h4 style="margin-top: 0; color: #0277bd;">Motivation</h4>
                <p style="white-space: pre-wrap;">${applicantData.motivation}</p>
              </div>
            ` : ''}
            
            <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
              <strong>Ansökan mottagen:</strong> ${new Date().toLocaleString('sv-SE')}<br>
              <strong>Via:</strong> skerry.ai/karriar
            </p>
          </div>
        `,
      });

      // Send confirmation email to applicant
      await resend.emails.send({
        from: 'Kasper från Skerry <noreply@skerry.ai>',
        to: [applicantData.email],
        subject: 'Tack för din ansökan till Skerry!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #f97316;">Tack för din ansökan!</h2>
            
            <p>Hej ${applicantData.name}!</p>
            
            <p>Tack för att du ansökt till rollen som Junior Content Creator hos Skerry. Vi har mottagit din ansökan och kommer att gå igenom den noggrant.</p>
            
            <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #16a34a;">
              <h3 style="margin-top: 0; color: #16a34a;">Nästa steg:</h3>
              <ul style="margin: 0; padding-left: 20px;">
                <li>Vi granskar din ansökan inom 1 vecka</li>
                <li>Om du går vidare kontaktar vi dig för en första intervju</li>
                <li>Du kommer att höra från oss oavsett utfall</li>
              </ul>
            </div>
            
            <p>Under tiden kan du gärna kolla in våra <a href="https://skerry.ai/services" style="color: #f97316;">tjänster</a> för att lära dig mer om vad vi gör på Skerry.</p>
            
            <p>Ha en bra dag!</p>
            
            <p>Mvh,<br>
            Kasper<br>
            <span style="color: #666;">Grundare, Skerry</span></p>
          </div>
        `,
      });

    } catch (emailError) {
      console.error('Error sending notification emails:', emailError);
      // Continue anyway - webhook shouldn't fail because of email issues
    }

    return res.status(200).json({ 
      message: 'Jobbansökan mottagen framgångsrikt',
      success: true 
    });

  } catch (error) {
    console.error('Error in job-application webhook handler:', error);
    
    return res.status(500).json({ 
      message: 'Ett fel uppstod vid hantering av jobbansökan',
      error: error.message,
      success: false 
    });
  }
}
