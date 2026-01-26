import type { Thing, WithContext } from 'schema-dts';

export interface SchemaProps<T extends Thing> {
    data: WithContext<T>;
}

/**
 * React 19 will hoist this to the <head> (or body, but head is preferred for SEO).
 */
import { logger } from '../../utils/logger';

// Helper to validate schema data in development
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function validateSchema(anyData: any) {
    // Validate @context
    if (!anyData['@context']) {
        logger.error(
            'Schema missing "@context". Add "@context": "https://schema.org" to your schema data.'
        );
    }

    // Support @graph for multiple entities
    const schemaType = anyData['@type'] || anyData['@graph']?.[0]?.['@type'];

    // Product validation
    if (schemaType === 'Product') {
        if (!anyData.offers && !anyData.aggregateRating) {
            logger.warn(
                '<Schema.Product> is missing "offers" or "aggregateRating". Google may not show rich snippets. See: https://developers.google.com/search/docs/appearance/structured-data/product'
            );
        }
        if (!anyData.image) {
            logger.warn(
                '<Schema.Product> is missing "image". This is recommended for rich results.'
            );
        }
    }

    // Article validation
    if (schemaType === 'Article') {
        if (!anyData.headline) {
            logger.warn('<Schema.Article> is missing required "headline" field.');
        }
        if (!anyData.image) {
            logger.warn('<Schema.Article> is missing required "image" field.');
        }
        if (!anyData.datePublished) {
            logger.warn('<Schema.Article> is missing required "datePublished" field.');
        }
        if (!anyData.author) {
            logger.warn('<Schema.Article> is missing required "author" field.');
        }
    }

    // Review validation
    if (schemaType === 'Review') {
        if (!anyData.itemReviewed) {
            logger.warn('<Schema.Review> is missing required "itemReviewed" field.');
        }
        if (!anyData.reviewRating) {
            logger.warn('<Schema.Review> is missing required "reviewRating" field.');
        }
        if (!anyData.author) {
            logger.warn('<Schema.Review> is missing required "author" field.');
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
            logger.error('Failed to serialize Schema data:', e);
        }
        return null; // Fail gracefully instead of crashing the page
    }
}
