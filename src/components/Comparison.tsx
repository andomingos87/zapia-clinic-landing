import { Check, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const sharedFeatures = [
  "Empatia e conexão pessoal",
  "Adaptabilidade a situações complexas",
];

const exclusiveFeatures = [
  "Flexibilidade em diferentes tipos de interação",
  "Disponibilidade 24/7",
  "Velocidade e eficiência",
  "Capacidade de multitarefa",
  "Redução de custos operacionais",
  "Respostas consistentes e imediatas",
  "Análise de dados e geração de insights",
  "Integração com sistemas digitais",
];

export const Comparison = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Compare e Escolha o Melhor
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Veja por que o ZapIA Clinic é a escolha ideal para sua clínica
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Funcionalidade</TableHead>
                <TableHead className="text-center">ZapIA Clinic</TableHead>
                <TableHead className="text-center">Atendimento Tradicional</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sharedFeatures.map((feature) => (
                <TableRow key={feature}>
                  <TableCell className="font-medium">{feature}</TableCell>
                  <TableCell className="text-center">
                    <Check className="w-5 h-5 text-secondary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="w-5 h-5 text-secondary mx-auto" />
                  </TableCell>
                </TableRow>
              ))}
              {exclusiveFeatures.map((feature) => (
                <TableRow key={feature}>
                  <TableCell className="font-medium">{feature}</TableCell>
                  <TableCell className="text-center">
                    <Check className="w-5 h-5 text-secondary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <X className="w-5 h-5 text-red-500 mx-auto" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};