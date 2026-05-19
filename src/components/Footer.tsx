'use client';

import { Linkedin, Github } from 'lucide-react';
import { socialLinks } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Carlos Durán. Todos los derechos reservados.
        </p>
        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label={link.label}
            >
              {link.platform === 'linkedin' ? <Linkedin size={24} /> : <Github size={24} />}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}