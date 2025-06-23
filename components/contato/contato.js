import React, { useState } from 'react';
import { MapPin, Clock, Mail, Phone, Link } from 'lucide-react';
import Image from 'next/image';

const KoocherContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: 'Pernambuco (PE)'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Formulário enviado com sucesso! Em breve entraremos em contato.');
  };

  const states = [
    'Acre (AC)', 'Alagoas (AL)', 'Amapá (AP)', 'Amazonas (AM)', 'Bahia (BA)',
    'Ceará (CE)', 'Distrito Federal (DF)', 'Espírito Santo (ES)', 'Goiás (GO)',
    'Maranhão (MA)', 'Mato Grosso (MT)', 'Mato Grosso do Sul (MS)', 'Minas Gerais (MG)',
    'Pará (PA)', 'Paraíba (PB)', 'Paraná (PR)', 'Pernambuco (PE)', 'Piauí (PI)',
    'Rio de Janeiro (RJ)', 'Rio Grande do Norte (RN)', 'Rio Grande do Sul (RS)',
    'Rondônia (RO)', 'Roraima (RR)', 'Santa Catarina (SC)', 'São Paulo (SP)',
    'Sergipe (SE)', 'Tocantins (TO)'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#29003F] to-[#B000FF] w-full py-20 px-6 text-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Texto à esquerda */}
          <div className="max-w-2xl text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Como podemos te ajudar?
            </h1>
            <p className="text-xl md:text-2xl text-[#F9FFAB] font-semibold mb-8 leading-relaxed">
              Somos igual netflix, planos de<br />
              assinatura mensal sem fidelidade
            </p>

            <button className="bg-[#E4FE2A] hover:bg-[#F9FFAB] text-gray-900 font-bold px-8 py-4 rounded-full inline-flex items-center text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <Image
                              src="/icon-purple.webp"
                              alt="logo koocher"
                              width={35}
                              height={35}
                              className="relative z-10 mr-8"
                            />{" "}
              <span>Venha ser KOOCHER!</span>
            </button>
          </div>

          {/* Ilustração à direita */}
          <div className="relative">
            <div className="w-80 h-80 bg-[#E4FE2A] rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center">
                <div className="text-6xl">👨‍⚕️</div>
              </div>
            </div>
            {/* Elementos decorativos */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#E4FE2A] rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#E4FE2A] rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-[#E4FE2A] rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex flex-col xl:flex-row">
              {/* Left side - Contact Form */}
              <div className="xl:w-1/2 p-8 lg:p-12">
                <div className="text-center mb-10">
                  <h2 className="text-4xl font-bold text-[#29003F] mb-4">KOOCHER</h2>
                  <p className="text-xl text-gray-700 font-medium">Entre em contato com a koocher</p>
                  <div className="w-20 h-1 bg-[#29003F] mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Seu nome *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Como você gostaria de ser chamado (a)"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Seu melhor email"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(XX)XXXXX-XXXX"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Você é de *
                      </label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-300"
                      >
                        {states.map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-[#29003F] to-purple-700 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                  >
                    Quero contato
                  </button>
                </div>
              </div>

              {/* Right side - Contact Info and Map */}
              <div className="xl:w-1/2 bg-gradient-to-br from-gray-50 to-gray-100">
                {/* Contact Information */}
                <div className="p-8 lg:p-12 space-y-8">
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="p-3 bg-purple-100 rounded-full">
                      <MapPin className="text-[#29003F]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2 text-lg">Endereço</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Rua Paulo Freire de Araújo,<br />
                        280 - Eaton Belo Horizonte -<br />
                        MG 30540-260
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="p-3 bg-purple-100 rounded-full">
                      <Clock className="text-[#29003F]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2 text-lg">Atendimento</h3>
                      <p className="text-gray-600">Segunda a sexta 9h às 18h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="p-3 bg-purple-100 rounded-full">
                      <Mail className="text-[#29003F]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2 text-lg">Email</h3>
                      <p className="text-gray-600">contato@koocher.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="p-3 bg-purple-100 rounded-full">
                      <Phone className="text-[#29003F]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2 text-lg">Contato</h3>
                      <p className="text-gray-600">31 9695-0085</p>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="h-80 bg-gray-300 relative overflow-hidden rounded-br-3xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100">
                    {/* Simulated map with roads */}
                    <div className="absolute top-8 left-8 w-32 h-1 bg-blue-400 transform rotate-45 opacity-80"></div>
                    <div className="absolute top-16 right-16 w-24 h-1 bg-blue-400 transform -rotate-45 opacity-80"></div>
                    <div className="absolute bottom-12 left-12 w-40 h-1 bg-blue-400 transform rotate-12 opacity-80"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-1 bg-blue-400 opacity-80"></div>
                    
                    {/* Location markers */}
                    <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-red-500 rounded-full shadow-lg"></div>
                    <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-green-500 rounded-full shadow-lg"></div>
                    <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-lg"></div>
                    
                    {/* Main location marker */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-5 h-5 bg-red-600 rounded-full relative shadow-lg">
                        <div className="absolute -top-3 -left-3 w-11 h-11 bg-red-200 rounded-full animate-ping"></div>
                        <div className="absolute -top-2 -left-2 w-9 h-9 bg-red-300 rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    {/* Simulated areas */}
                    <div className="absolute top-6 right-6 text-xs text-gray-700 font-bold bg-white px-2 py-1 rounded shadow">SANTA LÚCIA</div>
                    <div className="absolute bottom-6 left-6 text-xs text-gray-700 font-bold bg-white px-2 py-1 rounded shadow">BELVEDERE</div>
                    <div className="absolute top-1/4 left-1/4 text-xs text-gray-700 font-bold bg-white px-2 py-1 rounded shadow">CENTRO</div>
                    
                    {/* Map controls */}
                    <div className="absolute bottom-6 right-6 bg-white rounded-lg shadow-lg">
                      <button className="px-3 py-2 text-sm border-r border-gray-200 hover:bg-gray-50 transition-colors duration-200 rounded-l-lg font-bold">+</button>
                      <button className="px-3 py-2 text-sm hover:bg-gray-50 transition-colors duration-200 rounded-r-lg font-bold">-</button>
                    </div>
                    
                    {/* Map attribution */}
                    <div className="absolute bottom-2 left-2 text-xs text-gray-500 bg-white bg-opacity-75 px-2 py-1 rounded">
                      Map data ©2024 Terms Report a map error
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KoocherContactForm;