"use client";

import { Dumbbell, Heart } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/data/constants";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-gym-border/80 bg-[#0B0E14] text-gym-text py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="items-center gap-2.5 mb-4 group inline-flex"
            >
              <div className="w-9 h-9 rounded-xl bg-gym-primary flex items-center justify-center text-gym-bg font-black">
                <Dumbbell className="w-5 h-5 text-gym-bg stroke-[2.5]" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Gym<span className="text-gym-primary">Up</span>
              </span>
            </Link>
            <p className="text-sm text-gym-text max-w-sm mb-6 leading-relaxed">
              O aplicativo de treino de força de alta performance. Desenvolvido
              com arquitetura local-first, inteligência artificial Google Gemini
              e gamificação de RPG.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gym-card border border-gym-border text-xs font-mono text-gym-text">
              <span className="w-2 h-2 rounded-full bg-gym-primary animate-pulse" />
              <span>Android disponível • iOS em breve</span>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-mono">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SITE_CONFIG.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#download"
                  className="hover:text-white transition-colors"
                >
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Jurídico e Privacidade */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-mono">
              Transparência
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Política de Privacidade
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Termos de Uso
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Soberania dos Dados
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Segurança Local-First
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha Inferior */}
        <div className="pt-8 border-t border-gym-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gym-text">
          <p>© {currentYear} GymUp. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito para quem treina pesado{" "}
            <Heart className="w-3.5 h-3.5 text-gym-primary fill-gym-primary" />
          </p>
        </div>
      </div>
    </footer>
  );
}
