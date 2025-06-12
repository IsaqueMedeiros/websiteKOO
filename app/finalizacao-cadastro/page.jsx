"use client";

import EducationalDataForm from "@/components/finalizacao-cadastro/educational-data-form";
import FinalizationHeader from "@/components/finalizacao-cadastro/finalization-header";
import InviteFriendForm from "@/components/finalizacao-cadastro/invite-friend-form";
import PersonalDataAdditionalForm from "@/components/finalizacao-cadastro/personal-data-adittion";
import PersonalDataCompletionForm from "@/components/finalizacao-cadastro/personal-data-completion-form";
import ResidencyDataForm from "@/components/finalizacao-cadastro/residency-data-form";
import ShareToPartners from "@/components/finalizacao-cadastro/share-to-partners";
import ThankYouScreen from "@/components/finalizacao-cadastro/thank-you-screen";
import { useState } from "react";

export default function FinalizationPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [direction, setDirection] = useState("forward");

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    setDirection("forward");
    setStep((prev) => Math.min(prev + 1, 21));
  };

  const prevStep = () => {
    setDirection("backward");
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div
            key={step}
            className={`animate-in ${
              direction === "forward"
                ? "slide-in-from-right-1/4"
                : "slide-in-from-left-1/4"
            } duration-500`}
          >
            <PersonalDataCompletionForm
              onNext={nextStep}
              updateFormData={updateFormData}
              formData={formData}
            />
          </div>
        );
      case 2:
        return (
          <div
            key={step}
            className={`animate-in ${
              direction === "forward"
                ? "slide-in-from-right-1/4"
                : "slide-in-from-left-1/4"
            } duration-500`}
          >
            <PersonalDataAdditionalForm
              onNext={nextStep}
              onBack={prevStep}
              updateFormData={updateFormData}
              formData={formData}
            />
          </div>
        );
      case 3:
        return (
          <div
            key={step}
            className={`animate-in ${
              direction === "forward"
                ? "slide-in-from-right-1/4"
                : "slide-in-from-left-1/4"
            } duration-500`}
          >
            <EducationalDataForm
              onNext={nextStep}
              onBack={prevStep}
              updateFormData={updateFormData}
              formData={formData}
            />
          </div>
        );
      case 4:
        return (
          <div
            key={step}
            className={`animate-in ${
              direction === "forward"
                ? "slide-in-from-right-1/4"
                : "slide-in-from-left-1/4"
            } duration-500`}
          >
            <ResidencyDataForm
              onNext={nextStep}
              onBack={prevStep}
              updateFormData={updateFormData}
              formData={formData}
            />
          </div>
        );
      case 5:
        return (
          <div
            key={step}
            className={`animate-in ${
              direction === "forward"
                ? "slide-in-from-right-1/4"
                : "slide-in-from-left-1/4"
            } duration-500`}
          >
            <ShareToPartners
              onNext={nextStep}
              onBack={prevStep}
              updateFormData={updateFormData}
              formData={formData}
            />
          </div>
        );
      case 6:
        return (
          <div
            key={step}
            className={`animate-in ${
              direction === "forward"
                ? "slide-in-from-right-1/4"
                : "slide-in-from-left-1/4"
            } duration-500`}
          >
            <InviteFriendForm
              onNext={nextStep}
              onBack={prevStep}
              updateFormData={updateFormData}
              formData={formData}
            />
          </div>
        );
      case 7:
        return <ThankYouScreen key={step} onBack={prevStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      <FinalizationHeader
        step={step}
        totalSteps={21}
        title="Finalização de Cadastro para Abertura de Empresa"
      />
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">{renderStep()}</div>
    </div>
  );
}
