"use client";

import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";
import { type FAQItem, FAQS } from "@/data/faq";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#0B0E14]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gym-card border border-gym-border text-xs font-semibold text-gym-primary mb-4 font-mono">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>DÚVIDAS FREQUENTES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Perguntas & Respostas
          </h2>
          <p className="text-base sm:text-lg text-gym-text">
            Tudo o que você precisa saber sobre funcionamento offline, IA Gemini
            e segurança de dados.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((item: FAQItem, index: number) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? "bg-gym-card border-gym-primary/40 shadow-lg shadow-black/40"
                    : "bg-gym-card/70 border-gym-border hover:border-gym-border/80"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-200 ${
                      isOpen
                        ? "bg-gym-primary/10 border-gym-primary/40 text-gym-primary rotate-180"
                        : "bg-gym-surface border-gym-border text-gym-text"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-gym-text leading-relaxed border-t border-gym-border/40 mt-1">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
