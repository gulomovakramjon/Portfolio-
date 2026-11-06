import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAS, BEFORE_AFTER_METRICS } from '../data/mockData';
import { 
  Compass, 
  GitFork, 
  Palette, 
  CheckCircle, 
  Code, 
  Copy, 
  Check, 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  Users,
  Smartphone,
  Sparkles,
  Zap,
  ArrowLeftRight,
  Database,
  SlidersHorizontal,
  FileCode2,
  Workflow
} from 'lucide-react';

export const CaseStudyDocumentation: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState<'discovery' | 'ia' | 'tokens' | 'usability' | 'architecture'>('discovery');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [activeRoleFilter, setActiveRoleFilter] = useState<'student' | 'parent' | 'admin'>('student');
  const [beforeAfterMode, setBeforeAfterMode] = useState<'after' | 'before'>('after');

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const COLOR_TOKENS = [
    { name: 'Obsidian Deep', hex: '#09090B', role: '60% Dominant Base Canvas', preview: 'bg-[#09090B]' },
    { name: 'Card Surface', hex: '#1C1917', role: '30% Glass Container Elevation', preview: 'bg-stone-900' },
    { name: 'Warm Amber', hex: '#F59E0B', role: '10% Primary Action & Glows', preview: 'bg-amber-500' },
    { name: 'Golden Sun', hex: '#FBBF24', role: 'Milestones & Active Peaks', preview: 'bg-amber-400' },
    { name: 'Verified Green', hex: '#10B981', role: 'Real-Time Sync & Instructors', preview: 'bg-emerald-500' },
    { name: 'Platinum Text', hex: '#F5F5F4', role: 'Display Headings & Prose', preview: 'bg-stone-100' },
  ];

  return (
    <section id="case-study" className="scroll-mt-24 pt-24 pb-20 bg-stone-950/70 border-t border-stone-800/80 relative overflow-hidden">
      
      {/* Background ambient light */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-0 w-96 h-96 rounded-full bg-amber-500/5 blur-[120px]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>Design Process & Architecture Documentation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-100 leading-tight">
            From Language Center Spreadsheets to Real-Time PWA
          </h2>
          <p className="text-sm sm:text-base text-stone-400 mt-2.5 leading-relaxed">
            A comprehensive design documentation detailing user discovery, multi-role information architecture, 
            design system token creation, iterative usability validation, and full engineering handoff for Supabase & PWA.
          </p>
        </div>

        {/* Process Chapter Navigation Tabs with Sliding Motion */}
        <div className="flex items-center gap-2 p-1.5 bg-stone-900/90 rounded-2xl border border-stone-800 mb-10 overflow-x-auto shadow-lg">
          {[
            { id: 'discovery', label: '01. Discovery & Research', icon: Compass },
            { id: 'ia', label: '02. Architecture & Data Flow', icon: GitFork },
            { id: 'tokens', label: '03. Design System & Tokens', icon: Palette },
            { id: 'usability', label: '04. Usability & Validation', icon: CheckCircle },
            { id: 'architecture', label: '05. Supabase & PWA Handoff', icon: Code },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeChapter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveChapter(tab.id as any)}
                className={`relative flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  isActive ? 'text-stone-950 font-extrabold' : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="chapterActiveTab"
                    className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-400 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className={`w-3.5 h-3.5 relative z-10 ${isActive ? 'text-stone-950' : 'text-amber-400'}`} />
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* CHAPTER CONTENT CONTAINER */}
        <div className="p-6 sm:p-10 rounded-3xl bg-stone-900/75 backdrop-blur-xl border border-stone-800 shadow-2xl relative overflow-hidden">
          
          {/* CHAPTER 1: Discovery & Research */}
          {activeChapter === 'discovery' && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-10"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-100">
                  The Problem Space: Operational Gridlock in a Growing Language Academy
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed max-w-4xl">
                  Before the Radian platform was designed, the language academy operated on decentralized Google Sheets, paper index cards, and ad-hoc WhatsApp broadcast groups. During seasonal registration intakes, three severe operational bottlenecks emerged:
                </p>
              </div>

              {/* 3 Core Pain Points Grid with Styled Numbers */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-stone-950/80 border border-amber-500/20 space-y-3 relative group hover:border-amber-500/40 transition-all">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-400 font-mono font-bold flex items-center justify-center text-xs">
                    01
                  </div>
                  <h4 className="text-sm font-bold text-stone-100">Seat Concurrency & Double-Bookings</h4>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Multiple parents paid deposits simultaneously over chat while Google Sheets lagged. In 14 recorded instances, a 15th seat was sold to two separate students, causing intense customer friction and refund disputes.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-stone-950/80 border border-amber-500/20 space-y-3 relative group hover:border-amber-500/40 transition-all">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-400 font-mono font-bold flex items-center justify-center text-xs">
                    02
                  </div>
                  <h4 className="text-sm font-bold text-stone-100">Opaque Student Milestone Velocity</h4>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Students had no central visibility into which essay drafts were graded or how their IELTS band scores were trending. Only 22% of homework tasks were completed on time due to scattered Telegram PDF attachments.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-stone-950/80 border border-amber-500/20 space-y-3 relative group hover:border-amber-500/40 transition-all">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-400 font-mono font-bold flex items-center justify-center text-xs">
                    03
                  </div>
                  <h4 className="text-sm font-bold text-stone-100">Administrative Fatigue & Audit Risks</h4>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Lead instructors spent 8.5 hours weekly manually copying attendance marks into spreadsheet rosters for billing and certificate accreditation audits, leading to severe burnout.
                  </p>
                </div>
              </div>

              {/* User Personas */}
              <div className="pt-6 border-t border-stone-800">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="text-lg font-bold text-stone-100">
                      Triangulated User Personas: Student, Parent & Admin
                    </h4>
                    <p className="text-xs text-stone-400">Deep empathy interviews conducted across 14 academy stakeholders</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {PERSONAS.map((persona) => (
                    <div 
                      key={persona.id}
                      className="p-6 rounded-3xl bg-stone-950/90 border border-stone-800 space-y-4 flex flex-col justify-between hover:border-amber-500/30 transition-all shadow-md"
                    >
                      <div className="space-y-3.5">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl p-2.5 rounded-2xl bg-stone-900 border border-stone-800">
                            {persona.avatar}
                          </span>
                          <div>
                            <div className="text-sm font-bold text-stone-100">{persona.name}</div>
                            <div className="text-xs text-amber-400 font-mono">{persona.role}</div>
                          </div>
                        </div>

                        <blockquote className="text-xs italic text-stone-300 border-l-2 border-amber-500/80 pl-3 py-1">
                          "{persona.quote}"
                        </blockquote>

                        <div className="space-y-2.5 text-xs">
                          <div>
                            <strong className="text-stone-300 block mb-1">Primary Goals:</strong>
                            <ul className="list-disc list-inside text-stone-400 space-y-1">
                              {persona.goals.map((g, i) => <li key={i}>{g}</li>)}
                            </ul>
                          </div>

                          <div className="pt-1.5">
                            <strong className="text-amber-400 block mb-1">Solved in Radian UX:</strong>
                            <ul className="list-disc list-inside text-stone-200 space-y-1">
                              {persona.solvedWith.map((s, i) => <li key={i}>{s}</li>)}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-stone-800/80 text-[11px] font-mono text-stone-500">
                        {persona.archetype}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* CHAPTER 2: Architecture & Data Flow */}
          {activeChapter === 'ia' && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-10"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-100">
                  Information Architecture & Data Flow
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed max-w-3xl">
                  Radian unifies three distinct roles around an authoritative PostgreSQL database in Supabase. 
                  Below is the end-to-end user journey mapping from prospective registration to active semester retention.
                </p>
              </div>

              {/* Visual User Journey Pipeline */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-stone-950 border border-stone-800 space-y-2">
                  <span className="w-8 h-8 rounded-xl bg-amber-500 text-stone-950 font-bold flex items-center justify-center text-xs font-mono">
                    01
                  </span>
                  <h4 className="text-xs font-bold text-stone-200">Course Discovery</h4>
                  <p className="text-[11px] text-stone-400 leading-relaxed">
                    Student/Parent views live course offerings. PostgreSQL CDC streams real-time seat counts over WebSockets.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-stone-950 border border-stone-800 space-y-2">
                  <span className="w-8 h-8 rounded-xl bg-amber-500 text-stone-950 font-bold flex items-center justify-center text-xs font-mono">
                    02
                  </span>
                  <h4 className="text-xs font-bold text-stone-200">Atomic Seat Lock</h4>
                  <p className="text-[11px] text-stone-400 leading-relaxed">
                    User reserves seat. Supabase executes row lock check preventing concurrent race conditions.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-stone-950 border border-stone-800 space-y-2">
                  <span className="w-8 h-8 rounded-xl bg-amber-500 text-stone-950 font-bold flex items-center justify-center text-xs font-mono">
                    03
                  </span>
                  <h4 className="text-xs font-bold text-stone-200">PWA Onboarding</h4>
                  <p className="text-[11px] text-stone-400 leading-relaxed">
                    1-click PWA home screen installation. Service worker caches offline milestones and registers push notifications.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-stone-950 border border-stone-800 space-y-2">
                  <span className="w-8 h-8 rounded-xl bg-amber-500 text-stone-950 font-bold flex items-center justify-center text-xs font-mono">
                    04
                  </span>
                  <h4 className="text-xs font-bold text-stone-200">Milestone Loop</h4>
                  <p className="text-[11px] text-stone-400 leading-relaxed">
                    Teacher Elena grades submissions. Live push alert fires, weekly study bar chart recalculates, parent views verification badge.
                  </p>
                </div>
              </div>

              {/* Role Permissions Matrix */}
              <div className="p-6 rounded-3xl bg-stone-950 border border-stone-800 space-y-4">
                <h4 className="text-sm font-bold text-stone-200 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Role-Based Access Control (RBAC) Matrix</span>
                </h4>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-stone-800 text-stone-400 font-mono">
                        <th className="pb-3">Feature Domain</th>
                        <th className="pb-3">Student</th>
                        <th className="pb-3">Parent / Sponsor</th>
                        <th className="pb-3">Teacher</th>
                        <th className="pb-3">Center Admin</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-800/60 text-stone-300">
                      <tr>
                        <td className="py-3 font-semibold text-stone-200">Live Seat Booking</td>
                        <td>Reserve own seat</td>
                        <td>Reserve on behalf</td>
                        <td>View vacancies</td>
                        <td className="text-amber-400 font-bold">Override / Edit capacity</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold text-stone-200">Milestones & Grades</td>
                        <td>Submit homework / view</td>
                        <td>Read-only verified view</td>
                        <td className="text-amber-400 font-bold">Grade & verify</td>
                        <td>Full audit history</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold text-stone-200">CSV Roster Export</td>
                        <td className="text-stone-600">No access</td>
                        <td className="text-stone-600">No access</td>
                        <td>Class attendance CSV</td>
                        <td className="text-amber-400 font-bold">Full accounting CSV</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold text-stone-200">Offline PWA Sync</td>
                        <td>Full cache access</td>
                        <td>Portal view</td>
                        <td>Attendance check-in</td>
                        <td>Cached roster access</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* CHAPTER 3: Design System & Tokens */}
          {activeChapter === 'tokens' && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-10"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-100">
                  Visual Design System: The Obsidian & Amber Palette
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed max-w-3xl">
                  Rooted in academic warmth and high-focus night study environments. 
                  The 60-30-10 distribution utilizes rich Obsidian `#09090B` for eye comfort during late-night exam prep, 
                  punctuated by luminous Amber `#F59E0B` to highlight time-sensitive seat deadlines and milestones.
                </p>
              </div>

              {/* Color Swatch Tokens with One-Click Copy */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {COLOR_TOKENS.map((token) => (
                  <div 
                    key={token.hex}
                    onClick={() => handleCopyHex(token.hex)}
                    className="p-3.5 rounded-2xl bg-stone-950 border border-stone-800 hover:border-amber-500/50 transition-all cursor-pointer group shadow-sm"
                  >
                    <div className={`w-full h-16 rounded-xl mb-3 ${token.preview} border border-stone-700/50 flex items-center justify-center`}>
                      <span className="text-[11px] font-mono font-bold text-stone-900 group-hover:scale-110 transition-transform">
                        {copiedHex === token.hex ? '✓ Copied' : ''}
                      </span>
                    </div>

                    <div className="text-xs font-bold text-stone-200">{token.name}</div>
                    <div className="text-[11px] font-mono text-amber-400 flex items-center justify-between mt-1">
                      <span>{token.hex}</span>
                      <Copy className="w-3 h-3 text-stone-500 group-hover:text-amber-400" />
                    </div>
                    <div className="text-[10px] text-stone-400 mt-1 line-clamp-2 leading-tight">
                      {token.role}
                    </div>
                  </div>
                ))}
              </div>

              {/* Typography & Spatial Rules */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-6 rounded-3xl bg-stone-950 border border-stone-800 space-y-3">
                  <h4 className="text-sm font-bold text-stone-200">Typographic Hierarchy & Tabular Math</h4>
                  <ul className="text-xs text-stone-300 space-y-2.5">
                    <li className="flex items-start gap-2.5">
                      <span className="text-amber-400 font-mono font-bold shrink-0">Display:</span>
                      <span><strong>Plus Jakarta Sans</strong> (32px–48px) for commanding, friendly headings with tight tracking (`tracking-tight`).</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-amber-400 font-mono font-bold shrink-0">Data/Seats:</span>
                      <span><strong>JetBrains Mono</strong> (`tabular-nums`) ensuring seat counts like `14/15` and test scores `8.5` align vertically without jitter.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-amber-400 font-mono font-bold shrink-0">Body:</span>
                      <span>14px–15px with relaxed 1.6 line height for effortless long-form lesson plans and essay remarks.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-3xl bg-stone-950 border border-stone-800 space-y-3">
                  <h4 className="text-sm font-bold text-stone-200">Anti-Slop Discipline & Tactile Depth</h4>
                  <ul className="text-xs text-stone-300 space-y-2.5">
                    <li className="flex items-start gap-2.5">
                      <span className="text-amber-400 font-mono font-bold shrink-0">Zero Pills:</span>
                      <span>Informational metadata is styled as quiet unboxed text separated by typographic middots (`·`).</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-amber-400 font-mono font-bold shrink-0">Single Depth:</span>
                      <span>1 level of card elevation; no nested card-in-a-card inception; separation achieved through generous 2rem margins.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-amber-400 font-mono font-bold shrink-0">Glow Control:</span>
                      <span>Amber glow shadows reserved strictly for urgent status (1 seat remaining) and user-interactive chart selections.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {/* CHAPTER 4: Usability & Validation */}
          {activeChapter === 'usability' && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-10"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-100">
                  Usability Iterations & Quantitative Validation
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed max-w-3xl">
                  Radian went through two rigorous rounds of hallway usability testing with 14 active language academy students and 3 faculty coordinators.
                </p>
              </div>

              {/* Interactive Before vs After Toggle */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-stone-950 border border-stone-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-300">
                  <ArrowLeftRight className="w-4 h-4 text-amber-400" />
                  <span>Interactive Iteration Comparison:</span>
                </div>
                <div className="flex items-center gap-1 bg-stone-900 p-1 rounded-xl border border-stone-800">
                  <button
                    onClick={() => setBeforeAfterMode('before')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      beforeAfterMode === 'before' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'text-stone-400'
                    }`}
                  >
                    V1 Legacy Prototype
                  </button>
                  <button
                    onClick={() => setBeforeAfterMode('after')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      beforeAfterMode === 'after' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'text-stone-400'
                    }`}
                  >
                    V2 Radian Production Design
                  </button>
                </div>
              </div>

              {/* Usability Iteration Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`p-6 rounded-3xl border transition-all ${
                  beforeAfterMode === 'before' ? 'bg-rose-950/20 border-rose-500/50 ring-1 ring-rose-500/30' : 'bg-stone-950 border-stone-800'
                }`}>
                  <span className="text-rose-400 font-mono text-xs font-bold block mb-1">V1 Prototype Flaw</span>
                  <h4 className="text-base font-bold text-stone-100">Seats Hidden in Deep Accordions</h4>
                  <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                    Available seats were tucked inside an expandable drawer. Users took an average of 42 seconds just looking for whether a course was still open.
                  </p>
                  <div className="mt-4 text-xs font-mono text-rose-300 bg-rose-950/60 p-2.5 rounded-xl border border-rose-900/60">
                    Result: 42% user hesitation at registration step
                  </div>
                </div>

                <div className={`p-6 rounded-3xl border transition-all ${
                  beforeAfterMode === 'after' ? 'bg-emerald-950/25 border-emerald-500/60 ring-1 ring-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.15)]' : 'bg-stone-950 border-stone-800'
                }`}>
                  <span className="text-emerald-400 font-mono text-xs font-bold block mb-1">V2 Design Remedy</span>
                  <h4 className="text-base font-bold text-stone-100">Live Scarcity Badging on Course Cards</h4>
                  <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                    Elevated open seat inventory directly to the top-right corner of each course card with real-time countdown progress bars. Added automated "1 Seat Remaining!" amber glow when threshold dips to 1.
                  </p>
                  <div className="mt-4 text-xs font-mono text-emerald-300 bg-emerald-950/60 p-2.5 rounded-xl border border-emerald-900/60">
                    Result: 64% lift in checkout completions within 90 seconds
                  </div>
                </div>
              </div>

              {/* Quantitative Metrics Table */}
              <div className="pt-6 border-t border-stone-800">
                <h4 className="text-sm font-bold text-stone-200 mb-4">
                  Verified Operational Benchmarks
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {BEFORE_AFTER_METRICS.map((item, idx) => (
                    <div 
                      key={idx}
                      className={`p-5 rounded-2xl bg-stone-950 border ${
                        item.highlight ? 'border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.15)]' : 'border-stone-800'
                      }`}
                    >
                      <div className="text-xs text-stone-400 mb-1">{item.metric}</div>
                      <div className="text-xl font-bold font-mono text-amber-400">{item.change}</div>
                      <div className="mt-3 pt-2.5 border-t border-stone-800/80 text-[11px] text-stone-400 space-y-1">
                        <div><span className="text-stone-500">Before:</span> {item.before}</div>
                        <div><span className="text-stone-200 font-semibold">Radian:</span> {item.after}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* CHAPTER 5: Architecture & Engineering Handoff */}
          {activeChapter === 'architecture' && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-10"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-100">
                  Supabase Backend & PWA Service Worker Handoff
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed max-w-3xl">
                  Designing a mission-critical EdTech application requires robust technical specifications. 
                  Below are the architecture decisions handed off to development engineers.
                </p>
              </div>

              {/* Technical Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Supabase Realtime & RLS */}
                <div className="p-6 rounded-3xl bg-stone-950 border border-stone-800 space-y-4">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-amber-400" />
                    <h4 className="text-base font-bold text-stone-200">Supabase Realtime CDC & RLS</h4>
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Course inventory leverages Postgres Change Data Capture (CDC) over WebSockets. 
                    When a candidate registers, an `INSERT` triggers atomic row locks:
                  </p>
                  
                  <pre className="p-4 rounded-2xl bg-stone-900 font-mono text-[11px] text-amber-300 overflow-x-auto border border-stone-800 leading-relaxed">
{`-- Atomic reservation transaction
BEGIN;
  SELECT occupied_seats, total_seats 
  FROM courses WHERE id = $1 FOR UPDATE;
  
  INSERT INTO enrollments(student_id, course_id)
  VALUES ($2, $1);
  
  UPDATE courses 
  SET occupied_seats = occupied_seats + 1
  WHERE id = $1;
COMMIT;`}
                  </pre>

                  <div className="text-xs text-stone-400">
                    Guarantees zero concurrency collisions regardless of how many parents submit simultaneously.
                  </div>
                </div>

                {/* PWA Offline Strategy */}
                <div className="p-6 rounded-3xl bg-stone-950 border border-stone-800 space-y-4">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-amber-400" />
                    <h4 className="text-base font-bold text-stone-200">PWA Service Worker & Push Engine</h4>
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Designed for mobile students studying in spotty underground metro transit or coffee shops:
                  </p>

                  <ul className="text-xs text-stone-300 space-y-2.5">
                    <li className="p-3 rounded-2xl bg-stone-900 border border-stone-800">
                      <strong className="text-amber-400 block mb-1">Cache-First for Static Assets:</strong>
                      <span>App shell, icons, and audio vocabulary drills load instantly in &lt; 200ms.</span>
                    </li>
                    <li className="p-3 rounded-2xl bg-stone-900 border border-stone-800">
                      <strong className="text-amber-400 block mb-1">Network-First with Fallback:</strong>
                      <span>Student milestones sync immediately when online; falls back to IndexedDB local cache when offline.</span>
                    </li>
                    <li className="p-3 rounded-2xl bg-stone-900 border border-stone-800">
                      <strong className="text-amber-400 block mb-1">VAPID Push Alerts:</strong>
                      <span>Native lockscreen alerts for newly verified essay grades and upcoming live class sessions.</span>
                    </li>
                  </ul>
                </div>

              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
};
