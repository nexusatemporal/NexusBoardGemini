
import React from 'react';
import { Users, Mail, Phone, MoreHorizontal, UserPlus, Shield, MessageSquare } from 'lucide-react';
import { MOCK_USERS } from '../constants';

const TeamManagement: React.FC = () => {
  return (
    <div className="h-full flex flex-col animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-nexus-grayDark text-center lg:text-left">Equipe Atemporal</h1>
          <p className="text-nexus-grayLight text-sm">Gerencie {MOCK_USERS.length} membros da equipe e suas permissões.</p>
        </div>
        <button className="nexus-gradient text-white px-4 py-2 rounded-xl text-sm font-bold shadow-md hover:opacity-90 flex items-center gap-2">
          <UserPlus size={18} /> Convidar Membro
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_USERS.map(user => (
          <div key={user.id} className="bg-white rounded-[32px] border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group relative">
            <div className={`absolute top-6 right-6 w-3 h-3 rounded-full border-2 border-white shadow-sm ${
              user.status === 'online' ? 'bg-green-500' : user.status === 'busy' ? 'bg-red-500' : 'bg-gray-400'
            }`}></div>
            
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <img src={user.avatar} className="w-24 h-24 rounded-3xl object-cover shadow-lg border-2 border-orange-50" alt={user.name} />
                <div className="absolute -bottom-2 -right-2 bg-nexus-grayDark text-white p-2 rounded-xl border-2 border-white shadow-md">
                   <Shield size={14} />
                </div>
              </div>
              
              <h3 className="font-bold text-nexus-grayDark text-lg">{user.name}</h3>
              <p className="text-nexus-orange font-bold text-[10px] uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full mb-4">
                {user.role}
              </p>
              
              <div className="flex gap-2 mb-6">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-xl text-nexus-grayLight text-xs hover:bg-gray-100 cursor-pointer">
                  <Mail size={14} /> {user.email}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 w-full">
                <button className="flex items-center justify-center gap-2 py-2.5 bg-nexus-grayDark text-white rounded-2xl text-xs font-bold hover:bg-black transition-all">
                  <MessageSquare size={14} /> Chat
                </button>
                <button className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-2xl text-xs font-bold text-nexus-grayDark hover:bg-gray-50 transition-all">
                  Perfil
                </button>
              </div>
            </div>

            <button className="absolute bottom-6 right-6 p-2 text-gray-300 hover:text-nexus-grayDark opacity-0 group-hover:opacity-100 transition-opacity">
              <MoreHorizontal size={20} />
            </button>
          </div>
        ))}

        {/* Placeholder for new member */}
        <div className="bg-gray-50/50 rounded-[32px] border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-8 cursor-pointer hover:border-nexus-orange transition-all group">
           <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-gray-300 group-hover:text-nexus-orange shadow-sm transition-all mb-4">
              <UserPlus size={32} />
           </div>
           <p className="text-sm font-bold text-gray-400 group-hover:text-nexus-orangeDark transition-all">Novo Membro</p>
           <p className="text-[10px] text-gray-300 mt-1">Capacidade: 200 Usuários</p>
        </div>
      </div>
    </div>
  );
};

export default TeamManagement;
