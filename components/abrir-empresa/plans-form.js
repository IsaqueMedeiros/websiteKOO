"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { Switch } from "@/components/ui/switch"

export default function PlansForm({ onNext, onBack, updateFormData, formData }) {
  const [isAnnual, setIsAnnual] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(formData.plan || "premium")

  const plans = {
    basic: {
      name: "Basic",
      monthlyPrice: 297,
      originalPrice: 369,
      features: [
        "Abertura da PJ grátis",
        "Emissão de Notas Fiscais pela Equipe KOOCHER",
        "Apuração e envio dos impostos",
        "Declaração Imposto de Renda da Pessoa Jurídica",
        "Planejamento Financeiro pessoal",
        "Assessoria Jurídica",
      ],
    },
    premium: {
      name: "Premium",
      monthlyPrice: 397,
      originalPrice: 569,
      features: [
        "Tudo do Basic, mais:",
        "Declaração Imposto de Renda da Pessoa Física",
        "Cadastros e Credenciamentos nos locais de trabalho e CRM",
        "Emissão de RPA",
        "Gerente exclusivo",
      ],
    },
    exclusive: {
      name: "Exclusive",
      monthlyPrice: 472,
      originalPrice: 769,
      features: [
        "Tudo do Premium, mais:",
        "Certificado Digital Anual Gratuito",
        "Endereço Fiscal Mensal",
        "Agendamento de pagamento de contas",
      ],
    },
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateFormData({ plan: selectedPlan, isAnnual })
    onNext()
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-1/4 duration-500 max-w-6xl">
      <div className="text-center">
        <h1 className="text-2xl text-brandKoocher-deepPurple font-bold mb-2">Escolha seu plano</h1>
        <p className="text-gray-600">Escolha abaixo um plano que atende às necessidades da sua empresa.</p>
      </div>

      <div className="flex items-center justify-center gap-2 mb-8">
        <span className={!isAnnual ? "font-semibold" : ""}>Assinatura Mensal</span>
        <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
        <span className={isAnnual ? "font-semibold" : ""}>Assinatura Anual</span>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {Object.entries(plans).map(([key, plan]) => (
            <Card
              key={key}
              className={`p-6 cursor-pointer transition-all ${selectedPlan === key ? "border-primary ring-2 ring-primary" : ""
                }`}
              onClick={() => setSelectedPlan(key)}
            >
              <div className="space-y-4">
                <div className="bg-brandKoocher-neonLime w-fit px-3 py-1 rounded-full">
                  <span className="font-semibold text-brandKoocher-deepPurple">{plan.name}</span>
                </div>

                <div className="space-y-1">
                  <div className="text-sm text-gray-500">a partir de</div>
                  <div className="text-gray-500">
                    R$ <span className="line-through">{plan.originalPrice}</span> por
                  </div>
                  <div className="text-4xl font-bold">
                    R$ {plan.monthlyPrice}
                    <span className="text-base font-normal">/mês</span>
                  </div>
                </div>

                <Button
                  type="button"
                  variant={selectedPlan === key ? "default" : "outline" }
                  className="w-full"
                  onClick={() => setSelectedPlan(key)}
                >
                  Contratar
                </Button>

                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div className="col-span-2 flex justify-between mt-8">
          <Button
            type="button"
            onClick={onBack}
            className="bg-brandKoocher-neonLime hover:bg-brandKoocher-pastelLime text-brandKoocher-deepPurple rounded-full h-12 px-6 flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
          <Button
            type="submit"
            className="bg-brandKoocher-vividPurple hover:bg-brandKoocher-deepPurple text-brandKoocher-neonLime rounded-full h-12 px-6 flex items-center gap-2"
          >
            <ArrowRight className="h-4 w-4" />
            Avançar
          </Button>
        </div>
      </form>
    </div>
  )
}

