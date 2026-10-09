"use client";

import { motion } from "framer-motion";
import { Award, Crown, Flame, Trophy, Zap } from "lucide-react";

export function Gamification() {
  const levels = [
    {
      rank: "Nível 1 - 10",
      title: "Iniciante do Ferro",
      desc: "Aprendizado motor e rotina",
    },
    {
      rank: "Nível 11 - 30",
      title: "Forjador de Séries",
      desc: "Consistência e sobrecarga",
    },
    {
      rank: "Nível 31 - 50",
      title: "Mestre do Volume",
      desc: "Intensidade e técnica refinada",
    },
    {
      rank: "Nível 51 - 80",
      title: "Titã da Carga",
      desc: "PRs constantes e quebra de platôs",
    },
    {
      rank: "Nível 81+",
      title: "Lenda do Aço",
      desc: "Consistência lendária e elite",
    },
  ];

  const achievements = [
    {
      title: "Clube dos 100kg",
      category: "Supino Reto com 3 dígitos",
      xp: "+1,000 XP",
      icon: Crown,
      color: "border-gym-gold/60 text-gym-gold bg-gym-gold/10",
    },
    {
      title: "Streak Imortal",
      category: "60 Dias sem furar treino",
      xp: "+2,500 XP",
      icon: Flame,
      color: "border-orange-500/60 text-orange-400 bg-orange-500/10",
    },
    {
      title: "Smart Overload 4x",
      category: "4 semanas seguidas subindo carga",
      xp: "+1,200 XP",
      icon: Zap,
      color: "border-gym-primary/60 text-gym-primary bg-gym-primary/10",
    },
    {
      title: "Muralha de Pernas",
      category: "Leg Day completo sem pular séries",
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
          {/* Lado Esquerdo: Descrição da Gamificação */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gym-card border border-gym-gold/40 text-xs font-semibold text-gym-gold mb-6 font-mono">
              <Trophy className="w-3.5 h-3.5" />
              <span>SISTEMA DE RPG & PROGRESSÃO REAL</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
              Musculação é o RPG da Vida Real. Aqui Seu Esforço{" "}
              <span className="text-gym-gold">Vale XP.</span>
            </h2>

            <p className="text-base sm:text-lg text-gym-text leading-relaxed mb-8">
              Chega de interfaces chatas que parecem planilhas de contabilidade.
              No GymUp, cada repetição concluída e cada tonelada erguida rendem
              experiência para o seu perfil. Evolua suas estatísticas e suba de
              nível na hierarquia do ferro.
            </p>

            {/* Escala de Patentes */}
            <div className="space-y-3 mb-8">
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-gym-text">
                {"// Trilha de Evolução do Atleta"}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {levels.map((lvl, idx) => (
                  <div
                    key={lvl.title}
                    className={`p-3 rounded-xl border transition-colors ${
                      idx === 4
                        ? "bg-gym-gold/10 border-gym-gold/40 text-white"
                        : "bg-gym-card/80 border-gym-border text-gym-text hover:border-gym-border/80"
                    }`}
                  >
                    <span className="text-[10px] font-mono font-bold text-gym-gold uppercase block">
                      {lvl.rank}
                    </span>
                    <strong className="text-sm font-bold text-white block mt-0.5">
                      {lvl.title}
                    </strong>
                    <span className="text-[11px] text-gym-text">
                      {lvl.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mecânicas de Gamificação */}
            <div className="space-y-3">
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-gym-card border border-gym-border">
                <div className="w-9 h-9 rounded-xl bg-gym-gold/15 flex items-center justify-center text-gym-gold shrink-0 border border-gym-gold/30">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Streaks Blindados
                  </h4>
                  <p className="text-xs text-gym-text mt-0.5">
                    Seus dias de descanso programado não quebram sua sequência.
                    Treine com consistência sem estimular o overtraining.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-gym-card border border-gym-border">
                <div className="w-9 h-9 rounded-xl bg-gym-primary/15 flex items-center justify-center text-gym-primary shrink-0 border border-gym-primary/30">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    XP por Tonelagem Erguida
                  </h4>
                  <p className="text-xs text-gym-text mt-0.5">
                    Carga multiplicada por repetições: veja o peso total
                    acumulado equivalente a carros, aviões ou montanhas.
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
                        Rank Elite
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-gym-surface text-white border border-gym-border">
                        Top 1%
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-white mt-0.5">
                      Lenda do Aço — Nível 84
                    </h3>
                  </div>
                </div>

                <div className="text-right font-mono">
                  <p className="text-xs text-gym-text">Total XP</p>
                  <p className="text-lg font-bold text-gym-gold">142,800</p>
                </div>
              </div>

              {/* Barra de Progresso de XP */}
              <div className="py-6 border-b border-gym-border/60">
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-gym-text">Progresso para Nível 85</span>
                  <span className="text-gym-primary font-bold">
                    8,400 / 10,000 XP (84%)
                  </span>
                </div>
                <div className="w-full h-3 bg-gym-surface rounded-full overflow-hidden p-0.5 border border-gym-border">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "84%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full bg-linear-to-r from-gym-primary via-emerald-400 to-gym-gold rounded-full"
                  />
                </div>
              </div>

              {/* Grid de Conquistas Desbloqueadas */}
              <div className="pt-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gym-text mb-4">
                  {"// Badges Desbloqueadas Recentemente"}
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
