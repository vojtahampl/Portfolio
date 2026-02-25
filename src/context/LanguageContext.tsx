'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { en, cs, caseStudiesEn, caseStudiesCs, patternsEn, patternsCs } from '../content/translations';
import { Translations, CaseStudy, Pattern } from '../lib/types';

type Locale = 'en' | 'cs';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
  caseStudies: CaseStudy[];
  patterns: Pattern[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>('en');
  const [mounted, setMounted] = useState(false);

  // Persist locale in localStorage
  useEffect(() => {
    setMounted(true);
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'cs')) {
      setLocale(savedLocale);
    }
  }, []);

  const t = React.useMemo(() => (locale === 'en' ? en : cs), [locale]);
  const caseStudies = React.useMemo(() => (locale === 'en' ? caseStudiesEn : caseStudiesCs), [locale]);
  const patterns = React.useMemo(() => (locale === 'en' ? patternsEn : patternsCs), [locale]);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  // Prevent hydration mismatch by not rendering provider content until mounted
  // However, we want to render children to avoid blank page if possible, 
  // but for a portfolio it's safer to ensure correct translations.
  // We'll provide a default value if not mounted.
  
  return (
    <LanguageContext.Provider value={{ locale, setLocale: handleSetLocale, t, caseStudies, patterns }}>
      {mounted ? children : <div style={{ visibility: 'hidden' }}>{children}</div>}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
