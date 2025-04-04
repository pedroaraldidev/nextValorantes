import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Update1006Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Cabeçalho do Post */}
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-sm text-gray-400">01/04/2025 • Ashley Tsao</span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">
                Notas da Atualização 10.06 do VALORANT
              </h1>
              <p className="text-xl text-gray-300 mt-2">
                Uma nova mecânica e mais fortalecimentos para o KAY/O, além de uma penca de correções de bugs.
              </p>
            </div>
            <div className="flex space-x-2">
              <span className="px-2 py-1 bg-gray-700 text-xs rounded-full text-gray-300">
                atualização
              </span>
              <span className="px-2 py-1 bg-gray-700 text-xs rounded-full text-gray-300">
                patch notes
              </span>
            </div>
          </div>

          <div className="mt-6 rounded-lg overflow-hidden">
            <Image 
              src="/kayo.jpg" 
              alt="KAY/O - Agente de VALORANT"
              width={800}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Conteúdo do Post */}
        <article className="prose prose-invert max-w-none">
          <div className="mb-6 text-gray-300">
            <p>Oi! Aqui é a Ash!</p>
            <p>
              Com a atualização 10.06, quisemos deixar o KAY/O um tiquinho mais forte, com uma nova mecânica que faz os clarões dele ativarem um pouquinho antes se quicar. Também cortamos o tempo de ressurreição do KAY/O pela metade, então ninguém mais vai ter que gritar pro colega dar cobertura enquanto ressuscita... Ou pelo menos vai ter que gritar só pela metade do tempo.
            </p>
            <p>
              Também corrigimos vários bugs. Quem estiver no console sem ver progresso no fim de cada partida não precisa se preocupar! É só um bug visual, e o progresso está avançando normalmente.
            </p>
            <p>
              Por fim, acrescentamos mais 4 teleportadores ao Bind, e nenhum deles está conectado, ou seja, entrar em qualquer um deles manda você para 1 dos outros 5 locais ao acaso. Contem pra gente o que acham disso!
            </p>
            <p>
              Até a próxima, bom jogo pra todo mundo e não se esqueçam de 1, 2, 3, banguei!
            </p>
            <p className="text-red-400 italic">
              (Esse último é só uma piada de Primeiro de Abril, não me mate, por favor.)
            </p>
          </div>

          {/* Seção de Atualizações */}
          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">TODAS AS PLATAFORMAS</h2>
            
            <h3 className="text-xl font-semibold text-red-400 mb-3">ATUALIZAÇÕES DE AGENTES</h3>
            
            <h4 className="text-lg font-medium text-white mb-2">KAY/O</h4>
            <p className="mb-4">
              É legal que existe um caminho interessante para dominar as mecânicas do KAY/O, mas sempre notamos um grande abismo de diferença entre jogar com ele e dominá-lo, e esse abismo não diminuiu com o tempo. Segundo os comentários dos jogadores e as nossas estatísticas internas, o clarão dele é o mais difícil de coordenar do elenco.
            </p>
            <p className="mb-4">
              Achamos que dá para deixar o clarão lançado por cima mais flexível para cenários de média distância, de modo que ele melhor se equipare aos demais clarões.
            </p>
            <p className="mb-4">
              Essas mudanças devem preservar o teto de habilidade para os clarões lançados à perfeição que os jogadores andam treinando. 
              Também vamos reduzir o tempo de espera da ressurreição da Ultimate dele para reforçar o potencial de cooperação ao escolher um KAY/O aliado.
            </p>
            
            <h5 className="font-medium text-white mt-4">GRANADA/clarão</h5>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Após quicar, os clarões agora começam um acionamento de 0,8s e aí estouram.</li>
              <li>O acionamento tem visual e som únicos quando ativo.</li>
              <li>O acionamento ao quicar não ocorrerá se o clarão já estiver a menos de 0,8s de estourar, então o tempo máximo entre lançamento e estouro não vai aumentar.</li>
              <li>Duração máxima do clarão jogado por baixo: 1,25s → 1,5s.</li>
              <li>Alcance máximo do aviso verbal de clarão do KAY/O aumentado: 20m → 50m.</li>
              <li>Tempo para desequipar reduzido: 0,85s → 0,6s.</li>
              <li>Indicador no Minimapa adicionado para o clarão, só para a equipe.</li>
            </ul>
            
            <h5 className="font-medium text-white mt-4">ANULAR/cmd</h5>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Tempo de ressurreição: 3s → 1,5s.</li>
            </ul>
            
            <h4 className="text-lg font-medium text-white mt-6 mb-2">Yoru</h4>
            <p className="mb-4">Distração está com um custo-benefício bom até demais de apenas 100 créditos.</p>
            <h5 className="font-medium text-white">Distração</h5>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Custo aumentado: 100 → 200.</li>
            </ul>
            
            <h4 className="text-lg font-medium text-white mt-6 mb-2">Vyse</h4>
            <p className="mb-4">
              É bom ver que a Vyse encontrou um lugar no ecossistema desde que a fortalecemos na atualização 9.11, porém parece que a duração das habilidades dela está um pouco excessiva agora que os Espinheiros Cortantes representam uma baita ameaça. Vamos encurtar a duração dos Espinheiros Cortantes e da Cerca-Viva para que a Vyse precise explorar mais ativamente as habilidades e não dependa só do valor básico de contenção de que o kit dela dispõe. 
            </p>
            <h5 className="font-medium text-white">Duração do Espinheiro Cortante:</h5>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>10s → 7s.</li>
            </ul>
            <h5 className="font-medium text-white">Cerca-Viva:</h5>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Duração da parede acionada: 8s → 6s.</li>
            </ul>
          </div>

          {/* Outras seções */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-red-400 mb-3">ATUALIZAÇÕES DE COMPORTAMENTO DOS JOGADORES</h3>
              <p>
                Melhoramos as notificações de feedback para que seja possível ver de forma mais consistente as mensagens de quando uma denúncia de trapaça leva a um banimento.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-red-400 mb-3">ATUALIZAÇÕES DE DESEMPENHO</h3>
              <p>
                Reduzimos o número de objetos específicos do mapa Sunset que se renovam a cada quadro, melhorando assim o desempenho do processador.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-400 mb-3">CORREÇÕES DE BUGS</h3>
              
              <h4 className="text-lg font-medium text-white mt-4 mb-2">Agentes</h4>
              
              <h5 className="font-medium text-white">Vyse</h5>
              <h6 className="font-medium text-gray-300">Rosa Arcana</h6>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Corrigimos um bug que parava o loope de animação de repouso de Rosa Arcana se a Vyse se agachasse.</li>
                <li>Corrigimos um bug em que destruir a Rosa Arcana enquanto Vyse a recuperava não respeitava o tempo de recarga de "destruição" de 40 segundos.</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Rodapé do Post */}
        <div className="mt-12 border-t border-gray-700 pt-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Postado em 01/04/2025 por Ashley Tsao</span>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-white">
                Compartilhar
              </button>
              <button className="text-gray-400 hover:text-white">
                Comentar
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}