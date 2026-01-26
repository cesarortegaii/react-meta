import { getDocumentationContent } from '@/lib/docs';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import { Title, Meta } from 'react-meta-seo';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function DocsPage() {
    const content = getDocumentationContent();

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-blue-500/30">
            <Title>Documentation | react-meta-seo</Title>
            <Meta name="description" content="Comprehensive documentation for react-meta-seo. Integration guides, API reference, and migration tutorials." />

            <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-md">
                <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
                    <Link href="/" className="flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>
                    <div className="font-semibold">Documentation</div>
                </div>
            </header>

            <div className="mx-auto max-w-4xl px-6 py-12">
                <article className="prose prose-invert prose-blue max-w-none prose-headings:scroll-mt-24 prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-white/10">
                    <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                        {content}
                    </ReactMarkdown>
                </article>
            </div>
        </div>
    );
}
