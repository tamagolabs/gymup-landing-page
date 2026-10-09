"use client";

import { Dumbbell, Heart, MessageSquare } from "lucide-react";
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
            <div className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.links.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-gym-card border border-gym-border flex items-center justify-center text-gym-text hover:text-white hover:border-gym-primary/50 transition-colors"
                aria-label="GitHub"
              >
                <svg
                  role="img"
                  aria-label="GitHub"
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                >
                  <title>GitHub</title>
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href={SITE_CONFIG.links.discord}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-gym-card border border-gym-border flex items-center justify-center text-gym-text hover:text-white hover:border-gym-primary/50 transition-colors"
                aria-label="Discord"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.links.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-gym-card border border-gym-border flex items-center justify-center text-gym-text hover:text-white hover:border-gym-primary/50 transition-colors"
                aria-label="X / Twitter"
              >
                <svg
                  role="img"
                  aria-label="X (antigo Twitter)"
                  className="w-3.5 h-3.5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <title>X</title>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
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
