"use client";
import React, { useState } from 'react';

// Tipo para los módulos
interface Modulo {
  id: number;
  titulo: string;
  icono: string;
  descripcion: string;
  caracteristicas: string[];
}

// Datos de los módulos
const modulos: Modulo[] = [
  {
    id: 1,
    titulo: "Planificación Estratégica",
    icono: "📊",
    descripcion: "Defina, gestione y proyecte el futuro de su organización con precisión. Alinee metas, KPIs, planes y presupuestos bajo metodologías como BSC o GpRD, apoyado por inteligencia artificial, simulaciones avanzadas y análisis estratégico 360°.",
    caracteristicas: ["Metas y KPIs alineados", "Simulación de escenarios", "Inteligencia estratégica", "Metodologías flexibles"]
  },
  {
    id: 2,
    titulo: "Planes Anuales Operativos",
    icono: "🧭",
    descripcion: "Ejecute su estrategia con eficiencia, alineando metas operativas y presupuestos. Controle compras, riesgos y cargas de trabajo, con integración total a su ERP y enfoque en resiliencia institucional.",
    caracteristicas: ["Alineación operativa", "Presupuesto y compras", "Riesgos y resiliencia", "Gestión de capacidad"]
  },
  {
    id: 3,
    titulo: "Gestión de Proyectos",
    icono: "🚀",
    descripcion: "Impulse sus iniciativas con una plataforma robusta usada a nivel nacional. Alinee proyectos a sus metas, gestione presupuestos, recursos y riesgos con precisión, y visualice el impacto territorial. Incluye: Gantt, PERT y rutas críticas, Presupuesto vs. ejecución, Riesgos y problemas, Georreferenciación, Delphos AI para predicción y automatización.",
    caracteristicas: ["Gantt, PERT y rutas críticas", "Presupuesto vs. ejecución", "Riesgos y problemas", "Georreferenciación"]
  },
  {
    id: 4,
    titulo: "Gestión del Desempeño",
    icono: "💼",
    descripcion: "Transforme el talento institucional con evaluación continua, alineación estratégica y desarrollo personalizado, validado por el ente rector del empleo público en Costa Rica. Cumpla con la Ley 9635 en Costa Rica.",
    caracteristicas: []
  },
  {
    id: 5,
    titulo: "Gestión de Riesgos",
    icono: "⚠️",
    descripcion: "Proteja su institución con visión y anticipación. Este módulo permite gestionar riesgos de forma integral bajo ISO 31000 y COSO ERM, con configuraciones personalizables, autoevaluaciones avanzadas y cumplimiento regulatorio automatizado. Incluye todo el ciclo del riesgo, matrices y metodologías flexibles, controles con madurez, análisis cuantitativo (VaR, Monte Carlo, Backtesting) y generación automática de archivos XML para superintendencias.",
    caracteristicas: []
  },
  {
    id: 6,
    titulo: "Continuidad del Negocio",
    icono: "🌪️",
    descripcion: "Implemente un Sistema de Gestión de Continuidad del Negocio (SGCN) alineado con ISO 22301. Evalúe impactos, documente planes BCP/DRP, gestione simulacros y asegure la preparación organizacional ante crisis. Incluye BIA avanzado con MTPD y RTO, cumplimiento ISO precargado, pruebas y simulacros, gestión de competencias y soporte con IA para generar riesgos, controles y estrategias de continuidad.",
    caracteristicas: []
  },
  {
    id: 7,
    titulo: "Seguridad de la Información",
    icono: "🔒",
    descripcion: "Implemente y gestione un SGSI robusto alineado con ISO 27001. Proteja activos digitales, evalúe riesgos, gestione incidentes y automatice controles con apoyo de inteligencia artificial. Incluye la norma precargada (ISO 27001:2022), análisis de riesgos, gestión de activos, control de incidentes y vulnerabilidades, y ciberseguridad asistida por IA.",
    caracteristicas: []
  },
  {
    id: 8,
    titulo: "Cumplimiento Normativo",
    icono: "📚",
    descripcion: "Gestione con confianza sus obligaciones legales, regulatorias y de buenas prácticas. Vincule normas como ISO 27001, 22301, 9001 y COBIT 2019 con riesgos, controles y auditorías en un entorno centralizado y dinámico. Incluye planes precargados, alertas legales, gestión de auditorías, hallazgos y terceros, todo con trazabilidad completa para asegurar el cumplimiento y minimizar riesgos reputacionales.",
    caracteristicas: []
  },
  {
    id: 9,
    titulo: "Gestión de Terceros",
    icono: "🤝",
    descripcion: "Evalúe, supervise y optimice su red de proveedores, socios y contratistas. Aplique due diligence, gestione contratos y SLAs, y controle riesgos que afectan la continuidad, seguridad y cumplimiento de su organización.",
    caracteristicas: ["Gestión de terceros", "Due diligence", "SLAs", "Riesgo proveedor"]
  },
  {
    id: 10,
    titulo: "Gestión de TI",
    icono: "💻",
    descripcion: "Opere y controle su infraestructura y servicios de TI con base en COBIT e ITIL. Gestione activos, incidentes, mantenimiento y servicios alineados a la estrategia institucional con una CMDB inteligente y conectada.",
    caracteristicas: ["COBIT 2019", "ITIL", "CMDB", "Gestión de TI"]
  },
  {
    id: 11,
    titulo: "Auditoría",
    icono: "🔍",
    descripcion: "Planifique, ejecute y dé seguimiento a auditorías internas y externas de forma estructurada. Desde la evaluación de riesgos hasta la gestión de hallazgos y acciones correctivas, con soporte de IA para priorización y análisis inteligente.",
    caracteristicas: []
  },
  {
    id: 12,
    titulo: "Gobernanza y Acuerdos",
    icono: "🏛️",
    descripcion: "Gestione sesiones, acuerdos y compromisos con trazabilidad completa. Vincule decisiones a riesgos, planes y responsables, con control de votaciones, actas y seguimiento documentado.",
    caracteristicas: ["Gobernanza institucional", "Acuerdos estratégicos"]
  },
  {
    id: 13,
    titulo: "Gestión de Activos Sensibles",
    icono: "🛡️",
    descripcion: "Administre activos críticos con trazabilidad, georreferenciación y mantenimiento predictivo. Evalúe riesgos físicos, fallas y desastres para proteger la continuidad de los servicios estratégicos.",
    caracteristicas: ["Infraestructura crítica", "CMDB", "Mantenimiento predictivo", "Análisis BIA"]
  },
  {
    id: 14,
    titulo: "Información Gerencial",
    icono: "📈",
    descripcion: "Visualice, analice y proyecte sus datos con inteligencia de negocios avanzada. Conecte múltiples fuentes, genere dashboards, simule escenarios y acceda a información clave desde cualquier dispositivo.",
    caracteristicas: []
  },
  {
    id: 15,
    titulo: "DELPHOS AI",
    icono: "🧠",
    descripcion: "Mucho más que una integración de inteligencia artificial: es su copiloto estratégico. DELPHOS AI transforma datos en decisiones, tareas en acciones y gestión en conocimiento. Asiste en planificación, riesgos, cumplimiento, continuidad, TI y desempeño, adaptándose al estilo de cada organización con plena trazabilidad y control humano. Genere automáticamente indicadores, riesgos, controles, planes, informes y visualizaciones gerenciales en minutos. Integre modelos como GPT, Gemini, Claude o LLaMA según su necesidad. Eleve la gobernanza institucional hacia un modelo basado en conocimiento, agilidad y confianza.",
    caracteristicas: ["Inteligencia artificial", "Copiloto estratégico", "Gestión pública", "Automatización"]
  }
];

