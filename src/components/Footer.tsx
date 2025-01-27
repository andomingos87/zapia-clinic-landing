import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">ZapIA Clinic</h3>
            <p className="mb-4">
              Transformando o atendimento médico com inteligência artificial
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Produto</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Preços
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Cases
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Documentação
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  LGPD
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; 2024 ZapIA Clinic. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};