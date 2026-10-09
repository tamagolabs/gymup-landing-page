"use client";

import { ArrowRight, Dumbbell, Menu, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { SITE_CONFIG } from "@/data/constants";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <div className="relative flex items-center justify-between h-16 px-6 rounded-2xl glass-card border border-gym-border/80 shadow-2xl shadow-black/50 backdrop-blur-xl">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-gym-primary to-emerald-600 flex items-center justify-center text-gym-bg font-black shadow-lg shadow-gym-primary/20 group-hover:scale-105 transition-transform duration-200">
              <Dumbbell className="w-5 h-5 text-gym-bg stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
                Gym<span className="text-gym-primary">Up</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-gym-secondary uppercase -mt-1 font-semibold flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" /> AI • Offline
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {SITE_CONFIG.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gym-text hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#download"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold text-gym-bg bg-gym-primary rounded-xl transition-all duration-200 hover:bg-[#00c864] hover:shadow-[0_0_25px_rgba(0,230,118,0.45)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Baixar App</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gym-text hover:text-white hover:bg-gym-surface focus:outline-none transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-5 rounded-2xl glass-card border border-gym-border shadow-2xl flex flex-col gap-4">
            <nav className="flex flex-col gap-3">
              {SITE_CONFIG.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-gym-text hover:text-white px-2 py-1.5 rounded-lg hover:bg-gym-surface transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="pt-3 border-t border-gym-border/60">
              <Link
                href="#download"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-gym-bg bg-gym-primary rounded-xl shadow-lg shadow-gym-primary/20 hover:bg-[#00c864] transition-all"
              >
                <span>Baixar App Grátis</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
