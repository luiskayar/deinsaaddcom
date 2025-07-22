import React from "react";
import { News } from "@/app/types";
import Image from "next/image";

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
    <div className="min-h-screen bg-white">
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
    </div>
  );
}

//Borrar comentario al finalizar la tarea
/** Software de gestión de riesgos empresariales (ERM) para una visión integral.
* Plataforma de gobernanza corporativa que asegura el cumplimiento.
* Software GRC (Gobernanza, Riesgo y Cumplimiento) para organizaciones modernas.
* Soluciones de inteligencia estratégica que impulsan la toma de decisiones.
* Sistema de gestión integrado para optimizar tus operaciones.
* Software de planificación estratégica que alinea objetivos y acciones.            
* Herramienta para Balanced Scorecard (BSC) que mide tu desempeño.
* Gestión de planes anuales operativos (PAO) eficiente.
* Software gestión de riesgos ISO 31000 para una robusta administración de peligros.
* Plataforma de gestión de hallazgos de auditoría centralizada.
* Software para plan de continuidad de negocio (BCP) que protege tu operación.
* Herramienta para análisis de impacto en el negocio (BIA) esencial.
* Software para gobernanza de TI que optimiza tu infraestructura tecnológica.
* Plataforma para gestión de servicios ITIL mejorando la calidad.
* Software de gestión del desempeño para el capital humano.
* Automatiza la generación de planes de acción con IA.
* SaaS en la nube para accesibilidad y escalabilidad.
* Software con inteligencia artificial generativa para análisis avanzados.
* Gobernanza corporativa en Costa Rica con soluciones locales.
* Software GRC para el sector público en Latinoamérica, adaptado a sus necesidades.*/