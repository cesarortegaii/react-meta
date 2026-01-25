import { defineConfig } from 'tsup';

export default defineConfig([
    {
        // Library bundle - optimized for browser
        entry: ['src/index.ts'],
        format: ['cjs', 'esm'],
        dts: true,
        splitting: false,
        sourcemap: true,
        clean: true,
        minify: true,
        treeshake: true,
        platform: 'browser', // Changed from 'neutral' for optimal tree-shaking
        target: 'es2020',    // Modern browsers only (React 19 requirement)
        external: ['react', 'react-dom'],
    },
    {
        // CLI bundle - CJS only for maximum compatibility
        entry: ['src/cli/sitemap.ts'],
        format: ['cjs'], // CJS only - more reliable for CLI tools
        dts: false,      // CLI doesn't need type definitions
        splitting: false,
        sourcemap: true,
        minify: false,   // Keep readable for debugging
        treeshake: true,
        platform: 'node',
        target: 'node18', // Match engines requirement

    },
]);
