import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Send, Sparkles, Layers, ArrowUpRight, GitBranch, ArrowLeft } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onOpenContact: () => void;
  onOpenGitExport?: () => void;
  onBackToPortfolio?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  isDarkMode, 
  onToggleTheme, 
  onOpenContact,
  onOpenGitExport,
  onBackToPortfolio 
}) => {
  const [activeNav, setActiveNav] = useState('prototype');

  const navLinks = [
    { id: 'prototype', label: 'Interactive Prototype', href: '#prototype' },
    { id: 'case-study', label: 'Case Study', href: '#case-study' },
    { id: 'design-system', label: 'Design System', href: '#design-system' },
    { id: 'workflow', label: 'UX Workflow', href: '#workflow' },
    { id: 'selected-works', label: 'Selected Works', href: '#selected-works' },
  ];

  return (
    <header className="fixed top-3 inset-x-0 z-50 px-4 sm:px-6 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 p-2 rounded-2xl backdrop-blur-xl bg-stone-950/85 dark:bg-stone-950/85 light-surface:bg-white/90 border border-amber-500/20 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.6),0_0_20px_rgba(245,158,11,0.1)] pointer-events-auto transition-all duration-300">
        
        {/* Zone 1: Stylized Monogram Brand Wordmark + Back to Portfolio Button */}
        <div className="flex items-center gap-1.5 shrink-0">
          {onBackToPortfolio && (
            <motion.button
              whileTap={{ scale: 0.94 }}
              onClick={onBackToPortfolio}
              className="px-3 py-1.5 rounded-xl bg-stone-900 border border-stone-800 hover:border-amber-500/50 text-stone-200 hover:text-amber-300 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
              title="Return to Akramjon's Main Portfolio"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Portfolio</span>
            </motion.button>
          )}

          <a 
            href="#hero" 
            className="flex items-center gap-2 px-1.5 py-1 group shrink-0"
          >

          {/* Custom Crafted Monogram Badge */}
          <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 p-[1px] shadow-[0_0_15px_rgba(245,158,11,0.4)] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.6)] transition-all">
            <div className="w-full h-full bg-stone-950 rounded-[11px] flex items-center justify-center">
              <span className="font-mono font-extrabold text-xs text-amber-400 tracking-tighter">
                AG
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-bold tracking-tight text-stone-100 group-hover:text-amber-400 transition-colors whitespace-nowrap">
              Akramjon Gulomov
            </span>
            <span className="text-[10px] text-amber-400/90 font-mono flex items-center gap-1.5 whitespace-nowrap">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500" />
              </span>
              Product Designer
            </span>
          </div>
        </a>
      </div>

      {/* Zone 2: 4-5 single-line clean nav links with Motion sliding pill */}

        <nav className="hidden lg:flex items-center gap-1 text-xs font-medium text-stone-400">
          {navLinks.map((link) => {
            const isActive = activeNav === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveNav(link.id)}
                className={`relative px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  isActive 
                    ? 'text-amber-300 font-semibold' 
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900/60'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbarActivePill"
                    className="absolute inset-0 bg-amber-500/15 border border-amber-500/30 rounded-lg -z-10 shadow-[0_0_12px_rgba(245,158,11,0.2)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Actions + Theme Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          
          {/* Git Export Action */}
          {onOpenGitExport && (
            <motion.button
              whileTap={{ scale: 0.94 }}
              onClick={onOpenGitExport}
              aria-label="Export to Git"
              className="px-3 py-1.5 rounded-xl border border-stone-800 bg-stone-900/80 hover:bg-stone-900 text-stone-300 hover:text-amber-400 hover:border-amber-500/40 transition-all duration-200 shadow-sm flex items-center gap-1.5 text-xs font-mono"
              title="Export project to Git / Download bundle"
            >
              <GitBranch className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Git Export</span>
            </motion.button>
          )}

          {/* Visual Theme Toggle */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={onToggleTheme}
            aria-label="Toggle visual theme"
            className="p-2 rounded-xl border border-stone-800 bg-stone-900/80 text-stone-300 hover:text-amber-400 hover:border-amber-500/40 transition-all duration-200 shadow-sm"
            title={isDarkMode ? 'Switch to Light Studio Theme' : 'Switch to Signature Dark Amber Theme'}
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-amber-400 rotate-0 transition-transform duration-300" />
            ) : (
              <Moon className="w-4 h-4 text-stone-300 -rotate-12 transition-transform duration-300" />
            )}
          </motion.button>

          {/* Primary Action: Contact Designer */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenContact}
            className="relative group overflow-hidden px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-stone-950 font-bold text-xs shadow-[0_0_20px_rgba(245,158,11,0.35)] hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <Send className="w-3.5 h-3.5 shrink-0" />
            <span className="relative z-10">Get in Touch</span>
          </motion.button>

        </div>

      </div>
    </header>
  );
};

