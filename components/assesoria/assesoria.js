import React from 'react';
import Image from 'next/image';

const AssessoriaKocher = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brandKoocher-pastelLime via-white to-brandKoocher-pastelLime/30">
      <div className="w-full max-w-7xl mx-auto px-4 py-12 space-y-16">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-brandKoocher-neonLime to-brandKoocher-vividPurple bg-clip-text text-transparent mb-6">
            Assessoria KOOCHER
          </h1>
          <p className="text-xl text-brandKoocher-deepPurple max-w-3xl mx-auto">
            Soluções completas para transformar sua empresa e seus investimentos
          </p>
        </div>

        {/* Seção de Gestão Bancária */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-brandKoocher-neonLime to-brandKoocher-vividPurple rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brandKoocher-neonLime to-brandKoocher-vividPurple"></div>
            
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 max-w-2xl">
                <div className="inline-flex items-center bg-gradient-to-r from-brandKoocher-vividPurple to-brandKoocher-deepPurple text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
                  <span className="w-2 h-2 bg-brandKoocher-neonLime rounded-full mr-3"></span>
                  GESTÃO BANCÁRIA
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-brandKoocher-deepPurple mb-6 leading-tight">
                  Fazemos a gestão completa da conta bancária da sua 
                  <span className="text-brandKoocher-vividPurple"> PJ</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Controle de contas a pagar",
                    "Análise diária/mensal dos movimentos", 
                    "Conciliação bancária",
                    "Controle de entrada e saída/fluxo de caixa"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center p-4 bg-brandKoocher-pastelLime/30 rounded-xl hover:bg-brandKoocher-pastelLime/50 transition-colors">
                      <div className="w-3 h-3 bg-gradient-to-r from-brandKoocher-vividPurple to-brandKoocher-deepPurple rounded-full mr-4"></div>
                      <span className="text-brandKoocher-deepPurple font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                
                <button className="group bg-gradient-to-r from-brandKoocher-neonLime to-brandKoocher-neonLime/80 hover:from-brandKoocher-neonLime/90 hover:to-brandKoocher-neonLime text-brandKoocher-deepPurple font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <span className="flex items-center">
                    💬 Quero Saber Mais!
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>
              
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-80 h-96 bg-brandKoocher-neonLime rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    <Image 
                      src="/solucoes/assesoria-colaboradora.webp"
                      alt="Assessor de investimentos"
                      width={550}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-brandKoocher-vividPurple to-brandKoocher-deepPurple rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-brandKoocher-neonLime text-2xl">📊</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de Assessoria de Investimentos */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-brandKoocher-neonLime to-brandKoocher-vividPurple rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-gradient-to-br from-brandKoocher-deepPurple via-brandKoocher-vividPurple to-brandKoocher-deepPurple rounded-3xl p-8 md:p-12 shadow-2xl text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-brandKoocher-neonLime/20 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
            
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    <Image 
                      src="/solucoes/careca-koocher.webp"
                      alt="Assessor de investimentos"
                      width={550}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-brandKoocher-neonLime to-brandKoocher-neonLime/80 rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-brandKoocher-deepPurple text-2xl">💰</span>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 max-w-2xl">
                <div className="inline-flex items-center bg-white text-brandKoocher-deepPurple px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
                  <span className="w-2 h-2 bg-brandKoocher-neonLime rounded-full mr-3"></span>
                  ASSESSORIA DE INVESTIMENTOS
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Conte com um assessor de investimento para te ajudar a alcançar seus 
                  <span className="text-brandKoocher-neonLime"> principais objetivos</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Planejamento Financeiro Pessoal",
                    "Consultoria para Empresários",
                    "Análise de perfil de investidor", 
                    "Assessoria completa para seus objetivos"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors">
                      <div className="w-3 h-3 bg-gradient-to-r from-brandKoocher-neonLime to-brandKoocher-neonLime/80 rounded-full mr-4"></div>
                      <span className="text-white font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                
                <button className="group bg-gradient-to-r from-brandKoocher-neonLime to-brandKoocher-neonLime/80 hover:from-brandKoocher-neonLime/90 hover:to-brandKoocher-neonLime text-brandKoocher-deepPurple font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <span className="flex items-center">
                    💬 Converse já conosco
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de Assessoria Jurídica */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-brandKoocher-neonLime to-brandKoocher-pastelLime rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-gradient-to-br from-brandKoocher-pastelLime via-brandKoocher-pastelLime/80 to-brandKoocher-neonLime/30 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-brandKoocher-vividPurple/10 to-transparent rounded-full translate-y-32 -translate-x-32"></div>
            
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 max-w-2xl">
                <div className="inline-flex items-center bg-brandKoocher-vividPurple text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
                  <span className="w-2 h-2 bg-brandKoocher-neonLime rounded-full mr-3"></span>
                  JURÍDICO
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-brandKoocher-deepPurple mb-6 leading-tight">
                  Assessoria 
                  <span className="text-brandKoocher-vividPurple"> Jurídica</span>
                </h2>
                
                <p className="text-brandKoocher-deepPurple mb-6 text-lg leading-relaxed">
                  Atuamos com foco em assessoria de crise/reconstrução empresarial, com experiência e inteligência para ajudar você a chegar exatamente onde planeja.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Consultoria Pessoal Jurídica",
                    "Corporativo",
                    "Imobiliário",
                    "Planejamento, processamento e execução"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center p-4 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-colors">
                      <div className="w-3 h-3 bg-gradient-to-r from-brandKoocher-vividPurple to-brandKoocher-deepPurple rounded-full mr-4"></div>
                      <span className="text-brandKoocher-deepPurple font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                
                <button className="group bg-white hover:bg-brandKoocher-pastelLime/30 text-brandKoocher-vividPurple border-2 border-brandKoocher-vividPurple font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <span className="flex items-center">
                    💬 Quero Saber Mais!
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>
              
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-80 h-96 bg-brandKoocher-pastelLime rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    <Image 
                      src="/solucoes/gui-comemoracao.webp"
                      alt="Advogado especialista"
                      width={550}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-brandKoocher-vividPurple to-brandKoocher-deepPurple rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-brandKoocher-neonLime text-2xl">⚖️</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção sobre Suporte Digital */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-brandKoocher-vividPurple to-brandKoocher-deepPurple rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-gradient-to-br from-brandKoocher-vividPurple via-brandKoocher-deepPurple to-brandKoocher-vividPurple rounded-3xl p-8 md:p-12 shadow-2xl text-white overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-brandKoocher-neonLime/10 to-transparent rounded-full -translate-y-32 -translate-x-32"></div>
            
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    <Image 
                      src="/solucoes/foto-banner-koocher.webp"
                      alt="Equipe de suporte digital"
                      width={550}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-brandKoocher-neonLime to-brandKoocher-neonLime/80 rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-brandKoocher-deepPurple text-2xl">💻</span>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 max-w-2xl">
                <div className="inline-flex items-center bg-white text-brandKoocher-deepPurple px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
                  <span className="w-2 h-2 bg-brandKoocher-neonLime rounded-full mr-3"></span>
                  SUPORTE DIGITAL
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Deixe a burocracia administrativa de lado e conte com nosso 
                  <span className="text-brandKoocher-neonLime"> time de especialistas</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Cadastramento com Soluções",
                    "Cadastramento com Empresas",
                    "Aparelhamento de Chamados",
                    "Suporte em aplicativos, programas"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors">
                      <div className="w-3 h-3 bg-gradient-to-r from-brandKoocher-neonLime to-brandKoocher-neonLime/80 rounded-full mr-4"></div>
                      <span className="text-white font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                
                <button className="group bg-gradient-to-r from-brandKoocher-neonLime to-brandKoocher-neonLime/80 hover:from-brandKoocher-neonLime/90 hover:to-brandKoocher-neonLime text-brandKoocher-deepPurple font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <span className="flex items-center">
                    💬 Solicitar Suporte
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brandKoocher-vividPurple to-brandKoocher-deepPurple rounded-full mb-8">
            <span className="text-brandKoocher-neonLime text-3xl">🚀</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-brandKoocher-deepPurple mb-4">
            Pronto para transformar sua empresa?
          </h3>
          <p className="text-xl text-brandKoocher-softGray mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar você a alcançar seus objetivos
          </p>
          <button className="group bg-gradient-to-r from-brandKoocher-vividPurple to-brandKoocher-deepPurple hover:from-brandKoocher-vividPurple/90 hover:to-brandKoocher-deepPurple/90 text-white font-bold px-12 py-5 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg">
            <span className="flex items-center">
              💬 Fale Conosco Agora
              <svg className="w-6 h-6 ml-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssessoriaKocher;