// app/nosotros/page.tsx
import React from 'react';
import { Metadata } from 'next';
import { MdBusiness, MdTrendingUp, MdSecurity, MdCloudUpload, MdStar } from 'react-icons/md';
import { FaGlobe, FaUsers, FaChartLine, FaShieldAlt, FaRocket, FaCloudUploadAlt } from 'react-icons/fa';

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

const hitos = [
  {
    year: '1990',
    titulo: 'Fundación de DEINSA Global',
    descripcion: 'Nacemos en Costa Rica con la misión de transformar la gobernanza institucional en América Latina a través de soluciones tecnológicas innovadoras.',
    icono: <FaGlobe className="text-4xl text-blue-600" />,
    color: 'from-blue-500 to-blue-600'
  },
  {
    year: '2000',
    titulo: 'Lanzamiento de DELPHOS',
    descripcion: 'Se lanza DELPHOS, la plataforma pionera en la gestión estratégica, riesgos y cumplimiento para instituciones públicas y financieras.',
    icono: <FaRocket className="text-4xl text-purple-600" />,
    color: 'from-purple-500 to-purple-600'
  },
  {
    year: '2010',
    titulo: 'Alianza con el Programa de las Naciones Unidas (PNUD)',
    descripcion: 'El PNUD contrata a DEINSA para apoyar la gestión y seguimiento de los Consejos Presidenciales de Costa Rica, con enfoque en resultados.',
    icono: <FaGlobe className="text-4xl text-green-600" />,
    color: 'from-green-500 to-green-600'
  },
  {
    year: '2015',
    titulo: 'Reconocimiento Internacional',
    descripcion: 'La Municipalidad de Cartago, usuaria de DELPHOS, obtiene el 2º lugar en América en el programa del BID "Gestión para Resultados en el Desarrollo".',
    icono: <FaChartLine className="text-4xl text-orange-500" />,
    color: 'from-orange-400 to-orange-500'
  },
  {
    year: '2018',
    titulo: 'Migración a la Nube',
    descripcion: 'Transformamos DELPHOS en una solución SaaS, alojada en Oracle Cloud, para brindar mayor disponibilidad, escalabilidad y seguridad.',
    icono: <FaCloudUploadAlt className="text-4xl text-purple-600" />,
    color: 'from-purple-500 to-purple-600'
  },
  {
    year: '2025',
    titulo: 'Lanzamiento de DELPHOS AI',
    descripcion: 'Presentamos DELPHOS AI, la nueva generación de inteligencia artificial aplicada a la gobernanza institucional y la gestión de riesgos.',
    color: 'from-indigo-700 to-purple-700',
  }
];

const casosExito: Array<{
  titulo: string;
  detalle: string;
  pais: keyof typeof coloresPais;
  icono: React.ReactNode;
}> = [
  {
    titulo: 'Banco de Costa Rica',
    detalle: 'Calificación 100 en SICOP.',
    pais: 'CR',
    icono: <FaChartLine className="text-2xl" />
  },
  {
    titulo: 'Presidencia de Costa Rica',
    detalle: '80-90% de cumplimiento en metas.',
    pais: 'CR',
    icono: <MdBusiness className="text-2xl" />
  },
  {
    titulo: 'MIDEPLAN',
    detalle: '+20 años usando DELPHOS.',
    pais: 'CR',
    icono: <FaUsers className="text-2xl" />
  },
  {
    titulo: 'IAFA (Costa Rica)',
    detalle: 'En nuestra nube desde 2018.',
    pais: 'CR',
    icono: <MdCloudUpload className="text-2xl" />
  },
  {
    titulo: 'Banco de Proyectos (BPIP)',
    detalle: '+100 instituciones usan la plataforma.',
    pais: 'CR',
    icono: <FaGlobe className="text-2xl" />
  },
  {
    titulo: 'INAPA (Rep. Dominicana)',
    detalle: 'Gestión de Aguas Potables y Alcantarillados.',
    pais: 'RD',
    icono: <MdTrendingUp className="text-2xl" />
  },
  {
    titulo: 'Buró de Crédito (México)',
    detalle: 'Gestiona riesgos con DELPHOS desde 2012.',
    pais: 'MX',
    icono: <FaShieldAlt className="text-2xl" />
  },
  {
    titulo: 'Dun & Bradstreet',
    detalle: 'Multinacional líder en datos y analítica de negocios.',
    pais: 'MX',
    icono: <MdSecurity className="text-2xl" />
  }
];

const coloresPais = {
  CR: 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200',
  MX: 'bg-gradient-to-br from-green-50 to-green-100 border-green-200',
  RD: 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200',
};

