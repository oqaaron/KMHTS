import React, { useState } from 'react';
import { initialStudentRoster } from '../../data';
import { StudentRosterItem } from '../../types';

// ==========================================
// SLIDE 15: Noticeboard & Announcements
// ==========================================
export function AnnouncementsSlide() {
  const [filter, setFilter] = useState<'all' | 'pinned' | 'academic' | 'clinical' | 'wellbeing'>('all');

  const notices = [
    { id: '1', author: 'Principal', date: '27 Jun', title: 'Eid al-Adha Holiday', text: 'All lectures & clinical placements suspend from 5-9 Jul. Ward shift schedules dispatched independently. Eid Mubārak!', type: 'pinned', tag: 'wellbeing' },
    { id: '2', author: 'Registrar', date: '26 Jun', title: 'Sem 1 Mock Exam Timetable', text: 'Mocks run 14-18 Jul. Examination room allocations uploaded under your portal dashboard. Carry your Student ID cards.', type: 'pinned', tag: 'academic' },
    { id: '3', author: 'Librarian', date: 'Today, 09:14', title: 'WHO Journal Access Renewed', text: 'Full access to WHO Bulletin and EMHJ research journals unlocked. Enter via Library → WHO Digital Collection.', type: 'academic', tag: 'academic' },
    { id: '4', author: 'Sr. Namutebi', date: 'Yesterday, 16:02', title: 'Paediatrics Ward shift orientation', text: 'Mandatory orientation briefing for Year 2 clinical students rotating in Paediatrics. Monday 8:00 AM at Paeds Conference room.', type: 'clinical', tag: 'clinical' },
    { id: '5', author: 'Chaplaincy', date: '4 days ago', title: 'Counselling drop-in slots', text: 'Confidential sessional counselling available every Tuesday 14:00 - 17:00 at Admin block, office 12.', type: 'wellbeing', tag: 'wellbeing' }
  ];

  const filteredNotices = notices.filter(n => {
    if (filter === 'all') return true;
    if (filter === 'pinned') return n.type === 'pinned';
    return n.tag === filter;
  });

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 overflow-y-auto">
      <header className="border-b border-slate-100 dark:border-slate-800 pb-2 mb-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="font-mono text-lg font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center">15</span>
          <div>
            <h2 className="font-hand text-2xl font-bold text-slate-855 dark:text-slate-50">Announcements feed</h2>
            <p className="font-hand2 text-xs text-slate-450 dark:text-slate-400">School noticeboard database. Critical alerts broadcast as SMS notifications to active registers.</p>
          </div>
        </div>
      </header>

      {/* Filter notice type rows */}
      <div className="flex gap-1.5 items-center mb-3 text-xs font-hand2">
        {(['all', 'pinned', 'academic', 'clinical', 'wellbeing'] as const).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 border rounded-full cursor-pointer capitalize transition-all ${
              filter === f 
                ? 'bg-blue-600 text-white border-transparent font-medium shadow-2xs' 
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-50'
            }`}
          >
            {f === 'wellbeing' ? 'Wellbeing & events' : f}
          </button>
        ))}
      </div>

      {/* Notice Board Timeline feed */}
      <div className="flex-grow flex flex-col gap-3.5 overflow-y-auto pr-1">
        {filteredNotices.map(n => (
          <div key={n.id} className={`border p-3.5 rounded-xl bg-white dark:bg-slate-900 flex flex-col justify-between shadow-2xs transition-all relative ${
            n.type === 'pinned' ? 'border-blue-200 bg-blue-50/10 dark:border-blue-950 dark:bg-blue-950/10' : 'border-slate-150 dark:border-slate-800'
          }`}>
            <div className="flex justify-between items-start mb-1 text-[10px] font-mono uppercase tracking-wider font-semibold text-slate-400">
              <span>{n.author} · {n.date}</span>
              <span className={`px-2 py-0.5 rounded-full font-bold text-[8px] ${
                n.tag === 'wellbeing' ? 'bg-indigo-50 text-indigo-700' :
                n.tag === 'academic' ? 'bg-blue-50 text-blue-750' :
                'bg-amber-50 text-amber-700'
              }`}>{n.tag}</span>
            </div>

            <h3 className="font-hand text-lg font-bold text-slate-800 dark:text-slate-100 leading-snug">
              {n.type === 'pinned' && <span className="bg-blue-600 text-white text-[8px] px-1.5 py-0.5 rounded font-mono font-bold mr-1.5 align-middle">PINNED</span>}
              {n.title}
            </h3>

            <p className="font-hand2 text-xs text-slate-500 dark:text-slate-450 mt-1.5 leading-relaxed">
              {n.text}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-between border-t border-slate-100 dark:border-slate-800 pt-2.5 text-slate-400 dark:text-slate-500 font-hand2 text-xs mt-3">
        <span>Announcements timeline · noticeboard pipeline</span>
        <span>15 / 17</span>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 16: Admin Dashboard (Principal/Registrar)
// ==========================================
export function AdminDashboardSlide() {
  const [activeQueue, setActiveRole] = useState<'pending' | 'review' | 'letter'>('pending');

  const queues = {
    pending: [
      { name: 'Nassolo Fatumah', appFee: 'paid', status: 'documents review' },
      { name: 'Ssewankambo Henry', appFee: 'paid', status: 'documents review' }
    ],
    review: [
      { name: 'Mutebi Sulaiman', appFee: 'paid', status: 'interview scheduled' }
    ],
    letter: [
      { name: 'Nalwoga Halimah', appFee: 'paid', status: 'letter draft' }
    ]
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 overflow-y-auto">
      <header className="border-b border-slate-100 dark:border-slate-800 pb-2 mb-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="font-mono text-lg font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center">16</span>
          <div>
            <h2 className="font-hand text-2xl font-bold text-slate-855 dark:text-slate-50">Admin dashboard — Principal / Registrar / Bursar</h2>
            <p className="font-hand2 text-xs text-slate-450 dark:text-slate-400">School operations management desk. Tracks fee accounts and sessional admissions pipelines.</p>
          </div>
        </div>
      </header>

      {/* KPI Row cards */}
      <div className="grid grid-cols-5 gap-3 mb-3.5 text-center text-xs">
        <div className="border border-slate-150 dark:border-slate-800 bg-white dark:bg-slate-900 p-2.5 rounded-xl shadow-2xs">
          <div className="font-hand2 text-[10px] text-slate-400">Total Enrollment</div>
          <div className="font-mono text-lg font-bold text-blue-600 dark:text-blue-455 mt-0.5">386</div>
          <div className="font-hand2 text-[9px] text-slate-450 mt-1">Nursing 244 · Lab 142</div>
        </div>
        <div className="border border-slate-150 dark:border-slate-800 bg-white dark:bg-slate-900 p-2.5 rounded-xl shadow-2xs">
          <div className="font-hand2 text-[10px] text-slate-400">Attendance Rate</div>
          <div className="font-mono text-lg font-bold text-slate-850 dark:text-slate-100 mt-0.5">88%</div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-1 rounded-full mt-2.5 overflow-hidden">
            <div className="bg-blue-600 h-full" style={{ width: '88%' }} />
          </div>
        </div>
        <div className="border border-slate-150 dark:border-slate-800 bg-white dark:bg-slate-900 p-2.5 rounded-xl shadow-2xs">
          <div className="font-hand2 text-[10px] text-slate-400">Fees Collected</div>
          <div className="font-mono text-base font-bold text-blue-600 dark:text-blue-400 mt-0.5">UGX 312M</div>
          <div className="font-hand2 text-[9px] text-slate-450 mt-1">of 460M budget · 68%</div>
        </div>
        <div className="border border-red-100 bg-red-50/20 p-2.5 rounded-xl shadow-2xs dark:border-red-950 dark:bg-red-950/10">
          <div className="font-hand2 text-[10px] text-red-600">Outstanding Tuition</div>
          <div className="font-mono text-base font-bold text-red-600 mt-0.5">UGX 148M</div>
          <div className="font-hand2 text-[9px] text-red-500 mt-1">114 student rosters open</div>
        </div>
        <div className="border border-slate-150 dark:border-slate-800 bg-white dark:bg-slate-900 p-2.5 rounded-xl shadow-2xs">
          <div className="font-hand2 text-[10px] text-slate-400">Clinical Placements</div>
          <div className="font-mono text-lg font-bold text-slate-850 dark:text-slate-100 mt-0.5">92%</div>
          <div className="font-hand2 text-[9px] text-slate-450 mt-1">Rosters logged on time</div>
        </div>
      </div>

      {/* Charts & admissions queue grid */}
      <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-4 flex-grow overflow-hidden">
        {/* Enrolment sketch bar chart */}
        <div className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 rounded-xl flex flex-col justify-between shadow-xs text-xs font-hand2">
          <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2 mb-2 font-hand text-base">
            <span className="font-semibold text-slate-800 dark:text-slate-150">Enrollment growth · Last 6 years</span>
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex gap-2"><span>● Nursing</span> <span>● Lab Tech</span></span>
          </div>
          {/* Sketch-drawn representation */}
          <div className="flex items-end justify-around h-32 px-4 mt-2 border-b border-slate-100 dark:border-slate-850">
            {[
              { year: '21', n: 60, l: 35 },
              { year: '22', n: 65, l: 42 },
              { year: '23', n: 72, l: 48 },
              { year: '24', n: 80, l: 55 },
              { year: '25', n: 90, l: 62 },
              { year: '26', n: 96, l: 74 }
            ].map(col => (
              <div key={col.year} className="flex flex-col items-center gap-1.5 flex-grow">
                <div className="flex items-end gap-1.5 h-24 w-full justify-center">
                  <div className="w-3 bg-blue-600 rounded-t border border-transparent" style={{ height: `${col.n}%` }} title={`Nursing: ${col.n}`} />
                  <div className="w-3 bg-slate-200 dark:bg-slate-850 rounded-t border border-transparent" style={{ height: `${col.l}%` }} title={`Lab Tech: ${col.l}`} />
                </div>
                <div className="text-[9px] font-mono text-slate-400">'{col.year}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Admissions Queue */}
        <div className="border border-slate-200 dark:border-slate-800 p-4 bg-white dark:bg-slate-900 rounded-xl flex flex-col justify-between shadow-xs text-xs font-hand2 relative overflow-y-auto">
          <div>
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-2 mb-2.5 font-hand text-base">
              <span className="font-semibold text-slate-800 dark:text-slate-100">Admissions Queue</span>
              <span className="text-[9px] font-mono bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-bold uppercase tracking-wider">42 Open</span>
            </div>

            <div className="flex border border-slate-150 dark:border-slate-800 rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-950 mb-3 p-0.5">
              {(['pending', 'review', 'letter'] as const).map(q => (
                <button
                  key={q}
                  onClick={() => setActiveRole(q)}
                  className={`flex-grow py-1 rounded-md text-[9px] font-mono uppercase tracking-wider cursor-pointer transition-colors ${
                    activeQueue === q ? 'bg-blue-600 text-white font-bold' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {q === 'pending' ? 'Intake' : q}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-1.5 overflow-y-auto max-h-[120px]">
              {queues[activeQueue].map((app, idx) => (
                <div key={idx} className="border border-slate-100 dark:border-slate-800 p-2.5 rounded-lg bg-slate-50/50 dark:bg-slate-950/20 flex justify-between items-center">
                  <div>
                    <div className="font-bold text-slate-800 dark:text-slate-250">{app.name}</div>
                    <div className="text-[10px] text-slate-400 capitalize">{app.status}</div>
                  </div>
                  <span className="text-[8px] font-mono bg-blue-50 text-blue-700 px-1.5 rounded-full font-bold uppercase tracking-wider">{app.appFee}</span>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-mono text-[9px] uppercase tracking-wider font-bold py-2 rounded-lg text-center cursor-pointer transition-colors mt-3">
            Open Registry Portal
          </button>
        </div>

        {/* Alerts panel */}
        <div className="border border-slate-200 dark:border-slate-800 p-4 bg-white dark:bg-slate-900 rounded-xl shadow-xs text-xs flex flex-col justify-between overflow-y-auto">
          <div>
            <h4 className="font-hand text-base font-bold border-b border-slate-100 dark:border-slate-800 pb-2 mb-3 text-slate-800 dark:text-slate-100">⚡ Sessional System Alerts</h4>
            <div className="flex flex-col gap-3 font-hand2 text-[11px]">
              <div className="border-l border-red-400 pl-3">
                <span className="font-bold text-red-500 text-xs">Outstanding Balance</span>
                <p className="text-slate-400 mt-0.5">114 student rosters with tuition arrears.</p>
              </div>
              <div className="border-l border-amber-400 pl-3">
                <span className="font-bold text-amber-500 text-xs">Attendance Warnings</span>
                <p className="text-slate-400 mt-0.5">14 candidates dropped below the 80% mark.</p>
              </div>
              <div className="border-l border-blue-400 pl-3">
                <span className="font-bold text-blue-600 dark:text-blue-450 text-xs">Placements Secure</span>
                <p className="text-slate-400 mt-0.5">Paediatrics rotation shifts authenticated.</p>
              </div>
            </div>
          </div>

          <div className="text-[10px] text-slate-400 font-mono mt-4 leading-normal">
            Sessional files cleared under registry audit authorities.
          </div>
        </div>
      </div>

      <div className="flex justify-between border-t border-slate-100 dark:border-slate-800 pt-2.5 text-slate-400 dark:text-slate-500 font-hand2 text-xs mt-3">
        <span>Administration Console · Institutional overview dashboards</span>
        <span>16 / 17</span>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 17: Tutor Attendance Register Checklist
// ==========================================
export function TutorAttendanceSlide() {
  const [roster, setRoster] = useState<StudentRosterItem[]>(initialStudentRoster);

  const toggleStatus = (id: string, status: 'present' | 'absent' | 'late' | 'excused') => {
    const updated = roster.map(s => {
      if (s.id === id) {
        return { ...s, status };
      }
      return s;
    });
    setRoster(updated);
  };

  const totals = {
    present: roster.filter(s => s.status === 'present').length,
    absent: roster.filter(s => s.status === 'absent').length,
    late: roster.filter(s => s.status === 'late').length,
    excused: roster.filter(s => s.status === 'excused').length
  };

  const handleSaveRegister = () => {
    alert(`Success! Attendance register successfully filed and synced to cloud.\nSummary: ${totals.present} present, ${totals.absent} absent, ${totals.late} late, ${totals.excused} excused.\nJazākallāh Khayr.`);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 overflow-y-auto">
      <header className="border-b border-slate-100 dark:border-slate-800 pb-2 mb-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="font-mono text-lg font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center">17</span>
          <div>
            <h2 className="font-hand text-2xl font-bold text-slate-855 dark:text-slate-50">Attendance Register — Tutor Workstation</h2>
            <p className="font-hand2 text-xs text-slate-450 dark:text-slate-400">Lecturers record daily cohort attendance. Toggles update student records in real-time.</p>
          </div>
        </div>
      </header>

      {/* Toolbar stats */}
      <div className="flex gap-4 items-center bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 p-2.5 rounded-xl mb-3 text-xs font-hand2 justify-between">
        <div className="flex gap-3 text-slate-500">
          <span>Lecturer: <b className="text-slate-700 dark:text-slate-300">Mr. Edrisa Lubega</b></span>
          <span>Course: <b className="text-slate-700 dark:text-slate-300">Anatomy II</b></span>
          <span>Date: <b className="text-slate-700 dark:text-slate-300">Wednesday 29 Jun</b></span>
        </div>
        <div className="flex gap-1.5 font-mono text-[9px] font-bold uppercase tracking-wider">
          <span className="bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full">{totals.present} Present</span>
          <span className="bg-red-50 text-red-700 px-2.5 py-0.5 rounded-full">{totals.absent} Absent</span>
          <span className="bg-amber-50 text-amber-700 px-2.5 py-0.5 rounded-full">{totals.late} Late</span>
          <span className="bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full dark:bg-slate-800 dark:text-slate-300">{totals.excused} Excused</span>
        </div>
      </div>

      {/* Roster checklists table */}
      <div className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-xl overflow-hidden flex-grow flex flex-col shadow-xs text-xs mb-3">
        <div className="grid grid-cols-[40px_2.5fr_1.5fr_1fr_1fr_1fr_1fr_1.5fr] bg-slate-50 dark:bg-slate-950 border-b border-slate-150 dark:border-slate-850 p-2 font-mono text-[9px] font-bold uppercase tracking-wider text-slate-500 text-center">
          <div>#</div><div>Student Candidate</div><div>ID number</div><div>Present</div><div>Absent</div><div>Late</div><div>Excused</div><div>Sessional notes</div>
        </div>

        <div className="flex-grow overflow-y-auto divide-y divide-slate-100 dark:divide-slate-850 font-hand2">
          {roster.map((s, idx) => (
            <div key={s.id} className={`grid grid-cols-[40px_2.5fr_1.5fr_1fr_1fr_1fr_1fr_1.5fr] p-2 text-center items-center ${s.name.includes('Aisha') ? 'bg-blue-50/10 dark:bg-blue-950/5 font-semibold' : ''}`}>
              <div className="text-slate-400 font-mono text-[10px]">{((idx + 1).toString().padStart(2, '0'))}</div>
              <div className="text-left font-bold px-2 text-slate-800 dark:text-slate-200">{s.name} {s.name.includes('Aisha') && <span className="text-[8px] font-mono bg-blue-600 text-white px-2 py-0.5 rounded-full uppercase ml-1.5 font-bold">You</span>}</div>
              <div className="text-slate-400 font-mono text-[10px]">{s.studentId}</div>
              
              {/* Checkboxes triggers */}
              <div>
                <button type="button" onClick={() => toggleStatus(s.id, 'present')} className={`w-6 h-6 border rounded-md cursor-pointer transition-colors ${s.status === 'present' ? 'bg-blue-600 text-white border-transparent' : 'border-slate-200 dark:border-slate-800 text-transparent'}`}>✓</button>
              </div>
              <div>
                <button type="button" onClick={() => toggleStatus(s.id, 'absent')} className={`w-6 h-6 border rounded-md cursor-pointer transition-colors ${s.status === 'absent' ? 'bg-red-500 text-white border-transparent' : 'border-slate-200 dark:border-slate-800 text-transparent'}`}>✓</button>
              </div>
              <div>
                <button type="button" className={`w-6 h-6 border rounded-md cursor-pointer font-mono text-[10px] transition-colors ${s.status === 'late' ? 'bg-amber-500 text-white border-transparent' : 'border-slate-200 dark:border-slate-800 text-slate-450'}`} onClick={() => toggleStatus(s.id, 'late')}>L</button>
              </div>
              <div>
                <button type="button" className={`w-6 h-6 border rounded-md cursor-pointer font-mono text-[10px] transition-colors ${s.status === 'excused' ? 'bg-slate-450 text-white border-transparent' : 'border-slate-200 dark:border-slate-800 text-slate-450'}`} onClick={() => toggleStatus(s.id, 'excused')}>E</button>
              </div>
              <div className="text-left px-2 italic text-slate-400 text-[10px] truncate" title={s.note}>{s.note || '—'}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4 items-center font-hand2 text-xs text-slate-600 dark:text-slate-300">
        <div className="border border-red-100 bg-red-50/20 p-2.5 rounded-lg flex-grow dark:border-red-950 dark:bg-red-950/10 text-[11px] leading-relaxed">
          ⚠️ <b>Attendance trigger:</b> Recording consecutive absences fires automated welfare check SMS alerts to the student's primary sponsor profile.
        </div>
        <button onClick={handleSaveRegister} className="bg-blue-600 hover:bg-blue-700 text-white font-mono text-[10px] font-bold uppercase tracking-wider py-2.5 px-6 rounded-lg cursor-pointer transition-colors shadow-2xs">
          Submit Register
        </button>
      </div>

      <div className="flex justify-between border-t border-slate-100 dark:border-slate-800 pt-2.5 text-slate-400 dark:text-slate-500 font-hand2 text-xs mt-3">
        <span>Tutor Workstation · Attendance reporting module</span>
        <span>17 / 17</span>
      </div>
    </div>
  );
}
