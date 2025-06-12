import React from 'react';
import { CreditCard, Calculator, Smartphone, Crown } from 'lucide-react';

const solutionItems = [
  {
    icon: CreditCard,
    title: "Assinatura sem fidelidade",
    description: "Somos igual netflix, planos de assinatura sem fidelidade"
  },
  {
    icon: Calculator,
    title: "Sem 13º salário",
    description: "Você não paga 13º salário"
  },
  {
    icon: Smartphone,
    title: "100% digital",
    description: "Resolva tudo pelo celular com o whatsapp e nosso aplicativo"
  },
  {
    icon: Crown,
    title: "Exclusividade",
    description: "Atendimento exclusivo para médicos de todo Brasil"
  }
];

export default function FinancialSolutionSection() {
  return (
    <section className="bg-[#f4f0ff] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            A solução para sua{" "}
            <span className="text-fuchsia-600">vida financeira</span>,{" "}
            <br className="hidden md:block" />
            está a um clique
          </h2>
          <p className="text-lg md:text-xl text-gray-700 font-medium max-w-2xl mx-auto">
            A <span className="font-bold text-gray-900">KOOCHER</span> acelera sua vida financeira através da contabilidade sem chatices!
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutionItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-fuchsia-200 group"
              >
                {/* Icon Container */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-fuchsia-600 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-fuchsia-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}