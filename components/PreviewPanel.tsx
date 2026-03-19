'use client';

import { useState } from 'react';

interface PreviewPanelProps {
  html: string;
  generationId: string;
  onExport: (format: 'nextjs' | 'html') => void;
  isExporting: boolean;
}

export function PreviewPanel({ html, generationId, onExport, isExporting }: PreviewPanelProps) {
  const [zoom, setZoom] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [showShareToast, setShowShareToast] = useState(false);

  const widthMap = {
    desktop: 'w-full',
    tablet: 'w-[768px]',
    mobile: 'w-[375px]',
  };

  function copyShareLink() {
    const url = `${window.location.origin}/preview/${generationId}`;
    void navigator.clipboard.writeText(url);
    setShowShareToast(true);
    setTimeout(() => setShowShareToast(false), 2000);
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50">
        <div className="flex items-center gap-2">
          {/* Device size toggles */}
          <button
            onClick={() => setZoom('desktop')}
            title="Desktop"
            className={`p-2 rounded-lg transition-colors ${zoom === 'desktop' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-400 hover:bg-gray-200'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2" />
              <path strokeLinecap="round" strokeWidth="2" d="M8 21h8M12 17v4" />
            </svg>
          </button>
          <button
            onClick={() => setZoom('tablet')}
            title="Tablet"
            className={`p-2 rounded-lg transition-colors ${zoom === 'tablet' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-400 hover:bg-gray-200'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="4" y="2" width="16" height="20" rx="2" strokeWidth="2" />
              <circle cx="12" cy="19" r="0.5" strokeWidth="2" />
            </svg>
          </button>
          <button
            onClick={() => setZoom('mobile')}
            title="Mobile"
            className={`p-2 rounded-lg transition-colors ${zoom === 'mobile' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-400 hover:bg-gray-200'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="7" y="2" width="10" height="20" rx="2" strokeWidth="2" />
              <circle cx="12" cy="19" r="0.5" strokeWidth="2" />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              onClick={copyShareLink}
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Share
            </button>
            {showShareToast && (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap">
                Link copied!
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onExport('html')}
              disabled={isExporting}
              className="flex items-center gap-1.5 px-4 py-1.5 text-sm text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              HTML
            </button>
            <button
              onClick={() => onExport('nextjs')}
              disabled={isExporting}
              className="flex items-center gap-1.5 px-4 py-1.5 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {isExporting ? 'Exporting...' : 'Export Next.js'}
            </button>
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="bg-gray-200 p-4 flex justify-center min-h-[600px]">
        <div className={`${widthMap[zoom]} transition-all duration-300`}>
          <iframe
            srcDoc={html}
            className="w-full h-[600px] bg-white rounded-lg shadow-md border-0"
            sandbox="allow-scripts allow-same-origin"
            title="Landing page preview"
          />
        </div>
      </div>
    </div>
  );
}
