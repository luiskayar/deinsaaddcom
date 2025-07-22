import { Metadata } from "next";

// src/lib/metadata.ts
export const defaultMetadata = {
  title: 'DEINSA Global | Software de Gobernanza Corporativa y Gestión de Riesgos | DELPHOS',
  description:
    'DELPHOS: Software líder en gobernanza corporativa, gestión de riesgos, cumplimiento normativo y continuidad del negocio. 35+ años de experiencia. Solución SaaS para instituciones públicas y financieras.',
  keywords:
    'software de gestión de riesgos, gobernanza corporativa, DELPHOS, cumplimiento normativo, continuidad del negocio, gestión pública, instituciones financieras, SEVRI, planificación estratégica, control interno, auditoría, compliance, riesgo operacional, riesgo financiero, gobierno corporativo, SaaS, plataforma institucional, Deinsa Global',
  canonical: 'https://www.deinsa.com/',
  openGraph: {
    title: 'DEINSA Global | Software de Gobernanza Corporativa y Gestión de Riesgos',
    description: 'DELPHOS: Plataforma integral para gobernanza, riesgos y cumplimiento. 35+ años de experiencia en gestión pública y financiera.',
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.deinsa.com/',
    siteName: 'DEINSA Global',
    images: [
      {
        url: 'https://www.deinsa.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DEINSA Global - Software de Gobernanza Corporativa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DEINSA Global | Software de Gobernanza Corporativa',
    description: 'DELPHOS: Plataforma integral para gobernanza, riesgos y cumplimiento.',
    images: ['https://www.deinsa.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.deinsa.com/',
  },
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
};

export const metadataNoticias: Metadata = {
  title: "Noticias | Deinsa Global",
  description:
    "Soluciones de gestión, riesgos y cumplimiento para empresas modernas en Latinoamérica. Descubre las últimas novedades y tendencias con Deinsa Global.",
  keywords: [
    "software de gestión de riesgos",
    "Solución SaaS",
    "gobernanza corporativa",
    "inteligencia estratégica",
    "planificación estratégica",
    "Balanced Scorecard",
    "ISO 31000",
    "ITIL",
    "Deinsa Global",
    "Latinoamérica",
  ],
  openGraph: {
    title: "Noticias | Deinsa Global",
    description:
      "Soluciones de gestión, riesgos y cumplimiento para empresas modernas en Latinoamérica. Descubre las últimas novedades y tendencias con Deinsa Global.",
    type: "website",
    url: "https://www.deinsa.com/noticias",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noticias | Deinsa Global",
    description:
      "Soluciones de gestión, riesgos y cumplimiento para empresas modernas en Latinoamérica. Descubre las últimas novedades y tendencias con Deinsa Global.",
  },
  alternates: {
    canonical: "https://www.deinsa.com/noticias",
  },
  robots: {
    index: true,
    follow: true,
  },
};



