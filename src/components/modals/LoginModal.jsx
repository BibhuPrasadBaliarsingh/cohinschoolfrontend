import React, { useState } from 'react';
import { X, LogIn, Loader2 } from 'lucide-react';
import { portalTheme } from '../../constants/modalData';

export default function LoginModal({ closeModal, openLoginModal, openPortalFrame, activeKey = 'parent' }) {
  const [loginSubmitting, setLoginSubmitting] = useState(false);
  const p = portalTheme[activeKey] || portalTheme.parent;

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
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 modal-backdrop"
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-modal-title"
    >
      <div
        className="glass-dark rounded-3xl w-full max-w-md shadow-2xl border border-gold-500/20 overflow-hidden max-h-[92vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
          <img src="/bg.png" alt="" className="w-full h-full object-cover object-center" />
        </div>
        <div className="px-5 sm:px-6 py-5 flex items-center justify-between border-b border-white/10 bg-navy-950/60 relative z-10">
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
            className="text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition flex-shrink-0 focus-visible:ring-2 focus-visible:ring-gold-400"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="px-5 sm:px-6 pt-5 grid grid-cols-6 gap-1.5 sm:gap-2 relative z-10">
          {Object.keys(portalTheme).map((key) => {
            const t = portalTheme[key];
            const active = key === activeKey;
            return (
              <button
                key={key}
                type="button"
                onClick={() => openLoginModal(key)}
                title={t.title}
                aria-label={`Select ${t.title}`}
                className={`flex flex-col items-center gap-1.5 p-2.5 rounded-xl border transition ${
                  active
                    ? `bg-${t.color}-500/20 border-${t.color}-400/60`
                    : 'bg-white/5 border-white/10 hover:border-white/25 hover:bg-white/10'
                }`}
              >
                <span className={`text-[10px] font-semibold ${active ? 'text-gold-400 font-bold' : 'text-white/70'} leading-tight text-center`}>
                  {t.title.replace(' Portal', '')}
                </span>
              </button>
            );
          })}
        </div>

        <form className="p-5 sm:p-6 space-y-4 relative z-10" onSubmit={handleLoginSubmit}>
          <div>
            <label htmlFor="login-username-input" className="text-xs font-semibold text-white/90 block mb-1">
              {p.idLabel} *
            </label>
            <input
              id="login-username-input"
              required
              type="text"
              placeholder="Enter authorized user ID / email"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400/60"
            />
          </div>
          <div>
            <label htmlFor="login-password-input" className="text-xs font-semibold text-white/90 block mb-1">
              Password *
            </label>
            <input
              id="login-password-input"
              required
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400/60"
            />
          </div>

          <div className="flex items-center justify-between text-[11px]">
            <label htmlFor="login-remember-me" className="flex items-center gap-2 text-white/70 cursor-pointer">
              <input id="login-remember-me" type="checkbox" className="rounded border-white/30 bg-white/10" /> Remember me
            </label>
            <button
              type="button"
              onClick={() => {
                alert('Password reset link would be sent to your registered email/mobile.');
              }}
              className="text-gold-400 hover:text-gold-300 focus-visible:underline"
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
  );
}
