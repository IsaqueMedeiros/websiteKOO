import React from 'react';
import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top section with logo and CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          {/* Left side - Logo and CTA */}
          <div className="mb-8 lg:mb-0">
            <div className="text-3xl font-bold text-purple-600 mb-6">
              K<span className="bg-purple-600 text-white px-2 py-1 rounded-full text-md">🏠</span>CHER
            </div>
            <p className="text-gray-600 mb-2">
              Quer uma contabilidade sem chatice?
            </p>
            <p className="text-gray-600 mb-6">
              Fale agora via WhatsApp!
            </p>
            <button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold py-3 px-6 rounded-full transition-colors duration-200 flex items-center gap-2">
              📱 Vem ser Koocher!
            </button>
          </div>

          {/* Right side - Contact Info */}
          <div className="flex flex-col lg:flex-row gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Belo Horizonte</h3>
              <p className="text-gray-600 text-md mb-2">
                Rua Paulo Freire da Araújo, 280 – Estoril,
              </p>
              <p className="text-gray-600 text-md">
                Belo Horizonte – MG, 30494-280
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Contatos</h3>
              <p className="text-purple-600 text-md mb-2">📞 (34) 99835-0035</p>
              <p className="text-purple-600 text-md">✉️ contato@koocher.com.br</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mb-12"></div>

        {/* Bottom section with links and form */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Solutions */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Soluções</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-purple-600 hover:text-purple-700 text-md transition-colors">
                  Para Plantonistas
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-600 hover:text-purple-700 text-md transition-colors">
                  Para Residentes
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-600 hover:text-purple-700 text-md transition-colors">
                  Para Especialistas
                </a>
              </li>
            </ul>
          </div>

          {/* About Koocher */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">A Koocher</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-purple-600 hover:text-purple-700 text-md transition-colors">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-600 hover:text-purple-700 text-md transition-colors">
                  Soluções
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-600 hover:text-purple-700 text-md transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-purple-600 hover:text-purple-700 text-md transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-600 hover:text-purple-700 text-md transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-600 hover:text-purple-700 text-md transition-colors">
                  Área do Cliente
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Solicite nosso contato</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Como você gostaria de ser chamado(a)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200 text-md">
                Próximo
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright and social media */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-md mb-4 md:mb-0">
              © 2025 Koocher | Contabilidade Médica
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;