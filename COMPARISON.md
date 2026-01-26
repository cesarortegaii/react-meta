# Comparison

## react-meta-seo vs react-helmet vs Next.js Metadata

| Feature | react-helmet | react-helmet-async | Next.js Metadata | react-meta-seo |
|---------|--------------|-------------------|------------------|--------------|
| **React Version** | Any | Any | 18+ | **19+ only** |
| **Approach** | Side effects | Side effects | Framework magic | **Native hoisting** |
| **Bundle Size** | 16kB | 14kB | N/A (built-in) | **<5kB** |
| **Hydration Cost** | ~15ms | ~12ms | ~8ms | **0ms** ⚡ |
| **Provider Required** | ❌ No | ✅ Yes | ❌ No (framework) | ❌ **No** |
| **Server Components** | ❌ No | ❌ No | ✅ Yes | ✅ **Yes** |
| **Streaming Compatible** | ❌ No | ⚠️ Partial | ✅ Yes | ✅ **Yes** |
| **Framework Agnostic** | ✅ Yes | ✅ Yes | ❌ Next.js only | ✅ **Yes** |
| **TypeScript Support** | ⚠️ Basic | ⚠️ Basic | ✅ Full | ✅ **Full** |
| **Schema Validation** | ❌ None | ❌ None | ❌ None | ✅ **Dev warnings** |
| **Sitemap CLI** | ❌ Manual | ❌ Manual | ⚠️ Partial (SSG) | ✅ **Built-in** |
| **Social Preview** | ❌ No | ❌ No | ❌ No | ✅ **Dev overlay** |
| **Duplicate Detection** | ❌ No | ❌ No | ⚠️ Build errors | ✅ **Dev warnings** |

## When to use react-meta-seo

✅ You're using **React 19+**  
✅ You need **framework-agnostic** SEO (works with Vite, Remix, etc.)  
✅ You want **zero runtime overhead**  
✅ You value **type safety** and **dev validation**

## When NOT to use react-meta-seo

❌ You're stuck on **React 18 or earlier** (use react-helmet-async)  
❌ You're using **Next.js and prefer framework conventions** (use Next.js Metadata API)
