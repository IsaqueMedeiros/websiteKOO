import Image from "next/image";

export default function PlanoSection() {
  return (
    <section className="bg-[#CC00FF] py-16 px-6 text-white flex flex-col lg:flex-row items-center justify-around">
      {/* Texto à esquerda */}
      <div className="max-w-xl text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Como podemos te ajudar?
        </h2>
        <p className="mt-4 text-[#E4FF00] text-lg font-medium">
          Somos igual netflix, planos de<br />
          assinatura mensal sem fidelidade
        </p>

        <button className="mt-6 bg-[#E4FF00] hover:bg-[#d4f000] text-sm font-semibold px-6 py-2 rounded-full inline-flex items-center text-[#0A0A23]">
          <span className="mr-2">🔗</span>
          <span>Venha ser KOOCHER!</span>
        </button>
      </div>

      {/* Imagem à direita */}
      <div className="mt-10 lg:mt-0">
        <Image
          src="/bannerfernandoGui.webp"
          alt="Pessoa Koocher"
          width={400}
          height={400}
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
}
