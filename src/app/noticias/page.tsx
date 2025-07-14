import React from "react";
import TituloSeccion from "@/components/comunes/TituloSeccion";
import Link from "next/link";
import { getNoticias } from "@/lib/getNoticias";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noticias | Deinsa",
  description: "Conozca las últimas novedades, proyectos y eventos de Deinsa Global.",
  openGraph: {
    title: "Noticias | Deinsa",
    description: "Conozca las últimas novedades, proyectos y eventos de Deinsa Global.",
    url: "https://www.deinsa.com/noticias",
  },
  alternates: {
    canonical: "https://www.deinsa.com/noticias",
  },
};

interface Noticia {
  id: string;
  titulo: string;
  resumen: string;
  imagenUrl: string;
  fecha: Date | string | number;
  slug: string;
}

export default async function NoticiasPage() {
  const noticias = (await getNoticias()) as Noticia[];

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Introducción al Blog */}
        <TituloSeccion titulo="Noticias y Análisis: Liderando la Gobernanza Inteligente y la Gestión de Riesgos" nivel={1} />
        <p className="text-lg text-gray-700 mb-10 text-center">
          Explore nuestro blog para mantenerse al día con las últimas tendencias, análisis de expertos y casos de éxito en Gobernanza Corporativa, Software de gestión de riesgos, y transformación digital para la gestión pública y el sector financiero.
        </p>

        {/* Noticias dinámicas */}
        <TituloSeccion titulo="Últimas Noticias" nivel={2} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mt-6">
          {noticias.map((noticia) => (
            <article key={noticia.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <img
                  src={noticia.imagenUrl}
                  alt={noticia.titulo}
                  className="object-cover h-full w-full"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{noticia.titulo}</h3>
                <p className="text-gray-700 mb-4 flex-1">{noticia.resumen}</p>
                <Link href={`/noticias/${noticia.slug}`} legacyBehavior>
                  <a className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg transition-colors">Leer más</a>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 