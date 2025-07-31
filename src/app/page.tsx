// src/app/page.tsx
import Link from "next/link";
import { Metadata } from "next";
import { MdSecurity, MdGavel, MdIntegrationInstructions, MdSettings, MdTimeline, MdVerifiedUser, MdAssessment, MdCloudUpload, MdPeople, MdCheckCircle, MdTrendingUp } from "react-icons/md";
import { FaRegFileAlt, FaChartBar } from "react-icons/fa";

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
    <>
      {/* Schema.org BreadcrumbList para mejorar navegación */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Inicio",
                "item": "https://www.deinsa.com/"
              }
            ]
          })
        }}
      />
      
      <main className="min-h-screen bg-black">
        {/* Hero Section - Diseño Único */}
        <section
          className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-4 md:pt-8 pb-10"
          style={{ backgroundImage: "url('/images/fondo principal.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
          aria-label="Sección principal de gobernanza corporativa"
        >
          <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
            <h1 className="mt-4 md:mt-8 text-2xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-white">
              <span className="text-orange-500">IMPULSE</span>
              <span className="text-white"> su gobernanza institucional con inteligencia, seguridad y control</span>
            </h1>
            <p className="text-base md:text-xl text-white/80 mb-10 max-w-3xl mx-auto">
            La solución SaaS que centraliza la gestión de riesgos, el cumplimiento normativo y la gobernanza institucional.            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link
                href="/delphos"
                className="px-8 py-4 rounded font-semibold text-lg uppercase text-white bg-gradient-to-r from-[#C96A13] to-[#7A4D13] shadow-sm transition-transform duration-200 transform hover:scale-105 hover:from-[#A05A1C] hover:to-[#7A4D13] focus:outline-none"
                aria-label="Conocer más sobre DELPHOS software de gobernanza corporativa"
              >
                CONOZCA DELPHOS
              </Link>
              <span className="text-orange-500 font-bold text-2xl hidden sm:inline-block">+</span>
              <Link
                href="/contacto"
                className=" rounded font-semibold text-lg uppercase text-white bg-transparent border-none transition-transform duration-200 transform hover:scale-105 focus:outline-none"
                aria-label="Solicitar demostración gratuita de software de gestión de riesgos"
              >
                PROBAR DEMO GRATUITA
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/60" style={{ zIndex: 1 }}></div>
        </section>

        {/* Cards principales, subidos visualmente y sin separación de sección */}
        <section className="relative z-20 max-w-7xl mx-auto px-4 -mt-24 flex flex-col md:flex-row justify-center items-start gap-8 mb-0" aria-label="Estadísticas de experiencia">
          {/* Card 1 */}
          <article className="relative rounded-xl overflow-visible flex flex-col items-center w-full md:w-[420px] min-h-[340px]">
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-black/60 blur-xl" />
            <div className="bg-black/80 rounded-xl shadow-2xl border-b-2 border-orange-500 flex flex-col items-center p-8 h-full w-full" style={{ boxShadow: '0 8px 40px 0 rgba(0,0,0,0.7)' }}>
              <div className="text-5xl font-extrabold text-orange-500 mb-2">35+</div>
              <div className="text-xl font-bold text-white mb-2 text-center">AÑOS DE EXPERIENCIA</div>
              <div className="text-white/80 text-center text-base">Desde 1990 desarrollamos software para la gestión de riesgos, planificación institucional y cumplimiento normativo en gobiernos y entidades financieras.</div>
            </div>
          </article>
          {/* Card 2 */}
          <article className="relative rounded-xl overflow-visible flex flex-col items-center w-full md:w-[420px] min-h-[340px]">
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-black/60 blur-xl" />
            <div className="bg-black/80 rounded-xl shadow-2xl border-b-2 border-orange-500 flex flex-col items-center p-8 h-full w-full" style={{ boxShadow: '0 8px 40px 0 rgba(0,0,0,0.7)' }}>
              <div className="text-5xl font-extrabold text-orange-500 mb-2">500+</div>
              <div className="text-xl font-bold text-white mb-2 text-center">IMPLEMENTACIONES</div>
              <div className="text-white/80 text-center text-base">Más de 500 instituciones han implementado nuestro software de gobernanza corporativa, SEVRI y gestión del desempeño en toda Latinoamérica y el mundo.</div>
            </div>
          </article>
          {/* Card 3 */}
          <article className="relative rounded-xl overflow-visible flex flex-col items-center w-full md:w-[420px] min-h-[340px]">
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-black/60 blur-xl" />
            <div className="bg-black/80 rounded-xl shadow-2xl border-b-2 border-orange-500 flex flex-col items-center p-8 h-full w-full" style={{ boxShadow: '0 8px 40px 0 rgba(0,0,0,0.7)' }}>
              <div className="text-5xl font-extrabold text-orange-500 mb-2">4</div>
              <div className="text-xl font-bold text-white mb-2 text-center">CONTINENTES</div>
              <div className="text-white/80 text-center text-base">Delphos se adapta a marcos regulatorios como las Normas Técnicas del MICITT, ISO 27001 e ISO 22301, en entornos públicos y financieros.</div>
            </div>
          </article>
        </section>

        {/* Carrusel de logos - estilo personalizado */}
        <section className="relative w-full flex justify-center items-center py-8 mb-2 overflow-hidden" aria-label="Clientes y aliados">
          {/* Círculo gris difuminado restaurado, más alto */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[220px] rounded-full bg-gradient-to-r from-transparent via-gray-700/40 to-transparent blur-3xl opacity-60 z-0" />
          {/* Borde naranja degradado, más alto y más naranja */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[150px] rounded-full pointer-events-none z-10" style={{ border: '3px solid', borderImage: 'linear-gradient(90deg, transparent 0%, #ff6600 45%, #ff6600 55%, transparent 100%) 1', borderRadius: '9999px', filter: 'blur(1.5px)', opacity: 0.95 }} />
          {/* Carrusel de logos */}
          <div className="relative z-20 w-full max-w-6xl flex items-center justify-center gap-6 animate-scroll-logos">
            {[
              '/images/banco m.png',
              '/images/BID.png',
              '/images/D&B.png',
              '/images/CR Gobierno.png',
              '/images/MIDELPAN.png',
              '/images/buro.png',
              '/images/CR.png',
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Logo cliente ${i+1} - Software de gobernanza corporativa DELPHOS`}
                className="h-12 w-auto transition duration-300"
                draggable="false"
                loading="lazy"
              />
            ))}
          </div>
          <style>{`
            @keyframes scroll-logos {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll-logos {
              animation: scroll-logos 30s linear infinite;
              width: max-content;
            }
          `}</style>
        </section>

        {/* El resto de la página sigue con fondo negro continuo, sin cortes visuales */}

        {/* ¿Por qué elegir Delphos? */}
        <section className="bg-black py-20 relative overflow-hidden" aria-label="Características del software de gobernanza corporativa">
          {/* Círculo azul/gris difuminado a la izquierda, más abajo y más difuso */}
          <div className="absolute top-40 -left-32 w-[350px] h-[350px] rounded-full bg-gradient-to-br from-blue-900 via-gray-400 to-transparent opacity-20 blur-[120px] pointer-events-none z-0" />
          {/* Círculo naranja difuminado a la derecha, más abajo y más difuso */}
          <div className="absolute top-60 -right-40 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-orange-500 via-yellow-500 to-transparent opacity-20 blur-[140px] pointer-events-none z-0" />
          {/* Hexágono en la esquina inferior derecha */}
          <img
            src="/images/hexagono.png"
            alt="Elemento decorativo hexágono"
            className="absolute bottom-0 right-0 w-[320px] opacity-20 pointer-events-none z-0"
            draggable="false"
            loading="lazy"
          />
          {/* El contenido real de la sección debe tener z-10 o superior */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-6">
            {/* Card 1: Solo texto, sin borde ni icono */}
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
                ¿Por qué elegir <span className="text-orange-500">Delphos</span>?
              </h2>
              <p className="text-white/80 text-base">
                Ofrecemos herramientas inteligentes para elevar nivel de control, trazabilidad y eficiencia institucional.
              </p>
            </div>
            {/* Card 2 */}
            <article className="relative border border-orange-500 rounded-xl p-4 flex items-center min-h-[90px]">
              <span className="absolute -top-5 left-4 bg-black px-1 text-orange-500 text-xl" aria-hidden="true"><MdSecurity /></span>
              <span className="text-white text-base font-semibold text-center w-full">GESTIÓN DE RIESGOS INTEGRADA</span>
            </article>
            {/* Card 3 */}
            <article className="relative border border-orange-500 rounded-xl p-4 flex items-center min-h-[90px]">
              <span className="absolute -top-5 left-4 bg-black px-1 text-orange-500 text-xl" aria-hidden="true"><FaRegFileAlt /></span>
              <span className="text-white text-base font-semibold text-center w-full">CUMPLIMIENTO DEL MICITT</span>
            </article>
            {/* Card 4 */}
            <article className="relative border border-orange-500 rounded-xl p-4 flex items-center min-h-[90px]">
              <span className="absolute -top-5 left-4 bg-black px-1 text-orange-500 text-xl" aria-hidden="true"><MdGavel /></span>
              <span className="text-white text-base font-semibold text-center w-full">GOBERNANZA Y CUMPLIMIENTOS EN UN SOLO LUGAR</span>
            </article>
            {/* Card 5 */}
            <article className="relative border border-orange-500 rounded-xl p-4 flex items-center min-h-[90px]">
              <span className="absolute -top-5 left-4 bg-black px-1 text-orange-500 text-xl" aria-hidden="true"><MdIntegrationInstructions /></span>
              <span className="text-white text-base font-semibold text-center w-full">INTEGRA SEVRI</span>
            </article>
            {/* Card 6 */}
            <article className="relative border border-orange-500 rounded-xl p-4 flex items-center min-h-[90px]">
              <span className="absolute -top-5 left-4 bg-black px-1 text-orange-500 text-xl" aria-hidden="true"><MdSettings /></span>
              <span className="text-white text-base font-semibold text-center w-full">GESTIÓN ESTRATÉGICA OPERATIVA</span>
            </article>
            {/* Card 7 */}
            <article className="relative border border-orange-500 rounded-xl p-4 flex items-center min-h-[90px]">
              <span className="absolute -top-5 left-4 bg-black px-1 text-orange-500 text-xl" aria-hidden="true"><MdTimeline /></span>
              <span className="text-white text-base font-semibold text-center w-full">PLANIFICACIÓN ESTRATÉGICA</span>
            </article>
            {/* Card 8 */}
            <article className="relative border border-orange-500 rounded-xl p-4 flex items-center min-h-[90px]">
              <span className="absolute -top-5 left-4 bg-black px-1 text-orange-500 text-xl" aria-hidden="true"><MdVerifiedUser /></span>
              <span className="text-white text-base font-semibold text-center w-full">CUMPLIMIENTO NORMATIVO AUTOMATIZADO</span>
            </article>
            {/* Card 9: vacío */}
            <div></div>
          </div>
        </section>

        {/* Funciones Clave */}
        <section className="bg-black py-20" aria-label="Funciones clave del software de gestión de riesgos">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-12">
              Funciones Clave para una <span className="text-orange-500">Gobernanza Efectiva y Sostenible</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {/* Card 1 */}
              <article className="bg-[#181818] rounded-xl p-8 flex flex-col items-center shadow-md">
                <MdSecurity className="text-4xl text-orange-500 mb-2" aria-hidden="true" />
                <div className="w-10 h-1 bg-orange-500 mb-4 rounded-full" aria-hidden="true"></div>
                <span className="text-white text-center font-semibold">Gestión de Riesgos Integrada</span>
              </article>
              {/* Card 2 */}
              <article className="bg-[#181818] rounded-xl p-8 flex flex-col items-center shadow-md">
                <FaChartBar className="text-4xl text-orange-500 mb-2" aria-hidden="true" />
                <div className="w-10 h-1 bg-orange-500 mb-4 rounded-full" aria-hidden="true"></div>
                <span className="text-white text-center font-semibold">Análisis Estratégico en Tiempo Real</span>
              </article>
              {/* Card 3 */}
              <article className="bg-[#181818] rounded-xl p-8 flex flex-col items-center shadow-md">
                <MdTrendingUp className="text-4xl text-orange-500 mb-2" aria-hidden="true" />
                <div className="w-10 h-1 bg-orange-500 mb-4 rounded-full" aria-hidden="true"></div>
                <span className="text-white text-center font-semibold">Planificación Estratégica y Operativa</span>
              </article>
              {/* Card 4 */}
              <article className="bg-[#181818] rounded-xl p-8 flex flex-col items-center shadow-md">
                <MdCloudUpload className="text-4xl text-orange-500 mb-2" aria-hidden="true" />
                <div className="w-10 h-1 bg-orange-500 mb-4 rounded-full" aria-hidden="true"></div>
                <span className="text-white text-center font-semibold">Plataforma SaaS en Oracle Cloud</span>
              </article>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 5 */}
              <article className="bg-[#181818] rounded-xl p-8 flex flex-col items-center shadow-md">
                <MdPeople className="text-4xl text-orange-500 mb-2" aria-hidden="true" />
                <div className="w-10 h-1 bg-orange-500 mb-4 rounded-full" aria-hidden="true"></div>
                <span className="text-white text-center font-semibold">Control Interno y Auditoría</span>
              </article>
              {/* Card 6 */}
              <article className="bg-[#181818] rounded-xl p-8 flex flex-col items-center shadow-md">
                <MdAssessment className="text-4xl text-orange-500 mb-2" aria-hidden="true" />
                <div className="w-10 h-1 bg-orange-500 mb-4 rounded-full" aria-hidden="true"></div>
                <span className="text-white text-center font-semibold">Gestión de Continuidad del Negocio (BCM)</span>
              </article>
              {/* Card 7 */}
              <article className="bg-[#181818] rounded-xl p-8 flex flex-col items-center shadow-md">
                <MdCheckCircle className="text-4xl text-orange-500 mb-2" aria-hidden="true" />
                <div className="w-10 h-1 bg-orange-500 mb-4 rounded-full" aria-hidden="true"></div>
                <span className="text-white text-center font-semibold">Cumplimiento Normativo Automatizado</span>
              </article>
            </div>
          </div>
        </section>


        {/* CTA Final */}
        <section className="bg-black py-20 relative overflow-hidden" aria-label="Solicitar demostración de software de gobernanza corporativa">
          {/* Círculo azul grande difuminado abajo a la izquierda */}
          <div className="absolute -bottom-32 -left-32 w-[350px] h-[350px] rounded-full bg-gradient-to-br from-blue-900 via-blue-400 to-transparent opacity-30 blur-3xl pointer-events-none z-0" />
          {/* Círculo azul más pequeño difuminado más arriba */}
          <div className="absolute -bottom-10 left-40 w-[180px] h-[180px] rounded-full bg-gradient-to-br from-blue-800 via-blue-300 to-transparent opacity-20 blur-2xl pointer-events-none z-0" />
          {/* Contenido principal */}
          <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para <span className="bg-orange-500 text-white px-2 rounded">modernizar</span> su<br className="hidden md:inline" />gobernanza institucional?
            </h2>
            <p className="text-white/80 mb-2">
              Más de 500 instituciones en Latinoamérica y el mundo ya transformaron su gestión con <span className="text-orange-500 font-bold">DELPHOS</span>.
            </p>
            <p className="text-white font-bold mb-8">
              Solicite una demostración y descubra cómo podemos hacerlo también para usted.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/delphos"
                className="px-8 py-4 rounded font-semibold text-lg uppercase text-white bg-gradient-to-r from-[#C96A13] to-[#7A4D13] shadow-sm transition-transform duration-200 transform hover:scale-105 hover:from-[#A05A1C] hover:to-[#7A4D13] focus:outline-none"
                aria-label="Conocer más sobre DELPHOS software de gobernanza corporativa"
              >
                CONOZCA DELPHOS
              </Link>
              <span className="text-orange-500 font-bold text-2xl hidden sm:inline-block">+</span>
              <Link
                href="/contacto"
                className=" rounded font-semibold text-lg uppercase text-white bg-transparent border-none transition-transform duration-200 transform hover:scale-105 focus:outline-none"
                aria-label="Solicitar demostración gratuita de software de gestión de riesgos"
              >
                PROBAR DEMO GRATUITA
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

