import React, { useState } from 'react';

// ==========================================
// SLIDE 1: Cover Slide
// ==========================================
export function CoverSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-between p-8 relative overflow-y-auto">
      <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col gap-5 max-w-4xl mt-6">
        <div className="font-mono text-xs text-blue-600 dark:text-blue-400 tracking-widest uppercase font-semibold">
          low-fi wireframes · v1 · june 2026
        </div>
        <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          Kibuli Muslim Hospital · Health Training Schools
        </div>
        
        <div className="flex flex-col gap-2">
          <h1 className="font-hand text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-50 leading-none">
            School Management &amp;<br />
            <span className="text-blue-600 dark:text-blue-400">Student Portal</span>
          </h1>
          <div className="h-1.5 w-40 bg-blue-600 dark:bg-blue-400 rounded-full mt-3"></div>
        </div>

        <p className="font-hand2 text-lg text-slate-600 dark:text-slate-300 mt-4 max-w-2xl leading-relaxed">
          Unified portal for the <strong className="text-slate-800 dark:text-slate-100 font-medium">School of Nursing &amp; Midwifery</strong> and the <strong className="text-slate-800 dark:text-slate-100 font-medium">School of Medical Laboratory Technology</strong>.
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-3 py-1 border border-slate-200 dark:border-slate-800 rounded-full font-hand2 text-xs bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 shadow-sm">2 schools</span>
          <span className="px-3 py-1 border border-slate-200 dark:border-slate-800 rounded-full font-hand2 text-xs bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 shadow-sm">7 user roles</span>
          <span className="px-3 py-1 border border-slate-200 dark:border-slate-800 rounded-full font-hand2 text-xs bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 shadow-sm">14 screens</span>
          <span className="px-3 py-1 border border-slate-200 dark:border-slate-800 rounded-full font-hand2 text-xs bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 shadow-sm">Desktop + mobile</span>
          <span className="px-3 py-1 border border-blue-100 dark:border-blue-900/40 rounded-full font-hand2 text-xs bg-blue-50/50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-300 font-semibold">UGX · Mobile Money</span>
          <span className="px-3 py-1 border border-emerald-100 dark:border-emerald-900/40 rounded-full font-hand2 text-xs bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-300 font-semibold">Islamic values</span>
        </div>
      </div>

      {/* Legend Card */}
      <div className="relative z-10 border border-slate-150 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm max-w-xl self-start mt-6">
        <div className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-2">How to read these wireframes</div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 font-hand2 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-4 h-3 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 inline-block rounded"></span>
            <span>Grey regions = UI containers</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-3 border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/40 dark:bg-slate-900/40 inline-block rounded"></span>
            <span>Dashed lines = placeholders</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-3 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 inline-block rounded"></span>
            <span>Blue tint = primary action states</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">✎</span>
            <span>Designer notes &amp; intentions</span>
          </div>
        </div>
      </div>

      {/* Slide footer */}
      <div className="flex justify-between border-t border-slate-100 dark:border-slate-800 pt-3 text-slate-400 dark:text-slate-500 font-hand2 text-xs mt-6">
        <span>Kibuli Muslim Hospital · Health Training Schools</span>
        <span>Kibuli Hill, Makindye · Kampala, UG</span>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 2: System Map
