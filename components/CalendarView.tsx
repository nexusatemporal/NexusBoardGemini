
import React from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus, Users as UsersIcon, Clock } from 'lucide-react';

const CalendarView: React.FC = () => {
  const days = Array.from({ length: 35 }, (_, i) => i - 4);

  return (
    <div className="h-full flex flex-col space-y-8 page-transition">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-5">
          <div className="p-4 bg-nexus-orange/10 dark:bg-nexus-orange/20 rounded-3xl text-nexus-orange shadow-inner">
            <CalendarIcon size={32} />
          </div>
          <div className="flex items-center gap-4">
            <h1 className="text-2xl md:text-3xl font-black text-nexus-grayDark dark:text-white tracking-tighter uppercase">Nexus Agenda</h1>
            <div className="hidden sm:flex items-center gap-3 bg-white dark:bg-nexus-darkCard border border-gray-100 dark:border-nexus-darkBorder rounded-2xl p-1 shadow-sm">
              <button className="p-2 hover:bg-gray-50 dark:hover:bg-nexus-darkBg rounded-xl text-nexus-grayLight dark:text-gray-400 transition-colors"><ChevronLeft size={20} /></button>
              <span className="text-[11px] font-black px-6 text-nexus-grayDark dark:text-white uppercase tracking-widest">Dezembro 2023</span>
              <button className="p-2 hover:bg-gray-50 dark:hover:bg-nexus-darkBg rounded-xl text-nexus-grayLight dark:text-gray-400 transition-colors"><ChevronRight size={20} /></button>
            </div>
          </div>
        </div>
        <button className="w-full md:w-auto nexus-gradient text-white px-10 py-4 rounded-3xl text-xs font-black shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 uppercase tracking-widest">
          <Plus size={20} /> Agendar Evento
        </button>
      </div>

      <div className="flex-1 bg-white dark:bg-nexus-darkCard rounded-[48px] border border-gray-100 dark:border-nexus-darkBorder shadow-2xl overflow-hidden flex flex-col min-h-[500px]">
        <div className="grid grid-cols-7 bg-gray-50 dark:bg-black/20 border-b border-gray-100 dark:border-nexus-darkBorder">
          {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
            <div key={day} className="py-5 text-center text-[10px] font-black text-nexus-grayLight dark:text-gray-500 uppercase tracking-[0.3em]">{day}</div>
          ))}
        </div>
        <div className="flex-1 grid grid-cols-7 grid-rows-5 overflow-auto custom-scrollbar">
          {days.map((day, i) => {
            const isToday = day === 24;
            const isNotMonth = day < 1 || day > 31;
            const num = day < 1 ? 30 + day : day > 31 ? day - 31 : day;
            
            return (
              <div key={i} className={`border-r border-b border-gray-50 dark:border-nexus-darkBorder p-4 min-h-[140px] hover:bg-orange-50/10 dark:hover:bg-white/5 transition-colors relative group ${isNotMonth ? 'bg-gray-50/30 dark:bg-black/10' : ''}`}>
                <div className={`text-sm font-black mb-4 ${isToday ? 'w-8 h-8 nexus-gradient text-white rounded-xl flex items-center justify-center shadow-lg' : isNotMonth ? 'text-gray-300 dark:text-gray-700' : 'text-nexus-grayDark dark:text-white'}`}>
                  {num}
                </div>
                
                {day === 15 && (
                  <div className="bg-orange-100 dark:bg-orange-900/40 border-l-4 border-nexus-orange p-3 rounded-2xl rounded-tl-none text-[9px] text-nexus-orangeDark dark:text-orange-400 font-black uppercase tracking-widest shadow-sm mb-2">
                    Campanha Nexus v2.0
                  </div>
                )}
                {day === 24 && (
                  <div className="bg-green-100 dark:bg-green-900/40 border-l-4 border-green-500 p-3 rounded-2xl rounded-tl-none text-[9px] text-green-700 dark:text-green-400 font-black uppercase tracking-widest shadow-sm">
                    Nexus Party 🥂
                  </div>
                )}

                <button className="absolute bottom-4 right-4 p-2 bg-white dark:bg-nexus-darkBg border border-gray-100 dark:border-nexus-darkBorder rounded-xl shadow-lg text-nexus-orange opacity-0 group-hover:opacity-100 transition-all hover:scale-110 active:scale-90">
                  <Plus size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
