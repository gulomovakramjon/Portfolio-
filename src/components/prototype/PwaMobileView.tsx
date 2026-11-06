import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Course, Milestone } from '../../types';
import { 
  Wifi, 
  WifiOff, 
  Download, 
  Bell, 
  CheckCircle, 
  Smartphone, 
  Battery, 
  Signal, 
  Sparkles,
  BookOpen,
  Award,
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

interface PwaMobileViewProps {
  courses: Course[];
  milestones: Milestone[];
}

export const PwaMobileView: React.FC<PwaMobileViewProps> = ({ courses, milestones }) => {
  const [isInstalled, setIsInstalled] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [pushAlert, setPushAlert] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'home' | 'milestones' | 'courses'>('home');

  const handleSimulateInstall = () => {
    setIsInstalled(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#F59E0B', '#10B981', '#ffffff']
    });
    setPushAlert('Radian PWA installed! Standalone app icon added to your mobile home screen.');
    setTimeout(() => setPushAlert(null), 4500);
  };

  const handleTriggerPushNotification = () => {
    setPushAlert('Radian Alert: Elena Rostova graded your Essay #4 (Band 8.5). Tap to view milestone remarks.');
    setTimeout(() => setPushAlert(null), 5000);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 py-4">
      
      {/* Left side: PWA Architectural Capabilities & Interactive Controls */}
      <div className="w-full lg:w-88 space-y-4 text-stone-200">
        
        <div className="p-5 rounded-3xl bg-stone-900/90 border border-amber-500/20 space-y-2.5 shadow-xl">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-100">PWA Hardware & Offline Core</h4>
              <span className="text-[10px] text-amber-400 font-mono">Service Worker v2.4</span>
            </div>
          </div>
          <p className="text-xs text-stone-400 leading-relaxed">
            Engineered with a Cache-First Service Worker and IndexedDB state replication, allowing students in transit or poor connectivity to review verified milestones and practice offline.
          </p>
        </div>

        {/* Interactive PWA Controls Box */}
        <div className="p-5 rounded-3xl bg-stone-900/90 border border-stone-800 space-y-3.5 shadow-xl">
          <div className="text-xs font-bold text-stone-300 flex items-center justify-between">
            <span>Hardware Simulation Triggers</span>
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          </div>

          {/* Offline Toggle */}
          <button
            onClick={() => setIsOffline(!isOffline)}
            className={`w-full flex items-center justify-between p-3 rounded-2xl text-xs font-semibold border transition-all cursor-pointer ${
              isOffline
                ? 'bg-amber-950/80 border-amber-500/60 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.25)]'
                : 'bg-stone-950 border-stone-800 text-stone-300 hover:border-stone-700'
            }`}
          >
            <div className="flex items-center gap-2.5">
              {isOffline ? (
                <WifiOff className="w-4 h-4 text-amber-400 animate-bounce" />
              ) : (
                <Wifi className="w-4 h-4 text-emerald-400" />
              )}
              <span>{isOffline ? 'Offline Mode Active' : 'Online (Wi-Fi Connected)'}</span>
            </div>
            <span className="font-mono text-[10px] text-stone-400 bg-stone-900 px-2 py-0.5 rounded">
              {isOffline ? 'ServiceWorker' : 'Postgres CDC'}
            </span>
          </button>

          {/* Test Web Push Alert */}
          <button
            onClick={handleTriggerPushNotification}
            className="w-full flex items-center justify-center gap-2 p-3 rounded-2xl bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-100 text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-sm"
          >
            <Bell className="w-4 h-4 text-amber-400" />
            <span>Simulate VAPID Push Alert</span>
          </button>

          {/* Install Simulator */}
          {!isInstalled ? (
            <button
              onClick={handleSimulateInstall}
              className="w-full flex items-center justify-center gap-2 p-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-extrabold text-xs shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all active:scale-95 cursor-pointer"
            >
              <Download className="w-4 h-4 text-stone-950" />
              <span>Simulate Home Screen Install</span>
            </button>
          ) : (
            <div className="flex items-center justify-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 p-2.5 rounded-2xl border border-emerald-500/40">
              <CheckCircle className="w-4 h-4" />
              <span>PWA Installed on Mobile</span>
            </div>
          )}
        </div>

      </div>

      {/* Right side: Realistic Titanium Smartphone Bezel */}
      <div className="relative w-[345px] h-[670px] bg-stone-950 rounded-[48px] border-[7px] border-stone-800 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95)] p-3.5 flex flex-col justify-between overflow-hidden">
        
        {/* Dynamic Island & Hardware Header */}
        <div className="relative z-30 flex items-center justify-between px-4 pt-1 text-[11px] font-mono text-stone-400">
          <span>09:41</span>
          
          {/* Dynamic Island pill */}
          <div className="w-24 h-5 bg-stone-900 rounded-full flex items-center justify-center border border-stone-800 shadow-inner">
            <div className="w-2.5 h-2.5 rounded-full bg-stone-950 border border-stone-800 mr-2" />
            <div className="w-1.5 h-1.5 rounded-full bg-stone-800" />
          </div>

          <div className="flex items-center gap-1.5">
            {isOffline ? (
              <WifiOff className="w-3.5 h-3.5 text-amber-400" />
            ) : (
              <Signal className="w-3.5 h-3.5 text-stone-300" />
            )}
            <Battery className="w-4 h-4 text-stone-300" />
          </div>
        </div>

        {/* Push Notification Toast sliding from Dynamic Island */}
        <AnimatePresence>
          {pushAlert && (
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-10 inset-x-3.5 z-40 p-3.5 rounded-2xl bg-stone-900/98 border border-amber-500/60 text-xs shadow-2xl"
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-amber-400">
                  <Bell className="w-3 h-3" />
                  <span>RADIAN PWA NOTIFICATION</span>
                </div>
                <span className="text-[10px] text-stone-500 font-mono">Just now</span>
              </div>
              <p className="text-stone-200 text-[11px] leading-tight">
                {pushAlert}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Phone Inner Viewport */}
        <div className="flex-1 overflow-y-auto px-1 pt-3.5 pb-2 space-y-3.5">
          
          {/* In-app PWA install bar */}
          {!isInstalled && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 rounded-2xl bg-gradient-to-r from-amber-500/25 to-stone-900 border border-amber-500/40 flex items-center justify-between text-xs"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-stone-950 font-extrabold flex items-center justify-center text-xs shadow-sm">
                  R
                </span>
                <div>
                  <div className="font-bold text-stone-100 text-xs">Install Radian App</div>
                  <div className="text-[10px] text-stone-400">Add to home screen</div>
                </div>
              </div>
              <button
                onClick={handleSimulateInstall}
                className="px-3 py-1 bg-amber-500 text-stone-950 font-bold text-xs rounded-lg shadow cursor-pointer active:scale-95"
              >
                Install
              </button>
            </motion.div>
          )}

          {/* Offline banner */}
          {isOffline && (
            <div className="p-2.5 rounded-xl bg-amber-950/90 border border-amber-500/50 text-[11px] text-amber-300 flex items-center gap-2">
              <WifiOff className="w-3.5 h-3.5 shrink-0" />
              <span>Offline Mode: Loaded from Cache Storage</span>
            </div>
          )}

          {/* TAB: Home */}
          {activeTab === 'home' && (
            <div className="space-y-3">
              {/* Student Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-stone-100">Welcome, Amina</h4>
                  <p className="text-[11px] text-amber-400/90 font-mono">Target IELTS: 8.0 Band</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 font-bold flex items-center justify-center text-xs">
                  AK
                </div>
              </div>

              {/* Glowing Amber Mini-Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/25 via-stone-900 to-stone-950 border border-amber-500/40 space-y-2">
                <div className="flex justify-between text-[11px] text-amber-300 font-bold">
                  <span>Weekly Study Goal</span>
                  <span className="font-mono">86% Achieved</span>
                </div>
                <div className="text-lg font-bold text-stone-100 font-mono">33.6 / 25 Hours</div>
                <div className="w-full h-1.5 bg-stone-900 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full w-[86%]" />
                </div>
              </div>

              {/* Next Class */}
              <div className="p-3.5 rounded-2xl bg-stone-900 border border-stone-800 space-y-1">
                <div className="text-[10px] font-mono text-amber-400 font-bold">TODAY · 18:30</div>
                <div className="text-xs font-bold text-stone-200">IELTS Writing Task 2 Masterclass</div>
                <div className="text-[11px] text-stone-400">Elena Rostova · Room B-04</div>
              </div>

              {/* Recent Milestone */}
              <div className="p-3.5 rounded-2xl bg-stone-900 border border-stone-800 space-y-1">
                <div className="flex justify-between text-[10px]">
                  <span className="text-stone-400">Latest Verified Grade</span>
                  <span className="text-emerald-400 font-mono font-bold">8.5 Band</span>
                </div>
                <div className="text-xs font-bold text-stone-200">Speaking Mock #4 Argumentation</div>
              </div>
            </div>
          )}

          {/* TAB: Milestones */}
          {activeTab === 'milestones' && (
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-stone-100">My Milestones</h4>
              {milestones.map((m) => (
                <div key={m.id} className="p-3 rounded-2xl bg-stone-900 border border-stone-800 space-y-1.5">
                  <div className="flex justify-between text-[11px]">
                    <span className="font-semibold text-stone-200 truncate">{m.title}</span>
                    <span className="font-mono text-amber-400 font-bold">{m.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-stone-950 rounded-full overflow-hidden">
                    <div style={{ width: `${m.progress}%` }} className="h-full bg-amber-500 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB: Courses */}
          {activeTab === 'courses' && (
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-stone-100">Live Seat Vacancies</h4>
              {courses.slice(0, 3).map((c) => {
                const remaining = c.totalSeats - c.occupiedSeats;
                return (
                  <div key={c.id} className="p-3 rounded-2xl bg-stone-900 border border-stone-800 space-y-1">
                    <div className="flex justify-between text-[11px]">
                      <span className="font-bold text-stone-200">{c.code}</span>
                      <span className={`font-mono text-[10px] font-bold ${remaining <= 1 ? 'text-amber-400' : 'text-emerald-400'}`}>
                        {remaining} seats left
                      </span>
                    </div>
                    <div className="text-[11px] text-stone-300 font-medium">{c.title}</div>
                  </div>
                );
              })}
            </div>
          )}

        </div>

        {/* Mobile Bottom Navigation Bar */}
        <div className="border-t border-stone-800/80 pt-2.5 pb-1 px-4 flex items-center justify-around text-[10px]">
          <button 
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center gap-1 cursor-pointer ${activeTab === 'home' ? 'text-amber-400 font-bold' : 'text-stone-500'}`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Dashboard</span>
          </button>
          <button 
            onClick={() => setActiveTab('milestones')}
            className={`flex flex-col items-center gap-1 cursor-pointer ${activeTab === 'milestones' ? 'text-amber-400 font-bold' : 'text-stone-500'}`}
          >
            <Award className="w-4 h-4" />
            <span>Milestones</span>
          </button>
          <button 
            onClick={() => setActiveTab('courses')}
            className={`flex flex-col items-center gap-1 cursor-pointer ${activeTab === 'courses' ? 'text-amber-400 font-bold' : 'text-stone-500'}`}
          >
            <Layers className="w-4 h-4" />
            <span>Courses</span>
          </button>
        </div>

        {/* iPhone Home Indicator bar */}
        <div className="w-32 h-1 bg-stone-700 rounded-full mx-auto mt-1" />

      </div>

    </div>
  );
};
