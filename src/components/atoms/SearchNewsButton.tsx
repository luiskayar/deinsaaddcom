"use client";

import { useEffect, useState } from "react";
import { buscarNoticiasPorTitulo } from "@/lib/functions/findNoticias";
import { getNoticias } from "@/lib/functions/getNoticias";
import { NewsFirebase } from "@/app/types";
import Image from "next/image";

type NewsItem = NewsFirebase & { id: string };

export default function SearchNewsButton() {
  const [input, setInput] = useState("");
  const [noticias, setNoticias] = useState<NewsItem[]>([]);
  const [cargando, setCargando] = useState(true);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const cargarNoticias = async () => {
      const todas = await getNoticias();
      setNoticias(todas);
      setCargando(false);
    };
    cargarNoticias();
  }, []);

  const handleSearch = async () => {
    if (!input.trim()) return;

    setCargando(true);
    try {
      const resultados = await buscarNoticiasPorTitulo(input);
      setNoticias(resultados);
      setMensaje(resultados.length === 0 ? "No se encontraron noticias." : "");
    } catch (error) {
      console.error("Error buscando noticias:", error);
      setMensaje("Hubo un error al buscar.");
    } finally {
      setCargando(false);
    }
  };

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

      {cargando ? (
        <p className="text-gray-500">Cargando noticias...</p>
      ) : mensaje ? (
        <p className="text-gray-500">{mensaje}</p>
      ) : (
        <ul className="space-y-4">
          {noticias.map((noticia) => (
            <li key={noticia.id} className="border p-4 rounded shadow text-black bg-white">
              <strong className="text-xl">{noticia.title}</strong>
              <p className="mt-2">{noticia.description}</p>
              {noticia.image?.startsWith("http") && (
                <Image
                  src={noticia.image}
                  alt={noticia.title ?? "Imagen de noticia"}
                  width={560}
                  height={620}
                  className="w-full h-auto mt-2 rounded"
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
