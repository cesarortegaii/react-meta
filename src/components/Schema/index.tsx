import type { Thing, WithContext } from 'schema-dts';

export interface SchemaProps<T extends Thing> {
    data: WithContext<T>;
}

/**
 * React 19 will hoist this to the <head> (or body, but head is preferred for SEO).
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function validateSchema(anyData: any) {
    // Validate @context
    if (!anyData['@context']) {
        console.error(
            '[react-meta-seo] Schema missing "@context". Add "@context": "https://schema.org" to your schema data.'
        );
    }

    // Support @graph for multiple entities
    const schemaType = anyData['@type'] || anyData['@graph']?.[0]?.['@type'];

    // Product validation
    if (schemaType === 'Product') {
        if (!anyData.offers && !anyData.aggregateRating) {
            console.warn(
                '[react-meta-seo] <Schema.Product> is missing "offers" or "aggregateRating". Google may not show rich snippets. See: https://developers.google.com/search/docs/appearance/structured-data/product'
            );
        }
        if (!anyData.image) {
            console.warn(
                '[react-meta-seo] <Schema.Product> is missing "image". This is recommended for rich results.'
            );
        }
    }

    // Article validation
    if (schemaType === 'Article') {
        if (!anyData.headline) {
            console.warn('[react-meta-seo] <Schema.Article> is missing required "headline" field.');
        }
        if (!anyData.image) {
            console.warn('[react-meta-seo] <Schema.Article> is missing required "image" field.');
        }
        if (!anyData.datePublished) {
            console.warn('[react-meta-seo] <Schema.Article> is missing required "datePublished" field.');
        }
        if (!anyData.author) {
            console.warn('[react-meta-seo] <Schema.Article> is missing required "author" field.');
        }
    }

    // Review validation
    if (schemaType === 'Review') {
        if (!anyData.itemReviewed) {
            console.warn('[react-meta-seo] <Schema.Review> is missing required "itemReviewed" field.');
        }
        if (!anyData.reviewRating) {
            console.warn('[react-meta-seo] <Schema.Review> is missing required "reviewRating" field.');
        }
        if (!anyData.author) {
            console.warn('[react-meta-seo] <Schema.Review> is missing required "author" field.');
        }
    }
}
export function Schema<T extends Thing>({ data }: SchemaProps<T>) {
    if (process.env.NODE_ENV === 'development') {
        validateSchema(data);
    }

    try {
        const jsonLd = JSON.stringify(data)
            .replace(/&/g, '\\u0026')  // Defense-in-depth: escape ampersands
            .replace(/</g, '\\u003c')
            .replace(/>/g, '\\u003e');

        return (
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: jsonLd
                }}
            />
        );
    } catch (e) {
        if (process.env.NODE_ENV === 'development') {
            console.error('[react-meta-seo] Failed to serialize Schema data:', e);
        }
        return null; // Fail gracefully instead of crashing the page
    }
}
