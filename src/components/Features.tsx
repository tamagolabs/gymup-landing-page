"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Check,
  CheckCircle2,
  Clock,
  Database,
  Dumbbell,
  FileText,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Vibrate,
  WifiOff,
  Zap,
} from "lucide-react";
import { useState } from "react";

export function Features() {
  // Estado interativo para a simulação do Smart Overload
  const [overloadApplied, setOverloadApplied] = useState(false);

  return (
    <section
      id="recursos"
      className="py-24 relative overflow-hidden bg-[#0B0E14]"
    >
      {/* Luz ambiente de fundo */}
      <div className="absolute top-1/3 left-1/4 w-125 h-125 bg-gym-primary/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-100 h-100 bg-gym-secondary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="ia">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gym-card border border-gym-border text-xs font-semibold text-gym-primary mb-4 font-mono">
            <Zap className="w-3.5 h-3.5" />
            <span>RECURSOS EXCLUSIVOS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Projetado para Superar Todos os Outros Apps
          </h2>
          <p className="text-base sm:text-lg text-gym-text leading-relaxed">
            Eliminamos os problemas clássicos de apps de academia: telas
            travadas no subsolo, anúncios invasivos e fichas genéricas. Conheça
            as ferramentas exclusivas do GymUp.
          </p>
        </div>

        {/* Bento Grid Layout (4 Colunas no Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* ========================================================
              CARD 1 (GRANDE): Gerador de Treinos com Google Gemini
              Fiel aos passos reais: GoalStep + FocusStep + AiLoadingModal
              Ocupa 2 colunas e 2 linhas no desktop
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 lg:row-span-2 rounded-3xl bg-linear-to-br from-[#151A22] via-[#151A22] to-[#202836] p-7 sm:p-9 border border-gym-secondary/40 shadow-2xl relative overflow-hidden flex flex-col justify-between group hover:border-gym-secondary/70 transition-all duration-300"
          >
            {/* Glow roxo no topo */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-gym-secondary/15 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gym-secondary/15 flex items-center justify-center text-gym-secondary border border-gym-secondary/30 shadow-lg shadow-gym-secondary/10 group-hover:scale-105 transition-transform">
                  <BrainCircuit className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-gym-secondary/20 text-gym-secondary border border-gym-secondary/40 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Gemini 3.8 Flash
                </span>
              </div>

              <span className="text-xs font-mono uppercase tracking-wider text-gym-secondary font-bold block mb-1">
                Inteligência Biomecânica Adaptativa
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                Gerador de Fichas com Google Gemini
              </h3>
              <p className="text-sm sm:text-base text-gym-text leading-relaxed mb-6">
                O fluxo oficial de Quiz do app (GoalStep &amp; FocusStep)
                detecta sua meta e respeita dores articulares (ombro, lombar,
                joelho). O Gemini adapta os exercícios em segundos.
              </p>

              {/* Simulação Fiel do Quiz do App (GoalStep & FocusStep) */}
              <div className="rounded-2xl bg-[#0B0E14]/90 border border-gym-border p-4 sm:p-5 space-y-3 font-sans">
                {/* 1. GoalStep do App: Hipertrofia selecionado */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#151A22] border border-gym-primary/50">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-gym-primary flex items-center justify-center text-[#0B0E14]">
                      <Dumbbell className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white leading-tight">
                        Hipertrofia
                      </p>
                      <p className="text-[10px] text-gym-text">
                        Ganho de massa muscular e volume
                      </p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-gym-primary" />
                </div>

                {/* 2. FocusStep do App: Limitações e Dores */}
                <div className="p-2.5 rounded-xl bg-[#151A22] border border-gym-border/70 space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-mono text-gym-text">
                    <span className="text-gym-secondary font-bold">
                      DORES A EVITAR:
                    </span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#202836] text-gym-text">
                      Ombro Direito
                    </span>
                  </div>
                  <p className="text-[11px] text-white italic">
                    &quot;Sinto pontada no ombro direito ao descer a barra no
                    Supino Reto.&quot;
                  </p>
                </div>

                {/* 3. Resposta Adaptada pelo Gemini em Tempo Real */}
                <div className="p-3 rounded-xl bg-linear-to-br from-[#1a1c26] to-[#151A22] border border-gym-secondary/40 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-gym-secondary font-bold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> Ficha Adaptada em
                      1.2s:
                    </span>
                    <span className="text-[9.5px] text-gym-primary font-mono bg-gym-primary/10 px-2 py-0.5 rounded border border-gym-primary/30">
                      🛡️ Manguito Protegido
                    </span>
                  </div>
                  <p className="text-white text-xs leading-relaxed">
                    Substituído Supino com Barra por{" "}
                    <strong className="text-gym-primary">
                      Supino com Halteres (pegada neutra 45°)
                    </strong>{" "}
                    para eliminar pinçamento articular. Adicionadas 3 séries de{" "}
                    <strong>Face Pulls estabilizadores</strong>.
                  </p>
                  <div className="pt-2 border-t border-gym-border/40 flex items-center justify-between text-[10.5px] font-mono">
                    <span className="text-gym-text">
                      Treino A • 16 séries • RIR 1-2
                    </span>
                    <span className="text-gym-primary font-bold">
                      Pronto no App ✓
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gym-border/50 flex items-center justify-between text-xs text-gym-text">
              <span className="flex items-center gap-1.5 text-white font-semibold">
                <CheckCircle2 className="w-4 h-4 text-gym-secondary" />
                Periodização inteligente individualizada
              </span>
              <span className="text-gym-secondary font-mono font-bold">
                0ms de espera
              </span>
            </div>
          </motion.div>

          {/* ========================================================
              CARD 2 (MÉDIO): Modo Offline Blindado (SQLite Local)
              Ocupa 2 colunas no desktop
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 rounded-3xl bg-gym-card p-7 sm:p-8 border border-gym-border shadow-xl relative overflow-hidden group hover:border-gym-primary/60 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-400 border border-red-500/20">
                  <WifiOff className="w-6 h-6 stroke-2" />
                </div>
                <div className="w-12 h-12 rounded-2xl bg-gym-primary/10 flex items-center justify-center text-gym-primary border border-gym-primary/30">
                  <Database className="w-6 h-6 stroke-2" />
                </div>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-gym-primary/15 text-gym-primary border border-gym-primary/30">
                100% Local-First
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
              Modo Offline Blindado
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-gym-primary uppercase tracking-wider mb-2 font-mono">
              Seu treino não depende do Wi-Fi da academia
            </p>
            <p className="text-sm text-gym-text leading-relaxed mb-4">
              Chega de app que congela no subsolo sem 4G. Com banco{" "}
              <strong>SQLite local</strong>, suas séries e cronômetros gravam
              instantaneamente em <strong>0ms</strong>, sem tela branca e sem
              perda de dados.
            </p>

          </motion.div>

          {/* ========================================================
              CARD 3 (MÉDIO): Smart Overload Interativo
              Fiel ao OverloadSuggestionBanner.tsx do App Real
              Ocupa 2 colunas no desktop
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 rounded-3xl bg-gym-card p-7 sm:p-8 border border-gym-border shadow-xl relative overflow-hidden group hover:border-gym-primary/60 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-[#FFD700]/15 flex items-center justify-center text-[#FFD700] border border-[#FFD700]/30">
                <TrendingUp className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#FFD700]/15 text-[#FFD700] border border-[#FFD700]/30">
                Recurso PRO
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
              Smart Overload em 1 Toque
            </h3>
            <p className="text-sm text-gym-text leading-relaxed mb-4">
              O algoritmo analisa se você completou as séries com folga na
              semana anterior e sugere o aumento exato de carga. Clique no botão
              para ver a série atualizar ao vivo:
            </p>

            {/* Simulação Exata de OverloadSuggestionBanner.tsx */}
            <div className="rounded-2xl bg-[#151A22] border border-[#FFD700]/40 p-3.5 space-y-2.5">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-[#FFD700] text-xs font-black">
                    <TrendingUp className="w-4 h-4" />
                    <span>Sobrecarga: Aumentar +2.0 kg nas séries</span>
                    <span className="text-[9px] px-1 py-0.2 rounded bg-[#FFD700]/20 text-[#FFD700] font-mono border border-[#FFD700]/30">
                      PRO
                    </span>
                  </div>
                  <p className="text-[11px] text-gym-text mt-0.5">
                    Você completou todas as séries com facilidade na última
                    sessão.
                  </p>
                </div>
              </div>

              {/* Botão APLICAR (+2.0kg) Real */}
              <button
                type="button"
                onClick={() => setOverloadApplied(!overloadApplied)}
                className={`w-full py-2 px-3 rounded-xl font-black text-xs flex items-center justify-center gap-2 transition-all ${
                  overloadApplied
                    ? "bg-gym-primary text-[#0B0E14] shadow-md shadow-gym-primary/20"
                    : "bg-[#FFD700] text-[#0B0E14] hover:bg-[#ffe033]"
                }`}
              >
                <Zap className="w-3.5 h-3.5 fill-[#0B0E14]" />
                <span>
                  {overloadApplied
                    ? "✓ +2.0 kg APLICADO NAS SÉRIES (Clique para resetar)"
                    : "APLICAR (+2.0kg) (Clique para testar)"}
                </span>
              </button>

              {/* Linha da Série Interativa Real */}
              <div className="grid grid-cols-12 items-center bg-[#202836]/40 p-2 rounded-xl text-xs font-mono border border-[#242C3D]">
                <span className="col-span-2 text-gym-primary font-bold">
                  Série #3
                </span>
                <span className="col-span-3 text-gym-text text-[10px]">
                  Alvo: 8-10
                </span>
                <div className="col-span-4 text-center">
                  <span className="text-white font-black text-sm">
                    {overloadApplied ? "92 kg" : "90 kg"}
                  </span>
                  <span className="text-[9px] text-gym-primary block">
                    {overloadApplied ? "(+2kg aplicado!)" : "[-1] [+1] [+5]"}
                  </span>
                </div>
                <div className="col-span-3 flex justify-end">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      overloadApplied
                        ? "bg-gym-primary text-[#0B0E14]"
                        : "bg-[#202836] border border-[#242C3D] text-gym-text"
                    }`}
                  >
                    <Check className="w-3.5 h-3.5 stroke-3" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ========================================================
              CARD 4 (PEQUENO): RestTimerModal Real
              Ocupa 1 coluna no desktop
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-1 rounded-3xl bg-gym-card p-6 border border-gym-border shadow-xl relative overflow-hidden group hover:border-gym-primary/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-2xl bg-gym-surface flex items-center justify-center text-gym-primary border border-gym-border mb-4 group-hover:scale-105 transition-transform">
                <Clock className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                Timer com Feedback Tátil
              </h3>
              <p className="text-xs text-gym-text leading-relaxed mb-4">
                Início automático pós-série com vibração discreta no bolso e
                botões de +15s / -15s para não perder o foco.
              </p>
            </div>

            {/* Barra Flutuante de Timer Real (RestTimerModal.tsx) */}
            <div className="p-2.5 rounded-xl bg-[#202836] border border-gym-primary/40 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-1.5">
                <Vibrate className="w-4 h-4 text-gym-primary" />
                <span className="text-white font-black text-sm">01:15</span>
              </div>
              <span className="text-[10px] text-gym-primary bg-gym-primary/10 px-2 py-0.5 rounded border border-gym-primary/20 font-bold">
                +15s / -15s
              </span>
            </div>
          </motion.div>

          {/* ========================================================
              CARD 5 (PEQUENO): Relatórios em PDF Profissionais
              Fiel a history.tsx do App Real
              Ocupa 1 coluna no desktop
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-1 rounded-3xl bg-gym-card p-6 border border-gym-border shadow-xl relative overflow-hidden group hover:border-[#FFD700]/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-2xl bg-[#FFD700]/15 flex items-center justify-center text-[#FFD700] border border-[#FFD700]/30 mb-4 group-hover:scale-105 transition-transform">
                <FileText className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                Relatórios em PDF PRO
              </h3>
              <p className="text-xs text-gym-text leading-relaxed mb-4">
                Exporte métricas de volume semanal, tonelagem e aderência para o
                seu personal ou nutricionista em 1 clique.
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-[#151A22] border border-[#FFD700]/30 flex items-center justify-between text-xs">
              <span className="text-white font-semibold flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#FFD700]" /> PDF &amp;
                WhatsApp
              </span>
              <span className="text-[10px] text-[#FFD700] font-mono font-bold bg-[#FFD700]/10 px-2 py-0.5 rounded border border-[#FFD700]/20">
                PRO
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
