import React from 'react';
import { Clock, Sun, Moon, Calendar, AlertCircle } from 'lucide-react';
import { OPERATING_SCHEDULE, getLiveStatus } from '../data/gymData';

export const ScheduleSection: React.FC = () => {
  const status = getLiveStatus();
  
  // Current day in IST
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istDate = new Date(utc + (3600000 * 5.5));
  const currentDayName = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ][istDate.getDay()];

  return (
    <section id="schedule" className="py-24 bg-neutral-950 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-widest mb-3">
            <span>Split Shift Facility</span>
            <span aria-hidden="true">·</span>
            <span>Early Mornings & Late Evenings</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-white mb-6">
            Gym Timings & Schedule
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Designed for working professionals, students, and dedicated athletes. We operate
            two high-energy shifts Monday through Saturday so you never miss your workout.
          </p>
        </div>

        {/* Real-time Status Card */}
        <div className="max-w-3xl mx-auto mb-12 p-6 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${
              status.isOpen ? 'bg-emerald-950/60 border-emerald-700/80 text-emerald-400' : 'bg-neutral-800 border-neutral-700 text-neutral-400'
            }`}>
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs uppercase font-bold text-neutral-400 tracking-wider">
                Current Studio Status (IST)
              </div>
              <div className="text-xl sm:text-2xl font-display font-bold text-white uppercase tracking-wide">
                {status.statusText}
              </div>
              <div className="text-xs text-neutral-400 mt-0.5">
                {status.nextSlot}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <div className="text-[11px] uppercase tracking-wider text-neutral-500">Today is</div>
              <div className="text-sm font-bold text-red-500">{currentDayName}</div>
            </div>
            <div className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider border ${
              status.isOpen
                ? 'bg-emerald-900/40 border-emerald-700 text-emerald-300'
                : 'bg-neutral-800 border-neutral-700 text-neutral-400'
            }`}>
              {status.isOpen ? 'Doors Open' : 'Doors Closed'}
            </div>
          </div>
        </div>

        {/* Schedule Grid Table */}
        <div className="max-w-4xl mx-auto bg-neutral-900/60 rounded-2xl border border-neutral-800 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-12 bg-neutral-900 px-6 py-4 border-b border-neutral-800 text-xs font-bold uppercase tracking-wider text-neutral-400">
            <div className="col-span-4 sm:col-span-3 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-neutral-500" />
              <span>Day</span>
            </div>
            <div className="col-span-4 sm:col-span-4 flex items-center gap-1.5">
              <Sun className="w-4 h-4 text-amber-500" />
              <span>Morning Shift</span>
            </div>
            <div className="col-span-4 sm:col-span-5 flex items-center gap-1.5">
              <Moon className="w-4 h-4 text-indigo-400" />
              <span>Evening Shift</span>
            </div>
          </div>

          <div className="divide-y divide-neutral-800/60">
            {OPERATING_SCHEDULE.map((item) => {
              const isToday = item.day === currentDayName;
              return (
                <div
                  key={item.day}
                  className={`grid grid-cols-12 px-6 py-4.5 text-xs sm:text-sm items-center transition-colors ${
                    isToday ? 'bg-red-950/20 text-white font-medium' : 'text-neutral-300 hover:bg-neutral-800/40'
                  }`}
                >
                  {/* Day column */}
                  <div className="col-span-4 sm:col-span-3 flex items-center gap-2">
                    <span className={`font-semibold ${isToday ? 'text-red-400' : 'text-white'}`}>
                      {item.day}
                    </span>
                    {isToday && (
                      <span className="text-[10px] bg-red-600 text-white font-bold px-1.5 py-0.5 rounded uppercase tracking-wider hidden sm:inline">
                        Today
                      </span>
                    )}
                  </div>

                  {/* Morning shift */}
                  <div className="col-span-4 sm:col-span-4 font-mono text-xs sm:text-sm tabular-nums">
                    {item.isOpen ? (
                      <span className="text-neutral-200">{item.morning}</span>
                    ) : (
                      <span className="text-neutral-500 italic">Closed</span>
                    )}
                  </div>

                  {/* Evening shift */}
                  <div className="col-span-4 sm:col-span-5 font-mono text-xs sm:text-sm tabular-nums">
                    {item.isOpen ? (
                      <span className="text-neutral-200">{item.evening}</span>
                    ) : (
                      <span className="text-red-400/90 font-semibold uppercase tracking-wider text-xs">
                        Closed (Recovery Day)
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Schedule Insights */}
        <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-neutral-400">
          <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
            <div className="font-semibold text-white mb-1">Morning Peak: 6:00 AM – 8:30 AM</div>
            <p>Best for early risers who want high energy before work or classes.</p>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
            <div className="font-semibold text-white mb-1">Evening Peak: 6:00 PM – 9:00 PM</div>
            <p>Prime bodybuilding and heavy compound lifting hours with full trainer staffing.</p>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
            <div className="font-semibold text-white mb-1">Sunday Muscle Recovery</div>
            <p>Dedicated rest day to maintain CNS recovery and equipment maintenance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
