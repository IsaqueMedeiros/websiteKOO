"use client"
import React from 'react';
import PricingPlansSection from '@/components/ui/plansInfo';
import PlanoSection from '@/components/planos/planos';
import Navbar from '@/components/ui/navbar';
export default function QuemSomosPage() {
  return (
    <div>
        <Navbar />
      <PlanoSection />
      <PricingPlansSection />
    </div>
  );
}