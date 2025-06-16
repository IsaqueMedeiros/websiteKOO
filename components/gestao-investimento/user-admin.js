// AdminDashboard.js - agora com suporte a múltiplas metas e opções dinâmicas para o usuário

"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
} from "recharts"

const COLORS = ["#00D084", "#FFC107", "#FF4C4C", "#9C27B0"]

const investmentSuggestions = {
  Conservador: [
    { nome: "Tesouro Selic", risco: "Baixo", rendimento: "9.15% a.a." },
    { nome: "CDB Bancos AAA", risco: "Baixo", rendimento: "10% a.a." }
  ],
  Moderado: [
    { nome: "Tesouro IPCA+", risco: "Médio", rendimento: "IPCA + 5.5%" },
    { nome: "Fundos Multimercado", risco: "Médio", rendimento: "12% a.a." }
  ],
  Agressivo: [
    { nome: "Ações (B3)", risco: "Alto", rendimento: "Variável" },
    { nome: "Fundos Imobiliários", risco: "Médio-Alto", rendimento: "10-15% a.a." }
  ]
}

export default function AdminDashboard() {
  const [formData, setFormData] = useState({})
  const [goals, setGoals] = useState([])
  const [newGoal, setNewGoal] = useState({ name: "", amount: "", saved: "" })

  useEffect(() => {
    const savedData = localStorage.getItem("userFormData")
    if (savedData) setFormData(JSON.parse(savedData))
  }, [])

  const {
    age, sex, income, monthlySpend, variableIncome,
    othersIncomes, patrimony, isNegative, investorProfile
  } = formData || {}

  const incomeNum = Number(income?.replace(/\D/g, "") || 0)
  const variableIncomeNum = Number(variableIncome?.replace(/\D/g, "") || 0)
  const othersIncomeNum = Number(othersIncomes?.replace(/\D/g, "") || 0)
  const monthlySpendNum = Number(monthlySpend?.replace(/\D/g, "") || 0)
  const patrimonyNum = Number(patrimony?.replace(/\D/g, "") || 0)

  const financialPie = [
    { name: "Renda Fixa", value: incomeNum },
    { name: "Gastos", value: monthlySpendNum },
    { name: "Renda Variável", value: variableIncomeNum },
    { name: "Outras Rendas", value: othersIncomeNum }
  ]

  const barData = [
    { name: "Patrimônio", value: patrimonyNum },
    { name: "Gastos", value: monthlySpendNum },
    { name: "Renda Total", value: incomeNum + variableIncomeNum + othersIncomeNum }
  ]

  const suggestions = investmentSuggestions[investorProfile] || []

  const handleAddGoal = () => {
    if (newGoal.name && newGoal.amount && newGoal.saved) {
      setGoals([...goals, newGoal])
      setNewGoal({ name: "", amount: "", saved: "" })
    }
  }

  function handleExport() {
  const data = {
    idade: age,
    perfil: investorProfile,
    patrimonio: patrimony,
    saldoNegativo: isNegative,
    sugestoes: suggestions,
  }
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = "dados_usuario.json"
  link.click()
}

function handleReset() {
  if (confirm("Deseja realmente resetar as sugestões de investimento?")) {
    // ex: setSuggestions([])
  }
}

function handleUpdateProfile() {
  // redirecionar ou abrir modal
  alert("Função de edição de perfil em construção.")
}


  return (
    <div className="flex min-h-screen bg-gray-100">
  <main className="flex-1 overflow-y-auto p-8 space-y-12">
    {/* Título */}
    <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      <div>
        <h1 className="text-4xl font-bold text-brandKoocher-vividPurple">Painel de Investimentos</h1>
        <p className="text-gray-600 text-lg">Perfil: <strong>{investorProfile}</strong></p>
      </div>

      {/* Ações do administrador */}
      <div className="flex flex-wrap gap-3">
        <Button variant="outline" className="hover:border-brandKoocher-vividPurple" onClick={handleExport}>
          📄 Exportar Dados
        </Button>
        <Button variant="outline" className="hover:border-yellow-500" onClick={handleReset}>
          🔁 Resetar Sugestões
        </Button>
        <Button variant="default" className="bg-brandKoocher-deepPurple hover:bg-brandKoocher-vividPurple text-white" onClick={handleUpdateProfile}>
          ✏️ Atualizar Perfil
        </Button>
      </div>
    </header>

    {/* Cartões informativos */}
    <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      <Card className="p-6 space-y-2 hover:shadow-lg transition-all">
        <h2 className="text-xl font-semibold">Dados Pessoais</h2>
        <p><strong>Idade:</strong> {age}</p>
        <p><strong>Saldo Negativo:</strong> {isNegative ? "Sim" : "Não"}</p>
        <p><strong>Patrimônio:</strong> R$ {patrimony}</p>
      </Card>

      <Card className="p-6 hover:shadow-lg transition-all">
        <h2 className="text-xl font-semibold">Distribuição</h2>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={financialPie} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70}>
                {financialPie.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="p-6 hover:shadow-lg transition-all">
        <h2 className="text-xl font-semibold">Gráfico de Barras</h2>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#00D084" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </section>

    {/* Sugestões */}
    {/* Sugestões */}
<section className="grid md:grid-cols-2 gap-6">
  {/* Sugestões com base no perfil */}
  <Card className="p-6 space-y-4">
    <h2 className="text-xl font-semibold">Sugestões de Investimento</h2>
    <ul className="space-y-2">
      {suggestions.map((s, i) => (
        <li key={i} className="p-3 border border-gray-200 rounded bg-white hover:shadow transition">
          <p className="font-bold text-brandKoocher-vividPurple">{s.nome}</p>
          <p className="text-md text-gray-700">Risco: <strong>{s.risco}</strong></p>
          <p className="text-md text-gray-700">Rendimento: <strong>{s.rendimento}</strong></p>
        </li>
      ))}
    </ul>
  </Card>

  {/* Nova seção dinâmica */}
  <Card className="p-6 space-y-4">
    <h2 className="text-xl font-semibold">Oportunidades em Alta</h2>
    <ul className="space-y-2">
      {[
        { nome: "LCI Imobiliária", risco: "Baixo", rendimento: "9.5% a.a.", destaque: true },
        { nome: "ETF de Tecnologia", risco: "Alto", rendimento: "Variável", destaque: false },
        { nome: "CRI Corporativo", risco: "Médio", rendimento: "IPCA + 6.2%", destaque: true }
      ].map((item, i) => (
        <li key={i} className="p-3 border border-gray-200 rounded bg-white hover:bg-gray-50 shadow-sm transition">
          <div className="flex justify-between items-center">
            <p className="font-bold text-brandKoocher-vividPurple">{item.nome}</p>
            {item.destaque && <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">🔥 Destaque</span>}
          </div>
          <p className="text-md text-gray-700">Risco: <strong>{item.risco}</strong></p>
          <p className="text-md text-gray-700">Rendimento: <strong>{item.rendimento}</strong></p>
        </li>
      ))}
    </ul>
  </Card>
</section>

  </main>
</div>

  )
}
