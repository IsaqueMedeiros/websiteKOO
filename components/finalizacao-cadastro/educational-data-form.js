"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function EducationalDataForm({ onNext, onBack, updateFormData, formData }) {
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const data = {
      crm: form.crm.value,
      university: form.university.value,
      state: form.state.value,
      city: form.city.value,
    }

    const newErrors = {}
    if (!data.university) newErrors.university = "Faculdade é obrigatória"
    if (!data.state) newErrors.state = "Estado é obrigatório"
    if (!data.city) newErrors.city = "Cidade é obrigatória"

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
          <h2 className="text-2xl font-bold text-brandKoocher-deepPurple">Dados Educacionais</h2>
          <p className="text-gray-600 mt-1">Agora, precisamos saber um pouco mais sobre sua formação.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="crm" className="text-primary">
              CRM
            </Label>
            <Input
              id="crm"
              name="crm"
              defaultValue={formData.crm}
              className={`h-12 ${errors.crm ? "border-red-500" : ""}`}
              placeholder="Digite seu CRM"
            />
            {errors.crm && <p className="text-sm text-red-500">{errors.crm}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="university" className="text-primary">
              Faculdade
            </Label>
            <Input
              id="university"
              name="university"
              defaultValue={formData.university}
              className={`h-12 ${errors.university ? "border-red-500" : ""}`}
              placeholder="Digite sua faculdade"
            />
            {errors.university && <p className="text-sm text-red-500">{errors.university}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="state" className="text-primary">
              Estado
            </Label>
            <Input
              id="state"
              name="state"
              defaultValue={formData.state}
              className={`h-12 ${errors.state ? "border-red-500" : ""}`}
              placeholder="Digite o estado"
            />
            {errors.state && <p className="text-sm text-red-500">{errors.state}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="city" className="text-primary">
              Cidade
            </Label>
            <Input
              id="city"
              name="city"
              defaultValue={formData.city}
              className={`h-12 ${errors.city ? "border-red-500" : ""}`}
              placeholder="Digite a cidade"
            />
            {errors.city && <p className="text-sm text-red-500">{errors.city}</p>}
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
        <Image src="/medica2.svg" alt="Celular" className="w-[400px]" width={600} height={600} />
      </div>
    </div>
  )
}

