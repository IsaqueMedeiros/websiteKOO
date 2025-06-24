"use client"
import React from 'react';
import PricingPlansSection from '@/components/ui/plansInfo';
import PlanoSection from '@/components/planos/planos';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

export default function QuemSomosPage() {
  return (
    <div>
        <Navbar />
      <PlanoSection />
      <PricingPlansSection />
      <Footer/>
    </div>
  );
}