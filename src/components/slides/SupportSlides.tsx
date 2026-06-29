import React, { useState } from 'react';
import { initialClinicalLogs, initialLabLogs, libraryBooks } from '../../data';
import { ClinicalLog, LabLog } from '../../types';

// ==========================================
// SLIDE 12: Clinical & Lab Log
// ==========================================
export function ClinicalLabSlide() {
  const [clinicalLogs, setClinicalLogs] = useState<ClinicalLog[]>(initialClinicalLogs);
  const [labLogs, setLabLogs] = useState<LabLog[]>(initialLabLogs);

  // Modal logs states
  const [showClinModal, setShowClinicalModal] = useState(false);
  const [newWard, setNewWard] = useState('Paediatrics');
  const [newClinActivities, setNewClinActivities] = useState('');
  const [newClinHours, setNewClinHours] = useState(4);

  const [showLabModal, setShowLabModal] = useState(false);
  const [newSpecimen, setNewSpecimen] = useState('');
  const [newProcedure, setNewProcedure] = useState('');
  const [newResult, setNewResult] = useState('');

  const totalRequired = 480;
  const approvedHours = clinicalLogs.filter(l => l.status === 'approved').reduce((acc, curr) => acc + curr.hours, 0);
  const pendingHours = clinicalLogs.filter(l => l.status === 'pending').reduce((acc, curr) => acc + curr.hours, 0);

  const handleAddClinicalLog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClinActivities) {
      alert("Please enter shift activities!");
      return;
    }
    const newLog: ClinicalLog = {
      date: '29 Jun',
      ward: newWard,
      activities: newClinActivities,
      hours: Number(newClinHours),
      status: 'pending'
    };
    setClinicalLogs([newLog, ...clinicalLogs]);
    setShowClinicalModal(false);
    setNewClinActivities('');
    alert("Clinical rotation shift logged successfully under verification status!");
  };

  const handleAddLabLog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSpecimen || !newProcedure || !newResult) {
      alert("Please fill in all lab log fields!");
      return;
    }
    const newLog: LabLog = {
      date: '29 Jun',
      specimen: newSpecimen,
      procedure: newProcedure,
      result: newResult,
      signOff: 'pending'
    };
    setLabLogs([newLog, ...labLogs]);
    setShowLabModal(false);
    setNewSpecimen('');
    setNewProcedure('');
    setNewResult('');
    alert("Lab practical entry logged! Awaiting instructor sign-off.");
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 overflow-y-auto">
      <header className="border-b border-slate-100 dark:border-slate-800 pb-2 mb-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="font-mono text-lg font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center">12</span>
          <div>
            <h2 className="font-hand text-2xl font-bold text-slate-850 dark:text-slate-50">Clinical &amp; Lab Practical Logs</h2>
            <p className="font-hand2 text-xs text-slate-455 dark:text-slate-400">Nursing students record ward rotations, Laboratory technology students track specimen sign-offs.</p>
          </div>
        </div>
      </header>

      {/* Grid panels */}
      <div className="grid grid-cols-2 gap-4 flex-grow overflow-hidden">
        {/* Nursing Placements on Left */}
        <div className="border border-slate-200 dark:border-slate-800 p-3.5 bg-white dark:bg-slate-900 rounded-xl flex flex-col justify-between shadow-2xs relative overflow-y-auto">
          <div>
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-855 pb-1.5 mb-2.5">
              <span className="font-hand text-lg font-bold text-slate-800 dark:text-slate-100">🏥 Nursing Clinical Rotations</span>
              <button onClick={() => setShowClinicalModal(true)} className="px-2.5 py-1 bg-blue-600 text-white rounded-lg text-[10px] font-mono font-semibold cursor-pointer hover:bg-blue-700 transition-colors">
                + Log Shift
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono mb-2.5">
              <div className="border border-slate-150 dark:border-slate-800 rounded bg-slate-50/50 dark:bg-slate-950/20 py-1 text-slate-500">Goal: <b>{totalRequired}h</b></div>
              <div className="border border-blue-100 dark:border-blue-950 rounded bg-blue-50/20 dark:bg-blue-950/10 text-blue-700 dark:text-blue-450 py-1 font-bold">Approved: {approvedHours}h</div>
              <div className="border border-amber-100 rounded bg-amber-50/25 text-amber-700 py-1">Pending: {pendingHours}h</div>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden mb-3">
              <div className="bg-blue-600 h-full" style={{ width: `${(approvedHours / totalRequired) * 100}%` }} />
            </div>

            {/* Logs table */}
            <div className="border border-slate-150 dark:border-slate-800 rounded-lg overflow-hidden text-[11px] flex-grow">
              <div className="grid grid-cols-[55px_80px_1.5fr_35px_70px] bg-slate-55 dark:bg-slate-950 border-b border-slate-150 dark:border-slate-850 p-1.5 font-bold font-mono text-[9px] uppercase tracking-wider text-slate-500 text-center">
                <div>Date</div><div>Ward</div><div>Activities</div><div>Hrs</div><div>Status</div>
              </div>
              <div className="divide-y divide-slate-100 dark:divide-slate-850 overflow-y-auto max-h-[140px] font-hand2 text-[10px]">
                {clinicalLogs.map((log, idx) => (
                  <div key={idx} className="grid grid-cols-[55px_80px_1.5fr_35px_70px] p-1.5 text-center items-center">
                    <div className="text-slate-400 font-mono text-[9px]">{log.date}</div>
                    <div className="font-bold text-left px-1 text-slate-800 dark:text-slate-200">{log.ward}</div>
                    <div className="text-left leading-tight truncate pr-1" title={log.activities}>{log.activities}</div>
                    <div className="font-mono text-slate-500">{log.hours}</div>
                    <div>
                      <span className={`px-1.5 rounded-full text-[8px] font-mono font-bold uppercase border ${
                        log.status === 'pending' ? 'bg-amber-50 text-amber-700 border-amber-100' : 'bg-blue-50 text-blue-700 border-blue-100'
                      }`}>
                        {log.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* New Clinical Log modal/form inline */}
          {showClinModal && (
            <div className="absolute inset-0 bg-white/95 dark:bg-slate-900/95 p-4 rounded-xl flex flex-col justify-between z-10 border border-blue-500 animate-fade-in shadow-lg">
              <form onSubmit={handleAddClinicalLog} className="flex flex-col gap-2.5 font-hand2 text-xs text-slate-700 dark:text-slate-300">
                <div className="font-hand text-lg font-bold text-slate-850 dark:text-slate-50 border-b border-slate-100 dark:border-slate-800 pb-1.5 mb-1">New Rotation Entrance</div>
                <div>
                  <label className="block text-[10px] text-slate-400 mb-0.5">Active Assignment Ward</label>
                  <select value={newWard} onChange={(e) => setNewWard(e.target.value)} className="w-full border border-slate-200 dark:border-slate-750 p-1.5 rounded-lg bg-white dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-200">
                    <option value="Paediatrics">Paediatrics Ward</option>
                    <option value="Maternity">Maternity Ward</option>
                    <option value="Theatre">Theatre Ward</option>
                    <option value="Emergency">Emergency</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] text-slate-400 mb-0.5">Logged Hours (1 - 12)</label>
                  <input type="number" value={newClinHours} onChange={(e) => setNewClinHours(Number(e.target.value))} className="w-full border border-slate-200 dark:border-slate-750 p-1.5 rounded-lg dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-200" max={12} min={1} />
                </div>
                <div>
                  <label className="block text-[10px] text-slate-400 mb-0.5">Tasks &amp; Observations Performed</label>
                  <textarea value={newClinActivities} onChange={(e) => setNewClinActivities(e.target.value)} placeholder="vitals, drug administration, patient observations..." className="w-full border border-slate-200 dark:border-slate-750 p-2 rounded-lg h-16 dark:bg-slate-800 text-xs outline-none focus:ring-1 focus:ring-blue-500" />
                </div>
                <div className="flex gap-2 justify-end mt-2">
                  <button type="button" onClick={() => setShowClinicalModal(false)} className="px-3 py-1 border border-slate-200 dark:border-slate-750 text-xs rounded-lg cursor-pointer hover:bg-slate-50">Cancel</button>
                  <button type="submit" className="px-3 py-1 bg-blue-600 text-white text-xs rounded-lg cursor-pointer hover:bg-blue-700 font-semibold transition-colors">Post Log</button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Lab Tech logs on Right */}
        <div className="border border-slate-200 dark:border-slate-800 p-3.5 bg-white dark:bg-slate-900 rounded-xl flex flex-col justify-between shadow-2xs relative overflow-y-auto">
          <div>
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-855 pb-1.5 mb-2.5">
              <span className="font-hand text-lg font-bold text-slate-800 dark:text-slate-100">🧪 Laboratory Competency logs</span>
              <button onClick={() => setShowLabModal(true)} className="px-2.5 py-1 bg-blue-600 text-white rounded-lg text-[10px] font-mono font-semibold cursor-pointer hover:bg-blue-700 transition-colors">
                + Log Entry
              </button>
            </div>

            {/* Competency tags */}
            <div className="mb-3">
              <div className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-semibold mb-1.5">Checked Sign-offs:</div>
              <div className="flex flex-wrap gap-1.5 font-mono text-[8px] text-slate-600 dark:text-slate-350">
                <span className="bg-blue-50 border border-blue-150 text-blue-700 px-2 py-0.5 rounded-full font-bold">Urinalysis ✓</span>
                <span className="bg-blue-50 border border-blue-150 text-blue-700 px-2 py-0.5 rounded-full font-bold">Gram stain ✓</span>
                <span className="bg-blue-50 border border-blue-150 text-blue-700 px-2 py-0.5 rounded-full font-bold">Microscopy ✓</span>
                <span className="bg-amber-50 border border-amber-150 text-amber-800 px-2 py-0.5 rounded-full">Malaria smear · 50%</span>
                <span className="bg-slate-50 border border-slate-150 text-slate-400 px-2 py-0.5 rounded-full">Histology · 0%</span>
              </div>
            </div>

            {/* Specimen table */}
            <div className="border border-slate-150 dark:border-slate-800 rounded-lg overflow-hidden text-[11px] flex-grow">
              <div className="grid grid-cols-[55px_55px_1.5fr_1fr_80px] bg-slate-55 dark:bg-slate-950 border-b border-slate-150 dark:border-slate-850 p-1.5 font-bold font-mono text-[9px] uppercase tracking-wider text-slate-500 text-center">
                <div>Date</div><div>Spec.</div><div>Procedure</div><div>Result</div><div>Sign-off</div>
              </div>
              <div className="divide-y divide-slate-100 dark:divide-slate-850 overflow-y-auto max-h-[140px] font-hand2 text-[10px]">
                {labLogs.map((log, idx) => (
                  <div key={idx} className="grid grid-cols-[55px_55px_1.5fr_1fr_80px] p-1.5 text-center items-center">
                    <div className="text-slate-400 font-mono text-[9px]">{log.date}</div>
                    <div className="font-mono text-slate-500 text-[10px]">{log.specimen}</div>
                    <div className="font-bold text-left px-1 truncate text-slate-800 dark:text-slate-200" title={log.procedure}>{log.procedure}</div>
                    <div className="text-left px-1 truncate font-mono text-[10px] text-slate-600 dark:text-slate-400" title={log.result}>{log.result}</div>
                    <div>
                      {log.signOff === 'pending' ? (
                        <span className="px-1.5 rounded-full text-[8px] font-mono font-bold uppercase border bg-amber-50 text-amber-700 border-amber-100">pending</span>
                      ) : (
                        <span className="text-blue-600 dark:text-blue-450 font-bold font-mono text-[9px]">{log.signOff}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* New Lab Log modal */}
          {showLabModal && (
            <div className="absolute inset-0 bg-white/95 dark:bg-slate-900/95 p-4 rounded-xl flex flex-col justify-between z-10 border border-blue-500 animate-fade-in shadow-lg">
              <form onSubmit={handleAddLabLog} className="flex flex-col gap-2.5 font-hand2 text-xs text-slate-700 dark:text-slate-300">
                <div className="font-hand text-lg font-bold text-slate-850 dark:text-slate-50 border-b border-slate-100 dark:border-slate-800 pb-1.5 mb-1">Log Practical Competency</div>
                <div>
                  <label className="block text-[10px] text-slate-400 mb-0.5">Specimen ID Reference</label>
                  <input type="text" value={newSpecimen} onChange={(e) => setNewSpecimen(e.target.value)} placeholder="e.g. BS-2841, UR-1742" className="w-full border border-slate-200 dark:border-slate-750 p-1.5 rounded-lg dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-200" />
                </div>
                <div>
                  <label className="block text-[10px] text-slate-400 mb-0.5">Procedure &amp; Methodology</label>
                  <input type="text" value={newProcedure} onChange={(e) => setNewProcedure(e.target.value)} placeholder="e.g. malaria smear, stool examination" className="w-full border border-slate-200 dark:border-slate-750 p-1.5 rounded-lg dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-200" />
                </div>
                <div>
                  <label className="block text-[10px] text-slate-400 mb-0.5">Diagnostic Finding Details</label>
                  <input type="text" value={newResult} onChange={(e) => setNewResult(e.target.value)} placeholder="e.g. + P. falciparum, WBC elevated" className="w-full border border-slate-200 dark:border-slate-750 p-1.5 rounded-lg dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-200" />
                </div>
                <div className="flex gap-2 justify-end mt-2">
                  <button type="button" onClick={() => setShowLabModal(false)} className="px-3 py-1 border border-slate-200 dark:border-slate-750 text-xs rounded-lg cursor-pointer hover:bg-slate-50">Cancel</button>
                  <button type="submit" className="px-3 py-1 bg-blue-600 text-white text-xs rounded-lg cursor-pointer hover:bg-blue-700 font-semibold transition-colors">Post Specimen</button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between border-t border-slate-100 dark:border-slate-800 pt-2.5 text-slate-400 dark:text-slate-500 font-hand2 text-xs mt-3">
        <span>Curriculum Placements · Live logs submission rosters</span>
        <span>12 / 17</span>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 13: Student Profile & verified Records
// ==========================================
export function ProfileSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 overflow-y-auto">
      <header className="border-b border-slate-100 dark:border-slate-800 pb-2 mb-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="font-mono text-lg font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center">13</span>
          <div>
            <h2 className="font-hand text-2xl font-bold text-slate-855 dark:text-slate-50">Student Profile &amp; Records</h2>
            <p className="font-hand2 text-xs text-slate-450 dark:text-slate-400">Secure central student directory profile dossier. Locked and verified by registration.</p>
          </div>
        </div>
      </header>

      {/* Main layout grid */}
      <div className="grid grid-cols-[230px_1fr_230px] gap-4 flex-grow overflow-hidden text-xs">
        {/* Profile photo block */}
        <div className="flex flex-col gap-3">
          <div className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 rounded-xl text-center shadow-2xs">
            <div className="w-28 h-28 border border-dashed rounded-full bg-slate-50/50 dark:bg-slate-950/25 border-slate-300 dark:border-slate-750 flex items-center justify-center font-mono text-[9px] text-slate-400 mx-auto">
              [ Hijab Portrait ]
            </div>
            <div className="font-hand text-lg font-bold mt-2.5 text-slate-800 dark:text-slate-100">Aisha Nakato</div>
            <div className="font-mono text-slate-400 text-[10px] mt-0.5">KMH/N/2024/0142</div>
            <div className="flex justify-center gap-1.5 mt-2.5">
              <span className="bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-300 px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider">Nursing</span>
              <span className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded text-[9px] font-mono">Yr 2</span>
            </div>
          </div>

          <div className="border border-blue-100 dark:border-blue-900 bg-blue-50/15 dark:bg-blue-950/10 p-3.5 rounded-xl">
            <div className="font-hand text-base font-bold text-blue-700 dark:text-blue-400 mb-1">Verified ID Badge</div>
            <p className="font-hand2 text-[10px] text-slate-450 leading-relaxed">
              Provides verifiable clinical QR barcodes to authenticate student nursing rosters at local hospitals.
            </p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-mono text-[9px] uppercase tracking-wider font-bold py-2 rounded-lg mt-3 cursor-pointer transition-colors" onClick={() => alert("Digital ID card downloaded successfully!")}>
              Download Digital ID Card
            </button>
          </div>
        </div>

        {/* Profile fields directories */}
        <div className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-2xs overflow-y-auto flex flex-col gap-4 font-hand2">
          <div>
            <h4 className="font-hand text-base font-bold text-slate-800 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-1.5 mb-2.5">1. Personal Information</h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex justify-between"><span>Full name:</span><b className="text-slate-800 dark:text-slate-200">Aisha Nakato</b></div>
              <div className="flex justify-between"><span>DOB:</span><b className="text-slate-800 dark:text-slate-200">14 Mar 2003</b></div>
              <div className="flex justify-between"><span>National ID:</span><b className="text-slate-800 dark:text-slate-200">CM03••••••PE</b></div>
              <div className="flex justify-between"><span>Religion:</span><b className="text-slate-800 dark:text-slate-200">Islam</b></div>
              <div className="flex justify-between"><span>Sponsor:</span><b className="text-slate-800 dark:text-slate-200">+256 701 ••• 008</b></div>
              <div className="flex justify-between"><span>Phone:</span><b className="text-slate-800 dark:text-slate-200">+256 772 ••• 142</b></div>
            </div>
          </div>

          <div>
            <h4 className="font-hand text-base font-bold text-slate-800 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-1.5 mb-2.5">2. Emergency Sponsor (Next of Kin)</h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex justify-between"><span>Sponsor name:</span><b className="text-slate-800 dark:text-slate-200">Mr. Yusuf Nakato</b></div>
              <div className="flex justify-between"><span>Relationship:</span><b className="text-slate-800 dark:text-slate-200">Father</b></div>
              <div className="flex justify-between"><span>Occupation:</span><b className="text-slate-800 dark:text-slate-200">Retail Trader</b></div>
              <div className="flex justify-between"><span>Home District:</span><b className="text-slate-800 dark:text-slate-200">Mukono</b></div>
            </div>
          </div>

          <div>
            <h4 className="font-hand text-base font-bold text-slate-800 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-1.5 mb-2.5">3. Medical Clearance Status</h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex justify-between"><span>Blood group:</span><b className="text-slate-800 dark:text-slate-200">O+</b></div>
              <div className="flex justify-between"><span>Hep-B Vaccines:</span><b className="text-blue-600 dark:text-blue-400 font-semibold font-mono">3 / 3 Complete</b></div>
              <div className="flex justify-between"><span>Fit-check date:</span><b className="text-slate-800 dark:text-slate-200">12 Jan 2026</b></div>
              <div className="flex justify-between"><span>Allergies:</span><b className="text-slate-800 dark:text-slate-200">None</b></div>
            </div>
          </div>
        </div>

        {/* Documents verified list checklist */}
        <div className="border border-slate-200 dark:border-slate-800 p-3.5 bg-white dark:bg-slate-900 rounded-xl shadow-2xs flex flex-col justify-between overflow-y-auto">
          <div>
            <h4 className="font-hand text-base font-bold border-b border-slate-100 dark:border-slate-800 pb-1.5 mb-2.5 text-slate-850 dark:text-slate-100">Verified Archives</h4>
            <div className="flex flex-col gap-2 font-mono text-[9px] uppercase tracking-wider text-slate-500 font-semibold">
              <div className="flex justify-between"><span>Admission Letter</span><span className="text-blue-600">verified ✓</span></div>
              <div className="flex justify-between"><span>PLE transcript</span><span className="text-blue-600">verified ✓</span></div>
              <div className="flex justify-between"><span>UCE certificate</span><span className="text-blue-600">verified ✓</span></div>
              <div className="flex justify-between"><span>UACE certificate</span><span className="text-blue-600">verified ✓</span></div>
              <div className="flex justify-between"><span>National ID copy</span><span className="text-blue-600">verified ✓</span></div>
              <div className="flex justify-between"><span>Medical fitness cert</span><span className="text-blue-600">verified ✓</span></div>
              <div className="flex justify-between"><span>Sponsor guarantee</span><span className="text-red-500">missing ✎</span></div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 mt-4 text-[10px] text-slate-450 font-hand2 leading-normal">
            ✎ <b>Registrar Notes:</b> Submit any documentary updates or corrections to the registration desk with verification copies.
          </div>
        </div>
      </div>

      <div className="flex justify-between border-t border-slate-100 dark:border-slate-800 pt-2.5 text-slate-400 dark:text-slate-500 font-hand2 text-xs mt-3">
        <span>Identity Vault · Certified sessional metadata</span>
        <span>13 / 17</span>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 14: Library Catalogue Searcher
// ==========================================
export function LibrarySlide() {
  const [searchTerm, setSearchTime] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'Textbook' | 'WHO' | 'Journal'>('all');

  const filteredBooks = libraryBooks.filter(b => {
    // Search
    const matchesSearch = b.title.toLowerCase().includes(searchTerm.toLowerCase()) || b.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Category filters
    if (activeCategory === 'all') return matchesSearch;
    if (activeCategory === 'WHO') return b.type === 'WHO publication' && matchesSearch;
    return b.type === activeCategory && matchesSearch;
  });

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 overflow-y-auto">
      <header className="border-b border-slate-100 dark:border-slate-800 pb-2 mb-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="font-mono text-lg font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center">14</span>
          <div>
            <h2 className="font-hand text-2xl font-bold text-slate-850 dark:text-slate-50">Library &amp; E-Resources</h2>
            <p className="font-hand2 text-xs text-slate-455 dark:text-slate-400">Searchable catalogue for medical books, research publications and public WHO healthcare directories.</p>
          </div>
        </div>
      </header>

      {/* Search Header Bar */}
      <div className="flex gap-3 mb-3 text-xs font-hand2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTime(e.target.value)}
          placeholder="🔍 Search textbooks, authors, serial codes..."
          className="flex-grow border border-slate-200 dark:border-slate-750 p-2 rounded-lg bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 text-xs focus:ring-1 focus:ring-blue-500 outline-none"
        />
        
        {/* Cat filters */}
        <div className="flex border border-slate-200 dark:border-slate-750 rounded-lg overflow-hidden bg-white dark:bg-slate-900 items-center text-[10px] font-mono">
          {(['all', 'Textbook', 'WHO', 'Journal'] as const).map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-2 cursor-pointer transition-colors ${activeCategory === cat ? 'bg-blue-600 text-white font-bold' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-500 dark:text-slate-400'}`}
            >
              {cat === 'WHO' ? 'WHO Publications' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Book Grid results */}
      <div className="grid grid-cols-4 gap-3.5 flex-grow overflow-y-auto pr-1 content-start">
        {filteredBooks.map(b => (
          <div key={b.id} className="border border-slate-150 dark:border-slate-800 p-3 rounded-xl bg-white dark:bg-slate-900 flex flex-col justify-between text-xs shadow-2xs">
            <div>
              <div className="border border-dashed border-slate-200 dark:border-slate-750 h-28 bg-slate-50 dark:bg-slate-950/20 rounded-lg flex flex-col gap-1 items-center justify-center text-slate-400 font-mono text-[9px] mb-2 text-center p-2 leading-tight">
                <span>📚</span>
                <span className="uppercase text-[8px] font-bold tracking-wider">{b.type}</span>
              </div>
              <h3 className="font-hand text-base font-bold text-slate-800 dark:text-slate-100 leading-tight truncate" title={b.title}>{b.title}</h3>
              <p className="font-hand2 text-slate-400 text-[10px] mt-0.5">{b.author} · {b.year}</p>
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-850">
              <div className="flex justify-between items-center text-[9px] font-mono mb-2.5">
                <span className={`px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${b.available ? 'bg-blue-50 text-blue-700' : 'bg-red-50 text-red-700'}`}>
                  {b.available ? 'On Shelf' : 'On Loan'}
                </span>
                <span className="text-slate-400 font-medium">{b.location || `Queue: ${b.queueCount}`}</span>
              </div>

              {b.downloadUrl ? (
                <button
                  onClick={() => alert(`Beginning secure PDF download (${b.downloadUrl})`)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-1.5 rounded-lg font-mono text-[9px] uppercase tracking-wider font-bold cursor-pointer text-center transition-colors"
                >
                  📖 Open digital PDF
                </button>
              ) : (
                <button
                  disabled={!b.available}
                  onClick={() => alert(`Book reserved at main library desk! Pick-up code: LIB-${Math.floor(100+Math.random()*900)}`)}
                  className="w-full border border-slate-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 py-1.5 rounded-lg font-mono text-[9px] uppercase tracking-wider font-bold cursor-pointer text-center transition-colors disabled:opacity-40"
                >
                  {b.available ? 'Reserve Pick-up' : 'Join Queue'}
                </button>
              )}
            </div>
          </div>
        ))}
        {filteredBooks.length === 0 && (
          <div className="col-span-4 border border-dashed border-slate-200 dark:border-slate-700 text-center p-8 font-hand text-xl text-slate-400 rounded-xl">
            No library resources matched "{searchTerm}".
          </div>
        )}
      </div>

      <div className="flex justify-between border-t border-slate-100 dark:border-slate-800 pt-2.5 text-slate-400 dark:text-slate-500 font-hand2 text-xs mt-3">
        <span>Digital Library catalogue · WHO open resource repository</span>
        <span>14 / 17</span>
      </div>
    </div>
  );
}
