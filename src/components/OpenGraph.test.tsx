
import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { OpenGraph, TwitterCard } from './OpenGraph';

describe('OpenGraph & TwitterCard Coverage', () => {
    afterEach(() => {
        cleanup();
        document.head.innerHTML = '';
        vi.restoreAllMocks();
        process.env.NODE_ENV = 'test';
    });

    const setDevEnv = () => {
        process.env.NODE_ENV = 'development';
    };

    it('OpenGraph renders custom props', () => {
        render(
            <OpenGraph
                title="T" type="type" image="img" url="url"
                customProp="customValue"
            />
        );
        expect(document.head.querySelector('meta[property="og:customProp"]')?.getAttribute('content')).toBe('customValue');
    });

    it('OpenGraph warns on non-absolute image URL in dev', () => {
        setDevEnv();
        const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => { });
        render(
            <OpenGraph title="T" type="type" image="/relative.jpg" url="https://site.com" />
        );
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('og:image must be an absolute URL'));
    });

    // TwitterCard coverage (Lines 60-82 of OpenGraph.tsx)
    it('TwitterCard renders basic props', () => {
        render(
            <TwitterCard
                card="summary"
                title="TCard"
                description="Desc"
            />
        );
        expect(document.head.querySelector('meta[name="twitter:card"]')?.getAttribute('content')).toBe('summary');
        expect(document.head.querySelector('meta[name="twitter:title"]')?.getAttribute('content')).toBe('TCard');
        expect(document.head.querySelector('meta[name="twitter:description"]')?.getAttribute('content')).toBe('Desc');
    });

    it('TwitterCard renders custom props', () => {
        render(<TwitterCard card="summary" myCustom="val" />);
        expect(document.head.querySelector('meta[name="twitter:myCustom"]')?.getAttribute('content')).toBe('val');
    });

    it('TwitterCard warns on non-absolute image URL in dev', () => {
        setDevEnv();
        const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => { });
        render(<TwitterCard card="summary" image="/local.jpg" />);
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('twitter:image must be an absolute URL'));
    });

    // Ensure we are testing the file where TwitterCard is defined (OpenGraph.tsx)
});
