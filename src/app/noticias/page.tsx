import React from 'react';
import { Metadata } from 'next';
import NoticiasClient from './NoticiasClient';

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

interface Noticia {
  id: string;
  title: string;
  description: string;
  image: string;
  category?: string;
  slug: string;
}

export default async function NoticiasPage() {
  const res = await fetch('http://localhost:3000/api/news', { cache: 'no-store' });
  if (!res.ok) throw new Error('Error al cargar las noticias');

  const raw = await res.json() as Array<Record<string, string>>;

  const noticias: Noticia[] = raw.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    image: item.image,
    category: item.category,
    slug: item.slug
  }));

  return <NoticiasClient noticiasIniciales={noticias} />;
}