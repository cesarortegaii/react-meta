# I got tired of React Helmet being slow, so I built react-meta for React 19.

Hey r/reactjs,

Like many of you, I've been experimenting with React 19 and Server Components. One thing that kept bugging me was how legacy SEO libraries (like React Helmet) handle metadata. They rely on `react-side-effect`, which often causes hydration mismatches, doesn't play nice with streaming, and adds unnecessary weight to the bundle.

React 19 has native support for hoisting `<title>`, `<meta>`, and `<link>` tags to the `<head>`, but the API is raw.

So I built **react-meta**.

## Why it's different:
1.  **Native Performance**: It uses React 19's native hoisting primitives. 0ms hydration overhead.
2.  **RSC Compatible**: Works fully inside "use server" components.
3.  **Tiny**: < 5kB minified.
4.  **Developer Experience**:
    *   Built-in **Social Preview Overlay** (shows you how your OG tags look on Google/Twitter while you dev).
    *   **CLI Sitemaps**: `npx react-meta sitemap` to auto-generate your sitemap.
    *   **Schema Validation**: Warns you if your JSON-LD is missing google-required fields.

## Benchmarks (Hydration Cost)
*   **React Helmet**: ~15ms (blocking)
*   **react-meta**: 0ms (native)

Repo: [link to your repo]
NPM: `npm install react-meta`

I'd love to hear your thoughts!
