"use client"
import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import FaqKoocher from '@/components/faq/faq';

export default function FaqPage() {
  return (
    <div>
        <Navbar />
      <FaqKoocher />
      <Footer/>
    </div>
  );
}