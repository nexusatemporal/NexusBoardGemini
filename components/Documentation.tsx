
import React, { useState } from 'react';
import { FileText, ChevronRight, Hash, Image as ImageIcon, Code, Plus, MoreVertical, Star, Search, Menu } from 'lucide-react';

const Documentation: React.FC = () => {
  const [activePage, setActivePage] = useState('Welcome');
  const [showExplorer, setShowExplorer] = useState(true);

  const pages = [
    { title: 'Nexus Handbook', icon: <FileText size={16} />, sub: ['Cultura', 'Processos'] },
    { title: 'Projeto Alpha', icon: <Code size={16} />, sub: ['Stack Técnica', 'Roadmap'] },
    { title: 'Marketing 2024', icon: <ImageIcon size={16} />, sub: ['Branding', 'Campanhas'] },
  ];

  return (
    <div className="h-full flex flex-col md:flex-row gap-8 page-transition">
      {/* Doc Explorer - Responsive Toggle */}
      <div className={`${showExplorer ? 'flex' : 'hidden md:flex'} w-full md:w-80 bg-white dark:bg-nexus-darkCard rounded-[40px] border border-gray-100 dark:border-nexus-darkBorder shadow-2xl flex-col overflow-hidden transition-all duration-300`}>
        <div className="p-6 border-b border-gray-50 dark:border-nexus-darkBorder bg-gray-50/30 dark:bg-black/20">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-nexus-orange" size={16} />
            <input type="text" placeholder="Buscar no Nexus Docs..." className="w-full pl-11 pr-4 py-3 bg-white dark:bg-nexus-darkBg border border-gray-100 dark:border-nexus-darkBorder rounded-2xl text-[10px] font-black uppercase tracking-widest outline-none transition-all dark:text-white" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
          {pages.map((page, i) => (
            <div key={i} className="space-y-1">
              <button className="w-full flex items-center gap-3 p-4 rounded-3xl hover:bg-orange-50 dark:hover:bg-white/5 text-nexus-grayDark dark:text-white text-[11px] font-black uppercase tracking-widest transition-all group">
                <ChevronRight size={16} className="text-gray-300 dark:text-gray-600 group-hover:text-nexus-orange transition-transform" />
                <span className="text-nexus-orange">{page.icon}</span>
                <span className="flex-1 text-left">{page.title}</span>
              </button>
              <div className="ml-8 space-y-1 border-l-2 border-gray-100 dark:border-nexus-darkBorder">
                {page.sub.map(s => (
                  <button key={s} onClick={() => { setActivePage(s); if(window.innerWidth < 768) setShowExplorer(false); }} className="w-full text-left p-3 pl-6 rounded-2xl hover:bg-gray-50 dark:hover:bg-nexus-darkBg text-[10px] text-nexus-grayLight dark:text-gray-400 font-black uppercase tracking-widest transition-all">
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button className="w-full flex items-center gap-3 p-5 rounded-3xl bg-gray-50 dark:bg-nexus-darkBg text-nexus-orange text-[10px] font-black uppercase tracking-widest mt-6 hover:shadow-lg transition-all border border-transparent hover:border-orange-100 dark:hover:border-orange-900/30">
            <Plus size={18} /> Criar Novo Bloco
          </button>
        </div>
      </div>

      {/* Doc Editor */}
      <div className={`${!showExplorer ? 'flex' : 'hidden md:flex'} flex-1 bg-white dark:bg-nexus-darkCard rounded-[48px] border border-gray-100 dark:border-nexus-darkBorder shadow-2xl overflow-hidden flex-col transition-all duration-500`}>
        <div className="px-8 py-6 border-b border-gray-50 dark:border-nexus-darkBorder flex justify-between items-center bg-white/90 dark:bg-nexus-darkCard/90 backdrop-blur-xl sticky top-0 z-20">
           <div className="flex items-center gap-4">
             <button onClick={() => setShowExplorer(true)} className="md:hidden p-2 text-nexus-grayLight dark:text-gray-400 hover:text-nexus-orange">
               <Menu size={20} />
             </button>
             <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-nexus-grayLight dark:text-gray-500">
               <span>Knowledge</span> <ChevronRight size={14} /> <span className="text-nexus-orange">{activePage}</span>
             </div>
           </div>
           <div className="flex items-center gap-4 text-nexus-grayLight dark:text-gray-500">
             <button className="p-2.5 hover:bg-gray-50 dark:hover:bg-nexus-darkBg rounded-xl hover:text-nexus-orange transition-all"><Star size={20} /></button>
             <button className="p-2.5 hover:bg-gray-50 dark:hover:bg-nexus-darkBg rounded-xl hover:text-nexus-orange transition-all"><MoreVertical size={20} /></button>
             <button className="nexus-gradient text-white px-8 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl">Publicar</button>
           </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="p-8 md:p-20 max-w-5xl mx-auto w-full">
            <div className="mb-16 group">
               <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900/20 rounded-[32px] flex items-center justify-center text-nexus-orange mb-8 text-4xl shadow-inner border border-orange-200 dark:border-orange-900/40 transform group-hover:rotate-6 transition-transform">🚀</div>
               <h1 className="text-4xl md:text-6xl font-black text-nexus-grayDark dark:text-white mb-6 outline-none border-b-4 border-transparent focus:border-orange-200 dark:focus:border-orange-900/50 pb-4 transition-all tracking-tighter">Manual de Operações Nexus</h1>
               <div className="flex flex-wrap items-center gap-6 text-[10px] font-black uppercase tracking-widest text-nexus-grayLight dark:text-gray-500">
                 <div className="flex items-center gap-3">
                   <img src="https://picsum.photos/seed/carlos/32/32" className="w-8 h-8 rounded-xl border-2 border-white dark:border-nexus-darkBorder shadow-md" alt="" />
                   <span>Lead: Carlos S.</span>
                 </div>
                 <div className="w-1.5 h-1.5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                 <span>Sync: 2h atrás</span>
                 <div className="w-1.5 h-1.5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                 <span className="flex items-center gap-2"><ImageIcon size={14} className="text-nexus-orange" /> 12 Assets</span>
               </div>
            </div>

            <div className="prose prose-sm md:prose-base max-w-none dark:prose-invert space-y-10">
              <p className="text-xl md:text-2xl leading-relaxed text-nexus-grayLight dark:text-gray-400 italic font-medium tracking-tight border-l-8 border-nexus-orange pl-8 py-2">
                "Nossa missão é orquestrar a complexidade tecnológica em uma interface atemporal e eficiente para mentes de alto desempenho."
              </p>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-nexus-grayDark dark:text-white tracking-tighter flex items-center gap-4">
                  <span className="text-nexus-orange">01.</span> Arquitetura Core da Stack
                </h3>
                <p className="leading-relaxed text-nexus-grayDark dark:text-gray-300 font-medium">
                  Toda a nossa infraestrutura é descentralizada e orquestrada via <span className="font-black text-nexus-orange">Docker Swarm</span>. Utilizamos <span className="font-black text-nexus-orange">Traefik</span> como edge router para garantir SSL automático e roteamento dinâmico entre os containers de IA e Banco de Dados.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-black/20 p-8 md:p-12 rounded-[40px] border border-gray-100 dark:border-nexus-darkBorder space-y-8 shadow-inner">
                 <h4 className="text-xs font-black uppercase tracking-[0.3em] text-nexus-grayLight dark:text-gray-500 flex items-center gap-4">
                   <Code size={20} className="text-nexus-orange" /> Repositórios de Alto Impacto
                 </h4>
                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {['Nexus Webapp Core', 'AI Orchestrator API', 'Data Engine (Supabase)', 'Redis High-Speed Cache'].map(item => (
                     <li key={item} className="flex items-center gap-4 bg-white dark:bg-nexus-darkBg p-5 rounded-3xl border border-gray-100 dark:border-nexus-darkBorder text-xs font-black uppercase tracking-widest hover:shadow-2xl hover:scale-[1.02] hover:text-nexus-orange transition-all cursor-pointer group">
                        <ChevronRight size={14} className="text-nexus-orange group-hover:rotate-90 transition-transform" /> {item}
                     </li>
                   ))}
                 </ul>
              </div>

              <div className="h-48 border-4 border-dashed border-gray-100 dark:border-nexus-darkBorder rounded-[40px] flex flex-col items-center justify-center text-gray-300 dark:text-gray-700 text-xs font-black uppercase tracking-[0.3em] cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-all group gap-4">
                <div className="w-14 h-14 bg-white dark:bg-nexus-darkCard rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Plus size={24} className="text-nexus-orange" />
                </div>
                Pressione '/' para Comandos IA ou Blocos Visuais
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
