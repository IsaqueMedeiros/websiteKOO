"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, LineChart, Line
} from "recharts"
import { PiggyBank, PlusCircle } from "lucide-react"

export default function GoalsScreen() {
  const [goals, setGoals] = useState([])
  const [newGoal, setNewGoal] = useState({ name: "", amount: "", saved: "", targetMonths: "" })
  const [formData, setFormData] = useState({})

  useEffect(() => {
    const stored = localStorage.getItem("formData")
    if (stored) setFormData(JSON.parse(stored))
  }, [])

  const {
    income = 0,
    monthlySpend = 0,
  } = formData || {}

  const disposableIncome = income - monthlySpend

  const handleAddGoal = () => {
    if (newGoal.name && newGoal.amount && newGoal.saved) {
      setGoals([...goals, newGoal])
      setNewGoal({ name: "", amount: "", saved: "", targetMonths: "" })
    }
  }

  const chartData = goals.map(g => {
    const amount = Number(g.amount.replace(/\D/g, "")) || 0
    const saved = Number(g.saved.replace(/\D/g, "")) || 0
    const targetMonths = Number(g.targetMonths) || 0
    const remaining = Math.max(amount - saved, 0)

    const monthsToGoal = disposableIncome > 0
      ? Math.ceil(remaining / disposableIncome)
      : Infinity

    const monthlyToReachInTime = targetMonths > 0
      ? Math.ceil(remaining / targetMonths)
      : 0

    const currentDate = new Date()
    const projectedDate = new Date(currentDate.setMonth(currentDate.getMonth() + monthsToGoal))
    const projectedMonth = projectedDate.toLocaleString('pt-BR', { month: 'long' })
    const projectedYear = projectedDate.getFullYear()

    return {
      name: g.name,
      Poupado: saved,
      Faltando: remaining,
      prazo: monthsToGoal !== Infinity ? `${projectedMonth} de ${projectedYear}` : "Indefinido",
      mensalRecomendado: monthlyToReachInTime > 0 ? monthlyToReachInTime : Math.ceil(remaining / (monthsToGoal || 1)),
      targetMonths
    }
  })

  const futureProjection = chartData.flatMap(goal => {
    const months = goal.targetMonths || 12
    const projection = []
    for (let i = 1; i <= months; i++) {
      projection.push({
        month: `${goal.name} - ${i} mês`,
        valor: Number(goal.Poupado) + i * goal.mensalRecomendado
      })
    }
    return projection
  })

  return (
  <div className="max-w-6xl mx-auto py-14 px-4 sm:px-6 lg:px-8 space-y-16">
  {/* Header */}
  <header className="text-center space-y-3">
    <div className="inline-flex items-center gap-3 text-brandKoocher-deepPurple">
      <PiggyBank className="w-10 h-10" />
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Minhas Metas Financeiras</h1>
    </div>
    <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
      Projete seus sonhos e veja como alcançá-los com base na sua renda atual.
    </p>
  </header>

  {/* Formulário de nova meta */}
  <Card className="p-6 sm:p-8 border-l-4 border-brandKoocher-vividPurple rounded-2xl shadow-xl bg-white space-y-6 transition-all">
    <h2 className="text-2xl font-bold text-brandKoocher-deepPurple">Criar Nova Meta</h2>
    <div className="grid md:grid-cols-4 gap-6">
      {[
        { label: "Nome", key: "name", placeholder: "Ex: Viagem" },
        { label: "Valor Total (R$)", key: "amount", placeholder: "Ex: 20000" },
        { label: "Já Poupado (R$)", key: "saved", placeholder: "Ex: 5000" },
        { label: "Prazo (meses)", key: "targetMonths", placeholder: "Ex: 12" }
      ].map((field, idx) => (
        <div key={idx}>
          <Label className="text-md font-medium text-gray-700">{field.label}</Label>
          <Input
            value={newGoal[field.key]}
            onChange={(e) => setNewGoal({ ...newGoal, [field.key]: e.target.value })}
            placeholder={field.placeholder}
            className="mt-1"
          />
        </div>
      ))}
    </div>
    <div className="flex justify-end pt-2">
      <Button className="gap-2 bg-brandKoocher-deepPurple hover:bg-brandKoocher-vividPurple text-white transition-all" onClick={handleAddGoal}>
        <PlusCircle className="w-4 h-4" />
        Adicionar Meta
      </Button>
    </div>
  </Card>

  {/* Gráficos lado a lado */}
  {goals.length > 0 && (
    <div className="grid lg:grid-cols-2 gap-8">
      <Card className="p-6 space-y-4 shadow-lg rounded-2xl border border-gray-200 bg-white">
        <h2 className="text-xl font-semibold text-center text-brandKoocher-deepPurple">Gráfico de Metas</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart layout="vertical" data={chartData} margin={{ top: 20, right: 30, left: 50, bottom: 10 }}>
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip formatter={(value, name) => [`R$ ${value}`, name]} />
              <Legend />
              <Bar dataKey="Poupado" stackId="a" fill="#6d28d9" radius={[0, 6, 6, 0]} />
              <Bar dataKey="Faltando" stackId="a" fill="#ddd6fe" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="p-6 space-y-4 shadow-lg rounded-2xl border border-gray-200 bg-white">
        <h2 className="text-xl font-semibold text-center text-brandKoocher-deepPurple">Projeção de Crescimento</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={futureProjection} margin={{ top: 20, right: 30, left: 0, bottom: 10 }}>
              <XAxis dataKey="month" hide />
              <YAxis />
              <Tooltip formatter={(value) => [`R$ ${value}`, "Acumulado"]} />
              <Line type="monotone" dataKey="valor" stroke="#6d28d9" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  )}

  {/* Detalhamento das metas */}
  {goals.length > 0 && (
    <Card className="p-6 sm:p-8 shadow-lg border border-gray-200 rounded-2xl space-y-6 bg-white">
      <h2 className="text-2xl font-bold text-brandKoocher-deepPurple">Detalhamento das Metas</h2>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {chartData.map((g, i) => (
          <li
            key={i}
            className="rounded-xl bg-gray-50 hover:bg-white border border-gray-200 p-5 shadow-sm transition-all"
          >
            <h3 className="text-lg font-semibold text-brandKoocher-vividPurple mb-2">{g.name}</h3>
            <ul className="text-md text-gray-700 space-y-1">
              <li><strong>Poupado:</strong> R$ {g.Poupado}</li>
              <li><strong>Faltando:</strong> R$ {g.Faltando}</li>
              <li><strong>Mensal Sugerido:</strong> R$ {g.mensalRecomendado}</li>
              <li><strong>Prazo Estimado:</strong> {g.prazo}</li>
            </ul>
          </li>
        ))}
      </ul>
    </Card>
  )}
</div>


  )
}
