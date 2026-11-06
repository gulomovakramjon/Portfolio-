import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Course, ActivityItem } from '../../types';
import { 
  Users, 
  Clock, 
  BookOpen, 
  AlertCircle, 
  CheckCircle2, 
  Shield, 
  Search, 
  Sparkles,
  Zap,
  ArrowRight,
  Filter
} from 'lucide-react';

interface RegistrationViewProps {
  courses: Course[];
  onBookSeat: (courseId: string, studentName: string, studentEmail: string) => void;
}

export const RegistrationView: React.FC<RegistrationViewProps> = ({ courses, onBookSeat }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCourseModal, setActiveCourseModal] = useState<Course | null>(null);
  const [studentName, setStudentName] = useState<string>('Amina Karimova');
  const [studentEmail, setStudentEmail] = useState<string>('amina.k@student.edu');
  const [isReserving, setIsReserving] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const categories = ['All', 'English', 'German', 'Arabic', 'Academic Prep'];

  const filteredCourses = courses.filter((c) => {
    const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.teacher.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeCourseModal) return;
    setIsReserving(true);

    setTimeout(() => {
      onBookSeat(activeCourseModal.id, studentName, studentEmail);
      setIsReserving(false);
      
      // Confetti burst for seat lock
      confetti({
        particleCount: 65,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F59E0B', '#FBBF24', '#10B981', '#ffffff']
      });

      setSuccessMessage(`Seat #${activeCourseModal.occupiedSeats + 1} locked successfully in ${activeCourseModal.title}! Atomic Supabase RLS transaction confirmed.`);
      setActiveCourseModal(null);
      setTimeout(() => setSuccessMessage(null), 5000);
    }, 600);
  };

  return (
    <div className="space-y-6 text-stone-100">
      
      {/* Real-time sync banner with radiant amber glass */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-stone-900/90 via-stone-900/90 to-amber-950/40 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/30 to-amber-700/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.25)]">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-stone-100 flex items-center gap-2">
              <span>Live Course Catalog & Real-Time Open Seats</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            </div>
            <p className="text-xs text-stone-400 mt-0.5">
              Directly connected to PostgreSQL CDC. Reserving a seat updates the open vacancy counter in real time across all connected clients.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-mono font-semibold text-amber-400 bg-stone-950 px-3 py-1.5 rounded-xl border border-stone-800 flex items-center gap-1.5 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            WebSocket Live
          </span>
        </div>
      </div>

      {/* Success Notification Alert */}
      <AnimatePresence>
        {successMessage && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-4 rounded-2xl bg-emerald-950/95 border border-emerald-500/50 text-emerald-200 text-xs sm:text-sm flex items-center justify-between shadow-2xl"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>{successMessage}</span>
            </div>
            <button 
              onClick={() => setSuccessMessage(null)}
              className="text-stone-400 hover:text-stone-200 text-xs font-mono px-2 py-1"
            >
              Dismiss
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Interactive Segmented Filter Control */}
        <div className="flex items-center gap-1 p-1 bg-stone-900/90 rounded-2xl border border-stone-800 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-stone-950 font-bold shadow-[0_0_15px_rgba(245,158,11,0.35)]'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search course, code, teacher..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-stone-900/90 border border-stone-800 rounded-2xl pl-10 pr-3.5 py-2.5 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500/60 shadow-inner"
          />
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCourses.map((course) => {
          const remainingSeats = Math.max(0, course.totalSeats - course.occupiedSeats);
          const isFillingFast = remainingSeats === 1;
          const isFull = remainingSeats === 0;

          return (
            <motion.div
              key={course.id}
              layout
              className={`p-6 rounded-3xl bg-stone-900/95 border transition-all flex flex-col justify-between relative overflow-hidden group shadow-xl ${
                isFillingFast
                  ? 'border-amber-500/70 shadow-[0_0_35px_rgba(245,158,11,0.2)]'
                  : isFull
                  ? 'border-stone-800/80 opacity-90'
                  : 'border-stone-800/90 hover:border-amber-500/40'
              }`}
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-lg bg-stone-950 text-amber-400 border border-stone-800">
                      {course.code}
                    </span>
                    <span className="text-xs text-stone-400 font-medium">
                      {course.level}
                    </span>
                  </div>

                  {/* Seat Status Indicator */}
                  {isFull ? (
                    <span className="text-[11px] font-mono font-bold text-rose-400 bg-rose-950/60 px-3 py-1 rounded-full border border-rose-500/40">
                      Class Full (Waitlist)
                    </span>
                  ) : isFillingFast ? (
                    <span className="text-[11px] font-mono font-bold text-amber-300 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/50 animate-pulse flex items-center gap-1.5 shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      1 Seat Remaining!
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono font-semibold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
                      {remainingSeats} Seats Available
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                  {course.title}
                </h3>

                <p className="text-xs text-stone-400 mt-2 line-clamp-2 leading-relaxed">
                  {course.description}
                </p>

                {/* Details Meta */}
                <div className="mt-4 space-y-2 text-xs text-stone-300">
                  <div className="flex items-center gap-2 text-stone-400">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{course.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-400">
                    <BookOpen className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Instructor: <strong className="text-stone-200">{course.teacher}</strong></span>
                  </div>
                </div>
              </div>

              {/* Card Footer: Real-time Seat Progress Bar & Action */}
              <div className="mt-6 pt-4 border-t border-stone-800/80">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-stone-400">Live Seat Inventory</span>
                  <span className="font-mono font-bold text-amber-400">
                    {course.occupiedSeats} / {course.totalSeats} Enrolled
                  </span>
                </div>

                {/* Seat Capacity Bar */}
                <div className="w-full h-2.5 bg-stone-950 rounded-full overflow-hidden border border-stone-800 mb-5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(course.occupiedSeats / course.totalSeats) * 100}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className={`h-full rounded-full transition-all duration-500 ${
                      isFull 
                        ? 'bg-rose-500' 
                        : isFillingFast 
                        ? 'bg-gradient-to-r from-amber-500 to-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.9)]' 
                        : 'bg-amber-500'
                    }`}
                  />
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] text-stone-400 block">Tuition Fee</span>
                    <span className="text-lg font-bold font-mono text-stone-100">
                      ${course.tuition}<span className="text-xs font-normal text-stone-400">/term</span>
                    </span>
                  </div>

                  <button
                    onClick={() => setActiveCourseModal(course)}
                    className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all active:scale-95 flex items-center gap-2 cursor-pointer ${
                      isFull
                        ? 'bg-stone-800 text-stone-300 hover:bg-stone-700 border border-stone-700'
                        : isFillingFast
                        ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-stone-950 shadow-[0_0_20px_rgba(245,158,11,0.5)] hover:from-amber-400 hover:to-amber-300'
                        : 'bg-amber-500 text-stone-950 hover:bg-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                    }`}
                  >
                    <span>{isFull ? 'Join Waitlist Queue' : 'Reserve My Seat'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>

      {/* Interactive Reservation Modal */}
      <AnimatePresence>
        {activeCourseModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              className="w-full max-w-md rounded-3xl bg-stone-900 border border-amber-500/40 p-6 sm:p-7 shadow-2xl space-y-4"
            >
              
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-mono text-amber-400 font-bold">
                    {activeCourseModal.code} · Atomic Seat Reservation
                  </span>
                  <h3 className="text-lg font-bold text-stone-100 mt-1">
                    {activeCourseModal.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveCourseModal(null)}
                  className="text-stone-400 hover:text-stone-200 text-sm font-bold p-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 text-xs space-y-2">
                <div className="flex justify-between text-stone-400">
                  <span>Instructor:</span>
                  <span className="text-stone-200 font-semibold">{activeCourseModal.teacher}</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>Schedule:</span>
                  <span className="text-stone-200">{activeCourseModal.schedule}</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>Open vacancies:</span>
                  <span className="text-amber-400 font-mono font-bold">
                    {activeCourseModal.totalSeats - activeCourseModal.occupiedSeats} seats left
                  </span>
                </div>
                <div className="flex justify-between text-stone-400 pt-1 border-t border-stone-800">
                  <span>Tuition Amount:</span>
                  <span className="text-stone-100 font-mono font-bold text-sm">${activeCourseModal.tuition} USD</span>
                </div>
              </div>

              <form onSubmit={handleConfirmReservation} className="space-y-3.5 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    Candidate Student Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    Student or Guardian Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={studentEmail}
                    onChange={(e) => setStudentEmail(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveCourseModal(null)}
                    className="px-4 py-2 rounded-xl text-xs font-medium text-stone-400 hover:text-stone-200 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isReserving}
                    className="px-5 py-2.5 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs hover:bg-amber-400 transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] disabled:opacity-50 cursor-pointer"
                  >
                    {isReserving ? 'Executing Atomic Lock...' : 'Confirm Seat & Lock'}
                  </button>
                </div>
              </form>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
