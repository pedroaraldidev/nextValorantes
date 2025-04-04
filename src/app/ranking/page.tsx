import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer';
import { Player } from '@/lib/types';

const topPlayers: Player[] = [
  { id: 1, name: "1Badblock#PINA", rank: "Diamante II", rating: 200, team: "Valorantes" },
];

export default function Ranking() {
  return (
    <div className="min-h-screen bg-gray-800">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Ranking de Jogadores</h1>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="py-3 px-4 text-left">Posição</th>
                <th className="py-3 px-4 text-left">Nome</th>
                <th className="py-3 px-4 text-left">Rank</th>
                <th className="py-3 px-4 text-left">Rating</th>
                <th className="py-3 px-4 text-left">Time</th>
              </tr>
            </thead>
            <tbody>
              {topPlayers.map((player, index) => (
                <tr key={player.id} className="border-t border-gray-600 hover:bg-gray-600">
                  <td className="py-3 px-4 text-white">{index + 1}</td>
                  <td className="py-3 px-4 text-white">{player.name}</td>
                  <td className="py-3 px-4 text-red-400">{player.rank}</td>
                  <td className="py-3 px-4 text-white">{player.rating}</td>
                  <td className="py-3 px-4 text-white">{player.team}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </div>
  );
}