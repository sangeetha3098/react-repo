import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOutIcon, UserIcon } from './Icons';

export const Navbar = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  if (!currentUser) return null;

  return (
    <nav className="sticky top-0 z-50 glass-panel bg-slate-900/80 border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
      <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/home')}>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-rose-500 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
          IN
        </div>
        <div>
          <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
            INDIA NEWS
          </span>
          <span className="text-[10px] block text-indigo-400 font-semibold tracking-widest uppercase">

          </span>
        </div>
      </div>

      <div className="flex items-center space-x-4 md:space-x-6">
        <div className="flex items-center space-x-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 text-sm">
          <UserIcon className="w-4 h-4 text-indigo-400" />
          <span className="font-medium text-white/90">{currentUser.name}</span>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center space-x-2 bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white border border-rose-500/20 hover:border-rose-500 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300"
        >
          <LogOutIcon className="w-4 h-4" />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
