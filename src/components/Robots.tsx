import { Meta } from './Meta';

export interface RobotsProps {
    index?: boolean;
    follow?: boolean;
    noarchive?: boolean;
    nosnippet?: boolean;
    noimageindex?: boolean;
    maxSnippet?: number;
    maxImagePreview?: 'none' | 'standard' | 'large';
    maxVideoPreview?: number;
    botName?: 'robots' | 'googlebot' | 'googlebot-news' | 'googlebot-image';
}

/**
 * Renders a <meta name="robots"> (or bot-specific) tag with constructed content.
 * Only emits non-default directives for optimal performance.
 */
export function Robots({
    index = true,
    follow = true,
    noarchive,
    nosnippet,
    noimageindex,
    maxSnippet,
    maxImagePreview,
    maxVideoPreview,
    botName = 'robots',
}: RobotsProps) {
    const directives: string[] = [];

    // Only emit non-default directives
    if (!index) directives.push('noindex');
    if (!follow) directives.push('nofollow');

    if (noarchive) directives.push('noarchive');
    if (nosnippet) directives.push('nosnippet');
    if (noimageindex) directives.push('noimageindex');

    // Validate and add maxSnippet
    if (maxSnippet !== undefined) {
        if (maxSnippet < -1 || maxSnippet > 320) {
            console.warn(
                `[react-meta] maxSnippet=${maxSnippet} is invalid. Use -1 (no limit) or 0-320.`
            );
        }
        directives.push(`max-snippet:${maxSnippet}`);
    }

    if (maxImagePreview) directives.push(`max-image-preview:${maxImagePreview}`);
    if (maxVideoPreview !== undefined) directives.push(`max-video-preview:${maxVideoPreview}`);

    return <Meta name={botName} content={directives.join(', ')} />;
}
