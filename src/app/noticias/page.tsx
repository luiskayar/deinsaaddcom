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
  const [error, setError] = useState<string | null>(null);

  React.useEffect(() => {
    const fetchNews = async () => {
      try {
        setError(null);
        const news = await getNews();
        if (news && Array.isArray(news)) {
          setAllNews(news);
        } else {
          setError('Formato de datos inválido');
        }
      } catch (error) {
        console.error('Error fetching news:', error);
        setError('Error al cargar las noticias');
      } finally {
        setLoading(false);
      }
    };
    
    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-white text-xl">Cargando noticias...</p>
        </div>
      </div>
    );
  }
  
  if (error || !allNews || allNews.length === 0) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">
            {error || 'No se encontraron noticias'}
          </h1>
          <p className="text-gray-400 mb-6">
            {error || 'No hay noticias disponibles en este momento.'}
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Intentar de nuevo
          </button>
        </div>
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