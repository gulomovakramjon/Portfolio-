import { Course, Milestone, ActivityItem, StudentEnrollment, Persona, RlsRule } from '../types';

export const INITIAL_COURSES: Course[] = [
  {
    id: 'course-ielts-adv',
    title: 'IELTS Academic 8.0+ Band Mastery',
    code: 'ENG-801',
    category: 'English',
    level: 'Advanced C1/C2',
    schedule: 'Mon / Wed / Fri · 18:30 - 20:30',
    teacher: 'Elena Rostova, M.Ed',
    totalSeats: 15,
    occupiedSeats: 14, // 1 seat left! Filling Fast
    tuition: 380,
    status: 'Filling Fast',
    description: 'Intensive immersion focusing on complex band 8+ writing argumentation, lexical precision, and speaking fluency simulations.',
    tags: ['IELTS', 'Band 8+', 'Speaking Club', 'Weekly Mocks']
  },
  {
    id: 'course-ger-b1',
    title: 'German B1 Intensive Zertifikat Deutsch',
    code: 'GER-301',
    category: 'German',
    level: 'Intermediate B1',
    schedule: 'Tue / Thu · 17:00 - 19:30',
    teacher: 'Markus Lindner, Goethe-Zertifiziert',
    totalSeats: 12,
    occupiedSeats: 9,
    tuition: 340,
    status: 'Open',
    description: 'Goethe-Institut exam preparation curriculum covering grammar consolidation, reading comprehension, and oral conversation.',
    tags: ['Goethe B1', 'Grammar', 'Audio Lab', 'Visa Prep']
  },
  {
    id: 'course-ara-conv',
    title: 'Modern Standard Arabic Fluency & Script',
    code: 'ARA-202',
    category: 'Arabic',
    level: 'Beginner to Intermediate',
    schedule: 'Sat / Sun · 10:00 - 12:30',
    teacher: 'Tariq Al-Mansoor',
    totalSeats: 10,
    occupiedSeats: 10, // Full / Waitlist
    tuition: 290,
    status: 'Waitlist',
    description: 'Comprehensive phonetics, calligraphic mastery, syntax foundations, and business dialect conversational drills.',
    tags: ['MSA', 'Phonetics', 'Cultural Context', 'Dialects']
  },
  {
    id: 'course-sat-eng',
    title: 'Digital SAT Reading & Writing Breakthrough',
    code: 'SAT-105',
    category: 'Academic Prep',
    level: 'High School / Pre-College',
    schedule: 'Mon / Thu · 16:00 - 18:00',
    teacher: 'David Vance, Ed.D',
    totalSeats: 16,
    occupiedSeats: 11,
    tuition: 420,
    status: 'Open',
    description: 'Adaptive algorithm strategies, speed vocabulary synthesis, rhetorical analysis, and timed computer adaptive test practice.',
    tags: ['Digital SAT', '750+ Target', 'Adaptive Testing', 'Essay']
  },
  {
    id: 'course-eng-business',
    title: 'Executive English & Corporate Negotiations',
    code: 'ENG-904',
    category: 'English',
    level: 'Upper Intermediate B2+',
    schedule: 'Wed / Sat · 19:00 - 21:00',
    teacher: 'Sarah Jenkins',
    totalSeats: 10,
    occupiedSeats: 6,
    tuition: 460,
    status: 'Open',
    description: 'Contract synthesis, cross-cultural diplomacy, board presentations, and persuasive negotiation tactics for working professionals.',
    tags: ['Negotiation', 'Pitching', 'Case Studies', 'Networking']
  }
];

