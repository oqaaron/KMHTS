import React, { useState } from 'react';

interface DeckControlsProps {
  currentIndex: number;
  totalSlides: number;
  darkMode: boolean;
  onPrev: () => void;
  onNext: () => void;
  onReset: () => void;
  onToggleDarkMode: () => void;
}

export function DeckControls({
  currentIndex,
  totalSlides,
  darkMode,
  onPrev,
  onNext,
  onReset,
  onToggleDarkMode
}: DeckControlsProps) {
  const [showShortcuts, setShowShortcuts] = useState(false);

  const percentage = Math.round(((currentIndex + 1) / totalSlides) * 100);

  return (
    <div className="flex justify-between items-center bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 px-6 py-3 border-t border-slate-150 dark:border-slate-850 relative z-30 font-hand2 select-none shadow-sm">
      {/* Progress */}
      <div className="flex items-center gap-3">
        <span className="font-hand text-xl font-bold text-blue-600 dark:text-blue-400">
          {(currentIndex + 1).toString().padStart(2, '0')} <span className="text-slate-300 dark:text-slate-700 font-normal">/</span> {totalSlides.toString().padStart(2, '0')}
        </span>
        <div className="w-24 bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
          <div className="bg-blue-600 dark:bg-blue-400 h-full transition-all duration-300" style={{ width: `${percentage}%` }} />
        </div>
        <span className="text-xs text-slate-400 font-mono">{percentage}% sessional flow</span>
      </div>

      {/* Nav Controls */}
      <div className="flex gap-2 items-center">
        <button
          onClick={onPrev}
          disabled={currentIndex === 0}
          className="px-3 py-1 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-35 disabled:hover:bg-slate-50 cursor-pointer text-xs font-semibold transition-colors"
        >
          ← Prev
        </button>

        <button
          onClick={onNext}
          disabled={currentIndex === totalSlides - 1}
          className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg border border-transparent disabled:opacity-35 disabled:hover:bg-blue-600 cursor-pointer text-xs font-semibold transition-colors"
        >
          Next →
        </button>

        <button
          onClick={onReset}
          className="px-3 py-1 border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg cursor-pointer text-xs font-hand ml-2 transition-colors"
        >
          Reset Deck [R]
        </button>
      </div>

      {/* Tools */}
      <div className="flex gap-3 items-center text-sm">
        <button
          onClick={() => setShowShortcuts(true)}
          className="px-2.5 py-1 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white cursor-pointer transition-colors text-xs border border-slate-200 dark:border-slate-700 rounded-md bg-slate-50/40 dark:bg-slate-800/40"
        >
          ⌨️ Shortcuts help
        </button>

        <button
          onClick={onToggleDarkMode}
          className="px-3.5 py-1 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 rounded-full font-semibold cursor-pointer transition-transform hover:scale-[1.02] text-xs"
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'} Mode
        </button>
      </div>

      {/* Shortcuts Help Modal */}
      {showShortcuts && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4" onClick={() => setShowShortcuts(false)}>
          <div
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-5 rounded-xl max-w-sm w-full font-hand2 shadow-lg text-slate-900 dark:text-slate-100 animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="font-hand text-xl font-bold text-blue-600 dark:text-blue-400 mb-2 border-b border-slate-100 dark:border-slate-700 pb-2">
              ⌨️ Keyboard Shortcuts
            </div>
            <div className="flex flex-col gap-2 mt-3 text-xs font-mono">
              <div className="flex justify-between border-b border-slate-50 dark:border-slate-800 pb-1"><span>Next Slide:</span><b>Right Arrow · Space</b></div>
              <div className="flex justify-between border-b border-slate-50 dark:border-slate-800 pb-1"><span>Prev Slide:</span><b>Left Arrow</b></div>
              <div className="flex justify-between border-b border-slate-50 dark:border-slate-800 pb-1"><span>First Slide:</span><b>Home · R</b></div>
              <div className="flex justify-between border-b border-slate-50 dark:border-slate-800 pb-1"><span>Last Slide:</span><b>End</b></div>
              <div className="flex justify-between pb-1"><span>Jump to slide:</span><b>Keys 1 - 9</b></div>
            </div>
            <button
              onClick={() => setShowShortcuts(false)}
              className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-bold cursor-pointer text-center text-sm transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
