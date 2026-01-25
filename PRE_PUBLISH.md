# Pre-Publication Checklist

Before publishing to NPM, update these placeholders in `package.json`:

## Critical Updates Required

### 1. Repository URL
```json
"repository": {
  "type": "git",
  "url": "https://github.com/yourusername/react-meta"  // ← UPDATE THIS
},
"bugs": {
  "url": "https://github.com/yourusername/react-meta/issues"  // ← UPDATE THIS
}
```

### 2. Author Information
```json
"author": "Your Name <your.email@example.com> (https://yourwebsite.com)"  // ← UPDATE THIS
```

## Pre-Publish Commands

```bash
# 1. Update package.json with your info
# 2. Build the package
npm run build

# 3. Run tests
npm test

# 4. Check package contents
npm pack --dry-run

# 5. Publish (use --tag beta for first release)
npm publish --access public
```

## Post-Publish

- Deploy example app to Vercel/Netlify
- Update README demo link
- Post to r/reactjs using RELEASE_POST.md
