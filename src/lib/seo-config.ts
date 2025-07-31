// Configuración SEO optimizada para DEINSA Global
export const seoConfig = {
  // Palabras clave principales y secundarias
  keywords: {
    primary: [
      "gobernanza corporativa",
      "gestión de riesgos",
      "software de gobernanza",
      "DELPHOS",
      "SaaS gobernanza",
      "cumplimiento normativo",
      "control interno",
      "auditoría corporativa"
    ],
    secondary: [
      "continuidad del negocio",
      "SEVRI",
      "planificación estratégica",
      "riesgo operacional",
      "riesgo financiero",
      "compliance",
      "gobierno corporativo",
      "plataforma institucional",
      "gestión pública",
      "instituciones financieras"
    ],
    longTail: [
      "software de gestión de riesgos para empresas",
      "plataforma de gobernanza corporativa en Latinoamérica",
      "herramientas de cumplimiento normativo automatizado",
      "sistema de control interno y auditoría",
      "software SaaS para instituciones públicas",
      "gestión de continuidad del negocio BCM",
      "integración SEVRI automatizada",
      "plataforma de gobernanza en Oracle Cloud"
    ]
  },

  // Datos estructurados mejorados
  structuredData: {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "DEINSA Global",
      "url": "https://www.deinsa.com",
      "logo": "https://www.deinsa.com/images/deinsa-negro.png",
      "description": "Empresa costarricense líder en software de gobernanza corporativa y gestión de riesgos con 35+ años de experiencia.",
      "foundingDate": "1990",
      "numberOfEmployees": "50-100",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "CR",
        "addressLocality": "San José",
        "addressRegion": "San José"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "info@deinsa.com",
        "availableLanguage": ["Spanish", "English"]
      },
      "sameAs": [
        "https://www.linkedin.com/company/deinsa-global",
        "https://twitter.com/deinsaglobal"
      ],
      "award": [
        "35+ años de experiencia",
        "500+ implementaciones exitosas",
        "Presencia en 4 continentes"
      ]
    },

    software: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "DELPHOS",
      "description": "Software líder en gobernanza corporativa, gestión de riesgos, cumplimiento normativo y continuidad del negocio. Plataforma SaaS integral para instituciones públicas y financieras.",
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
        "ratingCount": "500",
        "bestRating": "5",
        "worstRating": "1"
      },
      "featureList": [
        "Gestión de Riesgos Integrada",
        "Cumplimiento Normativo Automatizado",
        "Planificación Estratégica",
        "Control Interno y Auditoría",
        "Gestión de Continuidad del Negocio",
        "Integración SEVRI",
        "Análisis en Tiempo Real"
      ]
    },

    service: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Servicios de Gobernanza Corporativa y Gestión de Riesgos",
      "description": "Servicios especializados en gobernanza corporativa, gestión de riesgos, cumplimiento normativo y continuidad del negocio para instituciones públicas y financieras.",
      "provider": {
        "@type": "Organization",
        "name": "DEINSA Global"
      },
      "serviceType": "Software as a Service",
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
        },
        {
          "@type": "Country",
          "name": "Colombia"
        },
        {
          "@type": "Country",
          "name": "Perú"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Soluciones de Gobernanza Corporativa",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Software DELPHOS",
              "description": "Plataforma SaaS integral para gobernanza corporativa"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Implementación y Consultoría",
              "description": "Servicios de implementación y consultoría especializada"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Capacitación y Soporte",
              "description": "Capacitación continua y soporte técnico especializado"
            }
          }
        ]
      }
    },

    // FAQ Schema para mejorar rich snippets
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué es DELPHOS y para qué sirve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DELPHOS es una plataforma SaaS integral de gobernanza corporativa y gestión de riesgos que ayuda a las instituciones a cumplir con normativas, gestionar riesgos y mantener un control interno efectivo."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué tipo de instituciones pueden usar DELPHOS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DELPHOS está diseñado para instituciones públicas, bancos, cooperativas, ministerios y organismos internacionales que requieren herramientas de gobernanza corporativa."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cómo funciona la integración con SEVRI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DELPHOS integra automáticamente con el Sistema de Evaluación de Riesgos Institucionales (SEVRI) para facilitar el cumplimiento normativo y la gestión de riesgos."
          }
        },
        {
          "@type": "Question",
          "name": "¿Ofrecen demostración gratuita?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, ofrecemos demostraciones gratuitas personalizadas para que pueda conocer todas las funcionalidades de DELPHOS y cómo puede beneficiar a su institución."
          }
        }
      ]
    }
  },

  // Meta tags optimizados
  metaTags: {
    title: {
      default: "DEINSA Global | Software de Gobernanza Corporativa y Gestión de Riesgos | DELPHOS",
      template: "%s | DEINSA Global - Software de Gobernanza Corporativa"
    },
    description: {
      default: "DELPHOS: Software líder en gobernanza corporativa, gestión de riesgos, cumplimiento normativo y continuidad del negocio. 35+ años de experiencia. Solución SaaS para instituciones públicas y financieras.",
      short: "Software de gobernanza corporativa y gestión de riesgos DELPHOS. 35+ años de experiencia en Latinoamérica."
    },
    openGraph: {
      title: "DEINSA Global | Software de Gobernanza Corporativa y Gestión de Riesgos",
      description: "DELPHOS: Plataforma integral para gobernanza, riesgos y cumplimiento. 35+ años de experiencia en gestión pública y financiera.",
      type: "website",
      locale: "es_ES",
      siteName: "DEINSA Global"
    }
  }
};

// Función para generar keywords dinámicamente
export const generateKeywords = (page: string = 'home') => {
  const baseKeywords = [...seoConfig.keywords.primary, ...seoConfig.keywords.secondary];
  
  switch (page) {
    case 'delphos':
      return [...baseKeywords, 'software DELPHOS', 'plataforma DELPHOS', 'herramientas DELPHOS'];
    case 'servicios':
      return [...baseKeywords, 'servicios de gobernanza', 'consultoría gobernanza', 'implementación software'];
    case 'contacto':
      return [...baseKeywords, 'contacto DEINSA', 'solicitar demo', 'demostración gratuita'];
    default:
      return baseKeywords;
  }
};

// Función para generar descripción dinámica
export const generateDescription = (page: string = 'home') => {
  switch (page) {
    case 'delphos':
      return "Conozca DELPHOS, la plataforma SaaS líder en gobernanza corporativa y gestión de riesgos. 35+ años de experiencia, 500+ implementaciones exitosas en Latinoamérica.";
    case 'servicios':
      return "Servicios especializados en gobernanza corporativa, implementación de software DELPHOS, consultoría y capacitación para instituciones públicas y financieras.";
    case 'contacto':
      return "Contacte con DEINSA Global para solicitar una demostración gratuita de DELPHOS. Software de gobernanza corporativa y gestión de riesgos.";
    default:
      return seoConfig.metaTags.description.default;
  }
}; 