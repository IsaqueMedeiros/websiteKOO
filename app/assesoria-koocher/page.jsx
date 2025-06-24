"use client"
import React from 'react';
import AssessoriaKocher from '@/components/assesoria/assesoria';
import Navbar from '@/components/ui/navbar';
import KoocherSelector from '@/components/assesoria/assesoria-tipos';
import Footer from '@/components/ui/footer';

export default function AssesoriaPage() {
  return (
    <div>
        <Navbar />
      <KoocherSelector />
      <AssessoriaKocher />
      <Footer/>
    </div>
  );
}