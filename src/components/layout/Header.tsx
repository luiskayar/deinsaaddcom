'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="shadow-md" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center">
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/images/deinsa negro.png"
            alt="Logo Deinsa Global"
            width={150}
            height={50}
            priority
            style={{ objectFit: 'contain' }}
          />
        </Link>
        <div className="flex-1" />
        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-10 text-base font-light justify-center flex-1">
          <Link href="/delphos" className={pathname.startsWith('/delphos') ? 'text-[#ff9000] font-bold' : 'text-[#B0B0B0] hover:underline'}>Delphos</Link>
          <Link href="/servicios" className={pathname.startsWith('/servicios') ? 'text-[#ff9000] font-bold' : 'text-[#B0B0B0] hover:underline'}>Servicios</Link>
          <Link href="/nosotros" className={pathname.startsWith('/nosotros') ? 'text-[#ff9000] font-bold' : 'text-[#B0B0B0] hover:underline'}>Nosotros</Link>
          <Link href="/noticias" className={pathname.startsWith('/noticias') ? 'text-[#ff9000] font-bold' : 'text-[#B0B0B0] hover:underline'}>Noticias</Link>
          <Link href="/contacto" className={pathname.startsWith('/contacto') ? 'text-[#ff9000] font-bold' : 'text-[#B0B0B0] hover:underline'}>Contacto</Link>
        </nav>
        {/* Mobile menu button */}
        <button
          className="md:hidden ml-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <svg className="w-7 h-7 text-[#ff9000]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[#121212] px-6 pb-4 flex flex-col space-y-3 animate-fade-in">
          <Link href="/delphos" className={pathname.startsWith('/delphos') ? 'text-[#ff9000] font-bold' : 'text-[#B0B0B0]'} onClick={() => setMenuOpen(false)}>Delphos</Link>
          <Link href="/servicios" className={pathname.startsWith('/servicios') ? 'text-[#ff9000] font-bold' : 'text-[#B0B0B0]'} onClick={() => setMenuOpen(false)}>Servicios</Link>
          <Link href="/nosotros" className={pathname.startsWith('/nosotros') ? 'text-[#ff9000] font-bold' : 'text-[#B0B0B0]'} onClick={() => setMenuOpen(false)}>Nosotros</Link>
          <Link href="/noticias" className={pathname.startsWith('/noticias') ? 'text-[#ff9000] font-bold' : 'text-[#B0B0B0]'} onClick={() => setMenuOpen(false)}>Noticias</Link>
          <Link href="/contacto" className={pathname.startsWith('/contacto') ? 'text-[#ff9000] font-bold' : 'text-[#B0B0B0]'} onClick={() => setMenuOpen(false)}>Contacto</Link>
        </nav>
      )}
    </header>
  );
}