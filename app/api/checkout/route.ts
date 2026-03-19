import { NextRequest } from 'next/server';
import { getStripe, APP_URL } from '@/lib/stripe';
import { getRecord } from '@/lib/store';
import type { CheckoutRequest } from '@/lib/types';

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as CheckoutRequest;
    const { generationId } = body;

    if (!generationId) {
      return Response.json({ error: 'generationId is required' }, { status: 400 });
    }

    const record = getRecord(generationId);
    if (!record) {
      return Response.json({ error: 'Generation not found' }, { status: 404 });
    }

    const stripe = getStripe();
    if (!stripe) {
      // Demo mode: simulate a successful checkout
      return Response.json({
        demo: true,
        message: 'Stripe not configured. In production, this would create a checkout session.',
        checkoutUrl: `${APP_URL}/success?session_id=demo_session&gen_id=${generationId}`,
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: 2900, // $29.00
            product_data: {
              name: `PageForge Export — ${record.input.businessName}`,
              description: 'Clean Next.js landing page code, no watermark, Vercel deploy instructions',
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${APP_URL}/success?session_id={CHECKOUT_SESSION_ID}&gen_id=${generationId}`,
      cancel_url: `${APP_URL}/generate`,
      metadata: {
        generationId,
      },
    });

    return Response.json({ checkoutUrl: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return Response.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}
