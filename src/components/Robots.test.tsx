import { renderToStaticMarkup } from 'react-dom/server';
import { describe, it, expect, vi } from 'vitest';
import { Robots } from './Robots';

describe('Robots', () => {
    it('renders standard index, follow by default (minimal output)', () => {
        const html = renderToStaticMarkup(<Robots />);
        // Should be empty since index=true and follow=true are defaults
        expect(html).toBe('<meta name="robots" content=""/>');
    });

    it('renders noindex, nofollow', () => {
        const html = renderToStaticMarkup(<Robots index={false} follow={false} />);
        expect(html).toContain('content="noindex, nofollow"');
    });

    it('renders complex directives', () => {
        const html = renderToStaticMarkup(
            <Robots maxSnippet={20} maxImagePreview="large" />
        );
        expect(html).toContain('max-snippet:20');
        expect(html).toContain('max-image-preview:large');
    });

    it('warns on invalid maxSnippet values', () => {
        const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => { });

        renderToStaticMarkup(<Robots maxSnippet={500} />);
        expect(warnSpy).toHaveBeenCalledWith(
            expect.stringContaining('maxSnippet=500 is invalid')
        );

        warnSpy.mockRestore();
    });

    it('supports bot-specific directives', () => {
        const html = renderToStaticMarkup(<Robots botName="googlebot" index={false} />);
        expect(html).toContain('name="googlebot"');
        expect(html).toContain('noindex');
    });
});