export const INITIAL_MILESTONES: Milestone[] = [
  {
    id: 'm1',
    title: 'Academic Writing Task 2 Argumentation Essay',
    course: 'IELTS Academic 8.0+ Band Mastery',
    progress: 92,
    targetDate: 'Nov 12, 2026',
    status: 'In Progress',
    verifiedByTeacher: true,
    score: 8.5
  },
  {
    id: 'm2',
    title: 'Goethe B1 Modal Verbs & Subjunctive II',
    course: 'German B1 Intensive',
    progress: 74,
    targetDate: 'Nov 18, 2026',
    status: 'In Progress',
    verifiedByTeacher: true,
    score: 88
  },
  {
    id: 'm3',
    title: 'Arabic Broken Plurals & Root Derivations',
    course: 'Modern Standard Arabic',
    progress: 100,
    targetDate: 'Nov 02, 2026',
    status: 'Completed',
    verifiedByTeacher: true,
    score: 95
  },
  {
    id: 'm4',
    title: 'Full Diagnostic Mock Test #3 (Computer Adaptive)',
    course: 'Digital SAT Reading & Writing',
    progress: 35,
    targetDate: 'Nov 24, 2026',
    status: 'Upcoming',
    verifiedByTeacher: false
  }
];

// Activity hours distribution matching the 7 glowing amber bars in the user's screenshot
export const WEEKLY_CHART_DATA = [
  { day: 'Mon', hours: 3.2, percentage: 48, label: '3.2 hrs' },
  { day: 'Tue', hours: 4.8, percentage: 68, label: '4.8 hrs' },
  { day: 'Wed', hours: 3.5, percentage: 52, label: '3.5 hrs' },
  { day: 'Thu', hours: 6.0, percentage: 84, label: '6.0 hrs' },
  { day: 'Fri', hours: 4.2, percentage: 60, label: '4.2 hrs' },
  { day: 'Sat', hours: 7.1, percentage: 100, label: '7.1 hrs' },
  { day: 'Sun', hours: 5.4, percentage: 76, label: '5.4 hrs' },
];

export const INITIAL_ACTIVITY: ActivityItem[] = [
  {
    id: 'act-1',
    studentName: 'Amina Karimova',
    avatar: 'AK',
    action: 'submitted practice writing essay: "Technology and Cognitive Development in Early Education"',
    courseTitle: 'IELTS Academic 8.0+',
    timestamp: '14 minutes ago',
    type: 'submission'
  },
  {
    id: 'act-2',
    studentName: 'Elena Rostova (Teacher)',
    avatar: 'ER',
    action: 'graded Speaking Simulator Mock #4 · Band Score 8.0 granted',
    courseTitle: 'IELTS Academic 8.0+',
    timestamp: '1 hour ago',
    type: 'milestone',
    score: '8.0 Band'
  },
  {
    id: 'act-3',
    studentName: 'Timur Bekmurodov',
    avatar: 'TB',
    action: 'checked in to live evening lab session via Radian PWA',
    courseTitle: 'German B1 Intensive',
    timestamp: '3 hours ago',
    type: 'attendance'
  },
  {
    id: 'act-4',
    studentName: 'Supabase Realtime Trigger',
    avatar: 'SB',
    action: 'broadcasted seat update for ENG-801: 1 vacancy remaining',
    courseTitle: 'Realtime Seats Engine',
    timestamp: '4 hours ago',
    type: 'quiz'
  }
];

export const INITIAL_ENROLLMENTS: StudentEnrollment[] = [
  {
    id: 'enr-101',
    studentName: 'Amina Karimova',
    studentEmail: 'amina.k@student.edu',
    courseId: 'course-ielts-adv',
    courseName: 'IELTS Academic 8.0+ Band Mastery',
    enrollmentDate: '2026-10-24',
    status: 'Confirmed',
    paymentStatus: 'Paid',
    attendanceRate: 96
  },
  {
    id: 'enr-102',
    studentName: 'Rustam Aliyev',
    studentEmail: 'r.aliyev@outlook.com',
    courseId: 'course-ielts-adv',
    courseName: 'IELTS Academic 8.0+ Band Mastery',
    enrollmentDate: '2026-10-28',
    status: 'Confirmed',
    paymentStatus: 'Paid',
    attendanceRate: 91
  },
  {
    id: 'enr-103',
    studentName: 'Sophia Miller',
    studentEmail: 'sophia.m@globalmail.org',
    courseId: 'course-ger-b1',
    courseName: 'German B1 Intensive',
    enrollmentDate: '2026-11-01',
    status: 'Confirmed',
    paymentStatus: 'Paid',
    attendanceRate: 88
  },
  {
    id: 'enr-104',
    studentName: 'Farrukh Mirzayev',
    studentEmail: 'farrukh99@domain.uz',
    courseId: 'course-ara-conv',
    courseName: 'Modern Standard Arabic Fluency',
    enrollmentDate: '2026-11-03',
    status: 'Waitlisted',
    paymentStatus: 'Pending',
    attendanceRate: 100
  },
  {
    id: 'enr-105',
    studentName: 'Leyla Safina',
    studentEmail: 'leyla.safina@gmail.com',
    courseId: 'course-sat-eng',
    courseName: 'Digital SAT Reading & Writing Breakthrough',
    enrollmentDate: '2026-11-04',
    status: 'Confirmed',
    paymentStatus: 'Deposit Paid',
    attendanceRate: 94
  }
];

