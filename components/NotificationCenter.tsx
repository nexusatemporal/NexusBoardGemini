
import React from 'react';
import { 
  Bell, 
  CheckCircle2, 
  MessageSquare, 
  UserPlus, 
  ShieldAlert, 
  Check, 
  Trash2,
  Clock,
  ExternalLink
} from 'lucide-react';
import { NotificationType, Notification } from '../types';

interface NotificationCenterProps {
  notifications: Notification[];
  onMarkAsRead: (id: string) => void;
  onClearAll: () => void;
  onClose: () => void;
}

const NotificationCenter: React.FC<NotificationCenterProps> = ({ 
  notifications, 
  onMarkAsRead, 
  onClearAll,
  onClose
}) => {
  const getIcon = (type: NotificationType) => {
    switch (type) {
      case NotificationType.TASK_ASSIGNED:
        return <UserPlus className="text-nexus-orange" size={16} />;
      case NotificationType.MENTION:
        return <MessageSquare className="text-blue-500" size={16} />;
      case NotificationType.STATUS_CHANGED:
        return <CheckCircle2 className="text-green-500" size={16} />;
      case NotificationType.SYSTEM:
        return <ShieldAlert className="text-purple-500" size={16} />;
      default:
        return <Bell className="text-gray-400" size={16} />;
    }
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="absolute right-0 mt-3 w-screen max-w-[380px] bg-white dark:bg-nexus-darkCard border border-gray-100 dark:border-nexus-darkBorder rounded-4xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
      <div className="p-6 border-b border-gray-50 dark:border-nexus-darkBorder flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h3 className="font-black text-nexus-grayDark dark:text-white text-sm uppercase tracking-widest">Notificações</h3>
          {unreadCount > 0 && (
            <span className="px-2 py-0.5 bg-nexus-orange text-white text-[9px] font-black rounded-full uppercase">
              {unreadCount} Novas
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={onClearAll}
            className="p-2 text-nexus-grayLight dark:text-gray-500 hover:text-red-500 transition-colors"
            title="Limpar todas"
          >
            <Trash2 size={16} />
          </button>
          <button 
            onClick={onClose}
            className="md:hidden p-2 text-nexus-grayLight dark:text-gray-500"
          >
            <Check size={16} />
          </button>
        </div>
      </div>

      <div className="max-h-[450px] overflow-y-auto custom-scrollbar">
        {notifications.length === 0 ? (
          <div className="p-12 text-center flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-gray-50 dark:bg-nexus-darkBg rounded-full flex items-center justify-center text-gray-300 dark:text-gray-700">
              <Bell size={28} />
            </div>
            <p className="text-[10px] font-black text-nexus-grayLight uppercase tracking-widest leading-relaxed">
              Tudo limpo por aqui!<br />Aguardando novos sinais...
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-50 dark:divide-nexus-darkBorder">
            {notifications.map((notif) => (
              <div 
                key={notif.id}
                onClick={() => onMarkAsRead(notif.id)}
                className={`p-5 flex gap-4 transition-all hover:bg-gray-50/50 dark:hover:bg-white/5 cursor-pointer relative group ${!notif.isRead ? 'bg-orange-50/10 dark:bg-orange-900/5' : ''}`}
              >
                {!notif.isRead && (
                  <div className="absolute left-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-nexus-orange rounded-full"></div>
                )}
                
                <div className="flex-shrink-0">
                  {notif.avatar ? (
                    <img src={notif.avatar} className="w-10 h-10 rounded-2xl border border-gray-100 dark:border-nexus-darkBorder shadow-sm" alt="" />
                  ) : (
                    <div className="w-10 h-10 rounded-2xl bg-gray-100 dark:bg-nexus-darkBg flex items-center justify-center">
                      {getIcon(notif.type)}
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className={`text-xs font-black truncate ${!notif.isRead ? 'text-nexus-grayDark dark:text-white' : 'text-nexus-grayLight dark:text-gray-400'}`}>
                      {notif.title}
                    </h4>
                    <span className="text-[8px] font-bold text-nexus-grayLight dark:text-gray-600 uppercase whitespace-nowrap flex items-center gap-1">
                      <Clock size={10} /> {notif.timestamp}
                    </span>
                  </div>
                  <p className="text-[11px] text-nexus-grayLight dark:text-gray-400 leading-relaxed font-medium line-clamp-2 mb-3">
                    {notif.message}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <button className="text-[8px] font-black text-nexus-orange uppercase tracking-widest flex items-center gap-1 hover:underline">
                      <ExternalLink size={10} /> Ver Detalhes
                    </button>
                    {!notif.isRead && (
                      <button 
                        onClick={(e) => { e.stopPropagation(); onMarkAsRead(notif.id); }}
                        className="text-[8px] font-black text-green-500 uppercase tracking-widest flex items-center gap-1 hover:underline"
                      >
                        <Check size={10} /> Marcar Lida
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {notifications.length > 0 && (
        <div className="p-4 bg-gray-50/50 dark:bg-black/20 border-t border-gray-50 dark:border-nexus-darkBorder">
          <button className="w-full py-3 text-[10px] font-black text-nexus-grayLight dark:text-gray-400 uppercase tracking-[0.2em] hover:text-nexus-orange transition-colors">
            Ver todas as atividades do Cluster
          </button>
        </div>
      )}
    </div>
  );
};

export default NotificationCenter;
