'use client';

import { ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, socialLinks } from '@/data/portfolio';
import { useScrollReveal, useTypingEffect } from '@/hooks';

export default function Hero() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const { displayedText } = useTypingEffect({
    text: personalInfo.title,
    speed: 60,
    delay: 500,
  });

  const linkedinUrl = socialLinks.find((l) => l.platform === 'linkedin')?.url;
  const githubUrl = socialLinks.find((l) => l.platform === 'github')?.url;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div
        ref={ref}
        className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <p className="text-indigo-400 font-medium mb-4 tracking-wider">BIENVENIDO</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hola, soy{' '}
          <span className="gradient-text">{personalInfo.name}</span>
        </h1>
        <div className="h-12 flex items-center justify-center mb-6">
          <p className="text-xl md:text-2xl text-zinc-400">
            {displayedText}
            <span className="animate-pulse text-indigo-400">|</span>
          </p>
        </div>
        <p className="text-lg text-zinc-500 max-w-2xl mx-auto mb-10">
          {personalInfo.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="group flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
          >
            Contactar
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border border-white/20 text-white rounded-full hover:bg-white/5 transition-all duration-300"
          >
            Ver Proyectos
          </a>
        </div>

        <div className="flex justify-center gap-6 mt-12">
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:border-indigo-500/50 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={24} />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:border-indigo-500/50 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <GithubIcon size={24} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}