import React from "react";
import { News } from "@/app/types";
import Image from "next/image";
import Script from "next/script";
import { metadataNoticias } from "@/lib/metadata";

export const metadata = metadataNoticias;

interface NoticiaPageProps {
  params: Promise<{ slug: string }>;
}

export default async function NoticiaPage({ params }: NoticiaPageProps) {
  const { slug } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/news/${slug}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    return <div>Error al cargar la noticia</div>;
  }
  const noticia: News | { error: string } = await res.json();

  if ("error" in noticia) {
    return <div>Noticia no encontrada</div>;
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center text-sm text-muted-foreground gap-4">
            <div className="flex items-center gap-1 text-black">
              <span className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-xl text-sm text-black/75">
                {noticia.category}
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-black">
            {noticia.title}
          </h1>
        </div>

        {/* Featured Image */}
        <div className="mb-8">
          <div className="relative w-full overflow-hidden rounded-lg">
            <Image
              src={noticia.image}
              alt={noticia.title}
              width={800}
              height={400}
              priority
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2 text-center text-black/50">
            {noticia.title}
          </p>
        </div>

        {/* Content Section */}
        <div className="prose prose-lg max-w-none">
          <div className="mb-6">
            <p className="text-lg leading-relaxed mb-4 text-black/70">
              {noticia.description}
            </p>
          </div>
        </div>

        {/* Share Section */}
        <div className="border-t pt-6 mt-8 text-black/25">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground text-black/50">
              Publicado por <span className="font-medium">Deinsa Global</span>
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
      ;
    </main>
  );
}
