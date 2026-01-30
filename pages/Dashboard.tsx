
import React from 'react';
import HeaderWithLogos from '../components/HeaderWithLogos';
import RoleRevealCard from '../components/RoleRevealCard';
import LeaderboardTable from '../components/LeaderboardTable';
import TaskCard from '../components/TaskCard';
import { Member, Task } from '../types';
import { members } from '../data/members';
import { tasks } from '../data/tasks';
import { Star, Award, Briefcase, Eye, ShieldCheck, ClipboardList, Users, Target, Zap, Activity } from 'lucide-react';

interface DashboardProps {
  user: Member;
  onLogout: () => void;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout, toggleTheme, isDarkMode }) => {
  const isLeader = user.id.startsWith('LD');
  const isHR = user.id.startsWith('HR');
  const isCompetitor = user.id.startsWith('JK');

  // Filter only competitors for ranking
  const competitors = members.filter(m => m.id.startsWith('JK'));
  
  // HR Specific Logic: Find members where mentorId is current HR's ID
  const myManagedMembers = members.filter(m => m.mentorId === user.id);
  const myManagedIds = myManagedMembers.map(m => m.id);
  
  // Sync Logic: Find tasks where any ownerId matches my managed members' IDs
  const myManagedTasks = tasks.filter(t => t.ownersIds?.some(ownerId => myManagedIds.includes(ownerId)));

  // General Dashboard Logic
  const sortedCompetitors = [...competitors].sort((a, b) => b.points - a.points);
  const userRank = isCompetitor ? sortedCompetitors.findIndex(m => m.id === user.id) + 1 : null;
  const runningTasks = tasks.filter(t => t.status === 'running');
  
  // Sync logic for the member themselves
  const userOwnedTasks = tasks.filter(t => t.ownersIds?.includes(user.id));
  const myMentor = isCompetitor ? members.find(m => m.id === user.mentorId) : null;

  // Helper to get current task for a member based on ID
  const getMemberCurrentTask = (memberId: string) => {
    return tasks.find(t => t.status === 'running' && t.ownersIds?.includes(memberId));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-joker-dark transition-colors duration-300 pb-12 text-right" dir="rtl">
      <HeaderWithLogos isLoggedIn={true} onLogout={onLogout} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <RoleRevealCard user={user} />

      <main className="container mx-auto px-4 py-8">
        {/* Dynamic Welcome Header */}
        <div className={`mb-10 p-6 md:p-8 rounded-[2.5rem] border shadow-xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 ${
          isLeader ? 'bg-gradient-to-br from-indigo-900 via-joker-dark to-purple-900 border-indigo-500/30 text-white' :
          isHR ? 'bg-gradient-to-br from-joker-teal/10 to-blue-100 dark:from-joker-teal/5 dark:to-blue-900/20 border-joker-teal/30 bg-white dark:bg-joker-dark' :
          'bg-white dark:bg-joker-dark border-gray-100 dark:border-joker-gray'
        }`}>
           <div className="absolute -left-10 -bottom-10 opacity-[0.05] pointer-events-none rotate-12">
             {isLeader ? <ShieldCheck size={160} /> : isHR ? <Users size={160} /> : <img src="photos/logo.png" className="w-40 h-40 pixel-art" alt="" />}
           </div>

           <div className="flex items-center gap-5 relative z-10">
              <div className="relative">
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow-md relative z-20 border-2 ${isLeader ? 'bg-yellow-500 border-yellow-300' : 'bg-white dark:bg-joker-gray border-joker-coral'}`}>
                  {isLeader ? <ShieldCheck className="text-white" size={32} /> : isHR ? <ClipboardList className="text-joker-teal" size={32} /> : <img src="photos/logo.png" className="w-12 h-12 pixel-art" alt="Joker" />}
                </div>
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-black mb-1">
                  {isLeader ? 'أهلاً يا سيادة القائد' : isHR ? `أهلاً يا ${user.name.split(' ')[0]}` : 'عاش يا بطل'}، <span className={isLeader ? 'text-yellow-400' : 'text-joker-coral'}>{user.name.split(' ')[0]}</span>! 🔥
                </h1>
                
                {isHR ? (
                  <div className="space-y-2">
                    <p className="text-gray-500 dark:text-gray-400 font-bold">إنت بتتابع حالياً:</p>
                    <div className="flex flex-wrap gap-2">
                      {myManagedMembers.map(m => (
                        <span key={m.id} className="bg-joker-teal/10 text-joker-teal px-3 py-1 rounded-full text-xs font-black border border-joker-teal/20">
                          {m.name.split(' ')[0]}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className={`${isLeader ? 'text-indigo-200' : 'text-gray-500 dark:text-gray-400'} font-bold`}>
                    {isLeader ? 'الساحة كلها تحت نظرك.' : `إنت بتتابع مع المرشد: ${myMentor?.name || 'فريق الجوكر'}.`}
                  </p>
                )}
              </div>
           </div>
           
           {isCompetitor && (
             <div className="flex gap-3 relative z-10">
               <div className="bg-joker-teal/10 p-4 rounded-2xl border border-joker-teal/20 text-center min-w-[100px]">
                  <p className="text-xs text-joker-teal font-black uppercase mb-1">نقاطك</p>
                  <p className="text-2xl font-black text-joker-dark dark:text-white">{user.points}</p>
               </div>
               <div className="bg-joker-coral/10 p-4 rounded-2xl border border-joker-coral/20 text-center min-w-[100px]">
                  <p className="text-xs text-joker-coral font-black uppercase mb-1">المركز</p>
                  <p className="text-2xl font-black text-joker-dark dark:text-white">{userRank}</p>
               </div>
             </div>
           )}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-10">
            
            {/* HR VIEW: Detailed Member Progress */}
            {isHR && (
              <>
                <section>
                  <h2 className="text-2xl font-black mb-6 text-joker-dark dark:text-white flex items-center gap-2">
                    <Activity className="text-joker-teal" />
                    حالة أبطالك دلوقتي
                  </h2>
                  <div className="grid gap-4">
                    {myManagedMembers.map(member => {
                      const currentTask = getMemberCurrentTask(member.id);
                      return (
                        <div key={member.id} className="bg-white dark:bg-joker-dark border border-gray-100 dark:border-joker-gray p-5 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-lg transition-shadow">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-joker-coral/10 rounded-2xl flex items-center justify-center font-black text-joker-coral border border-joker-coral/20">
                              {member.name.charAt(0)}
                            </div>
                            <div>
                              <h3 className="font-black text-joker-dark dark:text-white leading-none mb-1">{member.name}</h3>
                              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{member.role}</p>
                            </div>
                          </div>

                          <div className="flex-1 md:px-8">
                            {currentTask ? (
                              <div className="bg-joker-teal/5 border border-joker-teal/10 p-3 rounded-2xl">
                                <p className="text-[10px] text-joker-teal font-black mb-1 uppercase tracking-tighter">شغال على:</p>
                                <p className="text-sm font-bold text-joker-dark dark:text-white truncate">{currentTask.title}</p>
                              </div>
                            ) : (
                              <div className="bg-gray-50 dark:bg-joker-gray/20 p-3 rounded-2xl">
                                <p className="text-sm font-bold text-gray-400 italic">في استراحة حالياً.. ☕</p>
                              </div>
                            )}
                          </div>

                          <div className="text-left">
                            <span className="text-xs font-black text-gray-400 block mb-1">النقاط</span>
                            <span className="text-xl font-black text-joker-teal">{member.points}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>

                <section>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-black text-joker-dark dark:text-white flex items-center gap-2">
                      <Zap className="text-yellow-500" />
                      تفاصيل المهام المفتوحة
                    </h2>
                    <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 px-4 py-1 rounded-full text-xs font-black">{myManagedTasks.length} تاسك</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    {myManagedTasks.map(task => (
                      <TaskCard key={task.id} task={task} />
                    ))}
                  </div>
                </section>
              </>
            )}

            {/* LEADER & MEMBER: Standard Views */}
            {!isHR && (
              <>
                <section>
                  <h2 className="text-2xl font-black mb-6 text-joker-dark dark:text-white flex items-center gap-2">
                    <Briefcase className="text-joker-teal" />
                    {isLeader ? 'كل المهام النشطة' : 'تاسكاتك الحالية'}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-5">
                    {(isLeader ? runningTasks : userOwnedTasks).map(task => (
                      <TaskCard key={task.id} task={task} />
                    ))}
                    {(!isLeader && userOwnedTasks.length === 0) && (
                       <div className="md:col-span-2 bg-white dark:bg-joker-dark p-12 rounded-[2rem] border-2 border-dashed border-gray-200 dark:border-joker-gray text-center">
                          <p className="text-gray-400 font-bold italic">مفيش تاسكات مخصصة ليك حالياً.. استريح يا بطل!</p>
                       </div>
                    )}
                  </div>
                </section>
                
                {!isLeader && (
                  <section>
                    <h2 className="text-2xl font-black mb-6 text-joker-dark dark:text-white flex items-center gap-2">
                      <Eye className="text-joker-coral" />
                      باقي الفريق بيعمل إيه؟
                    </h2>
                    <div className="grid md:grid-cols-2 gap-5 opacity-40 grayscale-[0.5] hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                      {runningTasks.filter(t => !t.ownersIds?.includes(user.id)).map(task => (
                        <TaskCard key={task.id} task={task} />
                      ))}
                    </div>
                  </section>
                )}
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {isHR && (
              <section className="bg-joker-teal/5 p-4 rounded-[2.5rem] border border-joker-teal/20">
                 <h2 className="text-xl font-black mb-4 text-joker-teal flex items-center gap-2 px-2">
                   <Users size={20} />
                   ترتيب الـ 5 أبطال بتوعك 🌟
                 </h2>
                 <LeaderboardTable members={myManagedMembers} />
                 <p className="text-[10px] text-center mt-3 text-gray-400 font-bold italic">مهمتك تخلي اسم من الأسماء دي يوصل للتوب 3 العام!</p>
              </section>
            )}

            <section>
               <h2 className="text-2xl font-black mb-6 text-joker-dark dark:text-white flex items-center gap-2">
                 <Award className="text-yellow-500" />
                 {isHR ? 'الترتيب العام للفريق' : 'لوحة الصدارة العامة'}
               </h2>
               <LeaderboardTable members={members} highlightMemberId={user.id} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
