
import React from 'react';
import { 
  LayoutDashboard, 
  CheckSquare, 
  MessageSquare, 
  Bot, 
  FileText, 
  Settings, 
  Users, 
  Monitor, 
  Shapes, 
  Calendar,
  Layers
} from 'lucide-react';

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
