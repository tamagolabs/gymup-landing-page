export interface ComparisonFeature {
  name: string;
  gymUp: string | boolean;
  others: string | boolean;
  highlight?: boolean;
}

export const COMPARISON_DATA: ComparisonFeature[] = [
  {
    name: "Arquitetura Local-First (0ms de latência)",
    gymUp: true,
    others: false,
    highlight: true,
  },
  {
    name: "IA Preditiva Integrada (Google Gemini)",
    gymUp: true,
    others: false,
    highlight: true,
  },
  {
    name: "Sistema de Gamificação e XP de Força",
    gymUp: true,
    others: "Básico",
    highlight: true,
  },
  {
    name: "Funciona 100% offline no subsolo da academia",
    gymUp: true,
    others: "Instável",
  },
  {
    name: "Registro e duplicação de séries em 1 toque",
    gymUp: true,
    others: true,
  },
  {
    name: "Sem limites artificiais de rotinas salvas no plano grátis",
    gymUp: true,
    others: false,
  },
  {
    name: "Exportação livre de dados em formato aberto",
    gymUp: true,
    others: false,
  },
];
