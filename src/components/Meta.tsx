
export type MetaProps =
    | ({ name: string; content: string } & { [key: string]: string | undefined })
    | ({ property: string; content: string } & { [key: string]: string | undefined })
    | ({ httpEquiv: string; content: string } & { [key: string]: string | undefined })
    | ({ charset: string } & { [key: string]: string | undefined })
    | ({ itemProp: string; content: string } & { [key: string]: string | undefined });

// Track rendered meta tags in development to detect duplicates (REMOVED: SSR Safe)
// React 19 automatically handles deduping of most meta tags if keys match.

/**
 * Renders a <meta> tag.
 * React 19 will hoist this to the <head>.
 */
export function Meta(props: MetaProps) {
    // Basic warnings in development only (stateless)
    if (process.env.NODE_ENV === 'development') {
        if ('name' in props && !props.name) {
            console.warn('[react-meta-seo] Meta tag missing "name".');
        }
    }

    // Handle discriminated union properly instead of unsafe casting
    if ('charset' in props) {
        return <meta charSet={props.charset} />;
    }
    if ('httpEquiv' in props) {
        return <meta httpEquiv={props.httpEquiv} content={props.content} />;
    }
    if ('name' in props) {
        return <meta name={props.name} content={props.content} />;
    }
    if ('property' in props) {
        return <meta property={props.property} content={props.content} />;
    }
    if ('itemProp' in props) {
        return <meta itemProp={props.itemProp} content={props.content} />;
    }

    // Fallback - throw in development for faster debugging
    if (process.env.NODE_ENV === 'development') {
        throw new Error(`[react-meta-seo] Invalid Meta props: ${JSON.stringify(props)}`);
    }
    return null;
}

/**
 * Common meta tag presets for convenience.
 */
export const MetaPresets = {
    description: (content: string) => <Meta name="description" content={content} />,
    viewport: (content = "width=device-width, initial-scale=1") => <Meta name="viewport" content={content} />,
    charset: (charset = "UTF-8") => <Meta charset={charset} />,
    robots: (content: string) => <Meta name="robots" content={content} />,
};
