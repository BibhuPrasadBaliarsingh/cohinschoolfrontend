import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [showButton, setShowButton] = useState(false);

  // Restore scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Monitor scroll position to show/hide move to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showButton && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Move to top"
          title="Move to top"
          className="fixed bottom-24 right-7 z-50 p-3 sm:p-3.5 rounded-full bg-gradient-to-r from-gold-400 to-amber-500 text-navy-950 shadow-2xl hover:shadow-gold-500/50 hover:scale-110 active:scale-95 transition-all duration-300 border border-gold-300 flex items-center justify-center group"
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-navy-950 font-bold group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </>
  );
}
