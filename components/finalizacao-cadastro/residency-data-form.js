"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, ArrowRight, Upload } from "lucide-react"
import Image from "next/image"

export default function ResidencyDataForm({ onNext, onBack, updateFormData, formData }) {
  const [errors, setErrors] = useState({})
  const [isDoingResidency, setIsDoingResidency] = useState(formData.isDoingResidency || "")
  const [uploadedFile, setUploadedFile] = useState(null)

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setUploadedFile(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      isDoingResidency,
      residencyDocument: uploadedFile,
    }

    const newErrors = {}
    if (!isDoingResidency) newErrors.residency = "Por favor, selecione uma opção"
    if (isDoingResidency === "sim" && !uploadedFile) newErrors.document = "Por favor, anexe o comprovante"

    if (Object.keys(newErrors).length === 0) {
      updateFormData(data)
      onNext()
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
      {/* Coluna Esquerda */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-brandKoocher-deepPurple">Dados Educacionais</h2>
          <p className="text-gray-600 mt-1">Agora, precisamos saber um pouco mais sobre sua formação.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <Label className="text-primary">Está cursando residência?</Label>
            <RadioGroup
              value={isDoingResidency}
              onValueChange={setIsDoingResidency}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sim" id="residency-yes" />
                <Label htmlFor="residency-yes" className="font-normal cursor-pointer">
                  Sim
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="nao" id="residency-no" />
                <Label htmlFor="residency-no" className="font-normal cursor-pointer">
                  Não
                </Label>
              </div>
            </RadioGroup>
            {errors.residency && <p className="text-md text-red-500">{errors.residency}</p>}
          </div>

          {isDoingResidency === "sim" && (
            <div className="space-y-2">
              <Label className="text-primary">Anexar comprovante</Label>
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-4">
                <div className="flex flex-col items-center justify-center gap-2">
                  <input
                    type="file"
                    id="document"
                    className="hidden"
                    onChange={handleFileUpload}
                    accept="image/*,.pdf"
                  />
                  <label
                    htmlFor="document"
                    className="flex items-center gap-2 bg-primary text-secondary px-4 py-2 rounded-md cursor-pointer"
                  >
                    <Upload className="h-4 w-4" />
                    Fazer upload de arquivos
                  </label>
                  {uploadedFile && <p className="text-md text-gray-600">{uploadedFile.name}</p>}
                  {errors.document && <p className="text-md text-red-500">{errors.document}</p>}
                </div>
              </div>
            </div>
          )}

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
        <Image src="/medica.svg" alt="Celular" className="w-[400px]" width={600} height={600} />
      </div>
    </div>
  )
}

