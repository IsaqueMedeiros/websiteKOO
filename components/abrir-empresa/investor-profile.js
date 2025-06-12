"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { ArrowRight } from "lucide-react"

const questions = [
  {
    id: 1,
    text: "Qual seu objetivo principal com esses investimentos?",
    options: [
      "Preservar meu patrimônio",
      "Receber renda regularmente",
      "Aumentar significativamente meu patrimônio no longo prazo"
    ]
  },
  {
    id: 2,
    text: "Qual é o seu horizonte de investimento?",
    options: [
      "Até 1 ano",
      "Entre 1 e 3 anos",
      "Acima de 3 anos"
    ]
  },
  {
    id: 3,
    text: "Em um cenário de forte queda de mercado (-20% em um mês), como você reagiria?",
    options: [
      "Venderia tudo para evitar perdas maiores",
      "Manteria meus investimentos esperando recuperação",
      "Aproveitaria para comprar mais ativos com desconto"
    ]
  },
  {
    id: 4,
    text: "Qual parte do seu patrimônio total você pretende alocar em renda variável?",
    options: [
      "Até 10%",
      "Entre 10% e 30%",
      "Acima de 30%"
    ]
  },
  {
    id: 5,
    text: "Qual sua experiência com produtos financeiros?",
    options: [
      "Nenhuma",
      "Moderada (alguns investimentos em fundos ou ações)",
      "Avançada (uso derivativos, fundos multimercado, etc.)"
    ]
  },
  {
    id: 6,
    text: "Se você tivesse um ganho expressivo de 30% em um mês, o que faria?",
    options: [
      "Resgataria para garantir o lucro",
      "Manteria investido esperando mais valorização",
      "Reinvestiria o ganho em ativos mais arriscados"
    ]
  },
  {
    id: 7,
    text: "Considerando sua renda líquida mensal, qual valor está disposto a investir regularmente?",
    options: [
      "Até 5%",
      "Entre 5% e 15%",
      "Acima de 15%"
    ]
  },
  {
    id: 8,
    text: "Quão confortável você está com oscilações diárias de 5–10% no valor da sua carteira?",
    options: [
      "Nada confortável",
      "Moderadamente confortável",
      "Totalmente confortável"
    ]
  }
]

// 🧠 Função para calcular o perfil
function calculateInvestorProfile(answers) {
  const scoringMap = {
    1: {
      "Preservar meu patrimônio": 1,
      "Receber renda regularmente": 3,
      "Aumentar significativamente meu patrimônio no longo prazo": 5
    },
    2: {
      "Até 1 ano": 1,
      "Entre 1 e 3 anos": 3,
      "Acima de 3 anos": 5
    },
    3: {
      "Venderia tudo para evitar perdas maiores": 1,
      "Manteria meus investimentos esperando recuperação": 3,
      "Aproveitaria para comprar mais ativos com desconto": 5
    },
    4: {
      "Até 10%": 1,
      "Entre 10% e 30%": 3,
      "Acima de 30%": 5
    },
    5: {
      "Nenhuma": 1,
      "Moderada (alguns investimentos em fundos ou ações)": 3,
      "Avançada (uso derivativos, fundos multimercado, etc.)": 5
    },
    6: {
      "Resgataria para garantir o lucro": 1,
      "Manteria investido esperando mais valorização": 3,
      "Reinvestiria o ganho em ativos mais arriscados": 5
    },
    7: {
      "Até 5%": 1,
      "Entre 5% e 15%": 3,
      "Acima de 15%": 5
    },
    8: {
      "Nada confortável": 1,
      "Moderadamente confortável": 3,
      "Totalmente confortável": 5
    }
  }

  let score = 0
  for (const [id, answer] of Object.entries(answers)) {
    const value = scoringMap[id]?.[answer] || 0
    score += value
  }

  if (score <= 18) return "Conservador"
  if (score <= 29) return "Moderado"
  return "Arrojado"
}

export default function InvestorProfileForm({ onNext, updateFormData, formData }) {
  const [answers, setAnswers] = useState(formData.quizAnswers || {})
  const [errors, setErrors] = useState([])

  const handleChange = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const unanswered = questions.filter(q => !answers[q.id])
    if (unanswered.length > 0) {
      setErrors(unanswered.map(q => q.id))
    } else {
      setErrors([])
      const investorProfile = calculateInvestorProfile(answers)
      updateFormData({ quizAnswers: answers, investorProfile })
      onNext()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl mx-auto">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-brandKoocher-vividPurple">Vamos descobrir seu perfil de investidor</h1>
        <p className="text-gray-600">Responda com sinceridade — isso nos ajuda a te indicar os melhores caminhos de investimento.</p>
      </div>

      {questions.map((question) => (
        <div key={question.id} className="space-y-4 border-b pb-6">
          <Label className="text-lg font-semibold text-primary">{question.id}. {question.text}</Label>
          <div className="space-y-2">
            {question.options.map((option, idx) => (
              <label key={idx} className="flex items-center space-x-3 text-sm">
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option}
                  checked={answers[question.id] === option}
                  onChange={() => handleChange(question.id, option)}
                  className="accent-brandKoocher-vividPurple"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
          {errors.includes(question.id) && (
            <p className="text-sm text-red-500">Por favor, responda esta pergunta.</p>
          )}
        </div>
      ))}

      <div className="text-right">
        <Button
          type="submit"
          className="bg-brandKoocher-vividPurple hover:bg-brandKoocher-deepPurple text-brandKoocher-neonLime rounded-full h-12 px-6 flex items-center gap-2"
        >
          <ArrowRight className="h-4 w-4" />
          Continuar
        </Button>
      </div>
    </form>
  )
}
