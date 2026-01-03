
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
}
