"use client";

import React, { useState } from 'react';
import { getNews } from "../../lib/functions/getNews";
import NewsPageWrapper from "@/components/organisms/NewsPageWrapper";
import { NewsFirebase } from '@/app/types';

type NewsItem = NewsFirebase & { id: string; category?: string; slug: string };

export default function NoticiasPage() {
  const [allNews, setAllNews] = useState<NewsItem[]>([]);
  const [searchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const fetchNews = async () => {
      try {
        const news = await getNews();
        setAllNews(news || []);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-center text-white text-xl">Cargando noticias...</p>
      </div>
    );
  }
  
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
      {/* Hero Section con título y subtítulo */}
      <section className="relative py-8 md:py-12 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex-1"></div>
            <div className="flex-1 text-center">
              <h1 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">
                <span className="text-orange-500">Últimas noticias</span> y actualizaciones
              </h1>
            </div>
            <div className="flex-1 flex justify-end">
            </div>
          </div>
          <div className="text-center">
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
              Explora nuestras innovaciones, casos de éxito, mejoras en DELPHOS y contenidos clave.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de noticias */}
      <section className="relative py-8 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          {/* El wrapper maneja el buscador y el contenido */}
          <NewsPageWrapper allNews={allNews} searchQuery={searchQuery} />
        </div>
      </section>
    </div>
  );
} 