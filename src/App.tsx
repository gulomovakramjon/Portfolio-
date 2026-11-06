import React, { useState, useEffect } from 'react';
import { MainPortfolio } from './components/MainPortfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PrototypeViewer } from './components/PrototypeViewer';
import { CaseStudyDocumentation } from './components/CaseStudyDocumentation';
import { OtherProjects } from './components/OtherProjects';
import { ContactModal } from './components/ContactModal';
import { GitExportModal } from './components/GitExportModal';
import { Footer } from './components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState<'portfolio' | 'radian'>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('radian') || hash.includes('prototype') || hash.includes('case-study')) {
        return 'radian';
      }
    }
    return 'portfolio'; // Default to Akramjon Gulomov's main portfolio
  });

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('radian_portfolio_theme');
      if (saved) return saved === 'dark';
    }
    return true; // Default to dark amber signature theme
  });

  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [isGitExportOpen, setIsGitExportOpen] = useState<boolean>(false);

  // Sync hash routing and browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('radian') || hash.includes('prototype') || hash.includes('case-study')) {
        setCurrentView('radian');
      } else {
        setCurrentView('portfolio');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('radian_portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('radian_portfolio_theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const handleOpenRadian = () => {
    setCurrentView('radian');
    window.location.hash = '#/radian';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToPortfolio = () => {
    setCurrentView('portfolio');
    window.location.hash = '#/work';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans transition-colors duration-200">
      
      {currentView === 'portfolio' ? (
        /* 1. Main Portfolio: Akramjon Gulomov's Full Website */
        <MainPortfolio 
          onOpenRadianProject={handleOpenRadian}
          onOpenGitExport={() => setIsGitExportOpen(true)}
        />
      ) : (
        /* 2. Specific Connected Project: Radian Learning Center Interactive Deep Dive */
        <div className="min-h-screen bg-stone-100 dark:bg-stone-950 text-stone-900 dark:text-stone-100 flex flex-col">
          {/* Top Navbar with "← Back to Portfolio" Button */}
          <Navbar 
            isDarkMode={isDarkMode} 
            onToggleTheme={toggleTheme} 
            onOpenContact={() => setIsContactOpen(true)}
            onOpenGitExport={() => setIsGitExportOpen(true)}
            onBackToPortfolio={handleBackToPortfolio}
          />

          {/* Main Showcase Content */}
          <main className="flex-1">
            {/* Split Screen Hero with Asset Preview & Metrics */}
            <Hero 
              onScrollToPrototype={() => scrollToSection('prototype')} 
              onScrollToCaseStudy={() => scrollToSection('case-study')} 
            />

            {/* High-Fidelity Interactive Prototype Suite */}
            <PrototypeViewer />

            {/* 5-Chapter Comprehensive Case Study Documentation */}
            <CaseStudyDocumentation />

            {/* Selected Works Bento Grid */}
            <OtherProjects />
          </main>

          {/* Showcase Footer */}
          <Footer onOpenGitExport={() => setIsGitExportOpen(true)} />
        </div>
      )}

      {/* Interactive Contact Modal accessible across both pages */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />

      {/* Interactive Git Export Modal (Downloads ZIP or pushes both to GitHub) */}
      <GitExportModal
        isOpen={isGitExportOpen}
        onClose={() => setIsGitExportOpen(false)}
      />

    </div>
  );
}
