"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {
  Banknote,
  PieChart,
  ClipboardList,
  Info,
  PlusCircle,
  BarChart3,
  FileText
} from "lucide-react"

const mockRecommended = [
  { nome: "Tesouro IPCA+ 2029", tipo: "Renda Fixa", percentual: 40 },
  { nome: "Fundos Multimercado", tipo: "Renda Variável", percentual: 30 },
  { nome: "Fundos Imobiliários", tipo: "Renda Variável", percentual: 20 },
  { nome: "Poupança", tipo: "Reserva de Emergência", percentual: 10 }
]

const mockUserWallet = []

const mockQuestions = [
  {
    pergunta: "Você prefere segurança ou rentabilidade?",
    resposta: "Segurança",
    justificativa: "O aluno indicou aversão a riscos e prioriza proteção de capital."
  },
  {
    pergunta: "Qual o prazo desejado para seus investimentos?",
    resposta: "Médio Prazo",
    justificativa: "Foi recomendado Tesouro IPCA e fundos por serem estáveis e com liquidez adequada."
  },
  {
    pergunta: "Você já possui conhecimento sobre ações?",
    resposta: "Básico",
    justificativa: "Fundos foram priorizados em vez de ações diretas."
  }
]

export default function UserInvestmentsWallet() {
  const [recommended, setRecommended] = useState([])
  const [wallet, setWallet] = useState([])
  const [questions, setQuestions] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [newInvestment, setNewInvestment] = useState({ nome: "", tipo: "", percentual: 0 })

  useEffect(() => {
    setRecommended(mockRecommended)
    setWallet(mockUserWallet)
    setQuestions(mockQuestions)
  }, [])

  const handleAddInvestment = () => {
    if (!newInvestment.nome || !newInvestment.tipo || !newInvestment.percentual) return
    setWallet(prev => [...prev, newInvestment])
    setNewInvestment({ nome: "", tipo: "", percentual: 0 })
    setShowForm(false)
  }

  const handleRebalance = () => {
    const balanced = wallet.map(asset => ({ ...asset, percentual: Math.floor(100 / wallet.length) }))
    setWallet(balanced)
  }

  const generateRelatory = () => {
    const relatory = wallet.map(item => `- ${item.nome} (${item.tipo}): ${item.percentual}%`).join("\n")
    alert("Relatório da Carteira:\n\n" + relatory)
  }

  const totalPercentual = wallet.reduce((sum, item) => sum + item.percentual, 0)

  return (
    <div className="max-w-7xl mx-auto py-16 px-6 space-y-20 bg-gradient-to-br from-gray-50 to-white">
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold text-brandKoocher-vividPurple drop-shadow-sm">Sua Carteira de Investimentos</h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Montada com base no seu perfil. Fale com seu professor para ajustes personalizados.
        </p>
      </header>

      <section className="space-y-10">
        <div className="flex items-center gap-2 text-brandKoocher-deepPurple">
          <PieChart className="w-6 h-6" />
          <h2 className="text-3xl font-semibold">Recomendações do Professor</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommended.map((item, index) => (
            <Card key={index} className="p-6 space-y-5 rounded-2xl bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-all">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-brandKoocher-deepPurple">{item.nome}</h3>
                <Banknote className="w-5 h-5 text-emerald-600" />
              </div>
              <p className="text-sm text-gray-600">Tipo: <span className="text-gray-800 font-medium">{item.tipo}</span></p>
              <Progress value={item.percentual} className="h-2 rounded-full" />
              <p className="text-sm font-semibold text-gray-700">{item.percentual}% sugerido</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-brandKoocher-deepPurple">
          <div className="flex items-center gap-2">
            <PieChart className="w-6 h-6" />
            <h2 className="text-3xl font-semibold">Minha Carteira</h2>
          </div>
          <div className="flex items-center flex-wrap gap-3">
            <Button onClick={() => setShowForm(!showForm)} variant="outline" size="sm" className="gap-1">
              <PlusCircle className="w-4 h-4" /> Adicionar Ativo
            </Button>
            <Button onClick={handleRebalance} variant="outline" size="sm" className="gap-1">
              <BarChart3 className="w-4 h-4" /> Rebalancear
            </Button>
            <Button onClick={generateRelatory} variant="outline" size="sm" className="gap-1">
              <FileText className="w-4 h-4" /> Relatório
            </Button>
          </div>
        </div>

        {showForm && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white border border-brandKoocher-vividPurple p-6 rounded-2xl shadow-xl">
            <div>
              <Label className="text-sm font-medium text-gray-700">Nome do Ativo</Label>
              <input
                type="text"
                value={newInvestment.nome}
                onChange={e => setNewInvestment({ ...newInvestment, nome: e.target.value })}
                className="w-full mt-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brandKoocher-vividPurple"
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700">Tipo</Label>
              <input
                type="text"
                value={newInvestment.tipo}
                onChange={e => setNewInvestment({ ...newInvestment, tipo: e.target.value })}
                className="w-full mt-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brandKoocher-vividPurple"
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700">Percentual (%)</Label>
              <input
                type="number"
                value={newInvestment.percentual}
                onChange={e => setNewInvestment({ ...newInvestment, percentual: Number(e.target.value) })}
                className="w-full mt-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brandKoocher-vividPurple"
              />
            </div>
            <div className="col-span-full text-right">
              <Button onClick={handleAddInvestment} className="mt-4 bg-brandKoocher-deepPurple hover:bg-brandKoocher-vividPurple text-white">
                Confirmar Ativo
              </Button>
            </div>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wallet.map((item, index) => (
            <Card key={index} className="p-6 space-y-5 rounded-2xl bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-all">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-brandKoocher-deepPurple">{item.nome}</h3>
                <Banknote className="w-5 h-5 text-emerald-600" />
              </div>
              <p className="text-sm text-gray-600">Tipo: <span className="text-gray-800 font-medium">{item.tipo}</span></p>
              <Progress value={item.percentual} className="h-2 rounded-full" />
              <p className="text-sm font-semibold text-gray-700">{item.percentual}% da carteira</p>
            </Card>
          ))}
        </div>

        <p className="text-right text-sm text-gray-500 mt-2">Total da Carteira: {totalPercentual}%</p>
      </section>

      <section className="space-y-8">
        <div className="flex items-center gap-2 text-brandKoocher-deepPurple">
          <ClipboardList className="w-6 h-6" />
          <h2 className="text-2xl font-semibold">Análise de Perfil</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {questions.map((q, index) => (
            <Card
              key={index}
              className="p-6 space-y-3 rounded-xl shadow-md bg-gray-50 hover:bg-white border border-gray-200 transition-all"
            >
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-brandKoocher-vividPurple mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">{q.pergunta}</p>
                  <p className="text-sm text-gray-700">Resposta: <span className="font-medium text-brandKoocher-vividPurple">{q.resposta}</span></p>
                  <p className="text-xs text-gray-500 italic">{q.justificativa}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <footer className="text-center mt-16">
        <Button
          variant="default"
          className="px-8 py-4 rounded-full text-white bg-brandKoocher-deepPurple hover:bg-brandKoocher-vividPurple text-lg shadow-md hover:shadow-lg transition"
        >
          Solicitar Revisão com Professor
        </Button>
      </footer>
    </div>
  )
}
