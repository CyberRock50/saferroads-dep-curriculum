import { CheckCircle2, FileText } from 'lucide-react';
import { DrivingModule } from '../types';

export default function Overview({ activeModule }: { activeModule: DrivingModule }) {
  return (
    <>
      <section className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
         <h3 className="text-blue-900 font-semibold mb-2">Module Objective</h3>
         <p className="text-blue-800 leading-relaxed">
           {activeModule.objective}
         </p>
      </section>

      {/* Activities Timeline */}
      <section>
        <h3 className="text-xl font-bold text-slate-900 mb-1 flex items-center gap-2">
          Instructional Block (160 mins)
        </h3>
        <p className="text-slate-500 text-sm mb-6">
          Includes 145 minutes of instructional time and a 15-minute break.
        </p>
        <div className="space-y-6">
          {activeModule.activities.map((activity) => (
            <div key={activity.id} className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-[8.5rem] top-8 bottom-[-24px] w-0.5 bg-slate-200 last:hidden"></div>
              <div className="md:hidden absolute left-[11px] top-6 bottom-[-24px] w-0.5 bg-slate-200 last:hidden"></div>
              
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 group">
                <div className="hidden md:flex flex-col items-end pt-1 w-28 shrink-0">
                   <span className="text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full whitespace-nowrap group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                     {activity.timeAllocation}
                   </span>
                </div>

                <div className="hidden md:flex relative pt-2 z-0 items-start justify-center w-6 shrink-0">
                   <div className="w-3 h-3 rounded-full bg-slate-300 ring-4 ring-white group-hover:bg-blue-500 transition-colors" />
                </div>

                <div className="md:hidden absolute left-0 top-1.5 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center ring-4 ring-white z-0">
                  <div className="w-2 h-2 rounded-full bg-slate-400 group-hover:bg-blue-500 transition-colors" />
                </div>

                <div className="flex-1 bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                     <h4 className="text-lg font-bold text-slate-900">
                       {activity.title}
                     </h4>
                     <span className="md:hidden inline-block text-xs font-bold text-slate-600 bg-slate-100 mt-2 px-2 py-0.5 rounded-full">
                       {activity.timeAllocation}
                     </span>
                  </div>
                  <p className="text-slate-600 mb-4 leading-relaxed text-sm md:text-base">
                    {activity.description}
                  </p>
                  <div className="bg-amber-50 rounded-lg p-3 md:p-4 text-sm border border-amber-100">
                    <span className="font-semibold text-amber-800 block mb-1">VILT Engagement Strategy:</span>
                    <span className="text-amber-900 leading-relaxed">{activity.viltStrategy}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-emerald-100 p-2 rounded-lg">
            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-emerald-900">Graded Quiz Overview</h3>
            <p className="text-emerald-700 text-sm font-medium">Last {activeModule.quiz.durationMinutes} Minutes</p>
          </div>
        </div>
        <p className="text-emerald-800 mb-4">{activeModule.quiz.description}</p>
        <p className="text-sm font-semibold text-emerald-900">
          Navigate to the "Quiz" tab above to take the full module evaluation.
        </p>
      </section>

      <section className="border-t border-slate-200 pt-8 pb-12">
        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-slate-400" />
          Required Resources
        </h3>
        <div className="flex flex-wrap gap-3">
          {activeModule.resources.map((res, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 text-sm font-medium">
              {res}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
