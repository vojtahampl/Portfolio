'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, locale, setLocale } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/case-studies', label: t.nav.caseStudies },
    { href: '/patterns', label: t.nav.patterns },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        scrolled ? 'bg-white/80 backdrop-blur-md border-slate-200 py-3' : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-semibold tracking-tight text-slate-900">
              Vojtěch Hampl
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-slate-900',
                  pathname === link.href ? 'text-slate-900' : 'text-slate-500'
                )}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex items-center ml-4 pl-4 border-l border-slate-200">
              <button
                onClick={() => setLocale(locale === 'en' ? 'cs' : 'en')}
                className="flex items-center text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors"
              >
                <Globe className="w-4 h-4 mr-1.5" />
                {locale === 'en' ? 'CS' : 'EN'}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setLocale(locale === 'en' ? 'cs' : 'en')}
              className="mr-4 p-2 text-slate-500"
              aria-label="Toggle language"
            >
              <span className="text-xs font-bold uppercase tracking-widest">{locale === 'en' ? 'CS' : 'EN'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 transition-all duration-300 ease-in-out overflow-hidden',
          isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                'block px-3 py-2 text-base font-medium rounded-md',
                pathname === link.href ? 'bg-slate-50 text-slate-900' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
