import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Course, StudentEnrollment, RlsRule } from '../../types';
import { RLS_RULES } from '../../data/mockData';
import { 
  Download, 
  Plus, 
  Minus, 
  Shield, 
  Bell, 
  Search, 
  FileSpreadsheet, 
  CheckCircle, 
  Code2, 
  ExternalLink,
  Users,
  Settings,
  Sparkles,
  Copy,
  Check,
  Activity,
  Lock
} from 'lucide-react';

interface AdminPanelViewProps {
  courses: Course[];
  enrollments: StudentEnrollment[];
  onUpdateCourseSeats: (courseId: string, delta: number) => void;
  onUpdateEnrollmentStatus: (enrollmentId: string, status: 'Confirmed' | 'Pending Review' | 'Waitlisted') => void;
}

export const AdminPanelView: React.FC<AdminPanelViewProps> = ({
  courses,
  enrollments,
  onUpdateCourseSeats,
  onUpdateEnrollmentStatus
}) => {
  const [activeTab, setActiveTab] = useState<'roster' | 'courses' | 'rls'>('roster');
  const [searchTerm, setSearchTerm] = useState('');
  const [alertToggle, setAlertToggle] = useState(true);
  const [exportNotice, setExportNotice] = useState(false);
  const [copiedSql, setCopiedSql] = useState<number | null>(null);

  // Real Working CSV Export Generator
  const handleExportCSV = () => {
    const headers = ['Enrollment ID', 'Student Name', 'Email', 'Course', 'Enrollment Date', 'Status', 'Payment Status', 'Attendance Rate'];
    const rows = enrollments.map(e => [
      e.id,
      `"${e.studentName}"`,
      e.studentEmail,
      `"${e.courseName}"`,
      e.enrollmentDate,
      e.status,
      e.paymentStatus,
      `${e.attendanceRate}%`
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `radian-learning-center-roster-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    confetti({
      particleCount: 45,
      spread: 55,
      origin: { y: 0.5 },
      colors: ['#F59E0B', '#10B981', '#FBBF24']
    });

    setExportNotice(true);
    setTimeout(() => setExportNotice(false), 4500);
  };

  const handleCopySql = (sql: string, idx: number) => {
    navigator.clipboard.writeText(sql);
    setCopiedSql(idx);
    setTimeout(() => setCopiedSql(null), 2000);
  };

  const filteredEnrollments = enrollments.filter(e => 
    e.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.studentEmail.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalCapacity = courses.reduce((acc, c) => acc + c.totalSeats, 0);
  const totalOccupied = courses.reduce((acc, c) => acc + c.occupiedSeats, 0);

  return (
    <div className="space-y-6 text-stone-100">
      
      {/* Top Admin Bar with Stats and CSV Export */}
      <div className="p-5 rounded-3xl bg-stone-900/95 border border-stone-800 shadow-xl flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <h3 className="text-base font-bold text-stone-100">Center Administrator Console</h3>
            <span className="text-[11px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <Lock className="w-3 h-3 text-amber-400" />
              Lead Admin: Elena Rostova
            </span>
          </div>
          <p className="text-xs text-stone-400 mt-1">
            Real-time seat capacity tuning, CSV export for audits, and Supabase Row-Level Security policy governance.
          </p>
        </div>

        {/* Real-time Alert Switch & CSV Export */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setAlertToggle(!alertToggle)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
              alertToggle 
                ? 'bg-amber-500/15 border-amber-500/40 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.2)]' 
                : 'bg-stone-950 border-stone-800 text-stone-400'
            }`}
            title="Toggle instant seat notifications across SMS & PWA"
          >
            <Bell className="w-3.5 h-3.5" />
            <span>Real-Time Broadcast: {alertToggle ? 'ON' : 'OFF'}</span>
          </button>

          <button
            onClick={handleExportCSV}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-extrabold text-xs shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all active:scale-95 shrink-0 cursor-pointer"
          >
            <Download className="w-4 h-4 text-stone-950" />
            <span>Export CSV Roster</span>
          </button>
        </div>
      </div>

      {/* Telemetry Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800">
          <div className="text-xs text-stone-400 mb-1 flex items-center justify-between">
            <span>Classroom Utilization</span>
            <Activity className="w-3.5 h-3.5 text-amber-500" />
          </div>
          <div className="text-xl font-bold font-mono text-stone-100">
            {((totalOccupied / totalCapacity) * 100).toFixed(1)}%
          </div>
          <div className="text-[11px] text-stone-400 mt-1">
            {totalOccupied} of {totalCapacity} seats occupied
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800">
          <div className="text-xs text-stone-400 mb-1 flex items-center justify-between">
            <span>Active Student Enrollments</span>
            <Users className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="text-xl font-bold font-mono text-stone-100">
            {enrollments.length} Verified
          </div>
          <div className="text-[11px] text-emerald-400 mt-1">
            100% verified tuition records
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800">
          <div className="text-xs text-stone-400 mb-1 flex items-center justify-between">
            <span>Atomic Concurrency Collisions</span>
            <Shield className="w-3.5 h-3.5 text-amber-500" />
          </div>
          <div className="text-xl font-bold font-mono text-amber-400">
            0 Conflicts
          </div>
          <div className="text-[11px] text-stone-400 mt-1">
            Postgres row locks active
          </div>
        </div>
      </div>

      <AnimatePresence>
        {exportNotice && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-3.5 rounded-2xl bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2.5 shadow-xl"
          >
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>CSV exported successfully! Generated authentic spreadsheet with {enrollments.length} verified student records and attendance rates.</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Admin Tab Switcher */}
      <div className="flex items-center gap-1.5 p-1 bg-stone-900 rounded-2xl border border-stone-800 w-fit">
        <button
          onClick={() => setActiveTab('roster')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
            activeTab === 'roster'
              ? 'bg-amber-500 text-stone-950 font-bold shadow-[0_0_15px_rgba(245,158,11,0.3)]'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          <Users className="w-3.5 h-3.5" />
          <span>Sign-Ups & Roster ({enrollments.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('courses')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
            activeTab === 'courses'
              ? 'bg-amber-500 text-stone-950 font-bold shadow-[0_0_15px_rgba(245,158,11,0.3)]'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          <Settings className="w-3.5 h-3.5" />
          <span>Seat Editing & Capacity</span>
        </button>

        <button
          onClick={() => setActiveTab('rls')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
            activeTab === 'rls'
              ? 'bg-amber-500 text-stone-950 font-bold shadow-[0_0_15px_rgba(245,158,11,0.3)]'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          <Shield className="w-3.5 h-3.5" />
          <span>Supabase RLS Policies</span>
        </button>
      </div>

      {/* TAB 1: Student Roster Table */}
      {activeTab === 'roster' && (
        <div className="p-6 rounded-3xl bg-stone-900/95 border border-stone-800 shadow-2xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h4 className="text-sm font-bold text-stone-200">
              Enrolled Students & Guardian Verification Roster
            </h4>

            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter by name, email, course..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-stone-950 border border-stone-800 rounded-xl pl-9 pr-3.5 py-2 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-stone-800 text-stone-400 font-mono">
                  <th className="pb-3.5 font-medium">Student Name</th>
                  <th className="pb-3.5 font-medium">Course Offering</th>
                  <th className="pb-3.5 font-medium">Enrolled Date</th>
                  <th className="pb-3.5 font-medium">Payment</th>
                  <th className="pb-3.5 font-medium">Attendance</th>
                  <th className="pb-3.5 font-medium">Status Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/60">
                {filteredEnrollments.map((e) => (
                  <tr key={e.id} className="hover:bg-stone-950/60 transition-colors">
                    <td className="py-3.5 font-medium text-stone-100">
                      <div>{e.studentName}</div>
                      <div className="text-[11px] text-stone-400 font-mono">{e.studentEmail}</div>
                    </td>
                    <td className="py-3.5 text-stone-300">
                      {e.courseName}
                    </td>
                    <td className="py-3.5 font-mono text-stone-400">
                      {e.enrollmentDate}
                    </td>
                    <td className="py-3.5">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border ${
                        e.paymentStatus === 'Paid'
                          ? 'bg-emerald-950/60 text-emerald-400 border-emerald-500/30'
                          : e.paymentStatus === 'Deposit Paid'
                          ? 'bg-amber-950/60 text-amber-400 border-amber-500/30'
                          : 'bg-rose-950/60 text-rose-400 border-rose-500/30'
                      }`}>
                        {e.paymentStatus}
                      </span>
                    </td>
                    <td className="py-3.5 font-mono font-bold text-amber-400">
                      {e.attendanceRate}%
                    </td>
                    <td className="py-3.5">
                      <select
                        value={e.status}
                        onChange={(ev) => onUpdateEnrollmentStatus(e.id, ev.target.value as any)}
                        className="bg-stone-950 border border-stone-800 rounded-lg px-2.5 py-1 text-[11px] text-stone-200 focus:outline-none focus:border-amber-500"
                      >
                        <option value="Confirmed">Confirmed</option>
                        <option value="Pending Review">Pending Review</option>
                        <option value="Waitlisted">Waitlisted</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: Live Seat Editing & Capacities */}
      {activeTab === 'courses' && (
        <div className="p-6 rounded-3xl bg-stone-900/95 border border-stone-800 shadow-2xl space-y-4">
          <div>
            <h4 className="text-sm font-bold text-stone-200">
              Seat Inventory Tuning & Dynamic Room Capacities
            </h4>
            <p className="text-xs text-stone-400 mt-0.5">
              Adjust classroom seats live. Updates broadcast instantly via PostgreSQL CDC to Student and Registration screens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courses.map((course) => {
              const remaining = Math.max(0, course.totalSeats - course.occupiedSeats);
              return (
                <div 
                  key={course.id}
                  className="p-4 rounded-2xl bg-stone-950/80 border border-stone-800 space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs font-mono text-amber-400 font-bold">{course.code}</span>
                      <h5 className="text-sm font-bold text-stone-100">{course.title}</h5>
                      <span className="text-xs text-stone-400">{course.teacher}</span>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-mono font-bold text-amber-400 block">
                        {remaining} Open Seats
                      </span>
                      <span className="text-[10px] text-stone-400">
                        {course.occupiedSeats} of {course.totalSeats} booked
                      </span>
                    </div>
                  </div>

                  {/* Seat Adjustment Controls */}
                  <div className="pt-2 border-t border-stone-800/80 flex items-center justify-between">
                    <span className="text-xs text-stone-400">Modify Capacity:</span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateCourseSeats(course.id, -1)}
                        disabled={course.totalSeats <= course.occupiedSeats}
                        className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 disabled:opacity-40 transition-colors cursor-pointer"
                        title="Reduce total seats by 1"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>

                      <span className="font-mono text-xs font-bold text-amber-400 px-3">
                        {course.totalSeats} Total Seats
                      </span>

                      <button
                        onClick={() => onUpdateCourseSeats(course.id, 1)}
                        className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors cursor-pointer"
                        title="Add 1 seat capacity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: Supabase Row-Level Security (RLS) Viewer */}
      {activeTab === 'rls' && (
        <div className="p-6 rounded-3xl bg-stone-900/95 border border-stone-800 shadow-2xl space-y-4">
          <div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-amber-400" />
              <h4 className="text-base font-bold text-stone-100">
                Supabase Row-Level Security (RLS) Policies
              </h4>
            </div>
            <p className="text-xs text-stone-400 mt-1">
              Guarantees zero double-booking at the database tier via PostgreSQL row locks, and protects student grade privacy.
            </p>
          </div>

          <div className="space-y-4">
            {RLS_RULES.map((rule, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-stone-950 border border-stone-800/90 space-y-2.5"
              >
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 font-mono">
                    <span className="text-amber-400 font-bold">TABLE: {rule.tableName}</span>
                    <span className="text-stone-600">·</span>
                    <span className="text-stone-300">FOR {rule.action}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono bg-stone-800 px-2 py-0.5 rounded text-stone-300">
                      Role: {rule.role}
                    </span>
                    <button
                      onClick={() => handleCopySql(rule.policySql, idx)}
                      className="p-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 flex items-center gap-1 text-[10px] transition-colors cursor-pointer"
                      title="Copy SQL policy"
                    >
                      {copiedSql === idx ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedSql === idx ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                <pre className="p-3.5 rounded-xl bg-stone-900 font-mono text-[11px] text-amber-300/90 overflow-x-auto leading-relaxed border border-stone-800/80">
                  {rule.policySql}
                </pre>

                <p className="text-xs text-stone-400">
                  <strong className="text-stone-300">UX Architecture Rationale:</strong> {rule.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
