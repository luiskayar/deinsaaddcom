// src/components/layout/Footer.tsx
import Link from "next/link";
import { FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import React from "react";
import Image from "next/image";

export default async function Footer() {
  return (
    <footer className="bg-[#121212] text-white border-t-4 border-orange-500">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo y contacto */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
          <Image src="/images/deinsa negro.png" alt="Logo Deinsa Global" width={120} height={40} className="mb-2" />
          <div className="text-sm text-gray-300 flex flex-col items-center md:items-start">
            <span>info@deinsaglobal.com | +506 2276-3380</span>
            <span>2025 Deinsa Global. Todos los derechos reservados.</span>
          </div>
        </div>
        {/* Cumplimiento */}
        <div className="flex flex-col items-center w-full md:w-1/3">
          <span className="text-sm text-gray-200 underline mb-2">Cumpliendo las Normas de Gobernanza.</span>
          <div className="flex space-x-5 mt-2">
            <Link href="https://www.linkedin.com/company/deinsa/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white hover:text-orange-500 text-xl" />
            </Link>
            <Link href="https://www.youtube.com/user/CanalDeinsa" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-white hover:text-orange-500 text-xl" />
            </Link>
            <Link href="https://www.instagram.com/deinsaglobal_/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white hover:text-orange-500 text-xl" />
            </Link>
            <Link href="https://twitter.com/DeinsaGlobal" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5 text-white hover:text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 4.01c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 3c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 8.13 4.07 6.2 1.64 3.16c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.84 1.95 3.62-.72-.02-1.4-.22-1.99-.55v.06c0 2.11 1.5 3.87 3.5 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.11 2.94 3.97 2.97A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.69-6.26 11.69-11.69 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22 4.01z" /></svg>
            </Link>
          </div>
        </div>
        {/* Menú */}
        <div className="flex flex-col items-center md:items-end w-full md:w-1/3">
          <div className="flex flex-row gap-8 text-sm text-gray-200">
            <div className="flex flex-col items-end gap-1">
              <Link href="/delphos" className="hover:text-orange-500">DELPHOS</Link>
              <Link href="/servicios" className="hover:text-orange-500">SERVICIOS</Link>
              <Link href="/nosotros" className="hover:text-orange-500">NOSOTROS</Link>
            </div>
            <div className="border-l border-orange-500 h-12 mx-2"></div>
            <div className="flex flex-col items-start gap-1">
              <Link href="/noticias" className="hover:text-orange-500">NOTICIAS</Link>
              <Link href="/documentos" className="hover:text-orange-500">DOCUMENTOS</Link>
              <Link href="/contacto" className="hover:text-orange-500">CONTACTO</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
