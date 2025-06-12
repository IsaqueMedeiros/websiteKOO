"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, Upload } from "lucide-react"

const formatCPF = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1")
}

const formatDate = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})\d+?$/, "$1")
}

export default function PersonalDataCompletionForm({ onNext, updateFormData, formData }) {
  const [data, setData] = useState({
    fullName: formData.fullName || "",
    cpf: formData.cpf || "",
    birthDate: formData.birthDate || "",
  })
  const [errors, setErrors] = useState({})
  const [uploadedFile, setUploadedFile] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    let formattedValue = value

    if (name === "fullName") {
      formattedValue = value.slice(0, 100)
    } else if (name === "cpf") {
      formattedValue = formatCPF(value)
    } else if (name === "birthDate") {
      formattedValue = formatDate(value)
    }

    setData((prev) => ({ ...prev, [name]: formattedValue }))
    e.target.value = formattedValue
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setUploadedFile(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!data.fullName.trim()) {
      newErrors.fullName = "Nome é obrigatório"
    } else if (!/^[a-zA-Z\s]{3,}$/.test(data.fullName)) {
      newErrors.fullName = "Nome deve conter apenas letras e espaços, com no mínimo 3 caracteres"
    }

    if (!data.cpf) {
      newErrors.cpf = "CPF é obrigatório"
    } else if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(data.cpf)) {
      newErrors.cpf = "CPF inválido"
    }

    if (!data.birthDate) {
      newErrors.birthDate = "Data de nascimento é obrigatória"
    } else if (!/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/.test(data.birthDate)) {
      newErrors.birthDate = "Data de nascimento inválida"
    }

    if (!uploadedFile) {
      newErrors.document = "Upload do documento é obrigatório"
    }

    if (Object.keys(newErrors).length === 0) {
      updateFormData({ ...data, document: uploadedFile })
      onNext()
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="bg-secondary inline-block px-3 py-1 rounded-md">
            <p className="text-lg font-semibold text-brandKoocher-deepPurple">Estamos quase acabando!</p>
          </div>
          <h1 className="text-2xl font-bold text-[#1D1929]">A abertura do seu CNPJ está prestes a ser concluída.</h1>
          <p className="text-primary">
            Agora, vamos apenas completar seu cadastro com mais algumas informações para finalizar a abertura da sua
            empresa!
          </p>
        </div>

        <div className="flex flex-col gap-4 items-center lg:flex-row lg:items-end">
          <img src="/fernando.svg" alt="Fernando" className="w-full max-w-64" />
          <img src="/guilherme.svg" alt="Guilherme" className="w-full max-w-64" />
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-brandKoocher-deepPurple">Dados Pessoais</h2>
          <p className="text-gray-600 mt-1">Para continuar, precisamos saber um pouco mais sobre você.</p>
        </div>

        <form id="completion-form" onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-primary">
              Nome completo
            </Label>
            <Input
              id="fullName"
              name="fullName"
              value={data.fullName}
              onChange={handleChange}
              className={`h-12 ${errors.fullName ? "border-red-500" : ""}`}
              placeholder="Digite seu nome completo"
              maxLength={100}
            />
            {errors.fullName && <p className="text-sm text-red-500">{errors.fullName}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="cpf" className="text-primary">
              CPF
            </Label>
            <div className="relative">
              <Input
                id="cpf"
                name="cpf"
                value={data.cpf}
                onChange={handleChange}
                className={`h-12 ${errors.cpf ? "border-red-500" : ""}`}
                placeholder="000.000.000-00"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                {data.cpf.length}/14
              </span>
            </div>
            {errors.cpf && <p className="text-sm text-red-500">{errors.cpf}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="birthDate" className="text-primary">
              Data de nascimento
            </Label>
            <Input
              id="birthDate"
              name="birthDate"
              value={data.birthDate}
              onChange={handleChange}
              className={`h-12 ${errors.birthDate ? "border-red-500" : ""}`}
              placeholder="DD/MM/AAAA"
            />
            {errors.birthDate && <p className="text-sm text-red-500">{errors.birthDate}</p>}
          </div>

          <div className="space-y-2">
            <Label className="text-primary">Upload da CNH ou da identidade</Label>
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-4">
              <div className="flex flex-col items-center justify-center gap-2">
                <input type="file" id="document" className="hidden" onChange={handleFileUpload} accept="image/*,.pdf" />
                <label
                  htmlFor="document"
                  className="flex items-center gap-2 bg-brandKoocher-vividPurple   text-brandKoocher-neonLime px-4 py-2 rounded-md cursor-pointer"
                >
                  <Upload className="h-4 w-4" />
                  Fazer upload de arquivos
                </label>
                {uploadedFile && <p className="text-sm text-gray-600">{uploadedFile.name}</p>}
                {errors.document && <p className="text-sm text-red-500">{errors.document}</p>}
              </div>
            </div>
          </div>
        </form>

        <Button
          type="submit"
          form="completion-form"
          className="bg-brandKoocher-vividPurple hover:bg-brandKoocher-deepPurple text-brandKoocher-neonLime rounded-full h-12 px-6 flex items-center justify-self-end gap-2"
        >
          <ArrowRight className="h-4 w-4" />
          Avançar
        </Button>
      </div>
    </div>
  )
}

