import { Course, Assignment, FeeTransaction, ClinicalLog, LabLog, Book, StudentRosterItem } from './types';

export const coursesData: Course[] = [
  {
    code: 'NUR 201',
    title: 'Anatomy & Physiology II',
    type: 'theory',
    cohort: 'Year 2 · Sem 1',
    instructor: 'Mr. Lubega',
    credits: 60,
    lectures: 30,
    progress: 64,
    materialsCount: 12,
    dueTasks: 2,
    average: 'A-',
    banner: '骨'
  },
  {
    code: 'NUR 204',
    title: 'Pharmacology & Drug Mgmt',
    type: 'theory',
    cohort: 'Year 2 · Sem 1',
    instructor: 'Ms. Nansubuga',
    credits: 45,
    lectures: 25,
    progress: 48,
    materialsCount: 9,
    dueTasks: 1,
    average: 'B+',
    banner: '💊'
  },
  {
    code: 'NUR 210',
    title: 'Paediatric Nursing — clinical',
    type: 'clinical',
    cohort: 'Year 2 · Sem 1',
    instructor: 'Sr. Namutebi',
    credits: 120,
    lectures: 0,
    progress: 38,
    materialsCount: 0,
    dueTasks: 1,
    average: 'Pass',
    banner: '👶'
  },
  {
    code: 'NUR 206',
    title: 'Microbiology',
    type: 'practical',
    cohort: 'Year 2 · Sem 1',
    instructor: 'Dr. Kasozi',
    credits: 30,
    lectures: 12,
    progress: 71,
    materialsCount: 6,
    dueTasks: 1,
    average: 'A-',
    banner: '🔬'
  },
  {
    code: 'NUR 208',
    title: 'Community & Public Health',
    type: 'theory',
    cohort: 'Year 2 · Sem 1',
    instructor: 'Ms. Achieng',
    credits: 45,
    lectures: 15,
    progress: 52,
    materialsCount: 8,
    dueTasks: 0,
    average: 'B',
    banner: '🏡'
  },
  {
    code: 'GEN 102',
    title: 'Islamic Ethics in Healthcare',
    type: 'theory',
    cohort: 'Year 2 · Sem 1',
    instructor: 'Sheikh Ssali',
    credits: 30,
    lectures: 10,
    progress: 80,
    materialsCount: 5,
    dueTasks: 0,
    average: 'A',
    banner: '🕌'
  }
];

export const initialAssignments: Assignment[] = [
  {
    id: '1',
    title: 'Pharmacology essay · drug interactions',
    course: 'NUR 204 Pharmacology',
    due: 'Fri 3 Jul',
    dueDays: 'in 2 days',
    status: 'to do',
    type: 'individual · 2,000 words',
    description: 'Discuss 3 common drug-drug interactions in paediatric care & mitigation strategies. Reference WHO essential medicines list.',
    materials: [
      { name: 'Brief.pdf', url: '#' },
      { name: 'Rubric.pdf', url: '#' },
      { name: 'Reading list (3)', url: '#' }
    ]
  },
  {
    id: '2',
    title: 'Microbiology quiz · gram staining',
    course: 'NUR 206 Microbiology',
    due: 'Mon 6 Jul',
    dueDays: 'in 5 days',
    status: 'to do',
    type: 'online · 30 min · 2 attempts',
    description: 'A 20-question multiple choice quiz testing Gram-positive vs Gram-negative staining procedures and lab safety.',
    materials: [
      { name: 'Staining Guide.pdf', url: '#' }
    ]
  },
  {
    id: '3',
    title: 'Reflective journal · week 8',
    course: 'NUR 210 Paediatrics',
    due: 'Wed 8 Jul',
    dueDays: 'in 7 days',
    status: 'to do',
    type: 'clinical reflection · 800 words',
    description: 'Document your clinical findings in Paediatric triage. Reflect on communication barriers with parents of sick children.',
    materials: [
      { name: 'Reflective_Framework.pdf', url: '#' }
    ]
  },
  {
    id: '4',
    title: 'Anatomy II — bone labels test',
    course: 'NUR 201 Anatomy',
    due: 'Passed',
    dueDays: 'submitted 28 Jun',
    status: 'submitted',
    type: 'practical diagram · 50 labels',
    description: 'Label the major bones of the human skull, upper limbs, and thoracic cage in high-detail practical diagrams.',
    materials: []
  },
  {
    id: '5',
    title: 'Community Health field report',
    course: 'NUR 208 Comm Hlth',
    due: 'Passed',
    dueDays: 'graded',
    status: 'graded',
    type: 'fieldwork report · group',
    description: 'Summarize health indicators collected from 20 household interviews in Kibuli outreach. Identify immunisation gaps.',
    grade: 'B+',
    score: '76',
    materials: []
  },
  {
    id: '6',
    title: 'Islamic Ethics · case study',
    course: 'GEN 102 Ethics',
    due: 'Passed',
    dueDays: 'graded',
    status: 'graded',
    type: 'case analysis · individual',
    description: 'Analyze an end-of-life care situation using Islamic bioethical principles of preservation of life (Hifz an-Nafs) and public interest (Maslahah).',
    grade: 'A-',
    score: '82',
    materials: []
  }
];

