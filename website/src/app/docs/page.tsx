import { getDocumentationContent } from '@/lib/docs';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import { Title, Meta } from 'react-meta-seo';
import Link from 'next/link';
import { ArrowLeft, BookOpen, ChevronRight, Home } from 'lucide-react';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export default async function DocsPage() {
    const content = getDocumentationContent();

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-neutral-200 selection:bg-blue-500/30">
            <Title>Documentation | react-meta-seo</Title>
            <Meta name="description" content="Comprehensive documentation for react-meta-seo. Integration guides, API reference, and migration tutorials." />

            {/* Blur Backend */}
            <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-[#0A0A0A] to-[#0A0A0A]" />

            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-xl">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="group flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 bg-white/5 transition-colors group-hover:bg-white/10 group-hover:border-white/10">
                                <ArrowLeft className="h-4 w-4" />
                            </div>
                            <span className="hidden sm:inline">Back to Home</span>
                        </Link>
                        <div className="h-4 w-px bg-white/10 hidden sm:block" />
                        <nav className="flex items-center gap-2 text-sm text-neutral-400">
                            <Home className="h-4 w-4" />
                            <ChevronRight className="h-4 w-4 text-neutral-600" />
                            <span className="text-white font-medium">Documentation</span>
                        </nav>
                    </div>
                </div>
            </header>

            <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
                <div className="grid lg:grid-cols-[1fr_300px] gap-12">

                    {/* Main Content */}
                    <main className="min-w-0">
                        <article className="prose prose-invert prose-blue max-w-none 
                        prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-white
                        prose-h1:text-4xl prose-h1:mb-8 prose-h1:pb-4 prose-h1:border-b prose-h1:border-white/10
                        prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                        prose-p:text-neutral-400 prose-p:leading-7
                        prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 hover:prose-a:underline
                        prose-code:text-blue-200 prose-code:bg-blue-500/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
                        prose-pre:bg-[#111] prose-pre:border prose-pre:border-white/5 prose-pre:rounded-xl
                        prose-img:rounded-xl prose-img:border prose-img:border-white/10
                        prose-strong:text-white
                        prose-ul:text-neutral-400
                        prose-table:border-collapse prose-th:text-left prose-th:p-4 prose-th:text-white prose-th:bg-white/5 prose-td:p-4 prose-td:text-neutral-400 prose-td:border-b prose-td:border-white/5
                    ">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeHighlight, rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]]}
                                components={{
                                    blockquote: ({ node, ...props }) => (
                                        <blockquote className="not-italic border-l-4 border-blue-500/50 bg-blue-500/5 px-6 py-4 rounded-r-lg my-6 text-neutral-300" {...props} />
                                    ),
                                    table: ({ node, ...props }) => (
                                        <div className="overflow-x-auto my-8 rounded-lg border border-white/5">
                                            <table className="w-full text-sm" {...props} />
                                        </div>
                                    ),
                                    hr: ({ node, ...props }) => (
                                        <hr className="my-12 border-white/5" {...props} />
                                    )
                                }}
                            >
                                {content}
                            </ReactMarkdown>
                        </article>
                    </main>

                    {/* Sidebar (Desktop) */}
                    <aside className="hidden lg:block space-y-8">
                        <div className="sticky top-24 space-y-6">
                            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm">
                                <h3 className="flex items-center gap-2 font-semibold text-white mb-4">
                                    <BookOpen className="h-4 w-4 text-blue-400" />
                                    On this page
                                </h3>
                                <div className="text-sm text-neutral-500">
                                    {/* Note: Real TOC parsing would happen here. For now static placeholder or we rely on the markdown's TOC */}
                                    <p className="text-xs uppercase tracking-wider font-medium text-neutral-600 mb-2">Structure</p>
                                    <ul className="space-y-2.5">
                                        <li><a href="#introduction" className="hover:text-blue-400 transition-colors block">Introduction</a></li>
                                        <li><a href="#core-concepts" className="hover:text-blue-400 transition-colors block">Core Concepts</a></li>
                                        <li><a href="#api-reference" className="hover:text-blue-400 transition-colors block">API Reference</a></li>
                                        <li><a href="#advanced-seo" className="hover:text-blue-400 transition-colors block">Advanced SEO</a></li>
                                        <li><a href="#migration-guide" className="hover:text-blue-400 transition-colors block">Migration Guide</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 p-6 text-white shadow-2xl shadow-blue-900/20">
                                <h3 className="font-bold text-lg mb-2">Ready to ship?</h3>
                                <p className="text-blue-100 text-sm mb-4">Get the best SEO performance for your React 19 app today.</p>
                                <div className="bg-white/10 rounded-lg p-2 font-mono text-xs flex items-center justify-between cursor-pointer hover:bg-white/20 transition-colors">
                                    <span>npm i react-meta-seo</span>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
