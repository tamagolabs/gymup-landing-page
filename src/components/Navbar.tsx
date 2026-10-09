"use client";

import { ArrowRight, Dumbbell, Menu, X, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { SITE_CONFIG } from "@/data/constants";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0B0E14]/80 border-b border-[#242C3D] transition-all duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo GymUp com Haltere + Raio em Neon Verde */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-2xl bg-[#151A22] border border-[#242C3D] flex items-center justify-center shadow-lg group-hover:border-gym-primary/60 transition-all duration-300">
              <Dumbbell className="w-5 h-5 text-gym-primary stroke-[2.5]" />
              <Zap className="w-3.5 h-3.5 text-gym-primary fill-gym-primary absolute -bottom-1 -right-1 drop-shadow-[0_0_8px_rgba(0,230,118,0.8)]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-white">
                  Gym
                  <span className="text-gym-primary drop-shadow-[0_0_12px_rgba(0,230,118,0.6)]">
                    Up
                  </span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-gym-primary/10 text-gym-primary border border-gym-primary/30 font-bold uppercase tracking-wider hidden sm:inline-block">
                  v2.5
                </span>
              </div>
              <span className="text-[11px] font-mono text-gym-text -mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-gym-primary animate-pulse" />
                Local-First • Gemini IA
              </span>
            </div>
          </Link>

          {/* Desktop Nav: Links Rápidos de Âncora */}
          <nav className="hidden md:flex items-center gap-8">
            {SITE_CONFIG.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-gym-text hover:text-white transition-colors duration-200 relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gym-primary transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Botão CTA Destacado com Brilho Neon Verde */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#download"
              className="relative inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-extrabold text-[#0B0E14] bg-gym-primary rounded-xl transition-all duration-200 hover:bg-[#00f880] shadow-[0_0_20px_rgba(0,230,118,0.45)] hover:shadow-[0_0_35px_rgba(0,230,118,0.7)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Baixar Grátis</span>
              <ArrowRight className="w-4 h-4 stroke-3" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-gym-card border border-gym-border text-gym-text hover:text-white hover:border-gym-primary/50 transition-colors"
              aria-label="Alternar menu de navegação"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gym-primary" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-5 border-t border-[#242C3D] flex flex-col gap-4 animate-in fade-in duration-200">
            <nav className="flex flex-col gap-2">
              {SITE_CONFIG.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-gym-text hover:text-white px-3 py-2 rounded-xl hover:bg-gym-surface transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-gym-primary text-xs font-mono">→</span>
                </Link>
              ))}
            </nav>
            <div className="pt-3 border-t border-[#242C3D]">
              <Link
                href="#download"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-extrabold text-[#0B0E14] bg-gym-primary rounded-xl shadow-[0_0_20px_rgba(0,230,118,0.45)] hover:bg-[#00f880] transition-all"
              >
                <span>Baixar Grátis no Celular</span>
                <ArrowRight className="w-4 h-4 stroke-3" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
