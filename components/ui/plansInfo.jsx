"use client"
import React from 'react';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: "Basic",
    monthlyPrice: 297,
    yearlyPrice: 3385.00,
    color: "fuchsia"
  },
  {
    name: "Premium", 
    monthlyPrice: 397,
    yearlyPrice: 4525.00,
    color: "fuchsia",
    popular: true
  },
  {
    name: "Exclusive",
    monthlyPrice: 497,
    yearlyPrice: 5865.00,
    color: "fuchsia"
  }
];

const features = [
  {
    name: "Abertura da PJ grátis",
    basic: true,
    premium: true,
    exclusive: true
  },
  {
    name: "Emissão de Notas Fiscais pela Equipe KOOCHER",
    basic: true,
    premium: true,
    exclusive: true
  },
  {
    name: "Apuração e envio dos impostos",
    basic: true,
    premium: true,
    exclusive: true
  },
  {
    name: "Declaração Imposto de Renda da Pessoa Física",
    basic: false,
    premium: true,
    exclusive: true
  },
  {
    name: "Consultoria Tributária Especializada",
    basic: false,
    premium: true,
    exclusive: true
  },
  {
    name: "Suporte via WhatsApp Premium",
    basic: false,
    premium: false,
    exclusive: true
  },
  {
    name: "Gestão Financeira Completa",
    basic: false,
    premium: false,
    exclusive: true
  },
  {
    name: "Relatórios Gerenciais Avançados",
    basic: false,
    premium: false,
    exclusive: true
  },
  {
    name: "Emissão de RPA",
    basic: false,
    premium: true,
    exclusive: true
  },
  {
    name: "Gerente exclusivo",
    basic: false,
    premium: true,
    exclusive: true
  },
  {
    name: "Limite Faturamento",
    basic: "ILIMITADO",
    premium: "ILIMITADO",
    exclusive: "ILIMITADO",
    isText: true
  },
  {
    name: "Pró-labore dos sócios",
    basic: true,
    premium: true,
    exclusive: true
  },
  {
    name: "Agendamento de pagamento de contas",
    basic: false,
    premium: false,
    exclusive: true
  },
  {
    name: "Declaração Imposto de Renda da Pessoa Jurídica",
    basic: true,
    premium: true,
    exclusive: true
  },
  {
    name: "Cadastros e Credenciamentos nos locais de trabalho e CRM",
    basic: false,
    premium: true,
    exclusive: true
  },
  {
    name: "Certificado Digital Anual Gratuito",
    basic: false,
    premium: false,
    exclusive: true
  },
  {
    name: "Endereço Fiscal Mensal",
    basic: false,
    premium: false,
    exclusive: true
  },
  {
    name: "Planejamento Financeiro pessoal",
    basic: true,
    premium: true,
    exclusive: true
  },
  {
    name: "Assessoria Jurídica Extrajudicial",
    basic: true,
    premium: true,
    exclusive: true
  }
];

export default function PricingPlansSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#250048] mb-2">
            Planos de
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#250048]">
            Assinatura mensal
          </h3>
          <div className="w-24 h-1 bg-fuchsia-600 mx-auto mt-4"></div>
        </div>

        {/* Plans Cards - Full display initially */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          {/* Empty space for features column on desktop */}
          <div className="hidden lg:block"></div>
          
          {/* Plan Cards */}
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-50 rounded-2xl p-6 text-center transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-fuchsia-500 bg-gradient-to-b from-fuchsia-50 to-white transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-fuchsia-600 text-white px-4 py-1 rounded-full text-md font-semibold shadow-lg">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-xl font-bold text-[#250048] mb-4">
                {plan.name}
              </h3>
              
              <div className="mb-4">
                <span className="text-md text-gray-600">R$</span>
                <span className="text-4xl font-bold text-fuchsia-600 ml-1">
                  {plan.monthlyPrice}
                </span>
                <span className="text-md text-gray-600 ml-1">/mês</span>
              </div>
              
              <div className="text-md text-gray-500 mb-6">
                ou R$ {plan.yearlyPrice.toFixed(2)} anual
              </div>
              
              <button
                className={`w-full py-3 px-6 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  plan.popular 
                    ? 'bg-fuchsia-600 hover:bg-fuchsia-700 shadow-lg' 
                    : 'bg-fuchsia-500 hover:bg-fuchsia-600'
                }`}
              >
                Assinar
              </button>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="relative">
          {/* Sticky Simplified Header for Scrolling */}
          <div className="sticky top-0 z-30 bg-white shadow-md border-b border-gray-200 py-4 mb-6 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 px-4">
              {/* Features Column Header */}
              <div className="hidden lg:flex items-center">
                <span className="text-lg font-bold text-gray-800">
                  Recursos inclusos
                </span>
              </div>
              
              {/* Simplified Plan Headers */}
              <div className="lg:col-span-3 grid grid-cols-3 gap-4">
                {plans.map((plan, index) => (
                  <div
                    key={index}
                    className={`text-center py-3 px-2 rounded-xl transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-fuchsia-600 text-white shadow-lg' 
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <h4 className="font-bold text-lg mb-1">
                      {plan.name}
                    </h4>
                    <div className={`text-md font-semibold ${plan.popular ? 'text-white' : 'text-fuchsia-600'}`}>
                      R$ {plan.monthlyPrice}/mês
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Comparison Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-4 gap-4 py-6 px-6 border-b border-gray-100 last:border-b-0 ${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } hover:bg-fuchsia-50 transition-all duration-200`}
              >
                {/* Feature Name */}
                <div className="lg:col-span-1 flex items-center">
                  <span className="text-md md:text-base font-medium text-gray-800 leading-relaxed">
                    {feature.name}
                  </span>
                </div>
                
                {/* Plans Checkmarks */}
                <div className="lg:col-span-3 grid grid-cols-3 gap-4">
                  {/* Basic Plan */}
                  <div className="flex items-center justify-center">
                    {feature.isText ? (
                      <span className="text-xs font-bold text-gray-700 px-3 py-2 bg-gray-200 rounded-full">
                        {feature.basic}
                      </span>
                    ) : feature.basic ? (
                      <div className="w-8 h-8 bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                        <X className="w-5 h-5 text-red-500" />
                      </div>
                    )}
                  </div>
                  
                  {/* Premium Plan */}
                  <div className="flex items-center justify-center">
                    {feature.isText ? (
                      <span className="text-xs font-bold text-gray-700 px-3 py-2 bg-gray-200 rounded-full">
                        {feature.premium}
                      </span>
                    ) : feature.premium ? (
                      <div className="w-8 h-8 bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                        <X className="w-5 h-5 text-red-500" />
                      </div>
                    )}
                  </div>
                  
                  {/* Exclusive Plan */}
                  <div className="flex items-center justify-center">
                    {feature.isText ? (
                      <span className="text-xs font-bold text-gray-700 px-3 py-2 bg-gray-200 rounded-full">
                        {feature.exclusive}
                      </span>
                    ) : feature.exclusive ? (
                      <div className="w-8 h-8 bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                        <X className="w-5 h-5 text-red-500" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6 text-lg">
              Ainda tem dúvidas? Entre em contato conosco
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#250048] text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-lg">
                Falar no WhatsApp
              </button>
              <button className="border-2 border-fuchsia-600 text-fuchsia-600 px-8 py-4 rounded-full font-semibold hover:bg-fuchsia-50 transition-all duration-300 hover:scale-105">
                Agendar Consulta
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}