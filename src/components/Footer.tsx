import React from 'react';
import { ArrowUp, GitBranch } from 'lucide-react';

interface FooterProps {
  onOpenGitExport?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGitExport }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-stone-200 dark:border-stone-800/80 bg-stone-100 dark:bg-stone-950 py-12 text-stone-600 dark:text-stone-400 text-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Copyright */}
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-stone-900 dark:text-stone-200 font-bold flex items-center justify-center sm:justify-start gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span>Akramjon Gulomov</span>
            <span className="text-stone-500 font-normal">· Product Design Portfolio</span>
          </div>
          <p className="text-stone-500 text-[11px]">
            Radian Learning Center Platform Case Study. Designed with HTML, Tailwind CSS, Supabase & PWA architectures.
          </p>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-stone-600 dark:text-stone-400">
          <a href="#prototype" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Prototype</a>
          <span className="text-stone-400 dark:text-stone-700">·</span>
          <a href="#case-study" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Case Study</a>
          <span className="text-stone-400 dark:text-stone-700">·</span>
          <a href="#design-system" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Design System</a>
          <span className="text-stone-400 dark:text-stone-700">·</span>
          <a href="#selected-works" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Selected Works</a>
          {onOpenGitExport && (
            <>
              <span className="text-stone-400 dark:text-stone-700">·</span>
              <button 
                onClick={onOpenGitExport}
                className="hover:text-amber-400 text-amber-500/90 font-medium flex items-center gap-1 cursor-pointer transition-colors"
              >
                <GitBranch className="w-3 h-3" />
                <span>Export to Git</span>
              </button>
            </>
          )}
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-300 dark:border-stone-800 bg-white dark:bg-stone-900/60 text-stone-700 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-500/40 transition-colors shadow-sm cursor-pointer"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};

