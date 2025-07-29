// app/nosotros/page.tsx
import React from 'react';
import { Metadata } from 'next';
import ClientAlianzasGrid from './ClientAlianzasGrid';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Nosotros | DEINSA Global - 35+ Años de Experiencia en Gobernanza Corporativa',
    description: 'DEINSA Global: Empresa costarricense con 35+ años de trayectoria en software de gobernanza corporativa. Desarrolladores de DELPHOS, plataforma líder en gestión de riesgos, cumplimiento normativo y continuidad del negocio.',
    keywords: [
      'DEINSA Global',
      'empresa costarricense',
      'software de gobernanza',
      'gestión de riesgos',
      'cumplimiento normativo',
      'continuidad del negocio',
      'Delphos SaaS',
      '35 años experiencia',
      'gestión pública',
      'instituciones financieras',
      'casos de éxito',
      'alianzas internacionales',
      'Banco de Costa Rica',
      'Presidencia Costa Rica',
      'MIDEPLAN',
      'INAPA República Dominicana',
      'Buró de Crédito México',
      'Dun & Bradstreet'
    ],
    openGraph: {
      title: 'Nosotros | DEINSA Global - 35+ Años de Experiencia',
      description: 'Conozca nuestra trayectoria de 35+ años desarrollando software de gobernanza corporativa. Casos de éxito en instituciones públicas y financieras.',
      url: 'https://www.deinsa.com/nosotros',
    },
    alternates: {
      canonical: 'https://www.deinsa.com/nosotros',
    },
  };
};

{/*
const alianzas = [
  { pais: 'Costa Rica', codigo: 'cr' },
  { pais: 'Panamá', codigo: 'pa' },
  { pais: 'México', codigo: 'mx' },
  { pais: 'Guatemala', codigo: 'gt' },
  { pais: 'Honduras', codigo: 'hn' },
  { pais: 'El Salvador', codigo: 'sv' },
];
*/}
export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Hexágono decorativo grande */}
      <img
        src="/images/hexagono.png"
        alt="Hexágono decorativo"
        className="absolute top-0 right-0 w-[500px] md:w-[700px] opacity-40 pointer-events-none z-0"
        draggable="false"
      />
      {/* Bola naranja difuminada inferior izquierda */}
      <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#FFA726] via-orange-500 to-transparent opacity-30 blur-3xl pointer-events-none z-0" />
      {/* Bola naranja difuminada superior izquierda */}
      <div className="absolute -top-32 -left-32 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#FFA726] via-orange-500 to-transparent opacity-20 blur-2xl pointer-events-none z-0" />
      <section className="max-w-5xl mx-auto px-6 py-20 relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Más de <span className="text-orange-500">35 años</span> de <span className="text-orange-500">innovación</span> constante
        </h1>
        <p className="text-white/80 mb-12 max-w-2xl">
          Somos una empresa costarricense con implementaciones en <span className="font-bold">4 continentes</span>. Nuestra plataforma DELPHOS fortalece la <span className="font-bold">gestión pública y financiera</span> con <span className="font-bold">soluciones integrales</span> en Gobernanza Corporativa.
        </p>
        {/* Bloques Misión, Visión, Valores */}
        <div className="space-y-12">
          {/* Misión */}
          <div className="flex flex-col md:flex-row md:items-start md:gap-12 border-t border-b border-orange-500 py-8">
            <div className="md:w-1/4 mb-4 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFA726]">Misión</h2>
            </div>
            <div className="md:w-3/4 text-white/90 text-xl md:text-2xl">
              Ofrecemos soluciones gerenciales innovadoras para el sector público, privado y financiero, impulsando la eficiencia operativa, relaciones duraderas y un entorno de excelencia.
            </div>
          </div>
          {/* Visión */}
          <div className="flex flex-col md:flex-row md:items-start md:gap-12 border-b border-orange-500 pb-8">
            <div className="md:w-1/4 mb-4 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFA726]">Visión</h2>
            </div>
            <div className="md:w-3/4 text-white/90 text-xl md:text-2xl">
              Buscamos liderar globalmente en soluciones gerenciales, impulsando la transformación y el éxito sostenible de nuestros clientes con innovación, excelencia y colaboración estratégica.
            </div>
          </div>
          {/* Valores */}
          <div className="flex flex-col md:flex-row md:items-start md:gap-12">
            <div className="md:w-1/4 mb-4 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFA726]">Valores</h2>
            </div>
            <div className="md:w-3/4 text-white/90 text-xl md:text-2xl grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2">
              <span>• Excelencia</span>
              <span>• Integridad</span>
              <span>• Innovación</span>
              <span>• Compromiso</span>
              <span>• Colaboración</span>
              <span>• Agilidad</span>
            </div>
          </div>
        </div>
      </section>
      {/* Alianzas Internacionales */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Alianzas Internacionales</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Contamos con una red de aliados regionales para implementaciones locales y soporte especializado
            </p>
          </div>
          <ClientAlianzasGrid />
        </div>
      </section>
    </div>
  );
}
