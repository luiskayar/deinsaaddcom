"use client";

import { useState } from "react";
import { buscarNoticiasPorTitulo } from "@/lib/functions/findNoticias";
import { NewsFirebase } from "../../app/types";
import Image from "next/image";

type NewsItem = NewsFirebase & { id: string };

export default function SearchNewsButton() {
  const [input, setInput] = useState("");
  const [resultados, setResultados] = useState<NewsItem[]>([]);

  const handleSearch = async () => {
    if (!input.trim()) return;
    try {
      const noticias = await buscarNoticiasPorTitulo(input);
      setResultados(noticias);
    } catch (error) {
      console.error("Error buscando noticias:", error);
    }
  };

  return (
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

      {resultados.length > 0 && (
        <ul className="mt-4 space-y-1">
          {resultados.map((noticia) => (
            <li key={noticia.id} className="border p-2 rounded text-black">
              <strong>{noticia.title}</strong>
              <p>{noticia.description}</p>
              {noticia.image?.startsWith("http") && (
                <Image
                  src={noticia.image}
                  alt={noticia.title ?? "Imagen de noticia"}
                  width={560}
                  height={620}
                  className="w-full h-auto mt-2"
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
