'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error('Portfolio error:', error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-16 h-16 glass rounded-full mb-6">
          <AlertTriangle className="w-8 h-8 text-red-400" />
        </div>
        
        <h1 className="text-2xl font-bold mb-4">Algo salió mal</h1>
        <p className="text-zinc-400 mb-8">
          Lo siento, hubo un problema al cargar esta sección. Por favor intenta de nuevo.
        </p>
        
        <button
          onClick={reset}
          className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
        >
          <RefreshCw size={18} className="group-hover:rotate-180 transition-transform duration-500" />
          Reintentar
        </button>
      </div>
    </div>
  );
}