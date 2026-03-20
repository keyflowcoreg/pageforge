import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { Analytics } from '@/components/Analytics';
import { CookieBanner } from '@/components/CookieBanner';
import { NoiseOverlay } from '@/components/NoiseOverlay';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import './globals.css';

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'PageForge — AI Landing Pages in 30 Seconds',
  description:
    'Describe your business. Get a beautiful, high-converting landing page in 30 seconds. Powered by Gemini AI.',
  keywords: 'landing page generator, AI landing page, Next.js landing page, Gemini AI',
  openGraph: {
    title: 'PageForge — AI Landing Page Generator',
    description: 'Generate beautiful landing pages in 60 seconds with AI',
    type: 'website',
    siteName: 'PageForge',
    images: [{ url: '/api/og', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PageForge — AI Landing Page Generator',
    description: 'Generate beautiful landing pages in 60 seconds with AI',
    images: ['/api/og'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased dark`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "PageForge",
          "description": "AI landing page generator",
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "29",
            "priceCurrency": "USD"
          }
        }) }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <NoiseOverlay />
        <AnnouncementBar items={['LAUNCH WEEK \u2014 Limited time pricing', 'AI landing pages in 60 seconds \u2014 Try free']} />
        <Analytics product="pageforge" />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
