'use client';

import { Code, Smartphone, Workflow, Lightbulb } from 'lucide-react';
import { services } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks';

const iconMap = {
  Code,
  Smartphone,
  Workflow,
  Lightbulb,
};

export default function Services() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-500/5 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-indigo-400 font-medium mb-2 tracking-wider">QUÉ OFREZCO</p>
          <h2 className="text-4xl font-bold">Servicios</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={service.id}
                className={`group p-6 glass rounded-2xl hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-indigo-400" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}