import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Play, 
  Sparkles, 
  Database, 
  Smartphone, 
  Layers, 
  ShieldCheck, 
  Zap, 
  CheckCircle2,
  TrendingUp,
  Cpu
} from 'lucide-react';

interface HeroProps {
  onScrollToPrototype: () => void;
  onScrollToCaseStudy: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToPrototype, onScrollToCaseStudy }) => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const hotspots = [
    {
      id: 'seats',
      label: 'Realtime Seat Engine',
      description: 'Supabase Postgres CDC locks seats instantaneously across web and mobile clients',
      top: '18%',
      left: '16%'
    },
    {
      id: 'chart',
      label: 'Glowing Analytics Bar Chart',
      description: 'Interactive weekly study distribution with reflective ambient lighting',
      top: '55%',
      left: '60%'
    },
    {
      id: 'pwa',
      label: 'PWA Mobile Cache',
      description: 'Zero app store friction, service worker cache-first strategy, and native web push',
      top: '82%',
      left: '28%'
    }
  ];

  return (
    <section id="hero" className="relative pt-28 pb-20 overflow-hidden">
      
      {/* Dynamic Ambient Aurora Background Glows */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-32 -left-32 w-[38rem] h-[38rem] rounded-full bg-gradient-to-br from-amber-500/15 via-amber-600/10 to-transparent blur-3xl animate-pulse" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-40 right-[-10rem] w-[42rem] h-[42rem] rounded-full bg-gradient-to-bl from-amber-600/15 via-yellow-500/10 to-transparent blur-[120px]" 
      />

      {/* Subtle Matrix Dot Grid Background */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.07] bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Screen Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Typographic & Interaction Anchor */}
          <div className="lg:col-span-6 space-y-7">
            
            {/* Editorial Kicker with Live Status Chip */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-stone-900/90 border border-amber-500/30 text-xs shadow-[0_0_15px_rgba(245,158,11,0.15)]"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.9)] animate-ping" />
              <span className="font-semibold text-stone-200">Featured UI/UX Case Study</span>
              <span className="text-stone-600">·</span>
              <span className="font-mono text-amber-400 font-medium">EdTech SaaS & PWA</span>
            </motion.div>

            {/* Display Headline with Radiant Sheen */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.08] text-balance">
                <span className="text-stone-100">Radian Learning</span>{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600">
                  Center Platform
                </span>
              </h1>
            </motion.div>

            {/* Lead Narrative */}
            <motion.p 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-xl font-normal"
            >
              A unified digital ecosystem where students, teachers, and parents track progress in real time. 
              Designed to eliminate chaotic language center spreadsheets through atomic database seat management, 
              interactive student milestone analytics, Supabase Row-Level Security, and an installable PWA.
            </motion.p>

            {/* Tech Wireframe Tags matching the uploaded image */}
            <motion.div 
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-2.5 pt-1"
            >
              {['HTML', 'Tailwind CSS', 'Supabase', 'PWA'].map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wide border border-amber-500/40 bg-stone-900/60 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.18)] hover:border-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all cursor-default"
                >
                  {tech}
                </div>
              ))}
            </motion.div>

            {/* Interactive Feature Pills */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-stone-300"
            >
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-stone-900/40 border border-stone-800/80">
                <div className="w-6 h-6 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0">
                  <Database className="w-3.5 h-3.5" />
                </div>
                <span>Real-time seat countdown engine</span>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-stone-900/40 border border-stone-800/80">
                <div className="w-6 h-6 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
                <span>Student milestone progress charts</span>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-stone-900/40 border border-stone-800/80">
                <div className="w-6 h-6 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <span>Admin CSV roster export & seat tools</span>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-stone-900/40 border border-stone-800/80">
                <div className="w-6 h-6 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0">
                  <Smartphone className="w-3.5 h-3.5" />
                </div>
                <span>Offline-ready PWA & push alerts</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={onScrollToPrototype}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-stone-950 font-extrabold text-sm hover:from-amber-400 hover:to-amber-300 shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_40px_rgba(245,158,11,0.6)] transition-all active:scale-95 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-stone-950" />
                <span>Test Live Prototype</span>
              </button>

              <button
                onClick={onScrollToCaseStudy}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-stone-700/80 bg-stone-900/70 text-stone-200 font-semibold text-sm hover:border-amber-500/50 hover:text-amber-300 hover:bg-stone-900 transition-all active:scale-95 cursor-pointer"
              >
                <span>Explore Design Process</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

          </div>

          {/* Right Column: Hero Visual Chassis featuring user's design asset */}
          <div className="lg:col-span-6 relative">
            
            {/* Outer Glass Bezel with Golden Rim */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl p-3 sm:p-4 bg-stone-900/80 backdrop-blur-2xl border border-amber-500/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] group glow-amber-card"
            >
              
              {/* Browser Window Chrome Top Header */}
              <div className="flex items-center justify-between px-3 py-2.5 border-b border-stone-800/80 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.4)]" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                </div>

                <div className="text-xs font-mono text-stone-400 bg-stone-950/80 px-4 py-1 rounded-lg border border-stone-800 flex items-center gap-2">
                  <span className="text-amber-500 font-bold">https://</span>
                  <span>radian.platform/analytics</span>
                </div>

                <div className="text-[11px] text-amber-400 font-mono font-semibold flex items-center gap-1.5 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/25">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  Live Sync
                </div>
              </div>

              {/* The User's Uploaded Design Graphic */}
              <div className="relative overflow-hidden rounded-2xl bg-stone-950 border border-stone-800 aspect-[4/3] flex items-center justify-center">
                <img 
                  src="/assets/aistudio/image_6ffedbcb.png" 
                  alt="Radian Learning Center Platform UI preview featuring glowing amber analytics and dark dashboard"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle vignette scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Interactive Hotspot Beacons */}
                {hotspots.map((spot) => (
                  <div
                    key={spot.id}
                    style={{ top: spot.top, left: spot.left }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group/spot cursor-pointer"
                    onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                  >
                    <div className="relative flex items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-7 w-7 rounded-full bg-amber-400 opacity-75" />
                      <div className="relative w-5 h-5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 border-2 border-stone-950 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.9)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-950" />
                      </div>
                    </div>

                    {/* Popover Callout */}
                    <div className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-52 p-2.5 rounded-xl bg-stone-950/95 backdrop-blur-md border border-amber-500/40 text-[11px] shadow-2xl transition-all duration-200 pointer-events-none ${
                      activeHotspot === spot.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 group-hover/spot:opacity-100 group-hover/spot:scale-100'
                    }`}>
                      <div className="font-bold text-amber-300">{spot.label}</div>
                      <div className="text-stone-300 text-[10px] mt-0.5 leading-snug">{spot.description}</div>
                    </div>
                  </div>
                ))}

                {/* Bottom Bar: Live Database Connection HUD */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-stone-950/90 backdrop-blur-md border border-amber-500/30 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                      <Database className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-stone-200 font-semibold text-xs">Supabase Realtime Stream</div>
                      <div className="text-stone-400 text-[10px]">Course ENG-801 · <strong>14/15 seats taken</strong></div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-mono text-emerald-400 font-bold block">0ms RLS Lock</span>
                    <span className="text-[9px] text-stone-500">Atomic CDC</span>
                  </div>
                </div>

              </div>

              {/* Ambient Golden Underglow */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-12 bg-amber-500/25 blur-2xl -z-10 rounded-full" />
            </motion.div>

          </div>

        </div>

        {/* High-Impact Proof Metrics Strip */}
        <div className="mt-16 pt-8 border-t border-stone-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 rounded-2xl bg-stone-900/50 border border-stone-800/60 space-y-1 hover:border-amber-500/30 transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono tabular-nums tracking-tight">
              -84%
            </div>
            <div className="text-sm font-bold text-stone-100">
              Enrollment Velocity
            </div>
            <div className="text-xs text-stone-400">
              6.8 min paper to 1.1 min 1-click PWA
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-stone-900/50 border border-stone-800/60 space-y-1 hover:border-amber-500/30 transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono tabular-nums tracking-tight">
              0
            </div>
            <div className="text-sm font-bold text-stone-100">
              Double-Booked Seats
            </div>
            <div className="text-xs text-stone-400">
              100% prevented via atomic Supabase RLS
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-stone-900/50 border border-stone-800/60 space-y-1 hover:border-amber-500/30 transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono tabular-nums tracking-tight">
              94.2%
            </div>
            <div className="text-sm font-bold text-stone-100">
              Milestone Retention
            </div>
            <div className="text-xs text-stone-400">
              Active tracking vs 22% legacy baseline
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-stone-900/50 border border-stone-800/60 space-y-1 hover:border-amber-500/30 transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono tabular-nums tracking-tight">
              &lt; 1.2s
            </div>
            <div className="text-sm font-bold text-stone-100">
              First Paint on 3G
            </div>
            <div className="text-xs text-stone-400">
              PWA Cache-First service worker
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