export const initialFeesLedger: FeeTransaction[] = [
  {
    date: '02 May',
    description: 'Tuition · Semester 1',
    charge: 1000000,
    balance: 1000000,
    status: 'due'
  },
  {
    date: '02 May',
    description: 'Functional fees · examinations',
    charge: 120000,
    balance: 1120000,
    status: 'due'
  },
  {
    date: '02 May',
    description: 'Clinical uniform & lab kit',
    charge: 80000,
    balance: 1200000,
    status: 'due'
  },
  {
    date: '14 May',
    description: 'MTN MoMo · ref MM26144A',
    payment: 500000,
    balance: 700000,
    status: 'paid ✓',
    ref: 'MM26144A'
  },
  {
    date: '06 Jun',
    description: 'Airtel Money · ref AM26-882',
    payment: 280000,
    balance: 420000,
    status: 'paid ✓',
    ref: 'AM26-882'
  }
];

export const initialClinicalLogs: ClinicalLog[] = [
  {
    date: '28 Jun',
    ward: 'Paediatrics',
    activities: 'Vitals, drug admin, ward round w/ Dr. Onyait',
    hours: 4,
    status: 'pending'
  },
  {
    date: '26 Jun',
    ward: 'Paediatrics',
    activities: 'Immunisation clinic, charting',
    hours: 6,
    status: 'approved'
  },
  {
    date: '24 Jun',
    ward: 'Paediatrics',
    activities: 'Admission assessments, NG-tube observation',
    hours: 5,
    status: 'approved'
  },
  {
    date: '22 Jun',
    ward: 'Paediatrics',
    activities: 'Triage shadowing, oral rehydration teaching',
    hours: 4,
    status: 'approved'
  }
];

export const initialLabLogs: LabLog[] = [
  {
    date: '29 Jun',
    specimen: 'BS-2841',
    procedure: 'Malaria smear · thick & thin',
    result: '+ P. falciparum',
    signOff: 'pending'
  },
  {
    date: '28 Jun',
    specimen: 'UR-1742',
    procedure: 'Urinalysis · dipstick + microscopy',
    result: 'Normal',
    signOff: 'Mr. Kayondo ✓'
  },
  {
    date: '28 Jun',
    specimen: 'ST-0918',
    procedure: 'Stool exam · ova & parasite',
    result: '+ Ascaris',
    signOff: 'Mr. Kayondo ✓'
  },
  {
    date: '27 Jun',
    specimen: 'BL-3104',
    procedure: 'Full blood count · manual',
    result: 'WBC ↑ 14.2',
    signOff: 'Mr. Kayondo ✓'
  }
];

export const libraryBooks: Book[] = [
  {
    id: '1',
    title: "Tortora's Anatomy & Physiology, 15e",
    author: 'Tortora',
    year: 2023,
    type: 'Textbook',
    subject: 'Anatomy',
    available: true,
    location: 'Sec A · 612.T'
  },
  {
    id: '2',
    title: 'Katzung Basic & Clinical Pharmacology',
    author: 'Katzung',
    year: 2022,
    type: 'Textbook',
    subject: 'Pharmacology',
    available: true,
    count: 2,
    location: 'Sec B · 615.K'
  },
  {
    id: '3',
    title: 'WHO Essential Medicines List 2024',
    author: 'WHO',
    year: 2024,
    type: 'WHO publication',
    subject: 'Pharmacology',
    available: true,
    downloadUrl: '4.2 MB'
  },
  {
    id: '4',
    title: 'Cheesbrough Medical Lab Manual',
    author: 'Cheesbrough',
    year: 2020,
    type: 'Textbook',
    subject: 'Lab science',
    available: true,
    location: 'Sec L · 616.07'
  },
  {
    id: '5',
    title: 'Myles Textbook for Midwives',
    author: 'Marshall',
    year: 2024,
    type: 'Textbook',
    subject: 'Anatomy',
    available: true,
    location: 'Sec M · 618.2'
  },
  {
    id: '6',
    title: 'Lippincott Manual of Nursing Practice',
    author: 'Nettina',
    year: 2021,
    type: 'Textbook',
    subject: 'Anatomy',
    available: false,
    queueCount: 2
  },
  {
    id: '7',
    title: 'East African Medical Journal · vol 102',
    author: 'EAMJ',
    year: 2025,
    type: 'Journal',
    subject: 'Public health',
    available: true,
    downloadUrl: '18 MB'
  },
  {
    id: '8',
    title: 'Islamic Bioethics: Case Studies',
    author: 'Al-Bar & Chamsi-Pasha',
    year: 2021,
    type: 'E-book',
    subject: 'Islamic ethics',
    available: true,
    location: 'Sec E · 174.2'
  }
];

export const initialStudentRoster: StudentRosterItem[] = [
  { id: '1', name: 'Achieng Sarah', studentId: 'N/2024/0101', status: 'present' },
  { id: '2', name: 'Bukenya Musa', studentId: 'N/2024/0114', status: 'present' },
  { id: '3', name: 'Kabazzi Joyce', studentId: 'N/2024/0118', status: 'absent', note: 'no message' },
  { id: '4', name: 'Nakato Aisha', studentId: 'N/2024/0142', status: 'present' },
  { id: '5', name: 'Nakimuli Sumayya', studentId: 'N/2024/0151', status: 'late', note: '15 min late · noted' },
  { id: '6', name: 'Namuli Fatumah', studentId: 'N/2024/0158', status: 'excused', note: 'medical · note on file' },
  { id: '7', name: 'Sserunjogi Hamza', studentId: 'N/2024/0167', status: 'present' },
  { id: '8', name: 'Tumusiime Grace', studentId: 'N/2024/0171', status: 'present' }
];
