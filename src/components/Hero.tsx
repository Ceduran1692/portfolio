'use client';

import { personalInfo } from '@/data/portfolio';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Hola, soy {personalInfo.name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          {personalInfo.title}
        </p>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
          {personalInfo.description}
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Contactar
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Ver Proyectos
          </a>
        </div>
      </div>
    </section>
  );
}