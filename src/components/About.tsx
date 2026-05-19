'use client';

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

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Sobre mí</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Soy desarrollador de software con experiencia en crear soluciones digitales
              que resuelven problemas reales. Me especializo en desarrollo web y móvil,
              siempre buscando la mejor experiencia de usuario.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Creo que el buen software debe ser simple, eficiente y escalable. Cada
              proyecto es una oportunidad para aprender y entregar valor.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Habilidades</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}