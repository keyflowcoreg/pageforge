// Lazy Stripe initialization - returns null if key is not configured
// This prevents build errors when STRIPE_SECRET_KEY is absent

let _stripe: import('stripe').default | null = null;

export function getStripe(): import('stripe').default | null {
  if (!process.env.STRIPE_SECRET_KEY) {
    return null;
  }
  if (!_stripe) {
    // Dynamic require to avoid module-level import issues
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const Stripe = require('stripe');
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-02-24.acacia',
    }) as import('stripe').default;
  }
  return _stripe;
}

export const EXPORT_PRICE_ID = process.env.STRIPE_EXPORT_PRICE_ID ?? '';
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000';
