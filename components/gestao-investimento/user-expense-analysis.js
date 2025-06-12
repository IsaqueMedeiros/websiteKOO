"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Cell,
} from "recharts"

const COLORS = ["#6d28d9", "#a78bfa"]

export default function UserExpenseAnalysis() {
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem("userExpenses")
    if (stored) {
      setExpenses(JSON.parse(stored))
    }
  }, [])

  const now = new Date()
  const currentMonth = now.toISOString().slice(0, 7)

  const gastosDoMes = expenses.filter(e => e.data?.startsWith(currentMonth))
  const fixos = gastosDoMes.filter(e => e.tipo === "Fixo")
  const esporadicos = gastosDoMes.filter(e => e.tipo !== "Fixo")

  const totalFixos = fixos.reduce((acc, e) => acc + Number(e.valor || 0), 0)
  const totalEsporadicos = esporadicos.reduce((acc, e) => acc + Number(e.valor || 0), 0)

  const pieData = [
    { name: "Fixos", value: totalFixos },
    { name: "Esporádicos", value: totalEsporadicos }
  ]

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      <header className="text-center space-y-2">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brandKoocher-vividPurple">Análise de Gastos</h1>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Veja como seus gastos impactam sua renda mensal e seu patrimônio.
        </p>
      </header>

      <section className="grid lg:grid-cols-2 gap-8">
        {/* Gráfico de Pizza */}
        <Card className="p-8 space-y-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-brandKoocher-deepPurple">Resumo do Mês Atual</h2>
          <p className="text-sm text-gray-600">Total fixo: <strong className="text-brandKoocher-vividPurple">R$ {totalFixos.toFixed(2)}</strong></p>
          <p className="text-sm text-gray-600">Total esporádico: <strong className="text-brandKoocher-vividPurple">R$ {totalEsporadicos.toFixed(2)}</strong></p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`R$ ${value}`, "Total"]} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Tabela de Gastos */}
        <Card className="p-8 bg-white border border-gray-200 rounded-2xl shadow-md overflow-auto hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-brandKoocher-deepPurple mb-4">Todos os Gastos Registrados</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-gray-700 border border-gray-100 rounded-md overflow-hidden">
              <thead className="bg-gray-50 text-left text-xs font-semibold uppercase text-gray-500">
                <tr>
                  <th className="px-4 py-3">Categoria</th>
                  <th className="px-4 py-3">Descrição</th>
                  <th className="px-4 py-3">Valor</th>
                  <th className="px-4 py-3">Tipo</th>
                  <th className="px-4 py-3">Data</th>
                </tr>
              </thead>
              <tbody>
                {expenses.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-4 text-gray-400 italic">Nenhum gasto registrado</td>
                  </tr>
                ) : (
                  expenses.map((e, i) => (
                    <tr key={i} className="border-t hover:bg-gray-50 transition">
                      <td className="px-4 py-2">{e.categoria}</td>
                      <td className="px-4 py-2">{e.descricao}</td>
                      <td className="px-4 py-2 text-green-600 font-semibold">R$ {Number(e.valor).toFixed(2)}</td>
                      <td className="px-4 py-2">{e.tipo || "Esporádico"}</td>
                      <td className="px-4 py-2">{e.data}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </section>
    </main>
  )
}
