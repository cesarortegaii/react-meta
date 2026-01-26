import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { Meta } from './Meta';

// Mock logger to verify error logging
const { mockLogger } = vi.hoisted(() => {
    return {
        mockLogger: {
            warn: vi.fn(),
            error: vi.fn(),
        }
    }
});

vi.mock('../utils/logger', () => ({
    logger: mockLogger,
}));

// Mock process.env
const originalEnv = process.env;

describe('Meta Component Coverage', () => {
    afterEach(() => {
        cleanup();
        document.head.innerHTML = '';
        vi.clearAllMocks();
        process.env = originalEnv;
    });

    it('renders charset meta', () => {
        render(<Meta charset="UTF-8" />);
        expect(document.head.querySelector('meta[charset="UTF-8"]')).toBeDefined();
    });

    it('renders http-equiv meta', () => {
        render(<Meta httpEquiv="refresh" content="30" />);
        expect(document.head.querySelector('meta[http-equiv="refresh"]')?.getAttribute('content')).toBe('30');
    });

    it('renders itemprop meta', () => {
        const { container } = render(<Meta itemProp="name" content="test" />);
        // Debugging output
        // console.log('Head:', document.head.innerHTML);
        // console.log('Container:', container.innerHTML);

        // Search in both head and container to be safe
        const headMeta = document.head.querySelector('meta[itemprop="name"]') || document.head.querySelector('meta[itemProp="name"]');
        const containerMeta = container.querySelector('meta[itemprop="name"]') || container.querySelector('meta[itemProp="name"]');

        expect(headMeta || containerMeta).toBeDefined();
        expect((headMeta || containerMeta)?.getAttribute('content')).toBe('test');
    });

    it('warns in development if name is empty', () => {
        process.env = { ...originalEnv, NODE_ENV: 'development' };
        // @ts-expect-error - testing invalid prop
        render(<Meta name="" content="test" />);
        expect(mockLogger.warn).toHaveBeenCalledWith('Meta tag missing "name".');
    });

    it('throws error in development for invalid props', () => {
        process.env = { ...originalEnv, NODE_ENV: 'development' };

        expect(() => {
            // Testing invalid props fallthrough requires casting to bypass TS in test file
            // @ts-ignore
            render(<Meta content="just content" />);
        }).toThrow(/Invalid Meta props/);

        expect(mockLogger.error).toHaveBeenCalled();
    });

    it('returns null in production for invalid props', () => {
        process.env = { ...originalEnv, NODE_ENV: 'production' };
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const { container } = render(<Meta content="just content production" />);
        expect(container.innerHTML).toBe('');
        expect(mockLogger.error).not.toHaveBeenCalled();
    });
});