export const PERSONAS: Persona[] = [
  {
    id: 'persona-student',
    name: 'Amina Karimova',
    role: 'Student Candidate',
    archetype: 'The Target-Driven High Achiever',
    avatar: '🎓',
    quote: 'I study on the subway and between university lectures. I need to know the second my essay is graded and how close I am to my IELTS 8.0 milestone.',
    goals: [
      'Track concrete progress towards target university language bands',
      'Instant access to feedback without waiting for weekly paper reports',
      'Reserve seat vacancies with instant mobile confirmation'
    ],
    painPoints: [
      'Legacy center sent scattered PDF worksheets across telegram channels',
      'No central view of which homework was graded or overdue',
      'Classes would suddenly be marked "full" without real-time notice'
    ],
    solvedWith: [
      'PWA mobile offline milestone cache with real-time push alerts',
      'Clean interactive progress radial bars and graded milestone history',
      'Instant real-time seat lock during checkout flow'
    ]
  },
  {
    id: 'persona-parent',
    name: 'Suhrob & Nilufar',
    role: 'Parents & Sponsors',
    archetype: 'The Reassured Guardian',
    avatar: '👨‍👩‍👦',
    quote: 'We invest heavily in our daughter’s foreign education. We just want clear, honest transparency on attendance, mock exam trajectories, and fee schedules.',
    goals: [
      'Review bi-weekly teacher verified progress reports without awkward calls',
      'Real-time automated alerts if class attendance drops below 90%',
      'Seamless digital invoice and tuition confirmation receipts'
    ],
    painPoints: [
      'Had to call the reception desk repeatedly during rush weeks',
      'Reports arrived weeks late when it was too late to correct study habits',
      'Confusing paper payment receipts and seat reservation disputes'
    ],
    solvedWith: [
      'Dedicated Parent Read-Only Portal view with milestone verification badges',
      'Automated SMS / PWA alerts for verified test scores and attendance',
      'Exportable verification certificate with cryptographic attendance record'
    ]
  },
  {
    id: 'persona-admin',
    name: 'Elena Rostova',
    role: 'Lead Instructor & Center Admin',
    archetype: 'The Operational Multi-Tasker',
    avatar: '👩‍🏫',
    quote: 'During seasonal enrollment weeks, our phones used to ring off the hook while we juggled Google Sheets. Double-booking a seat was my worst nightmare.',
    goals: [
      'Manage course rosters with zero double-booking risk',
      'One-click CSV exports for accounting and accreditation reviews',
      'Role-governed database security so students cannot modify records'
    ],
    painPoints: [
      'Google Sheets concurrency conflicts caused multiple parents paying for seat #15',
      'Manual calculation of remaining seats and waiting list queues',
      'Teachers spending 8+ hours on manual attendance tabulation'
    ],
    solvedWith: [
      'PostgreSQL Row-Level Security (RLS) guaranteeing atomic seat lock transactions',
      'Real-time admin seat adjustment (+/-) with automatic broadcast to all clients',
      'Instant CSV roster export and automated waitlist promotion engine'
    ]
  }
];

