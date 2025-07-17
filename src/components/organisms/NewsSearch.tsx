"use client";

import { useEffect, useState } from "react";
import { searchNewsByTitle } from "@/lib/functions/searchNewsByTitle";
import { getNews } from "@/lib/functions/getNews";
import { NewsFirebase } from "@/app/types";
import NewsImage from "@/components/atoms/ImageNote";

type NewsItem = NewsFirebase & { id: string };

export default function NewsSearch() {
  const [input, setInput] = useState('');
  const [news, setNews] = useState<NewsItem[]>([]);
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const loadNews  = async () => {
      const allNews = await getNews();
      setNews(allNews);
      setLoading(false);
    };
    loadNews ();
  }, []);

  const handleSearch = async () => {
    if (!input.trim()) return;

    setLoading(true);
    try {
      const results = await searchNewsByTitle(input, news);
      setNewsList(results);
      setMessage(results.length === 0 ? "No se encontraron noticias." : "");
    } catch (error) {
      console.error("Error buscando noticias:", error);
      setMessage("Hubo un error al buscar.");
    } finally {
      setLoading(false);
    }
  };

  if (!isMounted) return null;
  const displayedNews  = input.trim() ? newsList : news;

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Buscar noticia por título"
          className="border px-2 py-1 rounded w-full text-black"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Buscar
        </button>
      </div>

      {loading ? (
        <p className="text-gray-500">Cargando noticias...</p>
      ) : message ? (
        <p className="text-gray-500">{message}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mt-6">
          {displayedNews.map((newsItem) => (
            <article 
              key={newsItem.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                {newsItem.image?.startsWith("http") ? (
                  <NewsImage
                    src={newsItem.image}
                    alt={newsItem.title ?? "Imagen de noticia"}
                  />
                ) : (
                  <span className="text-gray-400">Sin imagen</span>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{newsItem.title}</h3>
                <p className="text-gray-700 mb-4 flex-1">{newsItem.description}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
