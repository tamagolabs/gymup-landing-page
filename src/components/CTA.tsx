"use client";

import {
  Apple,
  CheckCircle2,
  Download,
  Play,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/constants";

export function CTA() {
  return (
    <section
      id="download"
      className="py-24 relative overflow-hidden bg-[#0B0E14]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-linear-to-b from-[#151A22] via-[#10141b] to-[#0B0E14] border border-gym-primary/30 p-8 sm:p-14 lg:p-20 overflow-hidden shadow-2xl">
          {/* Luzes Neon de Fundo */}
          <div className="absolute top-0 right-1/4 w-100 h-75 bg-gym-primary/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-100 h-75 bg-gym-secondary/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gym-surface border border-gym-primary/40 text-xs font-semibold text-gym-primary mb-6 font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DISPONÍVEL AGORA • IOS & ANDROID</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              Pronto Para Transformar Seu Físico e Suas Cargas?
            </h2>

            {/* Subtítulo */}
            <p className="text-base sm:text-xl text-gym-text leading-relaxed mb-10 max-w-2xl mx-auto">
              Junte-se a mais de 45.000 praticantes de musculação que
              abandonaram a lentidão dos apps comuns. Baixe o GymUp e sinta a
              diferença no primeiro treino.
            </p>

            {/* Botões de Download */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              {/* Apple Store Button */}
              <a
                href={SITE_CONFIG.links.appStore}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gym-surface border border-gym-border text-white hover:border-gym-primary/60 hover:bg-gym-card transition-all duration-200 group"
              >
                <Apple className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-wider text-gym-text">
                    Baixar na
                  </p>
                  <p className="text-sm font-bold text-white">App Store</p>
                </div>
              </a>

              {/* Google Play Store Button */}
              <a
                href={SITE_CONFIG.links.playStore}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gym-surface border border-gym-border text-white hover:border-gym-primary/60 hover:bg-gym-card transition-all duration-200 group"
              >
                <Play className="w-7 h-7 text-gym-primary fill-gym-primary group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-wider text-gym-text">
                    Disponível no
                  </p>
                  <p className="text-sm font-bold text-white">Google Play</p>
                </div>
              </a>

              {/* Botão Direto Web / APK */}
              <a
                href="#download"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gym-primary text-gym-bg font-bold text-sm shadow-[0_0_25px_rgba(0,230,118,0.4)] hover:bg-[#00c864] hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <Download className="w-5 h-5 stroke-[2.5]" />
                <span>Instalação Rápida</span>
              </a>
            </div>

            {/* Garantias */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gym-text">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gym-primary" />
                Sem necessidade de cartão
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gym-primary" />
                100% Funcional Offline
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-gym-primary" />
                Seus dados criptografados localmente
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
