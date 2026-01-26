import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { Link, LinkPresets } from './Link';

describe('Link Component', () => {
    afterEach(() => {
        cleanup();
        document.head.innerHTML = '';
    });

    it('renders a link tag to head', () => {
        render(<Link rel="canonical" href="https://example.com" />);
        const link = document.head.querySelector('link[rel="canonical"]');
        expect(link).toBeDefined();
        expect(link?.getAttribute('href')).toBe('https://example.com');
    });

    it('LinkPresets.canonical returns correct element', () => {
        render(<>{LinkPresets.canonical('https://example.com')}</>);
        const link = document.head.querySelector('link[rel="canonical"]');
        expect(link?.getAttribute('href')).toBe('https://example.com');
    });
});
