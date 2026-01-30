
import React from 'react';
import { Member } from '../types';
import { Trophy, Medal, Star } from 'lucide-react';

interface Top3Props {
  topMembers: Member[];
}

const Top3Podium: React.FC<Top3Props> = ({ topMembers }) => {
  // Filter for competitors (JK only) then sort
  const competitors = topMembers.filter(m => m.id.startsWith('JK'));
  const sorted = [...competitors].sort((a, b) => b.points - a.points).slice(0, 3);
  
  if (sorted.length < 3) return null;

  // Reorder for Podium: 2nd, 1st, 3rd
  const podiumOrder = [sorted[1], sorted[0], sorted[2]];

  return (
    <div className="flex flex-col items-center my-12">
      <h2 className="text-3xl md:text-5xl font-black mb-16 text-joker-dark dark:text-white flex flex-col items-center gap-2 text-center px-4 tracking-tight">
        <span className="text-joker-coral text-xs md:text-sm uppercase tracking-[0.4em] font-bold mb-3 opacity-70">The Elite Ranking</span>
        <span className="relative inline-block">
          التوب جوكرز 👑
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-transparent via-joker-coral to-transparent rounded-full"></span>
        </span>
      </h2>
      
      <div className="flex items-end justify-center gap-2 md:gap-8 w-full max-w-4xl px-4">
        {/* 2nd Place */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-slate-100 dark:bg-joker-gray border-4 border-slate-300 flex items-center justify-center relative shadow-lg group-hover:scale-105 transition-transform">
             <Medal className="text-slate-400" size={40} />
             <div className="absolute -bottom-2 -right-2 bg-slate-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 border-white">2</div>
          </div>
          <div className="mt-4 text-center">
            <p className="font-bold text-joker-dark dark:text-white truncate max-w-[80px] md:max-w-none">{podiumOrder[0].name.split(' ')[0]}</p>
            <p className="text-xs md:text-sm text-joker-teal font-bold">{podiumOrder[0].points} نقطة</p>
          </div>
          <div className="w-20 md:w-32 h-20 md:h-28 bg-slate-200 dark:bg-joker-gray mt-2 rounded-t-2xl shadow-inner flex items-center justify-center border-t-2 border-slate-300">
             <span className="text-3xl font-black text-slate-400">2</span>
          </div>
        </div>

        {/* 1st Place */}
        <div className="flex flex-col items-center group -mb-4 z-10">
          <div className="mb-2 animate-bounce flex items-center justify-center">
             <span className="text-4xl md:text-6xl drop-shadow-xl select-none" role="img" aria-label="Crown">👑</span>
          </div>
          <div className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-yellow-50 dark:bg-joker-gray border-4 border-yellow-400 flex items-center justify-center relative shadow-xl group-hover:scale-110 transition-transform">
             <Trophy className="text-yellow-500" size={50} />
             <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 border-white">1</div>
          </div>
          <div className="mt-4 text-center">
            <p className="font-black text-lg md:text-xl text-joker-dark dark:text-white">{podiumOrder[1].name.split(' ')[0]}</p>
            <p className="text-sm md:text-lg text-joker-coral font-bold">{podiumOrder[1].points} نقطة</p>
          </div>
          <div className="w-28 md:w-44 h-28 md:h-44 bg-yellow-100 dark:bg-joker-gray mt-2 rounded-t-3xl shadow-inner flex flex-col items-center justify-center border-x-4 border-t-4 border-yellow-200">
             <Star className="text-yellow-500 animate-pulse mb-2" />
             <span className="text-5xl md:text-7xl font-black text-yellow-500">1</span>
          </div>
        </div>

        {/* 3rd Place */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-orange-50 dark:bg-joker-gray border-4 border-orange-300 flex items-center justify-center relative shadow-lg group-hover:scale-105 transition-transform">
             <Medal className="text-orange-500" size={40} />
             <div className="absolute -bottom-2 -right-2 bg-orange-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 border-white">3</div>
          </div>
          <div className="mt-4 text-center">
            <p className="font-bold text-joker-dark dark:text-white truncate max-w-[80px] md:max-w-none">{podiumOrder[2].name.split(' ')[0]}</p>
            <p className="text-xs md:text-sm text-joker-teal font-bold">{podiumOrder[2].points} نقطة</p>
          </div>
          <div className="w-20 md:w-32 h-16 md:h-24 bg-orange-100 dark:bg-joker-gray mt-2 rounded-t-2xl shadow-inner flex items-center justify-center border-t-2 border-orange-200">
             <span className="text-3xl font-black text-orange-400">3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top3Podium;
