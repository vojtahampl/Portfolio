'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Award, Briefcase, Target, MapPin, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

export default function About() {
  const { t, locale } = useLanguage();

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
      <section className="py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-12">
            {t.about.title}
          </h1>
          
          {/* Summary Section */}
          <div className="space-y-8">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">
              {t.about.sections.summary}
            </h2>
            <div className="space-y-6">
              {t.about.summaryParagraphs.map((paragraph, index) => (
                <p key={index} className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* What I work on Section */}
          <div className="mt-20">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">
              {t.about.sections.work}
            </h2>
            <ul className="space-y-4 max-w-3xl">
              {t.about.workItems.map((workItem, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-600 text-lg">
                  <CheckCircle2 className="w-6 h-6 text-slate-900 mt-0.5 flex-shrink-0" />
                  <span>{workItem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Focus Section */}
          <div className="mt-20">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">
              {t.about.sections.focus}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
              {t.about.coreFocusAreas.map((area, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <Target className="w-5 h-5 text-slate-900" />
                  <span className="font-medium text-slate-900">{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mt-20">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">
              {t.about.sections.certifications}
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-3xl">
              {locale === 'en' 
                ? 'I continuously invest in both architectural breadth and technical depth across architecture, security and integration.'
                : 'Průběžně investuji do architektonického rozhledu i technické hloubky napříč architekturou, bezpečností a integracemi.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.about.certifications.map((cert, index) => (
                <div key={index} className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-slate-900 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-slate-900 leading-tight mb-1">{cert.title}</h3>
                      <p className="text-sm text-slate-500">{cert.issuer} • {cert.issued}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="mt-20">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">
              {t.about.sections.experience}
            </h2>
            <div className="space-y-12">
              {t.about.experience.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-slate-100">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-200 border-2 border-white" />
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                      <h3 className="text-2xl font-bold text-slate-900">{exp.role}</h3>
                      <span className="text-slate-300">|</span>
                      <span className="text-lg font-semibold text-slate-600">{exp.company}</span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      {exp.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      )}
                    </div>
                  </div>

                  {exp.summary && (
                    <p className="text-slate-600 mb-4 leading-relaxed max-w-2xl">
                      {exp.summary}
                    </p>
                  )}

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="flex items-start gap-2 text-slate-600">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.note && (
                    <p className="text-sm italic text-slate-500 border-l-2 border-slate-100 pl-4 py-1">
                      {exp.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
