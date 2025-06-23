import React from 'react';
import Image from 'next/image';

const AssessoriaKocher = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-6">
      {/* Seção de Gestão Bancária */}
      <div className="bg-white rounded-2xl p-8 shadow-lg flex items-center justify-between">
        <div className="flex-1 max-w-md">
          <div className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold mb-4 inline-block">
            GESTÃO BANCÁRIA
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Fazemos a gestão completa da conta bancária da sua PJ.
          </h2>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              Controle de contas a pagar
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              Análise diária/mensal dos movimentos
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              Conciliação bancária
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              Controle de entrada e saída/fluxo de caixa
            </li>
          </ul>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition-colors">
            💬 Quero Saber Mais!
          </button>
        </div>
        <div className="flex-shrink-0 ml-8">
          <div className="w-64 h-64 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center relative overflow-hidden">
            {/* Placeholder para imagem da pessoa */}
            <div className="w-48 h-48 bg-gray-300 rounded-xl flex items-center justify-center">
              <span className="text-gray-600">Foto Profissional</span>
            </div>
            {/* Padrão decorativo */}
            <div className="absolute top-4 right-4 grid grid-cols-4 gap-1">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-white/20 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Assessoria de Investimentos */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 shadow-lg flex items-center justify-between text-white">
        <div className="flex-shrink-0 mr-8">
          <div className="w-64 h-64 bg-black/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
            {/* Placeholder para imagem da pessoa */}
            <div className="w-48 h-48 bg-gray-700 rounded-xl flex items-center justify-center">
              <span className="text-gray-300">Foto Profissional</span>
            </div>
            {/* Logo Kocher */}
            <div className="absolute bottom-4 left-4 bg-white rounded-lg px-3 py-1">
              <span className="text-purple-600 font-bold text-lg">KOCHER</span>
            </div>
          </div>
        </div>
        <div className="flex-1 max-w-md">
          <div className="bg-white text-purple-600 px-4 py-2 rounded-lg text-sm font-semibold mb-4 inline-block">
            ASSESSORIA DE INVESTIMENTOS
          </div>
          <h2 className="text-2xl font-bold mb-4">
            Conte com um assessor de investimento para te ajudar a alcançar seus principais objetivos
          </h2>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              Planejamento Financeiro Pessoal
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              Consultoria para Empresários
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              Análise de perfil de investidor
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              Assessoria completa para seus objetivos
            </li>
          </ul>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition-colors">
            💬 Converse já conosco
          </button>
        </div>
      </div>

      {/* Seção de Assessoria Jurídica */}
      <div className="bg-gradient-to-br from-yellow-400 to-lime-400 rounded-2xl p-8 shadow-lg flex items-center justify-between">
        <div className="flex-1 max-w-md">
          <div className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold mb-4 inline-block">
            JURÍDICO
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Assessoria Jurídica
          </h2>
          <p className="text-gray-800 mb-4">
            Atuamos com foco em assessoria de crise/reconstrução empresarial, com experiência e inteligência para ajudar você a chegar exatamente onde planeja, e com foco no desenvolvimento da sua empresa.
          </p>
          <ul className="space-y-2 text-gray-800 mb-6">
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              Consultoria Pessoal Jurídica
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              Corporativo
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              Imobiliário
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              Planejamento, processamento e execução
            </li>
          </ul>
          <button className="bg-white hover:bg-gray-100 text-purple-600 font-semibold px-6 py-3 rounded-full transition-colors border border-purple-600">
            💬 Quero Saber Mais!
          </button>
        </div>
        <div className="flex-shrink-0 ml-8">
          <div className="w-64 h-64 bg-white/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
            {/* Placeholder para imagem da pessoa */}
            <div className="w-48 h-48 bg-gray-300 rounded-xl flex items-center justify-center">
              <span className="text-gray-600">Foto Advogado</span>
            </div>
            {/* Ícone decorativo jurídico */}
            <div className="absolute bottom-4 right-4 bg-purple-600 rounded-lg p-3">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold">⚖</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção sobre Burocracia Administrativa */}
      <div className="bg-gradient-to-r from-purple-800 to-purple-900 rounded-2xl p-8 shadow-lg flex items-center justify-between text-white">
        <div className="flex-shrink-0 mr-8">
          <div className="w-64 h-64 bg-black/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
            {/* Placeholder para imagem da equipe */}
            <div className="w-48 h-48 bg-gray-700 rounded-xl flex items-center justify-center">
              <span className="text-gray-300">Foto da Equipe</span>
            </div>
            {/* Apps/Dispositivos decorativos */}
            <div className="absolute bottom-4 left-4 space-y-2">
              <div className="bg-yellow-400 rounded-lg p-2 w-12 h-8 flex items-center justify-center">
                <span className="text-black font-bold text-xs">APP</span>
              </div>
              <div className="bg-green-500 rounded-lg p-2 w-12 h-8 flex items-center justify-center">
                <span className="text-white font-bold text-xs">WEB</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 max-w-md">
          <div className="bg-white text-purple-800 px-4 py-2 rounded-lg text-sm font-semibold mb-4 inline-block">
            SUPORTE DIGITAL
          </div>
          <h2 className="text-2xl font-bold mb-4">
            Deixe a burocracia administrativa de lado e conte com nosso time de especialistas
          </h2>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              Cadastramento com Soluções
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              Cadastramento com Empresas
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              Aparelhamento de Chamados
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              Suporte em aplicativos, programas
            </li>
          </ul>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition-colors">
            💬 Solicitar Suporte
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssessoriaKocher;