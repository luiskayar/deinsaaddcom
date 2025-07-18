import React from "react";
import { News } from "@/app/types";
import Image from "next/image";

interface NoticiaPageProps {
  params: Promise<{ slug: string }>;
}

export default async function NoticiaPage({ params }:NoticiaPageProps) {
  const { slug } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return <div>Error al cargar la noticia</div>;
  }
  const noticia: News | { error: string } = await res.json();

  if ("error" in noticia) {
    return <div>Noticia no encontrada</div>;
  }

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-start py-12 px-8 sm:px-12">
      <div className = "w-auto">
        <h1 className="text-4xl font-bold text-black text-center mb-2">
          {noticia.title}
        </h1>
        <hr className="w-full border-gray-300 mb-8 mx-auto" />
      </div>

      <div className="w-full flex justify-center mb-8">
        <Image
          src={noticia.image}
          alt={noticia.title}
          className="rounded-lg object-cover"
          width={800}
          height={400}
        />
      </div>
      <p className="text-lg text-[#423F3D] leading-relaxed max-w-5xl text-center">
        {noticia.description}
      </p>
    </main>
  );
}
