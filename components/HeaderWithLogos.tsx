
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogIn, LogOut, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  isLoggedIn: boolean;
  onLogout?: () => void;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const HeaderWithLogos: React.FC<HeaderProps> = ({ isLoggedIn, onLogout, toggleTheme, isDarkMode }) => {
  const location = useLocation();
  const logoLink = isLoggedIn ? "/dashboard" : "/";

  return (
    <header className="bg-white dark:bg-joker-dark border-b border-gray-100 dark:border-joker-gray sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Organization Logo (Shabab) */}
          <Link to={logoLink} className="transition-transform hover:scale-105 block">
            <img 
              src="photos/shabab_logo.png" 
              alt="شباب بتساعد شباب" 
              className="w-12 h-12 rounded-xl object-contain bg-white dark:bg-transparent"
            />
          </Link>
          
          <div className="h-8 w-[2px] bg-gradient-to-b from-transparent via-gray-200 dark:via-joker-gray to-transparent"></div>
          
          {/* Joker Branding Logo */}
          <Link to={logoLink} className="hover:scale-105 transition-transform block">
            <img 
              src="photos/logo.png" 
              alt="الجوكر" 
              className="w-12 h-12 rounded-xl pixel-art joker-glow joker-glow-pulse object-contain border-2 border-joker-coral bg-white dark:bg-transparent transition-all duration-300"
            />
          </Link>
        </div>

        {/* Brand Text */}
        <Link to={logoLink} className="hidden sm:flex items-center gap-1 text-2xl md:text-3xl font-black uppercase tracking-tighter select-none" dir="ltr">
          <span className="text-joker-dark dark:text-white">JOKERS</span>
          <span className="text-joker-coral live-indicator">ARENA</span>
        </Link>

        <div className="flex items-center gap-3">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-joker-gray transition-colors text-gray-600 dark:text-gray-300"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          {isLoggedIn ? (
            <button 
              onClick={onLogout}
              className="flex items-center gap-2 bg-red-50 text-red-500 px-4 py-2 rounded-xl font-bold hover:bg-red-100 transition-colors"
            >
              <LogOut size={18} />
              <span className="hidden md:inline">خروج</span>
            </button>
          ) : (
            location.pathname !== "/" && (
              <Link 
                to="/"
                className="flex items-center gap-2 bg-joker-coral text-white px-4 py-2 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-lg shadow-joker-coral/20"
              >
                <LogIn size={18} />
                <span className="hidden md:inline">دخول الأعضاء</span>
              </Link>
            )
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderWithLogos;
