"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ArrowRight, Plus, X } from "lucide-react"
import Image from "next/image"

export default function ShareToPartners({ onNext, onBack, updateFormData, formData }) {
  const [partners, setPartners] = useState(formData.partners || [])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const handleAddPartner = (e) => {
    e.preventDefault()
    if (!name || !email) {
      setError("Por favor, preencha todos os campos.")
      return
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Por favor, insira um email válido.")
      return
    }
    setPartners([...partners, { name, email }])
    setName("")
    setEmail("")
    setError("")
  }

  const handleRemovePartner = (index) => {
    const newPartners = partners.filter((_, i) => i !== index)
    setPartners(newPartners)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateFormData({ partners })
    onNext()
  }

  return (
    <div className="flex flex-col md:flex-row gap-16 items-start max-w-6xl mx-auto">
      <div className="space-y-8 w-full md:max-w-[55%]">
        <div>
          <h2 className="text-2xl font-bold text-brandKoocher-deepPurple">Dados dos Sócios</h2>
          <p className="text-gray-600 mt-1">
            Por último, precisamos saber um pouco mais sobre seus sócios. Adicione o nome e email de cada sócio abaixo.
          </p>
        </div>

        <form onSubmit={handleAddPartner} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-primary">
              Nome do Sócio
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite o nome do sócio"
              className="h-12"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-primary">
              Email do Sócio
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite o email do sócio"
              className="h-12"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button
            type="submit"
            className="w-full bg-brandKoocher-vividPurple hover:bg-brandKoocher-deepPurple text-white h-12 flex items-center justify-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Adicionar Sócio
          </Button>
        </form>

        {partners.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#1D1929]">Sócios Adicionados</h3>
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
                <div>
                  <p className="font-medium">{partner.name}</p>
                  <p className="text-sm text-gray-600">{partner.email}</p>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => handleRemovePartner(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}

        <p className="text-sm text-gray-600">
          Um email será enviado para cada sócio com instruções para completar o cadastro.
        </p>

        <div className="flex justify-between pt-4">
          <Button
            type="button"
            onClick={onBack}
            className="bg-brandKoocher-neonLime hover:bg-brandKoocher-pastelLime text-brandKoocher-deepPurple rounded-full h-12 px-6 flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
          <Button
            onClick={handleSubmit}
            className="bg-brandKoocher-vividPurple hover:bg-brandKoocher-deepPurple text-brandKoocher-neonLime rounded-full h-12 px-6 flex items-center gap-2"
          >
            Avançar
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="w-fit mx-auto">
        <Image src="/celular.svg" alt="Celular" className="w-[400px]" width={600} height={600} />
      </div>
    </div>
  )
}

