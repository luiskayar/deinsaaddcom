import React from 'react';
import { Metadata } from 'next';
import { FaGlobe, FaChartLine, FaShieldAlt, FaCogs, FaSearch, FaRocket, FaChalkboardTeacher, FaHandsHelping, FaPuzzlePiece, FaRegHandshake } from 'react-icons/fa';

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

const consultoria = [
  {
    icon: <FaGlobe className="text-blue-700 text-3xl" />,
    title: 'Implementación de Estándares Internacionales',
    desc: 'ISO 31000, ISO 22301, ISO 27001, COSO ERM. Fortalecemos la estructura institucional alineándola a marcos globales de control, gestión de riesgos y continuidad del negocio.'
  },
  {
    icon: <FaChartLine className="text-green-700 text-3xl" />,
    title: 'Planificación y Desempeño Estratégico',
    desc: 'Modelos de planificación alineados al cumplimiento de objetivos institucionales, integrando visión estratégica y evaluación del desempeño.'
  },
  {
    icon: <FaShieldAlt className="text-purple-700 text-3xl" />,
    title: 'Gestión de Riesgos y Cumplimiento Regulatorio',
    desc: 'Implementación del SEVRI, cumplimiento de normas del MICITT y regulaciones sectoriales. Reduzca incertidumbres y mejore su resiliencia institucional.'
  },
  {
    icon: <FaCogs className="text-orange-700 text-3xl" />,
    title: 'Optimización de Procesos y Transformación Digital',
    desc: 'Mejoramos procesos clave mediante automatización, reingeniería y alineamiento tecnológico para mayor eficiencia operativa.'
  },
];

const hitos = [
  {
    icon: <FaSearch className="text-blue-700 text-2xl" />,
    title: 'Diagnóstico y análisis personalizado',
    desc: 'Evaluamos su situación actual y definimos la mejor hoja de ruta para su institución.'
  },
  {
    icon: <FaRocket className="text-green-700 text-2xl" />,
    title: 'Implementación acompañada paso a paso',
    desc: 'Despliegue ágil de nuestros sistemas con el respaldo continuo de consultores expertos.'
  },
  {
    icon: <FaChalkboardTeacher className="text-purple-700 text-2xl" />,
    title: 'Capacitación y transferencia de conocimiento',
    desc: 'Formación práctica al personal para maximizar el uso y valor de DELPHOS.'
  },
  {
    icon: <FaHandsHelping className="text-orange-700 text-2xl" />,
    title: 'Soporte continuo y mejora permanente',
    desc: 'Acompañamiento post-proyecto para garantizar sostenibilidad y evolución.'
  },
];

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO ASIMÉTRICO */}
      <section className="w-full bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 py-16 shadow-lg mb-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-left md:pr-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow">Servicios Especializados en Gobernanza, Riesgos y Cumplimiento (GRC)</h1>
            <h2 className="text-xl md:text-2xl text-blue-100 font-light mb-8 max-w-xl">Impulsamos la transformación institucional con soluciones integrales en cumplimiento normativo, planificación estratégica, gestión de riesgos y automatización.</h2>
            <a href="/contacto" className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300">Solicite una Consultoría Personalizada</a>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <FaRegHandshake className="text-[120px] md:text-[180px] text-white/70 drop-shadow-lg" />
          </div>
        </div>
      </section>

      {/* CONSULTORÍA ESPECIALIZADA - CARDS HORIZONTALES */}
      <section className="bg-blue-50 py-16 mb-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-blue-800 mb-10 text-center">Consultoría Estratégica en GRC para Instituciones Públicas y Financieras</h3>
          <div className="flex flex-col gap-6 max-w-3xl mx-auto">
            {consultoria.map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md p-6 md:p-8 gap-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-blue-100">{item.icon}</div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-lg font-semibold text-blue-900 mb-1">{item.title}</h4>
                  <p className="text-gray-700 text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPLEMENTACIÓN Y SOPORTE - STEPPER VISUAL */}
      <section className="bg-white py-16 mb-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-blue-800 mb-10 text-center">Implementación Ágil, Capacitación y Acompañamiento Integral</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {hitos.map((item, i) => (
              <div key={i} className="flex flex-col items-center w-64">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 mb-2 border-4 border-blue-200">{item.icon}</div>
                <h4 className="text-base font-semibold text-blue-900 mb-1 text-center">{item.title}</h4>
                <p className="text-gray-700 text-sm text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUCIONES A MEDIDA CON DELPHOS - BANNER DESTACADO */}
      <section className="container mx-auto px-4 mb-16">
        <div className="bg-gradient-to-r from-blue-500 via-blue-300 to-green-300 rounded-xl p-10 shadow flex flex-col items-center">
          <FaPuzzlePiece className="text-5xl text-blue-900 mb-4" />
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Consultoría Tecnológica a la Medida con DELPHOS</h3>
          <p className="text-white text-lg max-w-2xl text-center font-medium">
            Adaptamos nuestra plataforma <b>DELPHOS</b> y todos nuestros servicios a las necesidades específicas de su institución. Garantizamos resultados tangibles mediante soluciones escalables, flexibles y alineadas a estándares internacionales.
          </p>
        </div>
      </section>

      {/* CTA FINAL DIFERENCIADA */}
      <section className="flex flex-col items-center justify-center mb-20">
        <span className="text-blue-800 text-lg font-semibold mb-2">¿Listo para transformar su institución?</span>
        <a
          href="/contacto"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-12 rounded-full text-xl shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 animate-pulse"
        >
          Solicite una Consultoría Personalizada
        </a>
      </section>
    </div>
  );
} 