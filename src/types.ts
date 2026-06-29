export interface Slide {
  id: string;
  number: string;
  label: string;
  kicker: string;
}

export interface Course {
  code: string;
  title: string;
  type: 'theory' | 'clinical' | 'practical';
  cohort: string;
  instructor: string;
  credits: number;
  lectures: number;
  progress: number;
  materialsCount: number;
  dueTasks: number;
  average: string;
  banner: string;
}

export interface Assignment {
  id: string;
  title: string;
  course: string;
  due: string;
  dueDays: string;
  status: 'to do' | 'submitted' | 'graded';
  type: string;
  description: string;
  grade?: string;
  score?: string;
  materials: { name: string; url: string }[];
}

export interface FeeTransaction {
  date: string;
  description: string;
  charge?: number;
  payment?: number;
  balance: number;
  status: 'due' | 'paid ✓';
  ref?: string;
}

export interface ClinicalLog {
  date: string;
  ward: string;
  activities: string;
  hours: number;
  status: 'approved' | 'pending';
}

export interface LabLog {
  date: string;
  specimen: string;
  procedure: string;
  result: string;
  signOff: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
  type: 'Textbook' | 'Journal' | 'Past paper' | 'E-book' | 'WHO publication';
  subject: string;
  available: boolean;
  count?: number;
  location?: string;
  queueCount?: number;
  downloadUrl?: string;
}

export interface StudentRosterItem {
  id: string;
  name: string;
  studentId: string;
  status: 'present' | 'absent' | 'late' | 'excused';
  note?: string;
}
