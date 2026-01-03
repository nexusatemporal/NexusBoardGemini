
import React, { useState, useMemo } from 'react';
import { 
  Plus, Filter, Search, Calendar, CheckSquare, 
  LayoutGrid, List, Columns, MessageSquare, 
  Link as LinkIcon, Sparkles, Hash, ChevronDown, Clock,
  MoreHorizontal, PieChart, Layers, Users, Star, 
  ArrowRight, Flag, Target, Zap, Rocket, CheckCircle2,
  Circle, Play, AlertCircle, GripVertical, Trash2, Edit3, X, Save
} from 'lucide-react';
import { TaskStatus, Task } from '../types';

interface AdvancedTask extends Task {
  emoji: string;
  projectRelation: string;
  points: number;
  lastComment?: string;
  coverGradient?: string;
}

interface TaskManagerProps {
  tasks: AdvancedTask[];
  setTasks: React.Dispatch<React.SetStateAction<AdvancedTask[]>>;
  onSaveTask: (task: AdvancedTask) => void;
  onDeleteTask: (id: string) => void;
  onStartChatWithTask?: (taskId: string, taskTitle: string) => void;
}

const TaskManager: React.FC<TaskManagerProps> = ({ tasks, setTasks, onSaveTask, onDeleteTask, onStartChatWithTask }) => {
  const [view, setView] = useState<'kanban' | 'gallery' | 'grid' | 'timeline'>('kanban');
  const [draggedTaskId, setDraggedTaskId] = useState<string | null>(null);
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Partial<AdvancedTask> | null>(null);

  const stats = useMemo(() => ({
    total: tasks.length,
    points: tasks.reduce((acc, t) => acc + t.points, 0),
    progress: Math.round((tasks.filter(t => t.status === 'done').length / (tasks.length || 1)) * 100),
    online: 12
  }), [tasks]);

  const handleOpenModal = (task?: AdvancedTask) => {
    if (task) {
      setEditingTask(task);
    } else {
      setEditingTask({
        id: Math.random().toString(36).substr(2, 9),
        title: '',
        description: '',
        status: TaskStatus.TODO,
        priority: 'medium',
        emoji: '📝',
        projectRelation: 'Nexus General',
        points: 1,
        progress: 0,
        dueDate: new Date().toISOString().split('T')[0],
        assignees: ['1'],
        subtasks: [],
        coverGradient: 'linear-gradient(135deg, #FF7300 0%, #D93D00 100%)'
      });
    }
    setIsModalOpen(true);
  };

  const handleDragStart = (id: string) => {
    setDraggedTaskId(id);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (status: TaskStatus) => {
    if (!draggedTaskId) return;
    const taskToUpdate = tasks.find(t => t.id === draggedTaskId);
    if (taskToUpdate) {
      onSaveTask({ ...taskToUpdate, status });
    }
    setDraggedTaskId(null);
  };

  const getDueDateStyles = (dateStr: string) => {
    const today = new Date();
    const dueDate = new Date(dateStr);
    const diffTime = dueDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return 'text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400';
    if (diffDays <= 3) return 'text-orange-600 bg-orange-50 dark:bg-orange-900/20 dark:text-orange-400';
    return 'text-nexus-grayLight bg-gray-50 dark:bg-nexus-darkBg dark:text-gray-400';
  };

  const renderTaskCard = (task: AdvancedTask, isGallery = false) => {
    const completedSubtasks = task.subtasks?.length ? task.subtasks.filter(s => s.completed).length : 0;
    const totalSubtasks = task.subtasks?.length || 0;
    
    return (
      <div 
        key={task.id} 
        draggable={view === 'kanban'}
        onDragStart={() => handleDragStart(task.id)}
        className={`group bg-white dark:bg-nexus-darkCard rounded-3xl border border-gray-100 dark:border-nexus-darkBorder shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col cursor-grab active:cursor-grabbing ${isGallery ? 'h-full' : 'mb-4'} ${draggedTaskId === task.id ? 'opacity-40 scale-95 border-nexus-orange border-2' : ''}`}
      >
        {isGallery && (
          <div className="h-28 relative overflow-hidden" style={{ background: task.coverGradient || 'linear-gradient(135deg, #FF7300 0%, #D93D00 100%)' }}>
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute inset-0 flex items-center justify-center text-4xl transform group-hover:scale-110 transition-transform duration-500">{task.emoji}</div>
          </div>
        )}
        <div className="p-5 flex flex-col h-full">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2">
              <span className={`text-[8px] font-black uppercase px-2 py-1 rounded-lg ${task.priority === 'high' ? 'bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400' : 'bg-orange-100 text-nexus-orange dark:bg-orange-900/40 dark:text-orange-400'}`}>
                {task.priority}
              </span>
              <span className="text-lg">{task.emoji}</span>
            </div>
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                onClick={() => handleOpenModal(task)}
                className="p-1.5 bg-gray-50 dark:bg-nexus-darkBg rounded-lg text-gray-400 hover:text-nexus-orange transition-colors"
                title="Editar"
              >
                <Edit3 size={12} />
              </button>
              <button 
                onClick={() => onDeleteTask(task.id)}
                className="p-1.5 bg-gray-50 dark:bg-nexus-darkBg rounded-lg text-gray-400 hover:text-red-500 transition-colors"
                title="Excluir"
              >
                <Trash2 size={12} />
              </button>
            </div>
          </div>

          <h4 className="font-black text-nexus-grayDark dark:text-white text-sm mb-2 group-hover:text-nexus-orange transition-colors line-clamp-2 leading-tight uppercase tracking-tight">{task.title}</h4>
          
          <div className="flex items-center gap-2 mb-4">
             <Layers size={12} className="text-nexus-orange" /> 
             <span className="text-[9px] text-nexus-grayLight dark:text-gray-500 font-black uppercase tracking-widest">{task.projectRelation}</span>
          </div>

          {totalSubtasks > 0 && (
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1.5">
                <div className="flex items-center gap-1.5 text-[9px] font-black text-nexus-grayLight dark:text-gray-500 uppercase tracking-widest">
                  <CheckSquare size={10} /> {completedSubtasks}/{totalSubtasks} Subtarefas
                </div>
                <span className="text-[9px] font-black text-nexus-orange">{Math.round((completedSubtasks/totalSubtasks)*100)}%</span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 dark:bg-nexus-darkBg rounded-full overflow-hidden">
                <div className="h-full nexus-gradient" style={{ width: `${(completedSubtasks/totalSubtasks)*100}%` }}></div>
              </div>
            </div>
          )}

          <div className="mt-auto pt-4 border-t border-gray-50 dark:border-nexus-darkBorder flex justify-between items-center">
            <div className="flex -space-x-1.5">
              {task.assignees?.map(uid => (
                <img 
                  key={uid} 
                  src={`https://picsum.photos/seed/${uid}/32/32`} 
                  className="w-7 h-7 rounded-xl border-2 border-white dark:border-nexus-darkCard hover:z-10 transition-all hover:scale-110" 
                  alt=""
                />
              ))}
            </div>
            
            <div className={`text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl transition-colors ${getDueDateStyles(task.dueDate)}`}>
              <Clock size={10} /> {new Date(task.dueDate).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderKanbanColumn = (status: TaskStatus, label: string, color: string) => {
    const columnTasks = tasks.filter(t => t.status === status);
    
    return (
      <div 
        onDragOver={handleDragOver}
        onDrop={() => handleDrop(status)}
        className="flex-1 min-w-[300px] flex flex-col bg-gray-50/50 dark:bg-nexus-darkCard/30 rounded-[32px] p-4 h-full"
      >
        <div className="flex items-center justify-between mb-6 px-2">
          <div className="flex items-center gap-3">
            <div className={`w-2.5 h-2.5 rounded-full ${color}`}></div>
            <h3 className="font-black text-nexus-grayDark dark:text-white text-xs uppercase tracking-[0.2em]">{label}</h3>
            <span className="bg-white dark:bg-nexus-darkCard px-2.5 py-1 rounded-lg text-[9px] font-black text-nexus-grayLight dark:text-gray-500 border border-gray-100 dark:border-nexus-darkBorder shadow-sm">
              {columnTasks.length}
            </span>
          </div>
          <button 
            onClick={() => {
              setEditingTask({ status } as any);
              setIsModalOpen(true);
            }}
            className="p-1.5 text-nexus-grayLight hover:text-nexus-orange transition-colors"
          >
            <Plus size={16} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto custom-scrollbar pr-1">
          {columnTasks.length === 0 ? (
            <div className="h-24 border-2 border-dashed border-gray-100 dark:border-nexus-darkBorder rounded-3xl flex items-center justify-center text-[9px] font-black text-nexus-grayLight dark:text-gray-600 uppercase tracking-widest">
              Vazio
            </div>
          ) : (
            columnTasks.map(t => renderTaskCard(t))
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col space-y-8 animate-in fade-in duration-500 pb-20">
      {/* Sprint Header */}
      <div className="bg-white dark:bg-nexus-darkCard rounded-5xl border border-gray-100 dark:border-nexus-darkBorder p-6 md:p-8 shadow-xl flex flex-col xl:flex-row items-center justify-between gap-6 relative overflow-hidden group">
        <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10 w-full xl:w-auto">
          <div className="w-16 h-16 nexus-gradient rounded-3xl flex items-center justify-center text-white shadow-2xl rotate-3">
            <Rocket size={32} />
          </div>
          <div className="text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <h2 className="text-xl md:text-2xl font-black text-nexus-grayDark dark:text-white tracking-tighter uppercase leading-none">Sprint Nexus v1.0</h2>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[9px] font-black rounded-full uppercase tracking-widest animate-pulse">Ativa</span>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-3">
              <p className="text-[10px] text-nexus-grayLight dark:text-gray-400 font-black flex items-center gap-2 uppercase tracking-widest"><Calendar size={14} className="text-nexus-orange" /> {tasks.length} Tarefas</p>
              <p className="text-[10px] text-nexus-grayLight dark:text-gray-400 font-black flex items-center gap-2 uppercase tracking-widest"><Users size={14} className="text-nexus-orange" /> {stats.online} Online</p>
              <p className="text-[10px] text-nexus-grayLight dark:text-gray-400 font-black flex items-center gap-2 uppercase tracking-widest"><Hash size={14} className="text-nexus-orange" /> {stats.points} pts</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-8 w-full xl:w-auto">
          <div className="flex-1 w-full lg:min-w-[240px]">
            <div className="flex justify-between items-center mb-2">
              <p className="text-[9px] font-black text-nexus-grayLight dark:text-gray-500 uppercase tracking-widest">Saúde da Sprint</p>
              <span className="text-xs font-black text-nexus-orange">{stats.progress}%</span>
            </div>
            <div className="w-full h-3 bg-gray-100 dark:bg-nexus-darkBg rounded-full overflow-hidden border border-white/5">
              <div className="h-full nexus-gradient shadow-[0_0_10px_rgba(255,115,0,0.4)] transition-all duration-1000" style={{ width: `${stats.progress}%` }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Control Bar */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 bg-white dark:bg-nexus-darkCard p-1.5 rounded-2xl border border-gray-100 dark:border-nexus-darkBorder shadow-sm w-full lg:w-auto overflow-x-auto no-scrollbar">
          {[
            { id: 'kanban', icon: <Columns size={16} />, label: 'Board' },
            { id: 'gallery', icon: <LayoutGrid size={16} />, label: 'Galeria' },
            { id: 'grid', icon: <List size={16} />, label: 'Tabela' }
          ].map(opt => (
            <button 
              key={opt.id}
              onClick={() => setView(opt.id as any)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[9px] font-black tracking-widest uppercase transition-all whitespace-nowrap ${view === opt.id ? 'bg-nexus-orange text-white shadow-lg shadow-orange-100 dark:shadow-orange-900/20' : 'text-nexus-grayLight dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-nexus-darkBg'}`}
            >
              {opt.icon} {opt.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 w-full lg:w-auto">
          <button 
            onClick={() => handleOpenModal()}
            className="flex-1 lg:flex-none nexus-gradient text-white px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-all"
          >
            <Plus size={18} /> Nova Tarefa
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 min-h-[600px]">
        {view === 'kanban' && (
          <div className="flex gap-6 h-full overflow-x-auto pb-4 no-scrollbar">
            {renderKanbanColumn(TaskStatus.TODO, 'Backlog', 'bg-gray-400')}
            {renderKanbanColumn(TaskStatus.IN_PROGRESS, 'Fazendo', 'bg-nexus-orange')}
            {renderKanbanColumn(TaskStatus.REVIEW, 'Revisão', 'bg-purple-500')}
            {renderKanbanColumn(TaskStatus.DONE, 'Concluído', 'bg-green-500')}
          </div>
        )}

        {view === 'gallery' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 h-full">
            {tasks.map(t => renderTaskCard(t, true))}
            <button 
              onClick={() => handleOpenModal()}
              className="h-[300px] border-4 border-dashed border-gray-100 dark:border-nexus-darkBorder rounded-[40px] flex flex-col items-center justify-center gap-4 text-gray-300 dark:text-gray-700 hover:border-nexus-orange hover:text-nexus-orange transition-all group"
            >
               <div className="w-16 h-16 bg-white dark:bg-nexus-darkCard rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                 <Plus size={32} />
               </div>
               <span className="font-black uppercase tracking-[0.2em] text-[10px]">Novo Bloco</span>
            </button>
          </div>
        )}

        {view === 'grid' && (
          <div className="bg-white dark:bg-nexus-darkCard rounded-[40px] border border-gray-100 dark:border-nexus-darkBorder shadow-2xl overflow-hidden p-8">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b dark:border-nexus-darkBorder text-[10px] font-black uppercase text-gray-400 tracking-widest">
                  <th className="pb-4">Tarefa</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Prioridade</th>
                  <th className="pb-4">Prazo</th>
                  <th className="pb-4 text-right">Ações</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map(t => (
                  <tr key={t.id} className="border-b dark:border-nexus-darkBorder hover:bg-gray-50/50 dark:hover:bg-white/5">
                    <td className="py-4 font-bold text-sm">{t.emoji} {t.title}</td>
                    <td className="py-4"><span className="text-[10px] font-black uppercase px-3 py-1 bg-gray-100 dark:bg-nexus-darkBg rounded-lg">{t.status}</span></td>
                    <td className="py-4 text-xs uppercase font-black">{t.priority}</td>
                    <td className="py-4 text-xs">{t.dueDate}</td>
                    <td className="py-4 text-right">
                      <button onClick={() => handleOpenModal(t)} className="p-2 text-nexus-orange"><Edit3 size={14}/></button>
                      <button onClick={() => onDeleteTask(t.id)} className="p-2 text-red-500"><Trash2 size={14}/></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Task Modal (CRUD Form) */}
      {isModalOpen && editingTask && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="bg-white dark:bg-nexus-darkCard w-full max-w-xl rounded-[40px] border border-gray-100 dark:border-nexus-darkBorder shadow-2xl relative z-10 overflow-hidden flex flex-col">
            <div className="p-8 border-b dark:border-nexus-darkBorder flex justify-between items-center">
              <h3 className="text-xl font-black text-nexus-grayDark dark:text-white uppercase tracking-tighter">
                {editingTask.id ? 'Editar Tarefa' : 'Nova Tarefa'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="p-2 text-gray-400 hover:text-nexus-orange transition-colors"><X/></button>
            </div>
            
            <div className="p-8 space-y-6 overflow-y-auto max-h-[70vh] custom-scrollbar">
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400">Emoji</label>
                  <input 
                    type="text" 
                    value={editingTask.emoji} 
                    onChange={e => setEditingTask({...editingTask, emoji: e.target.value})}
                    className="w-full p-4 bg-gray-50 dark:bg-nexus-darkBg border dark:border-nexus-darkBorder rounded-2xl text-center text-xl"
                  />
                </div>
                <div className="col-span-3 space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400">Título</label>
                  <input 
                    type="text" 
                    value={editingTask.title} 
                    onChange={e => setEditingTask({...editingTask, title: e.target.value})}
                    placeholder="Nome da tarefa..."
                    className="w-full p-4 bg-gray-50 dark:bg-nexus-darkBg border dark:border-nexus-darkBorder rounded-2xl text-sm font-bold outline-none focus:ring-2 focus:ring-nexus-orange/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-gray-400">Descrição</label>
                <textarea 
                  value={editingTask.description} 
                  onChange={e => setEditingTask({...editingTask, description: e.target.value})}
                  className="w-full p-4 bg-gray-50 dark:bg-nexus-darkBg border dark:border-nexus-darkBorder rounded-2xl text-sm outline-none h-24 resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400">Status</label>
                  <select 
                    value={editingTask.status} 
                    onChange={e => setEditingTask({...editingTask, status: e.target.value as any})}
                    className="w-full p-4 bg-gray-50 dark:bg-nexus-darkBg border dark:border-nexus-darkBorder rounded-2xl text-xs font-black uppercase outline-none"
                  >
                    <option value={TaskStatus.TODO}>Backlog</option>
                    <option value={TaskStatus.IN_PROGRESS}>Fazendo</option>
                    <option value={TaskStatus.REVIEW}>Revisão</option>
                    <option value={TaskStatus.DONE}>Feito</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400">Prioridade</label>
                  <select 
                    value={editingTask.priority} 
                    onChange={e => setEditingTask({...editingTask, priority: e.target.value as any})}
                    className="w-full p-4 bg-gray-50 dark:bg-nexus-darkBg border dark:border-nexus-darkBorder rounded-2xl text-xs font-black uppercase outline-none"
                  >
                    <option value="low">Baixa</option>
                    <option value="medium">Média</option>
                    <option value="high">Alta</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400">Data Limite</label>
                  <input 
                    type="date" 
                    value={editingTask.dueDate} 
                    onChange={e => setEditingTask({...editingTask, dueDate: e.target.value})}
                    className="w-full p-4 bg-gray-50 dark:bg-nexus-darkBg border dark:border-nexus-darkBorder rounded-2xl text-xs font-black"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400">Pontos (Estimação)</label>
                  <input 
                    type="number" 
                    value={editingTask.points} 
                    onChange={e => setEditingTask({...editingTask, points: parseInt(e.target.value) || 0})}
                    className="w-full p-4 bg-gray-50 dark:bg-nexus-darkBg border dark:border-nexus-darkBorder rounded-2xl text-xs font-black"
                  />
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-50/50 dark:bg-black/20 border-t dark:border-nexus-darkBorder flex gap-4">
               <button 
                 onClick={() => setIsModalOpen(false)}
                 className="flex-1 py-4 bg-white dark:bg-nexus-darkCard border dark:border-nexus-darkBorder rounded-2xl text-[10px] font-black uppercase tracking-widest"
               >
                 Cancelar
               </button>
               <button 
                 onClick={() => {
                   onSaveTask(editingTask as AdvancedTask);
                   setIsModalOpen(false);
                 }}
                 className="flex-1 py-4 nexus-gradient text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl flex items-center justify-center gap-2"
               >
                 <Save size={16}/> Salvar Tarefa
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskManager;
