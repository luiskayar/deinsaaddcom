'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600 dark:text-white">
          Deinsa Global
        </Link>
        <nav className="space-x-4 text-sm font-medium">
          <Link href="/delphos" className="hover:underline text-gray-700 dark:text-gray-200">Delphos</Link>
          <Link href="/servicios" className="hover:underline text-gray-700 dark:text-gray-200">Servicios</Link>
          <Link href="/nosotros" className="hover:underline text-gray-700 dark:text-gray-200">Nosotros</Link>
          <Link href="/noticias" className="hover:underline text-gray-700 dark:text-gray-200">Noticias</Link>
          <Link href="/contacto" className="hover:underline text-gray-700 dark:text-gray-200">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}