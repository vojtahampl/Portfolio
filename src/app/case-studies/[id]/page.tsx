'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { ChevronLeft, Shield, Network, Zap, Settings, Target, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CaseStudyDetail() {
  const params = useParams();
  const router = useRouter();
  const { t, caseStudies } = useLanguage();
  
  const study = React.useMemo(() => caseStudies.find(s => s.id === params.id), [caseStudies, params.id]);

  if (!study) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Case study not found</h1>
        <button 
          onClick={() => router.push('/case-studies')}
          className="mt-4 text-slate-600 hover:text-slate-900"
        >
          Back to case studies
        </button>
      </div>
    );
  }

  const sections = [
    { label: t.caseStudies.labels.context, content: study.context, icon: Target },
    { label: t.caseStudies.labels.problem, content: study.problem, icon: Zap },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <button 
          onClick={() => router.push('/case-studies')}
          className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-12 group"
        >
          <ChevronLeft className="mr-1 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {t.caseStudies.title}
        </button>

        <header className="mb-16">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            {study.title}
          </h1>
          <p className="mt-6 text-xl text-slate-600 leading-relaxed italic border-l-4 border-slate-200 pl-6">
            {study.shortDescription}
          </p>
        </header>

        <div className="space-y-16">
          {sections.map((section, idx) => (
            <motion.section 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <section.icon className="w-5 h-5 text-slate-400" />
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                  {section.label}
                </h2>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                {section.content}
              </p>
            </motion.section>
          ))}

          {/* Constraints */}
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Network className="w-5 h-5 text-slate-400" />
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                {t.caseStudies.labels.constraints}
              </h2>
            </div>
            <ul className="space-y-3">
              {study.constraints.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 text-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 flex-shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* My Role and Solution */}
          {[
            { label: t.caseStudies.labels.role, content: study.role, icon: Settings },
            { label: t.caseStudies.labels.solution, content: study.solution, icon: Shield },
          ].map((section, idx) => (
            <motion.section 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <section.icon className="w-5 h-5 text-slate-400" />
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                  {section.label}
                </h2>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                {section.content}
              </p>
            </motion.section>
          ))}

          {/* Diagram Placeholder */}
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="p-12 bg-slate-50 border border-slate-200 border-dashed rounded-xl flex items-center justify-center text-slate-400"
          >
            <div className="text-center">
              <p className="font-medium">{t.caseStudies.labels.diagramPlaceholder}</p>
            </div>
          </motion.section>

          {/* Key Decisions and Outcome */}
          <div className="space-y-16">
            <motion.section
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-5 h-5 text-slate-400" />
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                  {t.caseStudies.labels.keyDecisions}
                </h2>
              </div>
              <ul className="space-y-3">
                {study.keyDecisions.map((d, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 text-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2.5 flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-5 h-5 text-slate-400" />
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                  {t.caseStudies.labels.outcome}
                </h2>
              </div>
              <ul className="space-y-3">
                {study.outcomeKpis.map((kpi, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 text-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2.5 flex-shrink-0" />
                    {kpi}
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="pt-12 border-t border-slate-100"
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">
              {t.caseStudies.labels.tech}
            </h2>
            <div className="flex flex-wrap gap-2">
              {study.tech.map((techItem) => (
                <span key={techItem} className="px-3 py-1 rounded-md text-sm font-medium bg-slate-900 text-white">
                  {techItem}
                </span>
              ))}
            </div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
}
