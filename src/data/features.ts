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
    id: "zero-lag-offline",
    title: "Zero Travamentos na Academia",
    subtitle: "Arquitetura Local-First com SQLite",
    description:
      "Chega de esperar loading no subsolo sem sinal de 4G ou Wi-Fi. O GymUp salva cada série instantaneamente no banco SQLite nativo do seu telefone com latência de 0ms. Funciona até no modo avião.",
    icon: "DatabaseZap",
    badge: "0ms • 100% Offline",
    accent: "primary",
  },
  {
    id: "gemini-coach",
    title: "Fichas Inteligentes com Google Gemini",
    subtitle: "Treino sob medida para suas articulações",
    description:
      "A IA analisa sua frequência semanal, metas de hipertrofia e limitações reais (dores no ombro, joelho ou lombar) para prescrever a periodização biomecanicamente ideal para o seu corpo.",
    icon: "BrainCircuit",
    badge: "Google Gemini 3.8",
    accent: "secondary",
  },
  {
    id: "fps-interface",
    title: "Execução em 60 FPS Cravados",
    subtitle: "Timer inteligente com botões +15s / -15s",
    description:
      "Interface ultrarrápida projetada para ser operada com apenas uma mão entre séries cansativas. O cronômetro de descanso inicia automaticamente e vibra discretamente no seu bolso.",
    icon: "Zap",
    badge: "60 FPS Nativo",
    accent: "primary",
  },
  {
    id: "smart-overload",
    title: "Smart Overload com 1 Toque",
    subtitle: "A ciência da sobrecarga progressiva",
    description:
      "Nunca mais esqueça quanto peso usou na semana passada. O GymUp calcula a evolução de tensão mecânica e sugere o incremento ideal de repetições ou carga para a próxima sessão.",
    icon: "Activity",
    badge: "Sobrecarga Contínua",
    accent: "primary",
  },
  {
    id: "gamification-rpg",
    title: "Gamificação de Verdade: Do Ferro ao Aço",
    subtitle: "Níveis, XP por tonelagem e streaks",
    description:
      "Cada repetição completada vira experiência real. Suba de patente desde 'Iniciante do Ferro' até 'Lenda do Aço', mantenha sequências protegidas e desbloqueie insígnias exclusivas.",
    icon: "Trophy",
    badge: "Iniciante ➔ Lenda do Aço",
    accent: "gold",
  },
  {
    id: "data-privacy",
    title: "Seus Dados são 100% Seus",
    subtitle: "Sem cadastro forçado em nuvens lentas",
    description:
      "Sua privacidade é inegociável. Você começa a treinar na mesma hora sem precisar criar conta. Zero venda de dados, zero anúncios e exportação completa para CSV/JSON em um clique.",
    icon: "ShieldCheck",
    badge: "Privacidade Total",
    accent: "secondary",
  },
];
