# Migration Guide

## 60-Second Migration from react-helmet-async

### Step 1: Install react-meta-seo

```bash
npm uninstall react-helmet-async
npm install react-meta-seo schema-dts
```

### Step 2: Remove `<HelmetProvider>`

```diff
// App.tsx or Root.tsx
- import { HelmetProvider } from 'react-helmet-async';

- <HelmetProvider>
    <App />
- </HelmetProvider>
+ <App />
```

### Step 3: Update Component Imports

```diff
- import { Helmet } from 'react-helmet-async';
+ import { Title, Meta, Link } from 'react-meta-seo';
```

### Step 4: Replace `<Helmet>` with Individual Components

**Before:**

```tsx
<Helmet>
  <title>My Page | Site Name</title>
  <meta name="description" content="Page description" />
  <link rel="canonical" href="https://example.com/page" />
</Helmet>
```

**After:**

```tsx
import { Title, Meta, Link } from 'react-meta-seo';

<>
  <Title>My Page | Site Name</Title>
  <Meta name="description" content="Page description" />
  <Link rel="canonical" href="https://example.com/page" />
</>
```

### Step 5: Migrate Social Tags

**Before:**

```tsx
<Helmet>
  <meta property="og:title" content="My Page" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://example.com" />
  <meta property="og:image" content="https://example.com/og.jpg" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="My Page" />
</Helmet>
```

**After:**

```tsx
import { OpenGraph, TwitterCard } from 'react-meta-seo';

<>
  <OpenGraph
    title="My Page"
    type="website"
    url="https://example.com"
    image="https://example.com/og.jpg"
  />
  
  <TwitterCard
    card="summary_large_image"
    title="My Page"
  />
</>
```

### Step 6: Update Structured Data

**Before:**

```tsx
<Helmet>
  <script type="application/ld+json">
    {JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Cool Shoes',
    })}
  </script>
</Helmet>
```

**After:**

```tsx
import { Schema, SchemaPresets } from 'react-meta-seo';

<Schema
  data={SchemaPresets.product({
    name: 'Cool Shoes',
    image: 'https://example.com/shoes.jpg',
    offers: {
      '@type': 'Offer',
      price: '99.00',
      priceCurrency: 'USD',
    },
  })}
/>
```

**Benefits:**
- ✅ Full TypeScript support with `schema-dts`
- ✅ Development-mode validation warnings
- ✅ No manual JSON.stringify needed

## Migration Checklist

- [ ] Remove `react-helmet-async` dependency
- [ ] Install `react-meta-seo` and `schema-dts`
- [ ] Remove `<HelmetProvider>` wrapper
- [ ] Replace all `<Helmet>` with individual components
- [ ] Update social meta tags to use `<OpenGraph>` and `<TwitterCard>`
- [ ] Migrate structured data to type-safe `<Schema>` component
- [ ] Test in development mode to catch validation warnings
- [ ] Verify metadata in production build
