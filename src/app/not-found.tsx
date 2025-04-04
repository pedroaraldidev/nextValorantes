'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  const [showBullet, setShowBullet] = useState(false);

  useEffect(() => {
    setShowBullet(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Efeito de fundo */}
      <div className="absolute inset-0 bg-[url('/valorant-bg.jpg')] bg-cover opacity-10"></div>
      
      <div className="max-w-2xl w-full text-center relative z-10">
        {/* Logo animado */}
        <div className="mb-8 flex justify-center animate-pulse">
          <Image 
            src="/valorant-logo.png" 
            alt="Valorant Logo" 
            width={300}
            height={100}
            className="w-64 h-auto"
          />
        </div>

        <h1 className="text-6xl font-bold text-red-500 mb-4 animate-bounce">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Acesso Negado</h2>
        <p className="text-xl text-gray-300 mb-8">
          Área restrita! Parece que o Spike foi plantado em outro site.
        </p>

        {/* Efeito de tiro interativo */}
        {showBullet && (
          <div className="relative mb-12 h-2">
            <div className="absolute left-1/2 -translate-x-1/2 w-full h-full bg-gray-700 rounded-full">
              <div className="absolute left-0 h-full bg-red-500 rounded-full animate-bullet"></div>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Retornar à Base
          </Link>
          <Link
            href="/blog"
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Ler as Notícias
          </Link>
        </div>

        <p className="mt-8 text-gray-400 italic">
          "Watch this!" - Jett, provavelmente
        </p>
      </div>
    </div>
  );
}