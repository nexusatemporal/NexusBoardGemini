
export enum TaskStatus {
  TODO = 'todo',
  IN_PROGRESS = 'in_progress',
  REVIEW = 'review',
  DONE = 'done'
}

export enum UserRole {
  CEO = 'CEO',
  DIRECTOR = 'Director',
  DEVELOPER = 'Developer',
  QA = 'QA',
  MARKETING = 'Marketing'
}

export enum NotificationType {
  TASK_ASSIGNED = 'task_assigned',
  MENTION = 'mention',
  STATUS_CHANGED = 'status_changed',
  SYSTEM = 'system'
}

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  avatar?: string;
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
  avatar: string;
  status: 'online' | 'offline' | 'busy';
  email: string;
}

export interface SubTask {
  id: string;
  title: string;
  completed: boolean;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: 'low' | 'medium' | 'high';
  assignees: string[]; // User IDs
  tags: string[];
  subtasks: SubTask[];
  progress: number;
  dueDate: string;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  attachments?: string[];
  linkedTaskId?: string; // ID da tarefa vinculada a esta mensagem específica ou contexto
}

export interface Conversation {
  id: string;
  participants: string[];
  lastMessage: string;
  timestamp: string;
  linkedTaskId?: string; // ID da tarefa vinculada a esta conversa inteira
}
