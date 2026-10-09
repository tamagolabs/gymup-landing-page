export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: "Preciso de internet para usar o GymUp na academia?",
    answer:
      "Não, de jeito nenhum! O GymUp foi desenvolvido com arquitetura 100% Local-First com SQLite. Suas séries, cargas, fichas e cronômetro de descanso operam no armazenamento local do seu smartphone com 0ms de latência. Mesmo sem nenhum sinal de 4G ou Wi-Fi no subsolo da academia, o app abre instantaneamente e salva tudo.",
  },
  {
    question: "Como o Google Gemini monta o treino ideal para mim?",
    answer:
      "Diferente de geradores genéricos que repetem fichas copiadas da internet, o Google Gemini faz uma triagem profunda: sua frequência semanal, seus objetivos (hipertrofia, força ou recomposição) e, principalmente, dores ou limitações articulares (como dor no ombro no supino ou desconforto no joelho no agachamento). A IA seleciona exercícios biomecanicamente seguros e calcula o volume ideal de séries por músculo.",
  },
  {
    question: "O que é e como funciona o 'Smart Overload'?",
    answer:
      "O princípio biológico número 1 da hipertrofia é a sobrecarga progressiva (aumento da tensão mecânica ao longo do tempo). O Smart Overload lembra exatamente suas cargas, repetições e percepção de esforço (RIR) do último treino. Quando você chega no aparelho hoje, o GymUp já sugere o próximo passo: adicionar 1kg a 2kg ou tentar 1 repetição a mais. Você aceita com apenas um toque.",
  },
  {
    question: "Por que a interface roda a 60 FPS e como o timer ajuda?",
    answer:
      "Treinar pesado já é desgastante; lutar contra um app lento e engasgado é inadmissível. O GymUp é desenvolvido com foco em performance pura a 60 FPS cravados, permitindo registrar séries em menos de 3 segundos com uma mão só. O timer de descanso começa no momento em que você marca a série e conta com botões práticos de +15s e -15s para você ajustar a pausa sem perder o foco.",
  },
  {
    question: "Onde meus dados ficam salvos? Preciso fazer login obrigatório?",
    answer:
      "Seus dados pertencem exclusivamente a você e ficam armazenados no banco de dados local do seu aparelho. Você baixa o app e começa a treinar na mesma hora, sem barreiras de cadastro forçado ou formulários longos. Caso queira trocar de aparelho, você pode exportar e importar todo o seu histórico em arquivos abertos (CSV e JSON) a qualquer momento.",
  },
  {
    question: "O aplicativo é gratuito? Tem anúncios chatos durante o treino?",
    answer:
      "Sim, o GymUp é gratuito para baixar e você pode registrar treinos ilimitados, usar o banco 100% offline e subir de nível sem nunca ser interrompido por anúncios em tela cheia no meio de uma série. Para quem busca periodizações avançadas contínuas e consultas ilimitadas com o Gemini AI Coach, oferecemos o plano GymUp Pro.",
  },
];
