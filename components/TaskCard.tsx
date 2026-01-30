
import React from 'react';
import { Task } from '../types';
import { Clock, MessageSquare, ExternalLink, User, ShieldCheck } from 'lucide-react';
import { members } from '../data/members';

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const isRunning = task.status === 'running';
  
  // Lookup member objects from the IDs in ownersIds
  const taskOwners = members.filter(m => task.ownersIds?.includes(m.id));
  const assignedHR = members.find(m => m.id === task.assignedHr);

  return (
    <div className={`p-6 rounded-[2rem] border transition-all flex flex-col h-full hover:shadow-xl group relative overflow-hidden ${
      isRunning 
        ? 'bg-white dark:bg-joker-dark border-joker-teal/30 border-r-8 border-r-joker-teal shadow-joker-teal/5' 
        : 'bg-gray-50/80 dark:bg-joker-gray/20 border-gray-100 dark:border-joker-gray grayscale-[0.3]'
    }`}>
      {/* Decorative Glow */}
      <div className={`absolute top-0 right-0 w-24 h-24 blur-[40px] opacity-10 rounded-full ${isRunning ? 'bg-joker-teal' : 'bg-gray-400'}`}></div>

      <div className="flex justify-between items-start mb-4 relative z-10">
        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
          isRunning ? 'bg-joker-teal/10 text-joker-teal border border-joker-teal/20' : 'bg-gray-200 dark:bg-joker-gray text-gray-500'
        }`}>
          {task.category}
        </span>
        {isRunning && (
          <span className="flex items-center gap-2 text-joker-teal text-xs font-black bg-joker-teal/5 px-3 py-1 rounded-full border border-joker-teal/10 animate-pulse">
            <span className="w-2 h-2 bg-joker-teal rounded-full"></span>
            قيد التنفيذ
          </span>
        )}
      </div>
      
      <h3 className="text-xl font-black text-joker-dark dark:text-white mb-3 leading-tight group-hover:text-joker-teal transition-colors">
        {task.title}
      </h3>
      
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 flex-grow font-medium leading-relaxed">
        {task.description}
      </p>

      {/* Owners and HR info */}
      <div className="space-y-3 mb-6 bg-gray-50/50 dark:bg-joker-gray/30 p-4 rounded-2xl border border-gray-100 dark:border-joker-gray/40">
        {taskOwners.length > 0 && (
          <div className="flex items-center gap-2">
            <User size={14} className="text-joker-teal" />
            <div className="flex flex-wrap gap-1">
              {taskOwners.map((owner, idx) => (
                <span key={owner.id} className="text-xs font-black text-joker-dark dark:text-white">
                  {owner.name}{idx < taskOwners.length - 1 ? '،' : ''}
                </span>
              ))}
            </div>
          </div>
        )}
        {assignedHR && (
          <div className="flex items-center gap-2 border-t border-gray-100 dark:border-joker-gray/40 pt-2">
            <ShieldCheck size={14} className="text-indigo-500" />
            <span className="text-[10px] font-bold text-gray-500 uppercase">متابعة HR: </span>
            <span className="text-xs font-black text-indigo-600 dark:text-indigo-400">{assignedHR.name}</span>
          </div>
        )}
      </div>

      <div className="space-y-4 pt-4 border-t border-gray-100 dark:border-joker-gray/40 mt-auto relative z-10">
        <div className="flex items-center justify-between">
          {task.dueText && (
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 font-bold">
              <Clock size={16} className="text-joker-coral" />
              <span>الموعد: {task.dueText}</span>
            </div>
          )}
        </div>

        {task.discordUrl && (
          <a 
            href={task.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-3.5 rounded-2xl bg-[#5865F2]/10 hover:bg-[#5865F2] text-[#5865F2] hover:text-white font-black text-sm transition-all shadow-sm hover:shadow-lg hover:shadow-[#5865F2]/30 active:scale-95 group/btn"
          >
            <MessageSquare size={18} />
            <span>سيرفر المتابعة</span>
            <ExternalLink size={14} className="opacity-0 group-hover/btn:opacity-100 transition-opacity" />
          </a>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
