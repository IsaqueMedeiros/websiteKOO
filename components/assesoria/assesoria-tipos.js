import React, { useState } from "react";
import { Check, User, GraduationCap, Stethoscope } from "lucide-react";

const KoocherSelector = () => {
  const [selectedOption, setSelectedOption] = useState("plantonistas");

  const options = [
    { id: "plantonistas", label: "Para Plantonistas", icon: User },
    { id: "residentes", label: "Para Residentes", icon: GraduationCap },
    { id: "especialistas", label: "Para Especialistas", icon: Stethoscope },
  ];

  const cardData = {
    plantonistas: {
      title: "Sua contabilidade não precisa ser uma sala vermelha...",
      subtitle: "conte com a gente",
      description:
        "Receba seus plantões de forma rápida e com economia de impostos",
      solution: "Temos a solução ideal para você que é plantonista:",
      features: [
        "Abertura da sua PJ Médica em até 7 dias úteis",
        "Recebimento do pagamento rápido",
        "Emissão de notas fiscais em 24 horas",
        "Cadastro nos locais de trabalho",
        "Apuração e envio dos impostos mensais",
        "Rede de networking para conseguir os melhores plantões",
      ],
      bgColor: "bg-purple-600",
      accentColor: "bg-yellow-400",
      textColor: "text-white",
      buttonText: "Contrate a KOOCHER agora mesmo",
    },
    residentes: {
      title: "Garanta a gratuidade de mensalidades durante toda residência",
      subtitle: "",
      description:
        "Residentes na KOOCHER não pagam nos meses que não emitirem notas fiscais",
      solution: "Temos a solução ideal para você que é residente:",
      features: [
        "Isenção de mensalidade nos meses que não emitir notas fiscais",
        "Abertura da sua PJ Médica em até 7 dias úteis",
        "Recebimento do pagamento rápido",
        "Emissão de notas fiscais em 24 horas",
        "Cadastro nos locais de trabalho",
        "Apuração e envio dos impostos mensais",
      ],
      bgColor: "bg-yellow-400",
      accentColor: "bg-purple-600",
      textColor: "text-gray-900",
      buttonText: "Contrate a KOOCHER agora mesmo",
    },
    especialistas: {
      title:
        "Suporte completo para você que busca reduzir burocracias e maximizar o número de pacientes",
      subtitle: "",
      description:
        "Serviços desenvolvidos especialmente para médicos que buscam construir a primeira clínica ou consultório",
      solution: "Temos a solução ideal para você que é especialista:",
      features: [
        "Abertura da PJ Médica em até 7 dias úteis",
        "Gestão da conta bancária PJ",
        "Assessoria Administrativa",
        "Secretaria Online",
        "Apuração e envio dos impostos mensais",
      ],
      bgColor: "bg-navy-900",
      accentColor: "bg-yellow-400",
      textColor: "text-white",
      buttonText: "Contrate a KOOCHER agora mesmo",
    },
  };

  const currentCard = cardData[selectedOption];
  const IconComponent =
    options.find((opt) => opt.id === selectedOption)?.icon || User;

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Selector */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Escolha o seu perfil profissional
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {options.map((option) => {
              const OptionIcon = option.icon;
              return (
                <button
                  key={option.id}
                  onClick={() => setSelectedOption(option.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedOption === option.id
                      ? "bg-purple-600 text-white shadow-lg transform scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <OptionIcon size={20} />
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Card */}
      <div className="max-w-6xl mx-auto">
        <div
          className={`${currentCard.bgColor} rounded-2xl shadow-2xl overflow-hidden`}
        >
          <div className="relative">
            {/* Header Badge */}
            <div className="absolute top-6 left-6 z-10">
              <span className="bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
                KOOCHER PARA{" "}
                {options
                  .find((opt) => opt.id === selectedOption)
                  ?.label.toUpperCase()
                  .replace("PARA ", "")}
              </span>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12">
              {/* Content Side */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <h1
                    className={`text-3xl lg:text-4xl font-bold ${currentCard.textColor} leading-tight`}
                  >
                    {currentCard.title}
                    {currentCard.subtitle && (
                      <span className="block mt-2">{currentCard.subtitle}</span>
                    )}
                  </h1>
                </div>

                <p className={`text-lg ${currentCard.textColor} opacity-90`}>
                  {currentCard.description}
                </p>

                <div className="space-y-4">
                  <p className={`font-semibold ${currentCard.textColor}`}>
                    {currentCard.solution}
                  </p>

                  <ul className="space-y-3">
                    {currentCard.features.map((feature, index) => (
                      <li
                        key={index}
                        className={`flex items-start gap-3 ${currentCard.textColor}`}
                      >
                        <div
                          className={`${currentCard.accentColor} rounded-full p-1 mt-1 flex-shrink-0`}
                        >
                          <Check size={12} className="text-white" />
                        </div>
                        <span className="text-sm lg:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`${currentCard.accentColor} text-gray-900 font-bold py-4 px-8 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2`}
                >
                  <IconComponent size={20} />
                  {currentCard.buttonText}
                </button>
              </div>

              {/* Visual Side */}
              <div className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
                <div className="relative">
                  {/* Decorative circles */}
                  <div
                    className={`absolute -right-4 -top-4 w-32 h-32 ${currentCard.accentColor} rounded-full opacity-20`}
                  ></div>
                  <div
                    className={`absolute -right-8 -top-8 w-24 h-24 ${currentCard.accentColor} rounded-full opacity-10`}
                  ></div>

                  {/* Icon representation */}
                  <div
                    className={`w-48 h-48 ${currentCard.accentColor} rounded-full flex items-center justify-center shadow-2xl`}
                  >
                    <IconComponent size={80} className="text-gray-900" />
                  </div>

                  {/* Additional decorative elements */}
                  <div className="absolute -left-6 top-1/2 transform -translate-y-1/2">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-8 ${currentCard.accentColor} rounded-full mb-2 opacity-60`}
                        style={{ animationDelay: `${i * 0.1}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="text-center">
        {/* Primeira seção */}
        <div className="bg-white py-12 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A23]">
            Conte com o melhor{" "}
            <span className="text-[#CC00FF]">custo benefício do mercado</span>,
            planos
            <br />a partir de <span className="text-[#0A0A23]">R$ 497</span>
          </h2>

          <div className="mt-6">
            <button className="bg-[#E4FF00] hover:bg-[#d4f000] text-sm font-semibold px-6 py-2 rounded-full inline-flex items-center text-[#0A0A23]">
              <span className="mr-2">🔗</span>
              <span>Contrate a KOOCHER agora mesmo</span>
            </button>
          </div>
        </div>

        {/* Segunda seção */}
        <div className="bg-[#F5F4FF] py-12 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A23]">
            Além da contabilidade, conte
            <br />
            também com{" "}
            <span className="text-[#CC00FF]">nossas assessorias</span>
          </h2>
        </div>
      </section>
    </div>
  );
};

export default KoocherSelector;
