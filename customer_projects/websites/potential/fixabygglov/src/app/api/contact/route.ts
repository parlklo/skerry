import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    // Kontrollera API-nyckel
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY saknas')
      return NextResponse.json(
        { error: 'Server-konfigurationsfel' },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validering
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Namn, email och meddelande är obligatoriska' },
        { status: 400 }
      )
    }

    console.log('Försöker skicka e-post...', { name, email, subject })

    // Skicka e-post med Resend
    const { data, error } = await resend.emails.send({
      from: 'noreply@fixabygglov.se', // Använder verifierad domän
      to: ['info@ark-kon.com'], // Produktions e-post
      subject: subject || 'Ny förfrågan från hemsidan',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #16A34A;">Ny kontaktförfrågan</h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Kontaktuppgifter:</h3>
            <p><strong>Namn:</strong> ${name}</p>
            <p><strong>E-post:</strong> ${email}</p>
            ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
            ${subject ? `<p><strong>Ämne:</strong> ${subject}</p>` : ''}
          </div>

          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="margin-top: 0;">Meddelande:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>Detta meddelande skickades från kontaktformuläret på fixabygglov.se</p>
          </div>
        </div>
      `,
      // Även en text-version för kompatibilitet
      text: `
Ny kontaktförfrågan från hemsidan

Namn: ${name}
E-post: ${email}
${phone ? `Telefon: ${phone}` : ''}
${subject ? `Ämne: ${subject}` : ''}

Meddelande:
${message}

---
Detta meddelande skickades från kontaktformuläret på fixabygglov.se
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Något gick fel vid skickandet av e-post', details: error },
        { status: 500 }
      )
    }

    console.log('E-post skickad framgångsrikt:', data)

    return NextResponse.json(
      { message: 'E-post skickad framgångsrikt', id: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Serverfel' },
      { status: 500 }
    )
  }
}
