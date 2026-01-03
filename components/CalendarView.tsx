
import React from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus, Users as UsersIcon } from 'lucide-react';

const CalendarView: React.FC = () => {
  const days = Array.from({ length: 35 }, (_, i) => i - 4); // Fake days starting from previous month

  return (
    <div className="h-full flex flex-col animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-nexus-grayDark">Agenda Nexus</h1>
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl p-1 shadow-sm">
            <button className="p-1.5 hover:bg-gray-50 rounded-lg text-nexus-grayLight"><ChevronLeft size={18} /></button>
            <span className="text-sm font-bold px-4 text-nexus-grayDark">Dezembro 2023</span>
            <button className="p-1.5 hover:bg-gray-50 rounded-lg text-nexus-grayLight"><ChevronRight size={18} /></button>
          </div>
        </div>
        <button className="nexus-gradient text-white px-4 py-2 rounded-xl text-sm font-bold shadow-md hover:opacity-90 flex items-center gap-2">
          <Plus size={16} /> Agendar Evento
        </button>
      </div>

      <div className="flex-1 bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
        <div className="grid grid-cols-7 border-b border-gray-100 bg-gray-50/50">
          {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
            <div key={day} className="py-3 text-center text-[10px] font-bold text-nexus-grayLight uppercase tracking-widest">{day}</div>
          ))}
        </div>
        <div className="flex-1 grid grid-cols-7 grid-rows-5 overflow-hidden">
          {days.map((day, i) => {
            const isToday = day === 24;
            const isNotMonth = day < 1 || day > 31;
            return (
              <div key={i} className={`border-r border-b border-gray-50 p-3 min-h-[120px] hover:bg-gray-50/50 transition-colors relative group ${isNotMonth ? 'bg-gray-50/30' : ''}`}>
                <div className={`text-xs font-bold mb-2 ${isToday ? 'w-6 h-6 bg-nexus-orange text-white rounded-full flex items-center justify-center' : isNotMonth ? 'text-gray-300' : 'text-nexus-grayDark'}`}>
                  {day < 1 ? 30 + day : day > 31 ? day - 31 : day}
                </div>
                
                {day === 15 && (
                  <div className="bg-orange-100 border-l-4 border-nexus-orange p-1.5 rounded-r text-[10px] text-nexus-orangeDark font-bold mb-1 shadow-sm">
                    Campanha Natal
                  </div>
                )}
                {day === 24 && (
                  <div className="bg-green-100 border-l-4 border-green-500 p-1.5 rounded-r text-[10px] text-green-700 font-bold mb-1 shadow-sm">
                    Nexus Eve Party 🥂
                  </div>
                )}
                {day === 30 && (
                   <div className="bg-blue-100 border-l-4 border-blue-500 p-1.5 rounded-r text-[10px] text-blue-700 font-bold shadow-sm">
                    Migração VPS
                  </div>
                )}

                <button className="absolute bottom-2 right-2 p-1.5 bg-white border border-gray-100 rounded-lg shadow-sm text-nexus-orange opacity-0 group-hover:opacity-100 transition-opacity">
                  <Plus size={14} />
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
