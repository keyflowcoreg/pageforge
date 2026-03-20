'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { TemplateGallery } from '@/components/TemplateGallery';
import { PayNow } from '@/components/paynow';
import { FAQAccordion } from '@/components/FAQAccordion';
import { SocialShare } from '@/components/SocialShare';
import EmailCapture from '@/components/EmailCapture';
import { EcosystemFooter } from '@/components/EcosystemFooter';

const FAQ_ITEMS = [
  {
    question: 'How does PageForge generate landing pages?',
    answer: 'PageForge uses Gemini 2.0 Flash AI to generate complete, responsive landing pages from a simple description of your business. Just fill in a few fields and the AI crafts compelling copy, layout, and styling in seconds.',
  },
  {
    question: 'Do I need design or coding skills?',
    answer: 'Not at all. PageForge handles everything — design, copywriting, and code generation. You describe your business in plain English and get a production-ready page.',
  },
  {
    question: 'What do I get with the free plan?',
    answer: 'The free plan includes 1 AI-generated landing page per month with a live preview, shareable link, and basic HTML export. The export includes a PageForge watermark.',
  },
  {
    question: 'What is included in the $29 Pro export?',
    answer: 'The Pro export gives you clean, production-ready Next.js component code with no watermark, Vercel deploy instructions, and a commercial license to use the page however you want.',
  },
  {
    question: 'Can I edit the generated page?',
    answer: 'Yes! The exported code is clean Next.js/React that you can customize freely. You own the output — modify the copy, styling, or structure as needed.',
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept all major credit and debit cards via Stripe, as well as USDC cryptocurrency payments on the Base network.',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#0A0A0F]/95 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              PF
            </div>
            <span className="text-lg font-bold text-white">PageForge</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#how-it-works" className="hover:text-indigo-400 transition-colors">How it works</a>
            <a href="#use-cases" className="hover:text-indigo-400 transition-colors">Use Cases</a>
            <a href="#pricing" className="hover:text-indigo-400 transition-colors">Pricing</a>
            <a href="#templates" className="hover:text-indigo-400 transition-colors">Templates</a>
          </div>
          <Link
            href="/generate"
            className="bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Generate Free
          </Link>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero */}
        <section className="py-24 px-6 text-center bg-gradient-to-b from-indigo-950/40 via-[#0A0A0F] to-[#0A0A0F] overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 text-sm font-medium px-4 py-2 rounded-full mb-8 border border-indigo-500/30"
            >
              <span>&#10024;</span>
              <span>Powered by Gemini 2.0 Flash</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
            >
              Your next landing page<br />
              is <span className="text-indigo-600">60 seconds</span> away.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10"
            >
              Describe your business in plain English. Our AI generates a beautiful,
              high-converting landing page — ready to preview, share, and deploy.
              No design skills. No code. No waiting.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                href="/generate"
                className="relative bg-indigo-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-900/50 hover:shadow-xl hover:shadow-indigo-800/50 hover:-translate-y-0.5 group"
              >
                <span className="absolute inset-0 rounded-xl bg-indigo-400 opacity-0 group-hover:opacity-20 animate-pulse" />
                Generate Your Page — Free
              </Link>
              <a
                href="#how-it-works"
                className="border border-white/20 text-zinc-300 px-10 py-4 rounded-xl font-semibold text-lg hover:border-indigo-500/50 transition-colors"
              >
                See How It Works
              </a>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="text-sm text-zinc-500 mt-6"
            >
              No credit card required &middot; 1 free page per month
            </motion.p>
          </div>
        </section>

        {/* Demo widget */}
        <section className="py-16 px-6 bg-[#0A0A0F]">
          <motion.div {...fadeUp} className="max-w-5xl mx-auto">
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
                  <p className="text-gray-400 text-xs font-mono mb-4">OUTPUT &#10024;</p>
                  <div className="bg-white rounded-xl h-72 overflow-hidden relative">
                    <div className="bg-indigo-600 px-4 py-2 flex items-center justify-between">
                      <span className="text-white text-xs font-bold">Acme Analytics</span>
                      <span className="bg-white text-indigo-600 text-xs px-3 py-1 rounded-full font-medium">Free Trial</span>
                    </div>
                    <div className="p-4 bg-gradient-to-b from-indigo-50 to-white text-center">
                      <p className="text-xs text-indigo-600 font-medium mb-2">Trusted by 200+ SaaS teams</p>
                      <h3 className="text-sm font-bold text-gray-900 leading-tight mb-2">Reduce Churn 40%<br />With Predictive AI</h3>
                      <p className="text-xs text-gray-500 mb-3">Automated workflows that save customers before they leave.</p>
                      <div className="inline-block bg-indigo-600 text-white text-xs px-4 py-1.5 rounded-lg font-medium">Start Free Trial &rarr;</div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-medium">
                      Generated in 3.2s
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="py-20 px-6 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 {...fadeUp} className="text-3xl font-bold text-white mb-4">How PageForge Works</motion.h2>
            <motion.p {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="text-zinc-400 text-lg mb-16">Three steps to your perfect landing page</motion.p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Describe Your Business',
                  desc: 'Fill out a simple form with your business name, what you do, your target audience, and your primary call-to-action.',
                  icon: '\uD83D\uDCDD',
                },
                {
                  step: '02',
                  title: 'AI Generates Your Page',
                  desc: 'Gemini 2.0 Flash crafts a complete, beautiful landing page with compelling copy tailored to your business in seconds.',
                  icon: '\u2728',
                },
                {
                  step: '03',
                  title: 'Preview & Export',
                  desc: 'Preview your page live, share it with a link, or export clean Next.js code ready to deploy on Vercel.',
                  icon: '\uD83D\uDE80',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  {...stagger}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className="text-indigo-600 font-mono text-sm font-semibold mb-2">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-zinc-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section id="use-cases" className="py-20 px-6 bg-[#0A0A0F]">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Built for Every Launch</h2>
              <p className="text-zinc-400 text-lg">One tool, unlimited use cases</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'SaaS Launch',
                  desc: 'Ship a polished marketing page for your MVP the same day you finish building it.',
                  icon: '\uD83D\uDE80',
                  color: 'bg-blue-50 border-blue-200',
                  iconBg: 'bg-blue-100',
                },
                {
                  title: 'Product Hunt Launch',
                  desc: 'Generate a dedicated landing page for your PH launch in minutes, not days.',
                  icon: '\uD83D\uDC31',
                  color: 'bg-orange-50 border-orange-200',
                  iconBg: 'bg-orange-100',
                },
                {
                  title: 'Freelance Portfolio',
                  desc: 'Create a professional portfolio page that showcases your work and wins clients.',
                  icon: '\uD83C\uDFA8',
                  color: 'bg-purple-50 border-purple-200',
                  iconBg: 'bg-purple-100',
                },
                {
                  title: 'Agency Client Pages',
                  desc: 'Deliver client landing pages 10x faster. Generate, tweak, deploy — bill for value.',
                  icon: '\uD83C\uDFE2',
                  color: 'bg-green-50 border-green-200',
                  iconBg: 'bg-green-100',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  {...stagger}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-white/10 p-6 bg-white/[0.03] hover:bg-white/[0.06] hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center text-2xl mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Templates */}
        <section id="templates" className="py-20 px-6 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">5 Style Templates</h2>
              <p className="text-zinc-400 text-lg">Choose a design direction, AI does the rest</p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.15 }}>
              <TemplateGallery />
            </motion.div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 px-6 bg-[#0A0A0F]">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
              <p className="text-zinc-400 text-lg">Start free, upgrade when you need it</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Free */}
              <motion.div
                {...stagger}
                transition={{ duration: 0.5, delay: 0 }}
                className="bg-white/[0.03] rounded-2xl p-8 border border-white/10 hover:border-indigo-500/30 transition-colors"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">Free</h3>
                  <div className="text-4xl font-bold text-white">$0</div>
                  <p className="text-zinc-500 text-sm mt-1">Forever free</p>
                </div>
                <ul className="space-y-3 text-sm text-zinc-400 mb-8">
                  {[
                    '1 generation per month',
                    'Live preview in browser',
                    'Shareable preview link',
                    'HTML export',
                    'PageForge watermark included',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">&#10003;</span> {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/generate"
                  className="block text-center py-3 border-2 border-indigo-500 text-indigo-400 rounded-xl font-semibold hover:bg-indigo-500/10 transition-colors"
                >
                  Start Free
                </Link>
              </motion.div>

              {/* Pro */}
              <motion.div
                {...stagger}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="bg-indigo-600 rounded-2xl p-8 text-white relative shadow-xl shadow-indigo-900/50 scale-[1.02]"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-gray-900 text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-1">Pro</h3>
                  <div className="text-4xl font-bold">
                    $29<span className="text-lg font-normal opacity-75">/page</span>
                  </div>
                  <p className="text-indigo-200 text-sm mt-1">Pay per clean export</p>
                </div>
                <ul className="space-y-3 text-sm text-indigo-100 mb-8">
                  {[
                    'Clean Next.js component export',
                    'No watermark',
                    'Vercel deploy instructions',
                    'Commercial license',
                    'Priority AI generation',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-white mt-0.5">&#10003;</span> {item}
                    </li>
                  ))}
                </ul>
                <PayNow
                  productName="PageForge Export"
                  price={29}
                  description="Clean Next.js component export. No watermark. Commercial license."
                  onSuccess={() => router.push('/success')}
                  accentColor="#4f46e5"
                />
              </motion.div>

              {/* Unlimited */}
              <motion.div
                {...stagger}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/[0.03] rounded-2xl p-8 border border-white/10 hover:border-indigo-500/30 transition-colors"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">Unlimited</h3>
                  <div className="text-4xl font-bold text-white">
                    $49<span className="text-lg font-normal text-zinc-500">/mo</span>
                  </div>
                  <p className="text-zinc-500 text-sm mt-1">For power users &amp; agencies</p>
                </div>
                <ul className="space-y-3 text-sm text-zinc-400 mb-8">
                  {[
                    'Unlimited generations',
                    'Unlimited clean exports',
                    'A/B variant testing',
                    'SEO optimization',
                    'All Pro features included',
                    'Priority support',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">&#10003;</span> {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/generate"
                  className="block text-center py-3 border-2 border-white/20 text-zinc-300 rounded-xl font-semibold hover:border-indigo-500/40 transition-colors"
                >
                  Coming Soon
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-6 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">What people are saying</h2>
              <div className="flex justify-center gap-1 text-amber-400 text-xl mb-2">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="text-zinc-500">Join hundreds of founders using PageForge</p>
            </motion.div>
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
              ].map((t, i) => (
                <motion.div
                  key={t.name}
                  {...stagger}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/[0.03] p-8 rounded-2xl border border-white/10 hover:border-indigo-500/20 hover:shadow-md transition-all"
                >
                  <div className="flex gap-1 text-amber-400 mb-4">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                  <p className="text-zinc-300 mb-6 leading-relaxed">{`"${t.text}"`}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{t.name}</p>
                      <p className="text-sm text-zinc-500">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-24 px-6 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-center overflow-hidden">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Your landing page is<br />60 seconds away
            </h2>
            <p className="text-indigo-200 text-xl mb-10">
              Join 500+ founders who launched faster with PageForge
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Link
                href="/generate"
                className="relative inline-block bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
              >
                <span className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-30 animate-pulse" />
                Generate Your Free Page &rarr;
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6 bg-[#0A0A0F]">
          <div className="max-w-4xl mx-auto">
            <FAQAccordion items={FAQ_ITEMS} />
          </div>
        </section>

        {/* Email Capture */}
        <section className="py-20 px-6 bg-white/[0.02]">
          <div className="max-w-xl mx-auto">
            <EmailCapture
              heading="Get page design tips"
              description="Weekly AI-powered design insights and new templates."
              accent="indigo"
            />
          </div>
        </section>

        {/* Social Share */}
        <section className="py-12 px-6 bg-[#0A0A0F]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-zinc-400 text-sm mb-4">Share PageForge with your network</p>
            <div className="flex justify-center">
              <SocialShare
                url="https://pageforge-phi.vercel.app"
                title="PageForge — AI Landing Pages in 60 Seconds"
                description="Generate beautiful, high-converting landing pages with AI. No design skills needed."
                hashtags={['PageForge', 'AI', 'LandingPage']}
              />
            </div>
          </div>
        </section>
      </main>

      <EcosystemFooter currentProduct="PageForge" />
    </div>
  );
}
