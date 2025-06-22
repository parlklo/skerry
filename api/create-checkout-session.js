const Stripe = require('stripe');

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Whitelist of allowed price IDs (säkerhetsåtgärd)
const ALLOWED_PRICE_IDS = [
  'price_1RciBvJxMBUPVMd5pGToECOw', // Basic plan
  // Lägg till fler price IDs här när du skapar dem
];

export default async function handler(req, res) {
  // Simplified CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('Request body:', req.body); // Debug log

  const { priceId } = req.body;

  // Validering av price ID
  if (!priceId) {
    console.log('Missing priceId');
    return res.status(400).json({ error: 'Missing price ID' });
  }

  if (!ALLOWED_PRICE_IDS.includes(priceId)) {
    console.log('Invalid priceId:', priceId);
    return res.status(400).json({ error: 'Invalid price ID' });
  }

  try {
    console.log('Creating checkout session with priceId:', priceId);
    
    const isLocal = req.headers.host && req.headers.host.startsWith('localhost:5174');
    const domain = isLocal ? 'http://localhost:5174' : 'https://skerry.ai';
    
    console.log('Using domain:', domain);
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${domain}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${domain}/cancel`,
      metadata: {
        source: 'website',
        plan_type: 'basic'
      }
    });
    
    console.log('Session created successfully:', session.id);
    res.status(200).json({ id: session.id });
  } catch (err) {
    console.error('Stripe error details:', err);
    res.status(500).json({ error: 'Payment session creation failed', details: err.message });
  }
} 