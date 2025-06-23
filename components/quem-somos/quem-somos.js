import React from "react";
import Image from "next/image";
import { Instagram, Linkedin, ArrowRight, Heart, Users, Target, Award } from 'lucide-react';

const QuemSomos = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row">
        {/* Purple Section */}
        <div className="bg-gradient-to-br from-purple-600 to-pink-500 lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
          <div className="text-white max-w-md">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              A primeira contabilidade médica por assinatura do Brasil 💜
            </h1>
            <p className="text-lg lg:text-xl opacity-90 leading-relaxed">
              Trouxemos a praticidade do streaming para a contabilidade médica.
              Conheça nossa história e viver seu plano agora mesmo.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 relative bg-gray-100">
          <div className="absolute top-8 right-8 z-10">
            {/* Logo placeholder */}
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
              </div>
              <div className="text-2xl font-bold text-gray-800">KOOCHER</div>
            </div>
          </div>

          {/* Person working on laptop */}
          <div className="h-[500px] w-full relative overflow-hidden">
            <Image
              src="/quem-somos/computador.webp"
              alt="logo koocher"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Photo Section */}
            <div className="lg:w-1/2">
              <div className="relative w-full h-[700px] rounded-2xl overflow-hidden">
                {/* Imagem como fundo */}
                <Image
                  src="/quem-somos/koont-fernando-gui-min.webp"
                  alt="Background"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                A KOOCHER
              </h2>

              <div className="text-gray-700 text-lg leading-relaxed mb-8 space-y-4">
                <p>
                  A KOOCHER nasceu quando a Gui e Fê (Co-Founders) eram jovens e
                  frequentavam os maiores eventos de contabilidade do Brasil
                  (Pratamed, Intermed...) com amigos médicos. Foi lá que
                  descobriram a necessidade dos médicos de todo Brasil por uma
                  contabilidade Ágil, Techs e Sem Chatices. E foi assim que
                  começou, atendendo a primeira amiga médica e depois de anos se
                  tornando a maior Contabilidade Médica do Brasil que leva um
                  conjunto de soluções para a carreira médica.
                </p>
              </div>

              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                <span className="flex items-center space-x-2">
                  <span>💬</span>
                  <span>Fale com a Koocher</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mission, Vision, Values Section */}
      <div className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-8 lg:px-16">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                </div>
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              A primeira Startup de
            </h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900">
              contabilidade médica do brasil
            </h3>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Missão Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 border-2 border-purple-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Missão
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Guiar jovens médicos do mercado de trabalho através de uma
                  organização financeira e contábil contínua.
                </p>
              </div>
            </div>

            {/* Visão Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-purple-500 rounded-sm"></div>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Visão</h4>
                <p className="text-gray-600 leading-relaxed">
                  Oferecer a oportunidade de uma contabilidade acessível,
                  dedicada e funcional a todos os médicos em seu último ano de
                  formação.
                </p>
              </div>
            </div>

            {/* Valores Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="w-2 h-2 bg-purple-500 rounded-sm"></div>
                      <div className="w-2 h-2 bg-purple-300 rounded-sm"></div>
                      <div className="w-2 h-2 bg-purple-300 rounded-sm"></div>
                      <div className="w-2 h-2 bg-purple-500 rounded-sm"></div>
                    </div>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Valores
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Inovadoras, Disciplina, Prestativas, Inteligente, Ágil,
                  Tecnológicas, Confiantes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founders Cards */}
        <div className="relative">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Conheça os Fundadores</h3>
            <p className="text-gray-600 text-lg">Os especialistas por trás da KOOCHER</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Fê Card */}
            <div className="group relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 rounded-3xl p-8 text-white overflow-hidden transform hover:-translate-y-2 transition-all duration-500 shadow-2xl hover:shadow-purple-500/25">
              {/* Background Effects */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-lg"></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-8">
                  {/* Photo */}
                  <div className="relative">
                    <div className="w-28 h-36 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl p-1">
                      <div className="w-full h-full rounded-xl overflow-hidden relative">
                        <Image
                          src="/fernando.webp"
                          alt="Fernando - Co-Founder"
                          fill
                          className="object-cover"
                        />
                        {/* Overlay sutil para manter a legibilidade */}
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
                      </div>
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-white/20 to-transparent rounded-2xl blur opacity-50"></div>
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1">
                    <h4 className="text-3xl font-bold mb-1 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                      Fernando
                    </h4>
                    <div className="space-y-1 text-purple-100 text-sm">
                      <p className="font-semibold text-white">Co-Founder</p>
                      <p>Mestre em Contabilidade e Finanças</p>
                      <p>CRC: MG-115040/O-8</p>
                      <p className="opacity-75">@eumentorocha</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <button className="group/btn bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:gap-3">
                    Ver Perfil
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex gap-3">
                    <button className="w-11 h-11 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                      <Instagram className="w-4 h-4" />
                    </button>
                    <button className="w-11 h-11 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                      <Linkedin className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Gui Card */}
            <div className="group relative bg-white border border-gray-200 rounded-3xl p-8 overflow-hidden transform hover:-translate-y-2 transition-all duration-500 shadow-2xl hover:shadow-gray-300/50">
              {/* Background Effects */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-100 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gray-50 rounded-full blur-lg"></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-8">
                  {/* Photo */}
                  <div className="relative">
                    <div className="w-28 h-36 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-1">
                      <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-inner">
                       <Image
                          src="/gui.webp"
                          alt="Gui - Co-Founder"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-200/50 to-transparent rounded-2xl blur opacity-50"></div>
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1">
                    <h4 className="text-3xl font-bold mb-1 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      Guilherme
                    </h4>
                    <div className="space-y-1 text-gray-600 text-sm">
                      <p className="font-semibold text-gray-800">Co-Founder</p>
                      <p>Auditor Contábil</p>
                      <p>CRC: MG-123927/O-8</p>
                      <p className="opacity-75">@guilherme.thedeu</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <button className="group/btn bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:gap-3">
                    Ver Perfil
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex gap-3">
                    <button className="w-11 h-11 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-white">
                      <Instagram className="w-4 h-4" />
                    </button>
                    <button className="w-11 h-11 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-white">
                      <Linkedin className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      <section className="relative bg-gradient-to-br from-slate-50 via-white to-purple-50 py-20 lg:py-32 overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold text-sm mb-6">
            <Heart className="w-4 h-4" />
            Nossa História
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Tudo começou com{" "}
            <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 bg-clip-text text-transparent">
              dois amigos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Uma amizade que se transformou em propósito: revolucionar a vida financeira dos médicos brasileiros
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Story blocks */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">O Início da Jornada</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Dois jovens amigos que frequentavam festas de medicina em BH, Rio e São Paulo. 
                    A convivência com estudantes e médicos despertou um propósito maior.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">O Propósito</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Retribuir todo carinho recebido guiando jovens médicos através da 
                    desburocratização e assessoria financeira, da formatura à liberdade financeira.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">A Expertise</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sólidos conhecimentos em contabilidade, finanças e seguros, combinados com 
                    a vivência no mundo médico, criaram a receita do sucesso.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">500+</div>
                <div className="text-sm text-gray-600">Médicos Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-1">8</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
            </div>
          </div>

          {/* Team showcase */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-3xl blur-2xl opacity-20 transform rotate-6"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Equipe Multidisciplinar</h3>
                <p className="text-gray-600">Especialistas dedicados exclusivamente aos médicos</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl mx-auto mb-3 flex items-center justify-center">
                    <span className="text-purple-600 font-bold">C</span>
                  </div>
                  <div className="font-semibold text-gray-900">Contadores</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl mx-auto mb-3 flex items-center justify-center">
                    <span className="text-indigo-600 font-bold">I</span>
                  </div>
                  <div className="font-semibold text-gray-900">Investimentos</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl mx-auto mb-3 flex items-center justify-center">
                    <span className="text-purple-600 font-bold">A</span>
                  </div>
                  <div className="font-semibold text-gray-900">Advogados</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl mx-auto mb-3 flex items-center justify-center">
                    <span className="text-indigo-600 font-bold">S</span>
                  </div>
                  <div className="font-semibold text-gray-900">Seguros</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Founders Cards */}
        <section className="relative bg-gradient-to-br from-slate-50 via-white to-purple-50 py-20 lg:py-32 overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>
    </section>
      </div>
    </section>

      {/* Decorative Elements */}
      <div className="fixed top-20 right-20 opacity-10 pointer-events-none">
        <div className="w-32 h-32 border-4 border-purple-300 rounded-full"></div>
      </div>

      <div className="fixed bottom-20 left-20 opacity-10 pointer-events-none">
        <div className="w-24 h-24 bg-yellow-300 rounded-lg transform rotate-45"></div>
      </div>
    </div>
  );
};

export default QuemSomos;
