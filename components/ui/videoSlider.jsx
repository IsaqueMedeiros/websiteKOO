import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const VideoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);

  const videos = [
    {
      id: 'gabriel',
      name: 'DR. GABRIEL',
      specialty: 'Especialista',
      youtubeId: 'YOQCWygIzjw',
      avatar: 'DG',
      bgColor: 'from-purple-300 to-purple-500',
      avatarColor: 'bg-purple-500'
    },
    {
      id: 'alberto',
      name: 'DR. ALBERTO DUMONT',
      specialty: 'Especialista',
      youtubeId: 'Zb7CMOoOz7Y',
      avatar: 'AD',
      bgColor: 'from-blue-300 to-blue-500',
      avatarColor: 'bg-blue-500'
    },
    {
      id: 'thomaz',
      name: 'DR. THOMAZ',
      specialty: 'Especialista',
      youtubeId: '9rsFFdc0CxU',
      avatar: 'DT',
      bgColor: 'from-green-300 to-green-500',
      avatarColor: 'bg-green-500'
    },
    {
      id: 'ufmg',
      name: 'UFMG',
      specialty: 'Depoimento institucional',
      youtubeId: 'y9tPtYpt0K0',
      avatar: 'UF',
      bgColor: 'from-orange-300 to-orange-500',
      avatarColor: 'bg-orange-500'
    },
    {
      id: 'gustavo',
      name: 'DR. GUSTAVO SIDRIM',
      specialty: 'Especialista',
      youtubeId: 'h7v3UndC2sQ',
      avatar: 'GS',
      bgColor: 'from-teal-300 to-teal-500',
      avatarColor: 'bg-teal-500'
    },
    {
      id: 'raphaela',
      name: 'DRA. RAPHAELA PAES',
      specialty: 'Doutora reumatologista',
      youtubeId: 'gVC6JGJa280',
      avatar: 'RP',
      bgColor: 'from-pink-300 to-pink-500',
      avatarColor: 'bg-pink-500'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length);
    setPlayingVideo(null);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
    setPlayingVideo(null);
  };

  const playVideo = (videoId) => {
    setPlayingVideo(videoId);
  };

  const closeVideo = () => {
    setPlayingVideo(null);
  };

  const currentVideo = videos[currentSlide];

  return (
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

          {/* Slider de Cards à Direita */}
          <div className="relative">
            {/* Card Principal */}
            <div className="bg-yellow-400 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
              {/* Logo KOOCHER */}
              <div className="mb-6">
                <h3 className="text-4xl font-bold text-purple-600">
                  K<span className="text-pink-500">❤</span>O<br />
                  CHER
                </h3>
              </div>

              {/* Info do Médico */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <div className="absolute -top-2 -left-2 w-16 h-16 border-4 border-white rounded-full"></div>
                  <div className={`w-12 h-12 ${currentVideo.avatarColor} rounded-full flex items-center justify-center relative z-10`}>
                    <span className="text-white font-bold text-md">{currentVideo.avatar}</span>
                  </div>
                </div>

                <div className="flex-1">
                  <h4 className="font-bold text-purple-600 text-lg">
                    {currentVideo.name}
                  </h4>
                  <p className="text-purple-500 text-md">
                    {currentVideo.specialty}
                  </p>
                </div>

                <div className="text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Área do Vídeo */}
              <div className="relative">
                {playingVideo === currentVideo.id ? (
                  // Player do YouTube
                  <div className="relative w-full h-64 rounded-2xl overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${currentVideo.youtubeId}?autoplay=1&rel=0`}
                      title={`Depoimento ${currentVideo.name}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-2xl"
                    ></iframe>
                    <button
                      onClick={closeVideo}
                      className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  // Thumbnail do vídeo
                  <div 
                    className={`w-full h-64 bg-gradient-to-b ${currentVideo.bgColor} rounded-2xl overflow-hidden cursor-pointer relative group`}
                    onClick={() => playVideo(currentVideo.id)}
                  >
                    {/* Thumbnail do YouTube */}
                    <img
                      src={`https://img.youtube.com/vi/${currentVideo.youtubeId}/maxresdefault.jpg`}
                      alt={`Thumbnail ${currentVideo.name}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    
                    {/* Fallback caso a thumbnail não carregue */}
                    <div className="w-full h-full flex items-center justify-center p-6" style={{display: 'none'}}>
                      <div className="w-32 h-40 bg-black bg-opacity-20 rounded-lg flex items-center justify-center">
                        <Play className="w-12 h-12 text-white opacity-70" />
                      </div>
                    </div>

                    {/* Overlay com botão play */}
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white bg-opacity-90 rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-purple-600" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Círculo decorativo */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-50 rounded-full"></div>
              </div>
            </div>

            {/* Controles de Navegação */}
            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={prevSlide}
                className="bg-white hover:bg-gray-100 text-purple-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex space-x-2 items-center">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index);
                      setPlayingVideo(null);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-purple-600 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="bg-white hover:bg-gray-100 text-purple-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Elementos decorativos flutuantes */}
            <div className="absolute -top-4 -right-4 w-6 h-6 bg-pink-400 rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute -bottom-8 -left-4 w-4 h-4 bg-purple-400 rounded-full opacity-70 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSlider;