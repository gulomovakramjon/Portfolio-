import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Course, Milestone, ActivityItem, StudentEnrollment } from '../types';
import { INITIAL_COURSES, INITIAL_MILESTONES, INITIAL_ACTIVITY, INITIAL_ENROLLMENTS } from '../data/mockData';
import { StudentDashboardView } from './prototype/StudentDashboardView';
import { RegistrationView } from './prototype/RegistrationView';
import { AdminPanelView } from './prototype/AdminPanelView';
import { PwaMobileView } from './prototype/PwaMobileView';
import { 
  Monitor, 
  Tablet, 
  Smartphone, 
  RotateCcw, 
  Maximize2, 
  Layers, 
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const PrototypeViewer: React.FC = () => {
  // Prototype active state
  const [activeScreen, setActiveScreen] = useState<'student' | 'registration' | 'admin' | 'pwa'>('student');
  const [deviceFrame, setDeviceFrame] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  
  // Dynamic interactive state
  const [courses, setCourses] = useState<Course[]>(INITIAL_COURSES);
  const [milestones, setMilestones] = useState<Milestone[]>(INITIAL_MILESTONES);
  const [activity, setActivity] = useState<ActivityItem[]>(INITIAL_ACTIVITY);
  const [enrollments, setEnrollments] = useState<StudentEnrollment[]>(INITIAL_ENROLLMENTS);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Reset demo
  const handleReset = () => {
    setCourses(INITIAL_COURSES);
    setMilestones(INITIAL_MILESTONES);
    setActivity(INITIAL_ACTIVITY);
    setEnrollments(INITIAL_ENROLLMENTS);
    setToastMessage('Interactive demo data reset to initial Supabase state.');
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Real-time seat booking action
  const handleBookSeat = (courseId: string, studentName: string, studentEmail: string) => {
    setCourses((prevCourses) => 
      prevCourses.map((c) => {
        if (c.id === courseId && c.occupiedSeats < c.totalSeats) {
          const newOccupied = c.occupiedSeats + 1;
          const newStatus = newOccupied >= c.totalSeats ? 'Waitlist' : (c.totalSeats - newOccupied === 1 ? 'Filling Fast' : 'Open');
          return { ...c, occupiedSeats: newOccupied, status: newStatus };
        }
        return c;
      })
    );

    const targetCourse = courses.find(c => c.id === courseId);
    if (!targetCourse) return;

    // Log to student enrollment table
    const newEnrollment: StudentEnrollment = {
      id: `enr-${Date.now().toString().slice(-4)}`,
      studentName,
      studentEmail,
      courseId,
      courseName: targetCourse.title,
      enrollmentDate: new Date().toISOString().slice(0, 10),
      status: 'Confirmed',
      paymentStatus: 'Paid',
      attendanceRate: 100
    };
    setEnrollments(prev => [newEnrollment, ...prev]);

    // Log to activity stream
    const newAct: ActivityItem = {
      id: `act-${Date.now()}`,
      studentName,
      avatar: studentName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase(),
      action: `secured real-time seat #${targetCourse.occupiedSeats + 1} for ${targetCourse.title}`,
      courseTitle: targetCourse.title,
      timestamp: 'Just now',
      type: 'quiz'
    };
    setActivity(prev => [newAct, ...prev]);
  };

  // Admin seat adjustment
  const handleUpdateCourseSeats = (courseId: string, delta: number) => {
    setCourses(prev => prev.map(c => {
      if (c.id === courseId) {
        const newTotal = Math.max(c.occupiedSeats, c.totalSeats + delta);
        return { ...c, totalSeats: newTotal };
      }
      return c;
    }));
  };

  const handleUpdateEnrollmentStatus = (id: string, status: any) => {
    setEnrollments(prev => prev.map(e => e.id === id ? { ...e, status } : e));
  };

  const handleUpdateMilestone = (id: string, progress: number) => {
    setMilestones(prev => prev.map(m => m.id === id ? { ...m, progress } : m));
  };

  const handleAddActivity = (item: ActivityItem) => {
    setActivity(prev => [item, ...prev]);
  };

  return (
    <section id="prototype" className="scroll-mt-24 pt-24 pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-500 dark:text-amber-400 mb-1">
              <span>Interactive High-Fidelity Prototype</span>
              <span className="text-stone-400 dark:text-stone-600">·</span>
              <span>Fully Functional State</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
              Experience the Radian Ecosystem Live
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
              Switch roles to experience how students, parents, and center administrators interact with real-time seat inventory, dynamic milestones, and offline-first mobile features.
            </p>
          </div>

          {/* Reset Action */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 border border-stone-300 dark:border-stone-800 rounded-lg hover:border-amber-500/40 bg-white dark:bg-stone-900/60 transition-colors shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Demo State</span>
            </button>
          </div>
        </div>

        {/* Prototype Master Controller Bar */}
        <div className="p-3 rounded-2xl bg-white/90 dark:bg-stone-900/90 border border-stone-200 dark:border-stone-800 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6 shadow-md">
          
          {/* Functional Screen Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
            <button
              onClick={() => { setActiveScreen('student'); }}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
                activeScreen === 'student'
                  ? 'bg-amber-500 text-stone-950 font-bold shadow-[0_0_15px_rgba(245,158,11,0.35)]'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800/60'
              }`}
            >
              <span>1. Student Dashboard</span>
            </button>

            <button
              onClick={() => { setActiveScreen('registration'); }}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
                activeScreen === 'registration'
                  ? 'bg-amber-500 text-stone-950 font-bold shadow-[0_0_15px_rgba(245,158,11,0.35)]'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800/60'
              }`}
            >
              <span>2. Real-Time Registration</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </button>

            <button
              onClick={() => { setActiveScreen('admin'); }}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
                activeScreen === 'admin'
                  ? 'bg-amber-500 text-stone-950 font-bold shadow-[0_0_15px_rgba(245,158,11,0.35)]'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800/60'
              }`}
            >
              <span>3. Admin Panel & CSV</span>
            </button>

            <button
              onClick={() => { setActiveScreen('pwa'); setDeviceFrame('mobile'); }}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
                activeScreen === 'pwa'
                  ? 'bg-amber-500 text-stone-950 font-bold shadow-[0_0_15px_rgba(245,158,11,0.35)]'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800/60'
              }`}
            >
              <span>4. PWA Mobile View</span>
            </button>
          </div>

          {/* Device Frame Viewport Controls (when not strictly PWA mobile) */}
          {activeScreen !== 'pwa' && (
            <div className="flex items-center gap-1 bg-stone-100 dark:bg-stone-950 p-1 rounded-xl border border-stone-200 dark:border-stone-800 self-end md:self-auto">
              <button
                onClick={() => setDeviceFrame('desktop')}
                className={`p-1.5 rounded-lg text-xs transition-colors ${
                  deviceFrame === 'desktop'
                    ? 'bg-white dark:bg-stone-800 text-amber-600 dark:text-amber-400 shadow-sm'
                    : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-300'
                }`}
                title="Desktop 1440px view"
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => setDeviceFrame('tablet')}
                className={`p-1.5 rounded-lg text-xs transition-colors ${
                  deviceFrame === 'tablet'
                    ? 'bg-white dark:bg-stone-800 text-amber-600 dark:text-amber-400 shadow-sm'
                    : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-300'
                }`}
                title="Tablet 768px view"
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                onClick={() => setDeviceFrame('mobile')}
                className={`p-1.5 rounded-lg text-xs transition-colors ${
                  deviceFrame === 'mobile'
                    ? 'bg-white dark:bg-stone-800 text-amber-600 dark:text-amber-400 shadow-sm'
                    : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-300'
                }`}
                title="Mobile PWA view"
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Optional Toast Notice */}
        {toastMessage && (
          <div className="mb-4 p-3 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs flex items-center gap-2 animate-fadeIn">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Prototype Outer Chassis with styling mirroring user's image */}
        <div 
          className={`mx-auto transition-all duration-300 ${
            deviceFrame === 'mobile' || activeScreen === 'pwa'
              ? 'max-w-2xl'
              : deviceFrame === 'tablet'
              ? 'max-w-4xl'
              : 'w-full'
          }`}
        >
          <div className="rounded-2xl sm:rounded-3xl bg-stone-950 border border-stone-800 shadow-2xl p-3 sm:p-5 glow-amber-card relative">
            
            {/* Browser / Shell Header matching image chrome dots */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-800/80">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/70" />
                <span className="w-3 h-3 rounded-full bg-amber-500/70" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                <span className="text-xs font-mono text-stone-400 ml-2 hidden sm:inline-block">
                  radian.platform · {activeScreen.toUpperCase()}
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="text-stone-400 hidden sm:inline-block">Supabase Realtime:</span>
                <span className="flex items-center gap-1.5 text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Synced
                </span>
              </div>
            </div>

            {/* Active Prototype Content */}
            <div className="min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScreen}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  {activeScreen === 'student' && (
                    <StudentDashboardView
                      milestones={milestones}
                      activity={activity}
                      onAddActivity={handleAddActivity}
                      onUpdateMilestone={handleUpdateMilestone}
                    />
                  )}

                  {activeScreen === 'registration' && (
                    <RegistrationView
                      courses={courses}
                      onBookSeat={handleBookSeat}
                    />
                  )}

                  {activeScreen === 'admin' && (
                    <AdminPanelView
                      courses={courses}
                      enrollments={enrollments}
                      onUpdateCourseSeats={handleUpdateCourseSeats}
                      onUpdateEnrollmentStatus={handleUpdateEnrollmentStatus}
                    />
                  )}

                  {activeScreen === 'pwa' && (
                    <PwaMobileView
                      courses={courses}
                      milestones={milestones}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
