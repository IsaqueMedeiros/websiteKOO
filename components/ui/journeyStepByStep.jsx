"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, GraduationCap, FileText, Building, CreditCard, Smartphone } from 'lucide-react';

const journeySteps = [
  {
    step: 1,
    title: "Colação de grau",
    icon: GraduationCap,
    items: [
      "Você realiza sua colação de grau",
      "Faça sua inscrição como Pessoa Física no CRM",
      "Acesse o site do CRM do seu estado e faça o registro"
    ]
  },
  {
    step: 2,
    title: "Entenda as Vantagens da PJ Médica",
    icon: FileText,
    items: [
      "Entenda as Vantagens da PJ Médica",
      "Economia de impostos",
      "Mais oportunidades",
      "Plano de saúde econômico",
      "Redução de taxa de juros"
    ]
  },
  {
    step: 3,
    title: "Separe 2 documentos para abrir sua PJ",
    icon: FileText,
    items: [
      "Separe 2 documentos para abrir sua PJ:",
      "CNH ou Identidade",
      "IPTU (pode ser de aluguel ou em nome de terceiros)",
      "Solicite a contratação aqui mesmo no nosso site"
    ]
  },
  {
    step: 4,
    title: "Solicite a abertura do seu CNPJ",
    icon: Building,
    items: [
      "Solicite a abertura do seu CNPJ através do nosso site",
      "A KOOCHER cuida de todo o processo de abertura",
      "Não cobramos honorários para o serviço de abertura",
      "Você paga apenas as taxas do governo e o Certificado Digital",
      "O valor da taxa do governo varia de acordo com cada cidade, para consultar sua cidade fale no nosso WhatsApp ou agende uma videoconferência"
    ]
  },
  {
    step: 5,
    title: "Receba seu CNPJ",
    icon: Check,
    items: [
      "O número do seu CNPJ estará disponível em até 7 dias úteis",
      "Após a abertura da PJ, enviamos todos os documentos via WhatsApp, Email e Aplicativo"
    ]
  },
  {
    step: 6,
    title: "Abertura da conta bancária PJ",
    icon: CreditCard,
    items: [
      "Com a documentação da PJ em mãos, você irá realizar a abertura da sua conta bancária PJ no banco de sua escolha",
      "Atenção: agora além da conta bancária PF você também terá uma conta bancária PJ"
    ]
  },
  {
    step: 7,
    title: "Configure seu aplicativo",
    icon: Smartphone,
    items: [
      "Baixe nosso aplicativo oficial",
      "Configure suas preferências de atendimento",
      "Sincronize com sua conta bancária PJ"
    ]
  },
  {
    step: 8,
    title: "Primeiro plantão",
    icon: Check,
    items: [
      "Receba suporte para seu primeiro plantão",
      "Emissão de nota fiscal em menos de 24h",
      "Acompanhamento personalizado"
    ]
  },
  {
    step: 9,
    title: "Gestão financeira",
    icon: FileText,
    items: [
      "Relatórios mensais automatizados",
      "Controle de gastos e receitas",
      "Planejamento tributário"
    ]
  },
  {
    step: 10,
    title: "Networking e crescimento",
    icon: Building,
    items: [
      "Acesso à rede de médicos parceiros",
      "Oportunidades exclusivas de trabalho",
      "Consultoria para crescimento profissional"
    ]
  }
];

export default function MedicalJourneyCarousel() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % journeySteps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + journeySteps.length) % journeySteps.length);
  };

  const goToStep = (index) => {
    setCurrentStep(index);
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#250048] mb-4">
            Sua Jornada na medicina
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8">
            em <span className="text-fuchsia-600">10 passos</span>
          </h3>
          
          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={prevStep}
              className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <div className="bg-gray-100 px-6 py-3 rounded-full">
              <span className="text-gray-700 font-medium">Passo a passo</span>
            </div>
            
            <button
              onClick={nextStep}
              className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentStep * 100}%)` }}
          >
            {journeySteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gray-50 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
                    {/* Step Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 bg-fuchsia-600 rounded-2xl flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <p className="text-fuchsia-600 font-semibold text-lg">
                          Passo {step.step}:
                        </p>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#250048]">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="space-y-4">
                      {step.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-fuchsia-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <p className="text-gray-700 text-lg leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {journeySteps.map((_, index) => (
            <button
              key={index}
              onClick={() => goToStep(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentStep 
                  ? 'bg-fuchsia-600' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors">
            Começar minha jornada
          </button>
        </div>
      </div>
    </section>
  );
}