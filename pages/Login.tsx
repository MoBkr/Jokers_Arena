
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { KeyRound, MessageCircle, Eye } from 'lucide-react';
import HeaderWithLogos from '../components/HeaderWithLogos';

interface LoginProps {
  onLogin: (id: string) => boolean;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Login: React.FC<LoginProps> = ({ onLogin, toggleTheme, isDarkMode }) => {
  const [memberId, setMemberId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const success = onLogin(memberId.toUpperCase());
    if (success) {
      navigate('/dashboard');
    } else {
      setError('الـ ID ده مش موجود يا بطل.. جرب تاني!');
    }
  };

  return (
    <div className="min-h-screen bg-joker-offwhite dark:bg-joker-dark transition-colors duration-300 text-right" dir="rtl">
      <HeaderWithLogos isLoggedIn={false} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      
      <div className="container mx-auto px-4 pt-8 md:pt-16 flex justify-center pb-20">
        <div className="w-full max-w-md bg-white dark:bg-joker-dark rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-joker-gray relative overflow-hidden">
          
          <div className="text-center mb-8 relative z-10">
            <div className="inline-block relative mb-6">
              <div className="p-1 bg-white dark:bg-joker-gray rounded-2xl shadow-xl border-2 border-joker-coral rotate-3 transform transition-transform hover:rotate-0 cursor-default">
                <img 
                  src="photos/logo.png" 
                  alt="Joker Logo" 
                  className="w-24 h-24 rounded-xl pixel-art joker-glow object-contain bg-white dark:bg-transparent" 
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-white dark:bg-joker-dark p-1 rounded-full shadow-lg border-2 border-joker-teal">
                <img 
                  src="photos/shabab_logo.png" 
                  className="w-8 h-8 rounded-full object-contain bg-white" 
                  alt="Certified" 
                />
              </div>
            </div>

            <h1 className="text-3xl font-black text-joker-dark dark:text-white">منور يا جوكر!</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2 font-bold italic">سجل دخولك عشان نفتحلك الطريق 🏟️</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label htmlFor="memberId" className="block text-sm font-black text-gray-700 dark:text-gray-300 mb-2 mr-1">كود العضوية (Member ID)</label>
              <div className="relative">
                <input 
                  type="text" 
                  id="memberId"
                  value={memberId}
                  onChange={(e) => setMemberId(e.target.value)}
                  placeholder="JKxxx"
                  className="w-full bg-white border border-gray-200 dark:border-joker-gray rounded-2xl px-5 py-4 text-lg font-bold focus:ring-4 focus:ring-joker-coral/20 focus:border-joker-coral outline-none transition-all text-black uppercase text-center placeholder:text-gray-300"
                  required
                />
                <KeyRound className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
              </div>
              {error && (
                <div className="mt-3 bg-red-50 text-red-500 p-3 rounded-xl text-sm font-bold text-center border border-red-100">
                  {error}
                </div>
              )}
            </div>

            <button 
              type="submit"
              className="w-full bg-joker-coral text-white py-4 rounded-2xl font-black text-xl shadow-lg shadow-joker-coral/30 hover:opacity-90 active:scale-[0.98] transition-all"
            >
              يلا بينا! 🚀
            </button>
            
            <div className="flex flex-col items-center justify-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 text-sm font-bold bg-gray-50 dark:bg-joker-gray/20 px-4 py-2 rounded-full border border-transparent dark:border-joker-gray/30">
                <MessageCircle size={16} className="text-joker-teal" />
                <span>مش عارف الـ ID؟ كلم الليدر فوراً 💬</span>
              </div>

              <div className="w-full flex items-center gap-3">
                <div className="flex-1 h-[1px] bg-gray-100 dark:bg-joker-gray"></div>
                <span className="text-xs font-bold text-gray-300">أو</span>
                <div className="flex-1 h-[1px] bg-gray-100 dark:bg-joker-gray"></div>
              </div>

              <Link 
                to="/arena" 
                className="flex items-center gap-2 text-joker-teal hover:underline font-black transition-all"
              >
                <Eye size={18} />
                تصفح الساحة كزائر (مشاهدة فقط)
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
