"use client";

import { motion } from "framer-motion";
import {
  Award,
  Crown,
  Flame,
  Plus,
  Shield,
  Sparkles,
  Trophy,
  Zap,
} from "lucide-react";
import { useState } from "react";

export function Gamification() {
  // Estado interativo para a barra de XP
  const [xp, setXp] = useState(1850);
  const targetXp = 2000;
  const isLevelUp = xp >= targetXp;

  const handleAddXp = () => {
    if (xp >= targetXp) {
      setXp(1850); // reset para testar de novo
    } else {
      setXp((prev) => Math.min(prev + 50, targetXp));
    }
  };

  const badges = [
    {
      title: "Primeiro Passo",
      category: "Primeiro Treino Registrado",
      xp: "+200 XP",
      icon: Shield,
      glow: "border-gym-primary/60 text-gym-primary bg-gym-primary/10 shadow-[0_0_20px_rgba(0,230,118,0.25)]",
      metallic: "bg-gradient-to-br from-emerald-400/20 to-transparent",
    },
    {
      title: "10.000 kg Movidos",
      category: "Tonelagem de Força Bruta",
      xp: "+800 XP",
      icon: Zap,
      glow: "border-gym-secondary/60 text-gym-secondary bg-gym-secondary/10 shadow-[0_0_20px_rgba(139,92,246,0.25)]",
      metallic: "bg-gradient-to-br from-violet-400/20 to-transparent",
    },
    {
      title: "Streak de 30 Dias",
      category: "Disciplina Inabalável",
      xp: "+1,500 XP",
      icon: Flame,
      glow: "border-orange-500/60 text-orange-400 bg-orange-500/10 shadow-[0_0_20px_rgba(249,115,22,0.25)]",
      metallic: "bg-gradient-to-br from-orange-400/20 to-transparent",
    },
    {
      title: "Clube dos 100kg",
      category: "Supino Reto com 3 Dígitos",
      xp: "+1,000 XP",
      icon: Crown,
      glow: "border-gym-gold/60 text-gym-gold bg-gym-gold/10 shadow-[0_0_20px_rgba(255,215,0,0.3)]",
      metallic: "bg-gradient-to-br from-yellow-400/20 to-transparent",
    },
    {
      title: "Muralha de Pernas",
      category: "Leg Day Completo Sem Pular Séries",
      xp: "+600 XP",
      icon: Award,
      glow: "border-cyan-500/60 text-cyan-400 bg-cyan-500/10 shadow-[0_0_20px_rgba(6,182,212,0.25)]",
      metallic: "bg-gradient-to-br from-cyan-400/20 to-transparent",
    },
    {
      title: "Smart Overload 4x",
      category: "4 Semanas Seguidas Aumentando Carga",
      xp: "+1,200 XP",
      icon: Sparkles,
      glow: "border-gym-primary/60 text-gym-primary bg-gym-primary/10 shadow-[0_0_20px_rgba(0,230,118,0.25)]",
      metallic: "bg-gradient-to-br from-emerald-400/20 to-transparent",
    },
  ];

  const xpPercentage = Math.round((xp / targetXp) * 100);

  return (
    <section
      id="gamificacao"
      className="py-24 relative overflow-hidden bg-[#0B0E14] border-y border-gym-border/60"
    >
      {/* Glow de fundo dourado */}
      <div className="absolute top-1/2 right-0 w-137.5 h-137.5 bg-gym-gold/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Lado Esquerdo: Descrição e Explicação da Gamificação */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gym-card border border-gym-gold/40 text-xs font-semibold text-gym-gold mb-6 font-mono">
              <Trophy className="w-3.5 h-3.5" />
              <span>SISTEMA DE RPG &amp; PROGRESSÃO REAL</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
              Musculação é o RPG da Vida Real. Aqui Seu Esforço{" "}
              <span className="text-gym-gold drop-shadow-[0_0_24px_rgba(255,215,0,0.45)]">
                Vale XP.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gym-text leading-relaxed mb-8">
              Chega de interfaces monótonas parecidas com planilhas de trabalho.
              No GymUp, cada série pesada concluída e cada tonelada acumulada
              rendem pontos de experiência (XP). Suba de nível, desbloqueie
              medalhas com brilho metálico e honre sua constância.
            </p>

            <div className="space-y-3.5">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gym-card border border-gym-border hover:border-gym-gold/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-gym-gold/15 flex items-center justify-center text-gym-gold shrink-0 border border-gym-gold/30">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Streaks Blindados
                  </h4>
                  <p className="text-xs text-gym-text mt-0.5">
                    Dias de descanso programado não quebram sua sequência. Sua
                    consistência é recompensada sem estimular lesões.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gym-card border border-gym-border hover:border-gym-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-gym-primary/15 flex items-center justify-center text-gym-primary shrink-0 border border-gym-primary/30">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    XP por Tonelagem Erguida
                  </h4>
                  <p className="text-xs text-gym-text mt-0.5">
                    Carga multiplicada por repetições: visualize o peso total
                    erguido correspondente a carros ou monumentos históricos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Widget Interativo com Barra de Nível e Grade de Badges */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-gym-card border border-gym-border/80 p-6 sm:p-8 relative shadow-2xl overflow-hidden"
            >
              {/* Efeito Glow Dourado */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gym-gold/10 rounded-full blur-3xl pointer-events-none" />

              {/* Status do Jogador / Atleta */}
              <div className="flex items-center justify-between pb-6 border-b border-gym-border/60">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-tr from-gym-gold via-amber-400 to-yellow-200 p-0.5 shadow-lg shadow-gym-gold/25">
                    <div className="w-full h-full bg-[#151A22] rounded-[14px] flex items-center justify-center text-gym-gold">
                      <Trophy className="w-8 h-8" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-gym-gold uppercase tracking-wider">
                        Rank Veterano
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-gym-surface text-white border border-gym-border font-bold">
                        Top 5%
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-white mt-0.5">
                      {isLevelUp
                        ? "Nível 15 — Mestre da Forja"
                        : "Nível 14 — Titã do Ferro"}
                    </h3>
                  </div>
                </div>

                <div className="text-right font-mono">
                  <p className="text-xs text-gym-text">XP Acumulado</p>
                  <p className="text-lg font-bold text-gym-gold">
                    {xp.toLocaleString("pt-BR")} XP
                  </p>
                </div>
              </div>

              {/* Barra de Nível Interativa (Requisito: Nível 14 - Titã do Ferro, 1.850 / 2.000 XP) */}
              <div className="py-6 border-b border-gym-border/60">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-gym-text">
                    Progresso para o Nível {isLevelUp ? 16 : 15}
                  </span>
                  <span className="text-gym-primary font-bold">
                    {xp.toLocaleString("pt-BR")} /{" "}
                    {targetXp.toLocaleString("pt-BR")} XP ({xpPercentage}%)
                  </span>
                </div>

                <div className="w-full h-4 bg-gym-surface rounded-full overflow-hidden p-0.5 border border-gym-border relative">
                  <motion.div
                    className="h-full bg-linear-to-r from-gym-primary via-emerald-400 to-gym-gold rounded-full shadow-[0_0_12px_rgba(0,230,118,0.6)] transition-all duration-300"
                    style={{ width: `${Math.min(xpPercentage, 100)}%` }}
                  />
                </div>

                {/* Botão Interativo para testar o ganho de XP */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[11px] text-gym-text font-mono">
                    {isLevelUp
                      ? "🔥 LEVEL UP ALCANÇADO!"
                      : "Faltam apenas 150 XP para upar!"}
                  </span>
                  <button
                    type="button"
                    onClick={handleAddXp}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gym-gold/15 border border-gym-gold/40 text-gym-gold hover:bg-gym-gold/25 text-xs font-bold font-mono transition-all active:scale-95 shadow-sm"
                  >
                    <Plus className="w-3.5 h-3.5 stroke-3" />
                    <span>
                      {isLevelUp ? "Resetar Simulação" : "+50 XP (Testar)"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Grade de Badges com Brilho Metálico / Neon */}
              <div className="pt-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gym-text mb-4">
                  {"// Badges com Brilho Metálico & Neon"}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {badges.map((badge) => {
                    const Icon = badge.icon;
                    return (
                      <div
                        key={badge.title}
                        className={`p-3 rounded-2xl bg-gym-surface/60 border border-gym-border flex items-center gap-3 transition-all duration-200 hover:-translate-y-0.5 ${badge.metallic}`}
                      >
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${badge.glow}`}
                        >
                          <Icon className="w-5 h-5 stroke-[2.2]" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-white truncate">
                            {badge.title}
                          </p>
                          <p className="text-[10px] text-gym-text truncate">
                            {badge.category}
                          </p>
                          <p className="text-[10px] font-mono font-bold text-gym-gold mt-0.5">
                            {badge.xp}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
