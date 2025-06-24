"use client"
import React from 'react';
import Navbar from '@/components/ui/navbar';
import KoocherContactForm from '@/components/contato/contato';
import Footer from '@/components/ui/footer';

export default function AssesoriaPage() {
  return (
    <div>
        <Navbar />
      <KoocherContactForm />
      <Footer/>
    </div>
  );
}