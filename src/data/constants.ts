export const SITE_CONFIG = {
  name: "GymUp",
  tagline: "Menos tela travada. Mais quilos na barra.",
  description:
    "O aplicativo de musculação definitivo: 100% offline (Local-First com SQLite), inteligente com Google Gemini e ultrarrápido em 60 FPS. Registre treinos em 0ms, evolua com Smart Overload e suba de nível de Iniciante do Ferro a Lenda do Aço.",
  url: "https://gymup.app",
  author: "GymUp Team",
  links: {
    appStore: "https://apps.apple.com",
    playStore: "https://play.google.com",
    github: "https://github.com",
    discord: "https://discord.gg",
    twitter: "https://twitter.com",
  },
  stats: [
    {
      label: "Latência na Academia",
      value: "0ms",
      change: "100% Offline (SQLite)",
    },
    {
      label: "Taxa de Atualização",
      value: "60 FPS",
      change: "Interface ultrarrápida",
    },
    {
      label: "IA Preditiva",
      value: "Gemini 2.5",
      change: "Ajuste de dores e volume",
    },
    {
      label: "Privacidade de Dados",
      value: "100% Local",
      change: "Sem login forçado",
    },
  ],
  navLinks: [
    { label: "Recursos", href: "#features" },
    { label: "Por que o GymUp?", href: "#comparison" },
    { label: "Gamificação", href: "#gamification" },
    { label: "FAQ", href: "#faq" },
  ],
} as const;
