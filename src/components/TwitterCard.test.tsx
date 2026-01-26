
import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { TwitterCard } from './TwitterCard';

describe('TwitterCard', () => {
    afterEach(() => {
        cleanup();
        document.head.innerHTML = '';
    });

    it('renders summary card with all props', () => {
        render(
            <TwitterCard
                card="summary"
                site="@site"
                creator="@creator"
                title="Title"
                description="Desc"
                image="img.jpg"
            />
        );

        expect(document.head.querySelector('meta[name="twitter:card"]')?.getAttribute('content')).toBe("summary");
        expect(document.head.querySelector('meta[name="twitter:site"]')?.getAttribute('content')).toBe("@site");
        expect(document.head.querySelector('meta[name="twitter:creator"]')?.getAttribute('content')).toBe("@creator");
        expect(document.head.querySelector('meta[name="twitter:title"]')?.getAttribute('content')).toBe("Title");
        expect(document.head.querySelector('meta[name="twitter:description"]')?.getAttribute('content')).toBe("Desc");
        expect(document.head.querySelector('meta[name="twitter:image"]')?.getAttribute('content')).toBe("img.jpg");
    });
});
