const Stripe = require('stripe');

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { plan, price } = req.body;
  try {
    const isLocal = req.headers.host && req.headers.host.startsWith('localhost:5174');
    const domain = isLocal ? 'http://localhost:5174' : 'https://skerry.ai';
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'sek',
            product_data: {
              name: plan === 'basic' ? 'Basic Webbplatsutveckling' : 'Annat',
            },
            unit_amount: price * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${domain}/success`,
      cancel_url: `${domain}/cancel`,
    });
    res.status(200).json({ id: session.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
} 