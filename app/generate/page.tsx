'use client';

import { useState } from 'react';
import Link from 'next/link';
import { GeneratorForm } from '@/components/GeneratorForm';
import { PreviewPanel } from '@/components/PreviewPanel';
import { ExportModal } from '@/components/ExportModal';
import type { GenerationInput } from '@/lib/types';

interface GenerationResponse {
  id: string;
  html: string;
  headline: string;
  subheadline: string;
  preview: boolean;
}

type LoadingStep = 'analyzing' | 'crafting' | 'polishing' | 'done';

const LOADING_MESSAGES: Record<LoadingStep, string> = {
  analyzing: 'Analyzing your business...',
  crafting: 'Gemini is crafting your page...',
  polishing: 'Polishing the copy...',
  done: 'Almost there...',
};

export default function GeneratePage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [loadingStep, setLoadingStep] = useState<LoadingStep>('analyzing');
  const [generation, setGeneration] = useState<GenerationResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showExportModal, setShowExportModal] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  async function handleGenerate(input: GenerationInput) {
    setIsGenerating(true);
    setError(null);
    setGeneration(null);

    // Simulate progress steps
    setLoadingStep('analyzing');
    const step2 = setTimeout(() => setLoadingStep('crafting'), 1200);
    const step3 = setTimeout(() => setLoadingStep('polishing'), 4000);
    const step4 = setTimeout(() => setLoadingStep('done'), 6000);

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      });

      clearTimeout(step2);
      clearTimeout(step3);
      clearTimeout(step4);

      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        throw new Error(data.error ?? 'Generation failed');
      }

      const data = (await res.json()) as GenerationResponse;
      setGeneration(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  }

  async function handleExport(format: 'nextjs' | 'html') {
    if (!generation) return;
    setIsExporting(true);
    setShowExportModal(false);

    try {
      const res = await fetch('/api/export', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ generationId: generation.id, format }),
      });

      if (!res.ok) throw new Error('Export failed');

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = format === 'nextjs' ? 'page.tsx' : 'landing-page.html';
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Export failed');
    } finally {
      setIsExporting(false);
    }
  }

  async function handlePaidExport() {
    if (!generation) return;
    setIsExporting(true);

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ generationId: generation.id }),
      });

      const data = (await res.json()) as { checkoutUrl?: string; demo?: boolean; message?: string };

      if (data.demo) {
        // Demo mode - simulate paid unlock
        await fetch('/api/unlock', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ generationId: generation.id }),
        });
        setShowExportModal(false);
        alert('Demo mode: Stripe not configured. Simulating paid export...');
        await handleExport('nextjs');
        return;
      }

      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Checkout failed');
    } finally {
      setIsExporting(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      {/* Header */}
      <nav className="bg-[#0A0A0F]/95 backdrop-blur border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              PF
            </div>
            <span className="text-lg font-bold text-white">PageForge</span>
          </Link>
          {generation && (
            <button
              onClick={() => setShowExportModal(true)}
              className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              Export Page →
            </button>
          )}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {!generation ? (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Generate Your Landing Page</h1>
              <p className="text-zinc-400">Fill in the details below and get a beautiful landing page in seconds.</p>
            </div>

            <GeneratorForm onGenerate={handleGenerate} isLoading={isGenerating} />

            {/* Loading overlay */}
            {isGenerating && (
              <div className="mt-8 text-center">
                <div className="inline-flex flex-col items-center gap-4 bg-white/[0.05] rounded-2xl shadow-sm border border-white/10 p-8">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full border-4 border-indigo-900 border-t-indigo-500 animate-spin" />
                    <div className="absolute inset-0 flex items-center justify-center text-2xl">&#10024;</div>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{LOADING_MESSAGES[loadingStep]}</p>
                    <p className="text-sm text-zinc-500 mt-1">This usually takes 5-10 seconds</p>
                  </div>
                  <div className="flex gap-2">
                    {(['analyzing', 'crafting', 'polishing', 'done'] as LoadingStep[]).map((s, i) => (
                      <div
                        key={s}
                        className={`h-1.5 w-8 rounded-full transition-colors ${
                          (['analyzing', 'crafting', 'polishing', 'done'] as LoadingStep[]).indexOf(loadingStep) >= i
                            ? 'bg-indigo-600'
                            : 'bg-zinc-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="mt-6 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl p-4 text-sm">
                <strong>Error:</strong> {error}
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            {/* Success header */}
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">&#127881;</span>
                <div>
                  <p className="font-semibold text-white">Your landing page is ready!</p>
                  <p className="text-sm text-zinc-400">
                    <strong>{generation.headline}</strong>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setGeneration(null)}
                className="text-sm text-zinc-400 hover:text-white border border-white/20 px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                Generate New
              </button>
            </div>

            <PreviewPanel
              html={generation.html}
              generationId={generation.id}
              onExport={(format) => {
                if (format === 'nextjs') {
                  setShowExportModal(true);
                } else {
                  void handleExport(format);
                }
              }}
              isExporting={isExporting}
            />
          </div>
        )}
      </div>

      {/* Export Modal */}
      {showExportModal && generation && (
        <ExportModal
          generationId={generation.id}
          onClose={() => setShowExportModal(false)}
          onFreeExport={(format) => void handleExport(format)}
          onPaidExport={() => void handlePaidExport()}
          isLoading={isExporting}
        />
      )}
    </div>
  );
}
