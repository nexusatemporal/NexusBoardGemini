
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import TaskManager from './components/TaskManager';
import ChatSystem from './components/ChatSystem';
import AIWorkspace from './components/AIWorkspace';
import Whiteboard from './components/Whiteboard';
import DatabaseView from './components/DatabaseView';
import Documentation from './components/Documentation';
import CalendarView from './components/CalendarView';
import TeamManagement from './components/TeamManagement';
import Settings from './components/Settings';
import Login from './components/Login';
import { MOCK_USERS } from './constants';
import { Bell, Search, Moon, Sun, Zap, Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(true); // Iniciando em dark mode como padrão moderno
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userProfile] = useState(MOCK_USERS[2]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const renderContent = () => {
    const views: Record<string, React.ReactNode> = {
      dashboard: <Dashboard />,
      tasks: <TaskManager />,
      chat: <ChatSystem />,
      ai: <AIWorkspace />,
      whiteboard: <Whiteboard />,
      database: <DatabaseView />,
      docs: <Documentation />,
      calendar: <CalendarView />,
      users: <TeamManagement />,
      settings: <Settings />,
    };

    return views[activeTab] || (
      <div className="flex flex-col items-center justify-center h-full text-center p-12">
        <div className="w-20 h-20 bg-gray-100 dark:bg-nexus-darkCard rounded-full flex items-center justify-center mb-4 text-gray-400">
          <Search size={32} />
        </div>
        <h2 className="text-xl font-bold dark:text-white">Módulo em Construção</h2>
        <p className="text-nexus-grayLight dark:text-gray-400">Integrando com NocoDB e Supabase...</p>
      </div>
    );
  };

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className={`flex min-h-screen bg-nexus-bg dark:bg-nexus-darkBg transition-colors duration-300`}>
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Responsive */}
      <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:block z-50 transition-transform duration-300 ease-in-out`}>
        <Sidebar activeTab={activeTab} setActiveTab={(tab) => { setActiveTab(tab); setIsSidebarOpen(false); }} onLogout={() => setIsLoggedIn(false)} />
      </div>
      
      <main className="flex-1 flex flex-col h-screen overflow-hidden w-full relative">
        {/* Top Header */}
        <header className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6 flex-shrink-0 bg-nexus-bg/80 dark:bg-nexus-darkBg/80 backdrop-blur-md sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 md:hidden bg-white dark:bg-nexus-darkCard rounded-xl border border-gray-100 dark:border-nexus-darkBorder text-nexus-grayDark dark:text-white"
            >
              <Menu size={20} />
            </button>
            <div className="hidden lg:flex items-center gap-4 bg-white dark:bg-nexus-darkCard px-4 py-2 rounded-2xl shadow-sm border border-gray-100 dark:border-nexus-darkBorder transition-all">
               <span className="text-xs font-bold text-green-500 flex items-center gap-1.5 whitespace-nowrap">
                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Sistema VPS: Online
               </span>
               <div className="h-4 w-px bg-gray-200 dark:bg-gray-700"></div>
               <span className="text-[10px] text-nexus-grayLight dark:text-gray-400 font-black uppercase tracking-widest truncate max-w-[150px]">board.nexusatemporal.com</span>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 bg-white dark:bg-nexus-darkCard border border-gray-200 dark:border-nexus-darkBorder rounded-2xl text-nexus-grayLight dark:text-gray-400 hover:text-nexus-orange transition-all shadow-sm"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <div className="hidden sm:flex relative items-center gap-2 bg-white dark:bg-nexus-darkCard px-4 py-2 rounded-2xl border border-gray-100 dark:border-nexus-darkBorder shadow-sm focus-within:ring-2 focus-within:ring-orange-100 transition-all">
              <Search size={16} className="text-gray-400" />
              <input type="text" placeholder="Busca global..." className="bg-transparent border-none text-xs focus:outline-none w-24 md:w-40 dark:text-white" />
            </div>

            <button className="p-2.5 bg-white dark:bg-nexus-darkCard border border-gray-200 dark:border-nexus-darkBorder rounded-2xl text-nexus-grayLight dark:text-gray-400 hover:text-nexus-orange transition-all shadow-sm relative">
              <Bell size={20} />
              <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-nexus-orange border-2 border-white dark:border-nexus-darkCard rounded-full"></span>
            </button>

            <div 
              onClick={() => setActiveTab('settings')}
              className="flex items-center gap-3 bg-white dark:bg-nexus-darkCard p-1 pr-3 md:pr-4 rounded-2xl shadow-sm border border-gray-100 dark:border-nexus-darkBorder cursor-pointer hover:bg-gray-50 dark:hover:bg-nexus-darkBorder transition-colors"
            >
              <img src={userProfile.avatar} className="w-8 h-8 md:w-9 md:h-9 rounded-xl object-cover" alt="Profile" />
              <div className="hidden lg:block text-left">
                <p className="text-xs font-black text-nexus-grayDark dark:text-white leading-tight">{userProfile.name}</p>
                <p className="text-[10px] text-nexus-grayLight dark:text-gray-400 font-bold uppercase tracking-widest">{userProfile.role}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar px-4 md:px-8 pb-10 page-transition">
          {renderContent()}
        </div>
        
        {/* Bottom Floating Stats - Responsive Hidden on small */}
        <div className="hidden md:flex fixed bottom-6 right-6 items-center gap-2 bg-nexus-grayDark/90 dark:bg-black/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl z-40 border border-white/10 transition-all">
           <Zap className="text-nexus-orange" size={14} /> Nexus Cluster: 100% Healthy
        </div>
      </main>
    </div>
  );
};

export default App;
