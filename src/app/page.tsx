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
    <main className="min-h-screen bg-black">
      {/* Hero Section - Diseño Único */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ backgroundImage: "url('/images/fondo principal.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="block">
              <span className="text-orange-500">IMPULSE</span>
              <span className="text-white"> SU</span>
            </span>
            <span className="block text-white">GOBERNANZA</span>
            <span className="block text-white">CORPORATIVA</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/80 mb-10">
            Con la plataforma líder en Latinoamérica desde 1990
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="/delphos"
              className="px-8 py-4 rounded font-semibold text-lg uppercase text-white bg-gradient-to-r from-[#C96A13] to-[#7A4D13] shadow-sm transition-transform duration-200 transform hover:scale-105 hover:from-[#A05A1C] hover:to-[#7A4D13] focus:outline-none"
            >
              CONOZCA DELPHOS
            </Link>
            <span className="text-orange-500 font-bold text-2xl hidden sm:inline-block">+</span>
            <Link
              href="/contacto"
              className="px-8 py-4 rounded font-semibold text-lg uppercase text-white bg-transparent border-none transition-transform duration-200 transform hover:scale-105 focus:outline-none"
            >
              PROBAR DEMO GRATUITA
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/60" style={{ zIndex: 1 }}></div>
      </section>

      {/* Cards principales, subidos visualmente y sin separación de sección */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 -mt-24 flex flex-col md:flex-row justify-center items-start gap-8 mb-0">
        {/* Card 1 */}
        <div className="relative rounded-xl overflow-visible flex flex-col items-center w-full md:w-[420px] min-h-[340px]">
          <div className="absolute -inset-4 -z-10 rounded-2xl bg-black/60 blur-xl" />
          <div className="bg-black/80 rounded-xl shadow-2xl border-b-2 border-orange-500 flex flex-col items-center p-8 h-full w-full" style={{ boxShadow: '0 8px 40px 0 rgba(0,0,0,0.7)' }}>
            <div className="text-5xl font-extrabold text-orange-500 mb-2">35+</div>
            <div className="text-xl font-bold text-white mb-2 text-center">AÑOS DE EXPERIENCIA</div>
            <div className="text-white/80 text-center text-base">Trayectoria consolidada desde 1990 en desarrollo de soluciones para el sector público y financiero.</div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="relative rounded-xl overflow-visible flex flex-col items-center w-full md:w-[420px] min-h-[340px]">
          <div className="absolute -inset-4 -z-10 rounded-2xl bg-black/60 blur-xl" />
          <div className="bg-black/80 rounded-xl shadow-2xl border-b-2 border-orange-500 flex flex-col items-center p-8 h-full w-full" style={{ boxShadow: '0 8px 40px 0 rgba(0,0,0,0.7)' }}>
            <div className="text-5xl font-extrabold text-orange-500 mb-2">500+</div>
            <div className="text-xl font-bold text-white mb-2 text-center">IMPLEMENTACIONES</div>
            <div className="text-white/80 text-center text-base">Casos de éxito en gobiernos, bancos, cooperativas, ministerios y organismos internacionales.</div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="relative rounded-xl overflow-visible flex flex-col items-center w-full md:w-[420px] min-h-[340px]">
          <div className="absolute -inset-4 -z-10 rounded-2xl bg-black/60 blur-xl" />
          <div className="bg-black/80 rounded-xl shadow-2xl border-b-2 border-orange-500 flex flex-col items-center p-8 h-full w-full" style={{ boxShadow: '0 8px 40px 0 rgba(0,0,0,0.7)' }}>
            <div className="text-5xl font-extrabold text-orange-500 mb-2">4</div>
            <div className="text-xl font-bold text-white mb-2 text-center">CONTINENTES</div>
            <div className="text-white/80 text-center text-base">Delphos se adapta a marcos regulatorios globales y locales con multilenguaje y configuraciones regionales.</div>
          </div>
        </div>
      </div>

      {/* Carrusel de logos - estilo personalizado */}
      <div className="relative w-full flex justify-center items-center py-8 mb-2 overflow-hidden">
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
              alt={`Logo carrusel ${i+1}`}
              className="h-12 w-auto transition duration-300"
              draggable="false"
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
      </div>

      {/* El resto de la página sigue con fondo negro continuo, sin cortes visuales */}

      {/* ¿Por qué elegir Delphos? */}
      <section className="bg-black py-20 relative overflow-hidden">
        {/* Círculo azul/gris difuminado a la izquierda, más abajo y más difuso */}
        <div className="absolute top-40 -left-32 w-[350px] h-[350px] rounded-full bg-gradient-to-br from-blue-900 via-gray-400 to-transparent opacity-20 blur-[120px] pointer-events-none z-0" />
        {/* Círculo naranja difuminado a la derecha, más abajo y más difuso */}
        <div className="absolute top-60 -right-40 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-orange-500 via-yellow-500 to-transparent opacity-20 blur-[140px] pointer-events-none z-0" />
        {/* Hexágono en la esquina inferior derecha */}
        <img
          src="/images/hexagono.png"
          alt="Hexágono decorativo"
          className="absolute bottom-0 right-0 w-[320px] opacity-20 pointer-events-none z-0"
          draggable="false"
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
          <div className="relative border border-orange-500 rounded-xl p-4 flex items-center min-h-[90px]">
            <span className="absolute -top-5 left-4 bg-black px-1 text-orange-500 text-xl"><MdSecurity /></span>
            <span className="text-white text-base font-semibold text-center w-full">GESTIÓN DE RIESGOS INTEGRADA</span>
          </div>
          {/* Card 3 */}
          <div className="relative border border-orange-500 rounded-xl p-4 flex items-center min-h-[90px]">
            <span className="absolute -top-5 left-4 bg-black px-1 text-orange-500 text-xl"><FaRegFileAlt /></span>
            <span className="text-white text-base font-semibold text-center w-full">CUMPLIMIENTO DEL MICITT</span>
          </div>
          {/* Card 4 */}
          <div className="relative border border-orange-500 rounded-xl p-4 flex items-center min-h-[90px]">
            <span className="absolute -top-5 left-4 bg-black px-1 text-orange-500 text-xl"><MdGavel /></span>
            <span className="text-white text-base font-semibold text-center w-full">GOBERNANZA Y CUMPLIMIENTOS EN UN SOLO LUGAR</span>
          </div>
          {/* Card 5 */}
          <div className="relative border border-orange-500 rounded-xl p-4 flex items-center min-h-[90px]">
            <span className="absolute -top-5 left-4 bg-black px-1 text-orange-500 text-xl"><MdIntegrationInstructions /></span>
            <span className="text-white text-base font-semibold text-center w-full">INTEGRA SEVRI</span>
          </div>
          {/* Card 6 */}
          <div className="relative border border-orange-500 rounded-xl p-4 flex items-center min-h-[90px]">
            <span className="absolute -top-5 left-4 bg-black px-1 text-orange-500 text-xl"><MdSettings /></span>
            <span className="text-white text-base font-semibold text-center w-full">GESTIÓN ESTRATÉGICA OPERATIVA</span>
          </div>
          {/* Card 7 */}
          <div className="relative border border-orange-500 rounded-xl p-4 flex items-center min-h-[90px]">
            <span className="absolute -top-5 left-4 bg-black px-1 text-orange-500 text-xl"><MdTimeline /></span>
            <span className="text-white text-base font-semibold text-center w-full">PLANIFICACIÓN ESTRATÉGICA</span>
          </div>
          {/* Card 8 */}
          <div className="relative border border-orange-500 rounded-xl p-4 flex items-center min-h-[90px]">
            <span className="absolute -top-5 left-4 bg-black px-1 text-orange-500 text-xl"><MdVerifiedUser /></span>
            <span className="text-white text-base font-semibold text-center w-full">CUMPLIMIENTO NORMATIVO AUTOMATIZADO</span>
          </div>
          {/* Card 9: vacío */}
          <div></div>
        </div>
      </section>

      {/* Funciones Clave */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-12">
            Funciones Clave para una <span className="text-orange-500">Gobernanza Efectiva y Sostenible</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Card 1 */}
            <div className="bg-[#181818] rounded-xl p-8 flex flex-col items-center shadow-md">
              <MdSecurity className="text-4xl text-orange-500 mb-2" />
              <div className="w-10 h-1 bg-orange-500 mb-4 rounded-full" />
              <span className="text-white text-center font-semibold">Gestión de Riesgos Integrada</span>
            </div>
            {/* Card 2 */}
            <div className="bg-[#181818] rounded-xl p-8 flex flex-col items-center shadow-md">
              <FaChartBar className="text-4xl text-orange-500 mb-2" />
              <div className="w-10 h-1 bg-orange-500 mb-4 rounded-full" />
              <span className="text-white text-center font-semibold">Análisis Estratégico en Tiempo Real</span>
            </div>
            {/* Card 3 */}
            <div className="bg-[#181818] rounded-xl p-8 flex flex-col items-center shadow-md">
              <MdTrendingUp className="text-4xl text-orange-500 mb-2" />
              <div className="w-10 h-1 bg-orange-500 mb-4 rounded-full" />
              <span className="text-white text-center font-semibold">Planificación Estratégica y Operativa</span>
            </div>
            {/* Card 4 */}
            <div className="bg-[#181818] rounded-xl p-8 flex flex-col items-center shadow-md">
              <MdCloudUpload className="text-4xl text-orange-500 mb-2" />
              <div className="w-10 h-1 bg-orange-500 mb-4 rounded-full" />
              <span className="text-white text-center font-semibold">Plataforma SaaS en Oracle Cloud</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 5 */}
            <div className="bg-[#181818] rounded-xl p-8 flex flex-col items-center shadow-md">
              <MdPeople className="text-4xl text-orange-500 mb-2" />
              <div className="w-10 h-1 bg-orange-500 mb-4 rounded-full" />
              <span className="text-white text-center font-semibold">Control Interno y Auditoría</span>
            </div>
            {/* Card 6 */}
            <div className="bg-[#181818] rounded-xl p-8 flex flex-col items-center shadow-md">
              <MdAssessment className="text-4xl text-orange-500 mb-2" />
              <div className="w-10 h-1 bg-orange-500 mb-4 rounded-full" />
              <span className="text-white text-center font-semibold">Gestión de Continuidad del Negocio (BCM)</span>
            </div>
            {/* Card 7 */}
            <div className="bg-[#181818] rounded-xl p-8 flex flex-col items-center shadow-md">
              <MdCheckCircle className="text-4xl text-orange-500 mb-2" />
              <div className="w-10 h-1 bg-orange-500 mb-4 rounded-full" />
              <span className="text-white text-center font-semibold">Cumplimiento Normativo Automatizado</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-black py-20 relative overflow-hidden">
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
            >
              CONOZCA DELPHOS
            </Link>
            <span className="text-orange-500 font-bold text-2xl hidden sm:inline-block">+</span>
            <Link
              href="/contacto"
              className="px-8 py-4 rounded font-semibold text-lg uppercase text-white bg-transparent border-none transition-transform duration-200 transform hover:scale-105 focus:outline-none"
            >
              PROBAR DEMO GRATUITA
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

