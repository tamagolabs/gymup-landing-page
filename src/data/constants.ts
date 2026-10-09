export const SITE_CONFIG = {
  name: "GymUp",
  tagline: "Treine Mais Inteligente. Suba de Nível.",
  description:
    "O aplicativo de musculação definitivo: gamificado, movido a IA Google Gemini e 100% local-first. Registre treinos sem internet, conquiste XP e evolua suas cargas com precisão cirúrgica.",
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
    { label: "Usuários Ativos", value: "45K+", change: "+120% este mês" },
    {
      label: "Treinos Registrados",
      value: "1.2M+",
      change: "Sem perda de dados",
    },
    {
      label: "Precisão do Gemini IA",
      value: "99.4%",
      change: "Ajustes em tempo real",
    },
    {
      label: "Tempo de Resposta Offline",
      value: "0ms",
      change: "100% Local-First",
    },
  ],
  navLinks: [
    { label: "Recursos", href: "#features" },
    { label: "Gamificação", href: "#gamification" },
    { label: "Comparativo", href: "#comparison" },
    { label: "FAQ", href: "#faq" },
  ],
} as const;
