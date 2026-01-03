
import React, { useState } from 'react';
import { Send, Smile, Paperclip, MoreVertical, Search, Phone, Video, ChevronLeft } from 'lucide-react';
import { MOCK_USERS } from '../constants';

const ChatSystem: React.FC = () => {
  const [activeChat, setActiveChat] = useState(MOCK_USERS[0]);
  const [message, setMessage] = useState('');
  const [showContactList, setShowContactList] = useState(true);

  return (
    <div className="h-full flex flex-col md:flex-row bg-white dark:bg-nexus-darkCard rounded-4xl border border-gray-100 dark:border-nexus-darkBorder overflow-hidden shadow-2xl transition-all">
      {/* Sidebar - Contacts */}
      <div className={`${showContactList ? 'flex' : 'hidden'} md:flex w-full md:w-80 border-r border-gray-100 dark:border-nexus-darkBorder flex-col h-full bg-gray-50/30 dark:bg-nexus-darkCard/50`}>
        <div className="p-6 border-b border-gray-100 dark:border-nexus-darkBorder bg-white dark:bg-nexus-darkCard">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-nexus-orange transition-colors" size={16} />
            <input 
              type="text" 
              placeholder="Buscar conversas..." 
              className="w-full pl-11 pr-4 py-3 bg-gray-100 dark:bg-nexus-darkBg border-none rounded-2xl text-xs focus:ring-2 focus:ring-orange-100 dark:focus:ring-orange-900/20 dark:text-white transition-all outline-none"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-1">
          {MOCK_USERS.map(user => (
            <button
              key={user.id}
              onClick={() => { setActiveChat(user); setShowContactList(false); }}
              className={`w-full flex items-center gap-4 p-4 rounded-3xl transition-all ${activeChat.id === user.id ? 'bg-white dark:bg-nexus-darkBg shadow-xl ring-1 ring-black/5 dark:ring-white/5' : 'hover:bg-gray-100 dark:hover:bg-white/5'}`}
            >
              <div className="relative flex-shrink-0">
                <img src={user.avatar} className="w-12 h-12 rounded-2xl object-cover shadow-md" alt={user.name} />
                <span className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-4 border-white dark:border-nexus-darkCard ${
                  user.status === 'online' ? 'bg-green-500' : user.status === 'busy' ? 'bg-red-500' : 'bg-gray-400'
                }`}></span>
              </div>
              <div className="flex-1 text-left min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-black text-nexus-grayDark dark:text-white text-xs truncate tracking-tight">{user.name}</h4>
                  <span className="text-[9px] text-nexus-grayLight dark:text-gray-500 font-bold uppercase">14:20</span>
                </div>
                <p className="text-[11px] text-nexus-grayLight dark:text-gray-400 line-clamp-1 truncate font-medium">Temos que revisar os logs do cluster...</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className={`${!showContactList ? 'flex' : 'hidden'} md:flex flex-1 flex-col h-full bg-white dark:bg-nexus-darkCard`}>
        {/* Chat Header */}
        <div className="px-6 py-5 border-b border-gray-100 dark:border-nexus-darkBorder flex items-center justify-between bg-white dark:bg-nexus-darkCard sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button onClick={() => setShowContactList(true)} className="md:hidden p-2 text-nexus-grayLight hover:text-nexus-orange transition-colors">
              <ChevronLeft size={24} />
            </button>
            <img src={activeChat.avatar} className="w-10 h-10 rounded-2xl object-cover shadow-lg" alt={activeChat.name} />
            <div>
              <h3 className="font-black text-nexus-grayDark dark:text-white text-sm tracking-tight">{activeChat.name}</h3>
              <p className="text-[10px] text-green-500 font-black uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                {activeChat.status === 'online' ? 'Ativo agora' : 'Offline'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-nexus-grayLight dark:text-gray-400">
            <button className="p-2.5 hover:bg-gray-50 dark:hover:bg-nexus-darkBg rounded-xl hover:text-nexus-orange transition-all"><Phone size={20} /></button>
            <button className="p-2.5 hover:bg-gray-50 dark:hover:bg-nexus-darkBg rounded-xl hover:text-nexus-orange transition-all"><Video size={20} /></button>
            <button className="p-2.5 hover:bg-gray-50 dark:hover:bg-nexus-darkBg rounded-xl hover:text-nexus-orange transition-all"><MoreVertical size={20} /></button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-gray-50/20 dark:bg-nexus-darkBg/20">
          <div className="flex justify-center">
            <span className="text-[9px] bg-white dark:bg-nexus-darkCard text-gray-400 dark:text-gray-500 px-4 py-1.5 rounded-full uppercase tracking-[0.2em] font-black border border-gray-100 dark:border-nexus-darkBorder shadow-sm">Hoje</span>
          </div>
          
          <div className="flex items-start gap-4">
            <img src={activeChat.avatar} className="w-9 h-9 rounded-2xl shadow-sm" alt="" />
            <div className="max-w-[85%] md:max-w-[70%]">
              <div className="bg-white dark:bg-nexus-darkCard p-4 rounded-3xl rounded-tl-none border border-gray-100 dark:border-nexus-darkBorder shadow-sm">
                <p className="text-sm text-nexus-grayDark dark:text-gray-200 leading-relaxed font-medium">Oi equipe, já conseguiram subir o Langflow na VPS nova? O Docker Swarm está saudável?</p>
              </div>
              <span className="text-[9px] text-nexus-grayLight dark:text-gray-500 mt-2 ml-1 font-black uppercase">10:45</span>
            </div>
          </div>

          <div className="flex items-start gap-4 flex-row-reverse">
            <div className="w-9 h-9 rounded-2xl nexus-gradient flex items-center justify-center text-[10px] font-black text-white shadow-lg">EU</div>
            <div className="max-w-[85%] md:max-w-[70%] flex flex-col items-end">
              <div className="nexus-gradient p-4 rounded-3xl rounded-tr-none text-white shadow-xl shadow-orange-900/10">
                <p className="text-sm font-medium leading-relaxed">Sim, o cluster Swarm está operando em 100%. Configurei o Traefik e o domínio já está respondendo no Nexus Board.</p>
              </div>
              <span className="text-[9px] text-nexus-grayLight dark:text-gray-500 mt-2 mr-1 font-black uppercase">10:47</span>
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="p-6 border-t border-gray-100 dark:border-nexus-darkBorder bg-white dark:bg-nexus-darkCard">
          <div className="flex items-center gap-3 bg-gray-50 dark:bg-nexus-darkBg rounded-3xl px-5 py-3 border border-gray-100 dark:border-nexus-darkBorder focus-within:ring-4 focus-within:ring-orange-100 dark:focus-within:ring-orange-900/10 focus-within:bg-white dark:focus-within:bg-nexus-darkBg transition-all group">
            <button className="text-nexus-grayLight dark:text-gray-500 hover:text-nexus-orange transition-colors"><Smile size={22} /></button>
            <button className="text-nexus-grayLight dark:text-gray-500 hover:text-nexus-orange transition-colors"><Paperclip size={22} /></button>
            <input 
              type="text" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Digite sua mensagem para a equipe..." 
              className="flex-1 bg-transparent border-none py-2 text-sm focus:outline-none dark:text-white font-medium"
            />
            <button className="nexus-gradient p-3 rounded-2xl text-white shadow-xl hover:scale-105 transition-all active:scale-95 group-hover:rotate-6">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSystem;
