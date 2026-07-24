import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserIcon, KeyIcon } from '../components/Icons';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const inputRef = useRef(null);

  // Hook 1: useEffect - checks user status and focus handling
  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      navigate('/home');
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [navigate]);

  // Hook 2: useMemo - validation state
  const isFormValid = useMemo(() => {
    return email.includes('@') && password.length >= 6;
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Fetch existing users from local storage
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Login mode validation
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      setError('Invalid email or password.');
      return;
    }

    // Save to current user session
    localStorage.setItem('currentUser', JSON.stringify(user));
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="simple-card p-8 shadow-xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-600 text-white font-bold mb-4">
              IN
            </div>
            <h1 className="text-2xl font-bold text-white">Welcome Back Reader</h1>
            <p className="text-slate-400 text-sm mt-1">
              Log in to access your curated newsfeed
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                  <span className="text-indigo-400 text-base font-semibold">@</span>
                </div>
                <input
                  ref={inputRef}
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                  <KeyIcon className="w-5 h-5 text-indigo-400" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                />
              </div>
            </div>

            {error && (
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 p-3 rounded-lg text-sm font-medium">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-2.5 rounded-lg font-bold transition duration-200 ${
                isFormValid
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer'
                  : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed'
              }`}
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-400 border-t border-slate-700 pt-4">
            Don't have an account yet?{' '}
            <Link
              to="/register"
              className="text-indigo-400 hover:text-indigo-300 font-bold hover:underline ml-1"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
