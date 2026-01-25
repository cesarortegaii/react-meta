import { renderToStaticMarkup } from 'react-dom/server';
import { describe, it, expect } from 'vitest';
import { Title } from './Title';

describe('Title', () => {
    it('renders a title tag with content', () => {
        const html = renderToStaticMarkup(<Title>Hello SEO</Title>);
        expect(html).toBe('<title>Hello SEO</title>');
    });
});
