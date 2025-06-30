import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto DEINSA GLOBAL | Solicite Demo de DELPHOS o Consultoría GRC',
  description: 'Contacte a DEINSA GLOBAL para soluciones de Software de gestión de riesgos, Planificación estratégica institucional y Gestión del desempeño institucional. Oficinas en Miami, Costa Rica y Panamá.',
  keywords: [
    'contacto DEINSA GLOBAL',
    'demo DELPHOS',
    'consultoría GRC',
    'software gestión de riesgos',
    'planificación estratégica institucional',
    'gestión del desempeño institucional',
    'oficinas Miami',
    'oficinas Costa Rica',
    'oficinas Panamá',
  ],
  openGraph: {
    title: 'Contacto DEINSA GLOBAL | Solicite Demo de DELPHOS o Consultoría GRC',
    description: 'Contacte a DEINSA GLOBAL para soluciones de Software de gestión de riesgos, Planificación estratégica institucional y Gestión del desempeño institucional. Oficinas en Miami, Costa Rica y Panamá.',
    url: 'https://www.deinsa.com/contacto',
  },
  alternates: {
    canonical: 'https://www.deinsa.com/contacto',
  },
};

const intereses = [
  'Solicitar Demo de DELPHOS',
  'Consulta sobre Licitación',
  'Consultoría GRC',
  'Soporte Técnico',
  'Información General',
];

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Título y Mensaje */}
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 text-center">Contacte a DEINSA GLOBAL: Transforme su Gobernanza Corporativa con DELPHOS</h1>
        <p className="text-lg text-gray-700 mb-10 text-center">
          Estamos listos para ayudarle a implementar un Sistema modular para instituciones que optimice su gestión. Llene el formulario o contáctenos directamente para explorar nuestras soluciones de Software de gestión de riesgos, Planificación estratégica institucional y Gestión del desempeño institucional.
        </p>

        {/* Formulario de Contacto */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">Envíenos un Mensaje</h2>
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input type="text" id="nombre" name="nombre" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
              <div>
                <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-1">Apellido</label>
                <input type="text" id="apellido" name="apellido" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
                <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                <input type="text" id="telefono" name="telefono" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="institucion" className="block text-sm font-medium text-gray-700 mb-1">Institución/Empresa</label>
                <input type="text" id="institucion" name="institucion" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
              <div>
                <label htmlFor="cargo" className="block text-sm font-medium text-gray-700 mb-1">Cargo</label>
                <input type="text" id="cargo" name="cargo" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Interés Principal</label>
              <div className="flex flex-wrap gap-4">
                {intereses.map((opcion) => (
                  <label key={opcion} className="flex items-center gap-2 text-gray-700">
                    <input type="radio" name="interes" value={opcion} required className="accent-orange-500" />
                    {opcion}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">Su Mensaje</label>
              <textarea id="mensaje" name="mensaje" rows={4} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Escriba su mensaje aquí..." />
            </div>
            {/* reCAPTCHA visual placeholder */}
            <div className="flex justify-center my-4">
              {/* Aquí debe integrarse Google reCAPTCHA real en producción */}
              <div className="bg-gray-200 rounded shadow px-8 py-4 text-gray-500 text-sm select-none">[reCAPTCHA]</div>
            </div>
            <button type="submit" className="w-full py-3 rounded-md text-white font-bold text-lg transition-colors" style={{ background: '#F57F26' }}>
              Enviar Mensaje
            </button>
          </form>
        </div>

        {/* Información de Contacto Directa */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">O Contáctenos Directamente</h2>
          <p className="text-gray-700 mb-1">Correo Electrónico: <a href="mailto:info@deinsaglobal.com" className="text-blue-700 underline">info@deinsaglobal.com</a></p>
          <p className="text-gray-700 mb-1">Teléfono (Costa Rica): <a href="tel:+50622763380" className="text-blue-700 underline">(506) 22763380</a></p>
        </div>

        {/* Nuestras Oficinas */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Visítenos en Nuestras Oficinas Estratégicas</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Miami, Florida (Casa Matriz)</li>
            <li>San José, Costa Rica (Centro de Soporte Global)</li>
            <li>Ciudad de Panamá, Panamá (Oficina Regional de Ventas GRC)</li>
          </ul>
          {/* Google Maps embed para San José, Costa Rica */}
          <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <iframe
              title="Oficina San José, Costa Rica"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.017964024052!2d-84.0907246852096!3d9.92806989291147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fa8e5b6e7e0d%3A0x7e8e7e8e7e8e7e8e!2sSan%20Jos%C3%A9%2C%20Costa%20Rica!5e0!3m2!1ses-419!2scr!4v1680000000000!5m2!1ses-419!2scr"
              width="100%"
              height="300"
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