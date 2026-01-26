# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [0.0.8] - 2026-01-26

### Added
- **CI/CD**: GitHub Actions workflows for automated testing (`test.yml`) and publishing (`publish.yml`).
- **Coverage**: Achieved 100% test coverage for `Schema`, `Meta`, and `OpenGraph` components.

### Fixed
- **Schema Validation**: Restored missing validation logic for `Schema` component.

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
