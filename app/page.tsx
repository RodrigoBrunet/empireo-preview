import Apresentacao from "@/components/Apresentacao";
import Contato from "@/components/Contato";
import Hero from "@/components/Hero";
import MissaoVisao from "@/components/MissaoVisao";
import Parceiros from "@/components/Parceiros";
import Servicos from "@/components/Servicos";

export default function Home() {
  return (
    <>
      <Hero />
      <Apresentacao />
      <MissaoVisao />
      <Servicos />
      <Parceiros />
      <Contato />
    </>
  );
}
