'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-red-500">
          VALORANTES
        </Link>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-red-400">Home</Link>
          <Link href="/blog" className="hover:text-red-400">Blog</Link>
          <Link href="/ranking" className="hover:text-red-400">Ranking</Link>
          <Link href="/lfg" className="hover:text-red-400">LFG</Link>
          <Link href="/treino-mira" className="hover:text-red-400" onClick={() => setIsOpen(false)}>Treino de Mira</Link>
        </div>
      </div>

      {/* Menu Mobile Fullscreen */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 flex flex-col justify-center items-center space-y-8 text-2xl z-40">
          <Link href="/" className="hover:text-red-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/blog" className="hover:text-red-400" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/ranking" className="hover:text-red-400" onClick={() => setIsOpen(false)}>Ranking</Link>
          <Link href="/lfg" className="hover:text-red-400" onClick={() => setIsOpen(false)}>LFG</Link>
        </div>
      )}
    </nav>
  );
}
