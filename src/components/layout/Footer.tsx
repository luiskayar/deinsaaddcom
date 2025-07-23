// src/components/layout/Footer.tsx
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import { getDocumentosGestor } from "@/lib/getDocumentosGestor";
import React from "react";

async function PoliticaSeguridadButton() {
  // Puedes buscar por slug, título, o categoría según tu base de datos
  const documentos = await getDocumentosGestor();
  // Busca el documento por título exacto (ajusta si el campo es diferente)
  const politica = documentos.find(
    (doc) => doc.titulo?.toLowerCase().includes("política de seguridad")
  );
  if (!politica) return null;
  return (
    <div className="mt-6 md:mt-0 flex flex-col items-center md:items-end">
      <a
        href={politica.archivoUrl}
        download
        target="_blank"
        rel="noopener noreferrer"
        title="Descargar Política de Seguridad de la Información (PDF)"
        aria-label="Descargar Política de Seguridad de la Información en PDF"
        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold px-5 py-2 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v11.25m0 0l3.75-3.75M12 15.75l-3.75-3.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Política de Seguridad de la Información
      </a>
    </div>
  );
}

export default async function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <p className="text-sm">&copy; {new Date().getFullYear()} Deinsa Global. Todos los derechos reservados.</p>
          <p className="text-sm mt-1">info@deinsaglobal.com | +506 2276-3380</p>
        </div>
        <div className="flex space-x-5 mb-4 md:mb-0">
          <Link href="https://www.linkedin.com/company/deinsa/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white hover:text-blue-500 text-xl" />
          </Link>
          <Link href="https://www.facebook.com/deinsaglobal/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white hover:text-blue-400 text-xl" />
          </Link>
          <Link href="https://www.youtube.com/user/CanalDeinsa" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-white hover:text-red-500 text-xl" />
          </Link>
          <Link href="https://www.instagram.com/deinsaglobal_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white hover:text-pink-400 text-xl" />
          </Link>
        </div>
        {/* Botón de descarga de la política desde Firestore */}
        {await PoliticaSeguridadButton()}
      </div>
    </footer>
  );
}
