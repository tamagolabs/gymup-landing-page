"use client";

import { motion } from "framer-motion";
import {
  BarChart2,
  Calendar,
  Check,
  Clock,
  Dumbbell,
  FileText,
  Flame,
  Info,
  Maximize2,
  RotateCcw,
  Settings,
  Sparkles,
  TrendingUp,
  Trophy,
  User,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

export type MockupTab = "active_workout" | "home" | "resumo" | "profile";

export function PhoneMockup() {
  const [activeTab, setActiveTab] = useState<MockupTab>("active_workout");
  const [overloadApplied, setOverloadApplied] = useState(false);
  const [activeDayIndex, setActiveDayIndex] = useState(0);

  return (
    <div className="relative mx-auto w-full max-w-85 sm:max-w-91.25 select-none group perspective-distant">
      {/* Glow de fundo neon dinâmico */}
      <div className="absolute -inset-4 bg-linear-to-r from-gym-primary/25 via-gym-secondary/20 to-gym-gold/25 rounded-[48px] blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Frame do Celular com acabamento realista de smartphone escuro */}
      <div className="relative rounded-[46px] border-[5px] border-[#242C3D] bg-[#0B0E14] p-2.5 sm:p-3 shadow-2xl shadow-black/90 transition-transform duration-500 group-hover:transform-[rotateY(-2deg)_rotateX(2deg)]">
        {/* Dynamic Island / Notch do iPhone */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#151A22] rounded-full z-30 flex items-center justify-between px-3 shadow-inner">
          <div className="w-2.5 h-2.5 rounded-full bg-[#0B0E14] border border-gym-border/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-gym-primary animate-pulse" />
        </div>

        {/* Seletor rápido de Telas Reais do App no topo */}
        <div className="absolute -top-11 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-[#151A22]/95 border border-gym-border px-2 py-1 rounded-full text-[10px] font-mono shadow-xl backdrop-blur-md z-40 whitespace-nowrap">
          <span className="text-gym-text/80 px-1 font-sans font-semibold hidden sm:inline">
            Tela:
          </span>
          <button
            type="button"
            onClick={() => setActiveTab("active_workout")}
            className={`px-2 py-0.5 rounded-full font-bold transition-colors ${
              activeTab === "active_workout"
                ? "bg-gym-primary text-[#0B0E14]"
                : "text-gym-text hover:text-white"
            }`}
          >
            Treino
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("home")}
            className={`px-2 py-0.5 rounded-full font-bold transition-colors ${
              activeTab === "home"
                ? "bg-gym-primary text-[#0B0E14]"
                : "text-gym-text hover:text-white"
            }`}
          >
            Hoje
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("resumo")}
            className={`px-2 py-0.5 rounded-full font-bold transition-colors ${
              activeTab === "resumo"
                ? "bg-gym-primary text-[#0B0E14]"
                : "text-gym-text hover:text-white"
            }`}
          >
            Resumo
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("profile")}
            className={`px-2 py-0.5 rounded-full font-bold transition-colors ${
              activeTab === "profile"
                ? "bg-gym-primary text-[#0B0E14]"
                : "text-gym-text hover:text-white"
            }`}
          >
            Perfil
          </button>
        </div>

        {/* Display do Smartphone (100% Fiel ao código React Native do GymUp) */}
        <div className="rounded-[36px] bg-[#0B0E14] border border-gym-border/60 pt-7 flex flex-col justify-between min-h-146.25 overflow-hidden text-left font-sans">
          {/* ==========================================================
              TELA 1: TREINO ATIVO (app/workout/[dayId].tsx)
             ========================================================== */}
          {activeTab === "active_workout" && (
            <motion.div
              key="active_workout"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col p-3 pb-2 gap-2 overflow-hidden"
            >
              {/* WorkoutTopBar Real */}
              <div className="flex items-center justify-between pb-2 border-b border-[#242C3D] -mx-1 px-2 pt-1">
                <button
                  type="button"
                  className="p-1 text-gym-text hover:text-white"
                  aria-label="Pausar treino"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
                <div className="text-center">
                  <h4 className="text-[12px] font-bold text-white tracking-tight leading-tight">
                    Treino A — Peito &amp; Tríceps
                  </h4>
                  <div className="inline-flex items-center gap-1 text-[10px] font-mono text-[#FF7043] font-bold">
                    <Clock className="w-3 h-3 text-[#FF7043]" />
                    <span>24:18</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="px-2.5 py-1 rounded-lg bg-gym-primary text-[#0B0E14] text-[11px] font-black hover:bg-[#00f880] transition-colors shadow-sm"
                >
                  Concluir
                </button>
              </div>

              {/* OverloadSuggestionBanner Real (src/components/workout/OverloadSuggestionBanner.tsx) */}
              <div className="rounded-xl bg-[#151A22] border border-[#FFD700]/30 p-2.5 relative shadow-sm">
                <div className="flex items-start justify-between gap-1 mb-1">
                  <div className="flex items-center gap-1.5 text-[#FFD700] text-[11px] font-extrabold">
                    <TrendingUp className="w-3.5 h-3.5 text-[#FFD700]" />
                    <span>Sobrecarga: Aumentar +2.0 kg</span>
                    <span className="text-[8px] px-1 py-0.2 rounded bg-[#FFD700]/20 text-[#FFD700] font-mono border border-[#FFD700]/30">
                      PRO
                    </span>
                  </div>
                  <X className="w-3 h-3 text-gym-text/60 cursor-pointer" />
                </div>
                <p className="text-[9.5px] text-gym-text leading-tight mb-2">
                  Você completou todas as séries com facilidade na última
                  sessão.
                </p>
                <button
                  type="button"
                  onClick={() => setOverloadApplied(!overloadApplied)}
                  className={`w-full py-1.5 px-2 rounded-lg text-[10px] font-black flex items-center justify-center gap-1.5 transition-all ${
                    overloadApplied
                      ? "bg-gym-primary text-[#0B0E14] shadow-md shadow-gym-primary/20"
                      : "bg-[#FFD700] text-[#0B0E14] hover:bg-[#ffe033]"
                  }`}
                >
                  <Zap className="w-3 h-3 fill-[#0B0E14] text-[#0B0E14]" />
                  <span>
                    {overloadApplied
                      ? "✓ +2.0 kg APLICADO!"
                      : "APLICAR (+2.0kg)"}
                  </span>
                </button>
              </div>

              {/* ExerciseCard Real (src/components/workout/ExerciseCard.tsx) */}
              <div className="rounded-xl bg-[#151A22] border border-[#242C3D] p-2.5 flex flex-col gap-2 shadow-sm">
                {/* Header do Exercício com Badges reais */}
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="text-[12px] font-bold text-white leading-tight">
                      Supino Reto com Barra
                    </h5>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="text-[8px] px-1.5 py-0.2 rounded bg-[#202836] text-gym-text font-semibold border border-[#242C3D]">
                        Peitoral
                      </span>
                      <span className="text-[8px] px-1.5 py-0.2 rounded bg-[#202836] text-gym-text font-semibold border border-[#242C3D]">
                        Barra
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      className="p-1 rounded bg-[#202836] border border-[#242C3D] text-gym-primary"
                      aria-label="Trocar exercício"
                    >
                      <RotateCcw className="w-3 h-3" />
                    </button>
                    <Info className="w-3 h-3 text-gym-text" />
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full bg-[#202836] text-gym-primary border border-[#242C3D]">
                      3/4
                    </span>
                  </div>
                </div>

                {/* Dica Biomecânica */}
                <div className="bg-[#202836]/60 rounded-lg p-1.5 flex items-center gap-1.5 text-[9px] text-[#FFD700]">
                  <span>💡</span>
                  <span className="text-gym-text">
                    Mantenha as escápulas retraídas durante o movimento.
                  </span>
                </div>

                {/* Tabela de Séries Real (SÉRIE | ALVO | PESO | REPS | STATUS) */}
                <div className="space-y-1 font-mono text-[10px]">
                  <div className="grid grid-cols-12 text-[8.5px] font-bold text-gym-text/80 px-1 border-b border-[#242C3D] pb-1">
                    <span className="col-span-2">SÉRIE</span>
                    <span className="col-span-3">ALVO</span>
                    <span className="col-span-3 text-center">PESO</span>
                    <span className="col-span-2 text-center">REPS</span>
                    <span className="col-span-2 text-right">STATUS</span>
                  </div>

                  {/* Série 1 */}
                  <div className="grid grid-cols-12 items-center bg-[#202836]/30 px-1 py-1 rounded border border-[#242C3D]/40 text-gym-text">
                    <span className="col-span-2 font-bold text-gym-primary">
                      #1
                    </span>
                    <span className="col-span-3 text-[9px]">
                      10-12{" "}
                      <span className="text-[#FF7043] block text-[7.5px] font-bold">
                        Ant: 80kg×10
                      </span>
                    </span>
                    <span className="col-span-3 text-center font-bold text-white">
                      80 kg
                    </span>
                    <span className="col-span-2 text-center text-white">
                      10
                    </span>
                    <div className="col-span-2 flex justify-end">
                      <div className="w-5 h-5 rounded-full bg-gym-primary flex items-center justify-center text-[#0B0E14] shadow-xs">
                        <Check className="w-3 h-3 stroke-3" />
                      </div>
                    </div>
                  </div>

                  {/* Série 2 */}
                  <div className="grid grid-cols-12 items-center bg-[#202836]/30 px-1 py-1 rounded border border-[#242C3D]/40 text-gym-text">
                    <span className="col-span-2 font-bold text-gym-primary">
                      #2
                    </span>
                    <span className="col-span-3 text-[9px]">
                      10-12{" "}
                      <span className="text-[#FF7043] block text-[7.5px] font-bold">
                        Ant: 85kg×8
                      </span>
                    </span>
                    <span className="col-span-3 text-center font-bold text-white">
                      85 kg
                    </span>
                    <span className="col-span-2 text-center text-white">8</span>
                    <div className="col-span-2 flex justify-end">
                      <div className="w-5 h-5 rounded-full bg-gym-primary flex items-center justify-center text-[#0B0E14] shadow-xs">
                        <Check className="w-3 h-3 stroke-3" />
                      </div>
                    </div>
                  </div>

                  {/* Série 3 (Ativa / Steppers reais do app: -1, +1, +5) */}
                  <div className="grid grid-cols-12 items-center bg-gym-primary/10 px-1 py-1 rounded border border-gym-primary/40 text-white font-bold">
                    <span className="col-span-2 text-gym-primary">#3</span>
                    <span className="col-span-3 text-[9px] text-gym-text">
                      8-10{" "}
                      <span className="text-gym-primary block text-[7.5px]">
                        60s
                      </span>
                    </span>
                    <div className="col-span-3 flex flex-col items-center">
                      <span className="text-white text-[11px] font-black">
                        {overloadApplied ? "92 kg" : "90 kg"}
                      </span>
                      <div className="flex items-center gap-0.5 text-[7.5px] text-gym-primary mt-0.5">
                        <span className="px-1 rounded bg-[#202836] border border-[#242C3D] font-bold">
                          -1
                        </span>
                        <span className="px-1 rounded bg-[#202836] border border-[#242C3D] font-bold">
                          +1
                        </span>
                        <span className="px-1 rounded bg-gym-primary/20 text-gym-primary font-bold border border-gym-primary/30">
                          +5
                        </span>
                      </div>
                    </div>
                    <span className="col-span-2 text-center text-white">8</span>
                    <div className="col-span-2 flex justify-end">
                      <div className="w-5 h-5 rounded-full bg-[#202836] border border-[#242C3D] flex items-center justify-center text-gym-text">
                        <Check className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Rest Timer Modal Real (src/components/workout/RestTimerModal.tsx) */}
              <div className="mt-auto rounded-xl bg-[#202836] border border-gym-primary/50 p-2 flex items-center justify-between text-xs shadow-lg shadow-black/80">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-full bg-gym-primary/20 flex items-center justify-center text-gym-primary">
                    <Clock className="w-3.5 h-3.5 text-gym-primary" />
                  </div>
                  <div>
                    <span className="font-mono font-black text-white text-[11px] block leading-none">
                      01:15
                    </span>
                    <span className="text-[8.5px] text-gym-text">
                      descanso em andamento...
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 font-mono text-[9px]">
                  <button
                    type="button"
                    className="px-1.5 py-0.5 rounded bg-[#151A22] border border-[#242C3D] text-gym-primary font-bold hover:bg-gym-primary/10"
                  >
                    +15s
                  </button>
                  <button
                    type="button"
                    className="p-1 rounded bg-[#151A22] border border-[#242C3D] text-gym-text"
                    aria-label="Expandir cronômetro"
                  >
                    <Maximize2 className="w-2.5 h-2.5" />
                  </button>
                  <button
                    type="button"
                    className="p-1 rounded bg-[#151A22] border border-[#242C3D] text-gym-text"
                    aria-label="Fechar cronômetro"
                  >
                    <X className="w-2.5 h-2.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* ==========================================================
              TELA 2: HOJE / HOME (app/(tabs)/index.tsx)
             ========================================================== */}
          {activeTab === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col p-3 pb-2 gap-2 overflow-hidden"
            >
              {/* Header Title Real */}
              <div className="flex items-center justify-between pt-1 pb-1">
                <div>
                  <h4 className="text-sm font-black tracking-tight text-white leading-none">
                    GYM<span className="text-gym-primary">UP</span>
                  </h4>
                  <p className="text-[9px] text-gym-text mt-0.5">
                    Treino inteligente &amp; gamificado
                  </p>
                </div>
                <div className="w-7 h-7 rounded-lg bg-[#151A22] border border-[#242C3D] flex items-center justify-center text-gym-text">
                  <Settings className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* XpHeader Real (src/components/home/XpHeader.tsx) */}
              <div className="rounded-xl bg-[#151A22] border border-[#242C3D] p-2 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gym-primary/15 border-2 border-gym-primary flex items-center justify-center text-gym-primary font-black text-xs">
                      14
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-[8.5px] font-mono font-bold text-gym-text">
                          NÍVEL 14
                        </span>
                        <span className="text-[7.5px] px-1 rounded bg-[#FFD700]/20 text-[#FFD700] font-mono font-bold border border-[#FFD700]/30">
                          PRO
                        </span>
                      </div>
                      <p className="text-[11px] font-bold text-white leading-tight">
                        Mestre da Hipertrofia
                      </p>
                    </div>
                  </div>

                  {/* Streak Badge Real */}
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#202836] border border-[#242C3D] text-[9.5px] text-[#FF7043] font-bold">
                    <Flame className="w-3 h-3 text-[#FF7043] fill-[#FF7043]" />
                    <span>18 treinos</span>
                  </div>
                </div>

                {/* Progress Bar Real */}
                <div>
                  <div className="w-full bg-[#0B0E14] h-1.5 rounded-full overflow-hidden border border-[#242C3D]">
                    <div className="bg-gym-primary h-full w-[93%] rounded-full shadow-[0_0_8px_rgba(0,230,118,0.6)]" />
                  </div>
                  <div className="flex justify-between text-[8.5px] font-mono text-gym-text mt-1">
                    <span>1.850 / 2.000 XP</span>
                    <span className="text-gym-primary font-bold">93%</span>
                  </div>
                </div>
              </div>

              {/* WeeklyAdherenceCard Real */}
              <div className="rounded-xl bg-[#151A22] border border-[#242C3D] p-2 flex flex-col gap-1">
                <div className="flex items-center justify-between text-[9.5px]">
                  <span className="text-white font-bold flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-gym-primary" /> Meta
                    Semanal
                  </span>
                  <span className="text-gym-primary font-mono font-bold">
                    4 de 5 treinos
                  </span>
                </div>
                <div className="w-full bg-[#202836] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gym-primary h-full w-[80%]" />
                </div>
              </div>

              {/* TodayWorkoutCard Real (src/components/home/TodayWorkoutCard.tsx) */}
              <div className="rounded-xl bg-[#151A22] border border-[#242C3D] p-2.5 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[8.5px] font-mono font-bold text-gym-primary px-1.5 py-0.5 rounded bg-gym-primary/10 border border-gym-primary/30">
                    <Zap className="w-2.5 h-2.5 fill-gym-primary" /> PRÓXIMO
                    TREINO
                  </span>
                  <span className="text-[8.5px] font-mono text-gym-text">
                    ⏱ 45 min
                  </span>
                </div>

                <h5 className="text-[12px] font-bold text-white">
                  Treino A — Peito &amp; Tríceps
                </h5>

                {/* Day Selector Pills Real ([A] [B] [C] [D]) */}
                <div className="flex items-center gap-1">
                  {["A", "B", "C", "D"].map((day, idx) => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => setActiveDayIndex(idx)}
                      className={`w-5.5 h-5.5 rounded font-bold text-[9.5px] font-mono transition-colors ${
                        activeDayIndex === idx
                          ? "bg-gym-primary text-[#0B0E14]"
                          : "bg-[#202836] text-gym-text hover:text-white"
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>

                {/* Muscle Chips Real */}
                <div className="flex items-center gap-1">
                  {["Peitoral", "Tríceps", "Ombros"].map((muscle) => (
                    <span
                      key={muscle}
                      className="text-[8px] px-1.5 py-0.2 rounded bg-[#202836] text-gym-text border border-[#242C3D]"
                    >
                      {muscle}
                    </span>
                  ))}
                </div>

                {/* Lista de Prévia Real de Exercícios */}
                <div className="space-y-1 pt-1 border-t border-[#242C3D]/60 text-[9px] font-mono">
                  <div className="flex items-center justify-between text-gym-text">
                    <span className="truncate text-white">
                      1. Supino Reto com Barra
                    </span>
                    <span className="text-gym-text/80">4 séries</span>
                  </div>
                  <div className="flex items-center justify-between text-gym-text">
                    <span className="truncate text-white">
                      2. Supino Inclinado Halteres
                    </span>
                    <span className="text-gym-text/80">3 séries</span>
                  </div>
                  <div className="flex items-center justify-between text-gym-text">
                    <span className="truncate text-white">
                      3. Tríceps Corda na Polia
                    </span>
                    <span className="text-gym-text/80">3 séries</span>
                  </div>
                </div>

                {/* Botão COMEÇAR TREINO Real */}
                <button
                  type="button"
                  onClick={() => setActiveTab("active_workout")}
                  className="w-full mt-1 py-1.5 rounded-lg bg-gym-primary text-[#0B0E14] text-[10.5px] font-black flex items-center justify-center gap-1 hover:bg-[#00f880] transition-colors shadow-sm"
                >
                  <Zap className="w-3 h-3 fill-[#0B0E14]" />
                  <span>COMEÇAR TREINO</span>
                </button>
              </div>

              {/* QuickStatsGrid Real */}
              <div className="grid grid-cols-3 gap-1.5 text-center mt-auto font-mono">
                <div className="p-1.5 rounded-lg bg-[#151A22] border border-[#242C3D]">
                  <Dumbbell className="w-3.5 h-3.5 text-gym-primary mx-auto mb-0.5" />
                  <span className="text-[11px] font-extrabold text-white block">
                    42
                  </span>
                  <span className="text-[7.5px] text-gym-text block">
                    Treinos
                  </span>
                </div>
                <div className="p-1.5 rounded-lg bg-[#151A22] border border-[#242C3D]">
                  <RotateCcw className="w-3.5 h-3.5 text-gym-secondary mx-auto mb-0.5" />
                  <span className="text-[11px] font-extrabold text-white block">
                    480
                  </span>
                  <span className="text-[7.5px] text-gym-text block">
                    Séries
                  </span>
                </div>
                <div className="p-1.5 rounded-lg bg-[#151A22] border border-[#242C3D]">
                  <Trophy className="w-3.5 h-3.5 text-[#FFD700] mx-auto mb-0.5" />
                  <span className="text-[11px] font-extrabold text-white block">
                    6
                  </span>
                  <span className="text-[7.5px] text-gym-text block">
                    Badges
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* ==========================================================
              TELA 3: RESUMO & RELATÓRIOS (app/(tabs)/history.tsx)
             ========================================================== */}
          {activeTab === "resumo" && (
            <motion.div
              key="resumo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col p-3 pb-2 gap-2 overflow-hidden"
            >
              {/* Header com Botão PDF PRO Real */}
              <div className="flex items-center justify-between pb-1 pt-1">
                <div>
                  <h4 className="text-[12px] font-black text-white leading-tight">
                    Relatórios &amp; Progresso
                  </h4>
                  <p className="text-[8.5px] text-gym-text">
                    Sua consistência e evolução
                  </p>
                </div>
                <button
                  type="button"
                  className="px-2 py-1 rounded-lg bg-[#FFD700] text-[#0B0E14] text-[9.5px] font-black flex items-center gap-1 shadow-sm"
                >
                  <FileText className="w-3 h-3 text-[#0B0E14]" />
                  <span>PDF PRO</span>
                </button>
              </div>

              {/* Segmented Switcher Real (Semanal | Mensal | Histórico) */}
              <div className="grid grid-cols-3 bg-[#151A22] p-0.5 rounded-lg border border-[#242C3D] text-[9px] font-bold text-center">
                <span className="py-1 rounded bg-gym-primary text-[#0B0E14]">
                  Semanal
                </span>
                <span className="py-1 text-gym-text">Mensal</span>
                <span className="py-1 text-gym-text">Histórico</span>
              </div>

              {/* Summary Card Aderência Semanal */}
              <div className="rounded-xl bg-[#151A22] border border-[#242C3D] p-2 flex flex-col gap-1">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-white font-bold">
                    Aderência da Semana
                  </span>
                  <span className="text-gym-primary font-mono font-bold">
                    80%
                  </span>
                </div>
                <div className="w-full bg-[#202836] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gym-primary h-full w-[80%]" />
                </div>
                <p className="text-[8.5px] text-gym-text">
                  4 de 5 treinos completados nos últimos 7 dias.
                </p>
              </div>

              {/* Metrics Grid Real */}
              <div className="grid grid-cols-3 gap-1.5 text-center font-mono">
                <div className="p-1.5 rounded-lg bg-[#151A22] border border-[#242C3D]">
                  <RotateCcw className="w-3 h-3 text-gym-primary mx-auto mb-0.5" />
                  <span className="text-[11px] font-bold text-white block">
                    48
                  </span>
                  <span className="text-[7.5px] text-gym-text block">
                    Séries Feitas
                  </span>
                </div>
                <div className="p-1.5 rounded-lg bg-[#151A22] border border-[#242C3D]">
                  <Dumbbell className="w-3 h-3 text-[#29B6F6] mx-auto mb-0.5" />
                  <span className="text-[11px] font-bold text-white block">
                    14.8 t
                  </span>
                  <span className="text-[7.5px] text-gym-text block">
                    Volume
                  </span>
                </div>
                <div className="p-1.5 rounded-lg bg-[#151A22] border border-[#242C3D]">
                  <Sparkles className="w-3 h-3 text-[#FFD700] mx-auto mb-0.5" />
                  <span className="text-[11px] font-bold text-[#FFD700] block">
                    +450 XP
                  </span>
                  <span className="text-[7.5px] text-gym-text block">
                    XP Ganho
                  </span>
                </div>
              </div>

              {/* Estímulo Muscular Semanal */}
              <div className="rounded-xl bg-[#151A22] border border-[#242C3D] p-2 flex flex-col gap-1.5 flex-1">
                <span className="text-[9.5px] font-bold text-white">
                  Estímulo Muscular Semanal
                </span>
                <div className="space-y-1 font-mono text-[8.5px]">
                  <div>
                    <div className="flex justify-between text-gym-text">
                      <span className="text-white">Peitoral</span>
                      <span>16 séries</span>
                    </div>
                    <div className="w-full bg-[#202836] h-1 rounded-full overflow-hidden mt-0.5">
                      <div className="bg-gym-primary h-full w-[85%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-gym-text">
                      <span className="text-white">Tríceps</span>
                      <span>12 séries</span>
                    </div>
                    <div className="w-full bg-[#202836] h-1 rounded-full overflow-hidden mt-0.5">
                      <div className="bg-gym-secondary h-full w-[65%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-gym-text">
                      <span className="text-white">Ombros</span>
                      <span>10 séries</span>
                    </div>
                    <div className="w-full bg-[#202836] h-1 rounded-full overflow-hidden mt-0.5">
                      <div className="bg-[#FF7043] h-full w-[50%]" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ==========================================================
              TELA 4: PERFIL & CONQUISTAS (app/(tabs)/profile.tsx)
             ========================================================== */}
          {activeTab === "profile" && (
            <motion.div
              key="profile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col p-3 pb-2 gap-2 overflow-hidden"
            >
              {/* Profile Hero Card Real */}
              <div className="rounded-xl bg-[#151A22] border border-[#242C3D] p-2 flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-gym-primary/20 border-2 border-gym-primary flex items-center justify-center text-gym-primary">
                  <User className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h5 className="text-[12px] font-bold text-white truncate leading-tight">
                    Atleta GymUp
                  </h5>
                  <p className="text-[9px] text-gym-primary font-mono font-bold">
                    Nível 14 • Mestre da Hipertrofia
                  </p>
                  <p className="text-[8px] text-gym-text">
                    Total: 42 treinos • 38.5 toneladas
                  </p>
                </div>
              </div>

              {/* AchievementsGrid Real (src/components/profile/AchievementsGrid.tsx) */}
              <div className="flex-1 flex flex-col gap-1.5 overflow-hidden">
                <div className="flex items-center justify-between text-[10px] pt-0.5">
                  <span className="text-white font-bold flex items-center gap-1">
                    <Trophy className="w-3.5 h-3.5 text-[#FFD700]" /> Conquistas
                    &amp; Badges
                  </span>
                  <span className="text-[#FFD700] font-mono font-bold text-[9.5px]">
                    6/28
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-1.5 font-sans">
                  {/* Badge 1: Primeiro Passo */}
                  <div className="p-2 rounded-lg bg-[#151A22] border border-[#FFD700]/30 flex flex-col gap-1 shadow-sm">
                    <div className="w-6 h-6 rounded bg-[#FFD700]/15 border border-[#FFD700]/40 flex items-center justify-center text-[#FFD700]">
                      <Trophy className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[9.5px] font-bold text-white leading-tight">
                      Primeiro Passo
                    </span>
                    <span className="text-[7.5px] text-gym-text">
                      1º treino completo
                    </span>
                    <span className="text-[7.5px] text-[#FFD700] font-mono font-bold">
                      +100 XP
                    </span>
                  </div>

                  {/* Badge 2: Ritmo Blindado */}
                  <div className="p-2 rounded-lg bg-[#151A22] border border-orange-500/30 flex flex-col gap-1 shadow-sm">
                    <div className="w-6 h-6 rounded bg-orange-500/15 border border-orange-500/40 flex items-center justify-center text-orange-400">
                      <Flame className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[9.5px] font-bold text-white leading-tight">
                      Ritmo Blindado
                    </span>
                    <span className="text-[7.5px] text-gym-text">
                      25 treinos salvos
                    </span>
                    <span className="text-[7.5px] text-[#FFD700] font-mono font-bold">
                      +500 XP
                    </span>
                  </div>

                  {/* Badge 3: Hábito Inquebrável */}
                  <div className="p-2 rounded-lg bg-[#151A22] border border-gym-primary/30 flex flex-col gap-1 shadow-sm">
                    <div className="w-6 h-6 rounded bg-gym-primary/15 border border-gym-primary/40 flex items-center justify-center text-gym-primary">
                      <Zap className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[9.5px] font-bold text-white leading-tight">
                      Hábito Inquebrável
                    </span>
                    <span className="text-[7.5px] text-gym-text">
                      Streak de 30 dias
                    </span>
                    <span className="text-[7.5px] text-[#FFD700] font-mono font-bold">
                      +1.000 XP
                    </span>
                  </div>

                  {/* Badge 4: 10.000 kg Movidos */}
                  <div className="p-2 rounded-lg bg-[#151A22] border border-gym-secondary/30 flex flex-col gap-1 shadow-sm">
                    <div className="w-6 h-6 rounded bg-gym-secondary/15 border border-gym-secondary/40 flex items-center justify-center text-gym-secondary">
                      <Dumbbell className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[9.5px] font-bold text-white leading-tight">
                      10 Toneladas
                    </span>
                    <span className="text-[7.5px] text-gym-text">
                      Volume acumulado
                    </span>
                    <span className="text-[7.5px] text-[#FFD700] font-mono font-bold">
                      +800 XP
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ==========================================================
              BOTTOM TAB BAR REAL (app/(tabs)/_layout.tsx)
              Hoje | Meu Plano | Resumo | Perfil
             ========================================================== */}
          <div className="bg-[#151A22] border-t border-[#242C3D] px-2 py-1.5 flex items-center justify-around text-[9px] font-semibold">
            <button
              type="button"
              onClick={() => setActiveTab("home")}
              className={`flex flex-col items-center gap-0.5 transition-colors ${
                activeTab === "home"
                  ? "text-gym-primary font-bold"
                  : "text-gym-text hover:text-white"
              }`}
            >
              <Dumbbell className="w-3.5 h-3.5" />
              <span>Hoje</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("active_workout")}
              className={`flex flex-col items-center gap-0.5 transition-colors ${
                activeTab === "active_workout"
                  ? "text-gym-primary font-bold"
                  : "text-gym-text hover:text-white"
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Meu Plano</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("resumo")}
              className={`flex flex-col items-center gap-0.5 transition-colors ${
                activeTab === "resumo"
                  ? "text-gym-primary font-bold"
                  : "text-gym-text hover:text-white"
              }`}
            >
              <BarChart2 className="w-3.5 h-3.5" />
              <span>Resumo</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("profile")}
              className={`flex flex-col items-center gap-0.5 transition-colors ${
                activeTab === "profile"
                  ? "text-gym-primary font-bold"
                  : "text-gym-text hover:text-white"
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Perfil</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
