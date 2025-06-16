import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight, CreditCard, User, Smartphone, Users } from 'lucide-react';

// Mock do Swiper para demonstração
const Swiper = ({ children, ...props }) => (
  <div className="swiper-container overflow-hidden">
    <div className="swiper-wrapper flex gap-6">
      {children}
    </div>
  </div>
);

const SwiperSlide = ({ children }) => (
  <div className="swiper-slide flex-shrink-0 w-full md:w-1/2 lg:w-1/2">
    {children}
  </div>
);

const conditions = [
  {
    title: "Redução da Mensalidade",
    image: "/condicoes/cond-slide-1.webp",
    desc: "Caso você fique 3 meses sem utilizar sua PJ (sem emitir notas fiscais), você paga somente R$ 90 enquanto sua PJ Médica permanecer sem movimentação.",
  },
  {
    title: "Estudantes",
    image: "/condicoes/cond-slide-2.webp",
    desc: "Isenção de cobranças enquanto for estudante.",
  },
  {
    title: "50% OFF",
    image: "/condicoes/cond-slide-4.webp",
    desc: "Recém-formados têm 50% off nas 3 primeiras mensalidades e só pagam quando começarem a trabalhar.",
  },
  {
    title: "Isenção de Mensalidade",
    image: "/condicoes/cond-slide-3.webp",
    desc: "Durante toda a residência médica você só paga mensalidade no mês que utilizar sua PJ.",
  },
];

const solutionItems = [
  {
    icon: CreditCard,
    title: "Assinatura sem fidelidade",
    desc: "Somos igual Netflix, planos de assinatura sem fidelidade.",
  },
  {
    icon: User,
    title: "Sem 13º salário",
    desc: "Você não paga 13º salário.",
  },
  {
    icon: Smartphone,
    title: "100% digital",
    desc: "Resolva tudo pelo celular com o WhatsApp e nosso app.",
  },
  {
    icon: Users,
    title: "Exclusividade",
    desc: "Atendimento exclusivo para médicos de todo Brasil.",
  },
];

export default function ConditionsAndSolution() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
          
          {/* ─── CONDIÇÕES GERAIS ─── */}
          <div className="group relative">
            <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 p-8 lg:p-10 h-full">
              {/* Decoração de fundo sutil */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-indigo-50 rounded-full -translate-y-16 translate-x-16 opacity-60"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    Condições Gerais
                  </h2>
                </div>
                
                <p className="text-gray-600 text-base lg:text-lg mb-8 leading-relaxed">
                  A <span className="font-semibold text-purple-700">KOOCHER</span> oferece condições especiais e planos
                  personalizados em cada etapa da sua vida profissional.
                </p>

                <div className="space-y-6">
                  {conditions.map((item, idx) => (
                    <div key={idx} className="group/card bg-gray-50 hover:bg-white rounded-xl border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300 p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-lg overflow-hidden shadow-md">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover/card:text-purple-700 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-md text-gray-600 leading-relaxed mb-3">
                            {item.desc}
                          </p>
                          <button className="text-md font-medium text-purple-600 hover:text-purple-700 flex items-center gap-1 group-hover/card:gap-2 transition-all">
                            Conferir
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ─── SOLUÇÃO FINANCEIRA ─── */}
          <div className="group relative">
            <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 lg:p-10 h-full overflow-hidden">
              {/* Decorações de fundo */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-white/5 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-white/5 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 leading-tight">
                    A solução para sua{" "}
                    <span className="text-yellow-300">vida financeira</span> está a um clique
                  </h2>
                  <p className="text-purple-100 text-base lg:text-lg leading-relaxed">
                    A <span className="font-semibold text-white">KOOCHER</span> acelera sua vida financeira com
                    contabilidade moderna, simples e sem chatices.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  {solutionItems.map(({ icon: Icon, title, desc }, idx) => (
                    <div key={idx} className="group/item bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl border border-white/20 hover:border-white/30 p-6 transition-all duration-300 hover:scale-105">
                      <div className="mb-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover/item:bg-white/30 transition-all duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {title}
                      </h3>
                      <p className="text-md text-purple-100 leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-24 pt-6 border-t border-white/20">
                  <button className="w-full sm:w-auto bg-white text-purple-700 hover:bg-gray-50 font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105">
                    Começar agora
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}