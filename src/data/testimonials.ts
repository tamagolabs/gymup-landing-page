export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  stats: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Rodrigo Carvalho",
    role: "Atleta de Powerlifting & Eng. de Software",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    content:
      "A latência zero mudou minha rotina. Treino em um galpão subterrâneo onde nenhum outro app abria. O GymUp salva tudo em 0ms e a IA do Gemini me alertou sobre volume excessivo de supino antes de lesionar meu ombro.",
    stats: "Nível 42 • 185kg Agachamento",
    rating: 5,
  },
  {
    id: "2",
    name: "Camila Becker",
    role: "Entusiasta de Musculação & Designer",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    content:
      "A gamificação é absurdamente viciante no bom sentido. O sistema de streaks e conquistas douradas me fez manter a constância de 5 treinos por semana por 9 meses seguidos. A interface dark mode é a mais bonita que já vi.",
    stats: "Streak de 240 dias • Mestra de Ouro",
    rating: 5,
  },
  {
    id: "3",
    name: "Lucas Mendes",
    role: "Educador Físico & Personal Trainer",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    content:
      "Recomendo para todos os meus alunos. O cálculo automático de RIR (repetições na reserva) e o gráfico de fadiga acumula dados reais sem enrolação de assinatura abusiva.",
    stats: "Nível 58 • 850+ Treinos Registrados",
    rating: 5,
  },
];
