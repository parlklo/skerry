import { loadStripe } from '@stripe/stripe-js';

// Din Stripe public key - KORREKT LIVE KEY
const stripePromise = loadStripe('pk_live_51RZQxvJxMBUPVMd5SwY9b0kpg3WskuIm7bgV7b1OI6jPQqCkD1OiEkoqoDpXXKTwsxrLP6F85p0EOILTiWQOhpDW00aoadjN0x');

function getApiUrl() {
  // Om du kör Vercel lokalt med vercel dev, är /api rätt.
  // Om du kör Vite separat, byt till din lokala backend-url vid behov.
  if (window.location.hostname === 'localhost') {
    return 'http://localhost:3000/api/create-checkout-session'; // Vercel dev default
  }
  return '/api/create-checkout-session';
}

export const initiateBasicPlanPayment = async () => {
  try {
    const stripe = await stripePromise;
    if (!stripe) throw new Error('Stripe failed to initialize');

    console.log('Initiating payment with priceId: price_1RciBvJxMBUPVMd5pGToECOw');

    // Skapa en checkout session via din backend
    const response = await fetch(getApiUrl(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId: 'price_1Rcjm2JxMBUPVMd5MZmS3wn3', // Updated Basic plan price ID
      }),
    });

    console.log('Response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error:', errorText);
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const session = await response.json();
    console.log('Session received:', session);

    if (!session.id) {
      throw new Error('No session ID received from server');
    }

    // Omdirigera till Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      throw new Error(result.error.message);
    }
  } catch (error) {
    console.error('Payment error:', error);
    throw error;
  }
}; 