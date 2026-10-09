"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  DatabaseZap,
  type LucideIcon,
  ShieldCheck,
  Trophy,
  Zap,
} from "lucide-react";
import { FEATURES, type Feature } from "@/data/features";

const iconMap: Record<string, LucideIcon> = {
  BrainCircuit,
  DatabaseZap,
  Trophy,
  Activity,
  Zap,
  ShieldCheck,
};

export function Features() {
  return (
    <section
      id="features"
      className="py-24 relative overflow-hidden bg-[#0B0E14]"
    >
      {/* Luz ambiente de fundo */}
      <div className="absolute top-1/2 left-0 w-125 h-125 bg-gym-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gym-card border border-gym-border text-xs font-semibold text-gym-primary mb-4 font-mono">
            <span>{"// ENGENHARIA DE TREINO"}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Construído para Atletas que Levam a Sério Cada Quilo
          </h2>
          <p className="text-base sm:text-lg text-gym-text leading-relaxed">
            Eliminamos os problemas clássicos dos apps de musculação: conexões
            instáveis, assinaturas abusivas e interfaces lentas. O GymUp entrega
            tecnologia de ponta na palma da sua mão.
          </p>
        </div>

        {/* Grid de Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature: Feature, index: number) => {
            const Icon = iconMap[feature.icon] || Zap;

            // Cores de Acento baseadas na Feature
            const accentClasses = {
              primary: {
                border: "hover:border-gym-primary/50",
                iconBg:
                  "bg-gym-primary/10 text-gym-primary border-gym-primary/30",
                badge:
                  "bg-gym-primary/15 text-gym-primary border-gym-primary/30",
                glow: "group-hover:shadow-[0_0_30px_rgba(0,230,118,0.15)]",
              },
              secondary: {
                border: "hover:border-gym-secondary/50",
                iconBg:
                  "bg-gym-secondary/10 text-gym-secondary border-gym-secondary/30",
                badge:
                  "bg-gym-secondary/15 text-gym-secondary border-gym-secondary/30",
                glow: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
              },
              gold: {
                border: "hover:border-gym-gold/50",
                iconBg: "bg-gym-gold/10 text-gym-gold border-gym-gold/30",
                badge: "bg-gym-gold/15 text-gym-gold border-gym-gold/30",
                glow: "group-hover:shadow-[0_0_30px_rgba(255,215,0,0.15)]",
              },
            }[feature.accent];

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative rounded-3xl bg-gym-card/80 p-8 border border-gym-border transition-all duration-300 hover:-translate-y-1 ${accentClasses.border} ${accentClasses.glow} backdrop-blur-sm flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${accentClasses.iconBg} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="w-7 h-7 stroke-2" />
                    </div>
                    {feature.badge && (
                      <span
                        className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${accentClasses.badge}`}
                      >
                        {feature.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-wider text-gym-text/80 mb-1">
                    {feature.subtitle}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gym-text leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gym-border/40 flex items-center text-xs font-semibold text-gym-text group-hover:text-white transition-colors">
                  <span>Saiba como funciona</span>
                  <span className="ml-1 text-gym-primary transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
