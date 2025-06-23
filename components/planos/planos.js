import Image from "next/image";

export default function PlanoSection() {
  return (
    <section className="bg-gradient-to-r from-[#8B00FF] to-[#CC00FF] text-white w-full">
      <div className="flex flex-col lg:flex-row items-end justify-between max-w-7xl mx-auto px-6 min-h-[500px]">
        {/* Texto à esquerda */}
        <div className="max-w-2xl text-left lg:pl-8 py-16 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Conheça os planos que<br />
            preparamos para você!
          </h2>
          
          <p className="text-[#E4FF00] text-xl md:text-2xl font-medium mb-8 leading-relaxed">
            Somos igual netflix, planos de<br />
            assinatura mensal sem fidelidade
          </p>
          
          <button className="bg-[#E4FF00] hover:bg-[#d4f000] text-black font-bold px-8 py-4 rounded-full inline-flex items-center text-lg transition-all duration-300 hover:scale-105 shadow-lg w-fit">
            <span className="mr-3 text-xl">🔗</span>
            <span>Venha ser KOOCHER!</span>
          </button>
        </div>

        {/* Imagem à direita */}
        <div className="flex items-end h-full">
          <Image
            src="/planos/koocher-br-pj-medica-em-bh.webp"
            alt="Pessoa Koocher sorrindo com braços cruzados"
            width={500}
            height={500}
            className="object-cover object-bottom max-w-full"
            style={{ height: '550px' }}
            priority
          />
        </div>
      </div>
    </section>
  );
}