
export interface LinkProps extends React.LinkHTMLAttributes<HTMLLinkElement> { }

/**
 * Renders a <link> tag.
 * React 19 will hoist this to the <head>.
 */
export function Link(props: LinkProps) {
    return <link {...props} />;
}

/**
 * Common link tag presets for convenience.
 */
export const LinkPresets = {
    canonical: (href: string) => {
        if (process.env.NODE_ENV === 'development' && !href.startsWith('http')) {
            console.warn(`[react-meta] Canonical URL must be absolute(e.g., https://example.com/page). Got: ${href}`);
        }
        return <Link rel="canonical" href={href} />;
    },
    alternate: (href: string, hreflang: string) => <Link rel="alternate" href={href} hrefLang={hreflang} />,
    icon: (href: string, type?: string) => <Link rel="icon" href={href} type={type} />,
    stylesheet: (href: string) => <Link rel="stylesheet" href={href} />,
};
