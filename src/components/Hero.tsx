"use client";

import { motion } from "framer-motion";
import {
  Apple,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/constants";
import { PhoneMockup } from "./PhoneMockup";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center bg-cyber-grid">
      {/* Luzes neon difusas no fundo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-87.5 bg-gym-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-112.5 h-112.5 bg-gym-secondary/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-87.5 h-87.5 bg-gym-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Coluna de Texto e Conversão */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Tag/Pill no topo requerida */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gym-card/90 border border-gym-border/80 text-xs font-semibold mb-6 shadow-inner backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-gym-primary animate-pulse" />
              <span className="text-white font-mono flex items-center gap-1.5">
                ⚡ Powered by Google Gemini &amp; Arquitetura Local-First
              </span>
            </div>

            {/* Headline com gradiente sutil de branco para cinza claro e destaques em #00E676 */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] mb-6">
              <span className="bg-linear-to-b from-white via-neutral-100 to-[#9CB0C9] bg-clip-text text-transparent">
                Menos tela travada.
              </span>{" "}
              <span className="text-gym-primary drop-shadow-[0_0_24px_rgba(0,230,118,0.55)]">
                Mais quilos na barra.
              </span>
            </h1>

            {/* Subtítulo de Alta Conversão */}
            <p className="text-lg sm:text-xl text-gym-text max-w-2xl mb-9 leading-relaxed font-normal">
              O primeiro app de musculação que roda em{" "}
              <strong className="text-white">60 FPS cravados</strong> com banco
              local SQLite. Registre suas séries em{" "}
              <strong className="text-gym-primary font-medium">0ms</strong> no
              subsolo da academia, evolua com{" "}
              <strong className="text-white font-medium">Smart Overload</strong>{" "}
              e conquiste seu físico de elite.
            </p>

            {/* Botões Duplos de Download (Android & iOS) */}
            <div
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10"
              id="download-cta"
            >
              {/* Botão Android */}
              <a
                href={SITE_CONFIG.links.playStore}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 text-sm font-extrabold text-[#0B0E14] bg-gym-primary rounded-2xl shadow-[0_0_25px_rgba(0,230,118,0.45)] hover:shadow-[0_0_40px_rgba(0,230,118,0.7)] hover:bg-[#00f880] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
              >
                <Play className="w-5 h-5 fill-[#0B0E14] group-hover:scale-110 transition-transform" />
                <div className="text-left leading-tight">
                  <span className="text-[10px] uppercase font-bold tracking-wider block opacity-90">
                    Disponível no
                  </span>
                  <span className="text-sm font-black block">
                    Baixar para Android
                  </span>
                </div>
              </a>

              {/* Botão iOS */}
              <a
                href={SITE_CONFIG.links.appStore}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 text-sm font-bold text-white bg-gym-card/90 border border-gym-border/90 rounded-2xl hover:bg-gym-surface hover:border-gym-primary/50 transition-all duration-200 backdrop-blur-md group hover:scale-[1.02] active:scale-[0.98]"
              >
                <Apple className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                <div className="text-left leading-tight">
                  <span className="text-[10px] uppercase font-semibold text-gym-text tracking-wider block">
                    Disponível na
                  </span>
                  <span className="text-sm font-extrabold block">
                    Baixar para iOS
                  </span>
                </div>
              </a>
            </div>

            {/* Badges de Prova Social */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6 border-t border-gym-border/60 text-xs text-gym-text">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((starId) => (
                    <Star
                      key={starId}
                      className="w-4 h-4 fill-gym-gold text-gym-gold"
                    />
                  ))}
                </div>
                <span className="font-bold text-white">4.9/5</span>
                <span>(+3.500 avaliações)</span>
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gym-primary" />
                <span>Zero Anúncios • Sem Login Obrigatório</span>
              </div>

              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-gym-gold" />
                <span>Latência de 0ms</span>
              </div>
            </div>
          </motion.div>

          {/* Coluna do Mockup do Smartphone 3D/CSS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Mockup Central */}
            <PhoneMockup />

            {/* Card Flutuante 1: Gemini AI Tag */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="hidden sm:flex absolute -left-6 top-1/4 glass-card border border-gym-secondary/40 p-3 rounded-2xl shadow-xl items-center gap-3 z-30 max-w-52.5"
            >
              <div className="w-10 h-10 rounded-xl bg-gym-secondary/20 flex items-center justify-center text-gym-secondary shrink-0 border border-gym-secondary/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-gym-secondary tracking-wider">
                  Smart Overload
                </p>
                <p className="text-xs font-bold text-white">
                  +2kg sugerido no Supino
                </p>
              </div>
            </motion.div>

            {/* Card Flutuante 2: XP / Gamificação */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4.5,
                ease: "easeInOut",
                delay: 1,
              }}
              className="hidden sm:flex absolute -right-6 bottom-1/4 glass-card border border-gym-gold/40 p-3 rounded-2xl shadow-xl items-center gap-3 z-30 max-w-55"
            >
              <div className="w-10 h-10 rounded-xl bg-gym-gold/20 flex items-center justify-center text-gym-gold shrink-0 border border-gym-gold/30">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-gym-gold tracking-wider">
                  Gamificação
                </p>
                <p className="text-xs font-bold text-white">
                  +150 XP • Nível 14
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Barra de Estatísticas Rápidas */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-3xl glass-card border border-gym-border/80">
          {SITE_CONFIG.stats.map((stat) => (
            <div key={stat.label} className="p-3 text-center sm:text-left">
              <p className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-gym-title mt-1">
                {stat.label}
              </p>
              <p className="text-xs text-gym-primary font-mono mt-0.5">
                {stat.change}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
