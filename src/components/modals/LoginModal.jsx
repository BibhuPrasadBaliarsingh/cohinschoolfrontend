import React, { useState } from 'react';
import { X, LogIn, Loader2, Mail, Lock, Eye, EyeOff, CheckCircle2 } from 'lucide-react';
import { portalTheme } from '../../constants/modalData';

const PORTALS = [
  { key: 'parent', title: 'Parent Desk', desc: 'Fees, Attendance, Progress' },
  { key: 'student', title: 'Student Desk', desc: 'LMS, Exams, Homework' },
  { key: 'teacher', title: 'Faculty Desk', desc: 'Marks, Assignments, Diary' },
  { key: 'principal', title: 'Executive Desk', desc: 'School Insights, Admin' },
  { key: 'admin', title: 'Admin ERP Desk', desc: 'Master Controls & ERP' }
];

export default function LoginModal({ closeModal, openLoginModal, openPortalFrame, activeKey = 'parent' }) {
  const [loginSubmitting, setLoginSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const p = portalTheme[activeKey] || portalTheme.parent;

  const handlePortalSelect = (key) => {
    setLoginError('');
    if (openLoginModal) openLoginModal(key);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginSubmitting) return;
    setLoginSubmitting(true);
    const timer = setTimeout(() => {
      setLoginSubmitting(false);
      openPortalFrame(activeKey);
    }, 700);
    return () => clearTimeout(timer);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 modal-backdrop bg-navy-950/80 backdrop-blur-sm animate-fadeIn"
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-modal-title"
    >
      <div
        className="glass-dark rounded-3xl w-full max-w-md shadow-2xl border border-gold-500/20 overflow-hidden max-h-[92vh] flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
          <img src="/bg.png" alt="" className="w-full h-full object-cover object-center" />
        </div>
        
        {/* Modal Header */}
        <div className="px-5 sm:px-6 py-5 flex items-center justify-between border-b border-white/10 bg-navy-950/60 relative z-10 flex-shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="bg-white px-2 py-1 rounded-xl shadow flex-shrink-0">
              <img src="/logo.png" alt="Cohen Logo" className="h-7 w-auto object-contain" />
            </div>
            <div className="min-w-0">
              <h3 id="login-modal-title" className="font-display text-base sm:text-lg text-white font-semibold truncate">
                CIS Digital Campus Login
              </h3>
              <p className="text-[11px] text-gold-400">Choose your portal &amp; sign in</p>
            </div>
          </div>
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close modal"
            className="p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto flex-1 relative z-10">
          {/* Portal Pills */}
          <div className="p-4 sm:p-5 border-b border-white/10 bg-white/5">
            <p className="text-xs text-white/60 mb-2 font-medium">Select Access Role:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {PORTALS.map((portal) => (
                <button
                  key={portal.key}
                  type="button"
                  onClick={() => handlePortalSelect(portal.key)}
                  className={`p-2.5 rounded-xl border text-left transition flex flex-col justify-between cursor-pointer ${
                    activeKey === portal.key
                      ? 'bg-gold-500/20 border-gold-400 text-white shadow-sm'
                      : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-xs text-gold-400">{portal.title}</span>
                    {activeKey === portal.key && <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />}
                  </div>
                  <span className="text-[10px] text-white/50 truncate">{portal.desc}</span>
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleLoginSubmit} className="p-5 sm:p-6 space-y-4">
            {loginError && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500 flex-shrink-0" />
                {loginError}
              </div>
            )}

            <div>
              <label htmlFor="login-email" className="block text-xs font-semibold text-white/80 mb-1">
                Email Address / User ID
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="login-email"
                  type="email"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder={`enter ${p.title.toLowerCase()} email`}
                  className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-gold-400"
                />
              </div>
            </div>

            <div>
              <label htmlFor="login-password" className="block text-xs font-semibold text-white/80 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-gold-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px]">
              <label htmlFor="login-remember" className="flex items-center gap-2 text-white/70 cursor-pointer">
                <input id="login-remember" type="checkbox" className="rounded border-white/30 bg-white/10" /> Remember me
              </label>
              <button
                type="button"
                onClick={() => {
                  alert('Password reset link would be sent to your registered email/mobile.');
                }}
                className="text-gold-400 hover:text-gold-300 hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loginSubmitting}
              className="w-full py-3.5 bg-gold-500 text-navy-900 font-semibold rounded-2xl hover:bg-gold-400 transition flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
            >
              {loginSubmitting ? (
                <>
                  <Loader2 className="w-4.5 h-4.5 animate-spin" /> Authenticating...
                </>
              ) : (
                <>
                  <LogIn className="w-4.5 h-4.5" /> Login to {p.title}
                </>
              )}
            </button>
            <p className="text-[11px] text-center text-white/50">Secured &amp; encrypted • CIS Digital Campus</p>
          </form>
        </div>
      </div>
    </div>
  );
}
