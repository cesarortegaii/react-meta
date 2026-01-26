const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    outputFileTracingIncludes: {
      '/docs': ['./DOCUMENTATION.md']
    }
  }
};
