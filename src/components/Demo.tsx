import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export const Demo = () => {
  return (
    <section id="demonstracao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Veja o ZapIA Clinic em ação
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra como nossa solução pode transformar o atendimento da sua clínica
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-video bg-gray-100 rounded-lg shadow-lg flex items-center justify-center">
            <Button size="lg" className="gap-2">
              <Play className="w-6 h-6" />
              Ver Demonstração
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};