const alianzas = [
  { pais: 'Costa Rica', codigo: 'cr' },
  { pais: 'Panamá', codigo: 'pa' },
  { pais: 'México', codigo: 'mx' },
  { pais: 'Guatemala', codigo: 'gt' },
  { pais: 'Honduras', codigo: 'hn' },
  { pais: 'El Salvador', codigo: 'sv' },
];

export default function NosotrosPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section Moderno */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-50 overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-emerald-400/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-400/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenido izquierdo */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                <MdBusiness className="mr-2" />
                Empresa Costarricense desde 1990
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Más de <span className="text-emerald-600">35 años</span> de 
                <span className="block text-blue-600">innovación constante</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Somos una empresa costarricense con implementaciones en 4 continentes. 
                Nuestra plataforma <strong className="text-blue-600">DELPHOS</strong> fortalece la gestión pública 
                y financiera con soluciones integrales en gobernanza corporativa.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <MdTrendingUp className="mr-2" />
                  Ver Nuestra Trayectoria
                </a>
                <a 
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
                >
                  Contáctenos
                </a>
              </div>
            </div>
            
            {/* Contenido derecho - Stats y badges */}
            <div className="space-y-8">
              {/* Stats principales */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">35+</div>
                  <div className="text-sm text-gray-600">Años de Experiencia</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Implementaciones</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
                  <div className="text-sm text-gray-600">Continentes</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Acompañamiento</div>
                </div>
              </div>
              
              {/* Badges de reconocimiento */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">Reconocimientos</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full font-medium">
                    Líder en Gobernanza
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
                  Comprometidos con los más altos estándares
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full font-medium">
                  Alianzas con organismos multilaterales
                  </span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full font-medium">
                  SaaS en Oracle Cloud
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hitos de la historia - Stepper horizontal interactivo mejorado */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-emerald-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-800 mb-12 text-center">Nuestra Historia</h2>
          <div className="w-full flex justify-center">
            <div className="flex items-end justify-center gap-0 w-full max-w-5xl relative">
              {hitos.map((hito, i) => (
                <React.Fragment key={i}>
                  <input type="radio" name="hito-stepper" id={`hito-stepper-${i}`} className="peer hidden" />
                  <label htmlFor={`hito-stepper-${i}`} className="flex flex-col items-center w-44 group cursor-pointer relative mx-2 z-10 select-none">
                    <div className={`w-20 h-20 flex items-center justify-center rounded-full border-4 bg-gradient-to-br ${hito.color} border-blue-200 group-hover:scale-110 transition-all duration-300 mb-2 shadow-lg peer-checked:scale-110 peer-checked:border-blue-500`}> 
                      {hito.icono}
                    </div>
                    <span className="text-sm font-bold text-blue-700 mb-1">{hito.year}</span>
                    <h4 className="text-base font-semibold text-blue-900 mb-1 text-center group-hover:text-emerald-700 peer-checked:text-emerald-700 transition-colors duration-300">{hito.titulo}</h4>
                    {/* Pestaña flotante de descripción */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-[110%] w-72 bg-white rounded-xl shadow-2xl p-5 z-20 opacity-0 pointer-events-none border border-blue-100 mt-2 text-sm text-gray-700 text-center transition-all duration-300 peer-checked:opacity-100 peer-checked:pointer-events-auto peer-checked:mt-4">
                      {hito.descripcion}
                    </div>
                  </label>
                  {i < hitos.length - 1 && (
                    <div className="h-1 w-12 bg-gradient-to-r from-blue-200 to-emerald-200 mx-2 rounded-full z-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Misión, Visión y Valores</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los pilares que guían nuestro compromiso con la excelencia en gobernanza corporativa
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Misión */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 h-full border border-blue-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <FaRocket className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>

            {/* Visión */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 h-full border border-purple-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <FaGlobe className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Visión</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>

            {/* Valores */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 h-full border border-green-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <MdStar className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestros Valores</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Éxito Modernos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Casos de Éxito</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Más de 500 instituciones confían en DELPHOS para su gobernanza corporativa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {casosExito.map((caso, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl ${coloresPais[caso.pais]}`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-gray-600">
                      {caso.icono}
                    </div>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      {caso.pais}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {caso.titulo}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {caso.detalle}
                  </p>
                </div>
                
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alianzas */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Alianzas Internacionales</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contamos con una red de aliados regionales para implementaciones locales y soporte especializado
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {alianzas.map((a, i) => (
              <div
                key={i}
                className="group flex flex-col items-center space-y-3 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <div className="w-16 h-12 relative overflow-hidden rounded-lg shadow-md">
                  <img
                    src={`https://flagcdn.com/w80/${a.codigo}.png`}
                    alt={a.pais}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                  {a.pais}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">¿Listo para transformar su gobernanza?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Únase a más de 500 instituciones que ya confían en DELPHOS
          </p>
          <a 
            href="/contacto" 
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
          >
            Solicitar Demostración
          </a>
        </div>
      </section>
    </main>
  );
}
