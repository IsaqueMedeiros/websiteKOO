"use client"
import React from 'react';
import QuemSomos from '@/components/quem-somos/quem-somos';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

export default function QuemSomosPage() {
  return (
    <div>
        <Navbar />
      <QuemSomos />
      <Footer/>
    </div>
  );
}