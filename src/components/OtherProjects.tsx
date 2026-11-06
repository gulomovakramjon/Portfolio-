import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { OTHER_PORTFOLIO_PROJECTS } from '../data/mockData';
import { ArrowUpRight, Sparkles, ExternalLink, ShieldCheck, CheckCircle, FolderGit2 } from 'lucide-react';

export const OtherProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof OTHER_PORTFOLIO_PROJECTS[0] | null>(null);

  return (
    <section id="selected-works" className="scroll-mt-24 pt-24 pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Selected Portfolio Archive</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-100">
              High-Impact Digital Products & Systems
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 mt-2 max-w-2xl">
              Crafted with obsessive attention to user workflows, complex data density, and scalable frontend architecture.
            </p>
          </div>
        </div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OTHER_PORTFOLIO_PROJECTS.map((proj) => {
            const isFlagship = proj.id === 'radian-learning';

            return (
              <motion.div
                key={proj.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedProject(proj)}
                className={`p-6 sm:p-7 rounded-3xl bg-stone-900/90 backdrop-blur-xl border transition-all cursor-pointer flex flex-col justify-between group relative overflow-hidden shadow-xl ${
                  isFlagship 
                    ? 'border-amber-500/50 shadow-[0_0_35px_rgba(245,158,11,0.15)] hover:border-amber-400' 
                    : 'border-stone-800 hover:border-stone-700 hover:bg-stone-900'
                }`}
              >
                {/* Flagship Badge */}
                {isFlagship && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 via-amber-400 to-amber-500 text-stone-950 font-extrabold text-[10px] uppercase tracking-wider px-3.5 py-1 rounded-bl-2xl font-mono shadow-md">
                    Featured Flagship
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between text-xs text-stone-400 mb-3">
                    <span className="font-mono font-bold text-amber-400 bg-stone-950 px-2.5 py-0.5 rounded-lg border border-stone-800">
                      {proj.year}
                    </span>
                    <span className="text-xs text-stone-400 font-medium">{proj.category}</span>
                  </div>

                  <h3 className="text-xl font-bold text-stone-100 group-hover:text-amber-300 transition-colors flex items-center justify-between">
                    <span>{proj.title}</span>
                    <div className="w-8 h-8 rounded-full bg-stone-950 border border-stone-800 flex items-center justify-center group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-amber-400 transition-colors" />
                    </div>
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-400 mt-3 leading-relaxed">
                    {proj.summary}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-stone-800/80">
                  <div className="flex flex-wrap items-center gap-1.5 mb-3.5">
                    {proj.tags.map((t) => (
                      <span 
                        key={t}
                        className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-stone-950 text-stone-300 border border-stone-800/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="text-xs font-mono font-bold text-stone-300 flex items-center justify-between">
                    <span>{proj.stats}</span>
                    <span className="text-amber-400 group-hover:underline text-[11px]">Inspect Case Study →</span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Project Spec Quick Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg rounded-3xl bg-stone-900 border border-amber-500/40 p-7 shadow-2xl space-y-5 text-stone-100"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-mono text-amber-400 font-bold">{selectedProject.year} · {selectedProject.category}</span>
                  <h3 className="text-2xl font-bold text-stone-100 mt-1">{selectedProject.title}</h3>
                  <span className="text-xs text-stone-400">Role: {selectedProject.role}</span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-stone-400 hover:text-stone-200 text-sm font-bold p-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {selectedProject.summary}
              </p>

              <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-2.5 text-xs">
                <div className="flex justify-between text-stone-400">
                  <span>Verified Impact:</span>
                  <span className="font-mono text-amber-400 font-bold">{selectedProject.stats}</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>Core Stack:</span>
                  <span className="text-stone-200 font-medium">{selectedProject.tags.join(' · ')}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-200 cursor-pointer"
                >
                  Close Spec
                </button>
                {selectedProject.id === 'radian-learning' && (
                  <a
                    href="#prototype"
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2 rounded-xl text-xs font-bold bg-amber-500 text-stone-950 hover:bg-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                  >
                    Jump to Prototype
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
