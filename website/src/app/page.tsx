'use client';
import { Title, Meta } from 'react-meta-seo';
import { ArrowRight, Code2, Rocket, Search, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  // SoftwareApplication Schema
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "react-meta-seo",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web, Node.js",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "softwareVersion": "0.1.0",
    "releaseNotes": "https://react-meta-seo.vercel.app/changelog",
    "programmingLanguage": "TypeScript, React",
    "description": "Zero-runtime overhead SEO library for React 19 with native metadata hoisting",
    "featureList": [
      "React 19 Native Hoisting",
      "Zero Runtime Overhead",
      "RSC Compatible",
      "Type-safe JSON-LD",
      "Social Preview Debugger"
    ]
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is react-meta-seo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "react-meta-seo is a zero-runtime overhead SEO library for React 19 that uses native metadata hoisting. It's a modern alternative to React Helmet with full React Server Components support."
        }
      },
      {
        "@type": "Question",
        "name": "How is react-meta-seo different from React Helmet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlike React Helmet which uses legacy side-effect APIs, react-meta-seo leverages React 19's native hoisting primitives, resulting in 0ms hydration overhead and full RSC compatibility."
        }
      },
      {
        "@type": "Question",
        "name": "Does react-meta-seo work with React 19 Server Components?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! react-meta-seo is fully compatible with React Server Components (RSC). All metadata components work in both server and client components without any configuration."
        }
      },
      {
        "@type": "Question",
        "name": "How do I migrate from React Helmet to react-meta-seo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Migration is simple: replace Helmet components with react-meta-seo equivalents. No provider wrapper needed. See our migration guide for step-by-step instructions."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-blue-500/30">
      <Title>react-meta-seo | React 19 SEO Library - Zero Runtime Overhead</Title>
      <Meta name="description" content="The definitive React 19 SEO library. Zero-runtime overhead, RSC-compatible, type-safe metadata management. Modern alternative to React Helmet." />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-neutral-950 to-neutral-950" />
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 mb-8">
            <Rocket className="h-4 w-4" />
            <span>Built for React 19 & Server Components</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent pb-2">
            The Definitive <span className="text-blue-400">React 19 SEO</span> Library
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl">Zero Runtime Overhead</span>
          </h1>
          <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto">
            The modern <strong className="text-neutral-300">React Helmet alternative</strong> for React 19.
            Native hoisting, zero hydration overhead, type-safe JSON-LD.
            Built for <strong className="text-neutral-300">React Server Components</strong>.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="flex items-center justify-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/50 px-6 py-3 text-sm font-mono text-neutral-300">
              <span className="text-neutral-500">$</span> npm install react-meta-seo
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="px-6 py-24 bg-neutral-900/30 border-y border-white/5">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Rocket className="h-6 w-6 text-green-400" />}
              title="Zero Overhead"
              description="Leverages React 19's native hoisting primitives. No side effects, no layout thrashing, 0ms hydration cost."
            />
            <FeatureCard
              icon={<Search className="h-6 w-6 text-blue-400" />}
              title="Type-Safe JSON-LD"
              description="Write structured data with full TypeScript validation. Catch missing required SEO fields at compile time."
            />
            <FeatureCard
              icon={<Code2 className="h-6 w-6 text-purple-400" />}
              title="RSC Compatible"
              description="Works seamlessly in Server Components. Streaming-safe metadata injection without client-side waterfalls."
            />
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why switch?</h2>
          <div className="overflow-hidden rounded-xl border border-white/10 bg-neutral-900/50">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/10 bg-white/5">
                <tr>
                  <th className="p-4 font-medium text-neutral-300">Feature</th>
                  <th className="p-4 font-medium text-red-300">React Helmet</th>
                  <th className="p-4 font-medium text-green-300">react-meta-seo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="p-4 text-neutral-400">Hydration Overhead</td>
                  <td className="p-4 text-neutral-400">~15ms (Side Effects)</td>
                  <td className="p-4 font-semibold text-green-400">0ms (Native)</td>
                </tr>
                <tr>
                  <td className="p-4 text-neutral-400">Server Components</td>
                  <td className="p-4 text-neutral-400">❌ Not Supported</td>
                  <td className="p-4 font-semibold text-green-400">✅ Native Support</td>
                </tr>
                <tr>
                  <td className="p-4 text-neutral-400">Provider Wrapper</td>
                  <td className="p-4 text-neutral-400">Required</td>
                  <td className="p-4 font-semibold text-green-400">None</td>
                </tr>
                <tr>
                  <td className="p-4 text-neutral-400">JSON-LD Validation</td>
                  <td className="p-4 text-neutral-400">None</td>
                  <td className="p-4 font-semibold text-green-400">Built-in</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-sm font-medium text-blue-400 mb-4">
              <HelpCircle className="h-4 w-4" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl font-bold text-white">Everything you need to know about React 19 SEO</h2>
          </div>

          <div className="space-y-4">
            <FAQItem
              question="What is react-meta-seo?"
              answer="react-meta-seo is a zero-runtime overhead SEO library for React 19 that uses native metadata hoisting. It's a modern alternative to React Helmet with full React Server Components support."
            />
            <FAQItem
              question="How is react-meta-seo different from React Helmet?"
              answer="Unlike React Helmet which uses legacy side-effect APIs, react-meta-seo leverages React 19's native hoisting primitives, resulting in 0ms hydration overhead and full RSC compatibility."
            />
            <FAQItem
              question="Does react-meta-seo work with React 19 Server Components?"
              answer="Yes! react-meta-seo is fully compatible with React Server Components (RSC). All metadata components work in both server and client components without any configuration."
            />
            <FAQItem
              question="How do I migrate from React Helmet to react-meta-seo?"
              answer="Migration is simple: replace Helmet components with react-meta-seo equivalents. No provider wrapper needed. See our migration guide for step-by-step instructions."
            />
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              Read full documentation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/5">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-neutral-400">{description}</p>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  return (
    <details className="group rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:bg-white/5">
      <summary className="cursor-pointer text-lg font-semibold text-white list-none flex items-center justify-between">
        {question}
        <span className="text-blue-400 group-open:rotate-180 transition-transform">▼</span>
      </summary>
      <p className="mt-4 text-neutral-400 leading-relaxed">{answer}</p>
    </details>
  );
}
