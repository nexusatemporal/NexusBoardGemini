
import React, { useState, useMemo } from 'react';
import { 
  Plus, Filter, Search, MoreVertical, Calendar, CheckSquare, 
  LayoutGrid, List, Columns, ArrowRight, MessageSquare, 
  Link as LinkIcon, Sparkles, Hash, ChevronDown, Clock,
  MoreHorizontal, PieChart, Layers, Users, Star
} from 'lucide-react';
import { TaskStatus, Task } from '../types';

interface AdvancedTask extends Task {
  emoji: string;
  projectRelation: string;
  points: number;
  lastComment?: string;
  coverGradient?: string;
}

const MOCK_ADVANCED_TASKS: AdvancedTask[] = [
  {
    id: '1',
    emoji: '🛠️',
    title: 'Migração VPS: Cluster Docker Swarm',
    description: 'Implementar o cluster Swarm e orquestrador Traefik para board.nexusatemporal.com.',
    status: TaskStatus.IN_PROGRESS,
    priority: 'high',
    assignees: ['1', '3'],
    tags: ['DevOps', 'Infra'],
    projectRelation: 'Nexus Ops Core',
    points: 8,
    progress: 65,
    dueDate: '2023-12-30',
    subtasks: [
      { id: 's1', title: 'Configurar Traefik', completed: true },
      { id: 's2', title: 'Deploy Portainer', completed: false }
    ],
    lastComment: 'Certificados SSL ativos.',
    coverGradient: 'linear-gradient(135deg, #FF9D00 0%, #D93D00 100%)'
  },
  {
    id: '2',
    emoji: '💎',
    title: 'Refatoração UI: Chat Atemporal',
    description: 'Criar nova interface de chat com bolhas dinâmicas e sistema de menções @equipe.',
    status: TaskStatus.REVIEW,
    priority: 'medium',
    assignees: ['2'],
    tags: ['Frontend', 'UI'],
    projectRelation: 'Experience Lab',
    points: 5,
    progress: 90,
    dueDate: '2023-12-15',
    subtasks: [
      { id: 's3', title: 'ChatBubble Component', completed: true }
    ],
    coverGradient: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)'
  },
  {
    id: '3',
    emoji: '🧠',
    title: 'AI Workflows: Document Analysis',
    description: 'Conectar o workspace ao Gemini 3 Pro para análise de documentos PDF técnicos.',
    status: TaskStatus.TODO,
    priority: 'high',
    assignees: ['1'],
    tags: ['AI', 'Python'],
    projectRelation: 'Nexus Intelligence',
    points: 13,
    progress: 10,
    dueDate: '2024-01-05',
    subtasks: [
      { id: 's5', title: 'API Integration', completed: false }
    ],
    coverGradient: 'linear-gradient(135deg, #7F00FF 0%, #E100FF 100%)'
  },
  {
    id: '4',
    emoji: '📈',
    title: 'Mkt: Campanha Launch 2.0',
    description: 'Finalizar criativos e estratégias de tráfego pago para o lançamento oficial.',
    status: TaskStatus.DONE,
    priority: 'low',
    assignees: ['2', '4'],
    tags: ['Marketing'],
    projectRelation: 'Growth 2024',
    points: 3,
    progress: 100,
    dueDate: '2023-12-10',
    subtasks: [
      { id: 's6', title: 'Aprovação Criativos', completed: true }
    ],
    coverGradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
  }
];

