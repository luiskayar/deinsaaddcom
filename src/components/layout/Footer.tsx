// src/components/layout/Footer.tsx
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <p className="text-sm">&copy; {new Date().getFullYear()} Deinsa Global. Todos los derechos reservados.</p>
          <p className="text-sm mt-1">info@deinsaglobal.com | +506 2276-3380</p>
        </div>

        <div className="flex space-x-5">
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
      </div>
    </footer>
  );
}
