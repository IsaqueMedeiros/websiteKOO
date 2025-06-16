import React, { useState } from "react";
import { ChevronDown, User, Calendar, Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100 p-4 top-0 z-50">
      <div className="max-w-8xl mx-auto px-14 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <Image
                src="/logo.webp"
                alt="Contadores"
                width={350}
                height={350}
                className="relative"
              />
            </div>
          </div>

          {/* Navigation Menu - Desktop */}
          <div className="hidden xl:block">
            <div className="flex items-center space-x-1">
              {/* Início */}
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-lg text-md font-medium transition-all duration-200"
              >
                Início
              </a>

              {/* A gente (with dropdown) */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("agente")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-lg text-md font-medium flex items-center transition-all duration-200">
                  A gente
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === "agente" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeDropdown === "agente" && (
                  <div className="absolute left-0 mt-2 w-56 rounded-xl shadow-xl bg-white ring-1 ring-gray-200 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="py-2">
                      <a
                        href="#"
                        className="block px-4 py-3 text-md text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200 first:rounded-t-xl"
                      >
                        <div className="font-medium">Quem Somos</div>
                        <div className="text-xs text-gray-500 mt-1">
                          Conheça nossa equipe
                        </div>
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-3 text-md text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                      >
                        <div className="font-medium">Trabalhe Conosco</div>
                        <div className="text-xs text-gray-500 mt-1">
                          Oportunidades de carreira
                        </div>
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-3 text-md text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200 last:rounded-b-xl"
                      >
                        <div className="font-medium">Nossa História</div>
                        <div className="text-xs text-gray-500 mt-1">
                          Como tudo começou
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Soluções (with dropdown) */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("solucoes")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-lg text-md font-medium flex items-center transition-all duration-200">
                  Soluções
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === "solucoes" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeDropdown === "solucoes" && (
                  <div className="absolute left-0 mt-2 w-96 rounded-xl shadow-xl bg-white ring-1 ring-gray-200 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-6">
                      <div className="mb-6">
                        <h3 className="text-lg font-bold text-purple-600 mb-4 flex items-center">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                          Serviços
                        </h3>

                        <div className="grid gap-4">
                          <div className="p-3 rounded-lg hover:bg-purple-50 transition-colors duration-200 cursor-pointer">
                            <h4 className="text-md font-semibold text-gray-800 mb-1">
                              Para Plantonistas
                            </h4>
                            <p className="text-xs text-gray-600">
                              Soluções específicas para médicos plantonistas
                            </p>
                          </div>

                          <div className="p-3 rounded-lg hover:bg-purple-50 transition-colors duration-200 cursor-pointer">
                            <h4 className="text-md font-semibold text-gray-800 mb-1">
                              Para Residentes
                            </h4>
                            <p className="text-xs text-gray-600">
                              Orientações para médicos residentes
                            </p>
                          </div>

                          <div className="p-3 rounded-lg hover:bg-purple-50 transition-colors duration-200 cursor-pointer">
                            <h4 className="text-md font-semibold text-gray-800 mb-1">
                              Para Especialistas
                            </h4>
                            <p className="text-xs text-gray-600">
                              Consultoria para médicos especialistas
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-100">
                        <h3 className="text-lg font-bold text-purple-600 mb-4 flex items-center">
                          <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-lime-400 rounded-full mr-2"></div>
                          #VemPraKoocher
                        </h3>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:shadow-md transition-all duration-200 cursor-pointer">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg mx-auto mb-3 flex items-center justify-center shadow-md">
                              <svg
                                className="w-5 h-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
                                />
                              </svg>
                            </div>
                            <h5 className="text-md font-semibold text-gray-800 mb-1">
                              Baixe o Ebook
                            </h5>
                            <p className="text-xs text-gray-600 leading-relaxed">
                              Economize em até R$30.000 de impostos por ano.
                            </p>
                          </div>

                          {/* <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:shadow-md transition-all duration-200 cursor-pointer">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg mx-auto mb-3 flex items-center justify-center shadow-md">
                              <User className="w-5 h-5 text-white" />
                            </div>
                            <h5 className="text-md font-semibold text-gray-800 mb-1">
                              Área do cliente
                            </h5>
                            <p className="text-xs text-gray-600 leading-relaxed">
                              Tenha acesso a todos os seus documentos na palma
                              da mão!
                            </p>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Planos */}
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-lg text-md font-medium transition-all duration-200"
              >
                Planos
              </a>

              {/* Blog */}
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-lg text-md font-medium transition-all duration-200"
              >
                Blog
              </a>

              {/* FAQ */}
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-lg text-md font-medium transition-all duration-200"
              >
                FAQ
              </a>

              {/* Contato */}
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-lg text-md font-medium transition-all duration-200"
              >
                Contato
              </a>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Já sou cliente */}
            {/* <button className="flex items-center text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-lg text-md font-medium transition-all duration-200">
              <User className="h-4 w-4 mr-2" />
              Já sou cliente
            </button> */}

            {/* Agendar videoconferência */}
            <button className="flex items-center bg-purple-600 text-white px-6 py-3 rounded-xl text-md font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 shadow-md">
              <Calendar className="h-4 w-4 mr-2" />
              Agendar videoconferência
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 p-3 rounded-lg transition-all duration-200"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-6 space-y-2">
            <a
              href="#"
              className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200"
            >
              Início
            </a>
            <a
              href="#"
              className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200"
            >
              A gente
            </a>
            <a
              href="#"
              className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200"
            >
              Soluções
            </a>
            <a
              href="#"
              className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200"
            >
              Planos
            </a>
            <a
              href="#"
              className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200"
            >
              Blog
            </a>
            <a
              href="#"
              className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200"
            >
              FAQ
            </a>
            <a
              href="#"
              className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200"
            >
              Contato
            </a>

            <div className="pt-4 border-t border-gray-100 space-y-3">
              {/* <button className="w-full flex items-center justify-center text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-lg text-md font-medium transition-all duration-200">
                <User className="h-4 w-4 mr-2" />
                Já sou cliente
              </button> */}

              <button className="w-full flex items-center justify-center bg-purple-600 text-white px-6 py-3 rounded-xl text-md font-semibold shadow-md">
                <Calendar className="h-4 w-4 mr-2" />
                Agendar videoconferência
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
