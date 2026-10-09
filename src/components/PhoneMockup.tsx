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
    <div className="relative mx-auto w-full max-w-85 sm:max-w-90 select-none">
      {/* Glow de fundo */}
      <div className="absolute -inset-4 bg-linear-to-r from-gym-primary/20 via-gym-secondary/20 to-gym-gold/20 rounded-[48px] blur-2xl opacity-70" />

      {/* Frame do Celular */}
      <div className="relative rounded-[44px] border-[5px] border-[#242C3D] bg-[#0B0E14] p-3 shadow-2xl shadow-black/80 overflow-hidden">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#151A22] rounded-full z-30 flex items-center justify-between px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-gym-bg border border-gym-border/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-gym-primary/80 animate-pulse" />
        </div>

        {/* Tela do App */}
        <div className="rounded-[36px] bg-[#0B0E14] border border-gym-border/60 p-4 pt-9 flex flex-col gap-3 min-h-140">
          {/* Header do Treino */}
          <div className="flex items-center justify-between border-b border-gym-border/60 pb-3">
            <div>
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-gym-primary">
                <span className="w-2 h-2 rounded-full bg-gym-primary animate-ping" />
                TREINO EM ANDAMENTO • OFFLINE
              </div>
              <h4 className="text-sm font-bold text-white tracking-wide">
                Treino A: Peito & Tríceps
              </h4>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gym-card border border-gym-border text-[11px] text-gym-gold font-bold">
              <Trophy className="w-3.5 h-3.5 text-gym-gold" />
              <span>Nvl 24</span>
            </div>
          </div>

          {/* Gemini AI Coach Card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl bg-linear-to-br from-[#151A22] to-[#202836] p-3 border border-gym-secondary/40 relative overflow-hidden"
          >
            <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-gym-secondary/10 rounded-full blur-xl" />
            <div className="flex items-center gap-1.5 text-gym-secondary text-xs font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Gemini AI Coach</span>
              <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded bg-gym-secondary/20 text-gym-secondary border border-gym-secondary/30">
                Preditivo
              </span>
            </div>
            <p className="text-[11px] text-gym-text leading-relaxed">
              Recuperação muscular excelente. Sugiro elevar a última série do
              Supino para{" "}
              <strong className="text-white">92.5kg (+2.5kg)</strong>. Seu RIR
              estimado é 2.
            </p>
          </motion.div>

          {/* Exercício Ativo */}
          <div className="rounded-xl bg-gym-card border border-gym-border p-3 flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gym-surface flex items-center justify-center text-gym-primary border border-gym-border">
                  <Dumbbell className="w-4 h-4" />
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
              <span className="text-[10px] text-gym-primary font-mono bg-gym-primary/10 px-2 py-0.5 rounded border border-gym-primary/20">
                PR: 95kg
              </span>
            </div>

            {/* Séries Registradas */}
            <div className="space-y-1.5 text-[11px] font-mono">
              <div className="grid grid-cols-4 text-[10px] text-gym-text/80 px-2 pb-1 border-b border-gym-border/40">
                <span>SET</span>
                <span>CARGA</span>
                <span>REPS</span>
                <span className="text-right">STATUS</span>
              </div>
              <div className="grid grid-cols-4 items-center bg-gym-surface/40 px-2 py-1 rounded border border-gym-border/30 text-gym-text">
                <span>1</span>
                <span>80 kg</span>
                <span>10 reps</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-gym-primary justify-self-end" />
              </div>
              <div className="grid grid-cols-4 items-center bg-gym-surface/40 px-2 py-1 rounded border border-gym-border/30 text-gym-text">
                <span>2</span>
                <span>85 kg</span>
                <span>8 reps</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-gym-primary justify-self-end" />
              </div>
              <div className="grid grid-cols-4 items-center bg-gym-primary/10 px-2 py-1 rounded border border-gym-primary/30 text-white font-bold">
                <span className="text-gym-primary">3</span>
                <span>90 kg</span>
                <span>8 reps</span>
                <span className="text-[10px] text-gym-gold justify-self-end flex items-center gap-0.5">
                  <Flame className="w-3 h-3 text-gym-gold" /> PR
                </span>
              </div>
            </div>

            {/* Descanso Timer com +15s / -15s */}
            <div className="flex items-center justify-between pt-2 border-t border-gym-border/40 text-xs">
              <div className="flex items-center gap-1.5 text-gym-text">
                <Clock className="w-3.5 h-3.5 text-gym-primary" />
                <span>Timer:</span>
                <span className="font-mono font-bold text-white text-xs">
                  01:24
                </span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[10px]">
                <span className="px-1.5 py-0.5 rounded bg-gym-surface border border-gym-border text-gym-text">
                  -15s
                </span>
                <span className="px-1.5 py-0.5 rounded bg-gym-primary/10 border border-gym-primary/30 text-gym-primary font-bold">
                  +15s
                </span>
                <span className="w-2 h-2 rounded-full bg-gym-primary animate-ping ml-0.5" />
              </div>
            </div>
          </div>

          {/* Gamificação XP Toast Popup */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="rounded-xl bg-[#202836] border border-gym-gold/40 p-2.5 flex items-center gap-2.5 shadow-lg shadow-gym-gold/5"
          >
            <div className="w-8 h-8 rounded-lg bg-gym-gold/20 flex items-center justify-center text-gym-gold border border-gym-gold/30 shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-bold text-white flex items-center gap-1">
                +120 XP Ganho!{" "}
                <span className="text-gym-gold text-[10px]">
                  • Streak 18 dias
                </span>
              </p>
              <div className="w-full bg-[#151A22] h-1.5 rounded-full mt-1 overflow-hidden border border-gym-border/40">
                <div className="bg-linear-to-r from-gym-primary to-gym-gold h-full w-[78%] rounded-full" />
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
              <span>Ranks</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
