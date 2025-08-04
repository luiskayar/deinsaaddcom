"use client";

import React, { useState, useEffect } from 'react';
import ArticlePreview from "@/components/molecules/ArticlePreview";
import { NewsFirebase } from '@/app/types';

type NewsItem = NewsFirebase & { id: string; category?: string; slug: string };

interface Props {
  allNews: NewsItem[];
  searchQuery?: string;
}

// Función para normalizar categorías (quitar acentos, espacios extra, etc.)
const normalizeCategory = (category: string): string => {
  return category
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Quitar acentos
    .replace(/\s+/g, ' ') // Normalizar espacios
    .trim();
};

// Función para obtener la categoría normalizada de una noticia
const getNormalizedCategory = (newsItem: NewsItem): string => {
  if (!newsItem.category) return '';
  return normalizeCategory(newsItem.category);
};

// Categorías predefinidas con sus variaciones posibles
const categoryMappings = {
  "todas": { key: "todas", label: "Todas las Categorías", variations: [] },
  "grc": { 
    key: "grc", 
    label: "GRC - Gobernanza, Riesgos y Cumplimiento", 
    variations: ["grc", "gobernanza riesgos y cumplimiento", "gobernanza", "riesgos y cumplimiento"] 
  },
  "delphos": { 
    key: "delphos", 
    label: "DELPHOS", 
    variations: ["delphos", "delphos elite", "delphos funciona"] 
  },
  "gestion de riesgos": { 
    key: "gestion de riesgos", 
    label: "Gestión de Riesgos", 
    variations: ["gestion de riesgos", "gestión de riesgos", "riesgos", "gestion riesgos"] 
  },
  "cumplimiento normativo": { 
    key: "cumplimiento normativo", 
    label: "Cumplimiento Normativo", 
    variations: ["cumplimiento normativo", "cumplimiento", "normativo"] 
  },
  "planificacion estrategica": { 
    key: "planificacion estrategica", 
    label: "Planificación Estratégica", 
    variations: ["planificacion estrategica", "planificación estratégica", "planificacion", "estrategica"] 
  },
  "gestion del desempeño": { 
    key: "gestion del desempeño", 
    label: "Gestión del Desempeño", 
    variations: ["gestion del desempeño", "gestión del desempeño", "desempeño", "gestion desempeño"] 
  },
  "continuidad del negocio": { 
    key: "continuidad del negocio", 
    label: "Continuidad del Negocio", 
    variations: ["continuidad del negocio", "continuidad", "negocio", "bcm"] 
  },
  "sector publico": { 
    key: "sector publico", 
    label: "Sector Público", 
    variations: ["sector publico", "sector público", "publico", "gobierno", "estado"] 
  },
  "sector financiero": { 
    key: "sector financiero", 
    label: "Sector Financiero", 
    variations: ["sector financiero", "financiero", "bancario", "finanzas"] 
  },
  "casos de exito": { 
    key: "casos de exito", 
    label: "Casos de Éxito", 
    variations: ["casos de exito", "casos de éxito", "casos exito", "exito", "casos"] 
  },
  "tecnologia": { 
    key: "tecnologia", 
    label: "Tecnología", 
    variations: ["tecnologia", "tecnología", "tech", "innovacion", "innovación", "tecnologia y saas", "saas"] 
  },
};

const categories = Object.values(categoryMappings);

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
      const categoryConfig = categoryMappings[category as keyof typeof categoryMappings];
      if (categoryConfig) {
        result = result.filter((n) => {
          const normalizedCategory = getNormalizedCategory(n);
          return categoryConfig.variations.some(variation => 
            normalizedCategory.includes(variation) || variation.includes(normalizedCategory)
          );
        });
      }
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
    const categoryConfig = categoryMappings[cat as keyof typeof categoryMappings];
    if (!categoryConfig) return 0;
    
    return news.filter((n) => {
      const normalizedCategory = getNormalizedCategory(n);
      return categoryConfig.variations.some(variation => 
        normalizedCategory.includes(variation) || variation.includes(normalizedCategory)
      );
    }).length;
  };

  // Debug: mostrar categorías en consola (solo en desarrollo)
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const uniqueCategories = [...new Set(news.map(n => n.category).filter(Boolean))];
      console.log('Categorías en Firebase:', uniqueCategories);
    }
  }, [news]);

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