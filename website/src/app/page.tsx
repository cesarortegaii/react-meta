'use client';
import { Title, Meta } from 'react-meta-seo';
import { SocialPreview } from 'react-meta-seo/preview';
import { ArrowRight, Code2, Rocket, Search } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-blue-500/30">
      <Title>react-meta-seo | The SEO Library for React 19</Title>
      <Meta name="description" content="Zero-runtime overhead, RSC-compatible SEO library for React 19. Native hoisting, type-safety, and built-in social previews." />
      <SocialPreview forceVisible />

      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-neutral-950 to-neutral-950" />
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 mb-8">
            <Rocket className="h-4 w-4" />
            <span>Built for React 19 & Server Components</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent pb-2">
            The Definitive SEO Library <br /> for React 19
          </h1>
          <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto">
            Native hoisting. Zero hydration mismatch. Type-safe JSON-LD.
            Stop fighting with effects and providers—embrace the future of React metadata.
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
