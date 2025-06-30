import Script from 'next/script';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DEINSA Global",
    "url": "https://www.deinsa.com",
    "logo": "https://www.deinsa.com/logo.png",
    "description": "Empresa costarricense con 35+ años de experiencia en software de gobernanza corporativa y gestión de riesgos.",
    "foundingDate": "1990",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CR",
      "addressLocality": "San José",
      "addressRegion": "San José"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@deinsa.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/deinsa-global",
      "https://twitter.com/deinsaglobal"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software de Gobernanza Corporativa",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "DELPHOS",
            "description": "Plataforma integral SaaS para gobernanza corporativa, gestión de riesgos y cumplimiento normativo",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "description": "Solicite una demostración gratuita"
            }
          }
        }
      ]
    }
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "DELPHOS",
    "description": "Software líder en gobernanza corporativa, gestión de riesgos, cumplimiento normativo y continuidad del negocio",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "softwareVersion": "2024",
    "datePublished": "2000",
    "publisher": {
      "@type": "Organization",
      "name": "DEINSA Global"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Solicite una demostración gratuita"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "500"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Servicios de Gobernanza Corporativa",
    "description": "Servicios especializados en gobernanza corporativa, gestión de riesgos, cumplimiento normativo y continuidad del negocio",
    "provider": {
      "@type": "Organization",
      "name": "DEINSA Global"
    },
    "serviceType": "Consulting Service",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Costa Rica"
      },
      {
        "@type": "Country", 
        "name": "Panamá"
      },
      {
        "@type": "Country",
        "name": "México"
      },
      {
        "@type": "Country",
        "name": "República Dominicana"
      }
    ]
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  );
} 