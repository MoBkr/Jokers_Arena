
import React, { useState, useEffect } from 'react';
import { Member, Role } from '../types';
import { Sparkles, CheckCircle, ShieldCheck, ClipboardList, Users } from 'lucide-react';
// Import config to access teamName
import { config } from '../data/config';

interface RoleRevealProps { user: Member; }

const roleMessages: Record<Role, string[]> = {
  'Content Writer': ["كلامك بيحرّك الناس… وإحنا واثقين فيك 💙"],
  'Video Maker': ["إنت اللي بتحوّل الفكرة لحكاية… شد حيلك 🔥"],
  'Graphic Designer': ["لمستك بتبان من أول نظرة… خليك مبدع ✨"],
  'Programmer': ["إنت اللي بتخلي كل حاجة تشتغل… 🚀"],
  'Knowledge Builder': ["إنت اللي بتبني الأساس… كل مصدر بيفرق 👌"],
  'Customer Support': ["إنت صوت الفريق… وطريقتك بتسيب أثر حلو 🤝"],
  'Team Leader': ["بتقود السفينة بذكاء.. ومعاك هنوصل لبعيد 🚢"],
  'HR': ["إنت قائد لمجموعة من الأبطال.. مهمتك تطلع أحسن ما فيهم وتكون سند ليهم دايماً 🦅"]
};

const RoleRevealCard: React.FC<RoleRevealProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const revealed = localStorage.getItem('role_revealed');
    if (!revealed) setIsOpen(true);
  }, []);

  const handleClose = () => {
    localStorage.setItem('role_revealed', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;
  const messages = roleMessages[user.role] || ["إحنا واثقين فيك جداً"];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  const getRoleIcon = (role: Role) => {
    switch(role) {
      case 'Team Leader': return <ShieldCheck className="text-white" size={60} />;
      case 'HR': return <Users className="text-white" size={60} />;
      default: return '🎭';
    }
  };

  const isSpecial = user.id.startsWith('LD') || user.id.startsWith('HR');

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-joker-dark/80 backdrop-blur-sm">
      <div className="bg-white dark:bg-joker-dark w-full max-w-md rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-500">
        <div className={`p-8 text-center text-white relative ${isSpecial ? 'bg-gradient-to-br from-indigo-600 to-purple-600' : 'bg-gradient-to-br from-joker-coral to-joker-teal'}`}>
           <div className="absolute top-4 right-4 animate-bounce"><Sparkles size={24} /></div>
           <div className="flex justify-center mb-4 drop-shadow-lg">
             {typeof getRoleIcon(user.role) === 'string' ? <span className="text-6xl">{getRoleIcon(user.role)}</span> : getRoleIcon(user.role)}
           </div>
           <h2 className="text-3xl font-black mb-2 italic">🎭 دورك في الأرينا</h2>
        </div>
        <div className="p-8 text-center">
          <p className="text-xl text-joker-dark dark:text-white mb-4">
             يا <span className={`font-black underline ${user.id.startsWith('LD') ? 'text-yellow-500' : 'text-joker-coral'}`}>{user.name}</span>...
             <br />
             {/* Use config.teamName instead of user.teamName as Member doesn't have teamName property */}
             {user.role === 'HR' ? `إنت قائد ${config.teamName}` : `إنت معانا بصفة ${user.role}`}
          </p>
          <div className="bg-gray-50 dark:bg-joker-gray/50 p-6 rounded-2xl mb-8 border-dashed border-2 border-gray-200">
             <p className="text-lg font-bold text-gray-700 dark:text-gray-300 italic">"{randomMessage}"</p>
          </div>
          <button onClick={handleClose} className="w-full bg-joker-dark dark:bg-white text-white dark:text-joker-dark py-4 rounded-2xl font-black text-xl flex items-center justify-center gap-2">
            <CheckCircle size={24} /> جاهز للمهمة ✅
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleRevealCard;
