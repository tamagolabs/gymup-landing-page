export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: "O GymUp funciona 100% sem conexão com a internet?",
    answer:
      "Sim! O GymUp foi concebido com arquitetura local-first. Todo o seu histórico, treinos, rotinas e cronômetros funcionam direto no banco de dados local do seu dispositivo com 0ms de latência. Quando você se reconectar à internet, o app sincroniza tudo em background.",
  },
  {
    question: "Como o Google Gemini atua nos meus treinos?",
    answer:
      "A inteligência artificial do Gemini analisa seu progresso de cargas, histórico de repetições na reserva (RIR) e volume muscular para fornecer insights personalizados: sugestão de sobrecarga progressiva, alerta de fadiga acumulada e dicas de adaptação de exercícios quando uma máquina estiver ocupada.",
  },
  {
    question: "Como funciona a gamificação e o ganho de XP?",
    answer:
      "Cada repetição completada, tonelagem levantada e treino concluído concede pontos de experiência (XP). Ao subir de nível, você desbloqueia insígnias temáticas, temas especiais e compete em rankings semanais com amigos.",
  },
  {
    question: "Posso importar meus dados de outros apps (Hevy, Strong)?",
    answer:
      "Com certeza! O GymUp possui um importador universal em um clique para arquivos CSV de apps populares como Hevy, Strong, FitNotes e planilhas convencionais.",
  },
  {
    question: "O aplicativo é gratuito?",
    answer:
      "O GymUp oferece uma versão gratuita completa com registro ilimitado de treinos, banco offline e gamificação base. O plano GymUp Pro desbloqueia insights avançados com o Google Gemini e métricas biomecânicas aprofundadas.",
  },
];
