'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const CROSS_SELL = [
  { name: 'PromptForge', href: 'https://promptforge.com', desc: '200+ production AI prompts', price: '$19' },
  { name: 'SiteForge', href: 'https://siteforge.com', desc: 'AI landing pages in seconds', price: '$9' },
  { name: 'CryptoPayKit', href: 'https://cryptopaykit.com', desc: 'x402 developer templates', price: '$29' },
  { name: 'RulesForge', href: 'https://rulesforge.com', desc: 'AI coding rules for your team', price: '$14' },
]

export default function SuccessPage() {
  const [showCheck, setShowCheck] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setShowCheck(true), 300)
    const t2 = setTimeout(() => setShowContent(true), 800)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  const handleDownload = async () => {
    setIsDownloading(true)
    try {
      const res = await fetch('/api/export', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ format: 'nextjs' }),
      })
      if (!res.ok) throw new Error('Download failed')
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'page.tsx'
      a.click()
      URL.revokeObjectURL(url)
    } catch {
      alert('Download failed. Please try again.')
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      <style>{`
        @keyframes confetti-fall {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        @keyframes confetti-fall-2 {
          0% { transform: translateY(-100vh) rotate(0deg) scale(0.8); opacity: 1; }
          100% { transform: translateY(100vh) rotate(-540deg) scale(0.3); opacity: 0; }
        }
        .confetti-piece {
          position: fixed;
          top: -20px;
          z-index: 50;
          pointer-events: none;
        }
        @keyframes check-draw {
          0% { stroke-dashoffset: 50; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes circle-fill {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes fade-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-check-draw {
          stroke-dasharray: 50;
          stroke-dashoffset: 50;
          animation: check-draw 0.5s ease-out 0.5s forwards;
        }
        .animate-circle-fill {
          animation: circle-fill 0.5s ease-out forwards;
        }
        .animate-fade-up {
          opacity: 0;
          animation: fade-up 0.5s ease-out forwards;
        }
      `}</style>

      {/* Confetti particles */}
      {showCheck && Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="confetti-piece"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${6 + Math.random() * 8}px`,
            height: `${6 + Math.random() * 8}px`,
            backgroundColor: ['#6366F1', '#818CF8', '#4F46E5', '#A5B4FC', '#10B981', '#F59E0B', '#EC4899', '#8B5CF6'][i % 8],
            borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '2px' : '0',
            animation: `${i % 2 === 0 ? 'confetti-fall' : 'confetti-fall-2'} ${2 + Math.random() * 3}s ease-out ${Math.random() * 1.5}s forwards`,
          }}
        />
      ))}

      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Checkmark */}
        <div className="flex justify-center mb-8">
          <div className={`w-24 h-24 rounded-full bg-emerald-50 flex items-center justify-center ${showCheck ? 'animate-circle-fill' : 'opacity-0'}`}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="22" stroke="#10B981" strokeWidth="3" opacity="0.3" />
              <path
                d="M14 24L21 31L34 18"
                stroke="#10B981"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                className={showCheck ? 'animate-check-draw' : ''}
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        {showContent && (
          <div className="text-center mb-10 animate-fade-up">
            <h1 className="text-3xl font-bold mb-3 text-gray-900">Payment Confirmed!</h1>
            <p className="text-gray-500 text-lg">Your clean export is ready</p>
          </div>
        )}

        {/* Preview mockup */}
        {showContent && (
          <div className="animate-fade-up mb-6" style={{ animationDelay: '0.1s' }}>
            <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-200 bg-white">
                <div className="w-3 h-3 rounded-full bg-red-300" />
                <div className="w-3 h-3 rounded-full bg-amber-300" />
                <div className="w-3 h-3 rounded-full bg-emerald-300" />
                <span className="ml-3 text-xs text-gray-400 font-mono">page.tsx</span>
              </div>
              <div className="p-6 space-y-3">
                <div className="h-6 bg-indigo-100 rounded w-3/4 mx-auto" />
                <div className="h-3 bg-gray-200 rounded w-full" />
                <div className="h-3 bg-gray-200 rounded w-5/6" />
                <div className="h-3 bg-gray-200 rounded w-2/3" />
                <div className="flex gap-3 justify-center pt-2">
                  <div className="h-8 bg-indigo-200 rounded-lg w-28" />
                  <div className="h-8 bg-gray-200 rounded-lg w-28" />
                </div>
                <div className="grid grid-cols-3 gap-2 pt-3">
                  <div className="h-16 bg-gray-200 rounded" />
                  <div className="h-16 bg-gray-200 rounded" />
                  <div className="h-16 bg-gray-200 rounded" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Download button */}
        {showContent && (
          <div className="animate-fade-up" style={{ animationDelay: '0.15s' }}>
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white py-4 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center gap-3 mb-4"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {isDownloading ? 'Downloading...' : 'Download Next.js Code'}
            </button>
          </div>
        )}

        {/* Deploy instructions */}
        {showContent && (
          <div className="animate-fade-up mb-10" style={{ animationDelay: '0.2s' }}>
            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5 mt-4">
              <p className="text-sm font-semibold text-indigo-900 mb-3">Deploy in 3 steps:</p>
              <ol className="space-y-2 text-sm text-indigo-800 list-decimal list-inside">
                <li>Place <code className="bg-white px-1.5 py-0.5 rounded text-xs font-mono">page.tsx</code> in your Next.js <code className="bg-white px-1.5 py-0.5 rounded text-xs font-mono">app/</code> folder</li>
                <li>Run <code className="bg-white px-1.5 py-0.5 rounded text-xs font-mono">npm run build</code> to verify</li>
                <li>Push to GitHub &mdash; Vercel auto-deploys</li>
              </ol>
            </div>
          </div>
        )}

        {/* CTA */}
        {showContent && (
          <div className="animate-fade-up mb-16" style={{ animationDelay: '0.25s' }}>
            <Link
              href="/generate"
              className="block text-center bg-white border border-gray-200 hover:border-indigo-300 text-indigo-600 py-4 rounded-xl font-semibold transition-colors"
            >
              Generate another &rarr;
            </Link>
          </div>
        )}

        {/* Cross-sell */}
        {showContent && (
          <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="border-t border-gray-200 pt-10">
              <p className="text-sm text-gray-400 text-center mb-6">More tools from the Forge ecosystem</p>
              <div className="grid grid-cols-2 gap-3">
                {CROSS_SELL.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition-colors group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-sm text-gray-900 group-hover:text-indigo-600 transition-colors">{item.name}</span>
                      <span className="text-xs text-indigo-600">{item.price}</span>
                    </div>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
