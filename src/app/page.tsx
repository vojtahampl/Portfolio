'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, ShieldCheck, Share2, Network, CheckCircle2, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const { t } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            {t.home.hero.title}
          </h1>
          <h2 className="mt-6 text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl font-normal">
            {t.home.hero.subtitle}
          </h2>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link 
              href="/case-studies" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-slate-900 hover:bg-slate-800 focus:outline-none transition-colors"
            >
              {t.home.hero.cta.cases}
            </Link>
            <Link 
              href="/patterns" 
              className="inline-flex items-center px-6 py-3 border border-slate-200 text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 focus:outline-none transition-colors"
            >
              {t.home.hero.cta.patterns}
            </Link>
            <a 
              href="https://www.linkedin.com/in/vojtech-hampl/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3 border border-slate-200 text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 focus:outline-none transition-colors"
            >
              {t.home.hero.cta.linkedin}
              <ExternalLink className="ml-2 w-4 h-4 text-slate-400" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 border-t border-slate-100">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Integration Architecture */}
          <motion.div variants={item} className="flex flex-col">
            <div className="h-12 w-12 rounded-lg bg-slate-50 flex items-center justify-center mb-6">
              <Share2 className="w-6 h-6 text-slate-900" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{t.home.pillars.integration.title}</h3>
            <p className="text-slate-600 leading-relaxed">
              {t.home.pillars.integration.description}
            </p>
          </motion.div>

          {/* Identity & Security */}
          <motion.div variants={item} className="flex flex-col">
            <div className="h-12 w-12 rounded-lg bg-slate-50 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-slate-900" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{t.home.pillars.security.title}</h3>
            <p className="text-slate-600 leading-relaxed">
              {t.home.pillars.security.description}
            </p>
          </motion.div>

          {/* Networks & Communication */}
          <motion.div variants={item} className="flex flex-col">
            <div className="h-12 w-12 rounded-lg bg-slate-50 flex items-center justify-center mb-6">
              <Network className="w-6 h-6 text-slate-900" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{t.home.pillars.networks.title}</h3>
            <p className="text-slate-600 leading-relaxed">
              {t.home.pillars.networks.description}
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Section */}
      <section className="py-20 border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">{t.home.trust.title}</h2>
            <ul className="space-y-4">
              {t.home.trust.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-600 text-lg">
                  <CheckCircle2 className="w-6 h-6 text-slate-900 mt-0.5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Navigation Section */}
      <section className="py-20 border-t border-slate-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.home.caseStudiesNav.title}</h2>
          <p className="text-lg text-slate-600 mb-10">
            {t.home.caseStudiesNav.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-12">
            {t.home.caseStudiesNav.items.map((item, index) => (
              <div key={index} className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <Link 
            href="/case-studies" 
            className="inline-flex items-center text-lg font-bold text-slate-900 group"
          >
            {t.home.caseStudiesNav.cta}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
