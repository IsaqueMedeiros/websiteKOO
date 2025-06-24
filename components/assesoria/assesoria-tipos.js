import React, { useState } from "react";
import { Check, User, GraduationCap, Stethoscope, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import PricingPlansSection from '@/components/ui/plansInfo';

const KoocherSelector = () => {
  const [selectedOption, setSelectedOption] = useState("plantonistas");

  const options = [
    { id: "plantonistas", label: "Para Plantonistas", icon: User },
    { id: "residentes", label: "Para Residentes", icon: GraduationCap },
    { id: "especialistas", label: "Para Especialistas", icon: Stethoscope },
  ];

  const cardData = {
    plantonistas: {
      title: "Contabilidade sem estresse",
      subtitle: "conte com a gente",
      description: "Receba seus plantões de forma rápida e com economia de impostos",
      solution: "Temos a solução ideal para você que é plantonista:",
      features: [
        "Abertura da sua PJ Médica em até 7 dias úteis",
        "Recebimento do pagamento rápido",
        "Emissão de notas fiscais em 24 horas",
        "Cadastro nos locais de trabalho",
        "Apuração e envio dos impostos mensais",
        "Rede de networking para conseguir os melhores plantões",
      ],
      bgColor: "bg-gradient-to-br from-brandKoocher-vividPurple to-brandKoocher-deepPurple",
      accentColor: "bg-gradient-to-r from-yellow-400 to-yellow-500",
      textColor: "text-white",
      buttonText: "Contrate a KOOCHER agora mesmo",
      imageSrc: "/solucoes/plantonista.webp",
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: "Ilustração representando serviços para plantonistas médicos",
    },
    residentes: {
      title: "Garanta a gratuidade de mensalidades durante toda residência",
      subtitle: "",
      description: "Residentes na KOOCHER não pagam nos meses que não emitirem notas fiscais",
      solution: "Temos a solução ideal para você que é residente:",
      features: [
        "Isenção de mensalidade nos meses que não emitir notas fiscais",
        "Abertura da sua PJ Médica em até 7 dias úteis",
        "Recebimento do pagamento rápido",
        "Emissão de notas fiscais em 24 horas",
        "Cadastro nos locais de trabalho",
        "Apuração e envio dos impostos mensais",
      ],
      bgColor: "bg-gradient-to-br from-brandKoocher-neonLime to-brandKoocher-pastelLime",
      accentColor: "bg-gradient-to-r from-[#29003F] to-purple-700",
      textColor: "text-gray-900",
      buttonText: "Contrate a KOOCHER agora mesmo",
      imageSrc: "/solucoes/residente.webp",
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: "Ilustração representando serviços para residentes médicos",
    },
    especialistas: {
      title: "Menos burocracia, mais pacientes.",
      subtitle: "",
      description: "Serviços desenvolvidos especialmente para médicos que buscam construir a primeira clínica ou consultório",
      solution: "Temos a solução ideal para você que é especialista:",
      features: [
        "Abertura da PJ Médica em até 7 dias úteis",
        "Gestão da conta bancária PJ",
        "Assessoria Administrativa",
        "Secretaria Online",
        "Apuração e envio dos impostos mensais",
      ],
      bgColor: "bg-gradient-to-br from-slate-800 via-slate-900 to-black",
      accentColor: "bg-gradient-to-r from-yellow-400 to-yellow-500",
      textColor: "text-white",
      buttonText: "Contrate a KOOCHER agora mesmo",
      imageSrc: "/solucoes/especialista.webp",
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: "Ilustração representando serviços para especialistas médicos",
    },
  };

  const currentCard = cardData[selectedOption];
  const IconComponent = options.find((opt) => opt.id === selectedOption)?.icon || User;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-brandKoocher-deepPurple to-brandKoocher-vividPurple text-white px-6 py-3 rounded-full mb-8 shadow-lg">
            <Sparkles className="w-5 h-5 mr-2" />
            <span className="font-semibold">Soluções Personalizadas</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r  from-brandKoocher-deepPurple to-brandKoocher-vividPurple bg-clip-text text-transparent mb-6 leading-tight">
            Encontre sua solução perfeita
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Descubra como a KOOCHER pode transformar sua carreira médica com soluções sob medida
          </p>
        </div>
        
        {/* Enhanced Selector Section */}
        <section className="mb-20">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-25"></div>
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Escolha o seu perfil profissional
                </h2>
                <p className="text-lg text-gray-600">
                  Selecione a opção que melhor se adequa ao seu perfil e descubra benefícios exclusivos
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {options.map((option) => {
                  const OptionIcon = option.icon;
                  const isSelected = selectedOption === option.id;
                  
                  return (
                    <button
                      key={option.id}
                      onClick={() => setSelectedOption(option.id)}
                      className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 transform hover:scale-105 ${
                        isSelected
                          ? "bg-gradient-to-br from-brandKoocher-deepPurple to-brandKoocher-vividPurple text-white shadow-2xl scale-105"
                          : "bg-white hover:bg-gray-50 text-gray-700 shadow-lg hover:shadow-xl border border-gray-200"
                      }`}
                    >
                      <div className="relative z-10 flex flex-col items-center space-y-4">
                        <div className={`p-4 rounded-2xl transition-all duration-300 ${
                          isSelected ? 'bg-white/20 backdrop-blur-sm' : 'bg-purple-100 group-hover:bg-purple-200'
                        }`}>
                          <OptionIcon 
                            size={32} 
                            className={`transition-all duration-300 ${
                              isSelected ? 'text-white' : 'text-purple-600'
                            }`} 
                          />
                        </div>
                        <span className="font-bold text-lg text-center">
                          {option.label}
                        </span>
                        {isSelected && (
                          <div className="w-12 h-1 bg-yellow-400 rounded-full"></div>
                        )}
                      </div>
                      
                      {/* Animated background effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                      
                      {/* Selection indicator */}
                      {isSelected && (
                        <div className="absolute top-4 right-4 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                          <Check size={14} className="text-purple-900" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Main Card Section */}
        <section className="mb-20">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className={`relative ${currentCard.bgColor} rounded-3xl shadow-2xl overflow-hidden`}>
              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-16 items-center">
                {/* Enhanced Content Side */}
                <div className="space-y-10">
                  <div className="space-y-6">
                    <h1 className={`text-4xl md:text-5xl lg:text-5xl font-bold ${currentCard.textColor} leading-tight`}>
                      {currentCard.title}
                      {currentCard.subtitle && (
                        <span className="block mt-4 text-3xl md:text-4xl lg:text-5xl font-medium opacity-90">
                          {currentCard.subtitle}
                        </span>
                      )}
                    </h1>
                    
                    <p className={`text-xl md:text-2xl ${currentCard.textColor} opacity-90 leading-relaxed`}>
                      {currentCard.description}
                    </p>
                  </div>

                  <div className="space-y-8">
                    <p className={`font-bold text-xl ${currentCard.textColor} flex items-center`}>
                      <Sparkles className="w-6 h-6 mr-3" />
                      {currentCard.solution}
                    </p>

                    <div className="space-y-4">
                      {currentCard.features.map((feature, index) => (
                        <div
                          key={index}
                          className={`flex items-start gap-4 ${currentCard.textColor} group p-4 rounded-xl transition-all duration-300 hover:bg-white/10`}
                        >
                          <div className={`${currentCard.accentColor} rounded-full p-2 flex-shrink-0 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                            <Check size={16} className="text-white" />
                          </div>
                          <span className="text-lg md:text-xl leading-relaxed font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className={`${currentCard.accentColor} hover:scale-105 text-[#F2F2F2] font-bold py-5 px-10 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-3xl flex items-center gap-4 group text-lg md:text-xl`}>
                    <IconComponent size={24} className="group-hover:scale-110 transition-transform" />
                    <span>{currentCard.buttonText}</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Enhanced Visual Side */}
                <div className="flex justify-center items-center">
                  <div className="relative">
                    {currentCard.imageSrc ? (
                      <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <Image
                          src={currentCard.imageSrc}
                          alt={currentCard.imageAlt}
                          width={currentCard.imageWidth}
                          height={currentCard.imageHeight}
                          className="relative w-96 h-[40rem] object-cover rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10 rounded-3xl"></div>
                        
                        {/* Floating elements */}
                        <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                          <Sparkles className="w-8 h-8 text-purple-900" />
                        </div>
                        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg animate-pulse">
                          <Check className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    ) : (
                      <div className="relative">
                        {/* Enhanced decorative circles */}
                        <div className="absolute -inset-12">
                          <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400/20 rounded-full animate-pulse"></div>
                          <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-400/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                          <div className="absolute top-1/2 left-0 w-20 h-20 bg-yellow-400/15 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                        </div>

                        {/* Main icon container */}
                        <div className="relative w-80 h-80 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-full flex items-center justify-center shadow-2xl border border-white/20">
                          <IconComponent size={140} className="text-white" />
                        </div>

                        {/* Enhanced side elements */}
                        <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 space-y-3">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className="w-4 h-16 bg-yellow-400/80 rounded-full animate-bounce shadow-lg"
                              style={{ 
                                animationDelay: `${i * 0.2}s`,
                                animationDuration: '2s'
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="mb-20">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl blur opacity-25"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl py-20 px-8 md:px-16 text-center overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600 to-blue-600"></div>
              </div>
              
              <div className="relative z-10 max-w-5xl mx-auto">
                <div className="inline-flex items-center bg-gradient-to-r from-brandKoocher-deepPurple to-brandKoocher-vividPurple text-white px-6 py-3 rounded-full mb-8 shadow-lg">
                  <span className="font-semibold">Melhor Custo-Benefício</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-8">
                  Conte com o melhor{" "}
                  <span className="bg-gradient-to-r from-brandKoocher-deepPurple to-brandKoocher-vividPurple bg-clip-text text-transparent">
                    custo benefício do mercado
                  </span>
                  , planos a partir de{" "}
                  <div className="inline-flex items-baseline">
                    <span className="text-slate-900 font-black text-5xl md:text-6xl lg:text-7xl">
                      R$ 497
                    </span>
                    <span className="text-2xl md:text-3xl text-gray-600 ml-2">/mês</span>
                  </div>
                </h2>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
                  <button className="group bg-brandKoocher-neonLime hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-bold px-10 py-5 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center gap-4 text-xl">
                    <span className="text-2xl"><Image
                                                  src="/icon-purple.webp"
                                                  alt="logo koocher"
                                                  width={35}
                                                  height={35}
                                                  className="relative z-10 mr-8"
                                                />{" "}</span>
                    <span>Contrate a KOOCHER agora mesmo</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 bg-gradient-to-r from-brandKoocher-vividPurple to-brandKoocher-deepPurple rounded-full border-2 border-white"></div>
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 from-brandKoocher-vividPurple to-brandKoocher-neonLime border-2 border-white"></div>
                      <div className="w-10 h-10 bg-gradient-to-r from-brandKoocher-vividPurple to-brandKoocher-deepPurple rounded-full border-2 border-white"></div>
                    </div>
                    <span className="font-semibold">+500 médicos confiam na KOOCHER</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <PricingPlansSection/>
    </div>
  );
};

export default KoocherSelector;