"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function PersonalDataAdditionalForm({ onNext, onBack, updateFormData, formData }) {
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const data = {
      nickname: form.nickname.value,
      maritalStatus: form.maritalStatus.value,
      unionType: form.unionType.value,
    }

    const newErrors = {}
    if (!data.nickname) newErrors.nickname = "Apelido é obrigatório"
    if (!data.maritalStatus) newErrors.maritalStatus = "Estado civil é obrigatório"

    if (Object.keys(newErrors).length === 0) {
      updateFormData(data)
      onNext()
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-brandKoocher-deepPurple">Dados Pessoais</h2>
          <p className="text-gray-600 mt-1">Para continuar, precisamos saber um pouco mais sobre você.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="nickname" className="text-primary">
              Apelido
            </Label>
            <Input
              id="nickname"
              name="nickname"
              defaultValue={formData.nickname}
              className={`h-12 ${errors.nickname ? "border-red-500" : ""}`}
              placeholder="Digite seu apelido"
            />
            {errors.nickname && <p className="text-md text-red-500">{errors.nickname}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="maritalStatus" className="text-primary">
              Estado civil
            </Label>
            <Select name="maritalStatus" defaultValue={formData.maritalStatus}>
              <SelectTrigger className={`h-12 ${errors.maritalStatus ? "border-red-500" : ""}`}>
                <SelectValue placeholder="Selecione seu estado civil" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="solteiro">Solteiro(a)</SelectItem>
                <SelectItem value="casado">Casado(a)</SelectItem>
                <SelectItem value="divorciado">Divorciado(a)</SelectItem>
                <SelectItem value="viuvo">Viúvo(a)</SelectItem>
              </SelectContent>
            </Select>
            {errors.maritalStatus && <p className="text-md text-red-500">{errors.maritalStatus}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="unionType" className="text-primary">
              Tipo de comunhão
            </Label>
            <Select name="unionType" defaultValue={formData.unionType}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Selecione seu tipo de união" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="null">Nenhum</SelectItem>
                <SelectItem value="parcial">Comunhão Parcial de Bens</SelectItem>
                <SelectItem value="universal">Comunhão Universal de Bens</SelectItem>
                <SelectItem value="separacao">Separação Total de Bens</SelectItem>
              </SelectContent>
            </Select>
          </div>

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
              type="submit"
              className="bg-brandKoocher-vividPurple hover:bg-brandKoocher-deepPurple text-brandKoocher-neonLime rounded-full h-12 px-6 flex items-center gap-2"
            >
              Avançar
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>

      <div className="w-fit mx-auto">
        <Image src="/enfermeira.svg" alt="Celular" className="w-[400px]" width={600} height={600} />
      </div>
    </div>
  )
}

