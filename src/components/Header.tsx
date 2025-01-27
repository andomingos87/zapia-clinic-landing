import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-primary">
              ZapIA Clinic
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#beneficios" className="text-gray-600 hover:text-primary">
              Benefícios
            </a>
            <a href="#funcionalidades" className="text-gray-600 hover:text-primary">
              Funcionalidades
            </a>
            <a href="#demonstracao" className="text-gray-600 hover:text-primary">
              Demonstração
            </a>
            <a href="#depoimentos" className="text-gray-600 hover:text-primary">
              Depoimentos
            </a>
            <Button variant="default">Começar Agora</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <a
              href="#beneficios"
              className="block text-gray-600 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefícios
            </a>
            <a
              href="#funcionalidades"
              className="block text-gray-600 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Funcionalidades
            </a>
            <a
              href="#demonstracao"
              className="block text-gray-600 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Demonstração
            </a>
            <a
              href="#depoimentos"
              className="block text-gray-600 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </a>
            <Button variant="default" className="w-full">
              Começar Agora
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};