// ==========================================
export function SystemMapSlide() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const roles = [
    { id: 'student', name: 'Student', desc: 'courses, fees, results, library', icon: '🎓', targetPills: ['Student record', 'Timetable', 'Grades', 'Fees ledger (UGX)', 'Clinical placements', 'Lab practical logs', 'Library catalogue', 'Announcements'] },
    { id: 'tutor', name: 'Tutor / Lecturer', desc: 'classes, attendance, grading', icon: '👩‍🏫', targetPills: ['Programmes / courses', 'Timetable', 'Attendance', 'Grades', 'Lab practical logs', 'Announcements'] },
    { id: 'principal', name: 'Principal', desc: 'school KPIs, oversight', icon: '🏫', targetPills: ['Programmes / courses', 'Fees ledger (UGX)', 'Student record', 'Announcements', 'Documents (ID, certs)'] },
    { id: 'registrar', name: 'Registrar', desc: 'records, transcripts, IDs', icon: '📋', targetPills: ['Student record', 'Programmes / courses', 'Documents (ID, certs)', 'Grades', 'Attendance'] },
    { id: 'bursar', name: 'Bursar', desc: 'fees, MoMo reconcile', icon: '💵', targetPills: ['Fees ledger (UGX)', 'Student record'] },
    { id: 'parent', name: 'Parent / Sponsor', desc: 'read-only fees & results', icon: '👪', targetPills: ['Fees ledger (UGX)', 'Grades', 'Student record'] },
    { id: 'hospital', name: 'Hospital Admin', desc: 'cross-school oversight', icon: '🏥', targetPills: ['Student record', 'Clinical placements', 'Fees ledger (UGX)'] }
  ];

  const sharedPills = [
    'Student record', 'Programmes / courses', 'Timetable', 'Attendance', 'Grades',
    'Fees ledger (UGX)', 'Clinical placements', 'Lab practical logs', 'Library catalogue',
    'Announcements', 'Messages', 'Documents (ID, certs)'
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 overflow-y-auto">
      <header className="border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xl font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center">02</span>
          <div>
            <h2 className="font-hand text-2xl font-bold text-slate-850 dark:text-slate-50">The system at a glance</h2>
            <p className="font-hand2 text-xs text-slate-500 dark:text-slate-400">Public-facing site → Auth router → seven role-based apps sharing one student record</p>
          </div>
        </div>
      </header>

      <div className="flex flex-col gap-4 flex-grow justify-center relative">
        {/* Public Layer */}
        <div className="grid grid-cols-[90px_1fr] items-center gap-4">
          <div className="font-mono text-xs font-semibold uppercase text-slate-400 tracking-wider text-right">Public</div>
          <div className="flex gap-4">
            <div className="flex-1 border border-slate-150 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 rounded-lg text-center shadow-sm">
              <div className="font-hand text-base font-bold text-slate-800 dark:text-slate-200">Apply / Admission portal</div>
              <div className="font-hand2 text-xs text-slate-400 mt-0.5">prospective students</div>
            </div>
            <div className="flex-1 border border-slate-150 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 rounded-lg text-center shadow-sm">
              <div className="font-hand text-base font-bold text-slate-800 dark:text-slate-200">Programme info pages</div>
              <div className="font-hand2 text-xs text-slate-400 mt-0.5">Nursing · Lab Tech</div>
            </div>
          </div>
        </div>

        {/* Transition */}
        <div className="flex justify-center items-center gap-2 text-xs text-slate-400">
          <svg className="w-3.5 h-3.5 text-slate-300 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 13l-7 7-7-7" />
          </svg>
          <span className="font-mono tracking-tight uppercase text-[10px]">Secure Sign In Gateway</span>
        </div>

        {/* Roles Layer */}
        <div className="grid grid-cols-[90px_1fr] items-center gap-4">
          <div className="font-mono text-xs font-semibold uppercase text-slate-400 tracking-wider text-right">Roles</div>
          <div className="grid grid-cols-7 gap-1.5">
            {roles.map((r) => {
              const isActive = selectedRole === r.id;
              return (
                <button
                  key={r.id}
                  onClick={() => setSelectedRole(isActive ? null : r.id)}
                  className={`border p-2 rounded-xl text-center cursor-pointer transition-all hover:bg-slate-50 dark:hover:bg-slate-800/50 ${
                    isActive
                      ? 'bg-blue-50/50 dark:bg-blue-950/20 border-blue-300 dark:border-blue-800 text-blue-600 dark:text-blue-400 shadow-sm'
                      : 'bg-white dark:bg-slate-900 border-slate-150 dark:border-slate-800'
                  }`}
                >
                  <div className="text-xl mb-1">{r.icon}</div>
                  <div className="font-hand text-sm font-bold leading-none">{r.name}</div>
                  <div className="font-hand2 text-[9px] leading-tight text-slate-400 mt-1 truncate">
                    {r.desc}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Shared Data Layer */}
        <div className="border border-slate-200 dark:border-slate-800 p-4 rounded-xl mt-1 relative bg-slate-50/40 dark:bg-slate-900/30">
          <div className="absolute top-[-10px] left-4 bg-white dark:bg-slate-900 px-2 font-mono text-[9px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            ↓ shared cloud database (single source of truth)
          </div>
          <div className="flex flex-wrap gap-1.5 justify-center mt-1.5">
            {sharedPills.map((pill) => {
              const activeRoleObj = roles.find((r) => r.id === selectedRole);
              const isHighlighted = activeRoleObj ? activeRoleObj.targetPills.includes(pill) : false;
              return (
                <span
                  key={pill}
                  className={`px-2.5 py-0.5 border rounded-full font-hand2 text-[10px] transition-all duration-200 ${
                    isHighlighted
                      ? 'bg-blue-600 dark:bg-blue-500 text-white border-transparent font-medium shadow-sm scale-[1.03]'
                      : 'bg-white dark:bg-slate-900 border-slate-150 dark:border-slate-800 text-slate-400 dark:text-slate-500 opacity-60'
                  }`}
                >
                  {pill}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Design Note */}
      <div className="absolute right-8 top-16 font-hand text-base text-blue-500/80 transform rotate-1 max-w-[170px] pointer-events-none text-right">
        <span>one record · many views.<br />Zero duplicate entry ✎</span>
      </div>

      <div className="flex justify-between border-t border-slate-100 dark:border-slate-800 pt-3 text-slate-400 dark:text-slate-500 font-hand2 text-xs">
        <span>Kibuli Muslim Hospital · School Portal</span>
        <span>02 / 17</span>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 3: Apply / Admission Form
// ==========================================
export function ApplySlide() {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedSchool, setSelectedSchool] = useState<'nursing' | 'lab' | null>('nursing');

  const steps = [
    '1. Programme',
    '2. Personal',
    '3. Education',
    '4. Documents',
    '5. Application Fee',
    '6. Review'
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 overflow-y-auto">
      <header className="border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xl font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center">03</span>
          <div>
            <h2 className="font-hand text-2xl font-bold text-slate-850 dark:text-slate-50">Apply — public admission form</h2>
            <p className="font-hand2 text-xs text-slate-500 dark:text-slate-400">Sleek multi-step registration wizard on marketing page. Automatically feeds administrative intake channels.</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-[1fr_280px] gap-4 flex-grow overflow-hidden">
        {/* Browser Mockup */}
        <div className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-xl flex flex-col overflow-hidden shadow-sm">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-850 text-[10px] text-slate-400">
            <span className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-800"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-800"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-800"></span>
            </span>
            <span className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded px-2 py-0.5 flex-grow max-w-xs font-mono text-[9px] text-center">kibulischools.ug/apply</span>
            <span>🔒 SSL</span>
          </div>

          <div className="p-4 flex flex-col gap-3 flex-grow overflow-y-auto">
            <div>
              <h3 className="font-hand text-xl font-bold text-slate-900 dark:text-slate-50">Application for Academic Year 2026/2027</h3>
              <p className="font-hand2 text-blue-600 dark:text-blue-400 text-xs mt-0.5 italic">Bismillāhi r-raḥmāni r-raḥīm — In the name of God, Most Gracious, Most Merciful.</p>
            </div>

            {/* Stepper */}
            <div className="flex flex-wrap gap-1.5 items-center py-2 border-y border-slate-100 dark:border-slate-800">
              {steps.map((step, idx) => {
                const stepNum = idx + 1;
                const isActive = activeStep === stepNum;
                return (
                  <React.Fragment key={step}>
                    <button
                      onClick={() => setActiveStep(stepNum)}
                      className={`px-2 py-0.5 border text-[10px] rounded-full cursor-pointer transition-all ${
                        isActive
                          ? 'bg-blue-600 text-white border-transparent font-medium shadow-sm'
                          : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      {step}
                    </button>
                    {idx < steps.length - 1 && <span className="text-slate-200 text-[9px] font-mono">/</span>}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Step content */}
            <div className="border border-slate-100 dark:border-slate-850 p-4 rounded-lg flex-grow bg-slate-50/50 dark:bg-slate-950/20">
              {activeStep === 1 && (
                <div>
                  <div className="font-hand text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">1. Choose your programme</div>
                  <div className="grid grid-cols-2 gap-3">
                    <div
                      onClick={() => setSelectedSchool('nursing')}
                      className={`border p-3 rounded-lg cursor-pointer transition-all ${
                        selectedSchool === 'nursing'
                          ? 'border-blue-500 bg-blue-50/30 dark:bg-blue-950/20'
                          : 'border-slate-150 bg-white dark:bg-slate-850'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-hand text-base font-bold text-slate-900 dark:text-slate-50">Nursing &amp; Midwifery</div>
                          <div className="font-hand2 text-[10px] text-slate-400 mt-1">Established 2005 · 30 slots / intake</div>
                        </div>
                        {selectedSchool === 'nursing' && <span className="px-1.5 py-0.5 text-[9px] bg-blue-600 text-white rounded">chosen</span>}
                      </div>
                      <div className="flex gap-1.5 mt-2.5">
                        <span className="px-1.5 py-0.5 border text-[9px] rounded-full text-slate-400">Diploma · 3 yrs</span>
                        <span className="px-1.5 py-0.5 border text-[9px] rounded-full text-slate-400">Cert · 2 yrs</span>
                      </div>
                    </div>

                    <div
                      onClick={() => setSelectedSchool('lab')}
                      className={`border p-3 rounded-lg cursor-pointer transition-all ${
                        selectedSchool === 'lab'
                          ? 'border-blue-500 bg-blue-50/30 dark:bg-blue-950/20'
                          : 'border-slate-150 bg-white dark:bg-slate-850'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-hand text-base font-bold text-slate-900 dark:text-slate-50">Medical Lab Tech</div>
                          <div className="font-hand2 text-[10px] text-slate-400 mt-1">Established 2011 · 25 slots / intake</div>
                        </div>
                        {selectedSchool === 'lab' && <span className="px-1.5 py-0.5 text-[9px] bg-blue-600 text-white rounded">chosen</span>}
                      </div>
                      <div className="flex gap-1.5 mt-2.5">
                        <span className="px-1.5 py-0.5 border text-[9px] rounded-full text-slate-400">Diploma · 3 yrs</span>
                        <span className="px-1.5 py-0.5 border text-[9px] rounded-full text-slate-400">Cert · 2 yrs</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mt-3.5">
                    <div>
                      <div className="font-hand2 text-[10px] text-slate-400 mb-1">Intake Term</div>
                      <div className="border border-slate-150 bg-white dark:bg-slate-850 p-1.5 rounded text-xs text-slate-700 dark:text-slate-200">August 2026 ▾</div>
                    </div>
                    <div>
                      <div className="font-hand2 text-[10px] text-slate-400 mb-1">Attendance Mode</div>
                      <div className="border border-slate-150 bg-white dark:bg-slate-850 p-1.5 rounded text-xs text-slate-700 dark:text-slate-200">Full-time ▾</div>
                    </div>
                    <div>
                      <div className="font-hand2 text-[10px] text-slate-400 mb-1">Sponsor Details</div>
                      <div className="border border-slate-150 bg-white dark:bg-slate-850 p-1.5 rounded text-xs text-slate-400">Private Sponsor...</div>
                    </div>
                  </div>
                </div>
              )}

              {activeStep > 1 && activeStep < 5 && (
                <div className="flex flex-col gap-2">
                  <div className="font-hand text-lg font-bold text-slate-800 dark:text-slate-100">Step {activeStep} Credentials</div>
                  <p className="font-hand2 text-xs text-slate-500 leading-relaxed">Provide your official academic certificates, secondary grades, and certified credentials required for eligibility verification.</p>
                  <div className="border border-dashed border-slate-200 dark:border-slate-800 h-24 flex items-center justify-center text-slate-400 font-mono text-[10px] bg-white dark:bg-slate-900 rounded-lg">
                    [ Document Attachment Upload Component ]
                  </div>
                </div>
              )}

              {activeStep === 5 && (
                <div className="flex flex-col gap-2">
                  <div className="font-hand text-lg font-bold text-slate-800 dark:text-slate-100">5. Pay Application Fee</div>
                  <p className="font-hand2 text-xs text-slate-500">
                    A non-refundable registration and processing fee of <b className="text-slate-800 dark:text-slate-200">UGX 50,000</b> is required.
                  </p>
                  <div className="bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/60 p-3 rounded-xl flex items-center gap-3 mt-1">
                    <span className="text-2xl">📱</span>
                    <div>
                      <div className="font-hand text-sm font-bold text-blue-800 dark:text-blue-300">Mobile Money Gateway</div>
                      <div className="font-hand2 text-[10px] text-slate-400">Instant validation via MTN MoMo / Airtel Money</div>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 6 && (
                <div className="flex flex-col gap-2">
                  <div className="font-hand text-lg font-bold text-slate-800 dark:text-slate-100">6. Review and Send</div>
                  <p className="font-hand2 text-xs text-slate-500 leading-relaxed">Please carefully confirm that all attached papers are authentic and legible. Submission transmits details straight to the Admissions Officer.</p>
                  <div className="text-blue-600 dark:text-blue-400 font-mono text-xs font-semibold mt-1 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> Verified Mobile Fee paid: MoMo-AP5092
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex justify-between mt-auto pt-1">
              <button
                disabled={activeStep === 1}
                onClick={() => setActiveStep(p => p - 1)}
                className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 text-slate-500 rounded-lg font-hand2 text-xs disabled:opacity-40 cursor-pointer"
              >
                ← Back
              </button>
              <button
                onClick={() => {
                  if (activeStep === 6) {
                    alert("Application Submitted successfully! Check your inbox for interview updates.");
                    setActiveStep(1);
                  } else {
                    setActiveStep(p => p + 1);
                  }
                }}
                className="px-3.5 py-1.5 bg-blue-600 text-white rounded-lg font-hand2 text-xs cursor-pointer hover:bg-blue-700 font-medium"
              >
                {activeStep === 6 ? 'Submit Application →' : 'Next Step →'}
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Notes */}
        <div className="flex flex-col gap-3 justify-center">
          <div className="border border-blue-100 dark:border-blue-950 bg-blue-50/40 dark:bg-blue-950/10 p-4 rounded-xl">
            <div className="font-hand text-lg font-bold text-blue-800 dark:text-blue-400">Low Friction</div>
            <p className="font-hand2 text-xs text-slate-500 leading-relaxed mt-1">
              Optimized for mobile connections. Incremental client-side auto-saves protect prospective student data against sudden outages or drops.
            </p>
          </div>

          <div className="border border-slate-150 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-xs">
            <div className="font-hand text-sm font-bold text-slate-800 dark:text-slate-200">Registration Process</div>
            <ol className="list-decimal pl-4 font-hand2 text-xs text-slate-400 flex flex-col gap-1 mt-1.5">
              <li>Automatic registration token via SMS</li>
              <li>Document audit &amp; credential check</li>
              <li>In-person interview scheduling</li>
              <li>Admission &amp; portal credential provision</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="flex justify-between border-t border-slate-100 dark:border-slate-800 pt-3 text-slate-400 dark:text-slate-500 font-hand2 text-xs">
        <span>Public Portal · Multi-step admissions form</span>
        <span>03 / 17</span>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 4: Login & Role Router
// ==========================================
interface LoginSlideProps {
  onLogin: (role: string) => void;
}

export function LoginSlide({ onLogin }: LoginSlideProps) {
  const [selectedRole, setSelectedRole] = useState('student');

  const routerRoles = [
    { id: 'student', label: 'Student Space', path: '/me' },
    { id: 'tutor', label: 'Lecturer Space', path: '/teach' },
    { id: 'principal', label: 'Admin Desk', path: '/admin' }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 overflow-y-auto">
      <header className="border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xl font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center">04</span>
          <div>
            <h2 className="font-hand text-2xl font-bold text-slate-850 dark:text-slate-50">Login &amp; role router</h2>
            <p className="font-hand2 text-xs text-slate-500 dark:text-slate-400">Single secure landing hub which routes users based on validated security privileges.</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-[1fr_280px] gap-4 flex-grow items-center">
        {/* Login Screen Frame */}
        <div className="border border-slate-200 dark:border-slate-800 rounded-xl max-w-sm mx-auto w-full p-5 bg-white dark:bg-slate-900 shadow-sm relative">
          <div className="text-center flex flex-col gap-1 mb-4">
            <span className="text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">Kibuli Muslim Hospital</span>
            <span className="font-hand text-xl font-bold text-slate-800 dark:text-slate-100">Health Training Schools Portal</span>
            <span className="text-base mt-1">🌙</span>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); onLogin(selectedRole); }} className="flex flex-col gap-3">
            <div>
              <label className="block font-hand text-base text-slate-600 dark:text-slate-400 mb-1">Registration or Staff ID</label>
              <input
                type="text"
                defaultValue={selectedRole === 'student' ? 'KMH/N/2024/0142' : selectedRole === 'tutor' ? 'KMH/ST/LUBEGA' : 'KMH/ADM/MAYANJA'}
                className="w-full border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-lg font-hand2 text-sm bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-hand text-base text-slate-600 dark:text-slate-400 mb-1">Security PIN / Password</label>
              <input
                type="password"
                defaultValue="••••••••"
                className="w-full border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-lg font-hand2 text-sm bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Interactive Router Helper (Wireframe-only aid) */}
            <div className="bg-slate-50/50 dark:bg-slate-950/40 border border-slate-150 dark:border-slate-800 p-2.5 rounded-lg mt-1">
              <div className="font-mono text-[9px] text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider mb-1.5">✎ Choose role to simulate:</div>
              <div className="flex gap-1">
                {routerRoles.map((r) => (
                  <button
                    type="button"
                    key={r.id}
                    onClick={() => setSelectedRole(r.id)}
                    className={`flex-grow py-1 px-1.5 border text-[9px] font-hand2 rounded cursor-pointer transition-colors ${
                      selectedRole === r.id
                        ? 'bg-blue-600 text-white border-transparent font-semibold shadow-xs'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-500'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-hand text-lg py-2 rounded-lg cursor-pointer mt-1.5 transition-colors font-semibold shadow-xs"
            >
              Secure Portal Entry →
            </button>
          </form>

          <div className="flex justify-between items-center text-[10px] font-hand2 text-slate-400 mt-3 border-t border-slate-100 dark:border-slate-800 pt-2.5">
            <span className="hover:text-slate-600 cursor-pointer">Forgot PIN?</span>
            <span className="text-blue-600 dark:text-blue-400 underline cursor-pointer hover:text-blue-700">Activate Account</span>
          </div>
        </div>

        {/* Side Notes */}
        <div className="flex flex-col gap-3 justify-center">
          <div className="border border-blue-100 dark:border-blue-950 bg-blue-50/40 dark:bg-blue-950/10 p-4 rounded-xl">
            <div className="font-hand text-lg font-bold text-blue-800 dark:text-blue-400">Role Broker</div>
            <p className="font-hand2 text-xs text-slate-500 mt-1 leading-relaxed">
              Upon inputting login, server-side claim values process user authorizations, guiding users automatically to their designated dashboard workspace.
            </p>
          </div>

          <div className="border border-slate-150 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-xs">
            <div className="font-hand text-sm font-bold text-slate-850 dark:text-slate-100">Endpoints</div>
            <ul className="list-disc pl-4 font-hand2 text-xs text-slate-400 flex flex-col gap-1 mt-1.5">
              <li><b>/me</b> - Student space</li>
              <li><b>/teach</b> - Academic faculty portal</li>
              <li><b>/admin</b> - Sessional management desk</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between border-t border-slate-100 dark:border-slate-800 pt-3 text-slate-400 dark:text-slate-500 font-hand2 text-xs">
        <span>Authentication Gate · Role Router</span>
        <span>04 / 17</span>
      </div>
    </div>
  );
}
