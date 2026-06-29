import React, { useState, useEffect } from 'react';
import { Course } from '../../types';
import { coursesData } from '../../data';

interface DashboardSlidesProps {
  onNavigateToSlide: (idx: number) => void;
}

// ==========================================
// SLIDE 5: Student Dashboard (Desktop)
// ==========================================
export function DashboardDesktopSlide({ onNavigateToSlide }: DashboardSlidesProps) {
  const [selectedSchool, setSelectedSchool] = useState<'nursing' | 'lab'>('nursing');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatClock = (d: Date) => {
    return d.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 overflow-y-auto">
      <header className="border-b border-slate-100 dark:border-slate-800 pb-2 mb-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="font-mono text-lg font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center">05</span>
          <div>
            <h2 className="font-hand text-2xl font-bold text-slate-850 dark:text-slate-50">Student dashboard — desktop</h2>
            <p className="font-hand2 text-xs text-slate-400 dark:text-slate-500">As-salāmu ʿalaykum banner · classes schedule · fees tracker · prayer times integration.</p>
          </div>
        </div>
        <div className="font-mono text-[10px] bg-slate-50 dark:bg-slate-900 border border-slate-150 dark:border-slate-850 px-3 py-1 rounded-full text-slate-500 dark:text-slate-400">
          🕌 Ẓuhr 12:53 · Fajr 05:11 · Maghrib 18:41 · Local EAT: <strong className="text-blue-600 dark:text-blue-400">{formatClock(currentTime)}</strong>
        </div>
      </header>

      {/* Main Grid App Shell */}
      <div className="grid grid-cols-[180px_1fr] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm flex-grow">
        {/* Sidebar */}
        <aside className="bg-slate-50/50 dark:bg-slate-950/20 border-r border-slate-150 dark:border-slate-850 p-3.5 flex flex-col gap-1 font-hand2 text-xs text-slate-500 dark:text-slate-400">
          <div className="font-hand text-base font-bold text-slate-900 dark:text-slate-100 leading-tight pb-3 border-b border-slate-100 dark:border-slate-850 mb-3">
            Kibuli Portal
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-lg px-2.5 py-1.5 flex justify-between items-center font-semibold text-blue-600 dark:text-blue-400 shadow-2xs">
            <span>🏠 Home</span> <span>›</span>
          </div>
          <div className="px-2.5 py-1.5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-colors" onClick={() => onNavigateToSlide(6)}>📚 My Courses</div>
          <div className="px-2.5 py-1.5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-colors" onClick={() => onNavigateToSlide(7)}>📅 Timetable</div>
          <div className="px-2.5 py-1.5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-colors" onClick={() => onNavigateToSlide(8)}>📝 Assignments</div>
          <div className="px-2.5 py-1.5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-colors" onClick={() => onNavigateToSlide(9)}>📊 Results</div>
          <div className="px-2.5 py-1.5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-colors" onClick={() => onNavigateToSlide(10)}>💵 Fees</div>
          <div className="px-2.5 py-1.5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-colors" onClick={() => onNavigateToSlide(11)}>🏥 Placements</div>

          <div className="mt-auto border-t border-slate-100 dark:border-slate-800 pt-3 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 bg-blue-50 dark:bg-blue-950 flex items-center justify-center font-hand font-bold text-xs text-blue-600">AN</div>
            <div className="text-[10px] leading-tight">
              <div className="font-semibold text-slate-800 dark:text-slate-200">Aisha Nakato</div>
              <div className="text-slate-400">Year 2 · Nursing</div>
            </div>
          </div>
        </aside>

        {/* Workspace */}
        <main className="p-4 flex flex-col gap-4 overflow-y-auto">
          {/* Greeting banner */}
          <div className="border border-blue-100 dark:border-blue-950 bg-blue-50/20 dark:bg-blue-950/10 p-3.5 rounded-xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center text-[10px] text-slate-400 font-mono">Photo</div>
            <div className="flex-grow">
              <h3 className="font-hand text-xl font-bold text-slate-850 dark:text-slate-100">As-salāmu ʿalaykum, Aisha 🌿</h3>
              <p className="font-hand2 text-xs text-slate-400 mt-0.5">Wednesday · 29 June 2026 · Semester 1 · Student ID: KMH/N/2024/0142</p>
            </div>
            <div className="flex items-center gap-1 border border-slate-150 dark:border-slate-800 rounded-full text-xs font-hand2 overflow-hidden bg-white dark:bg-slate-900 p-0.5 shadow-2xs">
              <button onClick={() => setSelectedSchool('nursing')} className={`px-2.5 py-1 rounded-full cursor-pointer transition-colors ${selectedSchool === 'nursing' ? 'bg-blue-600 text-white font-medium' : 'text-slate-500'}`}>Nursing</button>
              <button onClick={() => setSelectedSchool('lab')} className={`px-2.5 py-1 rounded-full cursor-pointer transition-colors ${selectedSchool === 'lab' ? 'bg-blue-600 text-white font-medium' : 'text-slate-500'}`}>Lab Tech</button>
            </div>
          </div>

          {/* Quick Metrics KPIs */}
          <div className="grid grid-cols-4 gap-3">
            <div className="border border-slate-150 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 rounded-xl">
              <div className="font-hand2 text-xs text-slate-400">Attendance</div>
              <div className="font-hand text-2xl font-bold text-blue-600 dark:text-blue-400 mt-0.5">94%</div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-1 rounded-full overflow-hidden mt-2">
                <div className="bg-blue-600 h-full" style={{ width: '94%' }} />
              </div>
            </div>
            <div className="border border-slate-150 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 rounded-xl">
              <div className="font-hand2 text-xs text-slate-400">Cumulative GPA</div>
              <div className="font-hand text-2xl font-bold text-slate-800 dark:text-slate-100 mt-0.5">3.6 / 5.0</div>
              <div className="font-hand2 text-[10px] text-slate-400 mt-1">Target ≥ 3.5 minimum</div>
            </div>
            <div className="border border-red-100 dark:border-red-950/60 bg-red-50/30 dark:bg-red-950/10 p-3 rounded-xl flex flex-col justify-between">
              <div>
                <div className="font-hand2 text-xs text-red-700 dark:text-red-400">Outstanding Balance</div>
                <div className="font-hand text-xl font-bold text-red-600 dark:text-red-400 mt-0.5">UGX 420,000</div>
              </div>
              <button onClick={() => onNavigateToSlide(10)} className="text-[10px] bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded-md font-hand2 cursor-pointer mt-2 transition-colors font-semibold text-center w-full">Pay via MoMo</button>
            </div>
            <div className="border border-slate-150 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 rounded-xl">
              <div className="font-hand2 text-xs text-slate-400">Clinical Placements</div>
              <div className="font-hand text-2xl font-bold text-slate-800 dark:text-slate-100 mt-0.5">186h / 480h</div>
              <div className="font-hand2 text-[10px] text-slate-400 mt-1 truncate">Ward Rotation: Paediatrics</div>
            </div>
          </div>

          {/* Today & Announcements Layout */}
          <div className="grid grid-cols-2 gap-4 flex-grow">
            <div className="border border-slate-150 dark:border-slate-800 p-3.5 rounded-xl bg-white dark:bg-slate-900">
              <h4 className="font-hand text-lg font-bold text-slate-800 dark:text-slate-100 border-b border-slate-50 dark:border-slate-850 pb-1.5 mb-2">Today's Schedule (Wednesday)</h4>
              <div className="flex flex-col gap-2 font-hand2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex gap-2.5 items-center">
                  <span className="text-blue-600 dark:text-blue-400 font-mono text-[10px] w-10 font-bold">08:00</span>
                  <div className="flex-grow border border-slate-100 dark:border-slate-800 p-2 rounded-lg bg-slate-50/50 dark:bg-slate-950/20">
                    <div className="flex items-center justify-between">
                      <b className="text-slate-850 dark:text-slate-100">Anatomy &amp; Physiology II</b>
                      <span className="text-[8px] font-mono bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 px-1.5 py-0.5 rounded-full font-semibold uppercase">lecture</span>
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Rm 204 · Mr. Lubega</div>
                  </div>
                </div>
                <div className="flex gap-2.5 items-center">
                  <span className="text-blue-600 dark:text-blue-400 font-mono text-[10px] w-10 font-bold">10:00</span>
                  <div className="flex-grow border border-slate-100 dark:border-slate-800 p-2 rounded-lg bg-slate-50/50 dark:bg-slate-950/20">
                    <div className="flex items-center justify-between">
                      <b className="text-slate-850 dark:text-slate-100">Pharmacology</b>
                      <span className="text-[8px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-1.5 py-0.5 rounded-full font-semibold uppercase">tutorial</span>
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Rm 102 · Ms. Nansubuga</div>
                  </div>
                </div>
                <div className="flex gap-2.5 items-center">
                  <span className="text-blue-600 dark:text-blue-400 font-mono text-[10px] w-10 font-bold">13:00</span>
                  <div className="flex-grow border border-blue-100 dark:border-blue-950/40 p-2 rounded-lg bg-blue-50/20 dark:bg-blue-950/10">
                    <div className="flex items-center justify-between">
                      <b className="text-slate-850 dark:text-slate-100">Paediatric Ward Rotation</b>
                      <span className="text-[8px] font-mono bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-400 px-1.5 py-0.5 rounded-full font-semibold uppercase">clinical</span>
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">KMH Children Wing · 4 hrs</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-slate-150 dark:border-slate-800 p-3.5 rounded-xl bg-white dark:bg-slate-900">
              <h4 className="font-hand text-lg font-bold text-slate-800 dark:text-slate-100 border-b border-slate-50 dark:border-slate-850 pb-1.5 mb-2">School Announcements</h4>
              <div className="flex flex-col gap-1.5 font-hand2 text-[11px] text-slate-600 dark:text-slate-300">
                <div className="border border-amber-100 dark:border-amber-950/80 p-2 rounded bg-amber-50/30 dark:bg-amber-950/10">
                  <div className="flex justify-between items-center mb-0.5">
                    <b>Eid al-Adha Holiday Notice</b>
                    <span className="bg-amber-100 text-amber-800 text-[8px] px-1.5 rounded-full font-bold uppercase">pinned</span>
                  </div>
                  <div className="text-[10px] text-slate-400">Principal · lectures suspend 5-9 Jul.</div>
                </div>
                <div className="border border-slate-100 dark:border-slate-800 p-2 rounded bg-slate-50/50 dark:bg-slate-950/20">
                  <b>Mock Exam Schedule Released</b>
                  <div className="text-[10px] text-slate-400 mt-0.5">Registrar · tests run 14-18 Jul.</div>
                </div>
                <div className="border border-slate-100 dark:border-slate-800 p-2 rounded bg-slate-50/50 dark:bg-slate-950/20">
                  <b>Friday Jumu'ah Timings</b>
                  <div className="text-[10px] text-slate-400 mt-0.5">Chaplaincy · break from 12:30 - 14:00</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="flex justify-between border-t border-slate-100 dark:border-slate-800 pt-2.5 text-slate-400 dark:text-slate-500 font-hand2 text-xs mt-3">
        <span>Dashboard Space · Desktop overview</span>
        <span>05 / 17</span>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 6: Student Dashboard (Mobile Preview)
// ==========================================
export function DashboardMobileSlide({ onNavigateToSlide }: DashboardSlidesProps) {
  const [activeTab, setActiveTab] = useState<'home' | 'schedule' | 'fees'>('home');

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 overflow-y-auto">
      <header className="border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xl font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center">06</span>
          <div>
            <h2 className="font-hand text-2xl font-bold text-slate-850 dark:text-slate-50">Student dashboard — mobile</h2>
            <p className="font-hand2 text-xs text-slate-500 dark:text-slate-400">Optimized layout tailored for handheld screens. Fast, high-contrast, offline-first tabs.</p>
          </div>
        </div>
      </header>

      {/* Grid showing mobile frame and explanation side-by-side */}
      <div className="grid grid-cols-[1fr_260px] gap-4 flex-grow items-center">
        {/* Mobile Device Mockup */}
        <div className="w-[280px] border border-slate-200 dark:border-slate-800 rounded-[30px] p-2 bg-slate-50 dark:bg-slate-950 mx-auto shadow-md relative">
          <div className="absolute top-3.5 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-slate-200 dark:bg-slate-800 rounded-full z-20" />
          
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[22px] overflow-hidden flex flex-col h-[480px] relative mt-6 shadow-xs">
            <div className="flex justify-between px-4 pt-1.5 pb-1 text-[8px] text-slate-400 font-mono">
              <span>9:41 AM</span>
              <span>📶 🔋 100%</span>
            </div>

            {/* Screen State Content */}
            <div className="p-3 flex flex-col gap-2.5 flex-grow overflow-y-auto text-xs scrollbar-none">
              {activeTab === 'home' && (
                <div className="flex flex-col gap-2">
                  <div className="border border-blue-50 dark:border-blue-950 bg-blue-50/20 dark:bg-blue-950/10 p-2.5 rounded-xl">
                    <div className="font-hand text-base font-bold text-slate-850 dark:text-slate-50 leading-none">As-salāmu ʿalaykum, Aisha</div>
                    <div className="font-hand2 text-[9px] text-slate-400 mt-1">Wed · 29 Jun · 🕌 Ẓuhr 12:53</div>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 text-center font-hand">
                    <div className="border border-slate-150 dark:border-slate-800 p-2 rounded-lg bg-white dark:bg-slate-900">
                      <div className="font-hand2 text-[8px] text-slate-400 uppercase tracking-wider">Attendance</div>
                      <div className="text-blue-600 dark:text-blue-400 font-bold text-base mt-0.5">94%</div>
                    </div>
                    <div className="border border-red-100 dark:border-red-950 p-2 rounded-lg bg-white dark:bg-slate-900">
                      <div className="font-hand2 text-[8px] text-red-500 uppercase tracking-wider">Fees Due</div>
                      <div className="text-red-600 font-bold text-sm mt-0.5">UGX 420k</div>
                    </div>
                  </div>

                  <div className="border border-slate-150 dark:border-slate-800 p-2.5 rounded-lg bg-white dark:bg-slate-900">
                    <div className="font-hand text-xs font-bold border-b border-slate-50 dark:border-slate-850 pb-1 mb-1.5">Today's Lectures</div>
                    <div className="font-hand2 text-[10px] leading-tight flex flex-col gap-1 text-slate-500 dark:text-slate-400">
                      <div><b>08:00</b> Anatomy II · Rm 204</div>
                      <div><b>10:00</b> Pharmacology · Rm 102</div>
                      <div className="text-blue-600 dark:text-blue-400 font-medium"><b>13:00</b> Paediatrics Ward Shift</div>
                    </div>
                  </div>

                  <button onClick={() => setActiveTab('fees')} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-hand2 py-2 rounded-lg cursor-pointer text-center text-xs font-semibold mt-1">
                    💵 Pay Tuition (MoMo)
                  </button>
                </div>
              )}

              {activeTab === 'schedule' && (
                <div className="flex flex-col gap-2">
                  <div className="font-hand text-base font-bold text-slate-800 dark:text-slate-100">Weekly Schedule</div>
                  <div className="flex gap-1 overflow-x-auto pb-1 text-[8px] font-mono text-slate-400">
                    <span className="px-1.5 py-0.5 border rounded">MON</span>
                    <span className="px-1.5 py-0.5 border rounded">TUE</span>
                    <span className="px-1.5 py-0.5 border border-blue-400 bg-blue-50 dark:bg-blue-950 font-bold rounded text-blue-600 dark:text-blue-400">WED</span>
                    <span className="px-1.5 py-0.5 border rounded">THU</span>
                    <span className="px-1.5 py-0.5 border rounded">FRI</span>
                  </div>
                  <div className="flex flex-col gap-1.5 font-hand2 text-[9px] text-slate-500 dark:text-slate-400">
                    <div className="border border-slate-100 dark:border-slate-800 p-2 rounded bg-white dark:bg-slate-900"><b>08:00 · Anatomy II</b><br />Rm 204 · Mr. Lubega</div>
                    <div className="border border-slate-100 dark:border-slate-800 p-2 rounded bg-white dark:bg-slate-900"><b>10:00 · Pharmacology</b><br />Rm 102 · Ms. Nansubuga</div>
                    <div className="border border-blue-100 dark:border-blue-950 p-2 rounded bg-blue-50/20 dark:bg-blue-950/10 text-blue-800 dark:text-blue-300 font-medium"><b>13:00 · Paediatrics Shift</b><br />Children Hospital Wing · 4h</div>
                  </div>
                </div>
              )}

              {activeTab === 'fees' && (
                <div className="flex flex-col gap-2 text-[11px]">
                  <div className="font-hand text-base font-bold text-slate-800 dark:text-slate-100">Pay Tuition</div>
                  <div className="border border-slate-150 dark:border-slate-800 p-2 rounded-lg bg-slate-50 dark:bg-slate-950 font-hand2 leading-tight">
                    <div className="flex justify-between text-slate-400"><span>Tuition Due:</span><span>UGX 1,200,000</span></div>
                    <div className="flex justify-between text-blue-600 dark:text-blue-400"><span>Paid to date:</span><span>UGX 780,000</span></div>
                    <hr className="border-dashed border-slate-200 dark:border-slate-800 my-1" />
                    <div className="flex justify-between text-red-600 font-bold"><span>Balance:</span><span>UGX 420,000</span></div>
                  </div>

                  <div className="font-mono text-[8px] uppercase text-slate-400 tracking-wider mt-0.5">Mobile Money Line</div>
                  <input type="text" defaultValue="0772 ••• 142" className="border border-slate-200 dark:border-slate-700 p-1.5 rounded bg-slate-50 dark:bg-slate-950 text-xs text-slate-800 dark:text-slate-100" />
                  <div className="font-mono text-[8px] uppercase text-slate-400 tracking-wider">Amount (UGX)</div>
                  <input type="text" defaultValue="420,000" className="border border-slate-200 dark:border-slate-700 p-1.5 rounded bg-slate-50 dark:bg-slate-950 text-xs font-semibold text-slate-800 dark:text-slate-100" />

                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-hand2 py-2 rounded-lg mt-1 cursor-pointer font-semibold" onClick={() => alert("STK Push triggered! Please check your mobile handset.")}>
                    Confirm UGX 420,000
                  </button>
                </div>
              )}
            </div>

            {/* Bottom Tab Bar */}
            <div className="flex justify-around border-t border-slate-150 dark:border-slate-800 py-2 bg-slate-50 dark:bg-slate-950 font-hand2 text-[9px] text-slate-400">
              <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center cursor-pointer transition-colors ${activeTab === 'home' ? 'text-blue-600 dark:text-blue-400 font-bold' : ''}`}>
                <span>🏠</span><span>Home</span>
              </button>
              <button onClick={() => setActiveTab('schedule')} className={`flex flex-col items-center cursor-pointer transition-colors ${activeTab === 'schedule' ? 'text-blue-600 dark:text-blue-400 font-bold' : ''}`}>
                <span>📅</span><span>Schedule</span>
              </button>
              <button onClick={() => setActiveTab('fees')} className={`flex flex-col items-center cursor-pointer transition-colors ${activeTab === 'fees' ? 'text-blue-600 dark:text-blue-400 font-bold' : ''}`}>
                <span>💵</span><span>Fees</span>
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar notes */}
        <div className="flex flex-col gap-3 font-hand2 text-xs text-slate-500 dark:text-slate-400">
          <div className="border border-blue-100 dark:border-blue-950 bg-blue-50/40 dark:bg-blue-950/10 p-4 rounded-xl">
            <div className="font-hand text-lg font-bold text-blue-800 dark:text-blue-400">Offline caching 📡</div>
            <p className="mt-1 text-xs leading-relaxed">
              Student portal schedules and clinical guidelines cache locally to operate seamlessly within thick hospital structures where carrier coverage is weak.
            </p>
          </div>

          <div className="border border-slate-150 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-xs">
            <div className="font-hand text-sm font-semibold text-slate-800 dark:text-slate-100">Interactive Preview</div>
            <p className="mt-1 leading-relaxed">Click different mobile tabs (Home, Schedule, Fees) inside the phone mockup to explore layouts.</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between border-t border-slate-100 dark:border-slate-800 pt-3 text-slate-400 dark:text-slate-500 font-hand2 text-xs">
        <span>Dashboard Space · Responsive Mobile Mockups</span>
        <span>06 / 17</span>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 7: My Courses
// ==========================================
export function CoursesSlide() {
  const [filter, setFilter] = useState<'all' | 'theory' | 'clinical' | 'practical'>('all');

  const filteredCourses = coursesData.filter(c => {
    if (filter === 'all') return true;
    return c.type === filter;
  });

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 overflow-y-auto">
      <header className="border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xl font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center">07</span>
          <div>
            <h2 className="font-hand text-2xl font-bold text-slate-850 dark:text-slate-50">Course catalog · my courses</h2>
            <p className="font-hand2 text-xs text-slate-500 dark:text-slate-400">Registered core units and clinical programs for the current semester.</p>
          </div>
        </div>
      </header>

      {/* Filter Row */}
      <div className="flex gap-1.5 items-center mb-4">
        {(['all', 'theory', 'clinical', 'practical'] as const).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 border text-xs rounded-full cursor-pointer capitalize transition-all ${
              filter === f
                ? 'bg-blue-600 text-white border-transparent font-medium shadow-xs'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
            }`}
          >
            {f}
          </button>
        ))}
        <span className="ml-auto font-mono text-[10px] text-slate-400">Total: {filteredCourses.length} units</span>
      </div>

      {/* Grid of Courses */}
      <div className="grid grid-cols-3 gap-3.5 flex-grow content-start overflow-y-auto pr-1">
        {filteredCourses.map(c => (
          <div key={c.code} className="border border-slate-150 dark:border-slate-800 p-4 rounded-xl bg-white dark:bg-slate-900 flex flex-col justify-between shadow-xs">
            <div className="flex justify-between items-start">
              <div className="min-w-0">
                <span className="font-mono text-[9px] text-slate-400 font-semibold">{c.code} · {c.cohort}</span>
                <h3 className="font-hand text-base font-bold text-slate-800 dark:text-slate-100 mt-0.5 truncate">{c.title}</h3>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-[8px] uppercase font-mono font-bold tracking-wider ${
                c.type === 'theory' ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300' :
                c.type === 'clinical' ? 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300' :
                'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
              }`}>{c.type}</span>
            </div>

            <div className="border border-slate-100 dark:border-slate-800 rounded-lg p-2 my-2 bg-slate-50/50 dark:bg-slate-950/20 flex items-center justify-between text-xs text-slate-500">
              <span className="font-hand2 text-[10px]">Tutor: <b>{c.instructor}</b></span>
              <span className="text-sm">{c.banner}</span>
            </div>

            <div className="mt-2.5">
              <div className="flex justify-between text-[10px] font-hand2 mb-1 text-slate-400">
                <span>Completed</span>
                <span>{c.progress}%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full" style={{ width: `${c.progress}%` }} />
              </div>
            </div>

            <div className="flex gap-1.5 mt-3.5 text-[9px] font-hand2">
              <span className="border border-slate-150 dark:border-slate-800 px-2 py-0.5 rounded text-slate-400 bg-slate-50/20">files ({c.materialsCount})</span>
              {c.dueTasks > 0 && <span className="border border-red-100 bg-red-50 text-red-700 px-2 py-0.5 rounded font-bold">{c.dueTasks} tasks</span>}
              <span className="border border-blue-100 bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-bold">Grade: {c.average}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between border-t border-slate-100 dark:border-slate-800 pt-3 text-slate-400 dark:text-slate-500 font-hand2 text-xs mt-4">
        <span>Academic Catalog · Curriculum details</span>
        <span>07 / 17</span>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 8: Timetable Weekly Schedule
// ==========================================
export function TimetableSlide() {
  const [showPrayers, setShowPrayers] = useState(true);

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 overflow-y-auto">
      <header className="border-b border-slate-100 dark:border-slate-800 pb-2 mb-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xl font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center">08</span>
          <div>
            <h2 className="font-hand text-2xl font-bold text-slate-850 dark:text-slate-50">Timetable · weekly schedule</h2>
            <p className="font-hand2 text-xs text-slate-500 dark:text-slate-400">Class timings, laboratory sessions, and automated Islamic prayer-break boundaries.</p>
          </div>
        </div>
        <button
          onClick={() => setShowPrayers(!showPrayers)}
          className={`px-3 py-1 border border-slate-200 dark:border-slate-700 font-hand2 text-xs rounded-full cursor-pointer transition-colors ${
            showPrayers ? 'bg-blue-600 text-white border-transparent' : 'bg-white dark:bg-slate-900 text-slate-500'
          }`}
        >
          🕌 Prayer Pause Blocks: {showPrayers ? 'ENABLED' : 'MUTED'}
        </button>
      </header>

      {/* Timetable Grid Table */}
      <div className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-xl overflow-hidden flex-grow flex flex-col shadow-xs text-xs">
        {/* Table Head */}
        <div className="grid grid-cols-[70px_repeat(6,_1fr)] bg-slate-50 dark:bg-slate-950 border-b border-slate-150 dark:border-slate-850 text-center font-mono text-[10px] py-2 font-bold uppercase tracking-wider text-slate-500">
          <div>Time</div>
          <div>Mon</div>
          <div>Tue</div>
          <div className="text-blue-600 dark:text-blue-400 bg-blue-50/20 dark:bg-blue-950/20">Wed (Today)</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        {/* Schedule rows */}
        <div className="flex-grow flex flex-col justify-around">
          {/* Row 1: 08:00 */}
          <div className="grid grid-cols-[70px_repeat(6,_1fr)] border-b border-slate-100 dark:border-slate-800/80 items-center py-1">
            <div className="text-center font-mono text-[9px] text-slate-400">08:00</div>
            <div className="p-1"><div className="border border-blue-100 dark:border-blue-950/50 bg-blue-50/10 dark:bg-blue-950/10 p-1.5 rounded-lg text-center text-[10px] text-slate-700 dark:text-slate-300"><b>Anatomy II</b><br />Rm 204</div></div>
            <div className="p-1"><div className="border border-amber-100 bg-amber-50/20 p-1.5 rounded-lg text-center text-[10px] text-amber-700"><b>Paeds Ward</b><br />KMH Wing</div></div>
            <div className="p-1"><div className="border border-blue-100 dark:border-blue-950/50 bg-blue-50/10 dark:bg-blue-950/10 p-1.5 rounded-lg text-center text-[10px] text-slate-700 dark:text-slate-300"><b>Anatomy II</b><br />Rm 204</div></div>
            <div className="p-1"><div className="border border-slate-150 p-1.5 rounded-lg text-center text-[10px] text-slate-500"><b>Microbiology</b><br />Lab 1</div></div>
            <div className="p-1"><div className="border border-blue-100 bg-blue-50/10 p-1.5 rounded-lg text-center text-[10px] text-slate-700"><b>Comm Health</b><br />Rm 301</div></div>
            <div className="p-1" />
          </div>

          {/* Row 2: 10:00 */}
          <div className="grid grid-cols-[70px_repeat(6,_1fr)] border-b border-slate-100 dark:border-slate-800/80 items-center py-1">
            <div className="text-center font-mono text-[9px] text-slate-400">10:00</div>
            <div className="p-1"><div className="border border-slate-100 dark:border-slate-800 p-1.5 rounded-lg text-center text-[10px] text-slate-500"><b>Pharm Tut</b><br />Rm 102</div></div>
            <div className="p-1"><div className="border border-amber-100 bg-amber-50/20 p-1.5 rounded-lg text-center text-[10px] text-amber-700"><b>Paeds Ward</b></div></div>
            <div className="p-1"><div className="border border-slate-100 dark:border-slate-800 p-1.5 rounded-lg text-center text-[10px] text-slate-500"><b>Pharm Tut</b><br />Rm 102</div></div>
            <div className="p-1"><div className="border border-blue-100 bg-blue-50/10 p-1.5 rounded-lg text-center text-[10px] text-slate-700"><b>Islamic Ethics</b><br />Rm 105</div></div>
            <div className="p-1"><div className="border border-blue-100 bg-blue-50/10 p-1.5 rounded-lg text-center text-[10px] text-slate-700"><b>Microbiology</b><br />Rm 204</div></div>
            <div className="p-1" />
          </div>

          {/* Row 3: Ẓuhr Prayer Block */}
          {showPrayers && (
            <div className="grid grid-cols-[70px_1fr] bg-blue-50/20 dark:bg-blue-950/10 border-y border-blue-100 dark:border-blue-950/60 items-center py-1.5">
              <div className="text-center font-mono text-[9px] text-blue-600 dark:text-blue-400 font-bold">12:30</div>
              <div className="text-center font-hand text-sm text-blue-800 dark:text-blue-300">
                🕌 Ẓuhr Prayer &amp; Mid-day Pause (academic operations pause until 14:00 · Friday Jumu'ah extends to 14:15)
              </div>
            </div>
          )}

          {/* Row 4: 14:00 */}
          <div className="grid grid-cols-[70px_repeat(6,_1fr)] items-center py-1">
            <div className="text-center font-mono text-[9px] text-slate-400">14:00</div>
            <div className="p-1"><div className="border border-amber-100 bg-amber-50/20 p-1.5 rounded-lg text-center text-[10px] text-amber-700"><b>Paeds Ward</b><br />4h Shift</div></div>
            <div className="p-1"><div className="border border-slate-100 p-1.5 rounded-lg text-center text-[10px] text-slate-500"><b>Comm Outreach</b><br />Mukono</div></div>
            <div className="p-1"><div className="border border-amber-100 bg-amber-50/20 p-1.5 rounded-lg text-center text-[10px] text-amber-700"><b>Paeds Ward</b><br />4h Shift</div></div>
            <div className="p-1" />
            <div className="p-1"><div className="border border-red-200 bg-red-50/30 p-1.5 rounded-lg text-center text-[10px] text-red-700"><b>MOCK EXAM</b><br />Main Hall</div></div>
            <div className="p-1" />
          </div>
        </div>
      </div>

      <div className="flex justify-between border-t border-slate-100 dark:border-slate-800 pt-2 text-slate-400 dark:text-slate-500 font-hand2 text-xs mt-2">
        <span>Cohort Calendars · Clock-in rosters</span>
        <span>08 / 17</span>
      </div>
    </div>
  );
}
