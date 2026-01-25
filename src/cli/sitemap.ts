import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);
const help = args.includes('--help');

if (help) {
  console.log(`
  Usage: react-meta generate-sitemap [options]

  Options:
    --hostname <url>   Base URL (e.g., https://example.com) [REQUIRED]
    --out <path>       Output path (default: public/sitemap.xml)
    --routes <path>    Path to routes config JSON file (optional)
                       Format: ["/" "/about"] or [{"url": "/", "priority": "1.0"}]
  `);
  process.exit(0);
}

interface RouteConfig {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

/**
 * Escapes XML special characters to prevent injection attacks
 */
function escapeXML(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

console.log('Generating sitemap...');

const hostname = args.find((_, i) => args[i - 1] === '--hostname');
const outPath = args.find((_, i) => args[i - 1] === '--out') || 'public/sitemap.xml';
const routesFile = args.find((_, i) => args[i - 1] === '--routes');

// Validate hostname is required and not localhost
if (!hostname || hostname.includes('localhost')) {
  console.error('Error: --hostname is required and cannot be localhost');
  console.error('Example: npx react-meta generate-sitemap --hostname https://example.com');
  process.exit(1);
}

// Validate URL format
try {
  new URL(hostname);
} catch (e) {
  console.error(`Error: --hostname "${hostname}" is not a valid URL`);
  process.exit(1);
}

// Prevent path traversal attacks
const resolvedPath = path.resolve(outPath);
const cwd = process.cwd();
if (!resolvedPath.startsWith(cwd)) {
  console.error('Error: --out must be within the current directory');
  console.error(`Attempted: ${resolvedPath}`);
  console.error(`Must be under: ${cwd}`);
  process.exit(1);
}

// Load routes from file or use default
let routes: RouteConfig[] = [{ url: '/' }];

if (routesFile) {
  try {
    const routesPath = path.resolve(routesFile);

    // Prevent path traversal for routes file
    if (!routesPath.startsWith(cwd)) {
      console.error('Error: --routes must be within the current directory');
      process.exit(1);
    }

    const routesData = JSON.parse(fs.readFileSync(routesPath, 'utf-8'));

    // Support both string array and RouteConfig array
    if (Array.isArray(routesData)) {
      routes = routesData.map(item =>
        typeof item === 'string' ? { url: item } : item
      );
    } else if (routesData.urls && Array.isArray(routesData.urls)) {
      routes = routesData.urls.map((item: string | RouteConfig) =>
        typeof item === 'string' ? { url: item } : item
      );
    } else {
      throw new Error('Routes file must be an array or object with "urls" array');
    }

    // Validate each route
    routes.forEach((route, index) => {
      if (!route.url || !route.url.startsWith('/')) {
        throw new Error(`Invalid route at index ${index}: "${route.url}" (must start with /)`);
      }
    });

    console.log(`Loaded ${routes.length} routes from ${routesFile}`);
  } catch (err: any) {
    console.error('Error loading routes:', err.message);
    process.exit(1);
  }
}

// Create directory if it doesn't exist
const dir = path.dirname(resolvedPath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Use streaming for better memory management with large sitemaps
const stream = fs.createWriteStream(resolvedPath);

stream.write('<?xml version="1.0" encoding="UTF-8"?>\n');
stream.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n');

// Write each URL entry
routes.forEach(route => {
  const lastmod = route.lastmod || new Date().toISOString();
  const changefreq = route.changefreq || 'daily';
  const priority = route.priority !== undefined ? route.priority : 1.0;

  stream.write(`  <url>\n`);
  stream.write(`    <loc>${escapeXML(hostname)}${escapeXML(route.url)}</loc>\n`);
  stream.write(`    <lastmod>${lastmod}</lastmod>\n`);
  stream.write(`    <changefreq>${changefreq}</changefreq>\n`);
  stream.write(`    <priority>${priority.toFixed(1)}</priority>\n`);
  stream.write(`  </url>\n`);
});

stream.write('</urlset>');
stream.end();

stream.on('finish', () => {
  console.log(`✓ Sitemap generated at ${resolvedPath} (${routes.length} URLs)`);
});

stream.on('error', (err) => {
  console.error('Error writing sitemap:', err);
  process.exit(1);
});
