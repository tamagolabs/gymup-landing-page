"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  Cpu,
  Dumbbell,
  Flame,
  Sparkles,
  Trophy,
  Zap,
} from "lucide-react";

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-85 sm:max-w-90 select-none group perspective-distant">
      {/* Glow de fundo neon */}
      <div className="absolute -inset-4 bg-linear-to-r from-gym-primary/25 via-gym-secondary/20 to-gym-gold/25 rounded-[48px] blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Frame do Celular com efeito 3D sutil */}
      <div className="relative rounded-[46px] border-[5px] border-[#242C3D] bg-[#0B0E14] p-3 shadow-2xl shadow-black/90 transition-transform duration-500 group-hover:transform-[rotateY(-3deg)_rotateX(2deg)]">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#151A22] rounded-full z-30 flex items-center justify-between px-3 shadow-inner">
          <div className="w-2.5 h-2.5 rounded-full bg-[#0B0E14] border border-gym-border/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-gym-primary animate-pulse" />
        </div>

        {/* Tela do App GymUp */}
        <div className="rounded-[36px] bg-[#0B0E14] border border-gym-border/60 p-4 pt-9 flex flex-col gap-3 min-h-145">
          {/* Header do Treino Ativo */}
          <div className="flex items-center justify-between border-b border-gym-border/60 pb-3">
            <div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-gym-primary tracking-wide">
                <span className="w-2 h-2 rounded-full bg-gym-primary animate-ping" />
                TREINO ATIVO • 100% OFFLINE
              </div>
              <h4 className="text-sm font-bold text-white tracking-tight mt-0.5">
                Peito & Tríceps (Hipertrofia)
              </h4>
            </div>
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#151A22] border border-gym-gold/40 text-[11px] text-gym-gold font-bold shadow-sm">
              <Trophy className="w-3.5 h-3.5 text-gym-gold" />
              <span>Nvl 14</span>
            </div>
          </div>

          {/* Gemini AI Coach Card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-linear-to-br from-[#151A22] via-[#1a202c] to-[#202836] p-3.5 border border-gym-secondary/40 relative overflow-hidden"
          >
            <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-gym-secondary/15 rounded-full blur-xl" />
            <div className="flex items-center gap-1.5 text-gym-secondary text-xs font-bold mb-1">
              <Sparkles className="w-3.5 h-3.5 text-gym-secondary" />
              <span>Google Gemini Coach</span>
              <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded bg-gym-secondary/20 text-gym-secondary border border-gym-secondary/30 font-mono">
                Preditivo
              </span>
            </div>
            <p className="text-[11px] text-gym-text leading-relaxed">
              Manguito recuperado. Sugiro elevar a última série do Supino para{" "}
              <strong className="text-white">92kg (+2kg)</strong> com RIR 2.
            </p>
          </motion.div>

          {/* Card de Exercício Ativo */}
          <div className="rounded-2xl bg-[#151A22] border border-gym-border p-3.5 flex flex-col gap-2.5 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#202836] flex items-center justify-center text-gym-primary border border-gym-border">
                  <Dumbbell className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">
                    Supino Reto com Barra
                  </p>
                  <p className="text-[10px] text-gym-text">
                    3 de 4 séries concluídas
                  </p>
                </div>
              </div>
              <span className="text-[10px] text-gym-primary font-mono bg-gym-primary/10 px-2 py-0.5 rounded-md border border-gym-primary/30 font-bold">
                PR: 95kg
              </span>
            </div>

            {/* Tabela de Séries */}
            <div className="space-y-1.5 text-[11px] font-mono">
              <div className="grid grid-cols-4 text-[10px] text-gym-text/70 px-2 pb-1 border-b border-gym-border/40">
                <span>SET</span>
                <span>CARGA</span>
                <span>REPS</span>
                <span className="text-right">STATUS</span>
              </div>
              <div className="grid grid-cols-4 items-center bg-[#202836]/40 px-2 py-1.5 rounded-lg border border-gym-border/40 text-gym-text">
                <span>1</span>
                <span>80 kg</span>
                <span>10 reps</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-gym-primary justify-self-end" />
              </div>
              <div className="grid grid-cols-4 items-center bg-[#202836]/40 px-2 py-1.5 rounded-lg border border-gym-border/40 text-gym-text">
                <span>2</span>
                <span>85 kg</span>
                <span>8 reps</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-gym-primary justify-self-end" />
              </div>
              <div className="grid grid-cols-4 items-center bg-gym-primary/15 px-2 py-1.5 rounded-lg border border-gym-primary/40 text-white font-bold">
                <span className="text-gym-primary">3</span>
                <span>90 kg</span>
                <span>8 reps</span>
                <span className="text-[10px] text-gym-gold justify-self-end flex items-center gap-0.5">
                  <Flame className="w-3 h-3 text-gym-gold" /> PR
                </span>
              </div>
            </div>

            {/* Cronômetro de Descanso com feedback +15s / -15s */}
            <div className="flex items-center justify-between pt-2 border-t border-gym-border/40 text-xs">
              <div className="flex items-center gap-1.5 text-gym-text">
                <Clock className="w-3.5 h-3.5 text-gym-primary" />
                <span className="text-[11px]">Descanso:</span>
                <span className="font-mono font-bold text-white text-xs">
                  01:15
                </span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[10px]">
                <button
                  type="button"
                  className="px-2 py-0.5 rounded-md bg-[#202836] border border-gym-border text-gym-text hover:text-white transition-colors"
                >
                  -15s
                </button>
                <button
                  type="button"
                  className="px-2 py-0.5 rounded-md bg-gym-primary/15 border border-gym-primary/30 text-gym-primary font-bold hover:bg-gym-primary/25 transition-colors"
                >
                  +15s
                </button>
                <span className="w-2 h-2 rounded-full bg-gym-primary animate-ping ml-0.5" />
              </div>
            </div>
          </div>

          {/* Badge de XP Ganho (+150 XP) */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="rounded-2xl bg-linear-to-r from-[#202836] to-[#151A22] border border-gym-gold/40 p-3 flex items-center gap-3 shadow-lg shadow-gym-gold/10"
          >
            <div className="w-9 h-9 rounded-xl bg-gym-gold/20 flex items-center justify-center text-gym-gold border border-gym-gold/40 shrink-0">
              <Zap className="w-4 h-4 fill-gym-gold" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-white flex items-center justify-between">
                <span>+150 XP Ganho!</span>
                <span className="text-gym-gold text-[10px] font-mono">
                  Nível 14 • 92%
                </span>
              </p>
              <div className="w-full bg-[#0B0E14] h-1.5 rounded-full mt-1.5 overflow-hidden border border-gym-border/50">
                <div className="bg-linear-to-r from-gym-primary via-emerald-400 to-gym-gold h-full w-[92%] rounded-full shadow-[0_0_8px_rgba(255,215,0,0.5)]" />
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar Simulator */}
          <div className="mt-auto pt-2 border-t border-gym-border/60 flex items-center justify-around text-gym-text text-[10px]">
            <div className="flex flex-col items-center gap-0.5 text-gym-primary font-bold">
              <Dumbbell className="w-4 h-4" />
              <span>Treino</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 hover:text-white transition-colors">
              <Cpu className="w-4 h-4" />
              <span>Gemini IA</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 hover:text-white transition-colors">
              <Trophy className="w-4 h-4" />
              <span>Níveis</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
