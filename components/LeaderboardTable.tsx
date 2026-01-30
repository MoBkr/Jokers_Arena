
import React, { useState } from 'react';
import { Member } from '../types';
import { TrendingUp, Medal, ChevronDown, ChevronUp, MoreHorizontal } from 'lucide-react';

interface LeaderboardProps {
  members: Member[];
  highlightMemberId?: string;
}

const LeaderboardTable: React.FC<LeaderboardProps> = ({ members, highlightMemberId }) => {
  const [showAll, setShowAll] = useState(false);
  
  // Filter only competitors (Members with JK prefix)
  const competitors = members.filter(m => m.id.startsWith('JK'));
  const sortedMembers = [...competitors].sort((a, b) => b.points - a.points);
  
  const top10 = sortedMembers.slice(0, 10);
  const userIndex = highlightMemberId ? sortedMembers.findIndex(m => m.id === highlightMemberId) : -1;
  const userRank = userIndex + 1;
  
  // Logic to determine what to display
  let displayMembers = showAll ? sortedMembers : top10;
  
  // If user is a competitor and not in the top 10 and we aren't showing all, we need to show them separately
  const isCompetitor = highlightMemberId?.startsWith('JK');
  const showUserRowSeparately = !showAll && isCompetitor && userRank > 10;

  return (
    <div className="bg-white dark:bg-joker-dark rounded-3xl border border-gray-100 dark:border-joker-gray overflow-hidden shadow-sm">
      <div className="p-6 border-b border-gray-100 dark:border-joker-gray flex justify-between items-center">
        <h2 className="text-xl font-black text-joker-dark dark:text-white flex items-center gap-2">
          <TrendingUp className="text-joker-teal" />
          ترتيب الجوكرز
        </h2>
        <span className="text-xs font-bold text-gray-400">آخر تحديث من شوية</span>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="bg-gray-50 dark:bg-joker-gray/30 text-gray-500 dark:text-gray-400 text-sm">
              <th className="px-6 py-4 font-black">المركز</th>
              <th className="px-6 py-4 font-black">العضو</th>
              <th className="px-6 py-4 font-black text-left">النقاط</th>
            </tr>
          </thead>
          <tbody>
            {displayMembers.map((member, index) => {
              const isMe = member.id === highlightMemberId;
              const rank = index + 1;
              
              return (
                <tr 
                  key={member.id} 
                  className={`border-b border-gray-50 dark:border-joker-gray/20 transition-colors ${isMe ? 'bg-joker-coral/5 dark:bg-joker-coral/10' : 'hover:bg-gray-50 dark:hover:bg-joker-gray/10'}`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        rank === 1 ? 'bg-yellow-100 text-yellow-600' :
                        rank === 2 ? 'bg-slate-100 text-slate-500' :
                        rank === 3 ? 'bg-orange-100 text-orange-600' :
                        'text-gray-400'
                      }`}>
                        {rank}
                      </span>
                      {rank <= 3 && <Medal size={16} className={rank === 1 ? 'text-yellow-500' : rank === 2 ? 'text-slate-400' : 'text-orange-400'} />}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className={`font-bold ${isMe ? 'text-joker-coral' : 'text-joker-dark dark:text-white'}`}>
                        {member.name} {isMe && '(أنت)'}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-left">
                    <span className="font-black text-joker-teal">{member.points.toLocaleString()}</span>
                  </td>
                </tr>
              );
            })}

            {showUserRowSeparately && (
              <>
                <tr className="bg-gray-50/50 dark:bg-joker-gray/10">
                  <td colSpan={3} className="px-6 py-2 text-center">
                    <MoreHorizontal className="inline-block text-gray-300" />
                  </td>
                </tr>
                <tr className="bg-joker-coral/5 dark:bg-joker-coral/10 border-t border-gray-100 dark:border-joker-gray">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-joker-coral">
                        {userRank}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-bold text-joker-coral">
                        {sortedMembers[userIndex].name} (أنت)
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-left">
                    <span className="font-black text-joker-teal">{sortedMembers[userIndex].points.toLocaleString()}</span>
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>

      {sortedMembers.length > 10 && (
        <div className="p-4 bg-gray-50/50 dark:bg-joker-gray/10 text-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="flex items-center justify-center gap-2 mx-auto px-6 py-2 rounded-xl text-joker-coral font-black text-sm hover:bg-joker-coral hover:text-white transition-all border border-joker-coral/20"
          >
            {showAll ? (
              <>
                <ChevronUp size={18} />
                عرض أقل
              </>
            ) : (
              <>
                <ChevronDown size={18} />
                عرض المزيد
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default LeaderboardTable;
