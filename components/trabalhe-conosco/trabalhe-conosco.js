import React, { useState } from 'react';

const VemSerKoocher = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    curriculo: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      curriculo: e.target.files[0]
    }));
  };

  const handleSubmit = () => {
    console.log('Dados do formulário:', formData);
    // Aqui você adicionaria a lógica de envio
  };

  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-900 to-purple-700 py-16 lg:py-24">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2 text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                #VemSerKOOCHER
              </h1>
              <p className="text-xl lg:text-2xl text-yellow-300 leading-relaxed">
                Estamos sempre em busca de novos 
                <br />
                talentos, envie o seu currículo e 
                <br />
                participe do nosso processo seletivo.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-64 bg-purple-600 rounded-2xl flex items-center justify-center">
                  <div className="flex space-x-4">
                    {/* Person 1 */}
                    <div className="text-center">
                      <div className="w-24 h-32 bg-gray-300 rounded-lg mb-2 flex items-end justify-center pb-2">
                        <span className="text-xs text-gray-600">Koocher</span>
                      </div>
                      <div className="text-white text-lg">👍</div>
                    </div>
                    {/* Person 2 */}
                    <div className="text-center">
                      <div className="w-24 h-32 bg-gray-400 rounded-lg mb-2 flex items-end justify-center pb-2">
                        <span className="text-xs text-gray-600">Koocher</span>
                      </div>
                      <div className="text-white text-lg">👍</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Venha revolucionar a <span className="text-purple-600">contabilidade médica com a gente.</span>
              </h2>
              
              <p className="text-gray-600 text-lg">
                Não encontrou sua vaga? <span className="font-semibold">Cadastre seu currículo aqui!</span>
              </p>
            </div>

            {/* Right Form */}
            <div className="lg:w-1/2">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nome */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Nome <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Nome Completo"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Seu melhor email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Telefone */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Telefone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      placeholder="Whatsapp"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  {/* Currículo */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Currículo em PDF <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
                  >
                    Cadastrar Currículo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 hover:scale-110">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default VemSerKoocher;