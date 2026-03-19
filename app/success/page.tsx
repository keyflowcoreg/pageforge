'use client';

import { useEffect, useState, use } from 'react';
import Link from 'next/link';

interface SuccessPageProps {
  searchParams: Promise<{ session_id?: string; gen_id?: string }>;
}

export default function SuccessPage({ searchParams }: SuccessPageProps) {
  const params = use(searchParams);
  const { session_id, gen_id } = params;
  const [isUnlocking, setIsUnlocking] = useState(true);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!gen_id) {
      setIsUnlocking(false);
      return;
    }

    // Mark the generation as paid — server verifies Stripe session before unlocking
    fetch('/api/unlock', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId: session_id, generationId: gen_id }),
    })
      .then((res) => {
        if (res.ok) {
          setIsUnlocked(true);
        } else {
          setError('Could not unlock export. Please contact support.');
        }
      })
      .catch(() => setError('Network error. Please contact support.'))
      .finally(() => setIsUnlocking(false));
  }, [gen_id]);

  async function handleDownload(format: 'nextjs' | 'html') {
    if (!gen_id) return;
    setIsDownloading(true);

    try {
      const res = await fetch('/api/export', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ generationId: gen_id, format }),
      });

      if (!res.ok) throw new Error('Download failed');

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = format === 'nextjs' ? 'page.tsx' : 'landing-page.html';
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Download failed');
    } finally {
      setIsDownloading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="max-w-lg w-full">
        {isUnlocking ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
            <div className="w-16 h-16 rounded-full border-4 border-indigo-100 border-t-indigo-600 animate-spin mx-auto mb-6" />
            <p className="text-gray-600">Confirming your payment...</p>
          </div>
        ) : error ? (
          <div className="bg-white rounded-2xl shadow-sm border border-red-200 p-12 text-center">
            <div className="text-4xl mb-4">❌</div>
            <h1 className="text-xl font-bold text-gray-900 mb-2">Something went wrong</h1>
            <p className="text-red-600 text-sm mb-6">{error}</p>
            <p className="text-gray-500 text-sm">
              Session ID: <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">{session_id}</code>
            </p>
            <Link href="/generate" className="mt-6 inline-block text-indigo-600 text-sm font-medium hover:underline">
              Back to Generator
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Confirmed!</h1>
            <p className="text-gray-500 mb-8">
              Your export is ready. Download your clean Next.js code with no watermark.
            </p>

            {isUnlocked && gen_id ? (
              <div className="space-y-3">
                <button
                  onClick={() => void handleDownload('nextjs')}
                  disabled={isDownloading}
                  className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-50"
                >
                  {isDownloading ? 'Downloading...' : '⬇ Download page.tsx (Next.js)'}
                </button>
                <button
                  onClick={() => void handleDownload('html')}
                  disabled={isDownloading}
                  className="w-full border border-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50"
                >
                  ⬇ Download HTML file
                </button>
              </div>
            ) : (
              <p className="text-gray-500 text-sm">No generation found for this session.</p>
            )}

            <div className="mt-8 p-4 bg-indigo-50 rounded-xl text-left">
              <p className="text-sm font-semibold text-gray-900 mb-2">🚀 Deploy to Vercel in 3 steps:</p>
              <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                <li>Place <code className="bg-white px-1 rounded text-xs">page.tsx</code> in your Next.js <code className="bg-white px-1 rounded text-xs">app/</code> folder</li>
                <li>Run <code className="bg-white px-1 rounded text-xs">npm run build</code> to verify it compiles</li>
                <li>Push to GitHub → Vercel auto-deploys</li>
              </ol>
            </div>

            <Link
              href="/generate"
              className="mt-6 inline-block text-indigo-600 text-sm font-medium hover:underline"
            >
              Generate Another Page →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
