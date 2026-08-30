import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function TopRouteLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setLoading(true);
    setProgress(20);
    const t1 = setTimeout(() => setProgress(70), 120);
    const t2 = setTimeout(() => setProgress(95), 280);
    const t3 = setTimeout(() => setProgress(100), 420);
    const t4 = setTimeout(() => {
      setLoading(false);
      setProgress(0);
    }, 620);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [location.pathname]);

  if (!loading && progress === 0) return null;

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[99999] pointer-events-none transition-opacity duration-300 ${
        loading ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className="h-1 bg-gradient-to-r from-gold-500 via-amber-400 to-gold-300 shadow-[0_0_15px_rgba(201,162,39,0.9)] transition-[width] duration-200 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default function PageLoadingSpinner({ message = 'Loading page...' }) {
  const [dots, setDots] = useState('.');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '.' : prev + '.'));
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center bg-navy-950/80 backdrop-blur-md text-white py-16 px-4 z-50">
      <div className="relative flex flex-col items-center justify-center p-8 rounded-3xl bg-navy-900/90 border border-gold-500/30 shadow-[0_0_50px_rgba(0,0,0,0.8)] max-w-sm w-full text-center">
        <div className="relative w-20 h-20 flex items-center justify-center mb-5">
          <div className="absolute inset-0 rounded-full border-3 border-transparent border-t-gold-400 border-r-amber-500 animate-spin" />
          <div className="absolute inset-1.5 rounded-full border-3 border-transparent border-b-gold-300 border-l-amber-400 animate-spin [animation-duration:1.5s] [animation-direction:reverse]" />
          <div className="w-12 h-12 rounded-full bg-navy-950 p-2 border border-gold-400/40 flex items-center justify-center shadow-inner">
            <img src="/logo.png" alt="Cohen Logo" className="w-full h-full object-contain animate-pulse" />
          </div>
        </div>

        <h4 className="font-display text-lg font-bold text-white tracking-wide">Cohen International School</h4>

        <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping" />
          <span>
            {message} {dots}
          </span>
        </div>

        <div className="w-36 h-1 bg-navy-800 rounded-full mt-5 overflow-hidden relative">
          <div className="absolute inset-y-0 bg-gradient-to-r from-gold-400 via-amber-300 to-gold-400 w-1/2 rounded-full animate-[shimmerSlide_1.4s_infinite_linear]" />
        </div>
      </div>
    </div>
  );
}
