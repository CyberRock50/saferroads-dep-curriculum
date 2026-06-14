import { useState } from 'react';
import { mvaCurriculum } from './data/curriculum';
import { DrivingModule } from './types';
import { 
  BookOpen, 
  CalendarDays, 
  Clock, 
  Video, 
  CheckCircle2, 
  FileText,
  ChevronRight,
  Menu,
  X,
  LayoutTemplate,
  MonitorPlay,
  ListTodo,
  ArrowLeft
} from 'lucide-react';
import Overview from './components/Overview';
import Slideshow from './components/Slideshow';
import QuizView from './components/QuizView';

const MAIN_SITE_URL = 'https://saferroadsacademy.netlify.app';

export default function App() {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'slides' | 'quiz'>('overview');

  const activeModule: DrivingModule = mvaCurriculum.find(m => m.day === activeDay) || mvaCurriculum[0];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row text-slate-900 font-sans">
      {/* Safer Roads Branding Bar - spans full width, navy/gold */}
      {/* Currently a no-op (href="#") until MAIN_SITE_URL is set above */}
      <a
        href={MAIN_SITE_URL || '#'}
        onClick={(e) => { if (!MAIN_SITE_URL) e.preventDefault(); }}
        target={MAIN_SITE_URL ? '_blank' : undefined}
        rel={MAIN_SITE_URL ? 'noopener noreferrer' : undefined}
        title={MAIN_SITE_URL ? undefined : 'Safer Roads Driving School site coming soon'}
        className={`fixed top-0 left-0 right-0 z-30 flex items-center justify-center gap-2
                   bg-[#0B1F3A] text-[#F5BE3A] text-xs md:text-sm font-semibold
                   py-1.5 transition-colors
                   border-b border-[#C9920A]/40
                   ${MAIN_SITE_URL ? 'hover:bg-[#0B1F3A]/90 cursor-pointer' : 'cursor-default opacity-80'}`}
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Back to Safer Roads Driving School
      </a>

      {/* Top spacer to offset the fixed branding bar */}
      <div className="w-full md:hidden h-8" />

      {/* Mobile Header */}
      <div className="md:hidden bg-blue-900 text-white p-4 flex justify-between items-center z-20">
        <div className="flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-yellow-400" />
          <span className="font-semibold text-lg">MVA VILT Curriculum</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <div className={`
        fixed inset-y-0 left-0 w-72 bg-blue-900 text-slate-300 transform transition-transform duration-300 ease-in-out z-10
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:flex-shrink-0 flex flex-col pt-16 md:pt-8 shadow-xl
      `}>
        <div className="hidden md:flex p-6 border-b border-blue-800 items-center justify-center gap-3">
          <div className="bg-yellow-400 text-blue-900 p-2 rounded-lg">
             <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-white font-bold text-lg leading-tight">Maryland MVA</h1>
            <p className="text-xs text-blue-200 uppercase tracking-wider font-semibold">Driver Ed</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          <div className="px-3 mb-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
            10-Day Program Modules
          </div>
          {mvaCurriculum.map((module) => (
            <button
              key={module.day}
              onClick={() => {
                setActiveDay(module.day);
                setIsMobileMenuOpen(false);
                setActiveTab('overview');
              }}
              className={`w-full flex items-start text-left px-3 py-3 rounded-xl transition-all duration-200 group
                ${activeDay === module.day 
                  ? 'bg-blue-800 text-white shadow-sm ring-1 ring-blue-700' 
                  : 'hover:bg-blue-800/50 hover:text-white'
                }
              `}
            >
              <div className={`
                flex items-center justify-center min-w-[28px] h-7 rounded-md mr-3 text-sm font-bold mt-0.5 transition-colors
                ${activeDay === module.day ? 'bg-yellow-400 text-blue-900' : 'bg-blue-800 text-blue-300 group-hover:bg-blue-700/50'}
              `}>
                {module.day}
              </div>
              <div className="flex-1">
                <span className="block text-sm font-medium leading-snug line-clamp-2">
                  {module.title}
                </span>
              </div>
              {activeDay === module.day && (
                <ChevronRight className="w-4 h-4 ml-2 mt-1.5 opacity-70" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto flex flex-col bg-white md:pt-8">
        {/* Module Header */}
        <header className="bg-white border-b border-slate-200 p-6 md:p-10 pb-0 sticky top-0 z-0">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-blue-600 mb-3 text-sm font-semibold tracking-wide uppercase">
              <CalendarDays className="w-4 h-4" />
              <span>Day {activeModule.day} of 10</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              {activeModule.title}
            </h2>
            <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-600 mb-6">
              <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-md">
                <Clock className="w-4 h-4 text-slate-400" />
                3 Hours Total
              </div>
              <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-md">
                <Video className="w-4 h-4 text-slate-400" />
                VILT Ready (Zoom/Teams)
              </div>
            </div>

            {/* Tabs Navigation */}
            <div className="flex space-x-6 border-b border-slate-200 mt-2">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`py-3 px-1 border-b-2 transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-wider
                  ${activeTab === 'overview' ? 'border-blue-600 text-blue-700' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
              >
                <LayoutTemplate className="w-4 h-4" />
                Overview
              </button>
              <button 
                onClick={() => setActiveTab('slides')}
                className={`py-3 px-1 border-b-2 transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-wider
                  ${activeTab === 'slides' ? 'border-blue-600 text-blue-700' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
              >
                <MonitorPlay className="w-4 h-4" />
                Presentation
              </button>
              <button 
                onClick={() => setActiveTab('quiz')}
                className={`py-3 px-1 border-b-2 transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-wider
                  ${activeTab === 'quiz' ? 'border-blue-600 text-blue-700' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
              >
                <ListTodo className="w-4 h-4" />
                Module Quiz
              </button>
            </div>
          </div>
        </header>

        {/* Module Content */}
        <div className="flex-1 p-6 md:p-10 max-w-4xl w-full mx-auto space-y-10">
          {activeTab === 'overview' && <Overview activeModule={activeModule} />}
          {activeTab === 'slides' && <Slideshow slides={activeModule.slides} />}
          {activeTab === 'quiz' && <QuizView quiz={activeModule.quiz} />}
        </div>
      </div>
    </div>
  );
}
