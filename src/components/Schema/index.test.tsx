import { renderToStaticMarkup } from 'react-dom/server';
import { describe, it, expect } from 'vitest';
import { Schema } from './index';

describe('Schema', () => {
    it('escapes script tags to prevent XSS', () => {
        const maliciousData = {
            '@context': 'https://schema.org' as const,
            '@type': 'Product' as const,
            name: '</script><script>alert("XSS")</script>',
        };

        const html = renderToStaticMarkup(<Schema data={maliciousData} />);

        // Should not contain literal </script> tag
        expect(html).not.toContain('</script><script>');
        // Should contain escaped version
        expect(html).toContain('\\u003c/script\\u003e');
    });

    it('renders valid JSON-LD', () => {
        const validData = {
            '@context': 'https://schema.org' as const,
            '@type': 'Product' as const,
            name: 'Safe Product Name',
        };

        const html = renderToStaticMarkup(<Schema data={validData} />);
        expect(html).toContain('application/ld+json');
        expect(html).toContain('Safe Product Name');
    });
});
