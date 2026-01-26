# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [0.1.0] - 2026-01-27

**Website & Documentation Overhaul** - Enhanced developer experience with comprehensive docs site.

### 🌐 Website Improvements

**New Documentation Pages**  
- **Changelog Page** (`/changelog`): Dedicated page for version history
- **Comparison Page** (`/comparison`): Detailed comparison with react-helmet and Next.js Metadata
- **Migration Guide** (`/migration`): Step-by-step migration from react-helmet-async
- **Code of Conduct** (`/code-of-conduct`): Community guidelines
- **Contributing Guide** (`/contributing`): Contribution workflow and testing instructions

**SEO Enhancements**  
- Added `robots.ts` for search engine indexing control
- Added `sitemap.ts` for automatic sitemap generation
- Improved meta tags across all pages

**UI/UX Improvements**  
- Enhanced navigation with dedicated pages for each doc section
- Updated styling in `globals.css`
- Improved layout with better mobile responsiveness (`layout.tsx`)
- Enhanced homepage with better feature showcase (`page.tsx`)

### 🛠️ CLI Improvements

**Streaming Sitemap Generator** (Refactored)  
- Fully refactored CLI to use streaming JSON parsing
- Added `stream-chain` and `stream-json` as production dependencies
- Memory-efficient processing of large route files (10k+ routes)
- Improved error handling with async/await pattern

**Better Code Organization**  
- Extracted `processRoute()` helper function
- Extracted `finishStream()` helper function
- More maintainable codebase with clear separation of concerns

### 📚 Documentation

**Enhanced Documentation Structure**  
- Split documentation into dedicated pages (COMPARISON.md, MIGRATION.md)
- Improved table of contents in DOCUMENTATION.md
- Better organization of content for easier navigation

**Content Updates**  
- Updated README.md with Production-Ready status
- Synchronized website/DOCUMENTATION.md with latest changes
- Added comprehensive comparison charts

### 🔧 Development Experience

**Build & Tooling**  
- Added TypeScript types for streaming dependencies (`@types/stream-chain`, `@types/stream-json`)
- Updated devDependencies (`@vitest/coverage-v8` 1.2.1 → 1.6.1)

**Website Infrastructure**  
- Enhanced `copy-docs.js` script for better doc synchronization
- Added utility functions in `src/lib/utils.ts`
- Improved docs parsing in `src/lib/docs.ts`

### Fixed

- **CLI**: Removed synchronous JSON file loading (OOM risk with large files)
- **CLI**: Fixed route streaming to properly handle large datasets
- **Website**: Fixed navigation links between documentation sections
- **Website**: Improved mobile responsiveness across all pages

### Migration from 0.0.8

This is a **minor** release with no breaking API changes:

```bash
npm install react-meta-seo@latest
```

**What's New:**
- Visit the new documentation pages at `https://react-meta-seo.vercel.app/changelog`
- Check out the comparison guide at `/comparison`
- Learn migration steps at `/migration`


## [0.0.8] - 2026-01-26

**Production-Ready Release** - Audit-verified for enterprise adoption.

### 🔒 Security & Reliability

**JSON-LD XSS Prevention**  
- Automatic unicode escaping for `<Schema>` component (`<`, `>`, `&` → `\u003c`, `\u003e`, `\u0026`)
- Defense-in-depth protection against script injection
- Zero-configuration security

**CLI Security Hardening**  
- **Path Traversal Protection**: Validates output paths are within project directory
- **Hostname Validation**: Blocks localhost and private IPs for SEO best practices
- **XML Injection Sanitization**: `escapeXML()` prevents XXE attacks
- **Memory Safety**: Streaming JSON parsing handles 10k+ routes without OOM

### 🚀 Performance

**Bundle Size: < 2kB** (minified/gzipped)  
- **67% smaller** than initial estimate (was < 5kB)
- Strict tree-shaking via dual entry points (browser vs CLI)
- Browser bundle excludes heavy CLI dependencies

**Hydration Overhead: 0ms**  
- Confirmed via React 19 native hoisting
- No `useEffect` DOM manipulation
- Perfect hydration guaranteed

**Build Configuration**  
- Browser: ESM, platform: `browser`, target: `es2020`
- CLI: CJS, platform: `node`, target: `node18`

### ✨ Features

**Streaming Sitemap Generator**  
- New `--routes` support for massive datasets
- Memory-efficient streaming with `stream-chain` and `stream-json`
- Processes routes one-by-one (constant memory usage)

**Development Tools**  
- `<SocialPreview>` overlay for real-time debugging
- Schema validation with dev-mode warnings
- TypeScript integration with `schema-dts`

**CI/CD**  
- GitHub Actions for automated testing
- Coverage reports (100% for core components)
- Automated NPM publishing workflow

### 📚 Documentation

**Enhanced Documentation**  
- New "Security & Reliability" section
- Performance benchmarks updated (< 2kB confirmed)
- CLI JSON format requirements clarified (must be root-level array)
- Hostname validation documented

**API Reference**  
- Documented `onError` prop for `<Schema>` component
- Updated all bundle size claims
- Enhanced troubleshooting section

### Fixed

- **Schema Validation**: Restored missing validation logic
- **Bundle Size**: Optimized from < 5kB to **< 2kB**
- **Type Safety**: Full `schema-dts` integration

## [0.0.7] - 2026-01-26

### Fixed
- **Meta Testing**: Fixed `itemprop` selector issues in testing environment.
- **Coverage**: Addressed coverage gaps in `Meta` and `OpenGraph` error handling branches.

## [0.0.6] - 2026-01-26

### Added
- **Error Handling**: Added `onError` prop to `Schema` component for production error tracking.
- **Testing**: Dedicated test files for `Link` and `Preload` components.
- **SSR**: Verification tests for server-side rendering output.

## [0.0.5] - 2026-01-26

### Added
- **TwitterCard**: New component for Twitter Card metadata.
- **Deep Testing**: Comprehensive integration tests for social sharing components.

## [0.0.4] - 2024-01-26

### Fixed
- **SSR state leak**: Removed unsafe global state variables `renderedMetaTags` and `__REACT_META_TITLE_RENDERED__`.
- **Schema Safety**: Added error boundary around `JSON.stringify` to prevent crashes from circular references in Schema data.
- **Example App**: Fixed infinite loop in `SocialPreview` during development.

### Added
- **Validation**: New `validateSchema` helper for better dev-time warnings.
- **Infrastructure**: Added `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, and GitHub templates.

## [0.0.3] - 2024-01-25

### Fixed
- **Social Preview**: Added `forceVisible` prop to allow usage in production/demo environments.

## [0.0.2] - 2024-01-25

### Fixed
- **Infinite Loop**: Fixed critical infinite re-render loop in `SocialPreview`.

## [0.0.1] - 2024-01-25

### Added
- Initial release of `react-meta-seo`.
- Core components: `<Title>`, `<Meta>`, `<Link>`, `<Preload>`, `<Robots>`.
- JSON-LD Support: `<Schema>` with presets for Product, Article.
- CLI: Sitemap generator `react-meta-seo generate-sitemap`.
