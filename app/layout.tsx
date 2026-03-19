import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white font-sans">{children}</body>
    </html>
  );
}
