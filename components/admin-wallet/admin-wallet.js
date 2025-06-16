"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  PlusCircle,
  Filter,
  Settings,
  Trash2,
  ArrowDownUp,
  Edit3,
  CheckCircle2,
  XCircle,
  PieChart as PieChartIcon,
  Download,
  Search
} from "lucide-react"
import dynamic from "next/dynamic"

const PieChart = dynamic(() => import("recharts").then(mod => mod.PieChart), { ssr: false })
const Pie = dynamic(() => import("recharts").then(mod => mod.Pie), { ssr: false })
const Cell = dynamic(() => import("recharts").then(mod => mod.Cell), { ssr: false })
const Legend = dynamic(() => import("recharts").then(mod => mod.Legend), { ssr: false })

const profileColors = {
  Conservador: "bg-emerald-100 text-emerald-700",
  Moderado: "bg-yellow-100 text-yellow-700",
  Agressivo: "bg-red-100 text-red-700"
}

const pieColors = ["#6D28D9", "#10B981", "#F59E0B", "#EF4444"]

export default function AdminDashboard() {
  const [newInvestment, setNewInvestment] = useState({
    nome: "",
    tipo: "",
    percentual: 0,
    perfil: "",
    descricao: "",
    comentario: ""
  })

  const [investments, setInvestments] = useState([])
  const [selectedProfile, setSelectedProfile] = useState("")
  const [sortBy, setSortBy] = useState("")
  const [editingIndex, setEditingIndex] = useState(null)
  const [search, setSearch] = useState("")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleCreateInvestment = () => {
    if (!newInvestment.nome || !newInvestment.tipo || !newInvestment.percentual || !newInvestment.perfil) return
    setInvestments(prev => [...prev, newInvestment])
    resetForm()
  }

  const handleRemoveInvestment = (index) => {
    setInvestments(prev => prev.filter((_, i) => i !== index))
  }

  const handleSaveEdit = () => {
    const updated = [...investments]
    updated[editingIndex] = newInvestment
    setInvestments(updated)
    resetForm()
  }

  const startEdit = (index) => {
    setEditingIndex(index)
    setNewInvestment({ ...investments[index] })
  }

  const cancelEdit = () => {
    resetForm()
  }

  const resetForm = () => {
    setEditingIndex(null)
    setNewInvestment({ nome: "", tipo: "", percentual: 0, perfil: "", descricao: "", comentario: "" })
  }

  const filteredInvestments = investments
    .filter(i => selectedProfile ? i.perfil === selectedProfile : true)
    .filter(i => i.nome.toLowerCase().includes(search.toLowerCase()))

  const sortedInvestments = [...filteredInvestments].sort((a, b) => {
    if (sortBy === "nome") return a.nome.localeCompare(b.nome)
    if (sortBy === "percentual") return b.percentual - a.percentual
    return 0
  })

  const totalPercentual = sortedInvestments.reduce((sum, inv) => sum + inv.percentual, 0)

  const exportToCSV = () => {
    const header = "Nome,Tipo,Percentual,Perfil,Descricao,Comentario\n"
    const rows = investments
      .map(i => `${i.nome},${i.tipo},${i.percentual},${i.perfil},${i.descricao},${i.comentario}`)
      .join("\n")
    const blob = new Blob([header + rows], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "investimentos.csv"
    link.click()
  }

  const pieData = sortedInvestments.map(i => ({ name: i.nome, value: i.percentual }))

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-16 space-y-24 bg-gradient-to-br from-white to-gray-50">

  {/* CABEÇALHO */}
  <header className="text-center space-y-4">
    <h1 className="text-5xl font-extrabold text-brandKoocher-vividPurple drop-shadow-sm">Painel do Professor</h1>
    <p className="text-gray-600 text-lg max-w-xl mx-auto">
      Gerencie suas recomendações de forma moderna, intuitiva e eficiente.
    </p>
  </header>

  {/* FILTRO E BUSCA */}
  <section className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm space-y-6">
    <div className="flex items-center gap-3 text-brandKoocher-deepPurple">
      <Filter className="w-5 h-5" />
      <h2 className="text-2xl font-semibold">Filtros e Ações</h2>
    </div>

    <div className="flex flex-wrap gap-3">
      {["Conservador", "Moderado", "Agressivo"].map(profile => (
        <Button
          key={profile}
          variant={selectedProfile === profile ? "default" : "outline"}
          className="rounded-full"
          onClick={() => setSelectedProfile(profile)}
        >
          {profile}
        </Button>
      ))}
      {selectedProfile && (
        <Button variant="ghost" onClick={() => setSelectedProfile("")}>Limpar Filtro</Button>
      )}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-center">
      <div className="flex items-center gap-2">
        <Search className="w-4 h-4 text-gray-500" />
        <Input
          placeholder="Buscar investimento..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full max-w-xs"
        />
      </div>

      <div className="flex gap-2">
        <ArrowDownUp className="w-4 h-4 text-gray-500" />
        <Button size="sm" variant="ghost" onClick={() => setSortBy("nome")}>Ordenar por Nome</Button>
        <Button size="sm" variant="ghost" onClick={() => setSortBy("percentual")}>Ordenar por Percentual</Button>
      </div>

      <div className="flex justify-end md:justify-start">
        <Button onClick={exportToCSV} size="sm" variant="outline">
          <Download className="w-4 h-4 mr-2" /> Exportar CSV
        </Button>
      </div>
    </div>

    <p className={`text-md font-semibold ${totalPercentual > 100 ? "text-red-600" : "text-green-600"}`}>
      Alocação total: {totalPercentual}% {totalPercentual > 100 ? "(Excedido!)" : ""}
    </p>
  </section>

  {/* FORMULÁRIO */}
  <section className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm space-y-6">
    <div className="flex items-center gap-2 text-brandKoocher-deepPurple">
      <PlusCircle className="w-5 h-5" />
      <h2 className="text-2xl font-semibold">{editingIndex !== null ? "Editar" : "Novo"} Investimento</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {["nome", "tipo", "percentual", "perfil"].map(key => (
        <div key={key}>
          <Label>{key.charAt(0).toUpperCase() + key.slice(1)}</Label>
          <Input
            type={key === "percentual" ? "number" : "text"}
            placeholder={`Digite ${key}`}
            value={newInvestment[key]}
            onChange={e => setNewInvestment({ ...newInvestment, [key]: key === "percentual" ? Number(e.target.value) : e.target.value })}
          />
        </div>
      ))}
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <Label>Descrição</Label>
        <textarea
          placeholder="Motivo da recomendação..."
          value={newInvestment.descricao}
          onChange={e => setNewInvestment({ ...newInvestment, descricao: e.target.value })}
          className="w-full mt-1 border border-gray-300 rounded px-3 py-2 resize-none focus:ring-2 focus:ring-brandKoocher-vividPurple"
          rows={3}
        />
      </div>

      <div>
        <Label>Comentário</Label>
        <textarea
          placeholder="Comentário opcional do professor..."
          value={newInvestment.comentario}
          onChange={e => setNewInvestment({ ...newInvestment, comentario: e.target.value })}
          className="w-full mt-1 border border-gray-300 rounded px-3 py-2 resize-none focus:ring-2 focus:ring-brandKoocher-vividPurple"
          rows={3}
        />
      </div>
    </div>

    <div className="text-right space-x-2">
      {editingIndex !== null ? (
        <>
          <Button onClick={handleSaveEdit} className="bg-emerald-600 hover:bg-emerald-700 text-white">
            <CheckCircle2 className="w-4 h-4 mr-1" /> Salvar
          </Button>
          <Button onClick={cancelEdit} variant="ghost">
            <XCircle className="w-4 h-4 mr-1" /> Cancelar
          </Button>
        </>
      ) : (
        <Button onClick={handleCreateInvestment} className="bg-brandKoocher-deepPurple hover:bg-brandKoocher-vividPurple text-white">
          Confirmar Investimento
        </Button>
      )}
    </div>
  </section>

  {/* LISTA DE INVESTIMENTOS */}
  <section className="space-y-6">
    <div className="flex items-center gap-2 text-brandKoocher-deepPurple">
      <Settings className="w-5 h-5" />
      <h2 className="text-2xl font-semibold">Investimentos Criados</h2>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sortedInvestments.map((inv, index) => (
        <Card key={index} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:scale-105">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-brandKoocher-deepPurple">{inv.nome}</h3>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost" onClick={() => startEdit(index)}>
                <Edit3 className="w-4 h-4 text-blue-600" />
              </Button>
              <Button size="icon" variant="ghost" onClick={() => handleRemoveInvestment(index)}>
                <Trash2 className="w-4 h-4 text-red-600" />
              </Button>
            </div>
          </div>
          <p className="text-md text-gray-600">Tipo: <strong>{inv.tipo}</strong></p>
          <p className="text-md text-gray-600">Percentual: <strong>{inv.percentual}%</strong></p>
          <p className="text-md text-gray-600">Perfil:
            <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${profileColors[inv.perfil] || "bg-gray-200 text-gray-600"}`}>
              {inv.perfil}
            </span>
          </p>
          <p className="text-xs mt-2 text-gray-500 italic">{inv.descricao}</p>
          {inv.comentario && <p className="text-xs mt-1 text-gray-700">💬 {inv.comentario}</p>}
        </Card>
      ))}
    </div>

    {sortedInvestments.length === 0 && (
      <p className="text-center text-md text-gray-500">Nenhum investimento cadastrado ainda.</p>
    )}
  </section>

  {/* GRÁFICO */}
  {isClient && pieData.length > 0 && (
    <section className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm text-center">
      <h2 className="text-xl font-semibold mb-4 text-brandKoocher-vividPurple flex items-center justify-center gap-2">
        <PieChartIcon className="w-5 h-5" /> Distribuição Visual
      </h2>
      <div className="inline-block">
        <PieChart width={400} height={300}>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {pieData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </div>
    </section>
  )}
</div>

  )
}
