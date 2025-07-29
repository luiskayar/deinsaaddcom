import React from 'react';
import { Metadata } from 'next';
import { FaGlobe, FaChartLine, FaShieldAlt, FaCogs, FaSearch, FaRocket, FaChalkboardTeacher, FaHandsHelping } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Consultoría GRC, Gestión de Riesgos y Soluciones a Medida | DEINSA',
  description: 'Consultoría en GRC, software de gestión de riesgos, planificación estratégica, desempeño institucional, continuidad del negocio y normas técnicas del MICITT. DEINSA, su socio estratégico en gobernanza corporativa.',
  keywords: [
    'Consultoría GRC',
    'Software de gestión de riesgos',
    'Planificación estratégica institucional',
    'Gestión del desempeño institucional',
    'Continuidad del negocio',
    'Normas técnicas MICITT',
    'Gobernanza corporativa',
    'DEINSA',
    'DELPHOS',
    'ISO 31000',
    'ISO 22301',
    'ISO 27001',
    'COSO ERM',
    'SEVRI',
  ],
  openGraph: {
    title: 'Consultoría GRC, Gestión de Riesgos y Soluciones a Medida',
    description: 'Consultoría y soluciones en gobernanza, riesgos y cumplimiento para instituciones públicas y privadas.',
    url: 'https://www.deinsa.com/servicios',
  },
  alternates: {
    canonical: 'https://www.deinsa.com/servicios',
  },
};





export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* HERO DEINSA GRC */}
      <section className="w-full min-h-[380px] flex items-center bg-black relative">
        {/* Fondo decorativo telaraña */}
        <img
          src="/images/telaraña.jpg"
          alt="Fondo telaraña"
          className="absolute top-0 right-0 h-full w-auto max-w-none opacity-40 z-0 pointer-events-none"
          draggable="false"
        />
        <div className="max-w-3xl px-8 py-20 relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="text-orange-500">DEINSA:</span><br />
            <span className="text-white">Su Socio Estratégico en<br />Gobernanza Coorporativa</span>
          </h1>
          <p className="text-white text-lg mb-12 max-w-xl">
            Transformamos la gestión institucional con soluciones innovadoras en <b>GRC</b>, riesgo y cumplimiento.
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-16">
            Consultoría Expertos en <span className="text-orange-500">GRC</span>
          </h2>
        </div>
      </section>





      {/* SERVICIOS PRINCIPALES */}
      <section className="py-16 bg-black relative z-10">
        {/* Gradiente azul decorativo entre secciones */}
        <div className="absolute left-0 bottom-0 w-2/3 h-2/3 z-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 20% 80%, #0a3a4a 0%, transparent 80%)', opacity: 0.4, filter: 'blur(32px)' }} />
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 relative z-10">
          {/* Columna 1 */}
          <div className="space-y-10">
            <div className="flex items-start gap-4">
              <span className="text-orange-500 text-3xl mt-1"><FaChartLine /></span>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Planificación y desempeño estratégico</h3>
                <p className="text-gray-300 text-sm">Modelos de planificación y gestión alineados a objetivos institucionales.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-orange-500 text-3xl mt-1"><FaCogs /></span>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Optimización de Procesos y TI</h3>
                <p className="text-gray-300 text-sm">Mejora de procesos, automatización y alineamiento tecnológico.</p>
              </div>
            </div>
          </div>
          {/* Columna 2 */}
          <div className="space-y-10">
            <div className="flex items-start gap-4">
              <span className="text-orange-500 text-3xl mt-1"><FaGlobe /></span>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Implementación de Estándares Internacionales</h3>
                <p className="text-gray-300 text-sm">ISO 31000, ISO 22301, ISO 27001, COSO ERM.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-orange-500 text-3xl mt-1"><FaShieldAlt /></span>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Gestión de Riesgos y Cumplimiento Normativo</h3>
                <p className="text-gray-300 text-sm">SEVRI, Normas técnicas del MICITT, cumplimiento regulatorio sectorial.</p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-12">Implementación, Capacitación y Soporte</h2>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-black/70 backdrop-blur-sm rounded-2xl shadow-2xl p-10 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-orange-500/30 group">
            <FaSearch className="text-4xl text-orange-500 mb-4 drop-shadow-[0_0_10px_rgba(255,140,0,0.5)] group-hover:scale-110 transition-transform duration-200" />
            <span className="text-white font-bold uppercase text-base mt-2">Diagnóstico y análisis personalizados.</span>
          </div>
          <div className="bg-black/70 backdrop-blur-sm rounded-2xl shadow-2xl p-10 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-orange-500/30 group">
            <FaRocket className="text-4xl text-orange-500 mb-4 drop-shadow-[0_0_10px_rgba(255,140,0,0.5)] group-hover:scale-110 transition-transform duration-200" />
            <span className="text-white font-bold uppercase text-base mt-2">Implementación ágil y acompañamiento.</span>
          </div>
          <div className="bg-black/70 backdrop-blur-sm rounded-2xl shadow-2xl p-10 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-orange-500/30 group">
            <FaChalkboardTeacher className="text-4xl text-orange-500 mb-4 drop-shadow-[0_0_10px_rgba(255,140,0,0.5)] group-hover:scale-110 transition-transform duration-200" />
            <span className="text-white font-bold uppercase text-base mt-2">Capacitación y transferencia de conocimiento.</span>
          </div>
          <div className="bg-black/70 backdrop-blur-sm rounded-2xl shadow-2xl p-10 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-orange-500/30 group">
            <FaHandsHelping className="text-4xl text-orange-500 mb-4 drop-shadow-[0_0_10px_rgba(255,140,0,0.5)] group-hover:scale-110 transition-transform duration-200" />
            <span className="text-white font-bold uppercase text-base mt-2">Soporte post-proyecto y mejora continua.</span>
          </div>
        </div>
      </section>

      {/* SOLUCIONES A MEDIDA CON DELPHOS */}
      <section className="relative py-20 bg-black overflow-hidden z-10">
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            <span className="text-orange-500">Soluciones</span> <span className="text-white">a Medida con</span> <span className="text-white font-bold">Delphos</span>
          </h2>
          <p className="text-white mb-10">
            Adaptamos nuestra plataforma DELPHOS y servicios a las necesidades específicas de cada cliente, garantizando flexibilidad, escalabilidad y resultados tangibles.
          </p>
          <div className="flex flex-col items-center">
            <a
              href="/contacto"
              className="flex items-center gap-2 text-white font-semibold px-6 py-3 border-b border-gray-400 hover:text-orange-500 transition-colors duration-200"
            >
              <span className="text-orange-500 text-xl font-bold">+</span>
              <span className="text-sm">Solicite una consultoría personalizada</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
} 