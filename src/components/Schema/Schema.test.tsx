
import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { Schema, SchemaPresets } from './index';

describe('Schema', () => {
    afterEach(() => {
        cleanup();
        document.head.innerHTML = '';
    });

    it('renders JSON-LD script', () => {
        const data = {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Test Org'
        } as const; // Use as const or explicit WithContext<Organization>

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore - Simplified test data
        render(<Schema data={data} />);
        const script = document.querySelector('script[type="application/ld+json"]');
        expect(script).toBeDefined();
        expect(JSON.parse(script?.textContent || '{}')).toEqual(data);
    });

    it('SchemaPresets.organization returns correct data', () => {
        // We test that the component accepts the preset output
        const preset = SchemaPresets.organization({
            name: 'Preset Org',
            url: 'https://example.com'
        });

        render(<Schema data={preset} />);
        const script = document.querySelector('script[type="application/ld+json"]');
        const content = JSON.parse(script?.textContent || '{}');
        expect(content['@type']).toBe('Organization');
        expect(content.name).toBe('Preset Org');
    });

    it('validates Product schema in development', () => {
        const originalEnv = process.env.NODE_ENV;
        process.env.NODE_ENV = 'development';

        const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => { });
        render(<Schema data={{ '@context': 'https://schema.org', '@type': 'Product', name: 'Test' } as any} />);
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('missing "offers"'));
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('missing "image"'));

        process.env.NODE_ENV = originalEnv;
    });

    it('validates Article schema in development', () => {
        const originalEnv = process.env.NODE_ENV;
        process.env.NODE_ENV = 'development';

        const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => { });
        render(<Schema data={{ '@context': 'https://schema.org', '@type': 'Article' } as any} />);
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('headline'));
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('image'));

        process.env.NODE_ENV = originalEnv;
    });

    it('validates Review schema in development', () => {
        const originalEnv = process.env.NODE_ENV;
        process.env.NODE_ENV = 'development';

        const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => { });
        render(<Schema data={{ '@context': 'https://schema.org', '@type': 'Review' } as any} />);
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('itemReviewed'));

        process.env.NODE_ENV = originalEnv;
    });

    it('handles JSON serialization errors gracefully', () => {
        const circular: any = { '@context': 'https://schema.org', '@type': 'Thing' };
        circular.myself = circular;

        const onError = vi.fn();
        const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => { });

        const originalEnv = process.env.NODE_ENV;
        process.env.NODE_ENV = 'development';

        render(<Schema data={circular} onError={onError} />);

        expect(onError).toHaveBeenCalled();
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Failed to serialize'), expect.any(Error));

        process.env.NODE_ENV = originalEnv;
    });
});