const TaskManager: React.FC = () => {
  const [view, setView] = useState<'kanban' | 'gallery' | 'grid'>('gallery');
  const [tasks] = useState<AdvancedTask[]>(MOCK_ADVANCED_TASKS);

  const stats = useMemo(() => ({
    total: tasks.length,
    points: tasks.reduce((acc, t) => acc + t.points, 0),
    progress: Math.round((tasks.reduce((acc, t) => acc + t.progress, 0) / (tasks.length * 100)) * 100),
    online: 12
  }), [tasks]);

  const renderTaskCard = (task: AdvancedTask, isGallery = false) => (
    <div key={task.id} className={`group bg-white dark:bg-nexus-darkCard rounded-4xl border border-gray-100 dark:border-nexus-darkBorder shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col ${isGallery ? 'h-full' : 'mb-5'}`}>
      {isGallery && (
        <div className="h-32 relative overflow-hidden" style={{ background: task.coverGradient || 'linear-gradient(135deg, #FF7300 0%, #D93D00 100%)' }}>
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
          <div className="absolute inset-0 flex items-center justify-center text-5xl transform group-hover:scale-125 transition-transform duration-500 select-none">
            {task.emoji}
          </div>
        </div>
      )}
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            {!isGallery && <span className="text-3xl transform group-hover:rotate-12 transition-transform select-none">{task.emoji}</span>}
            <div className="flex flex-col">
                <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded-md tracking-widest w-fit mb-1 ${
                task.priority === 'high' ? 'bg-red-50 text-red-600 border border-red-100 dark:bg-red-900/30 dark:text-red-400 dark:border-red-900/50' : 
                task.priority === 'medium' ? 'bg-orange-50 text-nexus-orange border border-orange-100 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-900/50' : 'bg-green-50 text-green-600 border border-green-100 dark:bg-green-900/30 dark:text-green-400 dark:border-green-900/50'
                }`}>
                {task.priority}
                </span>
            </div>
          </div>
          <button className="text-gray-300 dark:text-gray-600 hover:text-nexus-orange transition-colors">
            <Star size={18} />
          </button>
        </div>

        <h4 className="font-black text-nexus-grayDark dark:text-white text-base md:text-lg mb-2 leading-tight group-hover:text-nexus-orange transition-colors line-clamp-2">
          {task.title}
        </h4>
        
        <div className="flex items-center gap-2 mb-5 text-[10px] text-nexus-grayLight dark:text-gray-400 font-black uppercase tracking-widest">
           <Layers size={14} className="text-nexus-orange" />
           <span className="truncate max-w-[120px]">{task.projectRelation}</span>
           <span className="text-gray-300 dark:text-gray-700">•</span>
           <span className="text-nexus-orangeDark dark:text-nexus-orange font-black">#{task.points} pts</span>
        </div>

        {!isGallery && <p className="text-xs text-nexus-grayLight dark:text-gray-400 line-clamp-2 mb-6 leading-relaxed font-medium">{task.description}</p>}
        
        <div className="mt-auto space-y-4">
          <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
            <div className="flex items-center gap-1.5 text-nexus-grayLight dark:text-gray-500">
              <CheckSquare size={12} /> {task.subtasks.filter(s => s.completed).length}/{task.subtasks.length} Check
            </div>
            <span className="text-nexus-grayDark dark:text-white">{task.progress}%</span>
          </div>
          <div className="w-full h-2.5 bg-gray-100 dark:bg-nexus-darkBg rounded-full overflow-hidden shadow-inner border border-white/5">
            <div className="h-full nexus-gradient rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(255,115,0,0.4)]" style={{ width: `${task.progress}%` }}></div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6 pt-5 border-t border-gray-50 dark:border-nexus-darkBorder">
          <div className="flex -space-x-2.5">
            {task.assignees.map(uid => (
              <img key={uid} src={`https://picsum.photos/seed/${uid}/48/48`} className="w-8 h-8 md:w-9 md:h-9 rounded-xl border-2 border-white dark:border-nexus-darkCard shadow-lg hover:z-20 hover:-translate-y-1 transition-all cursor-pointer" alt="Dev" />
            ))}
            <button className="w-8 h-8 md:w-9 md:h-9 rounded-xl border-2 border-dashed border-gray-200 dark:border-nexus-darkBorder flex items-center justify-center text-gray-400 hover:border-nexus-orange hover:text-nexus-orange transition-all bg-white dark:bg-nexus-darkCard">
              <Plus size={14} />
            </button>
          </div>
          
          <div className="flex items-center gap-3">
            {task.lastComment && <MessageSquare size={14} className="text-nexus-orange animate-pulse" />}
            <div className="flex items-center gap-1.5 text-[10px] font-black bg-gray-50 dark:bg-nexus-darkBg px-3 py-2 rounded-xl text-nexus-grayLight dark:text-gray-400">
              <Clock size={12} />
              {new Date(task.dueDate).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const columns = [
    { id: TaskStatus.TODO, title: 'Inbox / Backlog', icon: '📥' },
    { id: TaskStatus.IN_PROGRESS, title: 'Ativo', icon: '⚡' },
    { id: TaskStatus.REVIEW, title: 'QA / Code', icon: '⚖️' },
    { id: TaskStatus.DONE, title: 'Finalizado', icon: '🏁' }
  ];

  return (
    <div className="h-full flex flex-col space-y-8 py-2 md:py-4">
      {/* Smart Sprint Header */}
      <div className="bg-white dark:bg-nexus-darkCard rounded-5xl border border-gray-100 dark:border-nexus-darkBorder p-6 md:p-10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden group transition-all">
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-orange-50 dark:bg-orange-950/20 rounded-full group-hover:scale-150 transition-transform duration-1000 opacity-60"></div>
        <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 relative z-10 text-center sm:text-left">
          <div className="w-20 h-20 nexus-gradient rounded-4xl flex items-center justify-center text-white shadow-2xl shadow-orange-300 dark:shadow-orange-900/50 rotate-3 group-hover:rotate-0 transition-all duration-500">
            <Sparkles size={40} />
          </div>
          <div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <h2 className="text-2xl md:text-3xl font-black text-nexus-grayDark dark:text-white tracking-tighter">Sprint Nexus v1.0</h2>
              <span className="px-4 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-black rounded-full uppercase tracking-[0.2em] shadow-sm animate-pulse">Ativa</span>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 md:gap-6 mt-4">
              <p className="text-xs text-nexus-grayLight dark:text-gray-400 font-black flex items-center gap-2 uppercase tracking-widest">
                <Calendar size={16} className="text-nexus-orange" /> 12 dias
              </p>
              <div className="hidden sm:block w-1.5 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
              <p className="text-xs text-nexus-grayLight dark:text-gray-400 font-black flex items-center gap-2 uppercase tracking-widest">
                <Users size={16} className="text-nexus-orange" /> {stats.online} Online
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-10 md:gap-16 relative z-10 w-full lg:w-auto">
          <div className="hidden xl:block text-right">
            <p className="text-[10px] font-black text-nexus-grayLight dark:text-gray-500 uppercase tracking-[0.3em] mb-1">Carga Ativa</p>
            <div className="flex items-center justify-end gap-2">
              <span className="text-4xl font-black text-nexus-grayDark dark:text-white tracking-tighter">{stats.points}</span>
              <span className="text-[10px] font-black text-nexus-grayLight dark:text-gray-500">PTS</span>
            </div>
          </div>
          <div className="flex-1 w-full lg:min-w-[240px]">
            <div className="flex justify-between items-center mb-3">
              <p className="text-[10px] font-black text-nexus-grayLight dark:text-gray-500 uppercase tracking-[0.3em]">Saúde da Sprint</p>
              <span className="text-sm font-black text-nexus-orange">{stats.progress}%</span>
            </div>
            <div className="w-full h-4 bg-gray-100 dark:bg-nexus-darkBg rounded-full overflow-hidden shadow-inner border border-white/5">
              <div className="h-full nexus-gradient rounded-full shadow-[0_0_15px_rgba(255,115,0,0.4)] transition-all duration-1000" style={{ width: `${stats.progress}%` }}></div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-4 bg-nexus-grayDark dark:bg-black text-white rounded-3xl shadow-2xl hover:bg-nexus-orange transition-all group/btn border border-white/5">
              <PieChart size={24} className="group-hover/btn:rotate-12 transition-transform" />
            </button>
            <button className="bg-nexus-orange text-white px-8 py-4 rounded-3xl text-[11px] font-black uppercase tracking-widest shadow-2xl shadow-orange-300 dark:shadow-orange-900/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
              Ações <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Control Bar */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6">
        <div className="flex items-center gap-2 bg-white dark:bg-nexus-darkCard p-2 rounded-3xl border border-gray-100 dark:border-nexus-darkBorder shadow-sm w-full xl:w-auto overflow-x-auto no-scrollbar">
          {[
            { id: 'kanban', icon: <Columns size={16} />, label: 'Board' },
            { id: 'gallery', icon: <LayoutGrid size={16} />, label: 'Galeria' },
            { id: 'grid', icon: <List size={16} />, label: 'Tabela' }
          ].map(opt => (
            <button 
              key={opt.id}
              onClick={() => setView(opt.id as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-[20px] text-[10px] font-black tracking-widest uppercase transition-all whitespace-nowrap ${view === opt.id ? 'bg-nexus-orange text-white shadow-xl' : 'text-nexus-grayLight dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-nexus-darkBg'}`}
            >
              {opt.icon} {opt.label}
            </button>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full xl:w-auto">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Filtro rápido..." 
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-nexus-darkCard border border-gray-100 dark:border-nexus-darkBorder rounded-3xl text-[11px] font-black tracking-widest focus:outline-none focus:ring-4 focus:ring-orange-100 dark:focus:ring-orange-900/20 focus:border-orange-300 transition-all shadow-sm dark:text-white"
            />
          </div>
          <button className="w-full sm:w-auto nexus-gradient text-white px-8 py-4 rounded-3xl text-[11px] font-black uppercase tracking-widest shadow-2xl shadow-orange-300 dark:shadow-orange-900/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3">
            <Plus size={22} /> Nova Tarefa
          </button>
        </div>
      </div>

      {/* Views Rendering */}
      <div className="flex-1 min-h-0">
        {view === 'kanban' && (
          <div className="h-full flex gap-8 overflow-x-auto pb-8 custom-scrollbar">
            {columns.map(col => (
              <div key={col.id} className="min-w-[340px] max-w-[340px] flex-1 flex flex-col bg-gray-50/40 dark:bg-nexus-darkCard/20 rounded-5xl p-6 border border-transparent hover:border-gray-100 dark:hover:border-nexus-darkBorder transition-all group/col">
                <div className="flex items-center justify-between mb-8 px-2">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl transform group-hover/col:scale-110 transition-transform select-none">{col.icon}</span>
                    <h3 className="font-black text-nexus-grayDark dark:text-white text-[11px] uppercase tracking-[0.3em]">{col.title}</h3>
                    <span className="bg-white dark:bg-nexus-darkCard border border-gray-200 dark:border-nexus-darkBorder text-nexus-grayLight dark:text-gray-400 text-[10px] font-black px-2.5 py-1 rounded-full shadow-sm">
                      {tasks.filter(t => t.status === col.id).length}
                    </span>
                  </div>
                  <button className="text-gray-300 dark:text-gray-600 hover:text-nexus-orange transition-opacity">
                    <MoreHorizontal size={20} />
                  </button>
                </div>
                <div className="flex-1 space-y-4 overflow-y-auto custom-scrollbar pr-1">
                  {tasks.filter(t => t.status === col.id).map(t => renderTaskCard(t))}
                  <button className="w-full py-6 border-2 border-dashed border-gray-200 dark:border-nexus-darkBorder rounded-4xl text-[10px] font-black tracking-[0.2em] text-gray-400 dark:text-gray-600 hover:border-nexus-orange hover:text-nexus-orange hover:bg-white dark:hover:bg-nexus-darkCard transition-all flex items-center justify-center gap-3 group/add uppercase">
                     <Plus size={18} className="group-hover/add:rotate-90 transition-transform" /> Adicionar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {view === 'gallery' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 overflow-y-auto custom-scrollbar pr-2 h-full">
            {tasks.map(t => renderTaskCard(t, true))}
            <button className="h-[340px] border-2 border-dashed border-gray-200 dark:border-nexus-darkBorder rounded-[48px] flex flex-col items-center justify-center gap-5 text-gray-300 dark:text-gray-700 hover:border-nexus-orange hover:text-nexus-orange hover:bg-orange-50/30 dark:hover:bg-nexus-darkBorder/30 transition-all group">
               <div className="w-20 h-20 bg-white dark:bg-nexus-darkCard rounded-4xl shadow-xl flex items-center justify-center border border-gray-100 dark:border-nexus-darkBorder group-hover:scale-110 transition-transform">
                 <Plus size={36} />
               </div>
               <span className="font-black text-[11px] uppercase tracking-[0.3em]">Nova Página</span>
            </button>
          </div>
        )}

        {view === 'grid' && (
          <div className="bg-white dark:bg-nexus-darkCard rounded-5xl border border-gray-100 dark:border-nexus-darkBorder shadow-2xl overflow-hidden flex flex-col h-full">
            <div className="overflow-auto custom-scrollbar h-full">
              <table className="w-full text-left text-xs border-collapse min-w-[1000px]">
                <thead className="bg-gray-50/80 dark:bg-black/40 sticky top-0 z-20 backdrop-blur-xl">
                  <tr>
                    <th className="px-10 py-6 font-black text-nexus-grayLight dark:text-gray-500 uppercase tracking-[0.2em] text-[10px] border-b border-gray-100 dark:border-nexus-darkBorder">Título</th>
                    <th className="px-10 py-6 font-black text-nexus-grayLight dark:text-gray-500 uppercase tracking-[0.2em] text-[10px] border-b border-gray-100 dark:border-nexus-darkBorder text-center">Status</th>
                    <th className="px-10 py-6 font-black text-nexus-grayLight dark:text-gray-500 uppercase tracking-[0.2em] text-[10px] border-b border-gray-100 dark:border-nexus-darkBorder">Relação</th>
                    <th className="px-10 py-6 font-black text-nexus-grayLight dark:text-gray-500 uppercase tracking-[0.2em] text-[10px] border-b border-gray-100 dark:border-nexus-darkBorder text-center">Pts</th>
                    <th className="px-10 py-6 font-black text-nexus-grayLight dark:text-gray-500 uppercase tracking-[0.2em] text-[10px] border-b border-gray-100 dark:border-nexus-darkBorder">Progresso</th>
                    <th className="px-10 py-6 font-black text-nexus-grayLight dark:text-gray-500 uppercase tracking-[0.2em] text-[10px] border-b border-gray-100 dark:border-nexus-darkBorder">Time</th>
                    <th className="w-12 border-b border-gray-100 dark:border-nexus-darkBorder"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 dark:divide-nexus-darkBorder">
                  {tasks.map(task => (
                    <tr key={task.id} className="hover:bg-orange-50/10 dark:hover:bg-white/5 transition-colors group cursor-pointer">
                      <td className="px-10 py-6">
                        <div className="flex items-center gap-5">
                          <span className="text-2xl transform group-hover:scale-125 transition-transform select-none">{task.emoji}</span>
                          <span className="font-black text-nexus-grayDark dark:text-white text-sm group-hover:text-nexus-orange transition-colors">{task.title}</span>
                        </div>
                      </td>
                      <td className="px-10 py-6 text-center">
                        <span className={`px-5 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest shadow-sm ${
                          task.status === TaskStatus.TODO ? 'bg-gray-100 text-gray-500 dark:bg-gray-800' :
                          task.status === TaskStatus.IN_PROGRESS ? 'bg-orange-100 text-nexus-orange dark:bg-orange-900/30 dark:text-orange-400' :
                          task.status === TaskStatus.REVIEW ? 'bg-blue-100 text-blue-500 dark:bg-blue-900/30' : 'bg-green-100 text-green-500 dark:bg-green-900/30'
                        }`}>
                          {task.status.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="px-10 py-6">
                         <div className="flex items-center gap-3 bg-gray-50 dark:bg-nexus-darkBg px-4 py-2 rounded-2xl w-fit border border-gray-100 dark:border-nexus-darkBorder group-hover:border-nexus-orange/30 transition-all shadow-inner">
                           <LinkIcon size={14} className="text-nexus-orange" />
                           <span className="font-black text-nexus-grayLight dark:text-gray-300 text-[11px]">{task.projectRelation}</span>
                         </div>
                      </td>
                      <td className="px-10 py-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                           <Hash size={14} className="text-gray-300 dark:text-gray-700" />
                           <span className="font-black text-nexus-grayDark dark:text-white text-base tracking-tighter">{task.points}</span>
                        </div>
                      </td>
                      <td className="px-10 py-6">
                        <div className="flex items-center gap-6 min-w-[160px]">
                          <div className="flex-1 bg-gray-100 dark:bg-nexus-darkBg h-2.5 rounded-full overflow-hidden shadow-inner border border-white/10">
                            <div className="h-full nexus-gradient" style={{ width: `${task.progress}%` }}></div>
                          </div>
                          <span className="font-black text-nexus-grayLight dark:text-gray-300 text-[11px]">{task.progress}%</span>
                        </div>
                      </td>
                      <td className="px-10 py-6">
                        <div className="flex -space-x-2">
                          {task.assignees.map(uid => (
                            <img key={uid} src={`https://picsum.photos/seed/${uid}/48/48`} className="w-10 h-10 rounded-2xl border-4 border-white dark:border-nexus-darkCard shadow-xl hover:-translate-y-1 transition-all" alt="User" />
                          ))}
                        </div>
                      </td>
                      <td className="px-10 py-6 text-right">
                        <button className="text-gray-300 dark:text-gray-700 hover:text-nexus-orange opacity-0 group-hover:opacity-100 transition-opacity">
                          <MoreHorizontal size={24} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="w-full p-8 text-left text-nexus-orange text-[11px] font-black uppercase tracking-[0.3em] hover:bg-gray-50 dark:hover:bg-white/5 transition-all flex items-center gap-4 border-t border-gray-100 dark:border-nexus-darkBorder">
                <Plus size={22} /> Novo Registro Relacional
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskManager;
