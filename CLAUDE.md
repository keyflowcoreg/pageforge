# PageForge — AI Landing Page Generator

## Overview
PageForge is a Next.js 16 SaaS app that lets users describe their business and generates a complete, beautiful landing page using Gemini 2.0 Flash AI. Users get a live preview, shareable URL, and can export clean Next.js code.

## Architecture

### Pages
- `app/page.tsx` — Marketing homepage (Server Component)
- `app/generate/page.tsx` — Generator UI (Client Component with form + preview)
- `app/preview/[id]/page.tsx` — Public preview by UUID (Server Component)
- `app/success/page.tsx` — Post-Stripe-payment download page (Client Component)

### API Routes
- `POST /api/generate` — Calls Gemini, saves to in-memory store, returns HTML + UUID
- `POST /api/export` — Returns HTML or Next.js file download (adds watermark if unpaid)
- `POST /api/checkout` — Creates Stripe checkout session for $29 export
- `POST /api/unlock` — Marks a generation as paid (called after successful Stripe payment)

### Key Libraries
- `lib/gemini.ts` — Gemini 2.0 Flash client + mock fallback (no key = demo mode)
- `lib/stripe.ts` — Lazy Stripe init (null if STRIPE_SECRET_KEY not set)
- `lib/store.ts` — In-memory Map store (replaces Supabase for demo)
- `lib/templates.ts` — 5 HTML template style guides
- `lib/types.ts` — All TypeScript interfaces

### Components
- `components/GeneratorForm.tsx` — 4-step form with progress indicator
- `components/PreviewPanel.tsx` — Iframe preview with device size controls
- `components/ExportModal.tsx` — Free vs paid export modal
- `components/TemplateGallery.tsx` — 5 template cards

## Environment Variables
See `.env.local.example` for all required keys.

**Demo mode** (no env vars needed):
- Gemini: Returns a realistic mock HTML page built from templates
- Stripe: Returns demo checkout URL, simulates payment
- Storage: In-memory Map (resets on server restart)

## Pricing
- FREE: 1 page/month, preview + export with PageForge watermark
- PRO $29/page: Clean Next.js export, no watermark, Vercel instructions
- UNLIMITED $49/month: (Coming soon) Unlimited + A/B + SEO

## Next.js 16 Notes
- `params` in page components is a Promise — must use `await params`
- `searchParams` in page components is a Promise — use React `use()` in Client Components
- Route handler params: `{ params }: { params: Promise<{ id: string }> }` + `await params`
- Use `Response.json()` not `NextResponse.json()` in route handlers

## Development
```bash
npm run dev      # Start dev server on :3000
npm run build    # Production build
npm run lint     # ESLint check
```

## Deployment
1. Push to GitHub
2. Import project on vercel.com
3. Add environment variables in Vercel dashboard
4. Deploy — Vercel auto-detects Next.js
