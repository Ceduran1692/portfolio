'use client';

import { Mail, MessageCircle } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Contact() {
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
    <section id="contact" className="py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Contacto</h2>
        <p className="text-gray-500 mb-10">
          ¿Necesitas desarrollo de software? Hablemos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleWhatsApp}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            <MessageCircle size={20} />
            WhatsApp
          </button>
          <button
            onClick={handleEmail}
            className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Mail size={20} />
            Email
          </button>
        </div>
      </div>
    </section>
  );
}