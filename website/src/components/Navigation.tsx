'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowLeft, Home, ChevronRight, FileText, GitCommit, Users, Shield, ArrowLeftRight, BookCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationTab {
    name: string;
    href: string;
    icon: React.ReactNode;
}

const tabs: NavigationTab[] = [
    { name: 'Documentation', href: '/docs', icon: <FileText className="h-4 w-4" /> },
    { name: 'Comparison', href: '/comparison', icon: <ArrowLeftRight className="h-4 w-4" /> },
    { name: 'Migration', href: '/migration', icon: <BookCheck className="h-4 w-4" /> },
    { name: 'Changelog', href: '/changelog', icon: <GitCommit className="h-4 w-4" /> },
    { name: 'Contributing', href: '/contributing', icon: <Users className="h-4 w-4" /> },
    { name: 'Code of Conduct', href: '/code-of-conduct', icon: <Shield className="h-4 w-4" /> },
];

export function Navigation() {
    const pathname = usePathname();

    const currentTab = tabs.find(tab => pathname === tab.href);

    return (
        <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-6">
                {/* Top Bar */}
                <div className="flex h-16 items-center justify-between">
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
                            <span className="text-white font-medium">{currentTab?.name || 'Documentation'}</span>
                        </nav>
                    </div>
                </div>

                {/* Tabs */}
                <nav className="flex gap-1 overflow-x-auto scrollbar-hide -mb-px" aria-label="Documentation sections">
                    {tabs.map((tab) => {
                        const isActive = pathname === tab.href;
                        return (
                            <Link
                                key={tab.href}
                                href={tab.href}
                                className={cn(
                                    "flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap",
                                    isActive
                                        ? "border-blue-500 text-white"
                                        : "border-transparent text-neutral-400 hover:text-white hover:border-white/10"
                                )}
                                aria-current={isActive ? 'page' : undefined}
                            >
                                {tab.icon}
                                <span>{tab.name}</span>
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
}
