// components/ui/IdealSolutionCarousel.jsx
"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const idealPhases = [
  { title: "Residente", image: "/webp-carousel/carousel-slide-1.webp" },
  { title: "Especialista", image: "/webp-carousel/carousel-slide-2.webp" },
  { title: "Recém-Formado", image: "/webp-carousel/carousel-slide-3.webp" },
  { title: "Plantonista", image: "/webp-carousel/carousel-slide-4.webp" },
];

export default function IdealSolutionCarousel() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .swiper-pagination {
        bottom: 0 !important;
      }
      .swiper-pagination-bullet {
        background: #d1d5db;
        width: 8px;
        height: 8px;
        margin: 0 6px !important;
        opacity: 1;
        transition: background 0.3s;
      }
      .swiper-pagination-bullet-active {
        background: #a21caf;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section className="bg-[#f4f0ff] py-20 px-4 overflow-visible relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-[#1c0039]">
          Escolha a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-500">
            solução ideal
          </span>{" "}
          para a sua fase:
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            loop={true}
            spaceBetween={20}
            slidesPerView={1.2}
            pagination={{ clickable: true, el: ".swiper-pagination" }}
            navigation={{ prevEl: ".btn-prev", nextEl: ".btn-next" }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3.2 },
            }}
          >
            {idealPhases.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-[240px] object-cover"
                  />
                  <div className="flex flex-col justify-between flex-1 p-5">
                    <h3 className="text-lg font-semibold text-[#1c0039] mb-4">
                      {item.title}
                    </h3>
                    <a
                      href="#"
                      className="text-sm text-fuchsia-600 font-medium hover:underline mt-auto"
                    >
                      Conferir
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom nav buttons */}
          <div className="btn-prev absolute left-2 top-1/2 -translate-y-1/2 transform bg-white p-2 rounded-full shadow-lg cursor-pointer z-20 overflow-visible">
            <ChevronLeft size={20} className="text-[#a21caf]" />
          </div>
          <div className="btn-next absolute right-2 top-1/2 -translate-y-1/2 transform bg-white p-2 rounded-full shadow-lg cursor-pointer z-20 overflow-visible">
            <ChevronRight size={20} className="text-[#a21caf]" />
          </div>
        </div>

        {/* Pagination container */}
        <div className="swiper-pagination !static mt-8 flex justify-center"></div>
      </div>
    </section>
  );
}
