import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Milestone, ActivityItem } from '../../types';
import { WEEKLY_CHART_DATA } from '../../data/mockData';
import { 
  Award, 
  BookOpen, 
  Clock, 
  Calendar, 
  CheckCircle, 
  Flame, 
  ArrowUpRight, 
  Plus, 
  Sparkles,
  Zap,
  CheckCircle2,
  TrendingUp,
  FileCheck2,
  ShieldCheck
} from 'lucide-react';

interface StudentDashboardViewProps {
  milestones: Milestone[];
  activity: ActivityItem[];
  onAddActivity: (item: ActivityItem) => void;
  onUpdateMilestone: (id: string, progress: number) => void;
}

export const StudentDashboardView: React.FC<StudentDashboardViewProps> = ({
  milestones,
  activity,
  onAddActivity,
  onUpdateMilestone,
}) => {
  const [selectedDay, setSelectedDay] = useState<string>('Sat');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  // Trigger celebration and update activity
  const handleQuickSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      // Confetti burst
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#F59E0B', '#FBBF24', '#FDE68A', '#10B981']
      });

      const newAct: ActivityItem = {
        id: 'act-' + Date.now(),
        studentName: 'Amina Karimova (You)',
        avatar: 'AK',
        action: 'uploaded speaking practice recording: IELTS Part 2 cue card "Describe an impactful teacher"',
        courseTitle: 'IELTS Academic 8.0+',
        timestamp: 'Just now',
        type: 'submission',
        score: 'Submitted for Review'
      };
      onAddActivity(newAct);
      onUpdateMilestone('m1', 98);
      setIsSubmitting(false);
      setSubmissionSuccess(true);
      setTimeout(() => setSubmissionSuccess(false), 4000);
    }, 700);
  };

  const selectedData = WEEKLY_CHART_DATA.find(d => d.day === selectedDay) || WEEKLY_CHART_DATA[5];

  return (
    <div className="space-y-6 text-stone-100">
      
      {/* Top Quick Status Strip - mirrors the top cards in the user's design */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Active Course with luminous amber highlight */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/20 via-stone-900 to-stone-900 border border-amber-500/40 relative overflow-hidden group shadow-[0_0_25px_rgba(245,158,11,0.15)] hover:border-amber-400 transition-all">
          <div className="flex items-center justify-between text-xs text-amber-400 font-medium mb-1">
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              Primary Focus
            </span>
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
          </div>
          <div className="text-lg font-bold text-stone-100">IELTS Band 8.0+</div>
          <div className="text-xs text-stone-400 mt-2 flex items-center justify-between pt-2 border-t border-amber-500/20">
            <span>Elena Rostova, M.Ed</span>
            <span className="text-amber-400 font-mono font-semibold text-[11px] bg-amber-500/15 px-2 py-0.5 rounded">C1/C2 Level</span>
          </div>
        </div>

        {/* Card 2: Overall Milestone Progress */}
        <div className="p-4 rounded-2xl bg-stone-900/90 border border-stone-800 hover:border-stone-700 transition-all shadow-md">
          <div className="text-xs text-stone-400 mb-1 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-amber-500" />
              Target Milestone
            </span>
            <span className="text-amber-400 font-mono font-bold">86%</span>
          </div>
          <div className="text-lg font-bold text-stone-100">Task 2 Argumentation</div>
          <div className="w-full h-2 bg-stone-950 rounded-full mt-3 overflow-hidden border border-stone-800">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '86%' }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-300 rounded-full shadow-[0_0_12px_rgba(245,158,11,0.6)]" 
            />
          </div>
        </div>

        {/* Card 3: Attendance Streak */}
        <div className="p-4 rounded-2xl bg-stone-900/90 border border-stone-800 hover:border-stone-700 transition-all shadow-md">
          <div className="text-xs text-stone-400 mb-1 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Attendance Streak</span>
          </div>
          <div className="text-lg font-bold text-stone-100 flex items-baseline gap-2">
            <span className="font-mono text-2xl text-amber-400 font-extrabold">18</span>
            <span className="text-xs text-stone-400">consecutive days</span>
          </div>
          <div className="text-[11px] text-emerald-400 mt-2 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>96.4% Verified Attendance</span>
          </div>
        </div>

        {/* Card 4: Next Live Class */}
        <div className="p-4 rounded-2xl bg-stone-900/90 border border-stone-800 hover:border-stone-700 transition-all shadow-md">
          <div className="text-xs text-stone-400 mb-1 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-amber-500" />
            <span>Next Live Session</span>
          </div>
          <div className="text-lg font-bold text-stone-100">Today · 18:30</div>
          <div className="text-xs text-stone-400 mt-2 flex items-center justify-between pt-2 border-t border-stone-800">
            <span>Room B-04 / WebRTC</span>
            <span className="text-amber-400 font-semibold text-[11px] hover:text-amber-300 underline cursor-pointer">
              Join Live
            </span>
          </div>
        </div>

      </div>

      {/* Main Grid: Weekly Study Hours Bar Chart (Faithfully mirroring the design in the user's attachment) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left / Center 8 cols: The Signature Glowing Amber Bar Chart */}
        <div className="lg:col-span-8 p-6 rounded-3xl bg-stone-900/95 border border-amber-500/20 shadow-2xl relative overflow-hidden">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <div className="flex items-center gap-2.5">
                <h3 className="text-base font-bold text-stone-100 flex items-center gap-2">
                  <span>Weekly Study & Practice Hours</span>
                  <Sparkles className="w-4 h-4 text-amber-400" />
                </h3>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  Target: 25 hrs/wk
                </span>
              </div>
              <p className="text-xs text-stone-400 mt-1">
                Aggregated from LMS practice quizzes, audio labs, and attended live seminars
              </p>
            </div>

            <div className="flex items-center gap-2 bg-stone-950 px-3.5 py-1.5 rounded-xl border border-stone-800">
              <span className="text-xs text-stone-400">Total:</span>
              <span className="text-sm font-mono font-bold text-amber-400">33.6 hrs (+18%)</span>
            </div>
          </div>

          {/* Interactive Glowing Bar Chart faithfully reproducing the uploaded image */}
          <div className="h-60 sm:h-64 flex items-end justify-between gap-3 sm:gap-5 pt-6 pb-2 px-3 border-b border-stone-800/80 relative">
            
            {/* Horizontal guide lines */}
            <div className="absolute inset-x-0 top-1/4 border-b border-stone-800/40 pointer-events-none" />
            <div className="absolute inset-x-0 top-2/4 border-b border-stone-800/40 pointer-events-none" />
            <div className="absolute inset-x-0 top-3/4 border-b border-stone-800/40 pointer-events-none" />

            {WEEKLY_CHART_DATA.map((item) => {
              const isSelected = selectedDay === item.day;
              return (
                <div 
                  key={item.day}
                  onClick={() => setSelectedDay(item.day)}
                  className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer relative"
                >
                  {/* Tooltip on hover/selected */}
                  <motion.div 
                    initial={false}
                    animate={{ 
                      opacity: isSelected ? 1 : 0, 
                      y: isSelected ? -4 : 4,
                      scale: isSelected ? 1.05 : 0.95
                    }}
                    className={`text-[11px] font-mono font-bold py-1 px-2 rounded-lg transition-all mb-2 z-10 ${
                      isSelected 
                        ? 'bg-amber-400 text-stone-950 shadow-[0_0_15px_rgba(245,158,11,0.6)]' 
                        : 'text-stone-300 bg-stone-800'
                    }`}
                  >
                    {item.label}
                  </motion.div>

                  {/* The Golden / Amber Bar with Gradient and Glow matching image */}
                  <div className="w-full max-w-[54px] bg-stone-950/60 rounded-t-xl overflow-hidden flex items-end h-full p-0.5 border-t border-x border-stone-800/50">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${item.percentage}%` }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className={`w-full rounded-t-lg transition-all duration-300 relative ${
                        isSelected 
                          ? 'bar-amber-gradient-selected' 
                          : 'bar-amber-gradient hover:brightness-110'
                      }`}
                    >
                      {/* Top highlight cap line */}
                      <div className="h-1.5 bg-amber-100/80 w-full rounded-t-lg shadow-sm" />
                    </motion.div>
                  </div>

                  {/* Day Label */}
                  <div className={`mt-2.5 text-xs font-mono transition-colors ${
                    isSelected ? 'text-amber-400 font-bold' : 'text-stone-400 group-hover:text-stone-200'
                  }`}>
                    {item.day}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Bar: Interactive Control Strip */}
          <div className="mt-5 pt-3 flex flex-wrap items-center justify-between text-xs text-stone-400 gap-3">
            <div className="flex items-center gap-2">
              <span className="text-stone-300 font-medium">Selected Period:</span>
              <span className="text-amber-400 font-mono font-bold bg-stone-950 px-2.5 py-1 rounded-md border border-stone-800">
                {selectedData.day} · {selectedData.hours} hours logged
              </span>
            </div>

            <button
              onClick={handleQuickSubmit}
              disabled={isSubmitting}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
            >
              <Plus className="w-4 h-4 text-stone-950" />
              <span>{isSubmitting ? 'Uploading to Supabase...' : 'Simulate Assignment Upload'}</span>
            </button>
          </div>

          {/* Submission Feedback Toast */}
          <AnimatePresence>
            {submissionSuccess && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 p-3 rounded-xl bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-xs flex items-center justify-between shadow-lg"
              >
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Practice audio uploaded to Supabase Storage! Milestone score updated to 98%.</span>
                </div>
                <span className="font-mono text-xs text-emerald-400 font-bold">+25 Study XP</span>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Right 4 cols: Realtime Activity History Stream */}
        <div className="lg:col-span-4 p-5 rounded-3xl bg-stone-900/95 border border-stone-800 shadow-2xl flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-stone-100 flex items-center gap-2">
              <span>Realtime Activity Stream</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            </h3>
            <span className="text-[10px] font-mono text-stone-400 bg-stone-950 px-2 py-0.5 rounded border border-stone-800">
              Postgres CDC
            </span>
          </div>

          <div className="space-y-3 flex-1 overflow-y-auto max-h-[380px] pr-1">
            {activity.map((item) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-3.5 rounded-xl bg-stone-950/80 border border-stone-800/80 text-xs space-y-1.5 hover:border-amber-500/30 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-700/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-mono font-bold text-[11px] shadow-sm">
                      {item.avatar}
                    </span>
                    <span className="font-semibold text-stone-200 group-hover:text-amber-300 transition-colors">
                      {item.studentName}
                    </span>
                  </div>
                  <span className="text-[10px] text-stone-500 font-mono">{item.timestamp}</span>
                </div>

                <p className="text-stone-300 text-[11px] pl-9 leading-relaxed">
                  {item.action}
                </p>

                {item.score && (
                  <div className="pl-9 pt-0.5">
                    <span className="inline-block text-[10px] font-mono font-bold text-amber-300 bg-amber-500/15 px-2 py-0.5 rounded border border-amber-500/30">
                      Score: {item.score}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Row: Verified Course Milestones List */}
      <div className="p-6 rounded-3xl bg-stone-900/90 border border-stone-800 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <div>
            <h3 className="text-base font-bold text-stone-100 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Course Milestones & Verification Badges</span>
            </h3>
            <p className="text-xs text-stone-400 mt-0.5">Verified by certified language instructors directly in the Radian platform</p>
          </div>
          <span className="text-xs font-mono font-semibold text-amber-300 bg-amber-500/15 px-3 py-1 rounded-lg border border-amber-500/30 w-fit">
            {milestones.filter(m => m.progress === 100).length} of {milestones.length} Completed
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {milestones.map((m) => (
            <div 
              key={m.id}
              className="p-4 rounded-2xl bg-stone-950/80 border border-stone-800/80 flex flex-col justify-between hover:border-amber-500/40 transition-all hover:bg-stone-950 shadow-sm"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="text-xs font-mono text-amber-400 font-medium">{m.course}</div>
                  {m.verifiedByTeacher && (
                    <span className="text-[10px] font-semibold text-emerald-400 flex items-center gap-1 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                      <CheckCircle className="w-3 h-3" />
                      Teacher Verified
                    </span>
                  )}
                </div>

                <div className="text-sm font-bold text-stone-200">{m.title}</div>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-800/60 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-stone-400">
                  <Calendar className="w-3.5 h-3.5 text-stone-500" />
                  <span>Target: {m.targetDate}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="font-mono font-bold text-amber-400">{m.progress}%</span>
                  <div className="w-20 h-2 bg-stone-900 rounded-full overflow-hidden border border-stone-800">
                    <div 
                      style={{ width: `${m.progress}%` }} 
                      className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full" 
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
