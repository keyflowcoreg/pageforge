export interface Template {
  name: string;
  category: string;
  description: string;
  primaryColor: string;
  html: string;
}

export const TEMPLATES: Template[] = [
  {
    name: 'SaaS Modern',
    category: 'saas',
    description: 'Clean, conversion-focused layout for software products',
    primaryColor: '#6366f1',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SaaS Product</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white font-sans">
<nav class="flex items-center justify-between px-8 py-4 border-b">
  <div class="text-xl font-bold text-indigo-600">Brand</div>
  <a href="#" class="bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-medium">Get Started Free</a>
</nav>
<main>
  <section class="text-center py-24 px-4 bg-gradient-to-b from-indigo-50 to-white">
    <div class="inline-block bg-indigo-100 text-indigo-700 text-sm font-medium px-4 py-1 rounded-full mb-6">Trusted by 10,000+ teams</div>
    <h1 class="text-5xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight">The smarter way to <span class="text-indigo-600">grow your business</span></h1>
    <p class="text-xl text-gray-500 mt-6 max-w-2xl mx-auto">Automate your workflow, delight your customers, and scale without limits.</p>
    <div class="flex justify-center gap-4 mt-10">
      <a href="#" class="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium text-lg">Start for Free</a>
      <a href="#" class="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium text-lg">See Demo</a>
    </div>
  </section>
  <section class="py-20 px-8 max-w-6xl mx-auto">
    <div class="grid grid-cols-3 gap-8">
      <div class="p-6 rounded-2xl bg-gray-50">
        <div class="w-10 h-10 bg-indigo-100 rounded-lg mb-4 flex items-center justify-center text-indigo-600 text-xl">⚡</div>
        <h3 class="font-semibold text-lg text-gray-900 mb-2">Lightning Fast</h3>
        <p class="text-gray-500">Deploy in seconds, not hours. Our infrastructure handles scale automatically.</p>
      </div>
      <div class="p-6 rounded-2xl bg-gray-50">
        <div class="w-10 h-10 bg-indigo-100 rounded-lg mb-4 flex items-center justify-center text-indigo-600 text-xl">🔒</div>
        <h3 class="font-semibold text-lg text-gray-900 mb-2">Enterprise Security</h3>
        <p class="text-gray-500">SOC 2 compliant with end-to-end encryption and role-based access.</p>
      </div>
      <div class="p-6 rounded-2xl bg-gray-50">
        <div class="w-10 h-10 bg-indigo-100 rounded-lg mb-4 flex items-center justify-center text-indigo-600 text-xl">📈</div>
        <h3 class="font-semibold text-lg text-gray-900 mb-2">Proven ROI</h3>
        <p class="text-gray-500">Customers report 3x productivity gains within the first month.</p>
      </div>
    </div>
  </section>
</main>
</body>
</html>`,
  },
  {
    name: 'Agency Bold',
    category: 'agency',
    description: 'Impactful, creative layout for digital agencies',
    primaryColor: '#f59e0b',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Creative Agency</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-black text-white font-sans">
<nav class="flex items-center justify-between px-8 py-6">
  <div class="text-2xl font-black text-amber-400">AGENCY</div>
  <a href="#" class="border-2 border-amber-400 text-amber-400 px-6 py-2 font-bold hover:bg-amber-400 hover:text-black transition-colors">WORK WITH US</a>
</nav>
<main>
  <section class="px-8 py-28 max-w-5xl">
    <p class="text-amber-400 font-bold tracking-widest text-sm mb-6">WE BUILD WHAT MATTERS</p>
    <h1 class="text-7xl font-black leading-none mb-8">WE CRAFT<br/><span class="text-amber-400">DIGITAL</span><br/>EXPERIENCES</h1>
    <p class="text-gray-400 text-xl max-w-lg mb-10">Award-winning design studio delivering brands that convert browsers into buyers.</p>
    <a href="#" class="bg-amber-400 text-black px-10 py-4 font-black text-lg inline-block">SEE OUR WORK →</a>
  </section>
</main>
</body>
</html>`,
  },
  {
    name: 'Product Minimal',
    category: 'product',
    description: 'Clean Apple-inspired layout for physical products',
    primaryColor: '#10b981',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Product</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white font-sans">
<section class="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-emerald-50 to-white">
  <span class="text-emerald-600 font-semibold text-sm tracking-wider uppercase mb-4">New Release</span>
  <h1 class="text-6xl font-bold text-gray-900 mb-6 leading-tight">The Product<br/>That Changes Everything</h1>
  <p class="text-gray-500 text-xl max-w-xl mb-10">Designed to perfection. Built to last. Available now.</p>
  <div class="flex gap-4">
    <a href="#" class="bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold">Buy Now — $99</a>
    <a href="#" class="bg-gray-100 text-gray-700 px-8 py-3 rounded-full font-semibold">Learn More</a>
  </div>
</section>
</body>
</html>`,
  },
  {
    name: 'Portfolio Creative',
    category: 'portfolio',
    description: 'Personal brand and portfolio showcase layout',
    primaryColor: '#8b5cf6',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Portfolio</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-950 text-white font-sans">
<section class="min-h-screen flex items-center px-12">
  <div>
    <p class="text-violet-400 font-mono text-sm mb-4">Hello, I am</p>
    <h1 class="text-7xl font-bold mb-4">Alex Chen</h1>
    <p class="text-2xl text-gray-400 mb-8">Product Designer & Creative Coder</p>
    <p class="text-gray-500 max-w-lg mb-10 text-lg">I craft digital experiences that are beautiful, functional, and impactful. 5+ years helping startups ship great products.</p>
    <div class="flex gap-4">
      <a href="#" class="bg-violet-600 text-white px-8 py-3 rounded-lg font-semibold">View Work</a>
      <a href="#" class="text-violet-400 px-8 py-3 font-semibold border border-violet-400 rounded-lg">Contact Me</a>
    </div>
  </div>
</section>
</body>
</html>`,
  },
  {
    name: 'eCommerce Playful',
    category: 'ecommerce',
    description: 'Fun, energetic layout for consumer products and shops',
    primaryColor: '#ec4899',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Shop</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-pink-50 font-sans">
<nav class="bg-white shadow-sm flex items-center justify-between px-8 py-4">
  <div class="text-2xl font-black text-pink-500">SHOP 🛍️</div>
  <a href="#" class="bg-pink-500 text-white px-5 py-2 rounded-full font-bold text-sm">Shop Now</a>
</nav>
<section class="text-center py-24 px-4">
  <div class="text-5xl mb-4">✨</div>
  <h1 class="text-5xl font-black text-gray-900 mb-4">Stuff You'll <span class="text-pink-500">Actually Love</span></h1>
  <p class="text-gray-600 text-xl max-w-md mx-auto mb-10">Handpicked products that bring joy to everyday life. Free shipping on orders over $50!</p>
  <a href="#" class="bg-pink-500 text-white px-10 py-4 rounded-full font-bold text-lg inline-block shadow-lg">Browse the Collection →</a>
</section>
</body>
</html>`,
  },
];

export function getTemplateByCategory(category: string): Template | undefined {
  return TEMPLATES.find((t) => t.category === category);
}

export function getTemplateByStyle(style: string): Template {
  const styleMap: Record<string, string> = {
    Modern: 'saas',
    Bold: 'agency',
    Minimal: 'product',
    Playful: 'ecommerce',
  };
  const category = styleMap[style] ?? 'saas';
  return TEMPLATES.find((t) => t.category === category) ?? TEMPLATES[0];
}
