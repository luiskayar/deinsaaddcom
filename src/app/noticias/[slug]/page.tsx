import React from "react";
import { NewsFirebase } from "@/app/types";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { Metadata } from "next";
import { getNoticiaBySlug } from "@/lib/functions/getNoticiaBySlug";
import { getNews } from "@/lib/functions/getNews";

// Metadata dinámica para cada noticia
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const noticia = await getNoticiaBySlug(slug);
    if (noticia) {
      return {
        title: `${noticia.title} | Deinsa Global`,
        description: noticia.description,
        openGraph: {
          title: noticia.title,
          description: noticia.description,
          images: [noticia.image],
          url: `https://www.deinsa.com/noticias/${slug}`,
        },
        alternates: {
          canonical: `https://www.deinsa.com/noticias/${slug}`,
        },
      };
    }
  } catch (error) {
    console.error('Error generating metadata:', error);
  }
  
  // Fallback metadata
  return {
    title: "Noticia | Deinsa Global",
    description: "Noticias y novedades sobre soluciones de gestión, riesgos y cumplimiento para empresas en Latinoamérica.",
  };
}

// Generar rutas estáticas para las noticias más populares
export async function generateStaticParams() {
  try {
    const noticias = await getNews();
    return noticias.slice(0, 5).map((noticia: NewsFirebase & { id: string }) => ({
      slug: noticia.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function NoticiaPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  
  try {
    const noticia = (await getNoticiaBySlug(slug)) as (NewsFirebase & { id: string }) | null;

    // Validar que la noticia tenga los campos requeridos
    if (!noticia || !noticia.title || !noticia.description || !noticia.image) {
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
          {/* Botón de regreso */}
          <div className="mb-8">
            <Link 
              href="/noticias" 
              className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium transition-colors duration-200"
            >
              <svg 
                className="w-5 h-5 mr-2 transform rotate-180" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Volver a Noticias
            </Link>
          </div>

          {/* Header Section */}
          <div className="mb-12">
            <div className="flex items-center text-sm text-gray-400 gap-4 mb-6">
              <div className="flex items-center gap-1">
                {noticia.category && (
                  <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 border border-orange-500 rounded-xl text-sm text-white font-medium">
                    {noticia.category}
                  </span>
                )}
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
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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
  } catch (error) {
    console.error('Error loading noticia:', error);
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Error al cargar la noticia</h1>
          <p className="text-gray-400">Ocurrió un error inesperado al cargar el contenido.</p>
        </div>
      </div>
    );
  }
}
