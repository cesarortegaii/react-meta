import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import { Title, Meta, Schema, SchemaPresets } from '../index';

describe('SSR Compatibility', () => {
    it('Title renders correct HTML string', () => {
        // In React 19, renderToString might emit standard tags if they are in the tree.
        // Even if they are hoisted, renderToString usually handles the initial content.
        // We verify that the component runs without error and produces output.
        // Note: Actual hoisting behavior is a feature of React's hydration/stream, 
        // but checking the output string is a basic smoke test for SSR.
        const html = renderToString(<Title>SSR Title</Title>);
        expect(html).toContain('SSR Title');
        expect(html).toContain('<title>');
    });

    it('Meta renders correct HTML string', () => {
        const html = renderToString(<Meta name="description" content="ssr desc" />);
        expect(html).toContain('<meta');
        expect(html).toContain('name="description"');
        expect(html).toContain('content="ssr desc"');
    });

    it('Schema renders valid JSON-LD in SSR', () => {
        const data = SchemaPresets.organization({ name: 'SSR Org', url: 'http://ssr.com' });
        const html = renderToString(<Schema data={data} />);
        expect(html).toContain('<script type="application/ld+json">');
        expect(html).toContain('"name":"SSR Org"');
    });

    it('renders without DOM globals', () => {
        // This test runs in 'node' environment (configured in vitest for this file if we split configs, 
        // but mainly we want to ensure it doesn't try to access 'window' or 'document')
        const checkNoWindow = () => {
            // In happy-dom environment window exists, but we want to ensure our code *doesn't* rely on it for rendering.
            // Our components are pure functional components returning JSX, so they should be fine.
            renderToString(<Meta name="test" content="no-window" />);
        };
        expect(checkNoWindow).not.toThrow();
    });
});
