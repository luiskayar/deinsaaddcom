import React from 'react';
import { Metadata } from 'next';
import { FaShieldAlt, FaProjectDiagram, FaChartBar, FaUsersCog, FaMobileAlt, FaGlobe, FaCogs, FaRobot } from 'react-icons/fa';

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

const modulos = [
  {
    icon: <FaShieldAlt className="text-blue-700 text-4xl mb-4" />, // Delphos Continuum
    nombre: 'Delphos Continuum',
    desc: 'Gestión de continuidad del negocio, cumplimiento normativo, seguridad de la información y riesgos TI, alineado a ISO 22301, ISO 27001 y buenas prácticas.'
  },
  {
    icon: <FaProjectDiagram className="text-green-700 text-4xl mb-4" />, // Delphos Net
    nombre: 'Delphos Net',
    desc: 'Módulo central de gestión institucional con funciones de planificación estratégica, planes operativos, control de proyectos, desempeño y más.'
  },
  {
    icon: <FaChartBar className="text-purple-700 text-4xl mb-4" />, // Delphos BI
    nombre: 'Delphos BI',
    desc: 'Herramienta de inteligencia de negocios integrada para análisis estratégico, reportes dinámicos, tableros gerenciales y alertas automatizadas.'
  },
  {
    icon: <FaUsersCog className="text-orange-700 text-4xl mb-4" />, // Delphos Elite
    nombre: 'Delphos Elite',
    desc: 'Permite monitorear indicadores, metas y resultados de forma estructurada. Ideal para instituciones que requieren evaluar el rendimiento de unidades, programas o funcionarios con base en evidencia y alineado a sus planes estratégicos.'
  },
  {
    icon: <FaMobileAlt className="text-pink-700 text-4xl mb-4" />, // Delphos Mobile
    nombre: 'Delphos Mobile',
    desc: 'Acceso móvil para funcionarios en campo. Gestione tareas, planes y procesos desde dispositivos iOS y Android, incluso sin conexión.'
  },
  {
    icon: <FaGlobe className="text-blue-500 text-4xl mb-4" />, // Delphos Portal
    nombre: 'Delphos Portal',
    desc: 'Plataforma de portales personalizados para que cada usuario o área acceda a su información de forma visual, directa y segura.'
  },
  {
    icon: <FaCogs className="text-gray-700 text-4xl mb-4" />, // Delphos Funciona
    nombre: 'Delphos Funciona',
    desc: 'Diseñado para la gestión de libros contables, matrices operativas y documentos críticos que requieren control de acceso, trazabilidad y alta privacidad. Alternativa moderna y protegida frente al uso tradicional de Excel.'
  },
];

export default function DelphosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <section className="w-full bg-gradient-to-r from-blue-800 via-blue-700 to-blue-500 py-20 shadow-lg text-center">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow text-center">DELPHOS: La Plataforma más Completa para la Gobernanza Corporativa Inteligente</h1>
          <h2 className="text-xl md:text-2xl text-blue-100 font-light mb-10 max-w-2xl mx-auto text-center">
            Una solución integral que transforma la gestión institucional, unificando planificación, riesgos, continuidad, cumplimiento y desempeño en un solo ecosistema modular y escalable.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <a href="#modulos" className="bg-blue-900 hover:bg-blue-950 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-all duration-300">Conozca los Módulos</a>
          </div>
        </div>
      </section>

      {/* ¿QUÉ ES DELPHOS? */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">¿Qué es DELPHOS?</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          DELPHOS es la plataforma insignia de DEINSA GLOBAL, diseñada para modernizar la gobernanza institucional con tecnología SaaS. Está compuesta por módulos interconectados que permiten a instituciones públicas, financieras y privadas gestionar su planificación, riesgos, cumplimiento normativo y desempeño de forma eficiente, alineándose a estándares como ISO 27001, ISO 9001, ISO 22301, COBIT 2019 e ITIL.
        </p>
      </section>

      {/* MÓDULOS PRINCIPALES */}
      <section id="modulos" className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">Conozca los Módulos del Ecosistema DELPHOS</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {modulos.map((mod, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-blue-100 hover:shadow-2xl transition-all duration-300">
              {mod.icon}
              <h3 className="font-bold text-lg mb-2 text-blue-900">{mod.nombre}</h3>
              <p className="text-gray-700 text-sm">{mod.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ECOSISTEMA VISUAL */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">Un Ecosistema Modular para Toda la Organización</h2>
        <div className="flex justify-center mb-6">
          {/* Placeholder para la imagen, reemplazar por la imagen real cuando esté disponible */}
          <div className="w-full max-w-3xl h-64 bg-blue-200 rounded-xl flex items-center justify-center text-blue-700 text-xl font-semibold">
            [Aquí va la imagen del ecosistema DELPHOS]
          </div>
        </div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Cada módulo de DELPHOS puede implementarse de forma independiente o integrada, adaptándose a las necesidades de cada institución, país o sector.
        </p>
      </section>

      {/* DELPHOS AI */}
      <section className="py-16 bg-gradient-to-r from-blue-100 via-white to-blue-50 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">DELPHOS AI: Inteligencia Artificial para una Gestión Predictiva y Eficiente</h2>
        <div className="flex flex-col items-center justify-center mb-6">
          <FaRobot className="text-5xl text-blue-700 mb-4" />
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Incorpore el poder de la IA en su gobernanza institucional. DELPHOS AI analiza indicadores, riesgos y cumplimiento para ofrecer recomendaciones automatizadas, alertas inteligentes y generación de reportes proactivos. Una herramienta para decisiones más rápidas y acertadas.
          </p>
          <a href="/delphos-ai" className="bg-blue-900 hover:bg-blue-950 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-all duration-300">Descubra DELPHOS AI</a>
        </div>
      </section>
    </div>
  );
} 