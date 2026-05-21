'use client';

import { Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hola, me interesa solicitar tus servicios.');
    window.open(`https://wa.me/${personalInfo.phone}?text=${message}`, '_blank');
  };

  const handleEmail = () => {
    const subject = encodeURIComponent('Solicitud de servicios');
    const body = encodeURIComponent('Hola, me interesa solicitar tus servicios.');
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative" aria-labelledby="contact-heading">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 via-purple-500/5 to-transparent" />

      <div
        ref={ref}
        className={`max-w-2xl mx-auto px-6 text-center relative transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <p className="text-indigo-400 font-medium mb-2 tracking-wider">CONTACTO</p>
        <h2 id="contact-heading" className="text-4xl font-bold mb-4">Hablemos</h2>
        <p className="text-zinc-400 mb-10 max-w-lg mx-auto">
          ¿Necesitas desarrollo de software? Conversemos sobre tu proyecto y encontremos la mejor solución.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleWhatsApp}
            aria-label="Contactar por WhatsApp"
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-1 motion-reduce:hover:translate-y-0"
          >
            <MessageCircle size={22} aria-hidden="true" />
            WhatsApp
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform motion-reduce:group-hover:translate-x-0" aria-hidden="true" />
          </button>
          <button
            onClick={handleEmail}
            aria-label="Enviar correo electrónico"
            className="group flex items-center justify-center gap-3 px-8 py-4 glass rounded-full border border-white/10 hover:border-indigo-500/50 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-1 motion-reduce:hover:translate-y-0"
          >
            <Mail size={22} aria-hidden="true" />
            Email
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100 motion-reduce:group-hover:opacity-0" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}