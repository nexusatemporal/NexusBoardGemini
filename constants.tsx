
import React from 'react';
import { 
  LayoutDashboard, 
  CheckSquare, 
  MessageSquare, 
  Bot, 
  FileText, 
  Settings, 
  Users, 
  Shapes, 
  Calendar,
  Layers
} from 'lucide-react';
import { NotificationType, Notification } from './types';

export const COLORS = {
  primary: '#FF7300',
  primaryDark: '#D93D00',
  dark: '#4B4B4D',
  light: '#848688',
};

export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
  { id: 'tasks', label: 'Tarefas & Sprints', icon: <CheckSquare size={20} /> },
  { id: 'whiteboard', label: 'Whiteboard (Miro)', icon: <Shapes size={20} /> },
  { id: 'database', label: 'Base de Dados', icon: <Layers size={20} /> },
  { id: 'chat', label: 'Bate-papo', icon: <MessageSquare size={20} /> },
  { id: 'ai', label: 'AI Workspace', icon: <Bot size={20} /> },
  { id: 'docs', label: 'Documentação', icon: <FileText size={20} /> },
  { id: 'calendar', label: 'Calendário', icon: <Calendar size={20} /> },
  { id: 'users', label: 'Equipe', icon: <Users size={20} /> },
  { id: 'settings', label: 'Configurações', icon: <Settings size={20} /> },
];

export const MOCK_USERS = [
  { id: '1', name: 'João Silva', role: 'Developer', status: 'online', avatar: 'https://picsum.photos/seed/joao/100/100', email: 'joao@nexus.com' },
  { id: '2', name: 'Maria Souza', role: 'Marketing', status: 'online', avatar: 'https://picsum.photos/seed/maria/100/100', email: 'maria@nexus.com' },
  { id: '3', name: 'Carlos Santos', role: 'CEO', status: 'busy', avatar: 'https://picsum.photos/seed/carlos/100/100', email: 'carlos@nexus.com' },
  { id: '4', name: 'Ana Costa', role: 'QA', status: 'offline', avatar: 'https://picsum.photos/seed/ana/100/100', email: 'ana@nexus.com' },
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: 'n1',
    type: NotificationType.TASK_ASSIGNED,
    title: 'Nova Tarefa Atribuída',
    message: 'Carlos Santos atribuiu "Refatoração de API" a você.',
    timestamp: '2 min atrás',
    isRead: false,
    avatar: 'https://picsum.photos/seed/carlos/32/32'
  },
  {
    id: 'n2',
    type: NotificationType.MENTION,
    title: 'Você foi mencionado',
    message: 'Maria Souza mencionou você no canal #marketing.',
    timestamp: '15 min atrás',
    isRead: false,
    avatar: 'https://picsum.photos/seed/maria/32/32'
  },
  {
    id: 'n3',
    type: NotificationType.STATUS_CHANGED,
    title: 'Sprint Nexus v1.0 Atualizada',
    message: 'O status mudou para "Fase de Revisão Final".',
    timestamp: '1 hora atrás',
    isRead: true
  },
  {
    id: 'n4',
    type: NotificationType.SYSTEM,
    title: 'Backup Concluído',
    message: 'O cluster Nexus VPS realizou o backup diário com sucesso.',
    timestamp: '3 horas atrás',
    isRead: true
  }
];
