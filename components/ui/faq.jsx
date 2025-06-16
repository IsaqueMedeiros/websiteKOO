import React, { useState } from 'react';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "Quais são as formas que um médico pode receber os seus plantões?"
    },
    {
      id: 2,
      question: "Ainda não formei, devo abrir minha PJ Médica?"
    },
    {
      id: 3,
      question: "Quais são os 4 documentos para abrir uma PJ?"
    },
    {
      id: 4,
      question: "Quanto custa para abrir minha PJ Médica?"
    },
    {
      id: 5,
      question: "Qual a diferença de abrir minha PJ em capital ao invés de interior?"
    },
    {
      id: 6,
      question: "Quanto tempo demora pra abrir minha PJ?"
    }
  ];

  const toggleQuestion = (questionId) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <section className="py-20 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            Ainda está com dúvida sobre como podemos te ajudar?
          </p>
          <p className="text-lg text-gray-600 mb-8">
            A gente te explica!
          </p>
          
          {/* Botão Ver todas as Perguntas */}
          <button className="bg-purple-800 hover:bg-purple-900 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            Ver todas as Perguntas
          </button>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Coluna Esquerda */}
          <div className="space-y-4">
            {faqData.slice(0, 3).map((faq) => (
              <div 
                key={faq.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(faq.id)}
                  className="w-full p-6 text-left focus:outline-none"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800 pr-4 group-hover:text-purple-600 transition-colors">
                      {faq.question}
                    </h3>
                    <div className={`rounded-full p-2 flex-shrink-0 transition-all duration-300 ${
                      openQuestion === faq.id 
                        ? 'bg-purple-700 rotate-45' 
                        : 'bg-purple-600 group-hover:bg-purple-700'
                    }`}>
                      <svg className="w-5 h-5 text-white transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </button>
                
                {/* Resposta expandível */}
                <div className={`transition-all duration-300 ease-in-out ${
                  openQuestion === faq.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-6 pb-6">
                    <div className="border-t pt-4">
                      <p className="text-gray-600">
                        Esta é uma resposta de exemplo para a pergunta "{faq.question}". 
                        Aqui você pode adicionar o conteúdo específico para cada pergunta.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coluna Direita */}
          <div className="space-y-4">
            {faqData.slice(3, 6).map((faq) => (
              <div 
                key={faq.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(faq.id)}
                  className="w-full p-6 text-left focus:outline-none"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800 pr-4 group-hover:text-purple-600 transition-colors">
                      {faq.question}
                    </h3>
                    <div className={`rounded-full p-2 flex-shrink-0 transition-all duration-300 ${
                      openQuestion === faq.id 
                        ? 'bg-purple-700 rotate-45' 
                        : 'bg-purple-600 group-hover:bg-purple-700'
                    }`}>
                      <svg className="w-5 h-5 text-white transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </button>
                
                {/* Resposta expandível */}
                <div className={`transition-all duration-300 ease-in-out ${
                  openQuestion === faq.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-6 pb-6">
                    <div className="border-t pt-4">
                      <p className="text-gray-600">
                        Esta é uma resposta de exemplo para a pergunta "{faq.question}". 
                        Aqui você pode adicionar o conteúdo específico para cada pergunta.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="relative">
          <div className="absolute -top-20 right-10 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute -bottom-10 left-10 w-4 h-4 bg-pink-400 rounded-full opacity-30 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;