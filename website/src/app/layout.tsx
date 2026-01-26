import type { Metadata } from 'next';
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';
import 'highlight.js/styles/github-dark.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap', // Performance optimization
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://react-meta-seo.vercel.app'),
  title: {
    default: 'react-meta-seo | React 19 SEO Library - Zero Runtime Overhead',
    template: '%s | react-meta-seo'
  },
  description: 'The definitive SEO library for React 19. Zero-runtime overhead, RSC-compatible, type-safe metadata management. The modern alternative to React Helmet.',
  keywords: [
    'react seo',
    'react 19 seo',
    'react metadata',
    'react helmet alternative',
    'react server components seo',
    'react meta tags',
    'rsc seo',
    'react 19 metadata',
    'zero overhead seo',
    'react seo library',
    'server components metadata',
  ],
  authors: [{ name: 'Atharva Ralegankar', url: 'https://github.com/atharva262005' }],
  creator: 'Atharva Ralegankar',
  publisher: 'react-meta-seo',

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://react-meta-seo.vercel.app',
    siteName: 'react-meta-seo',
    title: 'react-meta-seo | React 19 SEO Library',
    description: 'Zero-runtime overhead SEO library for React 19. Native hoisting, RSC-compatible, type-safe.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'react-meta-seo - React 19 SEO Library',
      },
    ],
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'react-meta-seo | React 19 SEO Library',
    description: 'Zero-runtime overhead SEO library for React 19',
    creator: '@atharva262005',
    images: ['/og-image.png'],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Canonical
  alternates: {
    canonical: 'https://react-meta-seo.vercel.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "react-meta-seo",
    "url": "https://react-meta-seo.vercel.app",
    "logo": "https://react-meta-seo.vercel.app/logo.png",
    "description": "The definitive SEO library for React 19",
    "foundingDate": "2024-01-25",
    "sameAs": [
      "https://github.com/atharva262005/react-meta",
      "https://www.npmjs.com/package/react-meta-seo"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Developer Support",
      "email": "ralegankaratharva@gmail.com"
    }
  };

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "react-meta-seo",
    "url": "https://react-meta-seo.vercel.app",
    "description": "The SEO Library for React 19",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://react-meta-seo.vercel.app/docs?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-neutral-50`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
