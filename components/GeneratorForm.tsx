'use client';

import { useState } from 'react';
import type { GenerationInput } from '@/lib/types';

interface GeneratorFormProps {
  onGenerate: (input: GenerationInput) => void;
  isLoading: boolean;
}

const STEPS = ['Business', 'Audience', 'Style', 'Generate'];
const STYLES = ['Modern', 'Bold', 'Minimal', 'Playful'] as const;
const INDUSTRIES = [
  'SaaS / Technology',
  'Agency / Creative',
  'E-Commerce / Retail',
  'Health & Wellness',
  'Finance / Legal',
  'Education / Coaching',
  'Real Estate',
  'Restaurant / Food',
  'Consulting',
  'Other',
];
const COLOR_SCHEMES = [
  'Blue / Indigo',
  'Green / Emerald',
  'Orange / Amber',
  'Purple / Violet',
  'Pink / Rose',
  'Red / Coral',
  'Dark / Charcoal',
  'Light / Minimal',
];

export function GeneratorForm({ onGenerate, isLoading }: GeneratorFormProps) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<GenerationInput>({
    businessName: '',
    description: '',
    targetAudience: '',
    cta: '',
    style: 'Modern',
    industry: 'SaaS / Technology',
    colorScheme: 'Blue / Indigo',
  });

  function update(field: keyof GenerationInput, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function canAdvance() {
    if (step === 0) return form.businessName.trim().length > 0 && form.description.trim().length > 10;
    if (step === 1) return form.targetAudience.trim().length > 0 && form.cta.trim().length > 0;
    return true;
  }

  function handleSubmit() {
    onGenerate(form);
  }

  return (
    <div className="bg-white/[0.03] rounded-2xl shadow-sm border border-white/10 p-8">
      {/* Progress indicator */}
      <div className="flex items-center gap-2 mb-8">
        {STEPS.map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <button
              onClick={() => i < step && setStep(i)}
              className={`w-8 h-8 rounded-full text-sm font-semibold transition-colors ${
                i <= step
                  ? 'bg-indigo-600 text-white'
                  : 'bg-zinc-800 text-zinc-500'
              } ${i < step ? 'cursor-pointer hover:bg-indigo-700' : 'cursor-default'}`}
            >
              {i < step ? '\u2713' : i + 1}
            </button>
            <span
              className={`text-sm ${
                i === step ? 'text-white font-medium' : 'text-zinc-500'
              }`}
            >
              {s}
            </span>
            {i < STEPS.length - 1 && (
              <div
                className={`flex-1 h-0.5 w-8 ${
                  i < step ? 'bg-indigo-600' : 'bg-zinc-700'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step 0: Business Info */}
      {step === 0 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-white mb-1">Tell us about your business</h2>
            <p className="text-zinc-400 text-sm">The more detail you provide, the better the result.</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Business Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={form.businessName}
              onChange={(e) => update('businessName', e.target.value)}
              placeholder="e.g. Acme Analytics"
              className="w-full border border-white/10 rounded-xl px-4 py-3 bg-white/[0.05] text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Business Description <span className="text-red-500">*</span>
            </label>
            <textarea
              value={form.description}
              onChange={(e) => update('description', e.target.value)}
              placeholder="Describe what you do, the problem you solve, and what makes you unique..."
              rows={4}
              className="w-full border border-white/10 rounded-xl px-4 py-3 bg-white/[0.05] text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
            />
            <p className="text-xs text-zinc-500 mt-1">{form.description.length} characters (min 10)</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Industry</label>
            <select
              value={form.industry}
              onChange={(e) => update('industry', e.target.value)}
              className="w-full border border-white/10 rounded-xl px-4 py-3 bg-white/[0.05] text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {INDUSTRIES.map((ind) => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Step 1: Audience & CTA */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-white mb-1">Who are you targeting?</h2>
            <p className="text-zinc-400 text-sm">Define your ideal customer and what you want them to do.</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Target Audience <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={form.targetAudience}
              onChange={(e) => update('targetAudience', e.target.value)}
              placeholder="e.g. Small business owners, freelance designers, CTOs..."
              className="w-full border border-white/10 rounded-xl px-4 py-3 bg-white/[0.05] text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Primary Call-to-Action <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={form.cta}
              onChange={(e) => update('cta', e.target.value)}
              placeholder="e.g. Start Free Trial, Book a Demo, Get Started Today..."
              className="w-full border border-white/10 rounded-xl px-4 py-3 bg-white/[0.05] text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>
      )}

      {/* Step 2: Style */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-white mb-1">Choose your style</h2>
            <p className="text-zinc-400 text-sm">Pick the visual direction for your landing page.</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-3">Design Style</label>
            <div className="grid grid-cols-2 gap-3">
              {STYLES.map((s) => {
                const descriptions: Record<string, string> = {
                  Modern: 'Clean, professional, conversion-focused',
                  Bold: 'Impactful, high-contrast, attention-grabbing',
                  Minimal: 'Simple, elegant, Apple-inspired',
                  Playful: 'Fun, colorful, energetic',
                };
                return (
                  <button
                    key={s}
                    onClick={() => update('style', s)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      form.style === s
                        ? 'border-indigo-600 bg-indigo-500/10'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="font-medium text-white">{s}</div>
                    <div className="text-xs text-zinc-400 mt-1">{descriptions[s]}</div>
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-3">Color Scheme</label>
            <div className="grid grid-cols-2 gap-2">
              {COLOR_SCHEMES.map((scheme) => (
                <button
                  key={scheme}
                  onClick={() => update('colorScheme', scheme)}
                  className={`px-4 py-2.5 rounded-xl border-2 text-sm text-left transition-all ${
                    form.colorScheme === scheme
                      ? 'border-indigo-600 bg-indigo-500/10 text-indigo-300 font-medium'
                      : 'border-white/10 text-zinc-300 hover:border-white/20'
                  }`}
                >
                  {scheme}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Review & Generate */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-white mb-1">Ready to generate!</h2>
            <p className="text-zinc-400 text-sm">Review your settings and hit generate.</p>
          </div>
          <div className="bg-white/[0.03] rounded-xl p-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-zinc-400">Business</span>
              <span className="font-medium text-white">{form.businessName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Industry</span>
              <span className="font-medium text-white">{form.industry}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Target</span>
              <span className="font-medium text-white">{form.targetAudience}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">CTA</span>
              <span className="font-medium text-white">{form.cta}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Style</span>
              <span className="font-medium text-white">{form.style}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Colors</span>
              <span className="font-medium text-white">{form.colorScheme}</span>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        {step > 0 ? (
          <button
            onClick={() => setStep((s) => s - 1)}
            className="px-5 py-2.5 border border-white/20 rounded-xl text-zinc-300 text-sm font-medium hover:bg-white/[0.05] transition-colors"
          >
            ← Back
          </button>
        ) : (
          <div />
        )}

        {step < STEPS.length - 1 ? (
          <button
            onClick={() => setStep((s) => s + 1)}
            disabled={!canAdvance()}
            className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-medium hover:bg-indigo-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Continue →
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="px-8 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Generating...
              </>
            ) : (
              '✨ Generate Page'
            )}
          </button>
        )}
      </div>
    </div>
  );
}
