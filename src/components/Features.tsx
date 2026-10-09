"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Clock,
  FileText,
  Share2,
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
            <span>{"// ARQUITETURA BENTO GRID"}</span>
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
                  Gemini 2.5 Flash
                </span>
              </div>

              <span className="text-xs font-mono uppercase tracking-wider text-gym-secondary font-bold block mb-1">
                Inteligência Biomecânica Adaptativa
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                Gerador de Fichas com Google Gemini
              </h3>
              <p className="text-sm sm:text-base text-gym-text leading-relaxed mb-6">
                A IA analisa sua frequência semanal, metas de hipertrofia e
                respeita suas dores articulares (ombro, lombar, joelho). Nada de
                treinos genéricos de internet.
              </p>

              {/* Visual de Chat / Quiz Interativo */}
              <div className="rounded-2xl bg-[#0B0E14]/90 border border-gym-border p-4 sm:p-5 space-y-3.5 font-sans">
                {/* Pergunta / Input do Usuário */}
                <div className="flex items-start gap-3 text-xs">
                  <div className="w-7 h-7 rounded-lg bg-[#202836] text-white flex items-center justify-center shrink-0 font-bold text-[11px] border border-gym-border">
                    Você
                  </div>
                  <div className="bg-[#151A22] rounded-xl rounded-tl-none p-3 text-gym-text border border-gym-border/60 leading-relaxed">
                    <p className="text-white font-medium">
                      &quot;Treino 4x na semana com foco em Peito e Tríceps, mas
                      sinto pontada no ombro ao descer a barra no Supino
                      Reto.&quot;
                    </p>
                  </div>
                </div>

                {/* Resposta Gerada pelo Gemini */}
                <div className="flex items-start gap-3 text-xs">
                  <div className="w-7 h-7 rounded-lg bg-gym-secondary/20 text-gym-secondary flex items-center justify-center shrink-0 font-bold border border-gym-secondary/40">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-linear-to-br from-[#1a1c26] to-[#151A22] rounded-xl rounded-tl-none p-3.5 text-gym-text border border-gym-secondary/30 space-y-2">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-gym-secondary font-bold">
                        Ficha Adaptada em 1.2s:
                      </span>
                      <span className="text-[10px] text-gym-primary font-mono bg-gym-primary/10 px-2 py-0.5 rounded border border-gym-primary/30">
                        100% Seguro
                      </span>
                    </div>
                    <p className="text-white text-xs leading-relaxed">
                      Substituído Supino com Barra por{" "}
                      <strong>Supino com Halteres (pegada neutra 45°)</strong>{" "}
                      para aliviar o manguito. Adicionadas 3 séries de Face
                      Pulls estabilizadores.
                    </p>
                    <div className="pt-2 border-t border-gym-border/40 flex items-center justify-between text-[11px]">
                      <span className="text-gym-text">
                        Volume: 16 séries • RIR 1-2
                      </span>
                      <span className="text-gym-primary font-bold flex items-center gap-1">
                        Pronto para Iniciar <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gym-border/50 flex items-center justify-between text-xs text-gym-text">
              <span className="flex items-center gap-1.5 text-white font-semibold">
                <CheckCircle2 className="w-4 h-4 text-gym-secondary" />
                Periodização contínua atualizada
              </span>
              <span className="text-gym-secondary font-mono font-bold">
                0ms de espera
              </span>
            </div>
          </motion.div>

          {/* ========================================================
              CARD 2 (MÉDIO): Modo Offline Blindado
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
                  <Zap className="w-6 h-6 stroke-2" />
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

            <div className="p-3 rounded-xl bg-gym-surface/50 border border-gym-border/80 flex items-center justify-between text-xs font-mono">
              <span className="text-gym-text">Modo Avião Ativo?</span>
              <span className="text-gym-primary font-bold flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-gym-primary" /> Funciona
                Perfeitamente
              </span>
            </div>
          </motion.div>

          {/* ========================================================
              CARD 3 (MÉDIO): Smart Overload Interativo
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
              <div className="w-12 h-12 rounded-2xl bg-gym-primary/15 flex items-center justify-center text-gym-primary border border-gym-primary/30">
                <TrendingUp className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-gym-primary/15 text-gym-primary border border-gym-primary/30">
                Hipertrofia Real
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
              Smart Overload em 1 Toque
            </h3>
            <p className="text-sm text-gym-text leading-relaxed mb-5">
              O GymUp calcula a progressão de tensão mecânica semana a semana e
              sugere o incremento ideal. Sem calculadora, sem esquecer a carga
              anterior.
            </p>

            {/* Simulação Interativa do Botão de Carga */}
            <div className="rounded-2xl bg-gym-surface/60 border border-gym-border p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-white font-bold">
                  Supino Reto • Última Semana: 90kg
                </span>
                <span className="text-gym-text font-mono">RIR: 2</span>
              </div>

              <button
                type="button"
                onClick={() => setOverloadApplied(!overloadApplied)}
                className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                  overloadApplied
                    ? "bg-gym-primary text-[#0B0E14] shadow-[0_0_20px_rgba(0,230,118,0.5)] scale-[1.01]"
                    : "bg-[#151A22] text-gym-primary border border-gym-primary/40 hover:bg-gym-primary/10"
                }`}
              >
                {overloadApplied ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 stroke-3" />
                    <span>✓ Carga atualizada: 92kg (+2kg aplicados!)</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 text-gym-primary fill-gym-primary" />
                    <span>
                      +2kg sugerido com base na sua última semana (Clique para
                      testar)
                    </span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* ========================================================
              CARD 4 (PEQUENO): Timer de Descanso com Feedback Tátil
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
                botões de +15s / -15s para você não perder o foco.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-gym-surface/40 border border-gym-border/80 flex items-center justify-between text-xs font-mono">
              <span className="text-white font-bold flex items-center gap-1.5">
                <Vibrate className="w-4 h-4 text-gym-primary" /> 01:30
              </span>
              <span className="text-[10px] text-gym-primary bg-gym-primary/10 px-2 py-0.5 rounded border border-gym-primary/20">
                +15s / -15s
              </span>
            </div>
          </motion.div>

          {/* ========================================================
              CARD 5 (PEQUENO): Relatórios em PDF Profissionais
              Ocupa 1 coluna no desktop
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-1 rounded-3xl bg-gym-card p-6 border border-gym-border shadow-xl relative overflow-hidden group hover:border-gym-secondary/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-2xl bg-gym-secondary/15 flex items-center justify-center text-gym-secondary border border-gym-secondary/30 mb-4 group-hover:scale-105 transition-transform">
                <FileText className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                Relatórios em PDF Profissionais
              </h3>
              <p className="text-xs text-gym-text leading-relaxed mb-4">
                Exporte métricas de 1RM, volume semanal e tonelagem para o seu
                personal trainer ou nutricionista em 1 clique.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-gym-surface/40 border border-gym-border/80 flex items-center justify-between text-xs">
              <span className="text-white font-semibold flex items-center gap-1.5">
                <Share2 className="w-3.5 h-3.5 text-gym-secondary" /> WhatsApp /
                PDF
              </span>
              <span className="text-[10px] text-gym-secondary font-mono font-bold">
                1 Clique
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
