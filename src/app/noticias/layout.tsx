import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog DEINSA Global | Noticias de GRC y Gestión de Riesgos",
  description: "Manténgase al día con las últimas tendencias en gobernanza, riesgo y cumplimiento. Lea artículos y guías de DEINSA Global.",
  keywords: [
    "blog GRC",
    "noticias gestión de riesgos",
    "gobernanza corporativa",
    "cumplimiento normativo",
    "DEINSA Global",
    "DELPHOS",
    "artículos GRC",
    "tendencias gobernanza",
    "riesgo y cumplimiento",
    "software GRC"
  ],
  openGraph: {
    title: "Blog DEINSA Global | Noticias de GRC y Gestión de Riesgos",
    description: "Manténgase al día con las últimas tendencias en gobernanza, riesgo y cumplimiento. Lea artículos y guías de DEINSA Global.",
    url: "https://www.deinsa.com/noticias",
    type: "website",
  },
  alternates: {
    canonical: "https://www.deinsa.com/noticias",
  },
};

export default function NoticiasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 