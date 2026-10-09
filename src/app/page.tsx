import {
  Comparison,
  CTA,
  FAQ,
  Features,
  Footer,
  Gamification,
  Hero,
  Navbar,
} from "@/components";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0B0E14] text-gym-text selection:bg-gym-primary selection:text-gym-bg overflow-x-hidden">
      {/* Barra de Navegação Superior */}
      <Navbar />

      {/* Conteúdo Principal */}
      <main className="flex flex-col">
        <Hero />
        <Features />
        <Gamification />
        <Comparison />
        <FAQ />
        <CTA />
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}
