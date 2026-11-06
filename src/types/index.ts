export interface Course {
  id: string;
  title: string;
  code: string;
  category: 'English' | 'German' | 'Arabic' | 'Academic Prep';
  level: string;
  schedule: string;
  teacher: string;
  totalSeats: number;
  occupiedSeats: number;
  tuition: number;
  status: 'Open' | 'Filling Fast' | 'Waitlist';
  description: string;
  tags: string[];
}

export interface ActivityItem {
  id: string;
  studentName: string;
  avatar: string;
  action: string;
  courseTitle: string;
  timestamp: string;
  type: 'milestone' | 'submission' | 'attendance' | 'quiz';
  score?: string;
}

export interface Milestone {
  id: string;
  title: string;
  course: string;
  progress: number;
  targetDate: string;
  status: 'In Progress' | 'Completed' | 'Upcoming';
  verifiedByTeacher: boolean;
  score?: number;
}

export interface StudentEnrollment {
  id: string;
  studentName: string;
  studentEmail: string;
  courseId: string;
  courseName: string;
  enrollmentDate: string;
  status: 'Confirmed' | 'Pending Review' | 'Waitlisted';
  paymentStatus: 'Paid' | 'Deposit Paid' | 'Pending';
  attendanceRate: number;
}

export interface Persona {
  id: string;
  name: string;
  role: string;
  archetype: string;
  avatar: string;
  quote: string;
  goals: string[];
  painPoints: string[];
  solvedWith: string[];
}

export interface RlsRule {
  tableName: string;
  action: 'SELECT' | 'INSERT' | 'UPDATE' | 'DELETE' | 'ALL';
  role: string;
  policySql: string;
  explanation: string;
}
