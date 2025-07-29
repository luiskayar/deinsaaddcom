
import React from 'react';
import { Metadata } from 'next';
import { getNews } from "../../lib/functions/getNews";
import NewsPageWrapper from "@/components/organisms/NewsPageWrapper";

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
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-center text-red-500 text-xl">
          Ocurrió un error al cargar las noticias.
        </p>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section con fondo completamente negro */}
      <section className="relative py-20 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          {/* El wrapper maneja el buscador y el contenido */}
          <NewsPageWrapper allNews={allNews} />
        </div>
      </section>
    </div>
  );
} 