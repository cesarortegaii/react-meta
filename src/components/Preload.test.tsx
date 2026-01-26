import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { Preload } from './Preload';

describe('Preload Component', () => {
    afterEach(() => {
        cleanup();
        document.head.innerHTML = '';
    });

    it('renders preload link', () => {
        render(<Preload href="/font.woff2" as="font" type="font/woff2" />);
        const link = document.head.querySelector('link[rel="preload"]');
        expect(link?.getAttribute('href')).toBe('/font.woff2');
        expect(link?.getAttribute('as')).toBe('font');
        // Should auto-add crossorigin for fonts
        expect(link?.getAttribute('crossorigin')).toBe('anonymous');
    });

    it('renders preload link with high priority', () => {
        render(<Preload href="/hero.jpg" as="image" fetchPriority="high" />);
        const link = document.head.querySelector('link[rel="preload"]');
        expect(link?.getAttribute('href')).toBe('/hero.jpg');
        expect(link?.getAttribute('fetchpriority')).toBe('high');
    });
});
