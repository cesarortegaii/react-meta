# react-meta-seo ⚛️🔍

**The definitive SEO library for React 19.**

[![npm version](https://img.shields.io/npm/v/react-meta-seo.svg)](https://www.npmjs.com/package/react-meta-seo)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/react-meta-seo)](https://bundlephobia.com/package/react-meta-seo)

> **Status**: Production-Ready for React 19+ | [📚 Full Documentation](https://react-meta-seo.vercel.app)

`react-meta-seo` is a lightweight (**< 2kB** minified/gzipped), type-safe SEO library built exclusively for React 19. It leverages React's native metadata hoisting primitive, removing the need for `react-side-effect` or heavy context providers.

## Features 🚀

- **React 19 Native**: Uses built-in `<title>`, `<meta>`, and `<link>` hoisting. Zero hydration mismatches.
- **RSC Compatible**: Works in Server Components.
- **Preloading**: Smart resource preloading via `<Preload />`.
- **Dynamic Robots**: Control indexing with `<Robots index={false} />`.
- **CLI Power**: Auto-generate sitemaps via `npx react-meta-seo generate-sitemap`.
- **JSON-LD**: Typed Schema.org components with **Dev Validation**.
- **Social Preview**: Built-in development overlay.

## 🎯 Website

**[Visit the Website & Documentation →](https://react-meta-seo.vercel.app)**

Deploy the `example/` directory to see all features working live.

## Installation

```bash
npm install react-meta-seo schema-dts
```

> **Note**: `schema-dts` is a peer dependency that provides TypeScript types for Schema.org structured data. It's a type-only library and won't increase your runtime bundle size.

**Requirements:**
- React 19+ (uses native metadata hoisting)
- Node.js 18+ (for CLI features)

## Performance Benchmarks

| Library | Hydration Overhead | Bundle Size | Native Hoisting |
|---------|-------------------|-------------|-----------------|
| **react-meta-seo** | **0ms** ⚡ | **< 2kB** | ✅ |
| React Helmet | ~15ms | ~16kB | ❌ |
| React Helmet Async | ~12ms | ~14kB | ❌ |

*Benchmarked using React 19 RC with Chrome DevTools Performance profiling.*

## Usage
> **Read the [Full Documentation](DOCUMENTATION.md) for advanced usage, API reference, and migration guides.**

### 1. Basic Metadata & Preloading

```tsx
import { Title, Meta, Preload } from 'react-meta-seo';

export default function Page() {
  return (
    <>
      <Title>My Awesome Page</Title>
      <Meta name="description" content="This is the best page ever." />
      {/* Preload critical font */}
      <Preload href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
    </>
  );
}
```

### 2. Dynamic Robots Control

```tsx
import { Robots } from 'react-meta-seo';

export default function ProductPage({ product }) {
  // Automatically add noindex if out of stock
  return <Robots index={product.inStock} follow={true} />;
}
```

### 3. Structured Data (Validated)

If you miss a required field (like `image` for a Product), `react-meta-seo` will warn you in the console during development.

```tsx
import { Schema, SchemaPresets } from 'react-meta-seo';

export default function ProductPage() {
  return (
    <Schema 
      data={SchemaPresets.product({
        name: "Cool Shoes",
        offers: { "@type": "Offer", "price": "99.00", "priceCurrency": "USD" }
        // ⚠️ Warns if you forget 'image'!
      })} 
    />
  );
}
```

### 4. CLI: Sitemap Generation

Generate a standard sitemap for your build.

```bash
npx react-meta-seo generate-sitemap --hostname https://myapp.com --out public/sitemap.xml
```

**Advanced Usage with Dynamic Routes:**
```bash
npx react-meta-seo generate-sitemap --hostname https://myapp.com --routes ./routes.json
```

### 5. Social Preview Debugger

Add to your root component during development to see how your page looks on Google and Twitter.

```tsx
import { SocialPreview } from 'react-meta-seo';

export default function App() {
  return (
    <>
      {/* Your app */}
      {process.env.NODE_ENV === 'development' && <SocialPreview />}
    </>
  );
}
```

## Why react-meta-seo?

| Feature | React Helmet | Next.js | react-meta-seo |
|---------|--------------|---------|----------------|
| **Core** | Legacy side-effect | Native | **Native React 19** |
| **Sitemap** | Manual | Built-in | **CLI Generator** |
| **Validation**| None | None | **Dev Warnings** |
| **Bundle** | ~16kB | N/A | **< 2kB** |
| **Setup** | `<Provider>` | Framework | **Zero Config** |

## Migration from React Helmet

```diff
- import { Helmet } from 'react-helmet';
+ import { Title, Meta } from 'react-meta-seo';

- <Helmet>
-   <title>My Page</title>
-   <meta name="description" content="..." />
- </Helmet>
+ <Title>My Page</Title>
+ <Meta name="description" content="..." />
```

## Contributing

PRs welcome! This library is experimental and feedback is appreciated.

```

## FAQ

### What happens if I render multiple `<Title>` or `<Meta>` tags?

React 19's native hoisting behavior means **the last tag wins**. If you render multiple `<Title>` components, only the last one in the render tree will be used.

```tsx
// ❌ Bad: Multiple titles
<Title>First Title</Title>
<Title>Second Title</Title> // This one wins
```

**Best Practice**: Only render one of each metadata tag per page. Use conditional rendering if you need dynamic values.

### Does this work with Server Components?

Yes! All components work in both Server Components ("use server") and Client Components ("use client"). The `<SocialPreview>` component is client-only and uses the "use client" directive automatically.

### How does this compare to React Helmet?

React Helmet uses legacy `react-side-effect` APIs that cause hydration overhead. `react-meta-seo` uses React 19's native hoisting, resulting in **0ms hydration cost** and full RSC compatibility.

## Community

- [Contributing Guide](CONTRIBUTING.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [License](LICENSE)

## Author

**Atharva Ralegankar**
- GitHub: [@atharva262005](https://github.com/atharva262005)
- Email: ralegankaratharva@gmail.com

## License

MIT © [Atharva Ralegankar](LICENSE)
