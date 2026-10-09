export interface ComparisonFeature {
  name: string;
  gymUp: string | boolean;
  others: string | boolean;
  highlight?: boolean;
}

export const COMPARISON_DATA: ComparisonFeature[] = [
  {
    name: "Funciona 100% offline no subsolo sem sinal (SQLite Local-First)",
    gymUp: true,
    others: false,
    highlight: true,
  },
  {
    name: "Fichas adaptadas a dores e articulações via Google Gemini",
    gymUp: true,
    others: false,
    highlight: true,
  },
  {
    name: "Smart Overload: sugestão de aumento de carga em 1 toque",
    gymUp: true,
    others: false,
    highlight: true,
  },
  {
    name: "Interface ultrarrápida a 60 FPS com timer (+15s / -15s)",
    gymUp: true,
    others: "Lenta e travada",
    highlight: true,
  },
  {
    name: "Gamificação real: de Iniciante do Ferro a Lenda do Aço",
    gymUp: true,
    others: "Apenas listas frias",
  },
  {
    name: "Uso imediato sem obrigação de cadastro em nuvem",
    gymUp: true,
    others: false,
  },
  {
    name: "Sem anúncios em tela cheia no meio do seu treino",
    gymUp: true,
    others: false,
  },
];
