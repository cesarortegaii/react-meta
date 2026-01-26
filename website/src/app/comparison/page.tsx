import { getComparisonContent } from '@/lib/docs';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import { Title, Meta } from 'react-meta-seo';
import { ArrowLeftRight } from 'lucide-react';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { Navigation } from '@/components/Navigation';

export default async function ComparisonPage() {
    const content = getComparisonContent();

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-neutral-200 selection:bg-blue-500/30">
            <Title>Comparison | react-meta-seo</Title>
            <Meta name="description" content="Compare react-meta-seo with react-helmet and Next.js Metadata API. See the performance benefits of React 19 native hoisting." />

            {/* Blur Backend */}
            <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-[#0A0A0A] to-[#0A0A0A]" />

            {/* Navigation */}
            <Navigation />

            <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
                <div className="grid lg:grid-cols-[1fr_300px] gap-12">

                    {/* Main Content */}
                    <main className="min-w-0">
                        <article className="prose prose-invert prose-blue max-w-none 
                        prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-white
                        prose-h1:text-4xl prose-h1:mb-8 prose-h1:pb-4 prose-h1:border-b prose-h1:border-white/10
                        prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                        prose-p:text-neutral-400 prose-p:leading-7
                        prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 hover:prose-a:underline
                        prose-code:text-blue-200 prose-code:bg-blue-500/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
                        prose-pre:bg-[#111] prose-pre:border prose-pre:border-white/5 prose-pre:rounded-xl
                        prose-img:rounded-xl prose-img:border prose-img:border-white/10
                        prose-strong:text-white
                        prose-ul:text-neutral-400
                        prose-li:text-neutral-400
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
                                    <ArrowLeftRight className="h-4 w-4 text-blue-400" />
                                    Head-to-Head
                                </h3>
                                <p className="text-sm text-neutral-400">
                                    See how react-meta-seo compares to other popular SEO libraries.
                                </p>
                            </div>

                            <div className="rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 p-6 text-white shadow-2xl shadow-cyan-900/20">
                                <h3 className="font-bold text-lg mb-2">Why Choose Us?</h3>
                                <p className="text-cyan-100 text-sm mb-4">Zero overhead, full type safety, React 19 native.</p>
                                <ul className="text-sm space-y-2 text-cyan-100">
                                    <li>⚡ 0ms hydration cost</li>
                                    <li>📦 &lt;5kB bundle size</li>
                                    <li>🔒 Type-safe schemas</li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
