'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CaseStudies() {
  const { t, locale, caseStudies } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            {t.caseStudies.title}
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            {t.caseStudies.intro}
          </p>
        </motion.div>
      </section>

      <section className="pb-20">
        <div className="grid grid-cols-1 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative bg-white border border-slate-200 rounded-xl p-8 hover:border-slate-400 transition-all shadow-sm hover:shadow-md"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors">
                    {study.title}
                  </h2>
                  <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl line-clamp-2">
                    {study.shortDescription}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {study.tech.map((item) => (
                      <span key={item} className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-50 text-slate-600 border border-slate-100 uppercase tracking-wider">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0 md:pt-1">
                  <div className="inline-flex items-center text-sm font-bold text-slate-900 group-hover:translate-x-1 transition-transform">
                    {locale === 'en' ? 'Read full case study' : 'Přečíst celou případovou studii'}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
              {/* Overlay link for whole card */}
              <Link href={`/case-studies/${study.id}`} className="absolute inset-0 z-0">
                <span className="sr-only">{locale === 'en' ? 'Read full case study' : 'Přečíst celou případovou studii'} {study.title}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
