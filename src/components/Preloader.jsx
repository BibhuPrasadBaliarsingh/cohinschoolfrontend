import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.to('#preloader', {
        opacity: 0,
        duration: 0.6,
        onComplete: () => {
          setHidden(true);
          if (onComplete) onComplete();
        }
      });
    }, 800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div id="preloader" className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-900">
      <div className="text-center px-4">
        <div className="relative mx-auto mb-5 p-4 bg-white rounded-2xl shadow-2xl inline-block max-w-[280px]">
          <img src="/logo.png" alt="Cohen International School Logo" className="h-16 sm:h-20 w-auto object-contain mx-auto" />
        </div>
        <p className="font-display text-xl text-white tracking-wider">Cohen International School</p>
        <p className="text-gold-500 text-sm mt-1 tracking-widest uppercase">Excellence Through Harmony</p>
      </div>
    </div>
  );
}
