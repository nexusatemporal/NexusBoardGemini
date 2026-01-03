
import React from 'react';
import { Table as TableIcon, Filter, SortAsc, Download, Plus, Search, MoreHorizontal, Hash, Type, Calendar as CalendarIcon, User as UserIcon } from 'lucide-react';

const DatabaseView: React.FC = () => {
  const rows = [
    { id: 1, name: 'Landing Page v2', status: 'Ativo', owner: 'Maria Souza', date: '2023-11-20', budget: 'R$ 5.000' },
    { id: 2, name: 'API Integration', status: 'Backlog', owner: 'João Silva', date: '2023-12-01', budget: 'R$ 12.000' },
    { id: 3, name: 'QA Report', status: 'Revisão', owner: 'Ana Costa', date: '2023-11-28', budget: 'R$ 2.500' },
    { id: 4, name: 'Social Media Campaign', status: 'Concluído', owner: 'Maria Souza', date: '2023-11-15', budget: 'R$ 8.000' },
  ];

  return (
    <div className="h-full flex flex-col page-transition space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-5">
          <div className="p-4 bg-nexus-orange/10 dark:bg-nexus-orange/20 rounded-3xl text-nexus-orange shadow-inner">
            <TableIcon size={32} />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-nexus-grayDark dark:text-white tracking-tighter uppercase">Nexus Data Lake</h1>
            <p className="text-nexus-grayLight dark:text-gray-400 text-sm font-bold uppercase tracking-widest mt-1">Sincronizado com NocoDB & Supabase</p>
          </div>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none bg-white dark:bg-nexus-darkCard border border-gray-100 dark:border-nexus-darkBorder px-6 py-4 rounded-3xl text-xs font-black text-nexus-grayDark dark:text-white hover:bg-gray-50 dark:hover:bg-nexus-darkBg flex items-center justify-center gap-2 uppercase tracking-widest transition-all">
             <Download size={18} /> Exportar
          </button>
          <button className="flex-1 md:flex-none nexus-gradient text-white px-8 py-4 rounded-3xl text-xs font-black shadow-2xl shadow-orange-300 dark:shadow-orange-900/30 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 uppercase tracking-widest transition-all">
            <Plus size={20} /> Novo Registro
          </button>
        </div>
      </div>

      <div className="flex-1 bg-white dark:bg-nexus-darkCard rounded-[40px] border border-gray-100 dark:border-nexus-darkBorder shadow-2xl overflow-hidden flex flex-col min-h-[400px]">
        {/* Grid Toolbar */}
        <div className="p-6 border-b border-gray-100 dark:border-nexus-darkBorder flex flex-col lg:flex-row items-center justify-between bg-gray-50/50 dark:bg-black/20 gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
             <div className="relative w-full sm:w-80">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
               <input type="text" placeholder="Filtrar dados relacionais..." className="w-full pl-11 pr-4 py-3 bg-white dark:bg-nexus-darkBg border border-gray-100 dark:border-nexus-darkBorder rounded-2xl text-[11px] font-black uppercase tracking-widest focus:ring-4 focus:ring-orange-100 dark:focus:ring-orange-900/10 outline-none transition-all dark:text-white" />
             </div>
             <div className="flex items-center gap-6">
               <button className="flex items-center gap-2 text-[10px] font-black text-nexus-grayLight dark:text-gray-400 hover:text-nexus-orange uppercase tracking-[0.2em] transition-colors"><Filter size={16} /> Filtro</button>
               <button className="flex items-center gap-2 text-[10px] font-black text-nexus-grayLight dark:text-gray-400 hover:text-nexus-orange uppercase tracking-[0.2em] transition-colors"><SortAsc size={16} /> Ordenar</button>
             </div>
          </div>
          <div className="text-[10px] text-nexus-grayLight dark:text-gray-500 font-black uppercase tracking-widest">Dataset: 1.250 registros</div>
        </div>

        {/* Table Area */}
        <div className="flex-1 overflow-auto custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead className="sticky top-0 bg-white/90 dark:bg-nexus-darkCard/90 backdrop-blur-xl z-10">
              <tr className="border-b border-gray-100 dark:border-nexus-darkBorder">
                <th className="w-16 px-6 py-5 bg-gray-50/50 dark:bg-black/20 border-r border-gray-100 dark:border-nexus-darkBorder"></th>
                <th className="px-8 py-5 border-r border-gray-100 dark:border-nexus-darkBorder text-[9px] font-black text-nexus-grayLight dark:text-gray-500 uppercase tracking-[0.2em]">
                   <div className="flex items-center gap-2"><Type size={14} className="text-nexus-orange" /> Título do Projeto</div>
                </th>
                <th className="px-8 py-5 border-r border-gray-100 dark:border-nexus-darkBorder text-[9px] font-black text-nexus-grayLight dark:text-gray-500 uppercase tracking-[0.2em] text-center">
                   <div className="flex items-center justify-center gap-2"><Hash size={14} className="text-nexus-orange" /> Status</div>
                </th>
                <th className="px-8 py-5 border-r border-gray-100 dark:border-nexus-darkBorder text-[9px] font-black text-nexus-grayLight dark:text-gray-500 uppercase tracking-[0.2em]">
                   <div className="flex items-center gap-2"><UserIcon size={14} className="text-nexus-orange" /> Responsável</div>
                </th>
                <th className="px-8 py-5 border-r border-gray-100 dark:border-nexus-darkBorder text-[9px] font-black text-nexus-grayLight dark:text-gray-500 uppercase tracking-[0.2em]">
                   <div className="flex items-center gap-2"><CalendarIcon size={14} className="text-nexus-orange" /> Data Limite</div>
                </th>
                <th className="px-8 py-5 border-r border-gray-100 dark:border-nexus-darkBorder text-[9px] font-black text-nexus-grayLight dark:text-gray-500 uppercase tracking-[0.2em] text-center">
                   <div className="flex items-center justify-center gap-2"><Hash size={14} className="text-nexus-orange" /> Budget</div>
                </th>
                <th className="w-14 px-6 py-5 bg-gray-50/50 dark:bg-black/20"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-nexus-darkBorder">
              {rows.map((row, i) => (
                <tr key={i} className="hover:bg-orange-50/10 dark:hover:bg-white/5 transition-colors group cursor-pointer">
                  <td className="px-6 py-5 border-r border-gray-100 dark:border-nexus-darkBorder text-center text-[10px] text-gray-400 dark:text-gray-600 font-black">{row.id}</td>
                  <td className="px-8 py-5 border-r border-gray-100 dark:border-nexus-darkBorder font-black text-nexus-grayDark dark:text-white text-sm group-hover:text-nexus-orange transition-colors">{row.name}</td>
                  <td className="px-8 py-5 border-r border-gray-100 dark:border-nexus-darkBorder text-center">
                    <span className={`px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest shadow-sm ${
                      row.status === 'Ativo' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 
                      row.status === 'Backlog' ? 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400' : 'bg-orange-100 text-nexus-orange dark:bg-orange-900/30'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 border-r border-gray-100 dark:border-nexus-darkBorder">
                    <div className="flex items-center gap-3">
                      <img src={`https://picsum.photos/seed/${row.owner}/32/32`} className="w-8 h-8 rounded-xl border-2 border-white dark:border-nexus-darkBorder shadow-md" alt="" />
                      <span className="text-xs font-bold text-nexus-grayDark dark:text-gray-200">{row.owner}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 border-r border-gray-100 dark:border-nexus-darkBorder text-xs font-bold text-nexus-grayLight dark:text-gray-400">{row.date}</td>
                  <td className="px-8 py-5 border-r border-gray-100 dark:border-nexus-darkBorder text-sm font-black text-nexus-orangeDark dark:text-nexus-orange text-center">{row.budget}</td>
                  <td className="px-8 py-5 text-center">
                    <button className="p-2.5 hover:bg-gray-50 dark:hover:bg-nexus-darkBg rounded-xl text-gray-300 dark:text-gray-600 hover:text-nexus-orange opacity-0 group-hover:opacity-100 transition-all"><MoreHorizontal size={20} /></button>
                  </td>
                </tr>
              ))}
              {[...Array(6)].map((_, i) => (
                <tr key={`empty-${i}`} className="opacity-10 pointer-events-none">
                  <td className="px-6 py-6 border-r border-gray-100 dark:border-nexus-darkBorder"></td>
                  <td className="px-8 py-6 border-r border-gray-100 dark:border-nexus-darkBorder"></td>
                  <td className="px-8 py-6 border-r border-gray-100 dark:border-nexus-darkBorder"></td>
                  <td className="px-8 py-6 border-r border-gray-100 dark:border-nexus-darkBorder"></td>
                  <td className="px-8 py-6 border-r border-gray-100 dark:border-nexus-darkBorder"></td>
                  <td className="px-8 py-6 border-r border-gray-100 dark:border-nexus-darkBorder"></td>
                  <td className="px-8 py-6"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="w-full p-8 text-left text-nexus-orange text-[11px] font-black uppercase tracking-[0.3em] hover:bg-gray-50 dark:hover:bg-white/5 transition-all flex items-center gap-4 border-t border-gray-100 dark:border-nexus-darkBorder">
          <Plus size={22} /> Adicionar Nova Célula de Dados Relacionais
        </button>
      </div>
    </div>
  );
};

export default DatabaseView;
