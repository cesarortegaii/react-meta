import type { Thing, WithContext } from 'schema-dts';

export interface SchemaProps<T extends Thing> {
    data: WithContext<T>;
}

/**
 * Renders a JSON-LD script tag.
 * React 19 will hoist this to the <head> (or body, but head is preferred for SEO).
 */
export function Schema<T extends Thing>({ data }: SchemaProps<T>) {
    if (process.env.NODE_ENV === 'development') {
        // Basic validation logic
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const anyData = data as any;

        // Validate @context
        if (!anyData['@context']) {
            console.error(
                '[react-meta] Schema missing "@context". Add "@context": "https://schema.org" to your schema data.'
            );
        }

        // Support @graph for multiple entities
        const schemaType = anyData['@type'] || anyData['@graph']?.[0]?.['@type'];

        // Product validation
        if (schemaType === 'Product') {
            if (!anyData.offers && !anyData.aggregateRating) {
                console.warn(
                    '[react-meta] <Schema.Product> is missing "offers" or "aggregateRating". Google may not show rich snippets. See: https://developers.google.com/search/docs/appearance/structured-data/product'
                );
            }
            if (!anyData.image) {
                console.warn(
                    '[react-meta] <Schema.Product> is missing "image". This is recommended for rich results.'
                );
            }
        }

        // Article validation
        if (schemaType === 'Article') {
            if (!anyData.headline) {
                console.warn('[react-meta] <Schema.Article> is missing required "headline" field.');
            }
            if (!anyData.image) {
                console.warn('[react-meta] <Schema.Article> is missing required "image" field.');
            }
            if (!anyData.datePublished) {
                console.warn('[react-meta] <Schema.Article> is missing required "datePublished" field.');
            }
            if (!anyData.author) {
                console.warn('[react-meta] <Schema.Article> is missing required "author" field.');
            }
        }

        // Review validation
        if (schemaType === 'Review') {
            if (!anyData.itemReviewed) {
                console.warn('[react-meta] <Schema.Review> is missing required "itemReviewed" field.');
            }
            if (!anyData.reviewRating) {
                console.warn('[react-meta] <Schema.Review> is missing required "reviewRating" field.');
            }
            if (!anyData.author) {
                console.warn('[react-meta] <Schema.Review> is missing required "author" field.');
            }
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(data)
                    .replace(/&/g, '\\u0026')  // Defense-in-depth: escape ampersands
                    .replace(/</g, '\\u003c')
                    .replace(/>/g, '\\u003e')
            }}
        />
    );
}
