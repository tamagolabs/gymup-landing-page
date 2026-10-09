"use client";

import { Check, Shield, X } from "lucide-react";
import { COMPARISON_DATA, type ComparisonFeature } from "@/data/comparison";

export function Comparison() {
  return (
    <section
      id="comparison"
      className="py-24 relative overflow-hidden bg-[#0B0E14]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gym-card border border-gym-border text-xs font-semibold text-gym-primary mb-4 font-mono">
            <span>{"// RAIO-X COMPARATIVO"}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Por Que Não Usamos Apps Tradicionais?
          </h2>
          <p className="text-base sm:text-lg text-gym-text">
            A maioria dos aplicativos de academia parou no tempo: pesados,
            lotados de anúncios invasivos na versão grátis e dependentes de uma
            nuvem lenta que não abre no subsolo da academia.
          </p>
        </div>

        {/* Tabela de Comparação */}
        <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl bg-gym-card border border-gym-border shadow-2xl">
          {/* Header da Tabela */}
          <div className="grid grid-cols-12 bg-gym-surface/80 p-5 sm:p-6 border-b border-gym-border text-xs sm:text-sm font-bold uppercase tracking-wider">
            <div className="col-span-6 sm:col-span-7 text-gym-text">
              Recurso / Tecnologia
            </div>
            <div className="col-span-3 sm:col-span-3 text-center text-gym-primary flex items-center justify-center gap-1.5">
              <span className="font-black text-white sm:text-base">GymUp</span>
              <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-gym-primary animate-pulse" />
            </div>
            <div className="col-span-3 sm:col-span-2 text-center text-gym-text/80">
              Outros Apps
            </div>
          </div>

          {/* Linhas */}
          <div className="divide-y divide-gym-border/50">
            {COMPARISON_DATA.map((row: ComparisonFeature) => (
              <div
                key={row.name}
                className={`grid grid-cols-12 items-center p-4 sm:p-5 text-xs sm:text-sm transition-colors ${
                  row.highlight ? "bg-gym-primary/2" : "hover:bg-gym-surface/30"
                }`}
              >
                <div className="col-span-6 sm:col-span-7 font-medium text-white flex items-center gap-2">
                  <span>{row.name}</span>
                </div>

                {/* GymUp Col */}
                <div className="col-span-3 sm:col-span-3 flex justify-center items-center">
                  {typeof row.gymUp === "boolean" ? (
                    <div className="w-8 h-8 rounded-xl bg-gym-primary/15 border border-gym-primary/40 flex items-center justify-center text-gym-primary shadow-sm shadow-gym-primary/10">
                      <Check className="w-4 h-4 stroke-3" />
                    </div>
                  ) : (
                    <span className="text-gym-primary font-bold">
                      {row.gymUp}
                    </span>
                  )}
                </div>

                {/* Outros Apps Col */}
                <div className="col-span-3 sm:col-span-2 flex justify-center items-center">
                  {typeof row.others === "boolean" ? (
                    row.others ? (
                      <Check className="w-4 h-4 text-gym-text/60" />
                    ) : (
                      <div className="w-8 h-8 rounded-xl bg-gym-surface/40 border border-gym-border flex items-center justify-center text-gym-text/40">
                        <X className="w-4 h-4 stroke-2" />
                      </div>
                    )
                  ) : (
                    <span className="text-gym-text/60 font-semibold text-xs">
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
              <Shield className="w-4 h-4 text-gym-primary" />
              <span>
                Sem lock-in de dados. Importe ou exporte seu histórico a
                qualquer momento.
              </span>
            </div>
            <a
              href="#download"
              className="text-xs font-bold text-gym-bg bg-gym-primary px-4 py-2 rounded-xl hover:bg-[#00c864] transition-colors"
            >
              Experimentar GymUp Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
