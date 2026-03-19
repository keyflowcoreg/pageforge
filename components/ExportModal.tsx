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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Export Your Page</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-4 mb-6">
          {/* Free tier */}
          <div className="border-2 border-gray-200 rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-900">Free Export</span>
              <span className="text-sm text-gray-500 font-medium">$0</span>
            </div>
            <ul className="text-sm text-gray-500 space-y-1 mb-4">
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> HTML file download</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Next.js component download</li>
              <li className="flex items-center gap-2"><span className="text-amber-500">⚠</span> PageForge watermark included</li>
            </ul>
            <div className="flex gap-2">
              <button
                onClick={() => onFreeExport('html')}
                disabled={isLoading}
                className="flex-1 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors font-medium disabled:opacity-50"
              >
                HTML
              </button>
              <button
                onClick={() => onFreeExport('nextjs')}
                disabled={isLoading}
                className="flex-1 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors font-medium disabled:opacity-50"
              >
                Next.js
              </button>
            </div>
          </div>

          {/* Pro tier */}
          <div className="border-2 border-indigo-600 rounded-xl p-5 bg-indigo-50">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">Pro Export</span>
                <span className="bg-indigo-600 text-white text-xs px-2 py-0.5 rounded-full">RECOMMENDED</span>
              </div>
              <span className="text-lg font-bold text-indigo-600">$29</span>
            </div>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Clean Next.js component (no watermark)</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Clean HTML file</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Vercel deploy instructions</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Commercial license</li>
            </ul>
            <button
              onClick={onPaidExport}
              disabled={isLoading}
              className="w-full py-2.5 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-50 text-sm"
            >
              {isLoading ? 'Redirecting...' : 'Buy & Export — $29'}
            </button>
          </div>
        </div>

        <p className="text-xs text-center text-gray-400">
          Secure payment via Stripe · 30-day money-back guarantee
        </p>
      </div>
    </div>
  );
}
