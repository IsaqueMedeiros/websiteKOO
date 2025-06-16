"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
} from "recharts"
import { PlusCircle } from "lucide-react"

const COLORS = ["#6d28d9", "#a78bfa", "#c4b5fd", "#ddd6fe", "#e9d5ff"]

export default function HomeScreen() {
  const [expenses, setExpenses] = useState([
    { categoria: "Alimentação", descricao: "Supermercado", valor: 320, data: "2025-06-01", tipo: "Fixo" },
    { categoria: "Transporte", descricao: "Uber", valor: 90, data: "2025-06-02", tipo: "Esporádico" },
    { categoria: "Educação", descricao: "Curso online", valor: 250, data: "2025-06-01", tipo: "Fixo" }
  ])

  const [newExpense, setNewExpense] = useState({
    categoria: "",
    descricao: "",
    valor: "",
    data: "",
    tipo: "Esporádico"
  })

  const handleAddExpense = () => {
    if (newExpense.categoria && newExpense.valor && newExpense.descricao && newExpense.data && newExpense.tipo) {
      setExpenses([...expenses, {
        ...newExpense,
        valor: parseFloat(newExpense.valor)
      }])
      setNewExpense({ categoria: "", descricao: "", valor: "", data: "", tipo: "Esporádico" })
    }
  }

  const categoryTotals = expenses.reduce((acc, curr) => {
    acc[curr.categoria] = (acc[curr.categoria] || 0) + curr.valor
    return acc
  }, {})

  const pieData = Object.entries(categoryTotals).map(([name, value]) => ({ name, value }))

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 py-10 space-y-16">
      <header className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brandKoocher-vividPurple tracking-tight">
          Painel de Gastos
        </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Visualize e gerencie seus gastos de forma inteligente, moderna e intuitiva.
        </p>
      </header>

      <section className="grid lg:grid-cols-3 gap-8">
        {/* Planilha de Gastos */}
        <Card className="lg:col-span-2 p-8 space-y-8 bg-white border border-gray-200 shadow-xl rounded-2xl transition-all hover:shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-brandKoocher-deepPurple">Planilha de Gastos</h2>
            <Button
              onClick={handleAddExpense}
              className="flex items-center gap-2 bg-brandKoocher-deepPurple text-white hover:bg-brandKoocher-vividPurple px-5 py-2.5 rounded-lg transition"
            >
              <PlusCircle className="w-5 h-5" />
              Adicionar Gasto
            </Button>
          </div>

          {/* Formulário */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { label: "Categoria", key: "categoria", placeholder: "Ex: Transporte" },
              { label: "Descrição", key: "descricao", placeholder: "Ex: Combustível" },
              { label: "Valor (R$)", key: "valor", placeholder: "Ex: 120" },
              { label: "Data", key: "data", placeholder: "2025-06-02", type: "date" },
            ].map(({ label, key, placeholder, type = "text" }, idx) => (
              <div key={idx} className="space-y-1.5">
                <Label className="text-md font-medium text-gray-700">{label}</Label>
                <Input
                  type={type}
                  value={newExpense[key]}
                  onChange={(e) => setNewExpense({ ...newExpense, [key]: e.target.value })}
                  placeholder={placeholder}
                  className="rounded-md border-gray-300 shadow-sm focus:border-brandKoocher-vividPurple focus:ring-brandKoocher-vividPurple"
                />
              </div>
            ))}

            {/* Tipo */}
            <div className="space-y-1.5">
              <Label className="text-md font-medium text-gray-700">Tipo</Label>
              <select
                value={newExpense.tipo}
                onChange={(e) => setNewExpense({ ...newExpense, tipo: e.target.value })}
                className="w-full border-gray-300 rounded-md shadow-sm px-3 py-2 text-md focus:border-brandKoocher-vividPurple focus:ring-brandKoocher-vividPurple"
              >
                <option value="Fixo">Fixo</option>
                <option value="Esporádico">Esporádico</option>
              </select>
            </div>
          </div>

          {/* Tabela */}
          <div className="overflow-x-auto rounded-md border border-gray-200 shadow-inner">
            <table className="min-w-full text-md text-gray-700 bg-white rounded-lg overflow-hidden">
              <thead className="bg-gray-50 text-left">
                <tr>
                  <th className="p-3 font-semibold">Categoria</th>
                  <th className="p-3 font-semibold">Descrição</th>
                  <th className="p-3 font-semibold">Valor</th>
                  <th className="p-3 font-semibold">Tipo</th>
                  <th className="p-3 font-semibold">Data</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((item, i) => (
                  <tr key={i} className="border-t hover:bg-gray-50 transition-all">
                    <td className="p-3">{item.categoria}</td>
                    <td className="p-3">{item.descricao}</td>
                    <td className="p-3 text-green-600 font-medium">R$ {item.valor.toFixed(2)}</td>
                    <td className="p-3">{item.tipo}</td>
                    <td className="p-3">{item.data}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Gráfico */}
        <Card className="p-6 sm:p-8 space-y-6 border border-gray-200 rounded-2xl bg-white shadow-lg transition hover:shadow-2xl">
          <h2 className="text-2xl font-bold text-brandKoocher-deepPurple">Distribuição por Categoria</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                  className="text-md"
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
      </section>
    </main>
  )
}
