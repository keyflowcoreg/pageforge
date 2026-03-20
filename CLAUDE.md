# PageForge

AI landing page generator — describe your business, get a complete page with Gemini 2.0 Flash + code export.

## Stack
- Next.js 16 + React 19 + TypeScript + Tailwind v4
- AI: Gemini 2.0 Flash (@google/generative-ai)
- Payment: Stripe ($29/page) + x402-next (USDC on Base)
- Storage: In-memory Map (lib/store.ts) — resets on restart
- Animations: Framer Motion
- Wallet: 0xCc97e4579eeE0281947F15B027f8Cad022933d7e

## Commands
```bash
npm run dev     # Development (localhost:4007)
npm run build   # Production build
npm run start   # Start production server
npm run lint    # ESLint
```

## Key Files
- `app/page.tsx` — Marketing homepage (Server Component)
- `app/generate/page.tsx` — Generator UI (Client Component, 4-step form + preview)
- `app/preview/[id]/page.tsx` — Public preview by UUID (Server Component)
- `app/success/page.tsx` — Post-payment download page (Client Component)
- `app/api/generate/route.ts` — POST: calls Gemini, saves to store, returns HTML + UUID
- `app/api/export/route.ts` — POST: returns HTML or Next.js file (watermark if unpaid)
- `app/api/checkout/route.ts` — POST: creates Stripe checkout session ($29)
- `app/api/unlock/route.ts` — POST: marks generation as paid (after Stripe webhook)
- `lib/gemini.ts` — Gemini 2.0 Flash client + mock fallback (no key = demo mode)
- `lib/stripe.ts` — Lazy Stripe init (null if STRIPE_SECRET_KEY not set)
- `lib/store.ts` — In-memory Map store
- `lib/templates.ts` — 5 HTML template style guides
- `lib/types.ts` — All TypeScript interfaces
- `components/GeneratorForm.tsx` — 4-step form with progress indicator
- `components/PreviewPanel.tsx` — Iframe preview with device size controls
- `components/ExportModal.tsx` — Free vs paid export modal
- `components/TemplateGallery.tsx` — 5 template cards
- `components/x402/` — Shared checkout UI (X402Checkout, PaymentSuccess)

## Port Assignment
Production port: 4007 (fleet-manager.sh)

## Payment Flow
1. User fills 4-step form → AI generates landing page
2. Free preview in iframe with device size controls
3. Export: free (watermarked) or $29 (clean Next.js export)
4. Stripe checkout → unlock → download clean code

## Demo Mode (no env vars needed)
- Gemini: Returns realistic mock HTML from templates
- Stripe: Returns demo checkout URL, simulates payment
- Storage: In-memory Map (resets on server restart)

## Next.js 16 Notes
- `params` in page components is a Promise — must use `await params`
- `searchParams` is a Promise — use React `use()` in Client Components
- Route handler params: `{ params }: { params: Promise<{ id: string }> }` + `await params`
- Use `Response.json()` not `NextResponse.json()` in route handlers

## Conventions
- Dark theme (bg-zinc-950)
- No icon libraries — use SVG/emoji
- Framer Motion for all animations
- Stripe for payments (Gemini AI cost justifies traditional checkout)
- x402 available as alternative
- Cross-sell footer links to ecosystem products
