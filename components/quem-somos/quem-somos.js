import React from 'react';

const QuemSomos = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Purple Section */}
        <div className="bg-gradient-to-br from-purple-600 to-pink-500 lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
          <div className="text-white max-w-md">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              A primeira contabilidade médica por assinatura do Brasil 💜
            </h1>
            <p className="text-lg lg:text-xl opacity-90 leading-relaxed">
              Trouxemos a praticidade do streaming para a contabilidade médica. Conheça 
              nossa história e viver seu plano agora mesmo.
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
              <div className="text-2xl font-bold text-gray-800">
                KOOCHER
              </div>
            </div>
          </div>
          
          {/* Person working on laptop */}
          <div className="h-full flex items-center justify-center p-8">
            <div className="bg-gray-300 w-full h-96 rounded-lg flex items-center justify-center">
              <div className="text-gray-600 text-center">
                <div className="w-32 h-32 bg-gray-400 rounded-full mx-auto mb-4"></div>
                <div className="w-48 h-32 bg-gray-400 rounded-lg mx-auto"></div>
                <p className="mt-4 text-sm">Pessoa trabalhando no laptop</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Photo Section */}
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="bg-gray-200 w-full h-96 rounded-2xl flex items-center justify-center">
                  <div className="flex space-x-4">
                    <div className="w-32 h-40 bg-gray-400 rounded-lg"></div>
                    <div className="w-32 h-40 bg-gray-500 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                A KOOCHER
              </h2>
              
              <div className="text-gray-700 text-lg leading-relaxed mb-8 space-y-4">
                <p>
                  A KOOCHER nasceu quando a Gui e Fê (Co-Founders) 
                  eram jovens e frequentavam os maiores eventos de 
                  contabilidade do Brasil (Pratamed, Intermed...) com amigos 
                  médicos. Foi lá que descobriram a necessidade dos 
                  médicos de todo Brasil por uma contabilidade Ágil, Techs e 
                  Sem Chatices. E foi assim que começou, atendendo a 
                  primeira amiga médica e depois de anos se tornando a 
                  maior Contabilidade Médica do Brasil que leva um 
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
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Missão</h4>
                <p className="text-gray-600 leading-relaxed">
                  Guiar jovens médicos do mercado de trabalho 
                  através de uma organização financeira e 
                  contábil contínua.
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
                  Oferecer a oportunidade de uma contabilidade 
                  acessível, dedicada e funcional a todos os 
                  médicos em seu último ano de formação.
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
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Valores</h4>
                <p className="text-gray-600 leading-relaxed">
                  Inovadoras, Disciplina, Prestativas, Inteligente, 
                  Ágil, Tecnológicas, Confiantes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founders Section */}
      <div className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <div className="text-purple-600 font-semibold mb-2 text-lg">
                  Contabilidade Médica
                </div>
                <div className="w-16 h-1 bg-gray-800 mb-8"></div>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Tudo começou com <span className="text-purple-600">dois amigos...</span>
              </h2>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Os dois fundadores quando eram jovens sempre frequentaram 
                  festas promovidas por turmas da medicina em Belo Horizonte, Rio de 
                  Janeiro e São Paulo e decidiram retribuir todo carinho recebido com 
                  um propósito já na vida adulta: guiar a vida do jovem médico 
                  através da desburocratização e assessoria financeira desde a 
                  colação de grau até sua liberdade financeira.
                </p>
                
                <p>
                  Todo o amizade e convivência no mundo da medicina, aliado a 
                  sólidos conhecimentos de contabilidade, finanças e seguros, 
                  trouxeram uma bagagem que se traduz na principal chave de 
                  sucesso da empresa: agilidade, confiança, amizade e especialidade.
                </p>
                
                <p>
                  Hoje a KOOCHER possui uma equipe multidisciplinar para 
                  atendimento exclusivo aos médicos (as) contendo contadores, 
                  agentes de investimentos, advogados, corretores de seguros e 
                  consultores.
                </p>
              </div>
            </div>

            {/* Right Founders Cards */}
            <div className="space-y-6">
              {/* Fê Card */}
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">Fê</h3>
                      <p className="text-purple-200 mb-1">Co-Founder | Mestre em</p>
                      <p className="text-purple-200 mb-1">contabilidade e finanças</p>
                      <p className="text-purple-200 mb-1">Acompanha | CRC: MG-</p>
                      <p className="text-purple-200 mb-1">115040/O-8 |</p>
                      <p className="text-purple-200">@eumentorocha</p>
                    </div>
                    <div className="w-24 h-24 bg-purple-300 rounded-full flex-shrink-0"></div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm transition-colors">
                      VEJA MAIS
                    </button>
                    
                    <div className="flex space-x-2">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center hover:bg-purple-400 transition-colors cursor-pointer">
                        <span className="text-white text-sm">IG</span>
                      </div>
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center hover:bg-purple-400 transition-colors cursor-pointer">
                        <span className="text-white text-sm">LI</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8"></div>
              </div>

              {/* Gui Card */}
              <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-2 text-purple-600">Gui</h3>
                      <p className="text-gray-600 mb-1">Co-Founder | Auditor</p>
                      <p className="text-gray-600 mb-1">Contábil | CRC: MG-</p>
                      <p className="text-gray-600 mb-1">123927/O-8 |</p>
                      <p className="text-gray-600">@guilherme.thedeu</p>
                    </div>
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex-shrink-0"></div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm transition-colors">
                      VEJA MAIS
                    </button>
                    
                    <div className="flex space-x-2">
                      <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                        <span className="text-white text-sm">IG</span>
                      </div>
                      <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                        <span className="text-white text-sm">LI</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full -translate-y-8 translate-x-8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

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