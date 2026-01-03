
import React from 'react';
import { Users, Mail, MoreHorizontal, UserPlus, Shield, MessageSquare, Zap } from 'lucide-react';
import { MOCK_USERS } from '../constants';

const TeamManagement: React.FC = () => {
  return (
    <div className="h-full flex flex-col space-y-10 page-transition">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-5">
          <div className="p-4 bg-nexus-orange rounded-3xl text-white shadow-2xl rotate-3">
            <Users size={32} />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-nexus-grayDark dark:text-white tracking-tighter uppercase">Equipe Atemporal</h1>
            <p className="text-nexus-grayLight dark:text-gray-400 text-sm font-bold uppercase tracking-widest mt-1">Governança e Permissões de Cluster</p>
          </div>
        </div>
        <button className="w-full md:w-auto nexus-gradient text-white px-10 py-4 rounded-3xl text-xs font-black shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3 uppercase tracking-widest">
          <UserPlus size={20} /> Convidar Membro
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {MOCK_USERS.map(user => (
          <div key={user.id} className="bg-white dark:bg-nexus-darkCard rounded-[48px] border border-gray-100 dark:border-nexus-darkBorder p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 dark:bg-orange-900/10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-1000"></div>
            
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="relative mb-6">
                <img src={user.avatar} className="w-28 h-28 rounded-[40px] object-cover shadow-2xl border-4 border-white dark:border-nexus-darkBorder transform group-hover:rotate-6 transition-transform" alt={user.name} />
                <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-2xl border-4 border-white dark:border-nexus-darkCard shadow-lg flex items-center justify-center ${
                  user.status === 'online' ? 'bg-green-500' : 'bg-orange-500'
                }`}>
                   <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <h3 className="font-black text-nexus-grayDark dark:text-white text-lg tracking-tight mb-2">{user.name}</h3>
              <p className="text-nexus-orange font-black text-[9px] uppercase tracking-[0.3em] bg-orange-50 dark:bg-orange-900/30 px-4 py-1.5 rounded-full mb-6 shadow-inner">
                {user.role}
              </p>
              
              <div className="flex flex-col gap-4 w-full pt-6 border-t border-gray-50 dark:border-nexus-darkBorder">
                <div className="flex items-center justify-center gap-3 text-[10px] text-nexus-grayLight dark:text-gray-400 font-black uppercase tracking-widest">
                   <Mail size={14} className="text-nexus-orange" /> {user.email}
                </div>
                <div className="grid grid-cols-2 gap-3">
                   <button className="flex items-center justify-center gap-2 py-4 bg-nexus-grayDark dark:bg-black text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-nexus-orange transition-all shadow-xl">
                      <MessageSquare size={14} /> Chat
                   </button>
                   <button className="flex items-center justify-center gap-2 py-4 border border-gray-100 dark:border-nexus-darkBorder rounded-2xl text-[10px] font-black uppercase tracking-widest text-nexus-grayDark dark:text-white hover:bg-gray-50 dark:hover:bg-nexus-darkBg transition-all">
                      Perfil
                   </button>
                </div>
              </div>
            </div>

            <button className="absolute top-8 left-8 text-gray-300 dark:text-gray-700 hover:text-nexus-orange opacity-0 group-hover:opacity-100 transition-all"><Zap size={20} /></button>
          </div>
        ))}

        <button className="bg-gray-50/50 dark:bg-black/10 rounded-[48px] border-4 border-dashed border-gray-200 dark:border-nexus-darkBorder flex flex-col items-center justify-center p-12 hover:border-nexus-orange transition-all group gap-5 min-h-[400px]">
           <div className="w-20 h-20 bg-white dark:bg-nexus-darkCard rounded-4xl flex items-center justify-center text-gray-300 dark:text-gray-700 group-hover:text-nexus-orange shadow-2xl transition-all">
              <UserPlus size={40} />
           </div>
           <div className="text-center">
             <p className="font-black text-nexus-grayDark dark:text-white text-sm uppercase tracking-widest">Adicionar Especialista</p>
             <p className="text-[10px] text-nexus-grayLight dark:text-gray-500 mt-2 font-bold uppercase tracking-widest">Capacidade Atual: 12/200</p>
           </div>
        </button>
      </div>
    </div>
  );
};

export default TeamManagement;
