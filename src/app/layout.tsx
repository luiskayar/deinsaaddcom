import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/layout/StructuredData";
import GoogleAnalytics from "@/components/layout/GoogleAnalytics";
import Script from "next/script";

// Tipografías
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Metadata base optimizado para SEO
export const metadata: Metadata = {
  metadataBase: new URL('https://www.deinsa.com'),
  title: {
    default: "DEINSA Global | Software de Gobernanza Corporativa y Gestión de Riesgos | DELPHOS",
    template: "%s | DEINSA Global"
  },
  description: "DELPHOS: Software líder en gobernanza corporativa, gestión de riesgos, cumplimiento normativo y continuidad del negocio. 35+ años de experiencia. Solución SaaS para instituciones públicas y financieras.",
  keywords: [
    "software de gestión de riesgos",
    "gobernanza corporativa", 
    "DELPHOS",
    "cumplimiento normativo",
    "continuidad del negocio",
    "gestión pública",
    "instituciones financieras",
    "SEVRI",
    "planificación estratégica",
    "control interno",
    "auditoría",
    "compliance",
    "riesgo operacional",
    "riesgo financiero",
    "gobierno corporativo",
    "SaaS",
    "plataforma institucional",
    "Deinsa Global"
  ],
  authors: [{ name: "DEINSA Global" }],
  creator: "DEINSA Global",
  publisher: "DEINSA Global",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
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
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.deinsa.com/',
    title: 'DEINSA Global | Software de Gobernanza Corporativa y Gestión de Riesgos',
    description: 'DELPHOS: Plataforma integral para gobernanza, riesgos y cumplimiento. 35+ años de experiencia en gestión pública y financiera.',
    siteName: 'DEINSA Global',
    images: [
      {
        url: '/og-image.jpg',
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
    images: ['/og-image.jpg'],
    creator: '@deinsaglobal',
  },
  alternates: {
    canonical: 'https://www.deinsa.com/',
  },
  verification: {
    google: 'tu-codigo-de-verificacion-google',
    yandex: 'tu-codigo-de-verificacion-yandex',
    yahoo: 'tu-codigo-de-verificacion-yahoo',
  },
};

// ✅ Export correcto del viewport con themeColor
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e40af",
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <StructuredData />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

