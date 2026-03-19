import { NextRequest } from 'next/server';
import { markPaid, getRecord } from '@/lib/store';
import { getStripe } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const { sessionId, generationId } = (await request.json()) as {
      sessionId?: string;
      generationId?: string;
    };

    const stripe = getStripe();

    // PRODUCTION: must have a real Stripe session ID to verify payment
    if (stripe) {
      if (!sessionId) {
        return Response.json({ error: 'sessionId required' }, { status: 400 });
      }

      // Verify the Stripe session is actually paid
      const session = await stripe.checkout.sessions.retrieve(sessionId);

      if (session.payment_status !== 'paid') {
        return Response.json({ error: 'Payment not completed' }, { status: 402 });
      }

      // Get the generationId from session metadata (set at checkout creation)
      const verifiedGenerationId = session.metadata?.generationId;
      if (!verifiedGenerationId) {
        return Response.json({ error: 'Invalid session metadata' }, { status: 400 });
      }

      const ok = markPaid(verifiedGenerationId);
      if (!ok) {
        return Response.json({ error: 'Generation not found' }, { status: 404 });
      }

      return Response.json({ success: true, generationId: verifiedGenerationId });
    }

    // DEMO MODE: Stripe not configured — only allow unlock for demo sessions
    // A demo session uses the literal "demo_session" sessionId
    if (sessionId !== 'demo_session') {
      return Response.json(
        { error: 'Stripe not configured. Only demo sessions allowed.' },
        { status: 402 }
      );
    }

    if (!generationId) {
      return Response.json({ error: 'generationId required in demo mode' }, { status: 400 });
    }

    const record = getRecord(generationId);
    if (!record) {
      return Response.json({ error: 'Generation not found' }, { status: 404 });
    }

    markPaid(generationId);
    return Response.json({ success: true, generationId, demo: true });
  } catch (error) {
    console.error('Unlock error:', error);
    return Response.json({ error: 'Unlock failed' }, { status: 500 });
  }
}
