"use client";

import { useEffect, useState } from "react";
import { NewsFirebase } from "@/app/types";
//import NewsImage from "@/components/atoms/ImageNote";
import { Search } from "lucide-react";
import ArticlePreview from "@/components/molecules/ArticlePreview";

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

      {filtered.length === 0 ? (
        <p className="text-gray-500">No se encontraron noticias.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((item) => (
            <ArticlePreview
              key={item.id}
              titulo={item.title}
              extracto={item.description}
              link={`/noticias/${item.id}`}
              alt={item.title}
              src={item.image}
            />
          ))}
        </div>
      )}
    </div>
  );
}