import Link from 'next/link';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

interface FeatureCard {
  title: string;
  description: string;
  icon: string;
  href: string;
  color: string;
}

export default function Home() {
  const featureCards: FeatureCard[] = [
    {
      title: "Blog Valorant",
      description: "Fique por dentro das últimas notícias, atualizações e guias de estratégia",
      icon: "📰",
      href: "/blog",
      color: "bg-red-500/10 border-red-500"
    },
    {
      title: "Ranking Competitivo",
      description: "Acompanhe os melhores jogadores e times do cenário competitivo",
      icon: "🏆",
      href: "/ranking",
      color: "bg-blue-500/10 border-blue-500"
    },
    {
      title: "Encontrar Times",
      description: "Conecte-se com outros jogadores para formar seu time ideal",
      icon: "👥",
      href: "/lfg",
      color: "bg-green-500/10 border-green-500"
    }
  ];

  const newsPosts = [
    {
      id: 1,
      title: "Notas da Atualização 10.06 do VALORANT",
      excerpt: "Uma nova mecânica e mais fortalecimentos para o KAY/O, além de uma penca de correções de bugs.",
      date: "01/04/2025"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-800 to-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
           Tudo sobre <span className="text-red-500">Valorant</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Tudo o que você precisa para dominar o jogo em um só lugar. Notícias, rankings, estatísticas e muito mais.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/blog" 
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
            >
              Explorar Conteúdo
            </Link>
            <Link
              href="/lfg" 
              className="px-6 py-3 bg-transparent border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition duration-300"
            >
              Encontrar Time
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            O Que Oferecemos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureCards.map((card, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-xl border ${card.color} hover:scale-105 transition-transform duration-300`}
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-gray-300 mb-4">{card.description}</p>
                <Link
                  href={card.href} 
                  className="text-white hover:underline inline-flex items-center"
                >
                  Saiba mais →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">Últimas Notícias</h2>
            <Link href="/blog">Ver todas</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsPosts.map(post => (
              <div key={post.id} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">{post.date}</span>
                    <Link href={`/blog/${post.id}`} className="text-red-400 hover:text-red-300">
                      Ler mais →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Estatísticas da Comunidade</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">2</div>
              <div className="text-gray-300">Jogadores Registrados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">5</div>
              <div className="text-gray-300">Times Formados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">3</div>
              <div className="text-gray-300">Posts no Blog</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">24/7</div>
              <div className="text-gray-300">Suporte Ativo</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}