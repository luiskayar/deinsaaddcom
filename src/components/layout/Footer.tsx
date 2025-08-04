// src/components/layout/Footer.tsx
import Link from "next/link";
import { FaLinkedin, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
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
            <span>© 2025 Deinsa Global. Todos los derechos reservados.</span>
          </div>
        </div>
        {/* Cumplimiento */}
        <div className="flex flex-col items-center w-full md:w-1/3">
          <div className="flex space-x-5 mt-2">
            <Link href="https://www.linkedin.com/company/deinsa" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white hover:text-orange-500 text-xl" />
            </Link>
            <Link href="https://www.facebook.com/deinsaglobal/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-white hover:text-orange-500 text-xl" />
            </Link>
            <Link href="https://www.youtube.com/user/CanalDeinsa" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-white hover:text-orange-500 text-xl" />
            </Link>
            <Link href="https://www.instagram.com/deinsaglobal_/" target="_blank" rel="noopener snoreferrer">
              <FaInstagram className="text-white hover:text-orange-500 text-xl" />
            </Link>
          </div>
        </div>
        {/* Política de Seguridad */}
        <div className="flex flex-col items-center md:items-end w-full md:w-1/3">
          <Link 
            href="http://www.deinsa.com/docs/DEINSA_Pol%C3%ADtica%20de%20Seguridad%20de%20la%20Informaci%C3%B3n%20V2_aprobado.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 text-center"
          >
            Política de Seguridad de la Información
          </Link>
        </div>
      </div>
    </footer>
  );
}
