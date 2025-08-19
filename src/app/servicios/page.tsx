import React from 'react';
import { Metadata } from 'next';
import { FaGlobe, FaChartLine, FaShieldAlt, FaCogs, FaSearch, FaRocket, FaChalkboardTeacher, FaHandsHelping } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Gestión de Riesgos Integrada | DEINSA Global GRC',
  description: 'Deinsa Global ofrece consultoría en gobernanza corporativa, gestión de riesgos y cumplimiento normativo, con soluciones a medida y formación especializada.',
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
      
      {/* HERO DEINSA GRC */}
      <section className="w-full min-h-[420px] flex flex-col md:flex-row items-center justify-between bg-black relative py-12 md:py-20 px-4 md:px-12 z-10">
        {/* Columna izquierda: textos */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:items-start text-left z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            <span className="text-orange-500">DEINSA:</span> <br />
            Su Socio Estratégico en <br className="hidden md:block" />Gobernanza Corporativa
          </h1>
          <h3 className="text-xl md:text-2xl font-bold mb-4 leading-snug">
            <span className="text-white">Servicios especializados para </span>
            <span className="text-orange-500">gestión de riesgos</span>
            <span className="text-white">, </span>
            <span className="text-orange-500">cumplimiento del MICITT</span>
            <span className="text-white"> y </span>
            <span className="text-orange-500">planificación institucional</span>
          </h3>
          <p className="text-white/80 text-base md:text-lg mb-6 max-w-xl">
            Transformamos la gestión institucional con soluciones innovadoras en <b>GRC</b>, riesgo y cumplimiento.
          </p>
        </div>
        {/* Columna derecha: fondo decorativo */}
        <div className="hidden md:block w-1/2 h-[420px] relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[420px] overflow-hidden">
            <img
              src="/images/telaraña.jpg"
              alt="Fondo telaraña"
              className="w-full h-full object-cover opacity-20 blur-[2px]"
              draggable="false"
              loading="lazy"
            />
            {/* Gradiente suave para desvanecer los bordes */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/40 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/30 pointer-events-none"></div>
          </div>
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
                <p className="text-gray-300 text-sm">Modelos de gestión alineados al PND, PAI y evaluación del desempeño institucional.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-orange-500 text-3xl mt-1"><FaShieldAlt /></span>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Gestión de Riesgos y Cumplimiento Normativo</h3>
                <p className="text-gray-300 text-sm">Software alineado a SEVRI, Normas Técnicas del MICITT e ISO 27001.</p>
              </div>
            </div>
          </div>
          {/* Columna 2 */}
          <div className="space-y-10">
            <div className="flex items-start gap-4">
              <span className="text-orange-500 text-3xl mt-1"><FaCogs /></span>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Optimización de Procesos y TI</h3>
                <p className="text-gray-300 text-sm">Automatización institucional, digitalización y mejora continua en procesos clave.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-orange-500 text-3xl mt-1"><FaGlobe /></span>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Implementación de Estándares Internacionales</h3>
                <p className="text-gray-300 text-sm">ISO 31000, ISO 27001, ISO 22301, COSO ERM y otros marcos globales.</p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-12">Implementación, Capacitación y Soporte</h2>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-black/70 backdrop-blur-sm rounded-2xl shadow-2xl p-10 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-orange-500/30 group">
            <FaSearch className="text-4xl text-orange-500 mb-4 drop-shadow-[0_0_10px_rgba(255,140,0,0.5)] group-hover:scale-110 transition-transform duration-200" />
            <span className="text-white font-bold uppercase text-base mt-2">Diagnóstico y análisis personalizados.</span>
            <p className="text-gray-300 text-sm mt-2">Evaluamos brechas en riesgos, planificación y cumplimiento normativo.</p>
          </div>
          <div className="bg-black/70 backdrop-blur-sm rounded-2xl shadow-2xl p-10 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-orange-500/30 group">
            <FaRocket className="text-4xl text-orange-500 mb-4 drop-shadow-[0_0_10px_rgba(255,140,0,0.5)] group-hover:scale-110 transition-transform duration-200" />
            <span className="text-white font-bold uppercase text-base mt-2">Implementación ágil y acompañamiento.</span>
            <p className="text-gray-300 text-sm mt-2">Apoyamos su transformación institucional con una metodología flexible.</p>
          </div>
          <div className="bg-black/70 backdrop-blur-sm rounded-2xl shadow-2xl p-10 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-orange-500/30 group">
            <FaChalkboardTeacher className="text-4xl text-orange-500 mb-4 drop-shadow-[0_0_10px_rgba(255,140,0,0.5)] group-hover:scale-110 transition-transform duration-200" />
            <span className="text-white font-bold uppercase text-base mt-2">Capacitación y transferencia de conocimiento.</span>
            <p className="text-gray-300 text-sm mt-2">Formamos equipos internos con enfoque práctico y sostenibilidad.</p>
          </div>
          <div className="bg-black/70 backdrop-blur-sm rounded-2xl shadow-2xl p-10 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-orange-500/30 group">
            <FaHandsHelping className="text-4xl text-orange-500 mb-4 drop-shadow-[0_0_10px_rgba(255,140,0,0.5)] group-hover:scale-110 transition-transform duration-200" />
            <span className="text-white font-bold uppercase text-base mt-2">Soporte post-proyecto y mejora continua.</span>
            <p className="text-gray-300 text-sm mt-2">Nuestro equipo lo acompaña antes, durante y después del proyecto.</p>
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
            Adaptamos nuestra plataforma DELPHOS y nuestros servicios a los requerimientos de gobiernos, bancos y entidades del sector público, garantizando cumplimiento normativo y resultados medibles desde el primer mes.
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