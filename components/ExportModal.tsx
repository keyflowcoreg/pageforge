'use client';

interface ExportModalProps {
  generationId: string;
  onClose: () => void;
  onFreeExport: (format: 'nextjs' | 'html') => void;
  onPaidExport: () => void;
  isLoading: boolean;
}

export function ExportModal({
  onClose,
  onFreeExport,
  onPaidExport,
  isLoading,
}: ExportModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-[#13131A] rounded-2xl shadow-2xl max-w-md w-full p-8 border border-white/10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Export Your Page</h2>
          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-4 mb-6">
          {/* Free tier */}
          <div className="border-2 border-white/10 rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-white">Free Export</span>
              <span className="text-sm text-zinc-500 font-medium">$0</span>
            </div>
            <ul className="text-sm text-zinc-400 space-y-1 mb-4">
              <li className="flex items-center gap-2"><span className="text-green-500">{'\u2713'}</span> HTML file download</li>
              <li className="flex items-center gap-2"><span className="text-green-500">{'\u2713'}</span> Next.js component download</li>
              <li className="flex items-center gap-2"><span className="text-amber-500">{'\u26A0'}</span> PageForge watermark included</li>
            </ul>
            <div className="flex gap-2">
              <button
                onClick={() => onFreeExport('html')}
                disabled={isLoading}
                className="flex-1 py-2 text-sm border border-white/10 text-zinc-300 rounded-lg hover:bg-white/[0.05] transition-colors font-medium disabled:opacity-50"
              >
                HTML
              </button>
              <button
                onClick={() => onFreeExport('nextjs')}
                disabled={isLoading}
                className="flex-1 py-2 text-sm border border-white/10 text-zinc-300 rounded-lg hover:bg-white/[0.05] transition-colors font-medium disabled:opacity-50"
              >
                Next.js
              </button>
            </div>
          </div>

          {/* Pro tier */}
          <div className="border-2 border-indigo-600 rounded-xl p-5 bg-indigo-500/10">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">Pro Export</span>
                <span className="bg-indigo-600 text-white text-xs px-2 py-0.5 rounded-full">RECOMMENDED</span>
              </div>
              <span className="text-lg font-bold text-indigo-400">$29</span>
            </div>
            <ul className="text-sm text-zinc-300 space-y-1 mb-4">
              <li className="flex items-center gap-2"><span className="text-green-500">{'\u2713'}</span> Clean Next.js component (no watermark)</li>
              <li className="flex items-center gap-2"><span className="text-green-500">{'\u2713'}</span> Clean HTML file</li>
              <li className="flex items-center gap-2"><span className="text-green-500">{'\u2713'}</span> Vercel deploy instructions</li>
              <li className="flex items-center gap-2"><span className="text-green-500">{'\u2713'}</span> Commercial license</li>
            </ul>
            <button
              onClick={onPaidExport}
              disabled={isLoading}
              className="w-full py-2.5 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-50 text-sm"
            >
              {isLoading ? 'Redirecting...' : 'Buy & Export \u2014 $29'}
            </button>
          </div>
        </div>

        <p className="text-xs text-center text-zinc-500">
          Secure payment via Stripe · 30-day money-back guarantee
        </p>
      </div>
    </div>
  );
}
