import Script from 'next/script';
import { seoConfig } from '@/lib/seo-config';

export default function StructuredData() {
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seoConfig.structuredData.organization),
        }}
      />
      <Script
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seoConfig.structuredData.software),
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seoConfig.structuredData.service),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seoConfig.structuredData.faq),
        }}
      />
      {/* Schema adicional para mejorar la visibilidad en búsquedas locales */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "DEINSA Global",
            "description": "Empresa especializada en software de gobernanza corporativa y gestión de riesgos",
            "url": "https://www.deinsa.com",
            "telephone": "+506-2222-2222",
            "email": "info@deinsa.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "San José",
              "addressLocality": "San José",
              "addressRegion": "San José",
              "addressCountry": "CR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "9.9281",
              "longitude": "-84.0907"
            },
            "openingHours": "Mo-Fr 08:00-17:00",
            "priceRange": "$$",
            "currenciesAccepted": "USD, CRC",
            "paymentAccepted": "Cash, Credit Card, Bank Transfer"
          }),
        }}
      />
    </>
  );
} 