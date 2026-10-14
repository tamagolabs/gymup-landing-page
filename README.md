# ⚡ GymUp — Landing Page

> **Menos tela travada. Mais quilos na barra.**  
> Landing page oficial de alta performance e conversão para o aplicativo mobile **GymUp**: app de treinos de musculação gamificado, inteligente (Google Gemini 3.8) e arquitetado em Local-First com SQLite.

---

## 🚀 Visão Geral

A landing page do **GymUp** foi construída com foco em **performance máxima (100/100 Lighthouse)**, design dark mode imersivo com acentos neon e **fidelidade visual absoluta** às telas e componentes reais do aplicativo mobile em React Native / Expo.

### 🌟 Diferenciais do Produto Apresentados
- **Zero Travamentos na Academia**: Arquitetura 100% *Local-First* com SQLite nativo gravando séries e descansos em 0ms, sem depender de 4G/Wi-Fi no subsolo.
- **Fichas com Google Gemini 3.8**: Periodização adaptativa inteligente que respeita histórico, frequência e limitações/dores articulares (ombro, lombar, joelho).
- **Execução em 60 FPS cravados**: Interface ultrarrápida, timer de descanso tátil com ajustes automáticos (`+15s / -15s`).
- **Smart Overload**: Sugestão automática de progressão de carga sessão a sessão com um único toque.
- **Gamificação RPG Real**: Progressão por níveis (*Iniciante do Ferro* até *Lenda do Aço*), ganho de XP por tonelagem erguida, streaks blindados e medalhas colecionáveis.
- **Soberania dos Dados**: Sem login forçado em nuvens lentas, privacidade total com dados salvos no dispositivo.

---

## 🛠️ Stack Tecnológica

