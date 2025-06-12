import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ThankYouScreen({ onBack }) {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-6 p-8 bg-white rounded-lg shadow shadow-brandKoocher-deepPurple">
      <h2 className="text-3xl font-bold text-brandKoocher-deepPurple">Obrigado por compartilhar!</h2>
      <p className="text-gray-700 text-center">
        Seu link de indicação foi copiado com sucesso. Agora é só aguardar seu amigo aproveitar a KOOCHER!
      </p>
      <div className="flex gap-4">
        <Button onClick={() => (window.location.href = "/")} className="px-6 py-2">
          Ir para o Início
        </Button>
        <Button variant="outline" onClick={onBack} className="bg-brandKoocher-neonLime hover:bg-brandKoocher-pastelLime text-brandKoocher-deepPurple px-6 py-2 flex items-center gap-2 ">
          <ArrowLeft className="h-4 w-4" /> Voltar
        </Button>
      </div>
    </div>
  )
}
