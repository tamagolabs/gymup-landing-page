"use client";

import { motion } from "framer-motion";
import { Award, Crown, Flame, Sparkles, Trophy, Zap } from "lucide-react";

export function Gamification() {
  const achievements = [
    {
      title: "Clube dos 100kg",
      category: "Supino Reto",
      xp: "+1,000 XP",
      icon: Crown,
      color: "border-gym-gold/60 text-gym-gold bg-gym-gold/10",
    },
    {
      title: "Streak Imortal",
      category: "30 Dias Consecutivos",
      xp: "+2,500 XP",
      icon: Flame,
      color: "border-orange-500/60 text-orange-400 bg-orange-500/10",
    },
    {
      title: "20 Toneladas",
      category: "Volume Semanal",
      xp: "+800 XP",
      icon: Zap,
      color: "border-gym-primary/60 text-gym-primary bg-gym-primary/10",
    },
    {
      title: "Mestre da Disciplina",
      category: "Zero Treinos Pulados",
      xp: "+1,500 XP",
      icon: Award,
      color: "border-gym-secondary/60 text-gym-secondary bg-gym-secondary/10",
    },
  ];

  return (
    <section
      id="gamification"
      className="py-24 relative overflow-hidden bg-[#0B0E14] border-y border-gym-border/60"
    >
      {/* Glow de fundo */}
      <div className="absolute top-1/2 right-0 w-137.5 h-137.5 bg-gym-gold/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Lado Esquerdo: Descrição do Sistema de RPG */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gym-card border border-gym-gold/40 text-xs font-semibold text-gym-gold mb-6 font-mono">
              <Trophy className="w-3.5 h-3.5" />
              <span>SISTEMA DE RPG & PROGRESSÃO</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
              Transforme Cada Série em{" "}
              <span className="text-gym-gold">Experiência Real (XP)</span>
            </h2>

            <p className="text-base sm:text-lg text-gym-text leading-relaxed mb-8">
              A musculação é o RPG mais real do planeta: você treina, evolui
              seus atributos, aumenta sua força e sobe de nível. O GymUp traduz
              esse esforço com mecânicas psicologicamente calibradas para manter
              sua constância inabalável.
            </p>

            {/* Benefícios Gamificados */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gym-card border border-gym-border">
                <div className="w-10 h-10 rounded-xl bg-gym-gold/15 flex items-center justify-center text-gym-gold shrink-0 border border-gym-gold/30">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Streaks Protegidos
                  </h4>
                  <p className="text-xs text-gym-text mt-0.5">
                    Mantenha a chama acesa semana a semana com escudos de
                    descanso inteligente para não quebrar sua sequência em dias
                    de recuperação.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gym-card border border-gym-border">
                <div className="w-10 h-10 rounded-xl bg-gym-primary/15 flex items-center justify-center text-gym-primary shrink-0 border border-gym-primary/30">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Cálculo de Tonelagem Diária
                  </h4>
                  <p className="text-xs text-gym-text mt-0.5">
                    Cada quilo levantado é somado. Veja o gráfico de volume
                    acumulado equivalente a carros, aviões ou montanhas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gym-card border border-gym-border">
                <div className="w-10 h-10 rounded-xl bg-gym-secondary/15 flex items-center justify-center text-gym-secondary shrink-0 border border-gym-secondary/30">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Ligas Semanais & Rankings
                  </h4>
                  <p className="text-xs text-gym-text mt-0.5">
                    Dispute com amigos na Liga Ouro ou Platina com base em
                    pontuação de consistência, sem estimular lesões.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Widget Interativo de Conquistas & Rank */}
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
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-tr from-gym-gold via-yellow-500 to-amber-300 p-0.5 shadow-lg shadow-gym-gold/20">
                    <div className="w-full h-full bg-[#151A22] rounded-[14px] flex items-center justify-center text-gym-gold">
                      <Trophy className="w-8 h-8" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-gym-gold uppercase tracking-wider">
                        Rank Titânio IV
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-gym-surface text-white border border-gym-border">
                        Top 3%
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-white mt-0.5">
                      Nível 48 — Cyber Lifter
                    </h3>
                  </div>
                </div>

                <div className="text-right font-mono">
                  <p className="text-xs text-gym-text">Total XP</p>
                  <p className="text-lg font-bold text-gym-gold">48,250</p>
                </div>
              </div>

              {/* Barra de Progresso de XP */}
              <div className="py-6 border-b border-gym-border/60">
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-gym-text">Progresso para Nível 49</span>
                  <span className="text-gym-primary font-bold">
                    3,750 / 5,000 XP (75%)
                  </span>
                </div>
                <div className="w-full h-3 bg-gym-surface rounded-full overflow-hidden p-0.5 border border-gym-border">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full bg-linear-to-r from-gym-primary via-emerald-400 to-gym-gold rounded-full"
                  />
                </div>
              </div>

              {/* Grid de Conquistas Desbloqueadas */}
              <div className="pt-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gym-text mb-4">
                  {"// Últimas Medalhas Desbloqueadas"}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {achievements.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="p-3 rounded-2xl bg-gym-surface/60 border border-gym-border flex items-center gap-3 hover:bg-gym-surface transition-colors"
                      >
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${item.color}`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-white truncate">
                            {item.title}
                          </p>
                          <p className="text-[10px] text-gym-text truncate">
                            {item.category}
                          </p>
                          <p className="text-[10px] font-mono font-bold text-gym-gold mt-0.5">
                            {item.xp}
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
