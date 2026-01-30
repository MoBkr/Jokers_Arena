
import React, { useEffect, useState } from 'react';
import HeaderWithLogos from '../components/HeaderWithLogos';
import Top3Podium from '../components/Top3Podium';
import LeaderboardTable from '../components/LeaderboardTable';
import TaskCard from '../components/TaskCard';
import { members } from '../data/members';
import { tasks } from '../data/tasks';
import { Member } from '../types';
import { Sparkles, LayoutDashboard } from 'lucide-react';

interface HomeProps {
  currentUser: Member | null;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ currentUser, toggleTheme, isDarkMode }) => {
  const [liveMembers, setLiveMembers] = useState(members);

  // Mock "Live" update every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMembers(prev => {
        return prev.map(m => ({
          ...m,
          // Just a small visual update for demo purposes
          points: m.points + (Math.random() > 0.8 ? Math.floor(Math.random() * 5) : 0)
        }));
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const runningTasks = tasks.filter(t => t.status === 'running');
  const upcomingTasks = tasks.filter(t => t.status === 'upcoming');

  return (
    <div className="min-h-screen transition-colors duration-300 dark:bg-joker-dark text-right" dir="rtl">
      <HeaderWithLogos 
        isLoggedIn={!!currentUser} 
        toggleTheme={toggleTheme} 
        isDarkMode={isDarkMode}
      />

      <main className="container mx-auto px-4 py-8">
        {/* Modern Welcoming Message for Guests */}
        {!currentUser && (
          <div className="mb-16 relative group">
            {/* Background Aesthetic Orbs */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-joker-teal/10 rounded-full blur-[80px] group-hover:bg-joker-teal/20 transition-colors duration-700"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-joker-coral/10 rounded-full blur-[80px] group-hover:bg-joker-coral/20 transition-colors duration-700"></div>
            
            <div className="bg-white/40 dark:bg-joker-gray/20 backdrop-blur-xl border border-white/50 dark:border-joker-gray/50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-joker-dark/5 relative z-10 overflow-hidden text-center md:text-right">
              {/* Decorative Corner Icon */}
              <div className="absolute top-0 left-0 bg-joker-coral/10 p-4 rounded-br-[2rem]">
                <Sparkles className="text-joker-coral animate-pulse" size={32} />
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 md:w-28 md:h-28 bg-white dark:bg-joker-dark rounded-[2rem] shadow-xl flex items-center justify-center border-2 border-joker-teal/20 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                    <img src="photos/logo.png" className="w-16 h-16 md:w-20 md:h-20 object-contain pixel-art" alt="Arena" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h2 className="text-2xl md:text-4xl font-black text-joker-dark dark:text-white mb-4 tracking-tight">
                    أهلاً بك في ساحة الجوكر 🏟️
                  </h2>
                  <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-bold leading-relaxed">
                    إنت دلوقتي في قلب الحدث! استمتع بمتابعة إنجازات أبطالنا في لجنة <span className="text-joker-coral">"الجوكرز"</span> وتابع التحديات اللي بنصنع بيها الفرق كل يوم.
                  </p>
                </div>
              </div>
              
              {/* Bottom Decorative Line */}
              <div className="mt-8 h-1 w-full bg-gradient-to-l from-joker-coral via-joker-teal to-transparent rounded-full opacity-20"></div>
            </div>
          </div>
        )}

        {currentUser && (
           <div className="mb-8 flex items-center gap-3 bg-white dark:bg-joker-gray/40 p-4 rounded-2xl border border-gray-100 dark:border-joker-gray max-w-fit mr-auto md:mr-0 ml-auto">
              <div className="w-10 h-10 rounded-full bg-joker-teal/20 flex items-center justify-center text-joker-teal">
                <LayoutDashboard size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-bold">لوحة التحكم</p>
                <p className="text-sm font-black text-joker-dark dark:text-white">أهلاً بك يا {currentUser.name.split(' ')[0]}</p>
              </div>
           </div>
        )}

        <section className="mb-20">
          <Top3Podium topMembers={liveMembers} />
          <div className="mt-16 max-w-4xl mx-auto">
             <LeaderboardTable members={liveMembers} highlightMemberId={currentUser?.id} />
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-10">
          <section>
            <h2 className="text-2xl font-black mb-6 text-joker-dark dark:text-white flex items-center gap-2">
              <span className="text-3xl">🔥</span> اللي شغال ع الساحة
            </h2>
            <div className="grid gap-5">
              {runningTasks.map(task => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-6 text-joker-dark dark:text-white flex items-center gap-2">
              <span className="text-3xl">⏳</span> تحديات جاية في الطريق
            </h2>
            <div className="grid gap-5">
              {upcomingTasks.map(task => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          </section>
        </div>

        <footer className="mt-28 py-16 border-t border-gray-100 dark:border-joker-gray flex flex-col items-center">
           <img 
             src="photos/shabab_logo.png" 
             className="w-24 h-24 object-contain mb-6 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-pointer" 
             alt="Shabab Logo"
           />
           <p className="text-gray-400 font-bold tracking-wide">
             Jokers Arena | جوكر ارينا ❤️ لجنة الجوكرز {new Date().getFullYear()}
           </p>
        </footer>
      </main>
    </div>
  );
};

export default Home;
