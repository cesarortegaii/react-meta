# Deploy to Vercel Guide

## Option 1: Deploy via Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Navigate to example directory:
```bash
cd example
```

3. Deploy:
```bash
vercel --prod
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? (Your Vercel account)
- Link to existing project? **N**
- Project name: **react-meta-seo-demo** (or your choice)
- Directory: **./example**
- Override settings? **N**

## Option 2: Deploy via Vercel Dashboard

1. Go to https://vercel.com/new
2. Import from Git: Select your `react-meta-seo` repository
3. Configure project:
   - **Framework Preset**: Vite
   - **Root Directory**: `example`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**

## After Deployment

1. **Copy the deployment URL** (e.g., `https://react-meta-seo-demo.vercel.app`)
2. **Update README.md** with the live demo link
3. **Update package.json** homepage field

## Testing the Demo

The deployed demo will show:
- ✅ Social Preview overlay (bottom-right)
- ✅ All meta tags in `<head>`
- ✅ Schema.org JSON-LD
- ✅ React 19 native hoisting in action

**Note**: The demo is using the local build of react-meta via `"react-meta": "file:../"`
