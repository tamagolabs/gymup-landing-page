"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Crown,
  Dumbbell,
  Flame,
  Plus,
  TrendingUp,
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

  // Conquistas fiéis a src/constants/achievements.ts do App Real
  const badges = [
    {
      title: "Primeiro Passo",
      category: "1º treino completo no GymUp",
      xp: "+100 XP",
      icon: Trophy,
      glow: "border-[#FFD700]/50 text-[#FFD700] bg-[#FFD700]/10",
      metallic: "border-[#FFD700]/40",
      unlocked: true,
    },
    {
      title: "Ritmo Blindado",
      category: "25 treinos concluídos com sucesso",
      xp: "+500 XP",
      icon: Flame,
      glow: "border-[#FF7043]/50 text-[#FF7043] bg-[#FF7043]/10",
      metallic: "border-[#FF7043]/40",
      unlocked: true,
    },
    {
      title: "Hábito Inquebrável",
      category: "Streak de 30 dias sem quebrar",
      xp: "+1.000 XP",
      icon: Zap,
      glow: "border-gym-primary/50 text-gym-primary bg-gym-primary/10",
      metallic: "border-gym-primary/40",
      unlocked: true,
    },
    {
      title: "10 Toneladas",
      category: "Ergueu mais de 10.000 kg acumulados",
      xp: "+800 XP",
      icon: Dumbbell,
      glow: "border-gym-secondary/50 text-gym-secondary bg-gym-secondary/10",
      metallic: "border-gym-secondary/40",
      unlocked: true,
    },
    {
      title: "Centésimo Treino",
      category: "Marca épica de 100 treinos concluídos",
      xp: "+2.500 XP",
      icon: Crown,
      glow: "border-[#FFD700]/50 text-[#FFD700] bg-[#FFD700]/10",
      metallic: "border-[#FFD700]/40",
      unlocked: true,
    },
    {
      title: "Mestre da Sobrecarga",
      category: "10 semanas progredindo carga",
      xp: "+1.200 XP",
      icon: TrendingUp,
      glow: "border-gym-primary/50 text-gym-primary bg-gym-primary/10",
      metallic: "border-gym-primary/40",
      unlocked: true,
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
              Chega de interfaces monótonas que parecem planilhas de trabalho.
              No GymUp, cada série pesada anotada e cada tonelada erguida rendem
              pontos de experiência reais calculados por fórmula biomecânica.
              Suba de nível e colecione medalhas no seu perfil.
            </p>

            <div className="space-y-3.5">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gym-card border border-gym-border hover:border-gym-gold/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-gym-gold/15 flex items-center justify-center text-gym-gold shrink-0 border border-gym-gold/30">
                  <Flame className="w-5 h-5 text-[#FF7043]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Streaks Blindados (Disciplina Real)
                  </h4>
                  <p className="text-xs text-gym-text mt-0.5">
                    Dias de descanso programado respeitam sua recuperação e não
                    quebram sua sequência de treinos.
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
                    Cargas multiplicadas por repetições calculam seu volume
                    acumulado em toneladas para você visualizar a força bruta
                    construída.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Widget Interativo Fiel ao App Real */}
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

              {/* Status do Atleta Fiel ao XpHeader.tsx e Perfil do App */}
              <div className="flex items-center justify-between pb-6 border-b border-gym-border/60">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-tr from-gym-gold via-amber-400 to-yellow-200 p-0.5 shadow-lg shadow-gym-gold/25">
                    <div className="w-full h-full bg-[#151A22] rounded-[14px] flex items-center justify-center text-gym-gold">
                      <Trophy className="w-8 h-8 text-[#FFD700]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#FFD700] uppercase tracking-wider">
                        NÍVEL 14 • PRO
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#202836] text-[#FF7043] border border-[#242C3D] font-bold flex items-center gap-1">
                        <Flame className="w-3 h-3 fill-[#FF7043]" /> 18 treinos
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-white mt-0.5">
                      {isLevelUp
                        ? "Nível 15 — Mestre da Hipertrofia"
                        : "Nível 14 — Mestre da Hipertrofia"}
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

              {/* Barra de Nível Fiel ao XpHeader.tsx */}
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

                <div className="w-full h-3.5 bg-[#0B0E14] rounded-full overflow-hidden p-0.5 border border-gym-border relative">
                  <motion.div
                    className="h-full bg-linear-to-r from-gym-primary via-emerald-400 to-[#FFD700] rounded-full shadow-[0_0_12px_rgba(0,230,118,0.6)] transition-all duration-300"
                    style={{ width: `${Math.min(xpPercentage, 100)}%` }}
                  />
                </div>

                {/* Botão Interativo para testar ganho de XP */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[11px] text-gym-text font-mono">
                    {isLevelUp
                      ? "🔥 LEVEL UP! Próximo título: Colosso dos Treinos"
                      : "Faltam apenas 150 XP para upar!"}
                  </span>
                  <button
                    type="button"
                    onClick={handleAddXp}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gym-gold/15 border border-gym-gold/40 text-gym-gold hover:bg-gym-gold/25 text-xs font-bold font-mono transition-all active:scale-95 shadow-xs"
                  >
                    <Plus className="w-3.5 h-3.5 stroke-3" />
                    <span>
                      {isLevelUp ? "Resetar Simulação" : "+50 XP (Testar)"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Grade de Badges Fiel ao AchievementsGrid.tsx do App Real */}
              <div className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gym-text flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5 text-[#FFD700]" /> Conquistas
                    &amp; Badges Desbloqueadas
                  </h4>
                  <span className="text-xs font-mono font-bold text-[#FFD700]">
                    6/28
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {badges.map((badge) => {
                    const Icon = badge.icon;
                    return (
                      <div
                        key={badge.title}
                        className={`p-3 rounded-2xl bg-[#151A22] border ${badge.metallic} flex items-center justify-between gap-3 transition-all duration-200 hover:-translate-y-0.5 shadow-sm`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${badge.glow}`}
                          >
                            <Icon className="w-4.5 h-4.5 stroke-[2.2]" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs font-bold text-white truncate leading-tight">
                              {badge.title}
                            </p>
                            <p className="text-[10px] text-gym-text truncate mt-0.5">
                              {badge.category}
                            </p>
                          </div>
                        </div>

                        {/* XP Pill Fiel ao App Real */}
                        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FFD700]/15 border border-[#FFD700]/30 text-[10px] font-mono font-bold text-[#FFD700] shrink-0">
                          <CheckCircle2 className="w-3 h-3 text-[#FFD700]" />
                          <span>{badge.xp}</span>
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
