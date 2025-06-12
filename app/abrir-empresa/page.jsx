"use client";

import { useState } from "react";
import FormHeader from "@/components/abrir-empresa/form-header";
import PersonalDataForm from "@/components/abrir-empresa/personal-data-form";
import PlansForm from "@/components/abrir-empresa/plans-form";
import InvestorProfileForm from "@/components/abrir-empresa/investor-profile";
import InvestorProfileResult from "@/components/abrir-empresa/investor-profile-result";
import InvestorDashboard from "@/components/abrir-empresa/investor-dashboard";

export default function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [direction, setDirection] = useState("forward");

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    setDirection("forward");
    setStep((prev) => Math.min(prev + 1, 6));
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
            <PersonalDataForm
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
            <InvestorProfileForm
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
            <InvestorProfileResult
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
            <InvestorDashboard
              onNext={nextStep}
              onBack={prevStep}
              updateFormData={updateFormData}
              formData={formData}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      <FormHeader step={step} />
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">{renderStep()}</div>
    </div>
  );
}
