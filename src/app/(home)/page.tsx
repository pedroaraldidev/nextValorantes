import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-800">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Bem-vindo ao Valorant Hub</h1>
          <p className="text-xl text-gray-300">Tudo sobre Valorant em um só lugar!</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition">
            <h2 className="text-2xl font-semibold text-red-400 mb-3">Blog</h2>
            <p className="text-gray-300">Notícias, guias e atualizações sobre Valorant</p>
          </div>
          
          <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition">
            <h2 className="text-2xl font-semibold text-red-400 mb-3">Ranking</h2>
            <p className="text-gray-300">Veja os melhores jogadores e times</p>
          </div>
          
          <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition">
            <h2 className="text-2xl font-semibold text-red-400 mb-3">LFG</h2>
            <p className="text-gray-300">Encontre times ou amigos para jogar</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}