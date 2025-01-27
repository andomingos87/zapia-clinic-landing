import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export const BetaCTA = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para salvar o email
    toast({
      title: "Inscrição realizada!",
      description: "Entraremos em contato em breve com mais informações.",
    });
    setEmail("");
  };

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Seja um Beta Tester do ZapIA Clinic
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Estamos selecionando clínicas para testar nossa solução em primeira mão.
            Cadastre-se para ter acesso antecipado e condições especiais.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit">
              Quero participar
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};