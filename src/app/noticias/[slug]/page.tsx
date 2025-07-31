import React from "react";
import { News } from "@/app/types";
import Image from "next/image";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noticias | Deinsa Global",
  description: "Noticias y novedades sobre soluciones de gestión, riesgos y cumplimiento para empresas en Latinoamérica.",
  openGraph: {
    title: "Noticias | Deinsa Global",
    description: "Noticias y novedades sobre soluciones de gestión, riesgos y cumplimiento para empresas en Latinoamérica.",
    url: "https://www.deinsa.com/noticias",
  },
  alternates: {
    canonical: "https://www.deinsa.com/noticias",
  },
};

export default async function NoticiaPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/news/${slug}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Error al cargar la noticia</h1>
          <p className="text-gray-400">No se pudo cargar el contenido solicitado.</p>
        </div>
      </div>
    );
  }
  const noticia: News | { error: string } = await res.json();

  if ("error" in noticia) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Noticia no encontrada</h1>
          <p className="text-gray-400">La noticia que buscas no existe o ha sido removida.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center text-sm text-gray-400 gap-4 mb-6">
            <div className="flex items-center gap-1">
              <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 border border-orange-500 rounded-xl text-sm text-white font-medium">
                {noticia.category}
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
            {noticia.title}
          </h1>
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={noticia.image}
              alt={noticia.title}
              width={800}
              height={400}
              priority
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          <p className="text-sm text-gray-400 mt-4 text-center">
            {noticia.title}
          </p>
        </div>

        {/* Content Section */}
        <div className="prose prose-lg max-w-none">
          <div className="mb-8">
            <p className="text-xl leading-relaxed mb-6 text-gray-300">
              {noticia.description}
            </p>
          </div>
        </div>

        {/* Share Section */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-400">
              Publicado por <span className="font-medium text-orange-400">Deinsa Global</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Compartir:</span>
              <div className="flex gap-2">
                <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </button>
                <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script
        id="noticias-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Noticias | Deinsa Global",
            description:
              "Noticias y novedades sobre soluciones de gestión, riesgos y cumplimiento para empresas en Latinoamérica.",
            publisher: {
              "@type": "Organization",
              name: "Deinsa Global",
              url: "https://www.deinsa.com",
            },
          }),
        }}
      />
    </main>
  );
}
