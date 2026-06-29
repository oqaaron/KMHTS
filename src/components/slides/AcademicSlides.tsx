import React, { useState } from 'react';
import { initialAssignments, initialFeesLedger } from '../../data';
import { Assignment, FeeTransaction } from '../../types';

// ==========================================
// SLIDE 9: Assignments List & Submitter
// ==========================================
export function AssignmentsSlide() {
  const [assignments, setAssignments] = useState<Assignment[]>(initialAssignments);
  const [selectedId, setSelectedId] = useState('1');
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  const selectedTask = assignments.find(a => a.id === selectedId) || assignments[0];

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFileName(e.dataTransfer.files[0].name);
    }
  };

  const handleSubmitAssignment = () => {
    if (!uploadedFileName) {
      alert("Please upload/drag a file first!");
      return;
    }
    const updated = assignments.map(a => {
      if (a.id === selectedId) {
        return { ...a, status: 'submitted' as const, dueDays: 'submitted just now' };
      }
      return a;
    });
    setAssignments(updated);
    alert(`Success! "${uploadedFileName}" uploaded and submitted to ${selectedTask.course}.`);
    setUploadedFileName(null);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 overflow-y-auto">
      <header className="border-b border-slate-100 dark:border-slate-800 pb-2 mb-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="font-mono text-lg font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center">09</span>
          <div>
            <h2 className="font-hand text-2xl font-bold text-slate-850 dark:text-slate-50">Assignments Workspace</h2>
            <p className="font-hand2 text-xs text-slate-450 dark:text-slate-400">Integrated course submissions feed. Click a task row to upload your answer scripts.</p>
          </div>
        </div>
      </header>

      {/* Two Column Layout */}
      <div className="grid grid-cols-[1.5fr_1fr] gap-4 flex-grow overflow-hidden">
        {/* Table list */}
        <div className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-xl overflow-hidden flex flex-col shadow-xs">
          <div className="grid grid-cols-[40px_2.5fr_1.5fr_1.5fr_1fr] bg-slate-50 dark:bg-slate-950 border-b border-slate-150 dark:border-slate-850 p-2 text-[10px] uppercase font-mono tracking-wider font-bold text-slate-500">
            <div>Type</div>
            <div>Assignment Title</div>
            <div>Course</div>
            <div>Due</div>
            <div>Status</div>
          </div>

          <div className="flex-grow overflow-y-auto divide-y divide-slate-100 dark:divide-slate-850">
            {assignments.map(a => (
              <div
                key={a.id}
                onClick={() => { setSelectedId(a.id); setUploadedFileName(null); }}
                className={`grid grid-cols-[40px_2.5fr_1.5fr_1.5fr_1fr] items-center p-2.5 font-hand2 text-xs cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-800/35 transition-all ${
                  selectedId === a.id ? 'bg-blue-50/20 dark:bg-blue-950/10 border-l-2 border-blue-600' : 'border-l-2 border-transparent'
                }`}
              >
                <div className="text-base text-center">{a.id === '2' ? '📝' : '📄'}</div>
                <div className="min-w-0 pr-2">
                  <b className={`font-semibold truncate block ${selectedId === a.id ? 'text-blue-600 dark:text-blue-400' : 'text-slate-800 dark:text-slate-250'}`}>{a.title}</b>
                  <div className="text-[9px] text-slate-400 font-mono tracking-tight">{a.type}</div>
                </div>
                <div className="text-[10px] text-slate-400 truncate pr-2">{a.course}</div>
                <div className="leading-tight text-[10px]">
                  <div className={a.status === 'to do' ? 'text-red-500 font-semibold' : 'text-slate-400'}>{a.due}</div>
                  <div className="text-[9px] text-slate-400 mt-0.5">{a.dueDays}</div>
                </div>
                <div className="text-center">
                  <span className={`px-2 py-0.5 rounded-full text-[8px] uppercase font-mono font-bold tracking-wider border ${
                    a.status === 'to do' ? 'bg-red-50 text-red-700 border-red-100' :
                    a.status === 'submitted' ? 'bg-amber-50 text-amber-700 border-amber-100' :
                    'bg-blue-50 text-blue-700 border-blue-100'
                  }`}>
                    {a.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Task Details Side panel */}
        <div className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 rounded-xl flex flex-col justify-between shadow-xs overflow-y-auto">
          <div>
            <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest block">{selectedTask.course}</span>
            <h3 className="font-hand text-lg font-bold mt-1 text-slate-850 dark:text-slate-100 leading-snug">{selectedTask.title}</h3>
            <p className="font-hand2 text-[10px] text-slate-400 mt-1">Specifications: {selectedTask.type}</p>

            <div className="border border-slate-150 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-950/30 p-3 rounded-lg text-xs font-hand2 text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
              <b className="text-slate-700 dark:text-slate-300 font-medium block mb-1">Assignment Spec:</b> {selectedTask.description}
            </div>

            {selectedTask.materials.length > 0 && (
              <div className="mt-4">
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">Learning Materials</div>
                <div className="flex flex-col gap-1 text-[10px] text-blue-600 dark:text-blue-400 font-mono">
                  {selectedTask.materials.map(m => (
                    <span key={m.name} className="cursor-pointer hover:underline flex items-center gap-1.5 py-1">
                      <span>📄</span> {m.name} <span className="text-[8px] text-slate-400">(download)</span>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
            {selectedTask.status === 'to do' ? (
              <div className="flex flex-col gap-2.5">
                <div className="font-hand text-xs font-bold text-slate-700 dark:text-slate-300">Submit Your PDF Answer Script:</div>
                
                {/* Drag n drop box */}
                <div
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                  className={`border border-dashed rounded-xl p-4 text-center font-hand2 text-xs flex flex-col items-center justify-center cursor-pointer min-h-[90px] transition-all duration-200 ${
                    dragActive 
                      ? 'border-blue-500 bg-blue-50/20' 
                      : 'border-slate-200 bg-slate-50/40 dark:bg-slate-950/30 dark:border-slate-800'
                  }`}
                  onClick={() => {
                    const name = prompt("Enter a mockup file name (e.g. pharmacology_final.pdf):");
                    if (name) setUploadedFileName(name);
                  }}
                >
                  {uploadedFileName ? (
                    <div className="text-blue-600 dark:text-blue-400 font-mono text-[10px] font-semibold">
                      📎 {uploadedFileName} <span className="text-slate-400 text-[8px] block font-normal mt-1">(click to re-select)</span>
                    </div>
                  ) : (
                    <div className="text-slate-400 font-mono text-[10px]">
                      Drag &amp; drop PDF answer script here<br />
                      <span className="text-[8px] underline text-blue-600 dark:text-blue-400 mt-1.5 inline-block">or click to browse filesystem</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg font-hand2 text-xs cursor-pointer hover:bg-slate-50 transition-colors">Draft Save</button>
                  <button onClick={handleSubmitAssignment} className="flex-1 py-1.5 bg-blue-600 text-white rounded-lg font-hand2 text-xs font-semibold cursor-pointer hover:bg-blue-700 transition-colors">
                    Submit Script
                  </button>
                </div>
              </div>
            ) : selectedTask.status === 'submitted' ? (
              <div className="bg-amber-50/60 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-950 text-amber-800 dark:text-amber-400 p-3 rounded-lg text-center font-hand2 text-xs leading-relaxed">
                <b>Assignment Handed In</b><br />
                Your files are locked. Awaiting evaluation from {selectedTask.course.includes('Pharmacology') ? 'Ms. Nansubuga' : 'Mr. Lubega'}.
              </div>
            ) : (
              <div className="bg-blue-50/40 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-950 text-blue-800 dark:text-blue-300 p-3 rounded-lg text-center font-hand2 text-xs leading-relaxed">
                <b>Evaluated &amp; Marked</b><br />
                Final Score: <span className="text-base font-bold font-mono">{selectedTask.score}/100</span> (Grade: <span className="font-mono font-bold text-xs bg-blue-600 text-white px-1.5 py-0.5 rounded-full ml-1">{selectedTask.grade}</span>)
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between border-t border-slate-100 dark:border-slate-800 pt-2.5 text-slate-400 dark:text-slate-500 font-hand2 text-xs mt-3">
        <span>Assignment Hand-in · Plagiarism scanner secure pipeline</span>
        <span>09 / 17</span>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 10: Exam Results & Stamped Transcript
// ==========================================
export function ResultsSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 overflow-y-auto">
      <header className="border-b border-slate-100 dark:border-slate-800 pb-2 mb-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="font-mono text-lg font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center">10</span>
          <div>
            <h2 className="font-hand text-2xl font-bold text-slate-850 dark:text-slate-50">Exam Results &amp; Transcript</h2>
            <p className="font-hand2 text-xs text-slate-450 dark:text-slate-400">Provisional end-of-semester statements and downloadable transcripts stamped securely by the registrar.</p>
          </div>
        </div>
      </header>

      {/* KPI Stats cards */}
      <div className="grid grid-cols-4 gap-3 mb-3.5">
        <div className="border border-blue-100 dark:border-blue-900 bg-blue-50/20 dark:bg-blue-950/15 p-3 rounded-xl col-span-1.5 flex flex-col justify-between shadow-2xs">
          <div className="font-hand2 text-xs text-slate-400">Cumulative GPA</div>
          <div className="font-mono text-3xl font-bold text-blue-600 dark:text-blue-450 leading-none mt-1">3.62 / 5.00</div>
          <div className="font-hand2 text-[10px] text-slate-500 mt-2">Class Standing: <b className="text-slate-800 dark:text-slate-200">Upper Credit</b> · Rank 14 of 92</div>
        </div>
        <div className="border border-slate-150 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 rounded-xl text-center">
          <div className="font-hand2 text-xs text-slate-400">Credits Completed</div>
          <div className="font-mono text-2xl font-bold text-slate-800 dark:text-slate-100 mt-1">42 / 120</div>
          <div className="font-hand2 text-[9px] text-slate-400 mt-1">On schedule for 2027 grad</div>
        </div>
        <div className="border border-slate-150 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 rounded-xl text-center">
          <div className="font-hand2 text-xs text-slate-400">Sessional Performance</div>
          <div className="font-mono text-2xl font-bold text-slate-800 dark:text-slate-100 mt-1">3.78</div>
          <div className="font-hand2 text-[9px] text-slate-400 mt-1">▲ 0.16 vs prior semester</div>
        </div>
        <div className="border border-blue-50 dark:border-blue-950 bg-blue-50/10 dark:bg-blue-950/5 p-3 rounded-xl text-center">
          <div className="font-hand2 text-xs text-slate-400">Sessional Status</div>
          <div className="font-mono text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1">6 / 6 Pass</div>
          <div className="font-hand2 text-[9px] text-blue-500 font-semibold mt-1">0 Retakes required</div>
        </div>
      </div>

      {/* Provisional Marks Ledger Table */}
      <div className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-xl overflow-hidden flex-grow flex flex-col shadow-xs text-xs">
        <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-950 border-b border-slate-150 dark:border-slate-850">
          <div className="font-hand text-sm font-bold text-slate-800 dark:text-slate-200">Provisional Term Records · Semester 1, 2026</div>
          <div className="font-mono text-[9px] text-slate-400 uppercase tracking-wider font-semibold">UNMEB sessional standards</div>
        </div>

        <div className="grid grid-cols-[80px_2.5fr_1fr_1fr_1fr_1fr_1.2fr] bg-slate-50 dark:bg-slate-950 font-mono text-[9px] font-bold uppercase tracking-wider p-2 border-b border-slate-150 dark:border-slate-850 text-slate-500 text-center">
          <div>Code</div><div>Course Title</div><div>CW</div><div>Exam</div><div>Total</div><div>Grade</div><div>In-Charge</div>
        </div>

        <div className="flex-grow flex flex-col justify-around font-hand2 text-xs">
          <div className="grid grid-cols-[80px_2.5fr_1fr_1fr_1fr_1fr_1.2fr] text-center border-b border-slate-100 dark:border-slate-850 py-1.5 items-center">
            <div className="font-mono text-[10px]">NUR 201</div><div className="text-left font-bold px-2 text-slate-800 dark:text-slate-200">Anatomy &amp; Physiology II</div><div>34/40</div><div>52/60</div><div className="font-bold">86</div><div><span className="bg-blue-600 text-white text-[9px] px-2 py-0.5 rounded-full font-mono font-bold">A</span></div><div className="text-[10px] text-slate-400">Mr. Lubega</div>
          </div>
          <div className="grid grid-cols-[80px_2.5fr_1fr_1fr_1fr_1fr_1.2fr] text-center border-b border-slate-100 dark:border-slate-850 py-1.5 items-center">
            <div className="font-mono text-[10px]">NUR 204</div><div className="text-left font-bold px-2 text-slate-800 dark:text-slate-200">Pharmacology &amp; Drug Mgmt</div><div>28/40</div><div>43/60</div><div className="font-bold">71</div><div><span className="bg-blue-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-mono font-bold">B+</span></div><div className="text-[10px] text-slate-400">Ms. Nansubuga</div>
          </div>
          <div className="grid grid-cols-[80px_2.5fr_1fr_1fr_1fr_1fr_1.2fr] text-center border-b border-slate-100 dark:border-slate-850 py-1.5 items-center">
            <div className="font-mono text-[10px]">NUR 206</div><div className="text-left font-bold px-2 text-slate-800 dark:text-slate-200">Microbiology</div><div>30/40</div><div>46/60</div><div className="font-bold">76</div><div><span className="bg-blue-550 text-white text-[9px] px-1.5 py-0.5 rounded-full font-mono font-bold">A-</span></div><div className="text-[10px] text-slate-400">Dr. Kasozi</div>
          </div>
          <div className="grid grid-cols-[80px_2.5fr_1fr_1fr_1fr_1fr_1.2fr] text-center border-b border-slate-100 dark:border-slate-850 py-1.5 items-center">
            <div className="font-mono text-[10px]">NUR 208</div><div className="text-left font-bold px-2 text-slate-800 dark:text-slate-200">Community &amp; Public Health</div><div>26/40</div><div>42/60</div><div className="font-bold">68</div><div><span className="bg-slate-100 text-slate-750 text-[9px] px-2 py-0.5 rounded-full font-mono font-bold dark:bg-slate-800 dark:text-slate-350">B</span></div><div className="text-[10px] text-slate-400">Ms. Achieng</div>
          </div>
          <div className="grid grid-cols-[80px_2.5fr_1fr_1fr_1fr_1fr_1.2fr] text-center py-1.5 items-center">
            <div className="font-mono text-[10px]">NUR 210</div><div className="text-left font-bold px-2 text-slate-800 dark:text-slate-200">Paediatric Nursing (Clinical)</div><div>—</div><div>Pass</div><div className="font-bold">Pass</div><div><span className="bg-blue-600 text-white text-[9px] px-2 py-0.5 rounded-full font-mono font-bold">P</span></div><div className="text-[10px] text-slate-400">Sr. Namutebi</div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 items-center mt-3">
        <div className="border border-blue-100 dark:border-blue-900 bg-blue-50/15 dark:bg-blue-950/10 p-2.5 rounded-lg text-xs text-slate-500 dark:text-slate-400 flex-grow font-hand2 leading-normal">
          <b>External ratification:</b> Sessional evaluation is provisional until authenticated by national external examiners. Transcripts may be downloaded below.
        </div>
        <button className="border border-slate-200 dark:border-slate-700 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 font-semibold text-slate-750 dark:text-slate-100 text-xs py-2 px-4 rounded-lg cursor-pointer transition-colors shadow-2xs" onClick={() => alert("PDF Transcript download started securely!")}>
          ⬇ Download Stamped PDF Transcript
        </button>
      </div>

      <div className="flex justify-between border-t border-slate-100 dark:border-slate-800 pt-2.5 text-slate-400 dark:text-slate-500 font-hand2 text-xs mt-3">
        <span>Evaluations Center · Transcript issuance gateway</span>
        <span>10 / 17</span>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 11: Fees Statement & MoMo pay
// ==========================================
export function FeesSlide() {
  const [ledger, setLedger] = useState<FeeTransaction[]>(initialFeesLedger);
  const [paymentPhone, setPaymentPhone] = useState('0772 142 841');
  const [paymentAmount, setPaymentAmount] = useState('420000');
  const [paymentMethod, setPaymentAmountMethod] = useState<'MTN' | 'Airtel'>('MTN');
  const [paymentState, setPaymentState] = useState<'idle' | 'sending' | 'confirmed'>('idle');

  const totalFees = 1200000;
  const totalPaid = ledger.filter(t => t.status === 'paid ✓').reduce((acc, curr) => acc + (curr.payment || 0), 0);
  const totalBalance = totalFees - totalPaid;

  const handlePayNow = () => {
    const amtNum = parseInt(paymentAmount, 10);
    if (!paymentPhone || isNaN(amtNum) || amtNum <= 0) {
      alert("Please fill in a valid phone number and payment amount!");
      return;
    }

    setPaymentState('sending');
    setTimeout(() => {
      // Create new transaction
      const newTx: FeeTransaction = {
        date: '29 Jun',
        description: `${paymentMethod} MoMo payment`,
        payment: amtNum,
        balance: totalBalance - amtNum,
        status: 'paid ✓',
        ref: `${paymentMethod.substring(0, 2).toUpperCase()}-RCT-${Math.floor(1000 + Math.random() * 9000)}`
      };
      setLedger([...ledger, newTx]);
      setPaymentState('confirmed');
    }, 2500);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 overflow-y-auto">
      <header className="border-b border-slate-100 dark:border-slate-800 pb-2 mb-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="font-mono text-lg font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center">11</span>
          <div>
            <h2 className="font-hand text-2xl font-bold text-slate-850 dark:text-slate-50">Fees statement &amp; Mobile Money pay</h2>
            <p className="font-hand2 text-xs text-slate-450 dark:text-slate-400">Statement of sessional accounts on left, interactive Mobile Money payment portal on right.</p>
          </div>
        </div>
      </header>

      {/* Ledger + Gateway Layout */}
      <div className="grid grid-cols-[1.5fr_1fr] gap-4 flex-grow overflow-hidden">
        {/* Ledger on left */}
        <div className="flex flex-col gap-3 overflow-hidden">
          {/* Summary boxes */}
          <div className="grid grid-cols-3 gap-2.5 text-center">
            <div className="border border-slate-150 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/15 p-2 rounded-lg">
              <div className="font-hand2 text-[9px] text-slate-400 uppercase tracking-wider">Tuition Charge</div>
              <div className="font-mono text-base font-bold text-slate-800 dark:text-slate-200 mt-1">UGX {totalFees.toLocaleString()}</div>
            </div>
            <div className="border border-blue-100 dark:border-blue-900 bg-blue-50/20 dark:bg-blue-950/20 p-2 rounded-lg text-blue-700 dark:text-blue-400 font-semibold">
              <div className="font-hand2 text-[9px] text-slate-400 uppercase tracking-wider">Total Paid</div>
              <div className="font-mono text-base font-bold mt-1">UGX {totalPaid.toLocaleString()}</div>
            </div>
            <div className={`border p-2 rounded-lg transition-all ${totalBalance > 0 ? 'border-red-100 bg-red-50/30 text-red-600 font-semibold dark:bg-red-950/10' : 'border-blue-200 bg-blue-50 text-blue-700 font-bold'}`}>
              <div className="font-hand2 text-[9px] text-slate-400 uppercase tracking-wider">Balance Outstanding</div>
              <div className="font-mono text-base font-bold mt-1">UGX {totalBalance.toLocaleString()}</div>
            </div>
          </div>

          {/* Ledger table */}
          <div className="border border-slate-250 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-xl overflow-hidden flex-grow flex flex-col shadow-xs text-xs">
            <div className="grid grid-cols-[70px_2.5fr_1.1fr_1.1fr_1.1fr_1fr] bg-slate-50 dark:bg-slate-950 border-b border-slate-150 dark:border-slate-850 p-2 font-mono text-[9px] font-bold uppercase tracking-wider text-slate-500 text-center">
              <div>Date</div><div>Item Description</div><div>Debit</div><div>Credit</div><div>Balance</div><div>Status</div>
            </div>

            <div className="flex-grow overflow-y-auto divide-y divide-slate-100 dark:divide-slate-850 font-hand2 text-xs">
              {ledger.map((item, idx) => (
                <div key={idx} className={`grid grid-cols-[70px_2.5fr_1.1fr_1.1fr_1.1fr_1fr] p-2 text-center items-center ${item.status === 'paid ✓' ? 'bg-blue-50/10 dark:bg-blue-950/5' : ''}`}>
                  <div className="text-slate-400 font-mono text-[10px]">{item.date}</div>
                  <div className="text-left font-bold px-2 text-slate-800 dark:text-slate-200">{item.description}</div>
                  <div className="text-red-500 font-mono">{item.charge ? `UGX ${item.charge.toLocaleString()}` : '—'}</div>
                  <div className="text-blue-600 dark:text-blue-400 font-mono">{item.payment ? `UGX ${item.payment.toLocaleString()}` : '—'}</div>
                  <div className="font-bold font-mono">UGX {item.balance.toLocaleString()}</div>
                  <div className="text-center">
                    <span className={`px-2 py-0.5 rounded-full text-[8px] uppercase font-mono font-bold tracking-wider ${
                      item.status === 'paid ✓' ? 'bg-blue-50 text-blue-700' : 'bg-red-50 text-red-650'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Gateway on right */}
        <div className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 rounded-xl flex flex-col justify-between shadow-xs overflow-y-auto relative">
          <span className="absolute top-3 right-3 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono text-[8px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full">Secure Pay v2</span>
          
          <div>
            <h4 className="font-hand text-lg font-bold text-slate-850 dark:text-slate-100 mb-1">Tuition Remittance</h4>
            <p className="font-hand2 text-[10px] text-slate-400 mb-4">Direct STK push integration. Prompts your handset instantly for secure authorization.</p>

            <div className="font-hand2 text-[11px] text-slate-400 mb-1.5">1. Select provider network:</div>
            <div className="grid grid-cols-2 gap-2 mb-3">
              <button
                onClick={() => setPaymentAmountMethod('MTN')}
                className={`border p-2 rounded-xl cursor-pointer text-center text-xs transition-all ${
                  paymentMethod === 'MTN'
                    ? 'border-yellow-400 bg-yellow-50/20 text-yellow-800 dark:text-yellow-400 font-bold'
                    : 'border-slate-150 bg-white dark:bg-slate-850 text-slate-500'
                }`}
              >
                MTN MoMo
              </button>
              <button
                onClick={() => setPaymentAmountMethod('Airtel')}
                className={`border p-2 rounded-xl cursor-pointer text-center text-xs transition-all ${
                  paymentMethod === 'Airtel'
                    ? 'border-red-400 bg-red-50/20 text-red-800 dark:text-red-400 font-bold'
                    : 'border-slate-150 bg-white dark:bg-slate-850 text-slate-500'
                }`}
              >
                Airtel Money
              </button>
            </div>

            <div className="flex flex-col gap-2.5 font-hand2 text-xs">
              <div>
                <label className="block text-slate-400 text-[9px] uppercase font-mono tracking-wider mb-0.5">Mobile Money Number</label>
                <input
                  type="text"
                  value={paymentPhone}
                  onChange={(e) => setPaymentPhone(e.target.value)}
                  className="w-full border border-slate-200 dark:border-slate-700 p-2 rounded-lg bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-400 text-[9px] uppercase font-mono tracking-wider mb-0.5">Amount to pay (UGX)</label>
                <input
                  type="text"
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(e.target.value)}
                  className="w-full border border-slate-200 dark:border-slate-700 p-2 rounded-lg bg-slate-50 dark:bg-slate-950 font-semibold font-mono text-blue-600 dark:text-blue-400 outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                />
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
            {paymentState === 'idle' ? (
              <button
                onClick={handlePayNow}
                disabled={totalBalance <= 0}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-hand2 text-xs font-semibold py-2.5 rounded-lg cursor-pointer transition-colors disabled:opacity-40"
              >
                Send Payment Request →
              </button>
            ) : paymentState === 'sending' ? (
              <div className="flex flex-col items-center gap-1.5 p-3 text-center">
                <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                <div className="font-hand text-base font-bold text-slate-850 dark:text-slate-100 mt-1">Triggering Mobile PIN Prompt...</div>
                <div className="font-hand2 text-[9px] text-slate-450 leading-relaxed">Enter your Mobile Money PIN on your handset when prompted to authorize the transaction.</div>
              </div>
            ) : (
              <div className="text-center p-3.5 flex flex-col gap-1.5 items-center bg-blue-50/30 dark:bg-blue-950/15 border border-blue-100 dark:border-blue-900 rounded-xl animate-fade-in">
                <span className="text-2xl">🎉</span>
                <div className="font-hand text-base font-bold text-blue-700 dark:text-blue-300">Payment Confirmed!</div>
                <div className="font-hand2 text-[10px] text-slate-500 leading-normal">
                  Your payment of <b className="text-slate-800 dark:text-slate-100">UGX {parseInt(paymentAmount, 10).toLocaleString()}</b> has been cleared. Reciept and SMS dispatched.
                </div>
                <button
                  onClick={() => setPaymentState('idle')}
                  className="mt-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded font-mono text-[9px] font-bold cursor-pointer transition-colors"
                >
                  Close Gateway
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between border-t border-slate-100 dark:border-slate-800 pt-2.5 text-slate-400 dark:text-slate-500 font-hand2 text-xs mt-3">
        <span>Sessional Ledger · Integrated MoMo checkout portal</span>
        <span>11 / 17</span>
      </div>
    </div>
  );
}
