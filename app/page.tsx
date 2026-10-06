import Apresentacao from "@/components/Apresentacao";
import Contato from "@/components/Contato";
import Hero from "@/components/Hero";
import MissaoVisao from "@/components/MissaoVisao";
import Parceiros from "@/components/Parceiros";
import Revelar from "@/components/Revelar";
import Servicos from "@/components/Servicos";

export default function Home() {
  return (
    <>
      <Hero />
      <Apresentacao />
      {/* Seções sem id podem animar inteiras; as que são destino do menu
          (Sobre nós, Serviços, Contato) usam o Revelar por dentro */}
      <Revelar>
        <MissaoVisao />
      </Revelar>
      <Servicos />
      <Revelar>
        <Parceiros />
      </Revelar>
      <Contato />
    </>
  );
}
