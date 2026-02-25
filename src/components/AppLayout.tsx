'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
