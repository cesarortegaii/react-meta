'use client';
import { useSyncExternalStore, useState } from 'react';

interface PreviewData {
    title: string;
    description: string;
    image: string;
    url: string;
}

/**
 * Subscribe to meta tag changes in <head>
 * React 19 compatible using useSyncExternalStore
 */
function subscribeToMetaTags(callback: () => void) {
    if (typeof document === 'undefined') {
        return () => { };
    }

    const observer = new MutationObserver(callback);
    observer.observe(document.head, {
        childList: true,
        subtree: true,
        attributeFilter: ['content'], // Only watch content changes
    });

    return () => observer.disconnect();
}

// Cache for snapshot stability
let currentSnapshot: PreviewData = { title: '', description: '', image: '', url: '' };
let currentJSON = JSON.stringify(currentSnapshot);

/**
 * Get current meta tag snapshot
 * Must return stable reference if data hasn't changed to prevent infinite loops
 */
function getMetaSnapshot(): PreviewData {
    if (typeof document === 'undefined') {
        return currentSnapshot;
    }

    const newSnapshot = {
        title: document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.content || document.title,
        description: document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.content ||
            document.querySelector<HTMLMetaElement>('meta[name="description"]')?.content || '',
        image: document.querySelector<HTMLMetaElement>('meta[property="og:image"]')?.content || '',
        url: document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.content ||
            window.location.href,
    };

    const newJSON = JSON.stringify(newSnapshot);
    if (newJSON !== currentJSON) {
        currentSnapshot = newSnapshot;
        currentJSON = newJSON;
    }

    return currentSnapshot;
}

/**
 * Development-only social preview overlay.
 * Shows how your page will look when shared on Google and Twitter.
 * 
 * Usage:
 * ```tsx
 * {process.env.NODE_ENV === 'development' && <SocialPreview />}
 * ```
 */
export interface SocialPreviewProps {
    forceVisible?: boolean;
}

export function SocialPreview({ forceVisible }: SocialPreviewProps) {
    // Safety guard: only run in development unless forced
    if (process.env.NODE_ENV !== 'development' && !forceVisible) {
        return null;
    }

    // Use useSyncExternalStore for React 19 SSR compatibility
    const data = useSyncExternalStore(
        subscribeToMetaTags,
        getMetaSnapshot,
        getMetaSnapshot // Server snapshot (same as client for this use case)
    );

    const [activeTab, setActiveTab] = useState<'google' | 'twitter'>('google');

    return (
        <div className="social-preview-overlay">
            <div className="social-preview-container">
                <div className="social-preview-header">
                    <h3>Social Preview (Dev Only)</h3>
                    <div className="social-preview-tabs">
                        <button
                            onClick={() => setActiveTab('google')}
                            className={activeTab === 'google' ? 'active' : ''}
                        >
                            Google
                        </button>
                        <button
                            onClick={() => setActiveTab('twitter')}
                            className={activeTab === 'twitter' ? 'active' : ''}
                        >
                            Twitter
                        </button>
                    </div>
                </div>

                {activeTab === 'google' && (
                    <div className="preview-card google-card">
                        <div className="preview-url">{data.url}</div>
                        <div className="preview-title">{data.title || '(No og:title)'}</div>
                        <div className="preview-description">
                            {data.description || '(No og:description)'}
                        </div>
                        {data.image && (
                            <img src={data.image} alt="Preview" className="preview-image" />
                        )}
                    </div>
                )}

                {activeTab === 'twitter' && (
                    <div className="preview-card twitter-card">
                        {data.image && (
                            <img src={data.image} alt="Preview" className="preview-image-large" />
                        )}
                        <div className="preview-content">
                            <div className="preview-title">{data.title || '(No og:title)'}</div>
                            <div className="preview-description">
                                {data.description ? data.description.slice(0, 200) : '(No og:description)'}
                            </div>
                            <div className="preview-url">{new URL(data.url).hostname}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
