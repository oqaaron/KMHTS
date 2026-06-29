import React, { useState, useEffect } from 'react';
import { Slide } from './types';
import { DeckRail } from './components/DeckRail';
import { DeckControls } from './components/DeckControls';

// Import slide files
import { CoverSlide, SystemMapSlide, ApplySlide, LoginSlide } from './components/slides/IntroSlides';
import { DashboardDesktopSlide, DashboardMobileSlide, CoursesSlide, TimetableSlide } from './components/slides/DashboardSlides';
import { AssignmentsSlide, ResultsSlide, FeesSlide } from './components/slides/AcademicSlides';
import { ClinicalLabSlide, ProfileSlide, LibrarySlide } from './components/slides/SupportSlides';
import { AnnouncementsSlide, AdminDashboardSlide, TutorAttendanceSlide } from './components/slides/AdminSlides';

const initialSlides: Slide[] = [
  { id: '1', number: '01', label: 'Cover Slide', kicker: 'low-fi wireframes · v1 · june 2026' },
  { id: '2', number: '02', label: 'System Map', kicker: 'Public site → Auth → 7 role-based apps' },
  { id: '3', number: '03', label: 'Apply / Admission', kicker: 'Multi-step form on marketing site' },
  { id: '4', number: '04', label: 'Login Router', kicker: 'Sign-in credential role-routing door' },
  { id: '5', number: '05', label: 'Student Dashboard', kicker: 'Desktop home, clock, prayers, KPIs' },
  { id: '6', number: '06', label: 'Student Mobile', kicker: 'Home, schedule, fees sessional views' },
  { id: '7', number: '07', label: 'My Courses', kicker: 'Course progress catalogues, category filters' },
  { id: '8', number: '08', label: 'Weekly Timetable', kicker: 'Calendar grids with integrated prayer pauses' },
  { id: '9', number: '09', label: 'Assignments Inbox', kicker: 'Homework checklists & draft scripts uploader' },
  { id: '10', number: '10', label: 'Results & Transcript', kicker: 'GPA standards sessional record lists' },
  { id: '11', number: '11', label: 'Fees Ledger & MoMo', kicker: 'Statements balances & secure MoMo pay' },
  { id: '12', number: '12', label: 'Clinical & Lab Log', kicker: 'Nursing ward shifts & Lab spec logs' },
  { id: '13', number: '13', label: 'Profile folders', kicker: 'Central certified credentials archives' },
  { id: '14', number: '14', label: 'Library Catalogue', kicker: 'Book queues, sessional WHO docs indexes' },
  { id: '15', number: '15', label: 'Announcements Board', kicker: 'Pinned notices feeds & SMS broadcasts' },
  { id: '16', number: '16', label: 'Admin Workspace', kicker: 'Enrolment bar trends sessional boards' },
  { id: '17', number: '17', label: 'Tutor Register', kicker: 'Marking attendance registers checklists' }
];

