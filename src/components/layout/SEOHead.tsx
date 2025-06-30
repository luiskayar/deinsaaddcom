'use client';
import Head from 'next/head';
import { defaultMetadata } from '@/lib/metadata';

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
};

export default function SEOHead({
  title = defaultMetadata.title,
  description = defaultMetadata.description,
  keywords = defaultMetadata.keywords,
  canonical = defaultMetadata.canonical,
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content="/images/og-default.jpg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
