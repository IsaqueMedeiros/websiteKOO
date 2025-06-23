"use client"
import React from 'react';
import { DollarSign, Building2, FileText, ReceiptText, Share2 } from 'lucide-react';
import Link from "next/link";

export default function MedicalCTAComponent() {
  return (
    <section className="bg-[#f4f0ff] py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-br from-[#4a1871] to-[#250048] rounded-3xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[500px]">
            {/* Conteúdo de texto */}
            <div className="text-white p-8 lg:p-12 space-y-6 z-10 relative">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Receba seu plantão<br />
                com <span className="text-[#e6ff00]">agilidade</span>
              </h2>
              
              <ul className="space-y-3 text-md lg:text-base font-medium">
                <li className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-[#e6ff00] flex-shrink-0" />
                  <span>
                    Apoio para o <strong className="font-bold">primeiro plantão</strong>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-[#e6ff00] flex-shrink-0" />
                  <span>
                    Abertura de <strong className="font-bold">PJ Médica</strong>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-[#e6ff00] flex-shrink-0" />
                  <span>
                    Redução de <strong className="font-bold">impostos</strong>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <ReceiptText className="w-5 h-5 text-[#e6ff00] flex-shrink-0" />
                  <span>
                    Emissão de <strong className="font-bold">Notas fiscais</strong> em menos de 24 horas
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Share2 className="w-5 h-5 text-[#e6ff00] flex-shrink-0" />
                  <span>
                    Rede de <strong className="font-bold">networking</strong>
                  </span>
                </li>
              </ul>
              
               <Link
                href="/planos"
                className="bg-[#e6ff00] text-[#250048] px-6 py-3 rounded-full font-bold text-md hover:bg-[#d9ff00] transition-colors duration-200 flex items-center gap-2"
              >
                <span className="text-pink-500 font-bold">📱</span>
                Conheça nossos planos
              </Link>
            </div>
            
            {/* Lado direito com imagem e elemento gráfico */}
            <div className="relative flex items-center justify-center lg:justify-end h-full">
              {/* Elemento gráfico amarelo de fundo */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-full h-full flex items-center justify-end">
                <img 
                  src="/icon-neon.webp" 
                  alt="neon-icon"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-contain"
                /> 
              </div>
              
              {/* Imagem da médica - sem container, diretamente sobreposta */}
              <div className="relative z-10 flex items-end justify-center lg:justify-end w-full h-full">
                <img 
                  src="/medica-contabilidade-koocher.webp" 
                  alt="Mulher médica"
                  className="h-80 lg:h-96 w-auto object-contain object-bottom"
                /> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}