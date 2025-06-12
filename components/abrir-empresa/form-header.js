"use client"

import { Progress } from "@/components/ui/progress"
import Image from "next/image"

export default function FormHeader({ step }) {
  const steps = ["Dados pessoais", "Quiz", "Resultado de Perfil", "Dashboard Aluno"]

  const progress = (step / steps.length) * 100

  return (
    <header className="bg-[#F8F9FC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <div className="flex flex-col gap-3 mt-4">
            <Image src="/anima.jpg" alt="anima" className="ml-[-3rem] w-64" width={400} height={400} />
            <span className="text-brandKoocher-deepPurple font-normal mt-2">| Perfil de Investidor</span>
          </div>
        </div>

        <div className="w-full flex items-center gap-2">
          <Progress value={progress} className="w-full h-2" />
          <span className="text-sm text-gray-500">{step}/4</span>
        </div>

        <div className="py-2 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-500">{step}/4</span>
            <span className="text-gray-300">-</span>
            <span className="text-gray-900">{steps[step - 1]}</span>
          </div>
        </div>
      </div>
    </header>
  )
}