export const RLS_RULES: RlsRule[] = [
  {
    tableName: 'students',
    action: 'SELECT',
    role: 'student_user',
    policySql: `CREATE POLICY "Students can read only their own profile and milestones"
ON public.students
FOR SELECT
USING (auth.uid() = id OR auth.jwt() ->> 'role' IN ('admin', 'teacher'));`,
    explanation: 'Protects student personal identifying information and milestone marks from other students while allowing authenticated instructors full review.'
  },
  {
    tableName: 'courses',
    action: 'SELECT',
    role: 'anon_and_auth',
    policySql: `CREATE POLICY "Public catalog read access with realtime seats"
ON public.courses
FOR SELECT
USING (is_active = true);`,
    explanation: 'Allows unregistered prospective students and parents to browse course offerings and view live available seats in real time.'
  },
  {
    tableName: 'enrollments',
    action: 'INSERT',
    role: 'authenticated',
    policySql: `CREATE POLICY "Atomic seat check and enrollment creation"
ON public.enrollments
FOR INSERT
WITH CHECK (
  auth.uid() = student_id AND
  (SELECT occupied_seats < total_seats FROM public.courses WHERE id = course_id)
);`,
    explanation: 'Database-level barrier preventing over-enrollment: transaction automatically aborts if the course reached maximum seat capacity.'
  },
  {
    tableName: 'admin_audit_log',
    action: 'ALL',
    role: 'admin_only',
    policySql: `CREATE POLICY "Admin full CRUD on courses and seat allocations"
ON public.courses
FOR ALL
USING (auth.jwt() ->> 'role' = 'admin')
WITH CHECK (auth.jwt() ->> 'role' = 'admin');`,
    explanation: 'Restricts seat capacity overrides, tuition changes, and CSV roster downloads exclusively to authorized center administrators.'
  }
];

export const BEFORE_AFTER_METRICS = [
  {
    metric: 'Course Enrollment Time',
    before: '6.8 minutes (phone/paper)',
    after: '1.1 minutes (1-click PWA)',
    change: '-84% Friction',
    highlight: true
  },
  {
    metric: 'Seat Double-Booking Incidents',
    before: '14 incidents / intake',
    after: '0 incidents (Atomic RLS)',
    change: '100% Resolved',
    highlight: true
  },
  {
    metric: 'Mobile Bounce Rate',
    before: '58.4% on old site',
    after: '9.2% on Radian PWA',
    change: '-49.2% Dropoff',
    highlight: false
  },
  {
    metric: 'Teacher Attendance Admin Time',
    before: '8.5 hours / week',
    after: '45 minutes / week',
    change: '91% Time Saved',
    highlight: true
  },
  {
    metric: 'Student Activity Logged',
    before: '22% completion',
    after: '94.2% daily engagement',
    change: '+328% Engagement',
    highlight: false
  }
];

export const OTHER_PORTFOLIO_PROJECTS = [
  {
    id: 'radian-learning',
    title: 'Radian Learning Center',
    category: 'EdTech · SaaS & Mobile PWA',
    year: '2026',
    role: 'Lead Product Designer',
    summary: 'A unified platform replacing legacy language center spreadsheets with real-time seat inventory, student milestone tracking, and Supabase RLS security.',
    tags: ['HTML', 'Tailwind CSS', 'Supabase', 'PWA'],
    accent: '#F59E0B',
    stats: '3.2k Students · 0 Double Bookings'
  },
  {
    id: 'finpulse-terminal',
    title: 'FinPulse Liquidity Terminal',
    category: 'FinTech · High-Frequency Desktop App',
    year: '2025',
    role: 'Principal UX/UI Designer',
    summary: 'Dark-glass execution interface for institutional FX traders. Sub-10ms visual quote updates, customizable multi-monitor workspace, and biometric order sign-off.',
    tags: ['React', 'WebSockets', 'Tailwind CSS', 'Financial UI'],
    accent: '#38BDF8',
    stats: '$4.2B Daily Vol · 120+ Firms'
  },
  {
    id: 'medflow-triage',
    title: 'MedFlow Clinical Triage OS',
    category: 'HealthTech · Emergency Tablet System',
    year: '2025',
    role: 'Senior Product Designer',
    summary: 'Ergonomic touch interface designed for high-stress emergency departments. Rapid patient triage under 30 seconds, offline-first hospital sync, and voice-assisted vitals intake.',
    tags: ['Design System', 'PWA', 'Accessibility', 'HIPAA'],
    accent: '#10B981',
    stats: '18 Hospitals · 35% Faster Triage'
  }
];
