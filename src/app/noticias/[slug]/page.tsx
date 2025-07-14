import { getNoticiaBySlug } from "@/lib/getNoticias";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import React from "react";

interface Noticia {
  id: string;
  titulo: string;
  resumen: string;
  imagenUrl: string;
  fecha: Date | string | number;
  slug: string;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const noticia = (await getNoticiaBySlug(params.slug)) as Noticia | null;
  if (!noticia) return {};
  return {
    title: noticia.titulo,
    description: noticia.resumen,
    openGraph: {
      title: noticia.titulo,
      description: noticia.resumen,
      images: noticia.imagenUrl ? [noticia.imagenUrl] : [],
    },
  };
}

export default async function NoticiaPage({ params }: { params: { slug: string } }) {
  const noticia = (await getNoticiaBySlug(params.slug)) as Noticia | null;
  if (!noticia) return notFound();

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4 max-w-3xl bg-white rounded-xl shadow-md p-8">
        <img
          src={noticia.imagenUrl}
          alt={noticia.titulo}
          className="w-full h-64 object-cover rounded-lg mb-6"
          loading="lazy"
        />
        <h1 className="text-3xl font-bold text-blue-800 mb-4">{noticia.titulo}</h1>
        <p className="text-gray-500 text-sm mb-4">
          {noticia.fecha ? new Date(noticia.fecha as string).toLocaleDateString() : null}
        </p>
        <p className="text-lg text-gray-700 mb-8">{noticia.resumen}</p>
        {/* Aquí podrías agregar más contenido si lo tienes, como cuerpo de la noticia */}
      </div>
    </div>
  );
} 