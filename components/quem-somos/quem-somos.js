import React from "react";
import Image from "next/image";
import { Instagram, Linkedin, ArrowRight, Heart, Users, Target, Award } from 'lucide-react';

const QuemSomos = () => {
  return (
     <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="flex flex-col xl:flex-row">
        {/* Purple Section */}
        <div 
          className="xl:w-1/2 flex items-center justify-center p-6 sm:p-8 lg:p-12 xl:p-16 sm:min-h-[60vh] xl:h-[20vh]"
          style={{
            background: `linear-gradient(135deg, #B000FF 0%, #29003F 100%)`
          }}
        >
          <div className="text-white max-w-lg w-full">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              A primeira contabilidade médica por assinatura do Brasil 
              <span className="text-4xl sm:text-5xl lg:text-6xl">💜</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl opacity-90 leading-relaxed">
              Trouxemos a praticidade do streaming para a contabilidade médica.
              Conheça nossa história e viva seu plano agora mesmo.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="xl:w-1/2 relative bg-gray-100 sm:min-h-[40vh]">
          <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 z-10">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#E4FE2A' }}
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-800 rounded-full"></div>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-gray-800">KOOCHER</div>
            </div>
          </div>

          {/* Person working on laptop */}
          <div className="h-full w-full relative overflow-hidden min-h-[300px] sm:min-h-[400px] xl:min-h-full">
            
                        <Image
                          src="/quem-somos/computador.webp"
                          alt="computador"
                          fill
                          className="object-cover"
                        />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
          <div className="flex flex-col xl:flex-row items-center gap-8 sm:gap-12 xl:gap-16">
            {/* Photo Section */}
            <div className="w-full xl:w-1/2">
              <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] rounded-2xl overflow-hidden">
                <Image
                          src="/quem-somos/koont-fernando-gui-min.webp"
                          alt="computador"
                          fill
                          className="object-cover"
                        />
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full xl:w-1/2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 sm:mb-8">
                A KOOCHER
              </h2>

              <div className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 space-y-4">
                <p>
                  A KOOCHER nasceu quando o Gui e Fê (Co-Founders) eram jovens e
                  frequentavam os maiores eventos de contabilidade do Brasil
                  (Pratamed, Intermed...) com amigos médicos. Foi lá que
                  descobriram a necessidade dos médicos de todo Brasil por uma
                  contabilidade Ágil, Tech e Sem Chatices. E foi assim que
                  começou, atendendo a primeira amiga médica e depois de anos se
                  tornando a maior Contabilidade Médica do Brasil que leva um
                  conjunto de soluções para a carreira médica.
                </p>
              </div>

              <button 
                className="text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                style={{
                  backgroundColor: '#B000FF'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#29003F'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#B000FF'}
              >
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
      <div className="py-12 sm:py-16 lg:py-20 xl:py-24" style={{ backgroundColor: '#F9FFAB' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div 
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, #B000FF 0%, #29003F 100%)`
                }}
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
                  <div 
                    className="w-3 h-3 sm:w-4 sm:h-4 rounded-full"
                    style={{ backgroundColor: '#B000FF' }}
                  ></div>
                </div>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-2 sm:mb-4">
              A primeira Startup de
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
              contabilidade médica do brasil
            </h3>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Missão Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div 
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6"
                  style={{ backgroundColor: '#F9FFAB' }}
                >
                  <div 
                    className="w-6 h-6 sm:w-8 sm:h-8 border-2 rounded-full flex items-center justify-center"
                    style={{ borderColor: '#B000FF' }}
                  >
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: '#B000FF' }}
                    ></div>
                  </div>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Missão
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Guiar jovens médicos do mercado de trabalho através de uma
                  organização financeira e contábil contínua.
                </p>
              </div>
            </div>

            {/* Visão Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div 
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6"
                  style={{ backgroundColor: '#F9FFAB' }}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                    <div 
                      className="w-4 h-4 sm:w-6 sm:h-6 border-2 rounded-sm"
                      style={{ borderColor: '#B000FF' }}
                    ></div>
                  </div>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Visão</h4>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Oferecer a oportunidade de uma contabilidade acessível,
                  dedicada e funcional a todos os médicos em seu último ano de
                  formação.
                </p>
              </div>
            </div>

            {/* Valores Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 xl:col-span-1">
              <div className="text-center">
                <div 
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6"
                  style={{ backgroundColor: '#F9FFAB' }}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-1">
                      <div 
                        className="w-2 h-2 rounded-sm"
                        style={{ backgroundColor: '#B000FF' }}
                      ></div>
                      <div 
                        className="w-2 h-2 rounded-sm"
                        style={{ backgroundColor: '#B1B1B1' }}
                      ></div>
                      <div 
                        className="w-2 h-2 rounded-sm"
                        style={{ backgroundColor: '#B1B1B1' }}
                      ></div>
                      <div 
                        className="w-2 h-2 rounded-sm"
                        style={{ backgroundColor: '#B000FF' }}
                      ></div>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Valores
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Inovadoras, Disciplina, Prestativas, Inteligente, Ágil,
                  Tecnológicas, Confiantes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founders Section */}
      <div className="bg-white py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Conheça os Fundadores</h3>
            <p className="text-gray-600 text-base sm:text-lg">Os especialistas por trás da KOOCHER</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Fê Card */}
            <div 
              className="group relative rounded-3xl p-6 sm:p-8 text-white overflow-hidden transform hover:-translate-y-2 transition-all duration-500 shadow-2xl"
              style={{
                background: `linear-gradient(135deg, #B000FF 0%, #29003F 100%)`
              }}
            >
              {/* Background Effects */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-lg"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                  {/* Photo */}
                  <div className="relative flex-shrink-0">
                    <div className="w-24 h-32 sm:w-28 sm:h-36 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl p-1">
                      <div className="w-full h-full rounded-xl overflow-hidden relative">
                       <Image
                          src="/fernando.webp"
                          alt="computador"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
                      </div>
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-white/20 to-transparent rounded-2xl blur opacity-50"></div>
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1 text-center sm:text-left">
                    <h4 className="text-2xl sm:text-3xl font-bold mb-1 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                      Fernando
                    </h4>
                    <div className="space-y-1 text-purple-100 text-xs sm:text-sm">
                      <p className="font-semibold text-white">Co-Founder</p>
                      <p>Mestre em Contabilidade e Finanças</p>
                      <p>CRC: MG-115040/O-8</p>
                      <p className="opacity-75">@eufernandorocha</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button className="group/btn bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:gap-3">
                    Ver Perfil
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex gap-3">
                    <button className="w-9 h-9 sm:w-11 sm:h-11 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                      <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                    <button className="w-9 h-9 sm:w-11 sm:h-11 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                      <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Gui Card */}
            <div className="group relative bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 overflow-hidden transform hover:-translate-y-2 transition-all duration-500 shadow-2xl hover:shadow-gray-300/50">
              {/* Background Effects */}
              <div 
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-xl opacity-30"
                style={{ backgroundColor: '#F9FFAB' }}
              ></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gray-50 rounded-full blur-lg"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                  {/* Photo */}
                  <div className="relative flex-shrink-0">
                    <div 
                      className="w-24 h-32 sm:w-28 sm:h-36 rounded-2xl p-1"
                      style={{
                        background: `linear-gradient(135deg, #F9FFAB 0%, #E4FE2A 100%)`
                      }}
                    >
                      <div 
                        className="w-full h-full rounded-xl overflow-hidden relative"
                        style={{
                          background: `linear-gradient(135deg, #B000FF 0%, #29003F 100%)`
                        }}
                      >
                          <Image
                          src="/gui.webp"
                          alt="computador"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                   
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1 text-center sm:text-left">
                    <h4 
                      className="text-2xl sm:text-3xl font-bold mb-1 bg-clip-text text-transparent"
                      style={{
                        background: `linear-gradient(135deg, #B000FF 0%, #29003F 100%)`,
                        WebkitBackgroundClip: 'text'
                      }}
                    >
                      Guilherme
                    </h4>
                    <div className="space-y-1 text-gray-600 text-xs sm:text-sm">
                      <p className="font-semibold text-gray-800">Co-Founder</p>
                      <p>Auditor Contábil</p>
                      <p>CRC: MG-123927/O-8</p>
                      <p className="opacity-75">@guilherme.thedeu</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button 
                    className="group/btn text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:gap-3"
                    style={{
                      background: `linear-gradient(135deg, #B000FF 0%, #29003F 100%)`
                    }}
                  >
                    Ver Perfil
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex gap-3">
                    <button 
                      className="w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-white"
                      style={{ backgroundColor: '#B000FF' }}
                    >
                      <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                    <button 
                      className="w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-white"
                      style={{ backgroundColor: '#B000FF' }}
                    >
                      <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section 
        className="relative py-12 sm:py-16 lg:py-20 xl:py-32 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #F9FFAB 0%, #ffffff 50%, #F9FFAB 100%)`
        }}
      >
        {/* Background decorativo */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
            style={{ backgroundColor: '#E4FE2A' }}
          ></div>
          <div 
            className="absolute bottom-20 right-10 w-56 sm:w-80 h-56 sm:h-80 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
            style={{ backgroundColor: '#B000FF', animationDelay: '1000ms' }}
          ></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div 
              className="inline-flex items-center gap-2 text-white px-3 sm:px-4 py-2 rounded-full font-semibold text-xs sm:text-sm mb-4 sm:mb-6"
              style={{ backgroundColor: '#B000FF' }}
            >
              <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
              Nossa História
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              Tudo começou com{" "}
              <span 
                className="bg-clip-text text-transparent"
                style={{
                  background: `linear-gradient(135deg, #B000FF 0%, #29003F 100%)`,
                  WebkitBackgroundClip: 'text'
                }}
              >
                dois amigos
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Uma amizade que se transformou em propósito: revolucionar a vida financeira dos médicos brasileiros
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 items-center mb-12 sm:mb-20">
            {/* Story Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                {/* Story blocks */}
                <div className="flex gap-3 sm:gap-4">
                  <div 
                    className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, #B000FF 0%, #29003F 100%)`
                    }}
                  >
                    <Users className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">O Início da Jornada</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Dois jovens amigos que frequentavam festas de medicina em BH, Rio e São Paulo. 
                      A convivência com estudantes e médicos despertou um propósito maior.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div 
                    className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, #29003F 0%, #B000FF 100%)`
                    }}
                  >
                    <Target className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">O Propósito</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Retribuir todo carinho recebido guiando jovens médicos através da 
                      desburocratização e assessoria financeira, da formatura à liberdade financeira.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div 
                    className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, #B000FF 0%, #E4FE2A 100%)`
                    }}
                  >
                    <Award className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">A Expertise</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Sólidos conhecimentos em contabilidade, finanças e seguros, combinados com 
                      a vivência no mundo médico, criaram a receita do sucesso.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div 
                    className="text-2xl sm:text-3xl font-bold mb-1"
                    style={{ color: '#B000FF' }}
                  >
                    500+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">Médicos Atendidos</div>
                </div>
                <div className="text-center">
                  <div 
                    className="text-2xl sm:text-3xl font-bold mb-1"
                    style={{ color: '#29003F' }}
                  >
                    3
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Anos de Excelência em contabilidade <span style={{ color: '#B000FF' }}>Médica</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Team showcase */}
            <div className="relative">
              <div 
                className="absolute inset-0 rounded-3xl blur-2xl opacity-20 transform rotate-6"
                style={{
                  background: `linear-gradient(135deg, #B000FF 0%, #29003F 100%)`
                }}
              ></div>
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-2xl">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Equipe Multidisciplinar</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Especialistas dedicados exclusivamente aos médicos</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                  <div 
                    className="p-3 sm:p-4 rounded-2xl"
                    style={{
                      background: `linear-gradient(135deg, #F9FFAB 0%, #E4FE2A 50%)`
                    }}
                  >
                    <div 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl mx-auto mb-2 sm:mb-3 flex items-center justify-center"
                      style={{ backgroundColor: '#F9FFAB' }}
                    >
                      <span 
                        className="font-bold text-sm sm:text-base"
                        style={{ color: '#B000FF' }}
                      >
                        C
                      </span>
                    </div>
                    <div className="font-semibold text-gray-900 text-xs sm:text-sm">Contadores</div>
                  </div>
                  <div 
                    className="p-3 sm:p-4 rounded-2xl"
                    style={{
                      background: `linear-gradient(135deg, #E4FE2A 0%, #F9FFAB 50%)`
                    }}
                  >
                    <div 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl mx-auto mb-2 sm:mb-3 flex items-center justify-center"
                      style={{ backgroundColor: '#E4FE2A' }}
                    >
                      <span 
                        className="font-bold text-sm sm:text-base"
                        style={{ color: '#29003F' }}
                      >
                        I
                      </span>
                    </div>
                    <div className="font-semibold text-gray-900 text-xs sm:text-sm">Investimentos</div>
                  </div>
                  <div 
                    className="p-3 sm:p-4 rounded-2xl"
                    style={{
                      background: `linear-gradient(135deg, #F9FFAB 0%, #E4FE2A 50%)`
                    }}
                  >
                    <div 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl mx-auto mb-2 sm:mb-3 flex items-center justify-center"
                      style={{ backgroundColor: '#F9FFAB' }}
                    >
                      <span 
                        className="font-bold text-sm sm:text-base"
                        style={{ color: '#B000FF' }}
                      >
                        A
                      </span>
                    </div>
                    <div className="font-semibold text-gray-900 text-xs sm:text-sm">Advogados</div>
                  </div>
                  <div 
                    className="p-3 sm:p-4 rounded-2xl"
                    style={{
                      background: `linear-gradient(135deg, #E4FE2A 0%, #F9FFAB 50%)`
                    }}
                  >
                    <div 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl mx-auto mb-2 sm:mb-3 flex items-center justify-center"
                      style={{ backgroundColor: '#E4FE2A' }}
                    >
                      <span 
                        className="font-bold text-sm sm:text-base"
                        style={{ color: '#29003F' }}
                      >
                        S
                      </span>
                    </div>
                    <div className="font-semibold text-gray-900 text-xs sm:text-sm">Seguros</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <div 
        className="py-12 sm:py-16 lg:py-20 xl:py-24"
        style={{
          background: `linear-gradient(135deg, #B000FF 0%, #29003F 100%)`
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
              Pronto para revolucionar sua{" "}
              <span 
                className="bg-clip-text text-transparent"
                style={{
                  background: `linear-gradient(135deg, #E4FE2A 0%, #F9FFAB 100%)`,
                  WebkitBackgroundClip: 'text'
                }}
              >
                vida financeira?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
              Junte-se aos mais de 500 médicos que já transformaram sua relação com a contabilidade.
              Seu futuro financeiro começa aqui.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                className="text-gray-900 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base w-full sm:w-auto"
                style={{ backgroundColor: '#E4FE2A' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#F9FFAB'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#E4FE2A'}
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>🚀</span>
                  <span>Começar Agora</span>
                </span>
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 text-sm sm:text-base w-full sm:w-auto">
                <span className="flex items-center justify-center space-x-2">
                  <span>💬</span>
                  <span>Falar com Especialista</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements - Responsivos */}
      <div className="fixed top-10 sm:top-20 right-10 sm:right-20 opacity-10 pointer-events-none">
        <div 
          className="w-16 h-16 sm:w-32 sm:h-32 border-2 sm:border-4 rounded-full"
          style={{ borderColor: '#B000FF' }}
        ></div>
      </div>

      <div className="fixed bottom-10 sm:bottom-20 left-10 sm:left-20 opacity-10 pointer-events-none">
        <div 
          className="w-12 h-12 sm:w-24 sm:h-24 rounded-lg transform rotate-45"
          style={{ backgroundColor: '#E4FE2A' }}
        ></div>
      </div>
    </div>
  );
};

export default QuemSomos;
