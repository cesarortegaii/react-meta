import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'happy-dom', // Browser-like environment for DOM tests
        globals: true,
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
            include: ['src/**/*.ts', 'src/**/*.tsx'],
            exclude: ['src/cli/**/*.ts', 'src/**/*.d.ts', 'src/test-utils.tsx'],
        },
    },
});
