import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // @ts-expect-error - outputFileTracingIncludes is a valid Vercel config but type definition might be missing
    outputFileTracingIncludes: {
      '/docs': ['./DOCUMENTATION.md']
    }
  }
};
