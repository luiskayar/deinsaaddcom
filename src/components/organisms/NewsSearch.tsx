"use client";

import React, { useState, useEffect } from 'react';
import ArticlePreview from "@/components/molecules/ArticlePreview";
import { NewsFirebase } from '@/app/types';

type NewsItem = NewsFirebase & { id: string; category?: string; slug: string };

interface Props {
  allNews: NewsItem[];
  searchQuery?: string;
}

const categories = [
  { key: "todas", label: "Todas las Categorías" },
  { key: "grc", label: "GRC - Gobernanza, Riesgos y Cumplimiento" },
  { key: "delphos", label: "DELPHOS" },
  { key: "gestion de riesgos", label: "Gestión de Riesgos" },
  { key: "cumplimiento normativo", label: "Cumplimiento Normativo" },
  { key: "planificacion estrategica", label: "Planificación Estratégica" },
  { key: "gestion del desempeño", label: "Gestión del Desempeño" },
  { key: "continuidad del negocio", label: "Continuidad del Negocio" },
  { key: "sector publico", label: "Sector Público" },
  { key: "sector financiero", label: "Sector Financiero" },
  { key: "casos de exito", label: "Casos de Éxito" },
  { key: "tecnologia", label: "Tecnología" },
];

export default function NewsSearch({ allNews, searchQuery = "" }: Props) {
  const [news] = useState<NewsItem[]>(allNews);
  const [filtered, setFiltered] = useState<NewsItem[]>(allNews);
  const [mounted, setMounted] = useState(false);
  const [category, setCategory] = useState("todas");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let result = news;
    const term = searchQuery.trim().toLowerCase();

    if (category !== "todas") {
      result = result.filter((n) => n.category?.toLowerCase() === category);
    }

    if (term) {
      result = result.filter(
        (n) =>
          n.title.toLowerCase().includes(term) ||
          n.description.toLowerCase().includes(term)
      );
    }
    setFiltered(result);
  }, [searchQuery, allNews, category, news]);

  const getCategoryTotal = (cat: string) => {
    if (cat === "todas") {
      return news.length;
    }
    return news.filter((n) => n.category?.toLowerCase() === cat).length;
  };

  if (!mounted) return null;

  return (
    <div className="space-y-8">
      {/* Filtros por categorías */}
      <div className="bg-[#181818] rounded-xl p-6">
        <h3 className="text-white font-semibold text-lg mb-4">Filtrar por categoría</h3>
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                category === cat.key
                  ? "bg-orange-500 text-white shadow-lg"
                  : "text-gray-300 bg-white/10"
              }`}
            >
              {cat.label} ({getCategoryTotal(cat.key)})
            </button>
          ))}
        </div>
      </div>

      {/* Filtros activos */}
      {(category !== "todas" || searchQuery) && (
        <div className="bg-[#181818] rounded-xl p-6 flex items-center justify-between">
          <div className="flex items-center gap-3 flex-wrap">
            {category !== "todas" && (
              <span className="bg-orange-500/80 text-white px-4 py-2 rounded-full text-sm font-medium">
                {categories.find((cat) => cat.key === category)?.label}
              </span>
            )}
            {searchQuery && (
              <span className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-sm">
                Búsqueda: &quot;{searchQuery}&quot;
              </span>
            )}
            <span className="text-gray-300 font-medium">({filtered.length} artículos)</span>
          </div>

          <button
            onClick={() => {
              setCategory("todas");
            }}
            className="text-orange-400/80 hover:text-orange-300 font-medium transition-colors"
          >
            Limpiar filtros
          </button>
        </div>
      )}

      {/* Resultados */}
      {filtered.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400 text-xl">No se encontraron noticias.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((item) => (
            <ArticlePreview
              key={item.id}
              titulo={item.title}
              extracto={item.description}
              link={`/noticias/${item.slug}`}
              alt={item.title}
              src={item.image}
            />
          ))}
        </div>
      )}
    </div>
  );
} 