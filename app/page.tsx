import Link from 'next/link';
import { TemplateGallery } from '@/components/TemplateGallery';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              PF
            </div>
            <span className="text-lg font-bold text-gray-900">PageForge</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#how-it-works" className="hover:text-indigo-600 transition-colors">How it works</a>
            <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
            <a href="#templates" className="hover:text-indigo-600 transition-colors">Templates</a>
          </div>
          <Link
            href="/generate"
            className="bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Generate Free →
          </Link>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero */}
        <section className="py-24 px-6 text-center bg-gradient-to-b from-indigo-50 via-white to-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm font-medium px-4 py-2 rounded-full mb-8">
              <span>✨</span>
              <span>Powered by Gemini 2.0 Flash</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Describe your business.<br />
              <span className="text-indigo-600">Get a landing page</span><br />
              in 30 seconds.
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
              PageForge uses AI to generate beautiful, high-converting landing pages
              from a simple description. No design skills required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/generate"
                className="bg-indigo-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
              >
                Generate Your Page — Free
              </Link>
              <a
                href="#how-it-works"
                className="border border-gray-200 text-gray-700 px-10 py-4 rounded-xl font-semibold text-lg hover:border-indigo-300 transition-colors"
              >
                See How It Works
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              No credit card required · 1 free page per month
            </p>
          </div>
        </section>

        {/* Demo widget */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-gray-800 px-6 py-3 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 bg-gray-700 rounded-md px-4 py-1 text-xs text-gray-400 font-mono">
                  pageforge.vercel.app/generate
                </div>
              </div>
              <div className="p-8 grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-400 text-xs font-mono mb-4">INPUT</p>
                  <div className="space-y-3">
                    <div className="bg-gray-800 rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">Business Name</p>
                      <p className="text-white text-sm">Acme Analytics</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">Description</p>
                      <p className="text-white text-sm">We help SaaS companies reduce churn by 40% with predictive analytics.</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">CTA</p>
                      <p className="text-white text-sm">Start Free Trial</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="bg-indigo-900 text-indigo-300 text-xs px-2 py-1 rounded">Modern</span>
                      <span className="bg-indigo-900 text-indigo-300 text-xs px-2 py-1 rounded">SaaS</span>
                      <span className="bg-indigo-900 text-indigo-300 text-xs px-2 py-1 rounded">Blue</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-mono mb-4">OUTPUT ✨</p>
                  <div className="bg-white rounded-xl h-72 overflow-hidden relative">
                    <div className="bg-indigo-600 px-4 py-2 flex items-center justify-between">
                      <span className="text-white text-xs font-bold">Acme Analytics</span>
                      <span className="bg-white text-indigo-600 text-xs px-3 py-1 rounded-full font-medium">Free Trial</span>
                    </div>
                    <div className="p-4 bg-gradient-to-b from-indigo-50 to-white text-center">
                      <p className="text-xs text-indigo-600 font-medium mb-2">Trusted by 200+ SaaS teams</p>
                      <h3 className="text-sm font-bold text-gray-900 leading-tight mb-2">Reduce Churn 40%<br />With Predictive AI</h3>
                      <p className="text-xs text-gray-500 mb-3">Automated workflows that save customers before they leave.</p>
                      <div className="inline-block bg-indigo-600 text-white text-xs px-4 py-1.5 rounded-lg font-medium">Start Free Trial →</div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-medium">
                      Generated in 3.2s
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How PageForge Works</h2>
            <p className="text-gray-500 text-lg mb-16">Three steps to your perfect landing page</p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Describe Your Business',
                  desc: 'Fill out a simple form with your business name, what you do, your target audience, and your primary call-to-action.',
                  icon: '📝',
                },
                {
                  step: '02',
                  title: 'AI Generates Your Page',
                  desc: 'Gemini 2.0 Flash crafts a complete, beautiful landing page with compelling copy tailored to your business in seconds.',
                  icon: '✨',
                },
                {
                  step: '03',
                  title: 'Preview & Export',
                  desc: 'Preview your page live, share it with a link, or export clean Next.js code ready to deploy on Vercel.',
                  icon: '🚀',
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className="text-indigo-600 font-mono text-sm font-semibold mb-2">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Templates */}
        <section id="templates" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">5 Style Templates</h2>
              <p className="text-gray-500 text-lg">Choose a design direction, AI does the rest</p>
            </div>
            <TemplateGallery />
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
              <p className="text-gray-500 text-lg">Start free, upgrade when you need it</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Free */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Free</h3>
                  <div className="text-3xl font-bold text-gray-900">$0</div>
                  <p className="text-gray-500 text-sm mt-1">Forever free</p>
                </div>
                <ul className="space-y-3 text-sm text-gray-600 mb-8">
                  {[
                    '1 generation per month',
                    'Live preview in browser',
                    'Shareable preview link',
                    'HTML + Next.js export',
                    'PageForge watermark',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/generate"
                  className="block text-center py-3 border-2 border-indigo-600 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-50 transition-colors"
                >
                  Start Free
                </Link>
              </div>

              {/* Pro */}
              <div className="bg-indigo-600 rounded-2xl p-8 text-white relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-1">Pro</h3>
                  <div className="text-3xl font-bold">
                    $29<span className="text-lg font-normal opacity-75">/page</span>
                  </div>
                  <p className="text-indigo-200 text-sm mt-1">Pay per export</p>
                </div>
                <ul className="space-y-3 text-sm text-indigo-100 mb-8">
                  {[
                    'Clean Next.js component',
                    'No watermark',
                    'Vercel deploy instructions',
                    'Commercial license',
                    'Priority AI generation',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-white">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/generate"
                  className="block text-center py-3 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-indigo-50 transition-colors"
                >
                  Generate &amp; Export
                </Link>
              </div>

              {/* Unlimited */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Unlimited</h3>
                  <div className="text-3xl font-bold text-gray-900">
                    $49<span className="text-lg font-normal text-gray-400">/mo</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">For power users &amp; agencies</p>
                </div>
                <ul className="space-y-3 text-sm text-gray-600 mb-8">
                  {[
                    'Unlimited generations',
                    'A/B variant testing',
                    'SEO optimization',
                    'All Pro features',
                    'Priority support',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/generate"
                  className="block text-center py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-indigo-300 transition-colors"
                >
                  Coming Soon
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What people are saying</h2>
              <div className="flex justify-center gap-1 text-amber-400 text-xl mb-2">★★★★★</div>
              <p className="text-gray-500">Join hundreds of founders using PageForge</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Marco R.',
                  role: 'SaaS Founder',
                  text: 'I had a landing page ready in under 2 minutes. The copy was better than what I would have written myself.',
                  avatar: 'M',
                },
                {
                  name: 'Sophie L.',
                  role: 'Freelance Designer',
                  text: 'I use PageForge for every client kickoff. It generates a great first draft that I refine. Saves me 3-4 hours per project.',
                  avatar: 'S',
                },
                {
                  name: 'David K.',
                  role: 'Growth Marketer',
                  text: 'The exported Next.js code is clean and actually works. Deployed it to Vercel in 5 minutes. Worth every penny.',
                  avatar: 'D',
                },
              ].map((t) => (
                <div key={t.name} className="bg-gray-50 p-8 rounded-2xl">
                  <div className="flex gap-1 text-amber-400 mb-4">★★★★★</div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{`"${t.text}"`}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{t.name}</p>
                      <p className="text-sm text-gray-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-24 px-6 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              Your landing page is 30 seconds away
            </h2>
            <p className="text-indigo-200 text-xl mb-10">
              Join 500+ founders who launched faster with PageForge
            </p>
            <Link
              href="/generate"
              className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-colors shadow-lg"
            >
              Generate Your Free Page →
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">PF</div>
              <span className="text-white font-bold text-lg">PageForge</span>
            </div>
            <div className="flex gap-8 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <Link href="/generate" className="hover:text-white transition-colors">Generator</Link>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            © 2025 PageForge. AI-powered landing pages. Built with Next.js + Gemini.
          </div>
        </div>
      </footer>
    </div>
  );
}
