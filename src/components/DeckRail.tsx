import React, { useState } from 'react';
import { Slide } from '../types';

interface DeckRailProps {
  slides: Slide[];
  currentIndex: number;
  skippedIndices: number[];
  onSelectSlide: (idx: number) => void;
  onToggleSkipSlide: (idx: number) => void;
  onDeleteSlide: (idx: number) => void;
}

export function DeckRail({
  slides,
  currentIndex,
  skippedIndices,
  onSelectSlide,
  onToggleSkipSlide,
  onDeleteSlide
}: DeckRailProps) {
  const [confirmDeleteIdx, setConfirmDeleteIdx] = useState<number | null>(null);

  const handleDeleteClick = (e: React.MouseEvent, idx: number) => {
    e.stopPropagation();
    setConfirmDeleteIdx(idx);
  };

  const confirmDelete = () => {
    if (confirmDeleteIdx !== null) {
      onDeleteSlide(confirmDeleteIdx);
      setConfirmDeleteIdx(null);
    }
  };

  return (
    <div className="w-[200px] border-r border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-900 flex flex-col h-full overflow-hidden select-none">
      <div className="p-4 border-b border-slate-100 dark:border-slate-800 font-hand text-xl font-bold text-slate-800 dark:text-slate-100 flex items-center justify-between">
        <div className="flex items-baseline gap-1">
          <span className="text-lg font-bold tracking-tight text-blue-600 dark:text-blue-400">OptiUX</span>
          <span className="text-xs font-light text-slate-400">Deck</span>
        </div>
        <span className="text-[10px] font-mono text-slate-400 font-normal">({slides.length})</span>
      </div>

      <div className="flex-grow overflow-y-auto p-2 flex flex-col gap-1.5 scrollbar-thin">
        {slides.map((s, idx) => {
          const isSelected = currentIndex === idx;
          const isSkipped = skippedIndices.includes(idx);
          const slideNum = idx + 1;

          return (
            <div
              key={s.id}
              onClick={() => onSelectSlide(idx)}
              className={`group flex items-start gap-2 p-2 rounded-lg border transition-all cursor-pointer ${
                isSelected
                  ? 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-50/60 dark:hover:bg-slate-800/30'
              } ${isSkipped ? 'opacity-40' : ''}`}
            >
              <div className={`font-mono text-[9px] font-medium mt-1 text-right w-5 ${isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'}`}>
                {slideNum.toString().padStart(2, '0')}
              </div>

              <div className="flex-grow min-w-0">
                <div className={`font-hand text-base font-bold truncate leading-tight ${isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-200'}`}>
                  {s.label}
                </div>
                <div className="font-hand2 text-[9px] text-slate-400 truncate leading-snug">
                  {s.kicker}
                </div>
              </div>

              {/* Action buttons on Hover */}
              <div className="opacity-0 group-hover:opacity-100 flex gap-1 self-center ml-1">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleSkipSlide(idx);
                  }}
                  title={isSkipped ? "Unskip Slide" : "Skip Slide"}
                  className="p-0.5 hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
                >
                  👁️
                </button>
                <button
                  disabled={slides.length <= 1}
                  onClick={(e) => handleDeleteClick(e, idx)}
                  title="Delete Slide"
                  className="p-0.5 hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-500 hover:text-red-600 disabled:opacity-30 cursor-pointer"
                >
                  🗑️
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Confirmation Modal */}
      {confirmDeleteIdx !== null && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 p-5 rounded-xl max-w-sm w-full font-hand2 shadow-lg animate-fade-in">
            <div className="font-hand text-xl font-bold text-red-600 mb-2">Delete Slide {confirmDeleteIdx + 1}?</div>
            <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">
              This slide will be temporarily removed from the deck list. You can reload the page to restore the full template structure.
            </p>
            <div className="flex justify-end gap-2 text-xs">
              <button
                onClick={() => setConfirmDeleteIdx(null)}
                className="px-4 py-2 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg cursor-pointer hover:bg-red-700 font-bold"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
