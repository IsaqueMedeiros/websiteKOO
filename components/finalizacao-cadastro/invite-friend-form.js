"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import { Link } from "lucide-react"

export default function InviteFriendForm({ onBack, onNext }) {
   const [linkCopied, setLinkCopied] = useState(false)

   const handleShare = () => {
     navigator.clipboard
       .writeText("https://koocher.com/invite/friend")
       .then(() => {
         setLinkCopied(true)
        setTimeout(() => {
          setLinkCopied(false)
          onNext()
        }, 1500)
       })
       .catch((err) => {
         console.error("Failed to copy text: ", err)
       })
   }

  return (
    <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-brandKoocher-deepPurple">Convide um(a) Amigo(a)</h2>
          <p className="text-gray-600">
            Está gostando da KOOCHER? Convide um(a) amigo(a) para aproveitar os benefícios da primeira e maior
            contabilidade médica do Brasil!
          </p>

          <div className="bg-brandKoocher-neonLime text-brandKoocher-deepPurple p-4 rounded-lg">
            <h3 className="font-semibold text-primary">Você indica e ganha!</h3>
            <p className="text-md text-gray-700 mt-1">
              Receba uma isenção de mensalidade a cada amigo(a) indicado(a) que nos contratar.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-md text-gray-600">
              Você pode optar por compartilhar o seu link de indicação. Basta clicar no botão abaixo:
            </p>
            <Button
              type="button"
              onClick={handleShare}
              className="w-fit bg-white hover:bg-gray-100 text-black border border-gray-300 px-6 flex items-center justify-center gap-2"
            >
              <Link className="h-4 w-4 text-primary" />
              {linkCopied ? "Link copiado!" : "Copiar link de preenchimento"}
            </Button>
          </div>

          <Button
            type="button"
            onClick={onBack}
            className="bg-brandKoocher-neonLime hover:bg-brandKoocher-pastelLime text-brandKoocher-deepPurple rounded-full h-12 px-6 flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
        </div>
      </div>

      <div className="w-fit mx-auto">
        <Image src="/fernandoeguilherme.svg" alt="Fernando e Guilherme" className="w-[400px]" width={600} height={600} />
      </div>
    </div>
  )
}

