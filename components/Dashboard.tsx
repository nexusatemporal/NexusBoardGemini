
import React, { useMemo } from 'react';
import { 
  Users, Clock, CheckCircle, Rocket, 
  BarChart3, MoreHorizontal, ChevronRight, Zap, 
  ChevronDown, FileText
} from 'lucide-react';
import { MOCK_USERS } from '../constants';

interface DashboardProps {
  tasks: any[];
}

const Dashboard: React.FC<DashboardProps> = ({ tasks }) => {
  // Pega as 4 tarefas mais recentes baseadas no ID (simulando ordem cronológica)
  const recentTasks = useMemo(() => {
    return [...tasks].reverse().slice(0, 4);
  }, [tasks]);

  const stats = useMemo(() => ({
    total: tasks.length,
    done: tasks.filter(t => t.status === 'done').length,
    inProgress: tasks.filter(t => t.status === 'in_progress').length,
    sprints: 3
  }), [tasks]);

  return (
    <div className="space-y-6 md:space-y-10 py-4 md:py-6">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-nexus-grayDark dark:text-white flex items-center gap-3 tracking-tighter">
            Bom dia, John! <span className="animate-bounce">👋</span>
          </h1>
          <p className="text-nexus-grayLight dark:text-gray-400 mt-1 text-sm md:text-base font-medium">Segue um resumo do que está acontecendo no Nexus hoje.</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none px-6 py-3 bg-white dark:bg-nexus-darkCard border border-gray-200 dark:border-nexus-darkBorder rounded-2xl text-xs font-black text-nexus-grayDark dark:text-white hover:bg-gray-50 dark:hover:bg-nexus-darkBorder shadow-sm transition-all flex items-center justify-center gap-2 uppercase tracking-widest">
            <FileText size={18} /> Relatórios
          </button>
          <button className="flex-1 md:flex-none px-6 py-3 bg-nexus-orange text-white rounded-2xl text-xs font-black shadow-xl shadow-orange-200 dark:shadow-orange-900/20 hover:scale-105 transition-all flex items-center justify-center gap-2 uppercase tracking-widest">
            Sprint
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {[
          { label: 'Tarefas totais', value: stats.total.toString(), detail: `${stats.done} concluídas`, icon: <CheckCircle className="text-green-500" />, bg: 'bg-green-50/50 dark:bg-green-900/10' },
          { label: 'Sprints Atuais', value: stats.sprints.toString(), detail: "Sprint 'Nexus Alpha' v1.2", icon: <Rocket className="text-orange-500" />, bg: 'bg-orange-50/50 dark:bg-orange-900/10' },
          { label: 'Em Execução', value: stats.inProgress.toString(), detail: 'Atenção ao prazo', icon: <Clock className="text-blue-500" />, bg: 'bg-blue-50/50 dark:bg-blue-900/10' },
          { label: 'Horas acumuladas', value: '158h', detail: '+12% vs semana passada', icon: <BarChart3 className="text-orange-600" />, bg: 'bg-orange-50/50 dark:bg-orange-900/10' },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-nexus-darkCard p-6 rounded-4xl shadow-sm border border-gray-100 dark:border-nexus-darkBorder flex flex-col justify-between group hover:shadow-xl transition-all">
            <div className="flex justify-between items-start mb-6">
               <span className="text-[10px] font-black text-nexus-grayLight dark:text-gray-500 uppercase tracking-widest">{stat.label}</span>
               <div className={`p-3 rounded-2xl ${stat.bg}`}>
                 {stat.icon}
               </div>
            </div>
            <div>
              <h3 className="text-4xl font-black text-nexus-grayDark dark:text-white mb-2 tracking-tighter">{stat.value}</h3>
              <p className="text-[10px] text-nexus-grayLight dark:text-gray-400 font-black uppercase tracking-widest">{stat.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between px-2">
            <h3 className="font-black text-nexus-grayDark dark:text-white flex items-center gap-3 text-lg uppercase tracking-widest text-xs">
              <span className="w-4 h-4 rounded-full border-2 border-nexus-orange flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-nexus-orange rounded-full"></span>
              </span>
              Tarefas recentes
            </h3>
            <button className="text-[10px] font-black text-nexus-orange hover:underline uppercase tracking-widest">Ver tudo</button>
          </div>
          
          <div className="bg-white dark:bg-nexus-darkCard rounded-5xl border border-gray-100 dark:border-nexus-darkBorder shadow-sm overflow-hidden divide-y divide-gray-50 dark:divide-nexus-darkBorder">
            {recentTasks.length > 0 ? recentTasks.map(task => (
              <div key={task.id} className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors group gap-4">
                <div className="flex items-start gap-5">
                  <span className="text-2xl mt-1">{task.emoji}</span>
                  <div>
                    <h4 className="font-black text-nexus-grayDark dark:text-white text-base group-hover:text-nexus-orange transition-colors">{task.title}</h4>
                    <div className="flex items-center gap-4 mt-2 text-[10px] text-nexus-grayLight dark:text-gray-400 font-black uppercase tracking-widest">
                       <span className="flex items-center gap-1.5"><Users size={12} /> {task.projectRelation}</span>
                       <span className="flex items-center gap-1.5"><Clock size={12} /> {task.dueDate}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                   <span className="px-4 py-1.5 bg-gray-50 dark:bg-nexus-darkBg text-[10px] font-black text-nexus-grayLight dark:text-gray-400 rounded-xl border border-gray-100 dark:border-nexus-darkBorder uppercase tracking-widest">
                     {task.status}
                   </span>
                   <button className="text-gray-300 hover:text-nexus-orange transition-colors">
                     <MoreHorizontal size={20} />
                   </button>
                </div>
              </div>
            )) : (
              <div className="p-12 text-center text-gray-400 font-black uppercase tracking-widest text-[10px]">Nenhuma tarefa ativa.</div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <h3 className="font-black text-nexus-grayDark dark:text-white flex items-center gap-3 text-lg uppercase tracking-widest text-xs">
              <Users size={18} className="text-nexus-orange" /> Equipe online
            </h3>
          </div>
          
          <div className="bg-white dark:bg-nexus-darkCard rounded-5xl border border-gray-100 dark:border-nexus-darkBorder shadow-sm p-8 space-y-6">
            {MOCK_USERS.map(user => (
              <div key={user.id} className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img src={user.avatar} className="w-12 h-12 rounded-2xl border-2 border-white dark:border-nexus-darkBorder shadow-lg object-cover" alt={user.name} />
                    <span className={`absolute -bottom-1 -right-1 w-4 h-4 border-2 border-white dark:border-nexus-darkCard rounded-full ${
                      user.status === 'online' ? 'bg-green-500' : 'bg-orange-500'
                    }`}></span>
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-nexus-grayDark dark:text-white leading-none">{user.name}</h4>
                    <p className="text-[10px] text-nexus-grayLight dark:text-gray-400 mt-2 font-bold uppercase tracking-widest">{user.role}</p>
                  </div>
                </div>
                <button className="p-2 text-gray-300 hover:text-nexus-orange opacity-0 group-hover:opacity-100 transition-all">
                  <ChevronRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
