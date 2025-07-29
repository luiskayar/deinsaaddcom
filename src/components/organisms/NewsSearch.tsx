"use client";

import { useEffect, useState } from "react";
import { NewsFirebase } from "@/app/types";
import ArticlePreview from "@/components/molecules/ArticlePreview";
import { Search } from "lucide-react";

type NewsItem = NewsFirebase & { id: string; category?: string; slug: string };

interface Props {
  allNews: NewsItem[];
  searchQuery?: string;
}

const categories = [
  { key: "todas", label: "Todas las Categorías" },
  { key: "gestion de riesgos", label: "Gestión de Riesgos" },
  { key: "cumplimiento normativo", label: "Cumplimiento Normativo" },
  { key: "planificacion estrategica", label: "Planificación Estratégica" },
  { key: "gestion del desempeño", label: "Gestión del Desempeño" },
  { key: "tecnologia y saas", label: "Tecnología y SaaS" },
  { key: "casos de exito", label: "Casos de Éxito" },
  { key: "sector publico", label: "Sector Público" },
  { key: "sector financiero", label: "Sector Financiero" },
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
    <div className="space-y-6">
      {/* Categorías */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white text-center">Filtrar por Categoría</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => {
            const conteo = getCategoryTotal(cat.key);
            const isSelected = category === cat.key;

            return (
              <button
                key={cat.key}
                onClick={() => setCategory(cat.key)}
                className={`text-left px-6 py-4 rounded-xl shadow-lg transition-all duration-200 flex justify-between items-center border ${
                  isSelected
                    ? "bg-[#181818] text-white border-orange-500/50 shadow-orange-500/10"
                    : "bg-[#181818] hover:bg-gray-800 text-gray-300 border-[#181818] hover:border-gray-600 hover:shadow-lg"
                }`}
              >
                <span className="font-medium">{cat.label}</span>
                <span
                  className={`text-sm px-3 py-1 rounded-full font-bold ${
                    isSelected
                      ? "bg-orange-500/80 text-white"
                      : "bg-gray-700 text-gray-300"
                  }`}
                >
                  {conteo}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filtros activos */}
      {(category !== "todas" || searchQuery) && (
        <div className="bg-[#181818] border border-gray-700 rounded-xl p-6 flex items-center justify-between">
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
