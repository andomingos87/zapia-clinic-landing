import { Button } from "@/components/ui/button";
import { Bot, ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Atendimento Inteligente para sua{" "}
              <span className="text-primary">Clínica Médica</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Automatize o atendimento da sua clínica com IA. Agende consultas,
              tire dúvidas e gerencie pacientes 24/7 com o ZapIA Clinic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gap-2">
                Começar Gratuitamente
                <ArrowRight size={20} />
              </Button>
              <Button size="lg" variant="outline">
                Agendar Demonstração
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="animate-float">
              <Bot className="w-64 h-64 text-primary mx-auto" />
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};