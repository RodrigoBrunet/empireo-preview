"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

type Estado = "inicial" | "oculto" | "visivel";

// Faz a seção surgir (subindo de leve) quando entra na tela ao rolar.
// - Começa visível (HTML estático/sem JS mostra tudo); só esconde depois de montar,
//   e apenas o que ainda está fora da tela, então nada "pisca" no carregamento.
// - Visível termina em translate-none: um translate sobrando criaria um novo
//   referencial para elementos fixed dentro dela (ex.: card de detalhe de Serviços).
// - data-revelar + group/revelar deixam os filhos animarem em cascata (ex.: Parceiros).
// - motion-safe: quem pede menos movimento vê o conteúdo direto, sem animação.
export default function Revelar({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [estado, setEstado] = useState<Estado>("inicial");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setEstado("visivel");
          observador.disconnect();
        } else {
          setEstado((atual) => (atual === "inicial" ? "oculto" : atual));
        }
      },
      // Dispara um pouco antes do fim da tela, quando a seção já aparece de verdade
      { rootMargin: "0px 0px -12% 0px" },
    );
    observador.observe(el);
    return () => observador.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-revelar={estado}
      className={`group/revelar ${
        estado === "oculto"
          ? "motion-safe:opacity-0 motion-safe:translate-y-10"
          : "translate-none"
      } ${estado === "visivel" ? "transition duration-700 ease-out" : ""}`}
    >
      {children}
    </div>
  );
}
