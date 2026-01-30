
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { Member } from './types';
import { members } from './data/members';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<Member | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    const savedUser = localStorage.getItem('joker_user');
    if (savedUser) {
      const found = members.find((m: Member) => m.id === savedUser);
      if (found) setCurrentUser(found);
    }

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const login = (id: string) => {
    const found = members.find((m: Member) => m.id === id);
    if (found) {
      setCurrentUser(found);
      localStorage.setItem('joker_user', id);
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('joker_user');
    localStorage.removeItem('role_revealed');
  };

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={currentUser ? <Navigate to="/dashboard" /> : <Login onLogin={login} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />} />
        <Route path="/arena" element={<Home currentUser={currentUser} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />} />
        <Route path="/dashboard" element={currentUser ? <Dashboard user={currentUser} onLogout={logout} toggleTheme={toggleTheme} isDarkMode={isDarkMode} /> : <Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
