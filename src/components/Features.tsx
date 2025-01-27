import { Stethoscope, Brain, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "Triagem Inteligente",
    description:
      "IA avançada para classificar e priorizar atendimentos com base nos sintomas relatados pelos pacientes.",
    icon: Stethoscope,
  },
  {
    title: "Aprendizado Contínuo",
    description:
      "Sistema que aprende com cada interação para melhorar a precisão das respostas e recomendações.",
    icon: Brain,
  },
  {
    title: "Gestão de Pacientes",
    description:
      "Acompanhamento completo do histórico de interações, consultas e tratamentos de cada paciente.",
    icon: Users,
  },
];

export const Features = () => {
  return (
    <section id="funcionalidades" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Funcionalidades Principais
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recursos avançados para otimizar o atendimento da sua clínica
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="bg-white hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};