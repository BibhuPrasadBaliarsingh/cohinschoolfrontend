import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }) {
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 5;
      });
    }, 25);

    const timer = setTimeout(() => {
      gsap.to('#preloader', {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: () => {
          setHidden(true);
          if (onComplete) onComplete();
        }
      });
    }, 700);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div
      id="preloader"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050D16] text-white selection:bg-gold-500"
    >
      <div className="relative flex flex-col items-center justify-center p-6 text-center">
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center mb-6">
          <div
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-gold-400 border-r-gold-500/60 animate-spin shadow-[0_0_30px_rgba(201,162,39,0.3)]"
            style={{ animationDuration: '1.1s' }}
          />

          <div
            className="absolute inset-2 sm:inset-3 rounded-full border-4 border-transparent border-b-amber-400 border-l-gold-300 animate-spin"
            style={{ animationDuration: '1.6s', animationDirection: 'reverse' }}
          />

          <div className="absolute inset-4 rounded-full bg-navy-900/90 backdrop-blur-md border border-gold-500/40 flex items-center justify-center shadow-2xl p-3 sm:p-4">
            <img
              src="/logo.png"
              alt="Cohen International School Logo"
              className="h-12 sm:h-16 w-auto object-contain animate-pulse"
              style={{ animationDuration: '2s' }}
            />
          </div>
        </div>

        <h2 className="font-display text-xl sm:text-2xl text-white font-bold tracking-wide">Cohen International School</h2>
        <p className="text-gold-400 text-xs sm:text-sm mt-1 font-semibold uppercase tracking-widest">Enabling Excellence, Through Harmony</p>

        <div className="w-48 sm:w-56 mt-5">
          <div className="h-1.5 w-full bg-navy-800 rounded-full overflow-hidden border border-white/10">
            <div
              className="h-full bg-gradient-to-r from-gold-500 via-amber-400 to-amber-300 transition-[width] duration-150 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-[11px] text-gold-300/80 mt-2 font-mono tracking-wider">Loading {progress}%</p>
        </div>
      </div>
    </div>
  );
}
