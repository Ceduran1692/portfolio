'use client';

import { GithubIcon, LinkedinIcon } from './Icons';
import { socialLinks } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Carlos Durán. Todos los derechos reservados.
        </p>
        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-indigo-400 transition-colors duration-300"
              aria-label={link.label}
            >
              {link.platform === 'linkedin' ? <LinkedinIcon size={22} /> : <GithubIcon size={22} />}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}