"use client";

import { motion } from "framer-motion";
import {
  ChevronRight,
  Download,
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
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gym-card/90 border border-gym-border/80 text-xs font-semibold mb-6 shadow-inner backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-gym-primary animate-pulse" />
              <span className="text-white font-mono">
                100% OFFLINE (SQLITE)
              </span>
              <span className="text-gym-border font-light">|</span>
              <span className="text-gym-secondary flex items-center gap-1 font-bold">
                <Sparkles className="w-3.5 h-3.5" /> Google Gemini 2.5
              </span>
            </div>

            {/* Headline Principal Magnética */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] mb-6">
              Menos tela travada.{" "}
              <span className="inline-block bg-linear-to-r from-gym-primary via-emerald-300 to-gym-secondary bg-clip-text text-transparent">
                Mais quilos na barra.
              </span>
            </h1>

            {/* Subtítulo de Alta Conversão */}
            <p className="text-lg sm:text-xl text-gym-text max-w-2xl mb-8 leading-relaxed font-normal">
              O primeiro aplicativo de musculação{" "}
              <strong className="text-gym-primary font-medium">
                local-first
              </strong>{" "}
              com inteligência preditiva do{" "}
              <strong className="text-white font-medium">Google Gemini</strong>.
              Registre séries sem internet em 0ms, receba sugestões automáticas
              de sobrecarga (
              <strong className="text-white font-medium">Smart Overload</strong>
              ) e evolua de{" "}
              <strong className="text-gym-gold font-medium">
                Iniciante do Ferro a Lenda do Aço
              </strong>
              .
            </p>

            {/* CTAs de Download */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#download"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-extrabold text-gym-bg bg-gym-primary rounded-2xl shadow-[0_0_30px_rgba(0,230,118,0.35)] hover:shadow-[0_0_45px_rgba(0,230,118,0.55)] hover:bg-[#00c864] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <Download className="w-5 h-5 stroke-[2.5]" />
                <span>Baixar Grátis no Celular</span>
              </a>

              <a
                href="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-white bg-gym-card/80 border border-gym-border/90 rounded-2xl hover:bg-gym-surface hover:border-gym-primary/40 transition-all duration-200 backdrop-blur-md"
              >
                <span>Conhecer Recursos</span>
                <ChevronRight className="w-4 h-4 text-gym-primary" />
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
                <span>Zero Anúncios • Sem Cadastro Obrigatório</span>
              </div>

              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-gym-gold" />
                <span>Execução Fluida em 60 FPS</span>
              </div>
            </div>
          </motion.div>

          {/* Coluna do Mockup & Cards Flutuantes */}
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
                  +2.5kg sugerido no Supino
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
                  Level Up!
                </p>
                <p className="text-xs font-bold text-white">
                  Lenda do Aço alcançado 🔥
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
