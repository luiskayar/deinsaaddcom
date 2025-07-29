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
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          {/* Título principal */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              <span className="text-orange-500">CONTÁCTENOS</span>
              <span className="text-white"> PARA UNA DEMO GRATUITA</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Estamos listos para ayudarle a usted y a su institución.
            </p>
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 max-w-6xl pb-20">
        {/* Formulario de Contacto */}
        <div className="mb-16">
          <ContactForm />
        </div>

        {/* Información de Contacto Directa */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-8 text-center">
            Contáctenos
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-gray-400 text-sm">Correo Electrónico</p>
                  <a
                    href="mailto:info@deinsaglobal.com"
                    className="text-white hover:text-orange-400 transition-colors font-medium"
                  >
                    info@deinsaglobal.com
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-gray-400 text-sm">Teléfono (Costa Rica)</p>
                  <a href="tel:+50622763380" className="text-white hover:text-orange-400 transition-colors font-medium">
                    (506) 2276-3380
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nuestras Oficinas */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-8 text-center">
            Visítenos en Nuestras Oficinas
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Miami, Florida</h3>
              <p className="text-gray-400 text-sm">Casa Matriz</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">San José, Costa Rica</h3>
              <p className="text-gray-400 text-sm">Centro de Soporte Global</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Ciudad de Panamá, Panamá</h3>
              <p className="text-gray-400 text-sm">Oficina Regional de Ventas GRC</p>
            </div>
          </div>
          
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
      </div>
    </div>
  );
}
