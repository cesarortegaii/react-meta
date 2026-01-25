import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'node', // React 19 SSR testing primarily
        globals: true,
    },
});
