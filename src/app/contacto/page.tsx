import React from "react";
import { Metadata } from "next";
import { ContactForm } from "../../components/index";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contacto DEINSA GLOBAL | Solicite Demo de DELPHOS o Consultoría GRC",
  description:
    "Contacte a DEINSA GLOBAL para soluciones de Software de gestión de riesgos, Planificación estratégica institucional y Gestión del desempeño institucional. Oficinas en Miami, Costa Rica y Panamá.",
  keywords: [
    "contacto DEINSA GLOBAL",
    "demo DELPHOS",
    "consultoría GRC",
    "software gestión de riesgos",
    "planificación estratégica institucional",
    "gestión del desempeño institucional",
    "oficinas Miami",
    "oficinas Costa Rica",
    "oficinas Panamá",
  ],
  openGraph: {
    title:
      "Contacto DEINSA GLOBAL | Solicite Demo de DELPHOS o Consultoría GRC",
    description:
      "Contacte a DEINSA GLOBAL para soluciones de Software de gestión de riesgos, Planificación estratégica institucional y Gestión del desempeño institucional. Oficinas en Miami, Costa Rica y Panamá.",
    url: "https://www.deinsa.com/contacto",
  },
  alternates: {
    canonical: "https://www.deinsa.com/contacto",
  },
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-black">
      <Script async src="https://www.google.com/recaptcha/api.js" />
      
      {/* Hero Section con título y formulario */}
      <section className="relative min-h-screen flex items-center py-12 px-4 bg-black overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-20 -left-32 w-[350px] h-[350px] rounded-full bg-gradient-to-br from-blue-900 via-gray-400 to-transparent opacity-20 blur-[120px] pointer-events-none z-0" />
        <div className="absolute top-40 -right-40 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-orange-500 via-yellow-500 to-transparent opacity-20 blur-[140px] pointer-events-none z-0" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Layout de dos columnas */}
          <div className="grid md:grid-cols-2 gap-12 items-start mt-2">
            {/* Columna izquierda - Título e información de contacto */}
            <div className="space-y-8">
              {/* Título en la columna izquierda */}
              <div>
                <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                  <span className="text-orange-500">CONTÁCTENOS</span>
                  <span className="text-white"> PARA UNA DEMO GRATUITA</span>
                </h1>
                <p className="text-base md:text-lg text-white/80 mb-8">
                  Estamos listos para ayudarle a usted y a su institución.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-orange-500 mb-6">
                  Información de Contacto
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Correo Electrónico</p>
                      <a
                        href="mailto:info@deinsaglobal.com"
                        className="text-white hover:text-orange-400 transition-colors font-medium"
                      >
                        info@deinsaglobal.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Teléfono (Costa Rica)</p>
                      <a href="tel:+50622763380" className="text-white hover:text-orange-400 transition-colors font-medium">
                        (506) 2276-3380
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-4">Nuestras Oficinas</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Miami, Florida</p>
                      <p className="text-gray-400 text-sm">Casa Matriz</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">San José, Costa Rica</p>
                      <p className="text-gray-400 text-sm">Centro de Soporte Global</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Ciudad de Panamá, Panamá</p>
                      <p className="text-gray-400 text-sm">Oficina Regional de Ventas GRC</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna derecha - Formulario */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Sección adicional con mapa (scroll) */}
      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-8 text-center">
            Ubicación de Nuestras Oficinas
          </h2>
          
          {/* Google Maps embed para San José, Costa Rica */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
            <iframe
              title="Desarrollos Informáticos Deinsa Sociedad Anónima - San José, Costa Rica"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.017964024052!2d-84.049706!3d9.8957466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e38f49e04dbd%3A0x3c6c42af025b9e1!2sDesarrollos%20Inform%C3%A1ticos%20Deinsa%20Sociedad%20An%C3%B3nima!5e0!3m2!1ses-419!2scr!4v1680000000000!5m2!1ses-419!2scr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
