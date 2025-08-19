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
    console.log('Tally webhook received:', JSON.stringify(req.body, null, 2));

    // Tally skickar data i olika format beroende på formulär
    // Vi letar efter lead_id i olika platser
    const payload = req.body;
    let leadId = null;

    // Försök hitta lead_id i olika strukturer
    if (payload.data && payload.data.fields) {
      // Struktur 1: data.fields array
      const leadIdField = payload.data.fields.find(field => 
        field.key === 'lead_id' || field.label === 'lead_id'
      );
      if (leadIdField) {
        leadId = leadIdField.value;
      }
    }

    if (!leadId && payload.data && payload.data.lead_id) {
      // Struktur 2: direkta i data
      leadId = payload.data.lead_id;
    }

    if (!leadId && payload.lead_id) {
      // Struktur 3: direkt i root
      leadId = payload.lead_id;
    }

    // Försök även med URL params om de finns
    if (!leadId && payload.data && payload.data.responseUrl) {
      const url = new URL(payload.data.responseUrl);
      leadId = url.searchParams.get('lead_id');
    }

    if (!leadId) {
      console.error('Ingen lead_id hittades i Tally webhook:', payload);
      return res.status(400).json({ 
        message: 'Ingen lead_id hittades i webhook data',
        success: false 
      });
    }

    // Uppdatera lead i databasen
    const { data: updatedLead, error } = await supabase
      .from('email_leads')
      .update({
        form_completed: true,
        notes: `Tally formulär komplett: ${new Date().toISOString()}`
      })
      .eq('lead_id', leadId)
      .select()
      .single();

    if (error) {
      console.error('Error updating lead:', error);
      return res.status(500).json({ 
        message: 'Fel vid uppdatering av lead',
        error: error.message,
        success: false 
      });
    }

    if (!updatedLead) {
      console.error('Lead not found for ID:', leadId);
      return res.status(404).json({ 
        message: 'Lead hittades inte',
        lead_id: leadId,
        success: false 
      });
    }

    console.log('Lead updated successfully:', updatedLead);

    // Skicka notifiering till dig om konvertering
    try {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_LEADS_API_KEY);

      await resend.emails.send({
        from: 'Skerry Notifications <noreply@skerry.ai>',
        to: ['kasperparlklo@skerry.ai'],
        subject: `🎉 Konvertering: ${updatedLead.email} (${updatedLead.utm_creator || 'Okänd'})`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #16a34a;">Formulär komplett!</h2>
            
            <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #16a34a;">
              <p><strong>E-post:</strong> ${updatedLead.email}</p>
              <p><strong>Kampanj:</strong> ${updatedLead.campaign}</p>
              ${updatedLead.utm_platform ? `<p><strong>Plattform:</strong> ${updatedLead.utm_platform}</p>` : ''}
              ${updatedLead.utm_content_type ? `<p><strong>Innehållstyp:</strong> ${updatedLead.utm_content_type}</p>` : ''}
              ${updatedLead.utm_creator ? `<p><strong>Skapare:</strong> ${updatedLead.utm_creator}</p>` : ''}
              <p><strong>Lead registrerad:</strong> ${new Date(updatedLead.created_at).toLocaleString('sv-SE')}</p>
              <p><strong>Formulär komplett:</strong> ${new Date().toLocaleString('sv-SE')}</p>
            </div>
            
            <p>En lead har konverterat! 🚀</p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error('Error sending notification email:', emailError);
      // Fortsätt ändå - webhook ska inte misslyckas för att email misslyckades
    }

    return res.status(200).json({ 
      message: 'Lead uppdaterad framgångsrikt',
      lead_id: leadId,
      success: true 
    });

  } catch (error) {
    console.error('Error in tally-webhook handler:', error);
    
    return res.status(500).json({ 
      message: 'Ett fel uppstod vid hantering av webhook',
      error: error.message,
      success: false 
    });
  }
}
