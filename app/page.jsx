import Image from "next/image";
import {BadgeCheck} from "lucide-react";
import BenefitsCarousel from "@/components/ui/benefitsCarousel";
import IdealSolutionCarousel from "@/components/ui/idealSolutionCarousel";
import ConditionsAndSolution from "@/components/ui/conditionsAndSolution";
import MedicalJourneyCarousel from "@/components/ui/journeyStepByStep";
import PricingPlansSection from "@/components/ui/plansInfo";
import VideoSlider from "@/components/ui/videoSlider";
import FaqKoocher from "@/components/faq/faq";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import MedicalCTAComponent from "@/components/ui/medicalCTAComponent";

export default function BaseSelectionScreen() {
  return (
    <>
    <Navbar/>
      <section className="overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8 grid grid-cols-1 md:grid-cols-2 items-center relative">
          {/* Texto */}
          <div className="z-10 space-y-6 sm:space-y-7 text-center md:text-left">
            <p className="text-sm sm:text-base font-semibold text-gray-900">
              Contabilidade <span className="text-fuchsia-600">Médica</span>
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-[3.2rem] leading-tight sm:leading-[1.2] md:leading-[4rem] font-extrabold text-gray-900">
              A{" "}
              <span className="bg-[#f5ff4f] px-1 sm:px-2 rounded-[6px] inline-block">
                Contabilidade Médica
              </span>{" "}
              <br className="hidden sm:block" />
              que cuida da sua carreira
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-fuchsia-600 font-medium leading-relaxed">
              Economize até 22% em impostos <br className="sm:hidden" />
              sem sair de casa, tudo pelo celular!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start pt-3 w-full">
              <button className="bg-black text-white px-4 sm:px-6 lg:px-7 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-md flex items-center justify-center gap-2 hover:opacity-90 transition w-full sm:w-auto min-w-0">
                <BadgeCheck className="w-4 h-4 flex-shrink-0" /> 
                <span className="truncate">Abra sua PJ Grátis</span>
              </button>
              <button className="bg-fuchsia-600 text-white px-4 sm:px-6 lg:px-7 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-md flex items-center justify-center gap-2 hover:opacity-90 transition w-full sm:w-auto min-w-0">
                <BadgeCheck className="w-4 h-4 text-yellow-300 flex-shrink-0" /> 
                <span className="truncate">Troque de contador</span>
              </button>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative mt-8 sm:mt-12 md:mt-20 flex justify-center md:justify-end">
            <div className="absolute -z-10 right-0 top-8 w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] bg-fuchsia-600 rounded-full hidden md:block" />
            <div className="absolute -z-10 right-[40px] sm:right-[60px] top-10 hidden md:block">
              <div className="space-y-2 sm:space-y-3">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-[150px] sm:w-[200px] h-[10px] sm:h-[14px] bg-white rounded-full"
                  />
                ))}
              </div>
            </div>
            <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-none">
              <Image
                src="/bannerfernandoGui.webp"
                alt="Contadores"
                width={1000}
                height={1000}
                className="relative z-10 object-contain w-full h-auto translate-y-4 sm:translate-y-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Carrossel importado */}
      <BenefitsCarousel />

      {/* Seção Receba seu plantão com agilidade */}
      <MedicalCTAComponent/>

      {/* 2 Carrossel importado */}
      <IdealSolutionCarousel />

      {/* Seção Condição e solução*/}
      <ConditionsAndSolution />

      {/* Seção de Videoconferência Gratuita */}
      <section className="bg-gradient-to-br from-purple-600 via-fuchsia-600 to-purple-700 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20"></div>
        <div className="absolute top-4 sm:top-10 right-4 sm:right-10 w-20 sm:w-32 h-20 sm:h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 sm:bottom-10 left-4 sm:left-10 w-16 sm:w-24 h-16 sm:h-24 bg-white/5 rounded-full blur-lg"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12">
              {/* Texto */}
              <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
                <div className="space-y-1">
                  <p className="text-fuchsia-600 font-semibold text-base sm:text-lg">
                    Contabilidade <span className="text-gray-800">Médica</span>
                  </p>
                  <p className="text-sm sm:text-md text-gray-500 font-medium">Digital</p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Gostaria de tirar todas suas dúvidas?
                  </h2>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                    Agende uma consultoria por <br className="hidden sm:block" />
                    <span className="text-fuchsia-600">
                      videoconferência gratuita
                    </span>{" "}
                    agora mesmo!
                  </h3>
                </div>

                <div className="pt-2 sm:pt-4">
                  <button className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg flex items-center justify-center gap-2 sm:gap-3 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto">
                    <div className="w-5 sm:w-6 h-5 sm:h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-0 h-0 border-l-[5px] sm:border-l-[6px] border-l-purple-600 border-t-[3px] sm:border-t-[4px] border-t-transparent border-b-[3px] sm:border-b-[4px] border-b-transparent ml-[1px] sm:ml-[2px]"></div>
                    </div>
                    <span className="text-center">Agendar videoconferência</span>
                  </button>
                </div>
              </div>

              {/* Ilustração */}
              <div className="relative flex justify-center lg:justify-end mt-6 lg:mt-0">
                {/* Background decorative shapes */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-br from-purple-200/30 to-fuchsia-200/30 rounded-full blur-3xl"></div>
                </div>

                {/* Main illustration container */}
                <div className="relative z-10 w-full max-w-xs sm:max-w-md">
                  {/* Laptop */}
                  <div className="relative">
                    <div className="bg-gray-800 rounded-t-xl sm:rounded-t-2xl p-1">
                      <div className="bg-white rounded-t-lg sm:rounded-t-xl p-3 sm:p-4 h-36 sm:h-48">
                        {/* Screen content */}
                        <div className="space-y-2 sm:space-y-3">
                          <div className="flex items-center gap-1 sm:gap-2 mb-3 sm:mb-4">
                            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-red-400 rounded-full"></div>
                            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-yellow-400 rounded-full"></div>
                            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full"></div>
                          </div>

                          {/* Charts and graphs */}
                          <div className="grid grid-cols-2 gap-1 sm:gap-2">
                            <div className="space-y-1">
                              <div className="h-1.5 sm:h-2 bg-purple-200 rounded-full"></div>
                              <div className="h-1.5 sm:h-2 bg-purple-300 rounded-full w-4/5"></div>
                              <div className="h-1.5 sm:h-2 bg-purple-400 rounded-full w-3/5"></div>
                            </div>
                            <div className="bg-purple-100 rounded-md sm:rounded-lg p-1 sm:p-2 flex items-end justify-center gap-0.5 sm:gap-1">
                              <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-purple-400 rounded-t"></div>
                              <div className="w-1.5 sm:w-2 h-4 sm:h-6 bg-purple-500 rounded-t"></div>
                              <div className="w-1.5 sm:w-2 h-3 sm:h-4 bg-purple-600 rounded-t"></div>
                              <div className="w-1.5 sm:w-2 h-5 sm:h-7 bg-purple-400 rounded-t"></div>
                            </div>
                          </div>

                          <div className="space-y-1">
                            <div className="h-0.5 sm:h-1 bg-gray-200 rounded-full"></div>
                            <div className="h-0.5 sm:h-1 bg-gray-200 rounded-full w-4/5"></div>
                            <div className="h-0.5 sm:h-1 bg-gray-200 rounded-full w-3/5"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-800 h-3 sm:h-4 rounded-b-xl sm:rounded-b-2xl"></div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4">
                    <div className="bg-white rounded-lg p-2 sm:p-3 shadow-lg border border-gray-100 animate-bounce">
                      <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-purple-400 to-fuchsia-500 rounded-lg flex items-center justify-center">
                        <div className="w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-sm"></div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:-left-4">
                    <div className="bg-white rounded-full p-2 sm:p-3 shadow-lg border border-gray-100 animate-pulse">
                      <div className="w-5 sm:w-6 h-5 sm:h-6 bg-gradient-to-br from-purple-400 to-fuchsia-500 rounded-full flex items-center justify-center">
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Stack of documents */}
                  <div className="absolute -left-4 sm:-left-8 top-4 sm:top-8">
                    <div className="relative">
                      <div className="w-12 sm:w-16 h-16 sm:h-20 bg-white rounded-lg shadow-md border border-gray-200 transform rotate-12"></div>
                      <div className="w-12 sm:w-16 h-16 sm:h-20 bg-white rounded-lg shadow-md border border-gray-200 absolute top-1 left-1 transform rotate-6"></div>
                      <div className="w-12 sm:w-16 h-16 sm:h-20 bg-gradient-to-br from-purple-100 to-fuchsia-100 rounded-lg shadow-lg border border-purple-200 absolute top-2 left-2">
                        <div className="p-1.5 sm:p-2 space-y-0.5 sm:space-y-1">
                          <div className="h-0.5 sm:h-1 bg-purple-300 rounded-full"></div>
                          <div className="h-0.5 sm:h-1 bg-purple-200 rounded-full w-3/4"></div>
                          <div className="h-0.5 sm:h-1 bg-purple-200 rounded-full w-1/2"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Magnifying glass */}
                  <div className="absolute -top-4 sm:-top-8 left-1/2 transform -translate-x-1/2">
                    <div className="relative animate-pulse">
                      <div className="w-8 sm:w-12 h-8 sm:h-12 border-2 sm:border-4 border-purple-400 rounded-full bg-white/80 backdrop-blur-sm"></div>
                      <div className="absolute -bottom-1 sm:-bottom-2 -right-1 sm:-right-2 w-4 sm:w-6 h-0.5 sm:h-1 bg-purple-400 rounded-full transform rotate-45"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 sm:w-6 h-4 sm:h-6 border-1 sm:border-2 border-purple-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Jornada Financeira*/}
      <MedicalJourneyCarousel />

      {/* Seção de Planos*/}
      <PricingPlansSection />

      {/* VEM SER KOOCHER */}
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-6 lg:p-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 sm:mb-12 text-center sm:text-left">
            <h1 className="text-sm sm:text-md font-medium text-purple-600 mb-2">
              Contabilidade Digital
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
              Vem ser <span className="text-purple-600">KOOCHER!</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  A gente nasceu através da amizade entre médicos e contadores.
                  A tecnologia e agilidade corre no nosso sangue!
                </p>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Desde 2022 ajudamos mais de{" "}
                  <span className="font-bold text-purple-600">700 médicos</span>{" "}
                  a conquistarem a liberdade de forma simples, descomplicada e
                  sem chatices...
                </p>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Não importa se você está se formando, se é especialista ou com
                  a sua primeira clínica. A KOOCHER possui o plano ideal para a
                  sua carreira. Ah, e o melhor de tudo: de forma rápida,
                  prática, humanizada e segura.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="group bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center w-full sm:w-auto">
                  <div className="w-6 sm:w-8 h-6 sm:h-8 bg-white rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <svg
                      className="w-3 sm:w-4 h-3 sm:h-4 text-purple-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  Institucional
                </button>

                <button className="group bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center w-full sm:w-auto">
                  <svg
                    className="w-4 sm:w-5 h-4 sm:h-5 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-center">Quero conhecer a KOOCHER</span>
                </button>
              </div>
            </div>

            {/* Right Content - Team Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Card base comum */}
              {[
                {
                  name: "Fê",
                  img: "/fernando.webp",
                  desc: "Co-Founder | Mestre em contabilidade e finanças | CRC: MG-115040/O-6 | Acompanhe",
                  handle: "@eufernandorocha",
                },
                {
                  name: "Gui",
                  img: "/gui.webp",
                  desc: "Co-Founder | Auditor Contábil | CRC: MG 123927/O-8 | Acompanhe",
                  handle: "@guilherme.thadeu",
                },
              ].map(({ name, img, desc, handle }) => (
                <div
                  key={name}
                  className="bg-transparent rounded-2xl sm:rounded-3xl overflow-hidden w-full"
                >
                  <div className="relative h-64 sm:h-80 lg:h-[25rem]">
                    <img
                      src={img}
                      alt={name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-6 bg-white shadow-xl border border-gray-200">
                    <h3 className="text-xl sm:text-2xl font-bold text-purple-600 mb-2 sm:mb-3">
                      {name}
                    </h3>
                    <p className="text-sm sm:text-md text-gray-700 mb-2 sm:mb-3 leading-relaxed">
                      {desc}
                    </p>
                    <p className="text-purple-600 font-semibold text-sm sm:text-md break-all">
                      {handle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Elements - Ajustados para não causar overflow */}
          <div className="absolute top-16 sm:top-20 right-16 sm:right-20 w-3 sm:w-4 h-3 sm:h-4 bg-purple-400 rounded-full opacity-60 animate-pulse hidden md:block"></div>
          <div className="absolute top-32 sm:top-40 left-16 sm:left-20 w-4 sm:w-6 h-4 sm:h-6 bg-pink-400 rounded-full opacity-40 animate-bounce hidden md:block"></div>
          <div className="absolute bottom-32 sm:bottom-40 right-32 sm:right-40 w-2 sm:w-3 h-2 sm:h-3 bg-yellow-400 rounded-full opacity-70 animate-pulse hidden md:block"></div>
        </div>
      </div>

      {/* Seção Quem já KOOLA com a gente */}
      <VideoSlider />

      {/* seção DÚVIDAS */}
      <FaqKoocher />
      {/* RODAPÉ */}
      <Footer />
    </>
  );
}
