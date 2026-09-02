import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Newspaper
} from 'lucide-react';

// Imports from presscorner assets folder
import pressImg1 from '../assets/presscorner/cohen_official_img_6.jpg';
import pressImg2 from '../assets/presscorner/cohen_official_img_7.jpg';
import pressImg3 from '../assets/presscorner/cohen_official_img_8.jpg';
import pressImg4 from '../assets/presscorner/cohen_official_img_9.jpg';
import pressImg5 from '../assets/presscorner/cohen_official_img_10.jpg';
import pressImg6 from '../assets/presscorner/cohen_official_img_11.jpg';
import pressImg7 from '../assets/presscorner/cohen_official_img_12.jpg';
import pressImg8 from '../assets/presscorner/cohen_official_img_13.jpg';
import pressImg9 from '../assets/presscorner/cohen_official_img_14.jpg';
import pressImg10 from '../assets/presscorner/cohen_official_img_15.jpg';
import pressImg11 from '../assets/presscorner/cohen_official_img_16.jpg';
import pressImg12 from '../assets/presscorner/cohen_official_img_17.jpg';

const pressItems = [
  { id: 1, src: pressImg1, title: "Official Press Release 1" },
  { id: 2, src: pressImg2, title: "Official Press Release 2" },
  { id: 3, src: pressImg3, title: "Official Press Release 3" },
  { id: 4, src: pressImg4, title: "Official Press Release 4" },
  { id: 5, src: pressImg5, title: "Official Press Release 5" },
  { id: 6, src: pressImg6, title: "Official Press Release 6" },
  { id: 7, src: pressImg7, title: "Official Press Release 7" },
  { id: 8, src: pressImg8, title: "Official Press Release 8" },
  { id: 9, src: pressImg9, title: "Official Press Release 9" },
  { id: 10, src: pressImg10, title: "Official Press Release 10" },
  { id: 11, src: pressImg11, title: "Official Press Release 11" },
  { id: 12, src: pressImg12, title: "Official Press Release 12" }
];

