# react-meta-seo Website

The official marketing and documentation website for `react-meta-seo`.
Built with [Next.js 16](https://nextjs.org), [Tailwind CSS v4](https://tailwindcss.com), and running via "dogfooding" (direct link to parent library).

## Getting Started

1. **Install Dependencies**:
```bash
npm install
```

2. **Run Development Server**:
```bash
npm run dev
```

3. **Build for Production**:
```bash
npm run build
```

## Architecture

- `src/app/page.tsx`: Landing page with feature showcase and interactive demo.
- `src/app/docs/page.tsx`: Documentation viewer that renders the root `DOCUMENTATION.md`.
- `src/lib/docs.ts`: Utility to read markdown from the parent directory.

## Dogfooding

This website installs the library via `npm install file:..`. It serves as a comprehensive integration test for:
- React Server Components (RSC) compatibility
- TypeScript types
- Build artifacts (`preview` vs `main` entry points)
