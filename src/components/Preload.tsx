import React from 'react';

export interface PreloadProps extends React.LinkHTMLAttributes<HTMLLinkElement> {
    href: string;
    as: 'script' | 'style' | 'image' | 'font' | 'fetch' | 'track' | 'worker' | 'object' | 'document' | 'audio' | 'video';
    fetchPriority?: 'high' | 'low' | 'auto';
}

/**
 * Renders a <link rel="preload"> tag.
 * React 19 will hoist this to the <head>.
 * Use this to prioritize loading of critical assets like LCP images or fonts.
 */
export function Preload(props: PreloadProps) {
    // Auto-fix: fonts always require crossOrigin="anonymous"
    const finalProps = props.as === 'font' && !props.crossOrigin
        ? { ...props, crossOrigin: 'anonymous' as const }
        : props;

    // Still warn in development for awareness
    if (process.env.NODE_ENV === 'development' && props.as === 'font' && !props.crossOrigin) {
        console.warn(
            `[react-meta] Font preload automatically set crossOrigin="anonymous". This is required for fonts to load properly.`
        );
    }

    return <link rel="preload" {...finalProps} />;
}
