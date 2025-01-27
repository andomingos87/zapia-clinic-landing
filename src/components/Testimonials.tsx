import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "O ZapIA Clinic revolucionou o atendimento da nossa clínica. Reduzimos custos e melhoramos a satisfação dos pacientes.",
    author: "Dra. Maria Silva",
    role: "Clínica Saúde Total",
  },
  {
    quote:
      "Impressionante como a IA consegue fazer triagem e agendamento de forma tão eficiente. Recomendo fortemente!",
    author: "Dr. João Santos",
    role: "Centro Médico Vida",
  },
  {
    quote:
      "Desde que implementamos o ZapIA Clinic, as faltas em consultas reduziram drasticamente. Excelente solução!",
    author: "Dra. Ana Oliveira",
    role: "Clínica Bem Estar",
  },
];

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Depoimentos de profissionais que já transformaram suas clínicas
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="bg-blue-50">
              <CardHeader>
                <Quote className="w-8 h-8 text-primary" />
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg mb-4">
                  "{testimonial.quote}"
                </CardDescription>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};