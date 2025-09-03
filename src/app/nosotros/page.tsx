// app/nosotros/page.tsx
import React from 'react';
import { Metadata } from 'next';
import ClientAlianzasGrid from './ClientAlianzasGrid';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Deinsa Global | Líderes en Gobernanza Corporativa y Continuidad de Negocio.',
    description: 'Somos Deinsa Global, creadores de Delphos. Expertos en Gobernanza Corporativa, Continuidad del Negocio, Seguridad de la Información y Gestión de Proyectos. Implementamos BSC, GpRD, COBIT 2019, ISO 27001.',
    keywords: [
      'Deinsa Global',
      'quiénes somos',
      'misión visión valores',
      'gobernanza corporativa',
      'gestión de riesgos',
      'cumplimiento normativo',
      '35 años experiencia',
      'empresa costarricense',
      'software GRC',
      'DELPHOS',
      'valores empresariales',
      'trayectoria profesional'
    ],
    openGraph: {
      title: 'Deinsa Global – Quiénes Somos y Nuestros Valores',
      description: 'Descubre la misión, visión y valores de Deinsa Global. 35 años de experiencia en gobernanza corporativa, riesgos y cumplimiento normativo',
      url: 'https://www.deinsa.com/nosotros',
      type: 'website',
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
        Desde la década de los 90  hemos acompañado la evolución institucional de América Latina con soluciones tecnológicas que aseguran gobernanza efectiva, gestión de riesgos integrada y cumplimiento regulatorio automatizado.
        </p>
        <p className="text-white/80 mb-12 max-w-2xl">
        Con presencia en 4 continentes y más de 500 clientes, lideramos procesos de transformación institucional sostenibles, alineados con normativas como SEVRI, ISO 27001, ISO 22301 y COSO ERM
        </p>
        {/* Bloques Misión, Visión, Valores */}
        <div className="space-y-12">
          {/* Misión */}
          <div className="flex flex-col md:flex-row md:items-start md:gap-12 border-t border-b border-orange-500 py-8">
            <div className="md:w-1/4 mb-4 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFA726]">Misión</h2>
            </div>
            <div className="md:w-3/4 text-white/90 text-xl md:text-2xl">
              Desarrollar y ofrecer soluciones de software de vanguardia, como la plataforma DELPHOS, que empoderen a nuestros clientes para optimizar sus procesos de gobernanza, mejorar la toma de decisiones, garantizar el cumplimiento normativo y alcanzar sus objetivos estratégicos de manera eficiente y transparente.
            </div>
          </div>
          {/* Visión */}
          <div className="flex flex-col md:flex-row md:items-start md:gap-12 border-b border-orange-500 pb-8">
            <div className="md:w-1/4 mb-4 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFA726]">Visión</h2>
            </div>
            <div className="md:w-3/4 text-white/90 text-xl md:text-2xl">
              Ser el proveedor líder en Latinoamérica de soluciones de software innovadoras y confiables para la Gobernanza Corporativa, impulsando la transformación digital y el éxito sostenible de nuestros clientes en los sectores público y financiero.
            </div>
          </div>
          {/* Valores */}
          <div className="flex flex-col md:flex-row md:items-start md:gap-12">
            <div className="md:w-1/4 mb-4 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFA726]">Valores</h2>
            </div>
            <div className="md:w-3/4">
              <div className="space-y-6">
                {/* Valor 1: Integridad */}
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-white mb-2">1. Integridad</h3>
                  <p className="text-white/80 text-base leading-relaxed">
                    Actuamos con honestidad, ética y transparencia en todas nuestras interacciones, manteniendo los más altos estándares de conducta empresarial y profesional.
                  </p>
                </div>
                
                {/* Valor 2: Excelencia */}
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-white mb-2">2. Excelencia</h3>
                  <p className="text-white/80 text-base leading-relaxed">
                    Buscamos la mejora continua en todo lo que hacemos, ofreciendo productos y servicios de la más alta calidad que superen las expectativas de nuestros clientes.
                  </p>
                </div>
                
                {/* Valor 3: Innovación */}
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-white mb-2">3. Innovación</h3>
                  <p className="text-white/80 text-base leading-relaxed">
                    Nos esforzamos por ser pioneros en el desarrollo de soluciones tecnológicas de vanguardia, anticipándonos a las necesidades del mercado y aprovechando las últimas tendencias en tecnología y gobernanza corporativa.
                  </p>
                </div>
                
                {/* Valor 4: Compromiso */}
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-white mb-2">4. Compromiso</h3>
                  <p className="text-white/80 text-base leading-relaxed">
                    Estamos comprometidos con el éxito de nuestros clientes, brindando un servicio al cliente excepcional y construyendo relaciones duraderas basadas en la confianza y el respeto mutuo.
                  </p>
                </div>
                
                {/* Valor 5: Trabajo en Equipo */}
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-white mb-2">5. Trabajo en Equipo</h3>
                  <p className="text-white/80 text-base leading-relaxed">
                    Fomentamos una cultura de colaboración y trabajo en equipo, valorando la diversidad de ideas y perspectivas, y trabajando juntos para alcanzar nuestros objetivos comunes.
                  </p>
                </div>
                
                {/* Valor 6: Seguridad */}
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-white mb-2">6. Seguridad</h3>
                  <p className="text-white/80 text-base leading-relaxed">
                    Priorizamos la seguridad de la información en todos los aspectos de nuestro negocio, protegiendo los datos de nuestros clientes y garantizando la confidencialidad, integridad y disponibilidad de la información.
                  </p>
                </div>
                
                {/* Valor 7: Responsabilidad Social */}
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-white mb-2">7. Responsabilidad Social</h3>
                  <p className="text-white/80 text-base leading-relaxed">
                    Nos comprometemos a contribuir al desarrollo sostenible de la sociedad y el medio ambiente, actuando de manera responsable y ética en todas nuestras operaciones y decisiones.
                  </p>
                </div>
              </div>
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
