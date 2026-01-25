# Contributing to react-meta-seo

Thank you for your interest in contributing! This library aims to be the standard for React 19 SEO.

## Development Setup

1. **Fork and Clone** the repository.
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Run Build in Watch Mode**:
   ```bash
   npm run dev
   ```
4. **Run Example App** (in a separate terminal):
   ```bash
   cd example
   npm install
   npm run dev
   ```

## Workflow

1. Create a new branch: `git checkout -b feature/my-new-feature`
2. Make your changes in `src/`.
3. Verify changes in the `example` app (localhost:5173).
4. Run tests: `npm test`
5. Commit your changes:
   ```bash
   git commit -m "feat: add new meta tag support"
   ```
   (We follow [Conventional Commits](https://www.conventionalcommits.org/))

## Pull Requests

- Keep PRs focused on a single feature or fix.
- Add tests for new features.
- Update documentation in `DOCUMENTATION.md` if public API changes.

## License

By contributing, you agree that your contributions will be licensed under its MIT License.
