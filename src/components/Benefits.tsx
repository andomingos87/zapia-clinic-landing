import {
  Clock,
  MessageSquare,
  Calendar,
  TrendingUp,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const benefits = [
  {
    title: "Atendimento 24/7",
    description:
      "Ofereça suporte aos seus pacientes a qualquer hora do dia, todos os dias da semana.",
    icon: Clock,
  },
  {
    title: "Agendamento Automático",
    description:
      "Automatize o processo de agendamento de consultas e reduza faltas com lembretes inteligentes.",
    icon: Calendar,
  },
  {
    title: "Respostas Instantâneas",
    description:
      "Responda dúvidas comuns dos pacientes instantaneamente com IA treinada.",
    icon: MessageSquare,
  },
  {
    title: "Aumento de Eficiência",
    description:
      "Reduza custos operacionais e aumente a produtividade da sua equipe.",
    icon: TrendingUp,
  },
];

export const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher o ZapIA Clinic?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforme o atendimento da sua clínica com nossa solução completa de IA
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <benefit.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};