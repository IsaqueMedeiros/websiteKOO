"use client";
import Image from "next/image";
import {
  BadgeCheck,
  DollarSign,
  Building2,
  FileText,
  ReceiptText,
  Share2,
} from "lucide-react";
import BenefitsCarousel from "@/components/ui/benefitsCarousel";
import IdealSolutionCarousel from "@/components/ui/idealSolutionCarousel";
import ConditionsAndSolution from "@/components/ui/conditionsAndSolution";
import FinancialSolutionSection from "@/components/ui/financeSolution";
import MedicalJourneyCarousel from "@/components/ui/journeyStepByStep";
import PricingPlansSection from "@/components/ui/plansInfo";

export default function HomeSection() {
  return (
    <>
      <section className="bg-[#f4f0ff] w-full">
        <div className="max-w-fit mx-auto px-6 lg:px-8 pt-20 pb-8 grid grid-cols-1 md:grid-cols-2 items-center relative">
          {/* Texto */}
          <div className="z-10 space-y-7 text-center md:text-left">
            <p className="text-base font-semibold text-gray-900">
              Contabilidade <span className="text-fuchsia-600">Médica</span>
            </p>
            <h1 className="text-[2.5rem] leading-[3.2rem] md:text-[3.2rem] md:leading-[4rem] font-extrabold text-gray-900">
              A{" "}
              <span className="bg-[#f5ff4f] px-2 rounded-[6px]">
                Contabilidade Médica
              </span>{" "}
              <br className="hidden md:block" />
              que cuida da sua carreira
            </h1>
            <p className="text-lg md:text-xl text-fuchsia-600 font-medium leading-relaxed">
              Economize até 22% em impostos <br className="md:hidden" />
              sem sair de casa, tudo pelo celular!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-3">
              <button className="bg-black text-white px-7 py-3.5 rounded-full font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition">
                <BadgeCheck className="w-4 h-4" /> Abra sua PJ Grátis
              </button>
              <button className="bg-fuchsia-600 text-white px-7 py-3.5 rounded-full font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition">
                <BadgeCheck className="w-4 h-4 text-yellow-300" /> Troque de
                contador
              </button>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative mt-12 md:mt-0 flex justify-center md:justify-end">
            <div className="absolute -z-10 right-0 top-8 w-[320px] h-[320px] bg-fuchsia-600 rounded-full hidden md:block" />
            <div className="absolute -z-10 right-[60px] top-10 hidden md:block">
              <div className="space-y-3">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-[200px] h-[14px] bg-white rounded-full"
                  />
                ))}
              </div>
            </div>
            <Image
              src="/bannerfernandoGui.webp"
              alt="Contadores"
              width={1000}
              height={1000}
              className="relative z-10 object-contain"
            />
          </div>
        </div>
      </section>

      {/* Carrossel importado */}
      <BenefitsCarousel />

      {/* Seção Receba seu plantão com agilidade */}
      <section className="bg-[#f4f0ff] pt-4 pb-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-[#250048] rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            {/* Texto */}
            <div className="text-white space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold leading-snug">
                Receba seu plantão <br /> com{" "}
                <span className="text-[#f5ff4f]">agilidade</span>
              </h2>
              <ul className="space-y-3 text-sm md:text-base font-medium">
                <li className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-[#f5ff4f]" />
                  Apoio para o{" "}
                  <strong className="text-white font-bold">
                    primeiro plantão
                  </strong>
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#f5ff4f]" />
                  Abertura de{" "}
                  <strong className="text-white font-bold">PJ Médica</strong>
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#f5ff4f]" />
                  Redução de{" "}
                  <strong className="text-white font-bold">impostos</strong>
                </li>
                <li className="flex items-center gap-2">
                  <ReceiptText className="w-5 h-5 text-[#f5ff4f]" />
                  Emissão de{" "}
                  <strong className="text-white font-bold">
                    Notas fiscais
                  </strong>{" "}
                  em menos de 24 horas
                </li>
                <li className="flex items-center gap-2">
                  <Share2 className="w-5 h-5 text-[#f5ff4f]" />
                  Rede de{" "}
                  <strong className="text-white font-bold">networking</strong>
                </li>
              </ul>
              <button className="bg-[#f5ff4f] text-[#250048] px-6 py-3 rounded-full font-semibold text-sm mt-2 hover:opacity-90 transition">
                Conheça nossos planos
              </button>
            </div>

            {/* Imagem */}
            <div className="relative w-full flex justify-center md:justify-end">
              <Image
                src="/medica-contabilidade-koocher.webp"
                alt="Mulher médica"
                width={380}
                height={380}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2 Carrossel importado */}
      <IdealSolutionCarousel />

      {/* Seção Condição e solução*/}
      <ConditionsAndSolution />

      {/* Seção solução para suavida financeira*/}
      <FinancialSolutionSection />

      {/* Seção Jornada Financeira*/}
      <MedicalJourneyCarousel />

      {/* Seção de Planos*/}
      <PricingPlansSection />

      {/* Seção de Videoconferência Gratuita */}
      <section className="bg-gradient-to-br from-purple-600 via-fuchsia-600 to-purple-700 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
              {/* Texto */}
              <div className="space-y-6">
                <div className="space-y-1">
                  <p className="text-fuchsia-600 font-semibold text-lg">
                    Contabilidade <span className="text-gray-800">Médica</span>
                  </p>
                  <p className="text-sm text-gray-500 font-medium">Digital</p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Gostaria de tirar todas suas dúvidas?
                  </h2>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                    Agende uma consultoria por <br />
                    <span className="text-fuchsia-600">
                      videoconferência gratuita
                    </span>{" "}
                    agora mesmo!
                  </h3>
                </div>

                <div className="pt-4">
                  <button className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[6px] border-l-purple-600 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-[2px]"></div>
                    </div>
                    Agendar videoconferência
                  </button>
                </div>
              </div>

              {/* Ilustração */}
              <div className="relative flex justify-center lg:justify-end">
                {/* Background decorative shapes */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 bg-gradient-to-br from-purple-200/30 to-fuchsia-200/30 rounded-full blur-3xl"></div>
                </div>

                {/* Main illustration container */}
                <div className="relative z-10 w-full max-w-md">
                  {/* Laptop */}
                  <div className="relative">
                    <div className="bg-gray-800 rounded-t-2xl p-1">
                      <div className="bg-white rounded-t-xl p-4 h-48">
                        {/* Screen content */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          </div>

                          {/* Charts and graphs */}
                          <div className="grid grid-cols-2 gap-2">
                            <div className="space-y-1">
                              <div className="h-2 bg-purple-200 rounded-full"></div>
                              <div className="h-2 bg-purple-300 rounded-full w-4/5"></div>
                              <div className="h-2 bg-purple-400 rounded-full w-3/5"></div>
                            </div>
                            <div className="bg-purple-100 rounded-lg p-2 flex items-end justify-center gap-1">
                              <div className="w-2 h-8 bg-purple-400 rounded-t"></div>
                              <div className="w-2 h-6 bg-purple-500 rounded-t"></div>
                              <div className="w-2 h-4 bg-purple-600 rounded-t"></div>
                              <div className="w-2 h-7 bg-purple-400 rounded-t"></div>
                            </div>
                          </div>

                          <div className="space-y-1">
                            <div className="h-1 bg-gray-200 rounded-full"></div>
                            <div className="h-1 bg-gray-200 rounded-full w-4/5"></div>
                            <div className="h-1 bg-gray-200 rounded-full w-3/5"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-800 h-4 rounded-b-2xl"></div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4">
                    <div className="bg-white rounded-lg p-3 shadow-lg border border-gray-100 animate-bounce">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-fuchsia-500 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-sm"></div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-6 -left-4">
                    <div className="bg-white rounded-full p-3 shadow-lg border border-gray-100 animate-pulse">
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-fuchsia-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Stack of documents */}
                  <div className="absolute -left-8 top-8">
                    <div className="relative">
                      <div className="w-16 h-20 bg-white rounded-lg shadow-md border border-gray-200 transform rotate-12"></div>
                      <div className="w-16 h-20 bg-white rounded-lg shadow-md border border-gray-200 absolute top-1 left-1 transform rotate-6"></div>
                      <div className="w-16 h-20 bg-gradient-to-br from-purple-100 to-fuchsia-100 rounded-lg shadow-lg border border-purple-200 absolute top-2 left-2">
                        <div className="p-2 space-y-1">
                          <div className="h-1 bg-purple-300 rounded-full"></div>
                          <div className="h-1 bg-purple-200 rounded-full w-3/4"></div>
                          <div className="h-1 bg-purple-200 rounded-full w-1/2"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Magnifying glass */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div className="relative animate-pulse">
                      <div className="w-12 h-12 border-4 border-purple-400 rounded-full bg-white/80 backdrop-blur-sm"></div>
                      <div className="absolute -bottom-2 -right-2 w-6 h-1 bg-purple-400 rounded-full transform rotate-45"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 border-2 border-purple-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VEM SER KOOCHER */}

      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-sm font-medium text-purple-600 mb-2">
              Contabilidade Digital
            </h1>
            <h2 className="text-6xl font-bold text-gray-900 mb-8">
              Vem ser <span className="text-purple-600">KOOCHER!</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  A gente nasceu através da amizade entre médicos e contadores.
                  A tecnologia e agilidade corre no nosso sangue!
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Desde 2022 ajudamos mais de{" "}
                  <span className="font-bold text-purple-600">700 médicos</span>{" "}
                  a conquistarem a liberdade de forma simples, descomplicada e
                  sem chatices...
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Não importa se você está se formando, se é especialista ou com
                  a sua primeira clínica. A KOOCHER possui o plano ideal para a
                  sua carreira. Ah, e o melhor de tudo: de forma rápida,
                  prática, humanizada e segura.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-purple-600"
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

                <button className="group bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Quero conhecer a KOOCHER
                </button>
              </div>
            </div>

            {/* Right Content - Team Cards */}
            <div className="space-y-6">
              {/* Fê Card */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <div className="h-64 bg-gradient-to-br from-purple-400 to-purple-600"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white rounded-2xl p-4">
                      <h3 className="text-2xl font-bold text-purple-600 mb-2">
                        Fê
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        Co-Founder | Mestre em contabilidade e finanças | CRC:
                        MG-115040/O-6 | Acompanhe
                      </p>
                      <p className="text-purple-600 font-medium">
                        @eufernandorocha
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gui Card */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <div className="h-64 bg-gradient-to-br from-green-400 to-green-600"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white rounded-2xl p-4">
                      <h3 className="text-2xl font-bold text-green-600 mb-2">
                        Gui
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        Co-Founder | Auditor Contábil | CRC: MG 123927/O-8 |
                        Acompanhe
                      </p>
                      <p className="text-green-600 font-medium">
                        @guilherme.thadeu
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 right-20 w-4 h-4 bg-purple-400 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-40 left-20 w-6 h-6 bg-pink-400 rounded-full opacity-40 animate-bounce"></div>
          <div className="absolute bottom-40 right-40 w-3 h-3 bg-yellow-400 rounded-full opacity-70 animate-pulse"></div>
        </div>
      </div>

      {/* Seção Quem já KOOLA com a gente */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Conteúdo da Esquerda */}
            <div className="space-y-8">
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                Quem já KOOLA com a gente{" "}
                <span className="inline-block">😊</span>
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                Somos uma comunidade com mais de 700 médicos espalhados pelo
                Brasil. Recém formados, Residentes e Especialistas. Ajudamos
                médicos que buscam ir além de conquistar a sonhada liberdade
                financeira desde a colação de grau até a primeira clínica ou
                consultório.
              </p>

              <button className="group bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Vem ser KOOCHER
              </button>
            </div>

            {/* Card da Doutora à Direita */}
            <div className="relative">
              <div className="bg-yellow-400 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
                {/* Logo KOOCHER */}
                <div className="mb-6">
                  <h3 className="text-4xl font-bold text-purple-600">
                    K<span className="text-pink-500">❤</span>O<br />
                    CHER
                  </h3>
                </div>

                {/* Foto e Info da Doutora */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    {/* Círculo branco decorativo */}
                    <div className="absolute -top-2 -left-2 w-16 h-16 border-4 border-white rounded-full"></div>

                    {/* Avatar placeholder */}
                    <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center relative z-10">
                      <span className="text-white font-bold text-sm">DR</span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h4 className="font-bold text-purple-600 text-lg">
                      DRA. RAPHAELA PAES
                    </h4>
                    <p className="text-purple-500 text-sm">
                      Dota reumatologista
                    </p>
                  </div>

                  {/* Seta decorativa */}
                  <div className="text-white">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {/* Foto da Doutora */}
                <div className="mt-6 relative">
                  {/* Placeholder para a foto - substitua por uma <img> real */}
                  <div className="w-full h-64 bg-gradient-to-b from-pink-300 to-pink-500 rounded-2xl overflow-hidden">
                    {/* Aqui você colocaria a imagem real da doutora */}
                    <div className="w-full h-full flex items-end justify-center p-6">
                      <div className="w-32 h-40 bg-pink-600 rounded-lg opacity-50"></div>
                    </div>
                  </div>

                  {/* Círculo decorativo */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-50 rounded-full"></div>
                </div>
              </div>

              {/* Elementos decorativos flutuantes */}
              <div className="absolute -top-4 -right-4 w-6 h-6 bg-pink-400 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-8 -left-4 w-4 h-4 bg-purple-400 rounded-full opacity-70 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
