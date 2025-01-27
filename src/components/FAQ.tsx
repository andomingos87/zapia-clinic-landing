import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como o ZapIA Clinic funciona?",
    answer:
      "O ZapIA Clinic utiliza inteligência artificial avançada para automatizar o atendimento da sua clínica, realizando agendamentos, triagens e respondendo dúvidas dos pacientes 24 horas por dia.",
  },
  {
    question: "É necessário treinamento para usar o sistema?",
    answer:
      "Oferecemos um processo de onboarding completo e suporte contínuo para garantir que sua equipe aproveite ao máximo todas as funcionalidades do sistema.",
  },
  {
    question: "O sistema é integrado com WhatsApp?",
    answer:
      "Sim, o ZapIA Clinic possui integração completa com WhatsApp, permitindo que os pacientes interajam com o sistema através deste canal popular.",
  },
  {
    question: "Quanto tempo leva para implementar?",
    answer:
      "A implementação típica leva de 1 a 3 dias, incluindo a configuração inicial e treinamento da equipe.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre o ZapIA Clinic
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};