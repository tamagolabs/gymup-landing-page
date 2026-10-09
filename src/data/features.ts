export interface Feature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  badge?: string;
  accent: "primary" | "secondary" | "gold";
}

export const FEATURES: Feature[] = [
  {
    id: "gemini-ai",
    title: "IA Preditiva com Google Gemini",
    subtitle: "Seu treinador cibernético de bolso",
    description:
      "Algoritmos de inteligência artificial analisam sua recuperação, RPE e histórico para sugerir cargas ideais, alertar sobre overtraining e quebrar platôs de força.",
    icon: "BrainCircuit",
    badge: "Gemini 2.5 Flash",
    accent: "secondary",
  },
  {
    id: "local-first",
    title: "100% Local-First & Offline",
    subtitle: "Zero lentidão na academia",
    description:
      "Chega de esperar loading em subsolos de academia sem sinal. Seus treinos gravam instantaneamente no banco local em 0ms e sincronizam discretamente em segundo plano.",
    icon: "DatabaseZap",
    badge: "0ms Latência",
    accent: "primary",
  },
  {
    id: "gamification",
    title: "Gamificação de Nível RPG",
    subtitle: "Evolua seu personagem real",
    description:
      "Transforme repetições e tonelagem levantada em pontos de experiência (XP), streaks diários, patentes e medalhas exclusivas a cada novo recorde pessoal (PR).",
    icon: "Trophy",
    badge: "Level Up & XP",
    accent: "gold",
  },
  {
    id: "analytics",
    title: "Métricas Cirúrgicas e 1RM",
    subtitle: "Ciência pura do treinamento",
    description:
      "Visualização avançada de volume semanal por grupo muscular, cálculo automático de 1RM estimado, tempo de descanso inteligente e radar de simetria.",
    icon: "Activity",
    accent: "primary",
  },
  {
    id: "fast-logger",
    title: "Registro Ultra Rápido a 1 Mão",
    subtitle: "Feito para a pegada do treino",
    description:
      "Interface ergonômica com teclado numérico otimizado, duplicação de séries com um toque e timer de descanso automático no display sempre ligado.",
    icon: "Zap",
    accent: "primary",
  },
  {
    id: "privacy",
    title: "Privacidade e Soberania de Dados",
    subtitle: "Seus dados ficam com você",
    description:
      "Sem anúncios invasivos, sem venda de métricas para terceiros e com exportação total para CSV/JSON quando você quiser.",
    icon: "ShieldCheck",
    badge: "Privacidade Total",
    accent: "secondary",
  },
];
