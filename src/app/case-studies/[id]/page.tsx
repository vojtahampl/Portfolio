'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { ChevronLeft, Shield, Network, Zap, Settings, Target, CheckCircle2, FileJson, Table, ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import yaml from 'yaml';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false });

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

          {/* Diagram or Image or OpenAPI Spec or Tables */}
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className={(study.openApiSpec || study.tables || study.imageUrl) ? ((study.tables || study.imageUrl) ? "p-8 bg-slate-50 border border-slate-200 rounded-2xl" : "") : "p-12 bg-slate-50 border border-slate-200 border-dashed rounded-xl flex items-center justify-center text-slate-400"}
          >
            {study.monitoringIntro && (
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                {study.monitoringIntro}
              </p>
            )}

            {study.imageUrl ? (
              <div className="w-full space-y-6">
                <div className="flex items-center gap-3">
                  <ImageIcon className="w-5 h-5 text-slate-400" />
                  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                    {t.caseStudies.labels.diagram}
                  </h2>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                  <img 
                    src={study.imageUrl} 
                    alt={study.title} 
                    className="w-full h-auto"
                  />
                </div>
                {study.imageCaption && (
                  <p className="text-sm text-slate-500 leading-relaxed italic px-2">
                    {study.imageCaption}
                  </p>
                )}
              </div>
            ) : study.tables ? (
              <div className="space-y-12">
                {study.tables.map((table, tIdx) => (
                  <div key={tIdx} className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Table className="w-5 h-5 text-slate-400" />
                      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                        {table.title}
                      </h2>
                    </div>
                    <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm max-h-[400px] overflow-y-auto">
                      <table className="w-full text-left border-collapse bg-white sticky-header">
                        <thead className="sticky top-0 z-10">
                          <tr className="bg-slate-900 text-white">
                            {table.headers.map((header, hIdx) => (
                              <th key={hIdx} className="px-4 py-3 text-xs font-bold uppercase tracking-wider border-r border-slate-700 last:border-0">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                          {table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-slate-50 transition-colors">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="px-4 py-3 text-sm text-slate-600 border-r border-slate-100 last:border-0 leading-snug">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            ) : study.openApiSpec ? (
              <div className="w-full space-y-6">
                <div className="flex items-center gap-3">
                  <FileJson className="w-5 h-5 text-slate-400" />
                  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                    API Specification
                  </h2>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm overflow-y-auto max-h-[600px] p-4">
                  <style jsx global>{`
                    .swagger-ui {
                      font-family: inherit;
                    }
                    .swagger-ui .topbar {
                      display: none;
                    }
                    .swagger-ui .info {
                      margin: 20px 0;
                    }
                    .swagger-ui .info .title {
                      color: #0f172a;
                    }
                    .swagger-ui .scheme-container {
                      padding: 0;
                      box-shadow: none;
                      border-bottom: 1px solid #f1f5f9;
                    }
                    .swagger-ui .opblock.opblock-get {
                      background: rgba(15, 23, 42, 0.05);
                      border-color: #0f172a;
                    }
                    .swagger-ui .opblock.opblock-get .opblock-summary-method {
                      background: #0f172a;
                    }
                    .swagger-ui .btn.execute {
                      background-color: #0f172a;
                      border-color: #0f172a;
                    }
                    /* Skrytí varování v konzoli u ModelCollapse v React Strict Mode bohužel nejde úplně jednoduše z CSS, 
                       ale můžeme se pokusit omezit zobrazení Modelů, pokud by to dělalo problémy. */
                    .swagger-ui .model-box {
                      max-width: 100%;
                    }
                  `}</style>
                  <SwaggerUI 
                    spec={yaml.parse(study.openApiSpec)}
                    docExpansion="list"
                    defaultModelsExpandDepth={0}
                  />
                </div>
              </div>
            ) : (
              <div className="text-center">
                <p className="font-medium">{t.caseStudies.labels.diagramPlaceholder}</p>
              </div>
            )}
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
