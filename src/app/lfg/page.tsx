import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer';
import { LFGPost } from '@/lib/types';

const lfgPosts: LFGPost[] = [
  {
    id: 1,
    username: "1Badblock#PINA",
    description: "Adicione para jogar!",
    rank: "Diamond",
    region: "BR",
    type: "friends"
  }
];

export default function LFG() {
  const teamPosts = lfgPosts.filter(post => post.type === 'team');
  const friendsPosts = lfgPosts.filter(post => post.type === 'friends');

  return (
    <div className="min-h-screen bg-gray-800">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Encontrar Times/Amigos</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Procurando Time */}
          <div className="bg-gray-700 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-red-400 mb-4">Procurando Time</h2>
            
            <div className="space-y-4">
              {teamPosts.map(post => (
                <div key={post.id} className="bg-gray-600 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-white">{post.username}</h3>
                  <p className="text-gray-300">{post.description}</p>
                  <div className="flex mt-2">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm mr-2">{post.rank}</span>
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">{post.region}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Procurando Amigos */}
          <div className="bg-gray-700 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-red-400 mb-4">Procurando Amigos</h2>
            
            <div className="space-y-4">
              {friendsPosts.map(post => (
                <div key={post.id} className="bg-gray-600 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-white">{post.username}</h3>
                  <p className="text-gray-300">{post.description}</p>
                  <div className="flex mt-2">
                    <span className="bg-purple-500 text-white px-2 py-1 rounded text-sm mr-2">{post.rank}</span>
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">{post.region}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}