// Función para procesar texto con formato markdown básico
function formatText(text: string) {
  // Dividir por saltos de línea
  const lines = text.split('\n');
  
  return lines.map((line, index) => {
    // Si la línea está vacía, retornar un espacio
    if (line.trim() === '') {
      return <div key={index} className="h-4"></div>;
    }
    
    // Procesar negritas (**texto**)
    const parts = line.split(/(\*\*.*?\*\*)/g);
    const formattedParts = parts.map((part, partIndex) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={partIndex} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
    
    // Si la línea comienza con •, es una lista
    if (line.trim().startsWith('•')) {
      return (
        <div key={index} className="flex items-start mb-2">
          <span className="text-orange-500 mr-2 mt-1">•</span>
          <span className="text-gray-300">{formattedParts}</span>
        </div>
      );
    }
    
    return (
      <div key={index} className="mb-3">
        {formattedParts}
      </div>
    );
  });
}

// Componente Popup para módulos
function ModuloPopup({ modulo, onClose }: { modulo: Modulo; onClose: () => void }) {
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50 p-4">
      <div className="bg-[#181818] rounded-xl shadow-2xl p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto text-left">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{modulo.icono}</span>
            <h2 className="text-2xl font-bold text-white">{modulo.titulo}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl font-bold transition-colors"
          >
            ×
          </button>
        </div>
        
        <div className="text-gray-300 text-base leading-relaxed mb-6">
          {formatText(modulo.descripcion)}
        </div>

        {modulo.caracteristicas && modulo.caracteristicas.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {modulo.caracteristicas.map((caracteristica: string, idx: number) => (
              <div key={idx} className="bg-[#232323] rounded-lg p-4 text-sm text-gray-200">
                {caracteristica}
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-semibold shadow transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default function DelphosPage() {
  const [moduloSeleccionado, setModuloSeleccionado] = useState<Modulo | null>(null);

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
            La Plataforma Modular Líder en Gobernanza, Riesgo, Desempeño y más.
          </h2>
          <p className="text-white mb-4">
            Integre planificación, riesgos, cumplimiento y desempeño en una sola plataforma SaaS, alineada con estándares internacionales.
          </p>

          {/* Matriz de Módulos Clave */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              <span className="text-orange-500">Módulos Clave</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {modulos.map((modulo) => (
                <div
                  key={modulo.id}
                  onClick={() => setModuloSeleccionado(modulo)}
                  className="bg-[#181818] rounded-lg p-4 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="text-3xl mb-3">{modulo.icono}</div>
                  <h4 className="text-sm font-semibold text-white leading-tight">
                    {modulo.titulo}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Universo Delphos */}
      <section className="py-16 relative z-10">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
            <span className="text-orange-500">Universo Delphos</span>
          </h2>
                     <div className="space-y-8">
             {/* Primera fila - 4 cards */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                               {/* Delphos Continuum */}
                <div
                  onClick={() => setModuloSeleccionado({
                    id: 1,
                    titulo: "Delphos Continuum",
                    icono: "🛡️",
                    descripcion: "Gestione riesgos, continuidad del negocio y cumplimiento normativo desde una sola plataforma.\n\n**DELPHOS Continuum** es una solución SaaS que permite implementar y mantener un sistema robusto de gestión de riesgos, continuidad operativa y seguridad de la información. Está alineado con normas como ISO 22301, ISO 27001, ISO 31000 y COBIT 2019, y permite trazabilidad total entre riesgos, controles, procesos y activos críticos.\n\nDesde el BIA y los planes BCP/DRP, hasta las autoevaluaciones normativas (ISO, SEVRI, etc.), la plataforma automatiza procesos clave para facilitar auditorías, análisis y toma de decisiones estratégicas.\n\n**Funciones destacadas:**\n\n• Gestión de riesgos estratégicos, operativos y normativos\n• BIA, BCP y DRP con trazabilidad integrada\n• Autoevaluaciones normativas (ISO, SEVRI)\n• IA para análisis y generación de estrategias",
                    caracteristicas: []
                  })}
                  className="bg-[#181818] rounded-lg p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 text-center w-44 h-44 flex items-center justify-center"
                >
                 <img src="/images/continuum.png" alt="Delphos Continuum" className="w-20 h-20 object-contain" />
               </div>

                               {/* Delphos Core */}
                <div
                  onClick={() => setModuloSeleccionado({
                    id: 2,
                    titulo: "Delphos Core",
                    icono: "📊",
                    descripcion: "El motor central para la planificación, los proyectos y la gestión institucional.\n\n**Delphos Core** es la plataforma base de DELPHOS para gestionar la planificación estratégica, los planes operativos anuales, la gestión de proyectos y el seguimiento institucional. Alinea objetivos, acciones y resultados con trazabilidad total y flujos automatizados.\n\n**Funciones destacadas:**\n\n• Gestión de planificación estratégica (BSC, GpRD, PND, PEM)\n• Planes operativos anuales por unidad, vinculados a objetivos y presupuestos\n• Portafolios de proyectos con seguimiento de ejecución, alertas y prioridades\n• Indicadores estratégicos y operativos con monitoreo visual en tiempo real",
                    caracteristicas: []
                  })}
                  className="bg-[#181818] rounded-lg p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 text-center w-44 h-44 flex items-center justify-center"
                >
                  <img src="/images/continuum.png" alt="Delphos Core" className="w-20 h-20 object-contain" />
                </div>

                               {/* Delphos Elite */}
                <div
                  onClick={() => setModuloSeleccionado({
                    id: 3,
                    titulo: "Delphos Elite",
                    icono: "💼",
                    descripcion: "Impulsando el alto rendimiento con evaluación estratégica del desempeño.\n\n**Delphos Elite** es el módulo especializado en la gestión integral del desempeño institucional, de equipos y de personas. Alinea los objetivos estratégicos con los resultados reales mediante herramientas flexibles de evaluación, seguimiento y retroalimentación.\n\nCumple con los lineamientos de la **Ley 9635** de Fortalecimiento de las Finanzas Públicas, facilitando la implementación de sistemas de evaluación del desempeño en el sector público de forma objetiva, trazable y conforme a la normativa vigente.\n\n**Beneficios clave:**\n\n• Aumenta la motivación, mejora la rendición de cuentas, fortalece la toma de decisiones en recursos humanos y promueve una cultura de alto desempeño en todos los niveles.",
                    caracteristicas: []
                  })}
                  className="bg-[#181818] rounded-lg p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 text-center w-44 h-44 flex items-center justify-center"
                >
                  <img src="/images/continuum.png" alt="Delphos Elite" className="w-20 h-20 object-contain" />
                </div>

                               {/* Delphos BI */}
                <div
                  onClick={() => setModuloSeleccionado({
                    id: 4,
                    titulo: "Delphos BI",
                    icono: "📈",
                    descripcion: "Transforme los datos en decisiones con inteligencia institucional.\n\n**Delphos BI** es la solución de inteligencia de negocios de DELPHOS que permite crear tableros gerenciales, cubos multidimensionales y reportes dinámicos, alimentados desde fuentes internas o externas como bases de datos SQL, Excel o sistemas institucionales.\n\nDesde salidas de rendición de cuentas hasta visualizaciones estratégicas en tiempo real, facilita el análisis predictivo, la evaluación de desempeño y la toma de decisiones informadas.",
                    caracteristicas: []
                  })}
                  className="bg-[#181818] rounded-lg p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 text-center w-44 h-44 flex items-center justify-center"
                >
                  <img src="/images/continuum.png" alt="Delphos BI" className="w-20 h-20 object-contain" />
                </div>
             </div>

             {/* Segunda fila - 3 cards centradas */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-4xl mx-auto">
                               {/* Delphos Mobile */}
                <div
                  onClick={() => setModuloSeleccionado({
                    id: 5,
                    titulo: "Delphos Mobile",
                    icono: "📱",
                    descripcion: "Lleve la gestión institucional en la palma de su mano.\n\n**Delphos Mobile** permite a funcionarios y líderes acceder, visualizar y actualizar información clave desde cualquier lugar, en tiempo real. Compatible con Android y iOS, la app facilita el seguimiento de indicadores, tareas, alertas, riesgos, proyectos y acuerdos, manteniendo la trazabilidad y el control desde el dispositivo móvil.\n\nIdeal para entornos de campo, sesiones remotas o supervisión ejecutiva, **Delphos Mobile** extiende las capacidades de la plataforma a cada colaborador, fortaleciendo la eficiencia y la oportunidad en la toma de decisiones.",
                    caracteristicas: []
                  })}
                  className="bg-[#181818] rounded-lg p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 text-center w-44 h-44 flex items-center justify-center"
                >
                  <img src="/images/continuum.png" alt="Delphos Mobile" className="w-20 h-20 object-contain" />
                </div>

                               {/* Delphos Funcion@ */}
                <div
                  onClick={() => setModuloSeleccionado({
                    id: 6,
                    titulo: "Delphos Funcion@",
                    icono: "📋",
                    descripcion: "Simule, proyecte y pronostique con precisión y flexibilidad.\n\n**Delphos Funcion@** es el módulo analítico de simulación y pronóstico de la plataforma DELPHOS. Permite crear modelos personalizados, evaluar escenarios, aplicar métodos estadísticos y realizar simulaciones dinámicas para apoyar decisiones estratégicas, operativas o presupuestarias.\n\nSu entorno de cálculo es similar al de una hoja electrónica, pero sin sus limitaciones, y con más de **13 métodos de pronóstico automático**, elegidos por precisión. Puede utilizarse en planificación, riesgos, finanzas, desempeño, continuidad, cumplimiento y más.\n\nIdeal para instituciones públicas y entidades reguladas que requieren evaluar el impacto de variables, visualizar proyecciones, optimizar recursos y anticiparse a tendencias.",
                    caracteristicas: []
                  })}
                  className="bg-[#181818] rounded-lg p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 text-center w-44 h-44 flex items-center justify-center"
                >
                  <img src="/images/continuum.png" alt="Delphos Funcion@" className="w-20 h-20 object-contain" />
                </div>

                               {/* Delphos Portal */}
                <div
                  onClick={() => setModuloSeleccionado({
                    id: 7,
                    titulo: "Delphos Portal",
                    icono: "🌐",
                                         descripcion: "Experiencias digitales personalizadas para cada institución.\n\n**DELPHOS Portal** permite crear portales institucionales a la medida, adaptados al diseño, estructura y necesidades de cada organización. Mejora significativamente la experiencia del usuario al mostrar solo la información y herramientas que necesita según su perfil y nivel jerárquico.\n\nSe integra con todos los módulos DELPHOS para ofrecer acceso centralizado a tareas, indicadores, alertas, documentos y reportes clave.\n\n**Beneficios clave:**\n\n✔ Mejora la experiencia del usuario\n✔ Refuerza la identidad institucional\n✔ Acceso rápido y personalizado\n✔ Mayor adopción del sistema",
                    caracteristicas: []
                  })}
                  className="bg-[#181818] rounded-lg p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 text-center w-44 h-44 flex items-center justify-center"
                >
                  <img src="/images/continuum.png" alt="Delphos Portal" className="w-65 h-65 object-contain" />
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

      {/* Popup Modal */}
      {moduloSeleccionado && (
        <ModuloPopup
          modulo={moduloSeleccionado}
          onClose={() => setModuloSeleccionado(null)}
        />
      )}
    </div>
  );
} 