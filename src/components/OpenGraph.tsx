import { Meta } from './Meta';

export interface OpenGraphProps {
    // Required per Open Graph protocol
    title: string;
    type: string;
    image: string;
    url: string;
    // Optional
    description?: string;
    siteName?: string;
    locale?: string;
    [key: string]: string | undefined;
}

/**
 * Helper component for Open Graph meta tags.
 * Enforces required OG protocol fields: title, type, image, url.
 */
export function OpenGraph({ title, type, image, url, description, siteName, locale, ...rest }: OpenGraphProps) {
    // Validate og:image is absolute URL
    if (process.env.NODE_ENV === 'development' && image && !image.startsWith('http')) {
        console.warn(`[react-meta-seo] og:image must be an absolute URL (e.g., https://example.com/image.jpg). Got: ${image}`);
    }

    const ogTags = [
        { key: 'title', value: title },
        { key: 'type', value: type },
        { key: 'image', value: image },
        { key: 'url', value: url },
        { key: 'description', value: description },
        { key: 'site_name', value: siteName },
        { key: 'locale', value: locale },
        ...Object.entries(rest).map(([k, v]) => ({ key: k, value: v }))
    ].filter(({ value }) => value !== undefined);

    return (
        <>
            {ogTags.map(({ key, value }, index) => (
                <Meta key={`og:${key}-${index}`} property={`og:${key}`} content={value!} />
            ))}
        </>
    );
}

export interface TwitterCardProps {
    card: 'summary' | 'summary_large_image' | 'app' | 'player';
    site?: string;
    creator?: string;
    title?: string;
    description?: string;
    image?: string;
    [key: string]: string | undefined;
}

/**
 * Helper component for Twitter Card meta tags.
 */
export function TwitterCard({ card, site, creator, title, description, image, ...rest }: TwitterCardProps) {
    // Validate twitter:image is absolute URL
    if (process.env.NODE_ENV === 'development' && image && !image.startsWith('http')) {
        console.warn(`[react-meta-seo] twitter:image must be an absolute URL (e.g., https://example.com/image.jpg). Got: ${image}`);
    }

    const twitterTags = [
        { key: 'card', value: card },
        { key: 'site', value: site },
        { key: 'creator', value: creator },
        { key: 'title', value: title },
        { key: 'description', value: description },
        { key: 'image', value: image },
        ...Object.entries(rest).map(([k, v]) => ({ key: k, value: v }))
    ].filter(({ value }) => value !== undefined);

    return (
        <>
            {twitterTags.map(({ key, value }, index) => (
                <Meta key={`twitter:${key}-${index}`} name={`twitter:${key}`} content={value!} />
            ))}
        </>
    );
}
