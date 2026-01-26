const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
// Note: Typography plugin is now included via CSS @plugin in custom CSS or importing it if using v4 compatible way
// For v4, we typically use @plugin "tailwindcss-animate"; syntax in CSS or standard config if legacy.
// Since we used @tailwindcss/postcss in package.json, we might be using v4 beta.
// Let's assume standard plugin config for now as v4 supports it in CSS usually, but let's see.
export default config;
