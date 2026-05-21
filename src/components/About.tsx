'use client';

import { Code2, Server, Users, Award } from 'lucide-react';
import { useScrollReveal } from '@/hooks';

const skills = [
  'JavaScript / TypeScript',
  'React / Next.js',
  'Node.js',
  'Python',
  'PostgreSQL / MongoDB',
  'Docker',
  'Git',
  'AWS',
];

const stats = [
  { icon: Code2, label: 'Proyectos', value: '50+', ariaLabel: 'Más de 50 proyectos completados' },
  { icon: Server, label: 'Clientes', value: '30+', ariaLabel: 'Más de 30 clientes satisfechos' },
  { icon: Users, label: 'Equipos', value: '15+', ariaLabel: 'Más de 15 equipos liderados' },
  { icon: Award, label: 'Años exp.', value: '8+', ariaLabel: 'Más de 8 años de experiencia' },
];

export default function About() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-24 relative" aria-labelledby="about-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />

      <div ref={sectionRef} className="max-w-6xl mx-auto px-6 relative">
        <div
          className={`transition-all duration-700 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-indigo-400 font-medium mb-2 tracking-wider">CONÓCEME</p>
          <h2 id="about-heading" className="text-4xl font-bold mb-12">Sobre mí</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-zinc-400 leading-relaxed">
              Soy desarrollador de software con experiencia en crear soluciones digitales
              que resuelven problemas reales. Me especializo en desarrollo web y móvil,
              siempre buscando la mejor experiencia de usuario.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Creo que el buen software debe ser simple, eficiente y escalable. Cada
              proyecto es una oportunidad para aprender y entregar valor.
            </p>

            <div className="pt-4">
              <h3 className="text-lg font-semibold text-white mb-4">Habilidades</h3>
              <ul className="flex flex-wrap gap-2" role="list" aria-label="Habilidades técnicas">
                {skills.map((skill, i) => (
                  <li key={skill}>
                    <span
                      className="inline-block px-4 py-2 glass rounded-full text-sm text-zinc-300 transition-all duration-300 hover:border-indigo-500/50 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4" role="list" aria-label="Estadísticas profesionales">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                role="listitem"
                aria-label={stat.ariaLabel}
                className={`p-6 glass rounded-2xl hover:border-indigo-500/30 transition-all duration-300 group ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(i + 4) * 100}ms` }}
              >
                <stat.icon className="w-8 h-8 text-indigo-400 mb-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
                <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-zinc-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}