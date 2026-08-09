import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, Home, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function UnauthorizedPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-lg w-full bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-2xl text-center">
        <div className="w-20 h-20 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center mx-auto mb-6 text-rose-400">
          <ShieldAlert className="w-10 h-10" />
        </div>

        <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold uppercase tracking-wider mb-4 inline-block">
          403 Access Forbidden
        </span>

        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-3">
          Restricted Resource
        </h1>

        <p className="text-white/70 text-sm leading-relaxed mb-6">
          Your current account role <strong className="text-gold-400 uppercase font-semibold">({user?.role || 'Guest'})</strong> does not have permission to access this protected area.
        </p>

        {user && (
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-8 text-left text-xs space-y-1.5 text-white/80">
            <p><span className="text-white/50">Logged in as:</span> <strong className="text-white">{user.name}</strong></p>
            <p><span className="text-white/50">Email:</span> {user.email}</p>
            <p><span className="text-white/50">Assigned Role:</span> <span className="capitalize text-gold-400 font-semibold">{user.role}</span></p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition border border-white/20 flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Go Back
          </button>
          <Link
            to="/"
            className="px-6 py-3 rounded-full bg-gold-500 hover:bg-gold-400 text-navy-950 text-sm font-bold transition shadow-lg flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" /> Return Home
          </Link>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10">
          <button
            onClick={logout}
            className="text-xs text-white/50 hover:text-rose-400 transition flex items-center gap-1.5 mx-auto"
          >
            <LogOut className="w-3.5 h-3.5" /> Log in with a different account
          </button>
        </div>
      </div>
    </div>
  );
}