| Tecnologia | Versão / Função |
| :--- | :--- |
| **[Next.js](https://nextjs.org/)** | `16.4.0` (App Router, Turbopack, Partial Prerendering & Cache Components) |
| **[React](https://react.dev/)** | `19.3.0` |
| **[Tailwind CSS](https://tailwindcss.com/)** | `v4.3.3` com `@tailwindcss/turbopack` |
| **[Framer Motion](https://www.framer.com/motion/)** | `14.1.0` (Animações fluidas e micro-interações) |
| **[Lucide React](https://lucide.dev/)** | `1.54.0` (Ícones vetoriais modernos) |
| **[Biome](https://biomejs.dev/)** | `2.5.15` (Linter & Formatador ultrarrápido) |
| **[Bun](https://bun.sh/)** | Gerenciador de pacotes e runtime |
| **[Vercel Analytics & Speed Insights](https://vercel.com/docs)** | Monitoramento de tráfego, Web Vitals e métricas de desempenho |

---

## 🎨 Paleta de Cores & Design Tokens

Cores extraídas e alinhadas diretamente com os tokens de design do aplicativo GymUp:

| Token | Hex | Aplicação |
| :--- | :--- | :--- |
| **Background Principal** | `#0B0E14` | Fundo principal da página e base do display mobile |
| **Cards & Superfícies** | `#151A22` / `#202836` | Cards Bento Grid, tabelas, modais e containers |
| **Primária Neon** | `#00E676` | Verde Elétrico (CTAs primários, destaques, status concluído) |
| **Secundária** | `#8B5CF6` | Cyber Violet (Destaques de IA Gemini e badges de tecnologia) |
| **Ouro / Conquistas** | `#FFD700` | Dourado de Conquistas, XP acumulado e badges PRO |
| **Streak / Alerta** | `#FF7043` | Laranja elétrico para sequência de treinos e cronômetros |
| **Bordas** | `#242C3D` | Bordas sutis de alta definição em contraste escuro |
| **Tipografia** | `#FFFFFF` / `#9CB0C9` | Títulos em branco de alto contraste e textos em cinza técnico |

---

## 📱 Destaques de Componentes

### 1. Mockup 3D Interativo do Celular (`PhoneMockup.tsx`)
Mockup interativo com proporções de smartphone moderno e seletor rápido no topo para explorar **4 telas reais** do aplicativo:
- **Treino Ativo**: `WorkoutTopBar` com cronômetro em tempo real, `OverloadSuggestionBanner` funcional (que atualiza as cargas da série ao clicar), `ExerciseCard` com colunas de séries, cargas anteriores em laranja, steppers `-1/+1/+5` e a barra flutuante do `RestTimerModal`.
- **Hoje (Home)**: `XpHeader` com avatar de nível, título de rank e streak, `WeeklyAdherenceCard`, `TodayWorkoutCard` com tags musculares e lista de prévia de exercícios, e `QuickStatsGrid`.
- **Resumo & Histórico**: Cabeçalho de métricas com botão de exportação `PDF PRO`, seletor `Semanal / Mensal` e mapa de estímulo muscular.
- **Perfil & Badges**: Card do atleta e `AchievementsGrid` com medalhas metálicas e badges oficiais de XP.
- **Bottom Tab Bar**: Navegação funcional pelas abas inferiores (*Hoje*, *Meu Plano*, *Resumo* e *Perfil*).

### 2. Bento Grid de Engenharia (`Features.tsx`)
- Card grande interativo exibindo o fluxo de Quiz real do app (`GoalStep` + `FocusStep`) gerando adaptações no Google Gemini 3.8 com proteção articular ativada.
- Simulação do terminal de motor SQLite local registrando séries em `0.08ms`.
- Card de **Smart Overload** com botão `APLICAR (+2.0kg)` e linha de série com steppers interativos.
- Barra de descanso tátil com atalhos de `+15s`.
- Card de relatórios e exportação para personal em PDF PRO.

### 3. Gamificação de RPG (`Gamification.tsx`)
- Barra de XP interativa com botão de simulação para testar ganho de experiência e Level Up em tempo real.
- Títulos fiéis à fórmula algorítmica do app (*Nível 14: Mestre da Hipertrofia*).
- Grade de medalhas oficiais sincronizadas com `src/constants/achievements.ts`.

### 4. Disponibilidade & Lojas
- **Android**: CTA principal ativo direcionando para a Google Play Store.
- **iOS**: Indicador informativo elegante com badge `Em breve`.
- Sem links mortos de redes sociais ou dependências desnecessárias.

---

## 📁 Estrutura de Pastas

```text
gymup-landing-page/
├── public/
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── app/
│   │   ├── globals.css           # Estilos globais Tailwind v4 e utilitários neon
│   │   ├── layout.tsx            # Layout raiz com metadados SEO, OpenGraph e Analytics
│   │   ├── manifest.ts           # Web App Manifest nativo
│   │   ├── opengraph-image.tsx   # Geração dinâmica de OG Image via ImageResponse
│   │   ├── page.tsx              # Página principal (Single-Page Landing Page)
│   │   ├── robots.ts             # Geração nativa de robots.txt
│   │   └── sitemap.ts            # Geração nativa de sitemap.xml
│   ├── components/
│   │   ├── Navbar.tsx            # Header fixo com glassmorphism e CTA
│   │   ├── Hero.tsx              # Hero section com headlines e botões de download
│   │   ├── PhoneMockup.tsx       # Mockup CSS interativo com telas reais do app
│   │   ├── Features.tsx          # Seção Bento Grid com componentes do produto
│   │   ├── Gamification.tsx      # Barra de nível interativa e conquistas
│   │   ├── Comparison.tsx        # Tabela comparativa GymUp vs. Apps Tradicionais
│   │   ├── FAQ.tsx               # Accordion suave de perguntas frequentes
│   │   ├── CTA.tsx               # Seção final de conversão para download
│   │   └── Footer.tsx            # Rodapé limpo com dados legais e transparência
│   └── data/
│       ├── comparison.ts         # Dados da tabela comparativa
│       ├── constants.ts          # Constantes globais do site, links e estatísticas
│       ├── faq.ts                # Perguntas e respostas técnicas e comerciais
│       ├── features.ts           # Metadados dos recursos da Bento Grid
│       └── testimonials.ts       # Prova social e depoimentos de atletas
├── biome.json                    # Configuração de lint e formatação do Biome
├── next.config.ts                # Configuração do Next.js 16 com Turbopack
├── package.json                  # Scripts e dependências do projeto
└── tsconfig.json                 # Configurações TypeScript estritas
```

---

## 💻 Como Executar Localmente

### Pré-requisitos
- **[Bun](https://bun.sh/)** (recomendado) ou **Node.js 20+** / npm / pnpm.

### 1. Clonar o repositório
```bash
git clone https://github.com/tamagolabs/gymup-landing-page.git
cd gymup-landing-page
```

### 2. Instalar dependências
```bash
bun install
# ou: npm install
```

### 3. Rodar o servidor de desenvolvimento
```bash
bun dev
# ou: npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para visualizar a landing page.

---

## 📜 Scripts Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `bun dev` | Inicia o servidor local de desenvolvimento com Turbopack |
| `bun run build` | Compila o projeto e gera a build de produção estática |
| `bun run start` | Inicia o servidor de produção do Next.js |
| `bun run lint` | Executa o linter Biome verificando boas práticas e importações |
| `bun run format` | Formata automaticamente todos os arquivos do projeto com o Biome |

---

## 🌐 Deploy na Vercel

A landing page está otimizada para deploy zero-config na **Vercel**:

1. Conecte o repositório Git no dashboard da [Vercel](https://vercel.com).
2. O framework preset será detectado automaticamente como **Next.js**.
3. Nenhuma variável de ambiente obrigatória é necessária para a build base.
4. O Vercel Web Analytics e Speed Insights são ativados automaticamente na publicação.

---

## 📄 Licença

Desenvolvido por **GymUp Team / Tamago Labs**. Todos os direitos reservados.
