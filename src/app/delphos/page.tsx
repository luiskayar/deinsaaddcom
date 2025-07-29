import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DELPHOS: La Plataforma más Completa para la Gobernanza Corporativa Inteligente',
  description: 'DELPHOS es la solución integral de DEINSA GLOBAL para la gestión institucional, unificando planificación, riesgos, continuidad, cumplimiento y desempeño en un solo ecosistema modular y escalable.',
  keywords: [
    'DELPHOS',
    'gobernanza corporativa',
    'gestión de riesgos',
    'cumplimiento normativo',
    'SaaS',
    'continuidad del negocio',
    'inteligencia artificial',
    'DEINSA GLOBAL',
  ],
  openGraph: {
    title: 'DELPHOS: La Plataforma más Completa para la Gobernanza Corporativa Inteligente',
    description: 'DELPHOS es la solución integral de DEINSA GLOBAL para la gestión institucional, unificando planificación, riesgos, continuidad, cumplimiento y desempeño en un solo ecosistema modular y escalable.',
    url: 'https://www.deinsa.com/delphos',
  },
  alternates: {
    canonical: 'https://www.deinsa.com/delphos',
  },
};


export default function DelphosPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Círculo azul difuminado a la izquierda */}
      <div className="absolute top-32 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-900 via-blue-400 to-transparent opacity-40 blur-[100px] pointer-events-none z-0" />
      {/* Círculo naranja difuminado a la derecha */}
      <div className="absolute top-1/2 -right-60 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-orange-500 via-yellow-400 to-transparent opacity-30 blur-[120px] pointer-events-none z-0" />
      {/* Hexágono decorativo */}
      <img
        src="/images/hexagono.png"
        alt="Hexágono decorativo"
        className="absolute bottom-10 right-10 w-[320px] opacity-20 pointer-events-none z-0"
        draggable="false"
      />
      {/* HERO SECTION */}
      <section className="w-full py-20 text-left px-4 md:px-0 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Delphos</h1>
          {/* Línea naranja degradada */}
          <div className="h-1 w-48 mb-8 bg-gradient-to-r from-orange-500 via-orange-400/60 to-transparent rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
            Plataforma SaaS para la Gobernanza Corporativa y el Cumplimiento Normativo
          </h2>
          <p className="text-white mb-4">
            Transforme su gestión institucional con DELPHOS, la plataforma modular de DEINSA GLOBAL.
          </p>
          <p className="text-white">
            Integra planificación estratégica, gestión de riesgo, continuidad del negocio y cumplimiento normativo en una experiencia SaaS alineada con ISO 27001, 22301, 9001, 31000, COBIT 2019 e ITIL.
          </p>
        </div>
      </section>

      {/* Soluciones Modulares */}
      <section className="py-16 relative z-10">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
            <span className="text-orange-500">Soluciones Modulares</span> <span className="text-white">para la Gobernanza Corporativa</span>
          </h2>
          <div className="flex flex-col gap-8">
            {/* Módulo 1: Continuum */}
            <div className="flex items-start gap-6 bg-transparent border-b border-gray-700 pb-6">
              <img src="/images/continuum.png" alt="Delphos Continuum" className="w-16 h-16 object-contain flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <strong className="text-lg text-white">Delphos Continuum :</strong>
                  <span className="text-white font-semibold">Gestión de Riesgos y Continuidad del Negocio</span>
                </div>
                <p className="text-gray-300 text-sm mt-1">Software de gestión de riesgo integral, protegiendo su organización con anticipación y asegurando la Continuidad del negocio. Es clave para un robusto Sistema de control interno institucional…</p>
              </div>
            </div>
            {/* Módulo 2: Net */}
            <div className="flex items-start gap-6 bg-transparent border-b border-gray-700 pb-6">
              <img src="/images/net.png" alt="Delphos Net" className="w-16 h-16 object-contain flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <strong className="text-lg text-white">Delphos Net :</strong>
                  <span className="text-white font-semibold">Planificación Estratégica Institucional y Operativa</span>
                </div>
                <p className="text-gray-300 text-sm mt-1">Delphos Net empodera la Planificación estratégica institucional, permitiendo definir gestionar y alcanzar su futuro con precisión. Es la Plataforma para seguimiento de acuerdos y planes de acción…</p>
              </div>
            </div>
            {/* Módulo 3: Elite */}
            <div className="flex items-start gap-6 bg-transparent border-b border-gray-700 pb-6">
              <img src="/images/elite.png" alt="Delphos Elite" className="w-16 h-16 object-contain flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <strong className="text-lg text-white">Delphos Elite :</strong>
                  <span className="text-white font-semibold">Gestión del Desempeño Institucional</span>
                </div>
                <p className="text-gray-300 text-sm mt-1">Delphos Elite potencia el capital humano alineando objetivos personales con la estrategia organizacional y fomentando el desarrollo continuo, cumpliendo con la Ley 9635 en Costa Rica…</p>
              </div>
            </div>
            {/* Módulo 4: BI */}
            <div className="flex items-start gap-6 bg-transparent border-b border-gray-700 pb-6">
              <img src="/images/bi.png" alt="Delphos BI" className="w-16 h-16 object-contain flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <strong className="text-lg text-white">Delphos BI :</strong>
                  <span className="text-white font-semibold">Inteligencia de Datos y Reportes Gerenciales</span>
                </div>
                <p className="text-gray-300 text-sm mt-1">Delphos BI transforma datos complejos en decisiones estratégicas, ofreciendo visibilidad completa y control total de su organización a través de una Plataforma para gestión de TI y sistemas de información gerencial…</p>
              </div>
            </div>
            {/* Módulo 5: Mobile */}
            <div className="flex items-start gap-6 bg-transparent border-b border-gray-700 pb-6">
              <img src="/images/net.png" alt="Delphos Mobile" className="w-16 h-16 object-contain flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <strong className="text-lg text-white">Delphos Mobile :</strong>
                  <span className="text-white font-semibold">Capacidades Transversales</span>
                </div>
                <p className="text-gray-300 text-sm mt-1">Además de sus módulos principales, DELPHOS se complementa con herramientas que garantizan una experiencia fluida y una inteligencia accionable: Delphos Mobile…</p>
              </div>
            </div>
            {/* Módulo 6: Funciona */}
            <div className="flex items-start gap-6 bg-transparent border-b border-gray-700 pb-6">
              <img src="/images/funciona.png" alt="Delphos Funciona" className="w-16 h-16 object-contain flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <strong className="text-lg text-white">Delphos Funcion@ :</strong>
                  <span className="text-white font-semibold">Funcionalidades similares a una hoja de cálculo electrónica, pero con mayor seguridad.</span>
                </div>
                <p className="text-gray-300 text-sm mt-1">Superación de las limitaciones habituales de las hojas de cálculo tradicionales.</p>
              </div>
            </div>
            {/* Módulo 7: Portal */}
            <div className="flex items-start gap-6 bg-transparent border-b border-gray-700 pb-6">
              <img src="/images/portal.png" alt="Delphos Portal" className="w-16 h-16 object-contain flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <strong className="text-lg text-white">Delphos Portal :</strong>
                  <span className="text-white font-semibold">Optimización de la planificación estratégica</span>
                </div>
                <p className="text-gray-300 text-sm mt-1">Planificación de proyectos, presupuestos y operaciones.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className=" py-16 relative z-10">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            ¿Listo para <span className="bg-orange-500 text-white px-2 rounded">transformar</span> su gobernanza?
          </h2>
          <p className="text-gray-200 mb-8">Únase a más de 500 instituciones que ya confían en DEINSA.</p>
          <div className="flex flex-col items-center">
            <a
              href="/contacto"
              className="flex items-center gap-2 text-white font-semibold uppercase tracking-wide px-6 py-3 border-b border-gray-400 hover:text-orange-500 transition-colors duration-200"
            >
              <span className="text-orange-500 text-xl font-bold">+</span>
              <span className="text-xs md:text-sm">Solicitar demostración</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
} 