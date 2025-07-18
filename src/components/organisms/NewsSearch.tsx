"use client";

import { useEffect, useState } from "react";
import { NewsFirebase } from "@/app/types";
import NewsImage from "@/components/atoms/ImageNote";

type NewsItem = NewsFirebase & { id: string };

interface Props {
  allNews: NewsItem[];
}

export default function NewsSearch({ allNews }: Props) {
  const [input, setInput] = useState("");
  const [filtered, setFiltered] = useState<NewsItem[]>(allNews);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const term = input.trim().toLowerCase();
    if (!term) {
      setFiltered(allNews);
    } else {
      setFiltered(
        allNews.filter(
          (n) =>
            n.title.toLowerCase().includes(term) ||
            n.description.toLowerCase().includes(term)
        )
      );
    }
  }, [input, allNews]);

  if (!mounted) return null;

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Buscar por título o descripción…"
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {filtered.length === 0 ? (
        <p className="text-gray-500">No se encontraron noticias.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                {item.image?.startsWith("http") ? (
                  <NewsImage src={item.image} alt={item.title} />
                ) : (
                  <span className="text-gray-400">Sin imagen</span>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 flex-1">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}