// components/ui/BenefitsCarousel.jsx
"use client";
import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  Wallet,
  Repeat,
  User,
  HelpCircle,
  Bot,
} from "lucide-react";

const benefits = [
  {
    icon: <HelpCircle className="w-5 h-5 text-fuchsia-600" aria-hidden="true" />,
    title: "Suporte",
    description: "Soluções financeiras, antecipação de plantões e clube de benefícios",
  },
  {
    icon: <Bot className="w-5 h-5 text-fuchsia-600" aria-hidden="true" />,
    title: "Sem chatisses",
    description: "Não utilizamos robôs e resolvemos todas as burocracias",
  },
  {
    icon: <Wallet className="w-5 h-5 text-fuchsia-600" aria-hidden="true" />,
    title: "Melhor custo benefício",
    description: "Planos a partir de R$ 297 e residentes não pagam",
  },
  {
    icon: <Repeat className="w-5 h-5 text-fuchsia-600" aria-hidden="true" />,
    title: "Liberdade",
    description: "Não cobramos décimo terceiro e não temos fidelidade",
  },
  {
    icon: <User className="w-5 h-5 text-fuchsia-600" aria-hidden="true" />,
    title: "Atendimento",
    description: "Atendemos médicos de todo Brasil",
  },
];

const BenefitCard = memo(({ icon, title, description }) => (
  <article className="bg-white rounded-[16px] px-5 py-5 flex flex-col items-start gap-2 shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-[1.02] min-h-[125px] max-w-[340px] w-full mx-auto">
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center w-9 h-9 bg-fuchsia-100 rounded-full">
        {icon}
      </div>
      <h3 className="text-[0.88rem] font-semibold text-gray-900">{title}:</h3>
    </div>
    <p className="text-[0.82rem] text-gray-600 leading-relaxed pl-12">{description}</p>
  </article>
));

function BenefitsCarousel() {
  return (
    <section
      role="region"
      aria-label="Benefícios"
      className="bg-[#23003d] py-14"
    >
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={1.1}
          loop
          centeredSlides={false}
          pagination={{ clickable: true }}
          a11y={{
            prevSlideMessage: "Slide anterior",
            nextSlideMessage: "Próximo slide",
          }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-10"
        >
          {benefits.map((b, idx) => (
            <SwiperSlide key={idx} tag="li">
              <BenefitCard
                icon={b.icon}
                title={b.title}
                description={b.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default memo(BenefitsCarousel);
