import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white p-6 mt-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-semibold text-red-400 mb-4">Sobre</h3>
            <p className="text-gray-400">
              O Valorantes é uma plataforma não-oficial para fãs de Valorant.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-semibold text-red-400 mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/ranking" className="text-gray-300 hover:text-white transition">
                  Ranking
                </Link>
              </li>
              <li>
                <Link href="/lfg" className="text-gray-300 hover:text-white transition">
                  Procurar Times
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-semibold text-red-400 mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: contato@valorantes.com.br</li>
              <li>Tiktok: @1badblock</li>
              {/* <li>Discord: discord.gg/valorant</li> */}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-semibold text-red-400 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition">
                  Termos de Serviço
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.riotgames.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition"
                >
                  Site Oficial da Riot
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
          <p>© {currentYear} Valorantes. Não afiliado à Riot Games.</p>
          <p className="mt-1 text-sm">
            Valorant e todos os direitos relacionados pertencem à Riot Games, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}