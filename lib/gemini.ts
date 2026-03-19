import { GoogleGenerativeAI } from '@google/generative-ai';
import type { GenerationInput, GenerationResult } from './types';
import { getTemplateByStyle } from './templates';

function buildPrompt(input: GenerationInput): string {
  const template = getTemplateByStyle(input.style);
  return `You are an expert web designer and conversion copywriter. Create a stunning, high-converting landing page for this business.

Business: ${input.businessName}
Description: ${input.description}
Target Audience: ${input.targetAudience}
Primary CTA: ${input.cta}
Style: ${input.style}
Industry: ${input.industry}
Color Preference: ${input.colorScheme}

Generate a COMPLETE, BEAUTIFUL landing page. Requirements:
- Use Tailwind CSS CDN (include this exact script tag: <script src="https://cdn.tailwindcss.com"></script>)
- Mobile responsive with proper viewport meta tag
- High-converting copy with emotional hooks based on the actual business description
- Include these sections: Hero, Features/Benefits (3 items), Social Proof (testimonials), CTA section, Footer
- Use modern design with gradient accents matching the color preference: ${input.colorScheme}
- Style inspiration: ${template.name} (${template.description})
- Primary color should reflect: ${input.colorScheme}
- Optimize headline for conversions with strong value proposition
- Use real, specific copy based on the business (not generic placeholder text)
- Include a sticky navigation bar with the business name and CTA button
- Add hover effects and smooth transitions
- The HTML must be fully self-contained and render correctly in an iframe

Return ONLY valid JSON (no markdown, no code blocks, just raw JSON) in this exact format:
{
  "html": "<!DOCTYPE html>...[complete HTML here]...",
  "headline": "Main headline text",
  "subheadline": "Subheadline text",
  "sections": ["hero", "features", "social-proof", "cta", "footer"],
  "metaTags": {
    "title": "...",
    "description": "...",
    "keywords": "..."
  }
}`;
}

