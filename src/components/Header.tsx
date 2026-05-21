'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'py-5'
      }`}
      role="banner"
    >
      <nav className="max-w-6xl mx-auto px-6 flex justify-between items-center" aria-label="Navegación principal">
        <a 
          href="#" 
          className="text-xl font-bold gradient-text focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
          aria-label="Carlos Durán - Inicio"
        >
          CD
        </a>

        <ul className="hidden md:flex gap-8" role="list">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className="text-zinc-400 hover:text-white focus:text-white transition-colors duration-300 relative group focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded px-1 py-1"
                >
                  {item.label}
                  <span 
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full group-focus-visible:w-full transition-all duration-300" 
                    aria-hidden="true"
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <button
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="md:hidden p-2 text-zinc-400 hover:text-white focus:text-white transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
          aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
        >
          {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </nav>

      {isOpen && (
        <div 
          id="mobile-menu" 
          className="md:hidden glass border-t border-white/10"
          role="navigation"
          aria-label="Menú móvil"
        >
          <ul className="px-6 py-4 space-y-4" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block text-zinc-400 hover:text-white focus:text-white py-2 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded px-1"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}