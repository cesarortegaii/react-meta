import type { Product, Article, Organization, WithContext } from 'schema-dts';

export const SchemaPresets = {
    /**
     * Product schema preset with required SEO fields enforced.
     * Google requires: name, image, offers (with price, priceCurrency, availability, url)
     */
    product: (
        props: Omit<Product, '@type' | '@context'> &
            Required<Pick<Product, 'image' | 'offers'>>
    ): WithContext<Product> => ({
        '@context': 'https://schema.org',
        '@type': 'Product',
        ...props,
    }),

    /**
     * Article schema preset with recommended SEO fields.
     * Google recommends: headline, image, datePublished, dateModified, author, publisher
     */
    article: (
        props: Omit<Article, '@type' | '@context'> &
            Required<Pick<Article, 'headline' | 'image' | 'datePublished' | 'author'>>
    ): WithContext<Article> => ({
        '@context': 'https://schema.org',
        '@type': 'Article',
        ...props,
    }),

    /**
     * Organization schema preset.
     */
    organization: (
        props: Omit<Organization, '@type' | '@context'>
    ): WithContext<Organization> => ({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        ...props,
    }),
};
