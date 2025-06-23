"use client"
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, User, Calendar, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRefs = useRef({});
  const timeoutRef = useRef(null);

  const handleMouseEnter = (dropdown) => {
    // Limpa qualquer timeout existente
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    // Adiciona um pequeno delay antes de fechar o dropdown
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleDropdownMouseEnter = () => {
    // Cancela o fechamento do dropdown quando o mouse entra no conteúdo
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    // Fecha o dropdown quando o mouse sai do conteúdo
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleLinkClick = () => {
    // Fecha o dropdown imediatamente quando um link é clicado
    setActiveDropdown(null);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Cleanup do timeout quando o componente é desmontado
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Fecha dropdowns quando clica fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && !event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100 p-2 sm:p-4 top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-14">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 min-w-0">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/logo.webp"
                  alt="Contadores"
                  width={350}
                  height={350}
                  className="w-46 sm:h-12 md:h-14 lg:h-16 max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] cursor-pointer"
                />
              </Link>
            </div>
          </div>

          {/* Navigation Menu - Desktop */}
          <div className="hidden xl:block">
            <div className="flex items-center space-x-1">
              {/* Início */}
              <Link
                href="/"
                className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-lg text-md font-medium transition-all duration-200"
              >
                Início
              </Link>

              {/* A gente (with dropdown) */}
              <div
                className="relative dropdown-container"
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
                  <div 
                    className="absolute left-0 mt-1 w-56 rounded-xl shadow-xl bg-white ring-1 ring-gray-200 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <div className="py-2">
                      <Link
                        href="/quem-somos"
                        className="block px-4 py-3 text-md text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                        onClick={handleLinkClick}
                      >
                        <div className="font-medium">Nossa História</div>
                        <div className="text-xs text-gray-500 mt-1">
                          Como tudo começou
                        </div>
                      </Link>
                      <Link
                        href="/trabalhe-conosco"
                        className="block px-4 py-3 text-md text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                        onClick={handleLinkClick}
                      >
                        <div className="font-medium">Trabalhe Conosco</div>
                        <div className="text-xs text-gray-500 mt-1">
                          Oportunidades de carreira
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Soluções (with dropdown) */}
              <div
                className="relative dropdown-container"
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
                  <div 
                    className="absolute left-0 mt-1 w-96 rounded-xl shadow-xl bg-white ring-1 ring-gray-200 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <div className="p-6">
                      <div className="mb-6">
                        <h3 className="text-lg font-bold text-purple-600 mb-4 flex items-center">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                          Serviços
                        </h3>

                        <div className="grid gap-4">
                          <Link
                            href="/assesoria-koocher"
                            className="p-3 rounded-lg hover:bg-purple-50 transition-colors duration-200 cursor-pointer block"
                            onClick={handleLinkClick}
                          >
                            <h4 className="text-md font-semibold text-gray-800 mb-1">
                              Encontre sua Solução Perfeita
                            </h4>
                            <p className="text-xs text-gray-600">
                              Soluções específicas para médicos: residentes | plantonistas | especialistas
                            </p>
                          </Link>               
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-100">
                        <h3 className="text-lg font-bold text-purple-600 mb-4 flex items-center">
                          <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-lime-400 rounded-full mr-2"></div>
                          #VemPraKoocher
                        </h3>

                        <div className="grid grid-cols-2 gap-3">
                          <Link
                            href="/ebook"
                            className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:shadow-md transition-all duration-200 cursor-pointer block"
                            onClick={handleLinkClick}
                          >
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
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Planos */}
              <Link
                href="/planos"
                className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-lg text-md font-medium transition-all duration-200"
              >
                Planos
              </Link>

              

              {/* FAQ */}
              <Link
                href="/faq"
                className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-lg text-md font-medium transition-all duration-200"
              >
                FAQ
              </Link>

              {/* Contato */}
              <Link
                href="/contato"
                className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-lg text-md font-medium transition-all duration-200"
              >
                Contato
              </Link>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Agendar videoconferência */}
            <Link
              href="/agendar"
              className="flex items-center bg-purple-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-xl text-sm lg:text-md font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 shadow-md whitespace-nowrap"
            >
              <Calendar className="h-4 w-4 mr-2" />
              <span className="hidden lg:inline">Agendar videoconferência</span>
              <span className="lg:hidden">Agendar</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex-shrink-0">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 p-2 sm:p-3 rounded-lg transition-all duration-200"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-6 space-y-2 max-w-full overflow-hidden">
            <Link
              href="/"
              className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              href="/quem-somos"
              className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              A gente
            </Link>
            <Link
              href="/assesoria-koocher"
              className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Soluções
            </Link>
            <Link
              href="/planos"
              className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Planos
            </Link>    
            <Link
              href="/faq"
              className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/contato"
              className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </Link>

            <div className="pt-4 border-t border-gray-100 space-y-3">
              <Link
                href="/agendar"
                className="w-full flex items-center justify-center bg-purple-600 text-white px-6 py-3 rounded-xl text-md font-semibold shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Agendar videoconferência
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;