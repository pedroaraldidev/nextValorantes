// Em pages/jogo-de-mira.js (ou onde quer que você tenha o iframe)
import Navbar from "@/components/NavBar";

export default function PaginaDoJogo() {
  return (
    <>
  <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <iframe
          src="/jogo-mira.html"
          width="100%"
          height="800px"
          title="Treino de Mira Incorporado"
          allowFullScreen
        ></iframe>
        <p>Pressione ESC para sair da tela cheia do jogo.</p>
      </div>
    </>
  );
}