function getMockResult(input: GenerationInput): GenerationResult {
  const template = getTemplateByStyle(input.style);
  const colorMap: Record<string, string> = {
    Modern: 'indigo',
    Bold: 'amber',
    Minimal: 'emerald',
    Playful: 'pink',
  };
  const color = colorMap[input.style] ?? 'indigo';

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${input.businessName} — ${input.industry}</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white font-sans antialiased">

<!-- Navigation -->
<nav class="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 px-6 py-4">
  <div class="max-w-6xl mx-auto flex items-center justify-between">
    <div class="text-xl font-bold text-${color}-600">${input.businessName}</div>
    <div class="hidden md:flex items-center gap-8 text-sm text-gray-600">
      <a href="#features" class="hover:text-${color}-600 transition-colors">Features</a>
      <a href="#testimonials" class="hover:text-${color}-600 transition-colors">Reviews</a>
      <a href="#pricing" class="hover:text-${color}-600 transition-colors">Pricing</a>
    </div>
    <a href="#cta" class="bg-${color}-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-${color}-700 transition-colors">${input.cta}</a>
  </div>
</nav>

<!-- Hero -->
<section class="py-24 px-6 bg-gradient-to-b from-${color}-50 to-white text-center">
  <div class="max-w-4xl mx-auto">
    <div class="inline-flex items-center gap-2 bg-${color}-100 text-${color}-700 text-sm font-medium px-4 py-2 rounded-full mb-8">
      <span>✨</span>
      <span>Trusted by 500+ ${input.targetAudience}</span>
    </div>
    <h1 class="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
      The Smarter Way for<br/><span class="text-${color}-600">${input.targetAudience}</span><br/>to ${input.cta}
    </h1>
    <p class="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
      ${input.description} We handle the complexity so you can focus on what matters most.
    </p>
    <div class="flex flex-col sm:flex-row justify-center gap-4">
      <a href="#cta" class="bg-${color}-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-${color}-700 transition-colors shadow-lg shadow-${color}-200">${input.cta} →</a>
      <a href="#features" class="border border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-${color}-300 transition-colors">See How It Works</a>
    </div>
    <p class="text-sm text-gray-400 mt-6">No credit card required · Cancel anytime</p>
  </div>
</section>

<!-- Features -->
<section id="features" class="py-20 px-6">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold text-gray-900 mb-4">Everything ${input.targetAudience} Need</h2>
      <p class="text-gray-500 text-lg">Powerful tools designed specifically for ${input.industry} professionals</p>
    </div>
    <div class="grid md:grid-cols-3 gap-8">
      <div class="p-8 rounded-2xl bg-gray-50 hover:bg-${color}-50 transition-colors group">
        <div class="w-12 h-12 bg-${color}-100 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-${color}-200 transition-colors">⚡</div>
        <h3 class="text-xl font-semibold text-gray-900 mb-3">Lightning Fast Results</h3>
        <p class="text-gray-500">Get results in minutes, not days. Our streamlined process saves you an average of 10 hours per week.</p>
      </div>
      <div class="p-8 rounded-2xl bg-gray-50 hover:bg-${color}-50 transition-colors group">
        <div class="w-12 h-12 bg-${color}-100 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-${color}-200 transition-colors">🎯</div>
        <h3 class="text-xl font-semibold text-gray-900 mb-3">Built for ${input.industry}</h3>
        <p class="text-gray-500">Purpose-built tools that understand your industry's unique challenges and requirements.</p>
      </div>
      <div class="p-8 rounded-2xl bg-gray-50 hover:bg-${color}-50 transition-colors group">
        <div class="w-12 h-12 bg-${color}-100 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-${color}-200 transition-colors">📈</div>
        <h3 class="text-xl font-semibold text-gray-900 mb-3">Measurable Growth</h3>
        <p class="text-gray-500">Track your progress with clear analytics. Our customers see 3x growth within the first 90 days.</p>
      </div>
    </div>
  </div>
</section>

<!-- Social Proof -->
<section id="testimonials" class="py-20 px-6 bg-gray-50">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold text-gray-900 mb-4">Loved by ${input.targetAudience}</h2>
      <div class="flex justify-center gap-1 text-amber-400 text-xl mb-2">★★★★★</div>
      <p class="text-gray-500">4.9/5 from over 200 reviews</p>
    </div>
    <div class="grid md:grid-cols-3 gap-6">
      <div class="bg-white p-8 rounded-2xl shadow-sm">
        <div class="flex gap-1 text-amber-400 mb-4">★★★★★</div>
        <p class="text-gray-600 mb-6">"${input.businessName} completely transformed how I work. I only wish I'd found it sooner. The results speak for themselves."</p>
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-${color}-100 flex items-center justify-center font-bold text-${color}-600">S</div>
          <div>
            <p class="font-semibold text-gray-900">Sarah K.</p>
            <p class="text-sm text-gray-400">${input.industry} Professional</p>
          </div>
        </div>
      </div>
      <div class="bg-white p-8 rounded-2xl shadow-sm">
        <div class="flex gap-1 text-amber-400 mb-4">★★★★★</div>
        <p class="text-gray-600 mb-6">"I was skeptical at first, but the ROI is undeniable. Best investment I've made for my ${input.industry} business this year."</p>
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-${color}-100 flex items-center justify-center font-bold text-${color}-600">M</div>
          <div>
            <p class="font-semibold text-gray-900">Marcus T.</p>
            <p class="text-sm text-gray-400">Founder & CEO</p>
          </div>
        </div>
      </div>
      <div class="bg-white p-8 rounded-2xl shadow-sm">
        <div class="flex gap-1 text-amber-400 mb-4">★★★★★</div>
        <p class="text-gray-600 mb-6">"The support team is incredible and the product just works. Finally a solution built for people like me."</p>
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-${color}-100 flex items-center justify-center font-bold text-${color}-600">J</div>
          <div>
            <p class="font-semibold text-gray-900">Jennifer L.</p>
            <p class="text-sm text-gray-400">${input.targetAudience}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section id="cta" class="py-24 px-6 bg-gradient-to-r from-${color}-600 to-${color}-700 text-white text-center">
  <div class="max-w-3xl mx-auto">
    <h2 class="text-4xl font-bold mb-6">Ready to ${input.cta}?</h2>
    <p class="text-${color}-100 text-xl mb-10">Join hundreds of ${input.targetAudience} already growing with ${input.businessName}.</p>
    <a href="#" class="bg-white text-${color}-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-${color}-50 transition-colors inline-block shadow-lg">${input.cta} — Start Free Today</a>
    <p class="text-${color}-200 mt-6 text-sm">30-day money-back guarantee. No risk.</p>
  </div>
</section>

<!-- Footer -->
<footer class="py-12 px-6 bg-gray-900 text-gray-400 text-sm">
  <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
    <div class="text-white font-bold text-lg">${input.businessName}</div>
    <div class="flex gap-8">
      <a href="#" class="hover:text-white transition-colors">Privacy</a>
      <a href="#" class="hover:text-white transition-colors">Terms</a>
      <a href="#" class="hover:text-white transition-colors">Contact</a>
    </div>
    <div>© 2025 ${input.businessName}. All rights reserved.</div>
  </div>
</footer>

</body>
</html>`;

  return {
    html,
    headline: `The Smarter Way for ${input.targetAudience} to ${input.cta}`,
    subheadline: input.description,
    sections: ['hero', 'features', 'social-proof', 'cta', 'footer'],
    metaTags: {
      title: `${input.businessName} — ${input.industry} Solutions`,
      description: `${input.description} Built for ${input.targetAudience}.`,
      keywords: `${input.industry}, ${input.targetAudience}, ${input.businessName}`,
    },
  };
}

export async function generateLandingPage(
  input: GenerationInput
): Promise<GenerationResult> {
  if (!process.env.GEMINI_API_KEY) {
    return getMockResult(input);
  }

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

  const prompt = buildPrompt(input);
  const result = await model.generateContent(prompt);
  const text = result.response.text();

  // Strip markdown code fences if present
  const cleaned = text
    .replace(/^```json\s*/i, '')
    .replace(/^```\s*/i, '')
    .replace(/\s*```$/i, '')
    .trim();

  try {
    const parsed = JSON.parse(cleaned) as GenerationResult;
    return parsed;
  } catch {
    // If JSON parsing fails, return mock with the generated text as note
    console.error('Failed to parse Gemini response as JSON, using mock');
    return getMockResult(input);
  }
}
