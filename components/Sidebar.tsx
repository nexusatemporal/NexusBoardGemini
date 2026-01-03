
import React from 'react';
import { NAV_ITEMS } from '../constants';
import { LogOut, ChevronRight } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, onLogout }) => {
  return (
    <div className="w-64 h-screen bg-white dark:bg-nexus-darkCard border-r border-gray-200 dark:border-nexus-darkBorder flex flex-col">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 nexus-gradient rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg transform rotate-3">
          N
        </div>
        <div className="flex flex-col">
          <span className="font-black text-gray-800 dark:text-white tracking-tight leading-none text-lg">NEXUS</span>
          <span className="text-[10px] text-nexus-grayLight dark:text-gray-400 uppercase tracking-widest font-black">Atemporal</span>
        </div>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1.5 overflow-y-auto custom-scrollbar">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 group ${
              activeTab === item.id 
                ? 'bg-nexus-orange text-white font-black shadow-xl shadow-orange-100 dark:shadow-orange-900/20' 
                : 'text-nexus-grayDark dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-nexus-darkBorder'
            }`}
          >
            <span className={activeTab === item.id ? 'text-white' : 'text-gray-400 dark:text-gray-600 group-hover:text-nexus-orange'}>
              {item.icon}
            </span>
            <span className="flex-1 text-left text-[13px] font-bold">{item.label}</span>
            {activeTab === item.id && <ChevronRight size={14} />}
          </button>
        ))}
      </nav>

      <div className="p-6 border-t border-gray-100 dark:border-nexus-darkBorder">
        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-sm font-black text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-2xl transition-all uppercase tracking-widest"
        >
          <LogOut size={18} />
          Sair
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
