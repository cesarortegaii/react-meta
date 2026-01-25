# GitHub Setup Guide

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `react-meta`
3. Description: `The definitive React 19 SEO library. Lightweight, type-safe, and native.`
4. Visibility: Public
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 2: Connect Local Repository

After creating the repo, run these commands:

```bash
git remote add origin https://github.com/YOUR-USERNAME/react-meta.git
git branch -M main
git push -u origin main
```

## Step 3: Update package.json

Before publishing to NPM, update these fields in `package.json`:

```json
{
  "author": "Your Name <your.email@example.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/YOUR-USERNAME/react-meta"
  },
  "bugs": {
    "url": "https://github.com/YOUR-USERNAME/react-meta/issues"
  }
}
```

## Step 4: Verify Everything

```bash
npm run build
npm test
npm pack --dry-run
```

## Step 5: Publish to NPM

```bash
# Login to NPM (first time only)
npm login

# Publish (consider using --tag beta for first release)
npm publish --access public

# Or for beta release:
npm publish --access public --tag beta
```

## Next Steps

- [ ] Create GitHub repository
- [ ] Push code to GitHub
- [ ] Update package.json metadata
- [ ] Publish to NPM
- [ ] Deploy example app to Vercel
- [ ] Announce on r/reactjs
