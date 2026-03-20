import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { Analytics } from '@/components/Analytics';
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
    description: 'Generate conversion-optimized landing pages with AI. Free preview, $29 per page.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PageForge — AI Landing Page Generator',
    description: 'Generate conversion-optimized landing pages with AI. Free preview, $29 per page.',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "PageForge",
              description:
                "Describe your business. Get a beautiful, high-converting landing page in 30 seconds. Powered by Gemini AI.",
              url: "https://pageforge.ai",
              applicationCategory: "DesignApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "29",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Analytics product="pageforge" />
        {children}
      </body>
    </html>
  );
}
