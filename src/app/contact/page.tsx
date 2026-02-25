'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Linkedin, CheckCircle2, ShieldCheck, ExternalLink, Info } from 'lucide-react';

export default function Contact() {
  const { t, locale } = useLanguage();

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
            {t.contact.title}
          </h1>
          
          <div className="max-w-3xl space-y-16">
            {/* Intro */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-xl text-slate-600 leading-relaxed"
            >
              {t.contact.intro}
            </motion.p>

            {/* When to reach out */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">
                {locale === 'en' ? 'When it makes sense to contact me' : 'Kdy dává smysl se ozvat'}
              </h2>
              <ul className="grid grid-cols-1 gap-4">
                {t.contact.whenToReachOut.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-600 text-lg">
                    <CheckCircle2 className="w-6 h-6 text-slate-900 mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Preferred Channel - LinkedIn Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="relative p-8 bg-slate-900 rounded-2xl text-white overflow-hidden group shadow-xl"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Linkedin className="w-32 h-32" />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">
                  {t.contact.preferredChannel.title}
                </h2>
                <h3 className="text-2xl font-bold mb-4">{t.contact.preferredChannel.label}</h3>
                <p className="text-slate-300 mb-8 text-lg max-w-md">
                  {t.contact.preferredChannel.description}
                </p>
                
                <a 
                  href={t.contact.preferredChannel.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-colors group/link"
                >
                  {t.contact.preferredChannel.value}
                  <ExternalLink className="ml-2 w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* CV Note */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="p-6 bg-slate-50 rounded-xl border border-slate-100"
            >
              <div className="flex gap-4 items-start">
                <Info className="w-6 h-6 text-slate-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{t.contact.cvNote.title}</h3>
                  <p className="text-slate-600">{t.contact.cvNote.description}</p>
                </div>
              </div>
            </motion.div>

            {/* Privacy Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex gap-3 items-start text-slate-400 text-sm"
            >
              <ShieldCheck className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p>{t.contact.privacyNote}</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
