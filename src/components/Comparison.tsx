"use client";

import { Check, Shield, Sparkles, X } from "lucide-react";
import { COMPARISON_DATA, type ComparisonFeature } from "@/data/comparison";

export function Comparison() {
  return (
    <section
      id="comparativo"
      className="py-24 relative overflow-hidden bg-[#0B0E14]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gym-card border border-gym-border text-xs font-semibold text-gym-primary mb-4 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMPARATIVO DIRETO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Por Que Não Usamos Apps Tradicionais?
          </h2>
          <p className="text-base sm:text-lg text-gym-text">
            A maioria dos aplicativos de musculação parou no tempo: foram feitos
            há 10 anos, são lentos, travam no subsolo sem internet e colocam
            anúncios na sua tela entre séries.
          </p>
        </div>

        {/* Tabela de Comparação */}
        <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl bg-gym-card border border-gym-border shadow-2xl">
          {/* Header da Tabela com Destaque Neon no GymUp */}
          <div className="grid grid-cols-12 bg-[#151A22] p-5 sm:p-6 border-b border-gym-border items-center">
            <div className="col-span-5 sm:col-span-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-gym-text">
              Diferenciais de Treino
            </div>
            <div className="col-span-4 sm:col-span-3 text-center bg-gym-primary/10 py-2.5 px-3 rounded-2xl border border-gym-primary/30 flex flex-col items-center justify-center">
              <span className="font-black text-white text-sm sm:text-base flex items-center gap-1.5">
                GymUp <Sparkles className="w-4 h-4 text-gym-primary" />
              </span>
              <span className="text-[10px] text-gym-primary font-mono font-bold mt-0.5">
                Nova Geração (0ms)
              </span>
            </div>
            <div className="col-span-3 sm:col-span-3 text-center text-gym-text/70 text-xs sm:text-sm font-bold">
              Apps Comuns
              <span className="block text-[10px] font-normal text-gym-text/60 font-mono mt-0.5">
                (Hevy, Strong, etc.)
              </span>
            </div>
          </div>

          {/* Linhas Comparativas */}
          <div className="divide-y divide-gym-border/50">
            {COMPARISON_DATA.map((row: ComparisonFeature) => (
              <div
                key={row.name}
                className={`grid grid-cols-12 items-center p-4 sm:p-5 text-xs sm:text-sm transition-colors ${
                  row.highlight ? "bg-gym-primary/2" : "hover:bg-gym-surface/20"
                }`}
              >
                <div className="col-span-5 sm:col-span-6 font-medium text-white pr-2">
                  <span>{row.name}</span>
                </div>

                {/* Coluna GymUp */}
                <div className="col-span-4 sm:col-span-3 flex justify-center items-center">
                  {typeof row.gymUp === "boolean" ? (
                    <div className="w-8 h-8 rounded-xl bg-gym-primary/15 border border-gym-primary/40 flex items-center justify-center text-gym-primary shadow-[0_0_12px_rgba(0,230,118,0.2)]">
                      <Check className="w-4 h-4 stroke-3" />
                    </div>
                  ) : (
                    <span className="text-gym-primary font-bold text-center">
                      {row.gymUp}
                    </span>
                  )}
                </div>

                {/* Coluna Outros Apps */}
                <div className="col-span-3 sm:col-span-3 flex justify-center items-center">
                  {typeof row.others === "boolean" ? (
                    row.others ? (
                      <Check className="w-4 h-4 text-gym-text/60" />
                    ) : (
                      <div className="w-8 h-8 rounded-xl bg-gym-surface/40 border border-gym-border flex items-center justify-center text-red-400/60">
                        <X className="w-4 h-4 stroke-2" />
                      </div>
                    )
                  ) : (
                    <span className="text-gym-text/60 font-semibold text-center text-xs">
                      {row.others}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer da Tabela com Veredito */}
          <div className="p-6 bg-linear-to-r from-gym-card via-gym-surface to-gym-card border-t border-gym-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-gym-text">
              <Shield className="w-4 h-4 text-gym-primary shrink-0" />
              <span>
                Sem lock-in. Seus treinos rodam a 60 FPS com total soberania dos
                seus dados.
              </span>
            </div>
            <a
              href="#download"
              className="text-xs font-bold text-[#0B0E14] bg-gym-primary px-5 py-2.5 rounded-xl hover:bg-[#00f880] transition-colors shadow-[0_0_15px_rgba(0,230,118,0.3)] shrink-0"
            >
              Começar com o GymUp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
