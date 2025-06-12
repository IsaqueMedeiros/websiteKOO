"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight } from "lucide-react"

export default function StudentDataForm({ onNext, updateFormData, formData }) {
  const [data, setData] = useState({
    age: formData.age || "",
    sex: formData.sex || "",
    income: formData.income || "",
    monthlySpend: formData.monthlySpend || "",
    variableIncome: formData.variableIncome || "",
    othersIncomes: formData.othersIncomes || "",
    patrimony: formData.patrimony || "",
    isNegative: formData.isNegative || false,
  })

  const [errors, setErrors] = useState({})

  // ✅ Máscara de moeda (formato brasileiro)
  const formatCurrency = (value) => {
    const numeric = value.replace(/\D/g, "")
    const floatValue = (parseInt(numeric) / 100).toFixed(2)
    return floatValue
      .replace(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    let formattedValue = value

    if (name === "age") {
      formattedValue = value.replace(/\D/g, "").slice(0, 2)
    }

    const currencyFields = [
      "income",
      "monthlySpend",
      "variableIncome",
      "othersIncomes",
      "patrimony",
    ]

    if (currencyFields.includes(name)) {
      formattedValue = formatCurrency(value)
    }

    setData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : formattedValue }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!data.age) newErrors.age = "Informe sua idade"
    if (!data.sex) newErrors.sex = "Informe seu sexo"
    if (!data.income) newErrors.income = "Informe sua renda mensal"
    if (!data.monthlySpend) newErrors.monthlySpend = "Informe seus gastos mensais"
    if (!data.patrimony) newErrors.patrimony = "Informe seu patrimônio"

    if (Object.keys(newErrors).length === 0) {
      updateFormData(data)
      onNext()
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl">
      <div className="space-y-6 w-full">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-brandKoocher-vividPurple">Descubra seu perfil investidor</h1>
          <div className="bg-brandKoocher-neonLime inline-block px-3 py-1 rounded-md">
            <p className="text-lg font-semibold text-brandKoocher-deepPurple">Primeiro, fale sobre você</p>
          </div>
          <p className="text-primary text-lg">
            Com base nos seus dados, vamos sugerir investimentos ideais para sua realidade financeira.
          </p>
        </div>
      </div>

      <div className="space-y-8 w-full">
        <div>
          <p className="text-sm text-gray-600">Preencha os dados abaixo com atenção.</p>
          <h2 className="text-2xl font-bold text-[#1D1929] mt-2">Informações financeiras</h2>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { id: "age", label: "Idade" },
            { id: "sex", label: "Sexo", placeholder: "Masculino / Feminino / Outro" },
            { id: "income", label: "Renda Mensal (R$)" },
            { id: "monthlySpend", label: "Gastos Mensais (R$)" },
            { id: "variableIncome", label: "Renda Variável (se houver)" },
            { id: "othersIncomes", label: "Outras Fontes de Renda" },
            { id: "patrimony", label: "Patrimônio Total (R$)" },
          ].map((field) => (
            <div className="space-y-2" key={field.id}>
              <Label htmlFor={field.id} className="text-primary">{field.label}</Label>
              <Input
                id={field.id}
                name={field.id}
                value={data[field.id]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className={`h-12 ${errors[field.id] ? "border-red-500" : ""}`}
              />
              {errors[field.id] && <p className="text-sm text-red-500">{errors[field.id]}</p>}
            </div>
          ))}

          <div className="flex items-center space-x-2 col-span-full">
            <input
              type="checkbox"
              id="isNegative"
              name="isNegative"
              checked={data.isNegative}
              onChange={handleChange}
              className="w-5 h-5"
            />
            <Label htmlFor="isNegative">Estou com saldo negativo atualmente</Label>
          </div>

          <div className="col-span-full text-right">
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
    </div>
  )
}