export default function App() {
  const [slides, setSlides] = useState<Slide[]>(initialSlides);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [skippedIndices, setSkippedIndices] = useState<number[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  // Keyboard navigation setup
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore key events if user is currently typing in an input
      const activeEl = document.activeElement;
      if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.tagName === 'SELECT')) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        navigateNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        navigatePrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToIndex(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToIndex(slides.length - 1);
      } else if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        goToIndex(0);
      } else if (/^[1-9]$/.test(e.key)) {
        // Digits 1-9 to jump directly
        const idx = parseInt(e.key, 10) - 1;
        if (idx < slides.length) {
          e.preventDefault();
          goToIndex(idx);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, slides, skippedIndices]);

  const goToIndex = (idx: number) => {
    if (idx >= 0 && idx < slides.length) {
      setCurrentIndex(idx);
    }
  };

  const navigateNext = () => {
    let nextIdx = currentIndex + 1;
    while (nextIdx < slides.length && skippedIndices.includes(nextIdx)) {
      nextIdx++;
    }
    if (nextIdx < slides.length) {
      setCurrentIndex(nextIdx);
    }
  };

  const navigatePrev = () => {
    let prevIdx = currentIndex - 1;
    while (prevIdx >= 0 && skippedIndices.includes(prevIdx)) {
      prevIdx--;
    }
    if (prevIdx >= 0) {
      setCurrentIndex(prevIdx);
    }
  };

  const handleToggleSkip = (idx: number) => {
    if (skippedIndices.includes(idx)) {
      setSkippedIndices(skippedIndices.filter(i => i !== idx));
    } else {
      setSkippedIndices([...skippedIndices, idx]);
    }
  };

  const handleDeleteSlide = (idx: number) => {
    if (slides.length <= 1) return;
    const isDeletingCurrent = currentIndex === idx;

    const newSlides = slides.filter((_, i) => i !== idx);
    setSlides(newSlides);

    // Adjust current index
    if (isDeletingCurrent) {
      setCurrentIndex(Math.max(0, idx - 1));
    } else if (currentIndex > idx) {
      setCurrentIndex(currentIndex - 1);
    }

    // Adjust skipped indices
    const updatedSkipped = skippedIndices
      .filter(i => i !== idx)
      .map(i => (i > idx ? i - 1 : i));
    setSkippedIndices(updatedSkipped);
  };

  const handleReset = () => {
    setSlides(initialSlides);
    setCurrentIndex(0);
    setSkippedIndices([]);
  };

  // Role router: logging in automatically moves the deck to the context-slide
  const handleRoleLogin = (role: string) => {
    if (role === 'student') {
      setCurrentIndex(4); // slide 5: Student Desktop
    } else if (role === 'tutor') {
      setCurrentIndex(16); // slide 17: Tutor Register Checklist
    } else {
      setCurrentIndex(15); // slide 16: Admin dashboard Overview
    }
  };

  const renderSlideContent = () => {
    const currentSlide = slides[currentIndex];
    if (!currentSlide) return <div className="text-center p-8 font-hand text-xl">Loading presentation slides...</div>;

    // Map slides.id back to their respective slide types
    // Slides might have shifted indices after deletion, we map using unique IDs
    const slideId = currentSlide.id;

    switch (slideId) {
      case '1': return <CoverSlide />;
      case '2': return <SystemMapSlide />;
      case '3': return <ApplySlide />;
      case '4': return <LoginSlide onLogin={handleRoleLogin} />;
      case '5': return <DashboardDesktopSlide onNavigateToSlide={(idx) => setCurrentIndex(idx)} />;
      case '6': return <DashboardMobileSlide onNavigateToSlide={(idx) => setCurrentIndex(idx)} />;
      case '7': return <CoursesSlide />;
      case '8': return <TimetableSlide />;
      case '9': return <AssignmentsSlide />;
      case '10': return <ResultsSlide />;
      case '11': return <FeesSlide />;
      case '12': return <ClinicalLabSlide />;
      case '13': return <ProfileSlide />;
      case '14': return <LibrarySlide />;
      case '15': return <AnnouncementsSlide />;
      case '16': return <AdminDashboardSlide />;
      case '17': return <TutorAttendanceSlide />;
      default: return <div className="text-center p-8 font-hand text-xl">Slide was deleted. Click "Reset Deck" below to restore presentation structure.</div>;
    }
  };

  return (
    <div className={`h-screen w-screen flex flex-col overflow-hidden font-sans select-none ${darkMode ? 'dark' : ''}`}>
      <div className="flex-grow flex overflow-hidden">
        {/* Left Hand Thumbnail Index Column */}
        <DeckRail
          slides={slides}
          currentIndex={currentIndex}
          skippedIndices={skippedIndices}
          onSelectSlide={(idx) => setCurrentIndex(idx)}
          onToggleSkipSlide={handleToggleSkip}
          onDeleteSlide={handleDeleteSlide}
        />

        {/* Presentation Slide Canvas Area */}
        <div className="flex-grow bg-slate-50 dark:bg-slate-950 p-6 flex items-center justify-center relative overflow-hidden">
          <div className="w-full max-w-[1280px] aspect-[16/9] border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 shadow-xl relative overflow-hidden flex flex-col">
            <div className="absolute top-3.5 left-5 flex gap-1.5 z-20">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-800" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-800" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-800" />
            </div>

            <div className="flex-grow relative overflow-hidden">
              {renderSlideContent()}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav Controller bar */}
      <DeckControls
        currentIndex={currentIndex}
        totalSlides={slides.length}
        darkMode={darkMode}
        onPrev={navigatePrev}
        onNext={navigateNext}
        onReset={handleReset}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />
    </div>
  );
}
