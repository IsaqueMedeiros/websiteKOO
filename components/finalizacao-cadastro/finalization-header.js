"use client"

import { Progress } from "@/components/ui/progress"
import Image from "next/image"

export default function FinalizationHeader({ step }) {
  const steps = ["Dados pessoais", "Dados pessoais", "Dados Educacionais", "Dados Educacionais", "Dados dos Sócios", "Convide um Amigo!"]

  const progress = (step / steps.length) * 100

  return (
    <header className="bg-[#F8F9FC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <div className="flex flex-col gap-3 mt-4">
            <Image src="/logo.svg" alt="Koocher" className="w-32" width={200} height={200} />
            <span className="text-brandKoocher-deepPurple font-normal mt-2">| Finalização</span>
          </div>
        </div>

        <div className="w-full flex items-center gap-2">
          <Progress value={progress} className="w-full h-2" />
          <span className="text-md text-gray-500">{step}/6</span>
        </div>

        <div className="py-2 flex items-center justify-between">
          <div className="flex items-center gap-2 text-md">
            <span className="text-gray-500">{step}/6</span>
            <span className="text-gray-300">-</span>
            <span className="text-gray-900">{steps[step - 1]}</span>
          </div>
        </div>
      </div>
    </header>
  )
}

