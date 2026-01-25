
export interface TitleProps {
    children: string;
}

/**
 * Renders a <title> tag.
 * React 19 will hoist this to the <head>.
 * 
 * Note: If multiple <Title> components are rendered, the last one wins.
 * Avoid rendering multiple titles in the same component tree.
 */
export function Title({ children }: TitleProps) {
    if (process.env.NODE_ENV === 'development') {
        // Type guard for SSR safety
        if (typeof children === 'string' && !children.trim()) {
            console.warn('[react-meta-seo] <Title> should not be empty. Google may use the page URL as the title instead.');
        }

        // Warn about duplicate titles
        if (typeof globalThis !== 'undefined') {
            if ((globalThis as any).__REACT_META_TITLE_RENDERED__) {
                console.warn('[react-meta-seo] Multiple <Title> components detected. Only the last one will be used.');
            }
            (globalThis as any).__REACT_META_TITLE_RENDERED__ = true;
        }
    }
    return <title>{children}</title>;
}
