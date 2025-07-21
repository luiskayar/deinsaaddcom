
import React from 'react';
import TituloSeccion from '@/components/comunes/TituloSeccion';
import { Metadata } from 'next';
import { getNews } from "@/lib/functions/getNews";
import NewsSearch from "@/components/organisms/NewsSearch";

//import { ArticlePreview } from '@/components/index';

{/*
  const ejemplo = {
    id: 1,
    titulo: 'Título de prueba para la molécula',
    extracto:  'Este es un extracto corto que muestra cómo se verá el texto.',
    link:      '/noticias/prueba-molecula',
    alt:    'Imagen de prueba para ArticlePreview',
    // Si tu molécula acepta también src, inclúyelo:
    src:    '/placeholder-news.jpg',
  };*/}

export const metadata: Metadata = {
  title: 'Blog y Noticias DEINSA GLOBAL | Gobernanza, Riesgos y Cumplimiento Normativo',
  description: 'Manténgase informado con el blog de DEINSA GLOBAL. Artículos sobre Software de gestión de riesgos, Planificación estratégica institucional, Gestión del desempeño institucional, Normas técnicas del MICITT y Ley 9635 para Costa Rica.',
  keywords: [
    'blog DEINSA GLOBAL',
    'noticias gobernanza',
    'gestión de riesgos',
    'cumplimiento normativo',
    'planificación estratégica',
    'desempeño institucional',
    'normas MICITT',
    'Ley 9635',
    'sector público',
    'sector financiero',
  ],
  openGraph: {
    title: 'Blog y Noticias DEINSA GLOBAL | Gobernanza, Riesgos y Cumplimiento Normativo',
    description: 'Manténgase informado con el blog de DEINSA GLOBAL. Artículos sobre Software de gestión de riesgos, Planificación estratégica institucional, Gestión del desempeño institucional, Normas técnicas del MICITT y Ley 9635 para Costa Rica.',
    url: 'https://www.deinsa.com/noticias',
  },
  alternates: {
    canonical: 'https://www.deinsa.com/noticias',
  },
};

{/*
const articulos = [
  {
    id: 0,
    titulo: 'Cómo DELPHOS Facilita el Cumplimiento de las Normas Técnicas del MICITT en Costa Rica',
    extracto: 'Descubra cómo nuestra Solución SaaS ayuda a las instituciones públicas a alinear sus procesos y su Sistema de control interno institucional con las directrices del MICITT, garantizando eficiencia y seguridad.',
    link: '/noticias/delphos-normas-micitt',
    imgAlt: 'Imagen representativa del artículo: Cómo DELPHOS Facilita el Cumplimiento de las Normas Técnicas del MICITT en Costa Rica',
  },
  {
    id: 1,
    titulo: 'Cómo DELPHOS Elite Cumple con la Ley 9635 para la Gestión del Desempeño Institucional en Costa Rica',
    extracto: 'Explore cómo DELPHOS Elite optimiza la Gestión del desempeño institucional en el sector público, asegurando la aplicación correcta de la Ley 9635 y potenciando el capital humano de su organización.',
    link: '/noticias/delphos-elite-ley-9635',
    imgAlt: 'Imagen representativa del artículo: Cómo DELPHOS Elite Cumple con la Ley 9635 para la Gestión del Desempeño Institucional en Costa Rica',
  },
  {
    id: 2,
    titulo: 'SEVRI con DELPHOS Continuum: La Clave para una Gestión de Riesgos Proactiva',
    extracto: 'Implemente un Sistema de Evaluación de Riesgo Institucional (SEVRI) robusto con DELPHOS Continuum. Conozca cómo nuestra herramienta modular fortalece la Continuidad del negocio y protege sus activos.',
    link: '/noticias/sevri-delphos-continuum',
    imgAlt: 'Imagen representativa del artículo: SEVRI con DELPHOS Continuum: La Clave para una Gestión de Riesgos Proactiva',
  },
  {
    id: 3,
    titulo: 'Planificación Estratégica Institucional con DELPHOS Net: Visión y Ejecución',
    extracto: 'Transforme su visión en realidad. DELPHOS Net es el software para planes estratégicos y operativos que le permite definir, monitorear y alcanzar sus objetivos con precisión, fortaleciendo la gobernanza corporativa.',
    link: '/noticias/planificacion-estrategica-delphos-net',
    imgAlt: 'Imagen representativa del artículo: Planificación Estratégica Institucional con DELPHOS Net: Visión y Ejecución',
  },
];*/}

const categorias = [
  'Gestión de Riesgos',
  'Cumplimiento Normativo',
  'Planificación Estratégica',
  'Gestión del Desempeño',
  'Tecnología y SaaS',
  'Casos de Éxito',
  'Sector Público',
  'Sector Financiero',
];

export default async function NoticiasPage() {

  const allNews = await getNews().catch(() => null);
  
  if (!allNews || allNews.length === 0) {
    return (
      <p className="text-center text-red-500">
        Ocurrió un error al cargar las noticias.
      </p>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Introducción al Blog */}
        <TituloSeccion titulo="Noticias y Análisis: Liderando la Gobernanza Inteligente y la Gestión de Riesgos" nivel={1} />
        <p className="text-lg text-gray-700 mb-10 text-center">
          Explore nuestro blog para mantenerse al día con las últimas tendencias, análisis de expertos y casos de éxito en Gobernanza Corporativa, Software de gestión de riesgos, y transformación digital para la gestión pública y el sector financiero.
        </p>

        {/* Artículos Destacados */}
        <TituloSeccion titulo="Artículos Relevantes para el Sector Público y Financiero" nivel={2} />
        <NewsSearch allNews={allNews} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mt-6"></div>           

        {/* Categorías del Blog */}
        <TituloSeccion titulo="Explorar por Categoría" nivel={2} />
        <ul className="flex flex-wrap gap-4 mb-12 mt-6">
          {categorias.map((cat, idx) => (
            <li key={idx} className="bg-white border border-blue-200 rounded-full px-5 py-2 text-blue-700 font-medium shadow-sm hover:bg-blue-50 transition-colors cursor-pointer">
              {cat}
            </li>
          ))}
        </ul>

        {/* Suscríbase a Nuestro Newsletter (CTA) */}
        <div className="bg-gradient-to-r from-blue-100 via-white to-blue-50 rounded-xl p-8 shadow flex flex-col items-center">
          <TituloSeccion titulo="Manténgase Informado con DEINSA GLOBAL" nivel={2} />
          <p className="text-gray-700 text-lg max-w-2xl text-center mb-4">
            Reciba las últimas noticias, análisis y actualizaciones sobre gobernanza inteligente, software de gestión de riesgos y soluciones para instituciones públicas directamente en su bandeja de entrada.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 w-full max-w-xl justify-center">
            <input type="email" placeholder="Su correo electrónico" required className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-md transition-colors">Suscribirse</button>
          </form>
        </div>
      </div>
    </div>
  );
} 