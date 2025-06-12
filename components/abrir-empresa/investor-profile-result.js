"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

function calculateInvestorProfile(answers) {
  const scoringMap = {
    1: { "Preservar meu patrimônio": 1, "Receber renda regularmente": 3, "Aumentar significativamente meu patrimônio no longo prazo": 5 },
    2: { "Até 1 ano": 1, "Entre 1 e 3 anos": 3, "Acima de 3 anos": 5 },
    3: { "Venderia tudo para evitar perdas maiores": 1, "Manteria meus investimentos esperando recuperação": 3, "Aproveitaria para comprar mais ativos com desconto": 5 },
    4: { "Até 10%": 1, "Entre 10% e 30%": 3, "Acima de 30%": 5 },
    5: { "Nenhuma": 1, "Moderada (alguns investimentos em fundos ou ações)": 3, "Avançada (uso derivativos, fundos multimercado, etc.)": 5 },
    6: { "Resgataria para garantir o lucro": 1, "Manteria investido esperando mais valorização": 3, "Reinvestiria o ganho em ativos mais arriscados": 5 },
    7: { "Até 5%": 1, "Entre 5% e 15%": 3, "Acima de 15%": 5 },
    8: { "Nada confortável": 1, "Moderadamente confortável": 3, "Totalmente confortável": 5 }
  }

  let score = 0
  for (const [id, answer] of Object.entries(answers)) {
    const value = scoringMap[id]?.[answer] || 0
    score += value
  }

  let profile = ""
  if (score <= 18) profile = "Conservador"
  else if (score <= 29) profile = "Moderado"
  else profile = "Arrojado"

  return { score, profile }
}

const profileDetails = {
  Conservador: {
    title: "Perfil Conservador",
    description: "Você prioriza a segurança e estabilidade nos seus investimentos. Evita riscos e prefere rentabilidades previsíveis.",
    reasons: [
      "Você prefere preservar patrimônio em vez de buscar altos retornos.",
      "Prefere horizontes de curto prazo e liquidez.",
      "Tem pouca experiência ou se sente desconfortável com riscos."
    ]
  },
  Moderado: {
    title: "Perfil Moderado",
    description: "Você aceita um pouco mais de risco para obter melhores retornos, equilibrando segurança e crescimento.",
    reasons: [
      "Você aceita perdas moderadas para ter ganhos melhores.",
      "Possui alguma experiência com investimentos.",
      "Aceita oscilações controladas no curto e médio prazo."
    ]
  },
  Arrojado: {
    title: "Perfil Arrojado",
    description: "Você tem alta tolerância a risco e busca crescimento agressivo no longo prazo.",
    reasons: [
      "Você se sente confortável com oscilações e quedas temporárias.",
      "Está disposto a investir maior parte em renda variável.",
      "Tem boa experiência com produtos de maior risco."
    ]
  }
}

export default function InvestorProfileResult({ formData, onRestart, onNext, updateFormData }) {
  const { quizAnswers } = formData
  const { score, profile } = calculateInvestorProfile(quizAnswers)
  const { title, description, reasons } = profileDetails[profile]

  useEffect(() => {
    if (updateFormData && profile) {
      updateFormData({ investorProfile: profile })
    }
  }, [profile])

  return (
    <div className="max-w-3xl mx-auto space-y-10 text-center">
      <h1 className="text-4xl font-bold text-brandKoocher-vividPurple">{title}</h1>
      <p className="text-lg text-primary">{description}</p>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md text-left space-y-4">
        <h2 className="text-xl font-semibold">Por que você recebeu esse perfil?</h2>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {reasons.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      </div>

      <p className="text-sm text-gray-500">Pontuação total: <strong>{score} / 40</strong></p>

      <div className="flex justify-center gap-4 mt-6">
        <Button
          onClick={onRestart}
          className="bg-gray-300 text-black hover:bg-gray-400 rounded-full h-12 px-6"
        >
          Refazer Teste
        </Button>

        <Button
          onClick={onNext}
          className="bg-brandKoocher-vividPurple hover:bg-brandKoocher-deepPurple text-brandKoocher-neonLime rounded-full h-12 px-6"
        >
          Ver meu Dashboard
        </Button>
      </div>
    </div>
  )
}