export default function PressCorner() {
  const [squadIdx, setSquadIdx] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Pagination State for Press Grid
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const totalPages = Math.ceil(pressItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentGridItems = pressItems.slice(indexOfFirstItem, indexOfLastItem);

  // Automatic Carousel Autoplay
  useEffect(() => {
    if (selectedIdx !== null || isPaused) return;
    const timer = setInterval(() => {
      setSquadIdx((prev) => (prev + 1) % pressItems.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [selectedIdx, isPaused]);

  const handleNextSquad = useCallback(() => {
    setSquadIdx((prev) => (prev + 1) % pressItems.length);
  }, []);

  const handlePrevSquad = useCallback(() => {
    setSquadIdx((prev) => (prev === 0 ? pressItems.length - 1 : prev - 1));
  }, []);

  const selectedImg = selectedIdx !== null ? pressItems[selectedIdx] : null;

  const getSquadPositionIndex = (index) => {
    const total = pressItems.length;
    const diff = (index - squadIdx + total) % total;
    if (diff === 0) return 0;
    if (diff === 1 || diff === -(total - 1)) return 1;
    if (diff === total - 1 || diff === -1) return -1;
    return 99;
  };

  return (
    <section className="py-12 lg:py-16 bg-navy-950 text-white relative overflow-hidden selection:bg-rose-500 selection:text-white">

      {/* Floating Animated Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[35rem] bg-gradient-to-b from-blue-500/10 via-gold-500/10 to-transparent rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Newspaper className="w-4 h-4" /> Official Media Clippings
          </div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-wider uppercase leading-none"
          >
            PRESS <span className="bg-gradient-to-r from-gold-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent italic">CORNER</span>
          </motion.h2>
        </div>

        {/* 3D STAGE CAROUSEL */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative min-h-[280px] sm:min-h-[520px] flex flex-col justify-center items-center py-2 sm:py-4"
        >

          <div className="relative w-full max-w-5xl h-[230px] sm:h-[460px] flex items-center justify-center">

            {/* Navigation Chevrons */}
            <button
              onClick={handlePrevSquad}
              className="absolute left-1 sm:left-6 z-40 p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-600 text-white hover:bg-gold-400 hover:text-navy-950 transition-all duration-300 shadow-[0_10px_30px_rgba(37,99,235,0.6)] border border-white/20 active:scale-95 group"
              aria-label="Previous Press Release"
            >
              <ChevronLeft className="w-4 h-4 sm:w-7 sm:h-7 stroke-[3] group-hover:-translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleNextSquad}
              className="absolute right-1 sm:right-6 z-40 p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-600 text-white hover:bg-gold-400 hover:text-navy-950 transition-all duration-300 shadow-[0_10px_30px_rgba(37,99,235,0.6)] border border-white/20 active:scale-95 group"
              aria-label="Next Press Release"
            >
              <ChevronRight className="w-4 h-4 sm:w-7 sm:h-7 stroke-[3] group-hover:translate-x-1 transition-transform" />
            </button>

            {/* 3D Rendered Cards */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              {pressItems.map((item, idx) => {
                const pos = getSquadPositionIndex(idx);
                if (pos === 99) return null;

                const isCenter = pos === 0;
                const isLeft = pos === -1;
                const isRight = pos === 1;

                return (
                  <motion.div
                    key={item.id}
                    initial={false}
                    animate={{
                      x: isCenter ? 0 : isLeft ? (isMobile ? -120 : -260) : (isMobile ? 120 : 260),
                      scale: isCenter ? 1.05 : 0.75,
                      rotateY: isCenter ? 0 : isLeft ? 15 : -15,
                      opacity: isCenter ? 1 : 0.5,
                      zIndex: isCenter ? 30 : 10,
                    }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    onClick={() => {
                      if (isLeft) handlePrevSquad();
                      else if (isRight) handleNextSquad();
                      else setSelectedIdx(idx);
                    }}
                    className={`absolute w-[220px] sm:w-[380px] md:w-[440px] aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-2xl border-2 transition-all ${
                      isCenter
                        ? "border-gold-400 shadow-[0_25px_70px_rgba(201,162,39,0.4)]"
                        : "border-white/20 shadow-xl"
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

        {/* PRESS GRID SECTION WITH PAGINATION */}
        <div id="press-grid" className="mt-16 pt-12 border-t border-white/10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-bold uppercase tracking-wider mb-2 border border-gold-400/30">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" /> Newspaper &amp; Media Clippings
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                Newspaper Releases &amp; Coverage
              </h3>
            </div>
          </div>

          {/* Photo Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentGridItems.map((item) => {
              const globalIdx = pressItems.findIndex(g => g.id === item.id);
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedIdx(globalIdx >= 0 ? globalIdx : 0)}
                  className="group relative bg-navy-900 rounded-2xl overflow-hidden shadow-lg border border-white/10 cursor-pointer hover:border-gold-400/60 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-black relative">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="p-3 rounded-full bg-white/90 text-navy-950 shadow-xl group-hover:scale-110 transition-transform">
                        <Maximize2 className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Pagination Bar */}
          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-end gap-1.5 font-sans">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/20 text-white/70 hover:bg-white/10 disabled:opacity-40 disabled:hover:bg-transparent transition text-xs font-semibold"
                aria-label="Previous Page"
              >
                ‹
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-9 h-9 flex items-center justify-center rounded-lg text-xs font-bold transition-all ${
                    currentPage === pageNum
                      ? "bg-[#007BFF] text-white shadow-md"
                      : "border border-white/20 text-white/80 hover:bg-white/10"
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/20 text-white/70 hover:bg-white/10 disabled:opacity-40 disabled:hover:bg-transparent transition text-xs font-semibold"
                aria-label="Next Page"
              >
                ›
              </button>
            </div>
          )}

        </div>

      </div>

      {/* Lightbox Cinema Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-navy-950/95 backdrop-blur-2xl flex items-center justify-center p-4"
            onClick={() => setSelectedIdx(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full bg-black/90 rounded-3xl overflow-hidden border border-gold-500/40 shadow-2xl flex flex-col items-center justify-center p-2 sm:p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedIdx(null)}
                className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-navy-950/80 text-white hover:bg-gold-500 hover:text-navy-950 transition border border-white/20 shadow-xl"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full flex items-center justify-center min-h-[300px] max-h-[85vh]">
                <img src={selectedImg.src} alt="Press Clipping" className="w-full h-full object-contain max-h-[82vh] rounded-2xl" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
