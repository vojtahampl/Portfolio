'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { FileCode, Layout, Network, Activity, ArrowRight } from 'lucide-react';

const iconMap: Record<string, any> = {
  'reverse-proxy-identity': Layout,
  'contract-first-api': FileCode,
  'network-first-onboarding': Network,
  'operational-monitoring': Activity,
};

export default function Patterns() {
  const { t, patterns = [], locale } = useLanguage();

  if (!patterns || patterns.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-xl font-bold text-slate-400">{t.patterns.title}</h2>
        <p className="mt-4 text-slate-500">No patterns available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl"
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            {t.patterns.title}
          </h1>
          <h2 className="mt-6 text-xl md:text-2xl text-slate-600 leading-relaxed font-normal">
            {t.patterns.subtitle}
          </h2>
          <p className="mt-8 text-lg text-slate-500 leading-relaxed italic border-l-4 border-slate-200 pl-6">
            {t.patterns.intro}
          </p>
        </motion.div>
      </section>

      <section className="pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {patterns.map((pattern, index) => {
            const Icon = (pattern.id && iconMap[pattern.id]) || Layout;
            return (
              <motion.div
                key={pattern.id || index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm flex flex-col h-full"
              >
                <div className="h-10 w-10 rounded-lg bg-slate-50 flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">{pattern.title}</h3>
                
                <div className="space-y-6 flex-grow">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                      {locale === 'en' ? 'What it is' : 'Co to je'}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {pattern.what}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                      {locale === 'en' ? 'When to use' : 'Kdy použít'}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {pattern.whenToUse}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                      {locale === 'en' ? 'Why it matters' : 'Proč na tom záleží'}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {pattern.whyItMatters}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
