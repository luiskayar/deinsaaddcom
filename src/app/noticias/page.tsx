
import React from 'react';
import TituloSeccion from '@/components/comunes/TituloSeccion';
import { Metadata } from 'next';
import { getNews } from "@/lib/functions/getNews";
import NewsSearch from "@/components/organisms/NewsSearch";

export const metadata: Metadata = {
  title: "Noticias | Deinsa",
  description: "Conozca las últimas novedades, proyectos y eventos de Deinsa Global.",
  openGraph: {
    title: "Noticias | Deinsa",
    description: "Conozca las últimas novedades, proyectos y eventos de Deinsa Global.",
    url: "https://www.deinsa.com/noticias",
  },
  alternates: {
    canonical: "https://www.deinsa.com/noticias",
  },
};


export default async function NoticiasPage() {

  const allNews = await getNews().catch(() => null);
  
  if (!allNews || allNews.length === 0) {
    return (
      <p className="text-center text-red-500">
        Ocurrió un error al cargar las noticias.
      </p>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Introducción al Blog */}
        <TituloSeccion titulo="Noticias y Análisis: Liderando la Gobernanza Inteligente y la Gestión de Riesgos" nivel={1} />
        <p className="text-lg text-gray-700 mb-10 text-center">
          Explore nuestro blog para mantenerse al día con las últimas tendencias, análisis de expertos y casos de éxito en Gobernanza Corporativa, Software de gestión de riesgos, y transformación digital para la gestión pública y el sector financiero.
        </p>

        {/* Artículos Destacados */}
        <TituloSeccion titulo="Artículos Relevantes para el Sector Público y Financiero" nivel={2} />
        <NewsSearch allNews={allNews} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mt-6"></div>           

        {/* Suscríbase a Nuestro Newsletter (CTA) */}
        <div className="bg-gradient-to-r from-blue-100 via-white to-blue-50 rounded-xl p-8 shadow flex flex-col items-center">
          <TituloSeccion titulo="Manténgase Informado con DEINSA GLOBAL" nivel={2} />
          <p className="text-gray-700 text-lg max-w-2xl text-center mb-4">
            Reciba las últimas noticias, análisis y actualizaciones sobre gobernanza inteligente, software de gestión de riesgos y soluciones para instituciones públicas directamente en su bandeja de entrada.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 w-full max-w-xl justify-center">
            <input type="email" placeholder="Su correo electrónico" required className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-md transition-colors">Suscribirse</button>
          </form>
        </div>
      </div>
    </div>
  );
} 