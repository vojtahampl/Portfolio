'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link href="/case-studies" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
              {t.nav.caseStudies}
            </Link>
            <Link href="/patterns" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
              {t.nav.patterns}
            </Link>
            <Link href="/about" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
              {t.nav.about}
            </Link>
            <Link href="/contact" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
              {t.nav.contact}
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:order-1 text-center md:text-left">
            <p className="text-sm text-slate-500">
              &copy; {currentYear} Vojtěch Hampl
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
