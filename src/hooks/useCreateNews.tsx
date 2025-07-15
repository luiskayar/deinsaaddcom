import { useState } from "react";

interface NewsData {
  title: string;
  description: string;
  image: string;
}

export function useCreateNews() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createNews = async (news: NewsData) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: news.title,
          description: news.description,
          image: news.image,
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Error al crear noticia");
      }
      return await res.json();
    } catch (error) {
      console.error("Error al crear noticia:", error);
      setError("Error al crear noticia");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { createNews, loading, error };
}
