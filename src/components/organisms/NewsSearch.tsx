"use client";

import { useEffect, useState } from "react";
import { NewsFirebase } from "@/app/types";
import { Search } from "lucide-react";
import ArticlePreview from "@/components/molecules/ArticlePreview";

type NewsItem = NewsFirebase & { id: string; category?: string; slug: string };

interface Props {
  allNews: NewsItem[];
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

export default function NewsSearch({ allNews }: Props) {
  const [news] = useState<NewsItem[]>(allNews);
  const [input, setInput] = useState("");
  const [filtered, setFiltered] = useState<NewsItem[]>(allNews);
  const [mounted, setMounted] = useState(false);
  const [category, setCategory] = useState("todas");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let result = news;
    const term = input.trim().toLowerCase();

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
  }, [input, allNews, category, news]);

  const getCategoryTotal = (cat: string) => {
    if (cat === "todas") {
      return news.length;
    }
    return news.filter((n) => n.category?.toLowerCase() === cat).length;
  };

  if (!mounted) return null;

  return (
    <div className="space-y-4">
      <aside className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Categorías</h2>
        <div className="flex flex-col gap-2">
          {categories.map((cat) => {
            const conteo = getCategoryTotal(cat.key);
            const isSelected = category === cat.key;

            return (
              <button
                key={cat.key}
                onClick={() => setCategory(cat.key)}
                className={`text-left px-4 py-2 rounded shadow transition-all duration-200 flex justify-between items-center ${
                  isSelected
                    ? "bg-blue-600 text-white"
                    : "bg-white hover:bg-blue-100"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-sm px-2 py-1 rounded-full ${
                    isSelected
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {conteo}
                </span>
              </button>
            );
          })}
        </div>
      </aside>
      <div className="flex items-center border border-gray-300 rounded-lg px-3 py-1.5 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 w-full max-w-md mt-7 mb-7">
        <Search className="w-4 h-4 text-gray-500 mr-2" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Buscar por título o descripción…"
          className="flex-1 text-black placeholder-gray-400 focus:outline-none"
        />
      </div>
      {(category !== "todas" || input) && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-2 flex-wrap">
            {category !== "todas" && (
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                {categories.find((cat) => cat.key === category)?.label}
              </span>
            )}
            {input && (
              <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">
                Búsqueda: &quot;{input}&quot;
              </span>
            )}
            <span className="text-gray-600">({filtered.length} artículos)</span>
          </div>

          <button
            onClick={() => {
              setCategory("todas");
              setInput("");
            }}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Limpiar filtros
          </button>
        </div> // <- Aca cerramos el bloque del filtro activo
      )}

      {filtered.length === 0 ? (
        <p className="text-gray-500">No se encontraron noticias.</p>
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
