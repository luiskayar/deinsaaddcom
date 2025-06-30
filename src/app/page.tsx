// src/app/page.tsx
import Link from "next/link";
import { MdOutlineAccessTime, MdSecurity, MdGavel, MdTrendingUp, MdCloudUpload, MdAnalytics } from "react-icons/md";
import {  FaUsers, FaChartLine, FaShieldAlt, FaRocket, FaCheckCircle } from "react-icons/fa";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DEINSA Global | Software de Gobernanza Corporativa y Gestión de Riesgos | DELPHOS",
  description: "DELPHOS: Software líder en gobernanza corporativa, gestión de riesgos, cumplimiento normativo y continuidad del negocio. 35+ años de experiencia. Solución SaaS para instituciones públicas y financieras.",
  keywords: [
    "software de gestión de riesgos",
    "gobernanza corporativa",
    "DELPHOS",
    "cumplimiento normativo", 
    "continuidad del negocio",
    "gestión pública",
    "instituciones financieras",
    "SEVRI",
    "planificación estratégica",
    "control interno",
    "auditoría",
    "compliance",
    "riesgo operacional",
    "riesgo financiero",
    "gobierno corporativo",
    "SaaS",
    "plataforma institucional",
    "Deinsa Global"
  ],
  openGraph: {
    title: "DEINSA Global | Software de Gobernanza Corporativa y Gestión de Riesgos",
    description: "DELPHOS: Plataforma integral para gobernanza, riesgos y cumplimiento. 35+ años de experiencia en gestión pública y financiera.",
    url: "https://www.deinsa.com/",
  },
  alternates: {
    canonical: "https://www.deinsa.com/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Diseño Único */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Fondo animado */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,rgba(156,146,172,0.3),transparent_50%)]"></div>
        </div>
        
        {/* Contenido principal */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4 mt-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full border border-blue-400/30 text-blue-200 text-sm font-medium mb-6">
              <FaRocket className="mr-2" />
              Líder en Gobernanza Corporativa desde 1990
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="block">Impulse su</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Gobernanza Corporativa
            </span>
            <span className="block text-3xl md:text-4xl text-blue-200 mt-4">
            con la Plataforma Líder en Latinoamérica
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
          Más de 500 instituciones públicas y privadas en 4 continentes confían en DELPHOS para gestionar riesgos, cumplimiento normativo, planificación y continuidad del negocio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              href="/delphos" 
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span className="flex items-center justify-center">
                Conozca DELPHOS
                <FaRocket className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link 
              href="/contacto" 
              className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Solicite una Demo Gratuita
            </Link>
          </div>
          
          {/* Stats flotantes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-4">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">35+ Años de Experiencia</div>
              <div className="text-blue-200">Trayectoria consolidada desde 1990 en desarrollo de soluciones para el sector público y financiero.</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-4">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">500+ Implementaciones</div>
              <div className="text-blue-200">Casos de éxito en gobiernos, bancos, cooperativas, ministerios y organismos internacionales.</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-4">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">Presencia en 4 Continentes</div>
              <div className="text-blue-200">DELPHOS se adapta a marcos regulatorios globales y locales con multilenguaje y configuraciones regionales.</div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Sección de Características */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir <span className="text-blue-600">DELPHOS</span> para su institución?
              
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DELPHOS es una plataforma modular que integra gestión de riesgos, cumplimiento normativo, planificación estratégica, control interno y continuidad operativa. Optimice sus procesos institucionales con tecnología avanzada y alineada a estándares internacionales.            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MdOutlineAccessTime className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">35+ Años de Innovación Continua</h3>
              <p className="text-gray-700 leading-relaxed">
              Desde 1990, pioneros en software de gobernanza institucional. Innovamos con cada versión.
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MdSecurity className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">500+ Implementaciones Exitosas</h3>
              <p className="text-gray-700 leading-relaxed">
              Nuestra experiencia es avalada por ministerios, bancos, municipios y entes reguladores.
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MdGavel className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Gobernanza y Cumplimiento en un Solo Lugar</h3>
              <p className="text-gray-700 leading-relaxed">
              DELPHOS integra el SEVRI, cumplimiento de normas MICITT, y gestión estratégica operativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Funcionalidades */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Funciones Clave para una Gobernanza Efectiva y Sostenible
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde la planificación hasta el cumplimiento normativo, DELPHOS ofrece herramientas inteligentes para elevar el nivel de control, trazabilidad y eficiencia institucional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaShieldAlt />, title: "Gestión de Riesgos Integrada", desc: "Administración completa del SEVRI con evaluación, monitoreo y tratamiento automatizado." },
              { icon: <MdAnalytics />, title: "Análisis Estratégico en Tiempo Real", desc: "Dashboards ejecutivos con métricas clave, comparativos, alertas y visualización dinámica." },
              { icon: <MdTrendingUp />, title: "Planificación Estratégica y Operativa", desc: "Desde visión y objetivos hasta actividades, metas e indicadores. Alineado al marco GpRD." },
              { icon: <MdCloudUpload />, title: "Plataforma SaaS en Oracle Cloud", desc: "Acceda desde cualquier lugar con seguridad, escalabilidad y respaldo automático." },
              { icon: <FaUsers />, title: "Control Interno y Auditoría", desc: "Gestión de hallazgos, acciones correctivas, cumplimiento de controles ISO y regulatorios." },
              { icon: <FaChartLine />, title: "Gestión de Continuidad del Negocio (BCM)", desc: "Análisis BIA, planes de recuperación y ejercicios de prueba integrados en la misma plataforma." },
              { icon: <FaCheckCircle />, title: "Cumplimiento Normativo Automatizado", desc: "ISO 27001, ISO 22301, CONASSIF, MICITT, y otras normas precargadas en el sistema." }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                <div className="text-3xl text-blue-600 mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">¿Listo para modernizar su gobernanza institucional?</h2>
          <p className="text-xl mb-8 text-blue-100">
          Más de 500 instituciones en Latinoamérica y el mundo ya transformaron su gestión con DELPHOS. Solicite una demostración y descubra cómo podemos hacerlo también por usted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contacto" 
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Solicitar Demostración
            </Link>
            <Link 
              href="/delphos" 
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Conozca DELPHOS
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

