import React, { useState } from 'react';
import { ArrowRight, Image as ImageIcon, Video, Sparkles, X, ChevronLeft, ChevronRight, Maximize2, Heart, Award, Camera, Layers } from 'lucide-react';

import img3605 from '../assets/DSC03605.JPG';
import img3611 from '../assets/DSC03611.JPG';
import img3613 from '../assets/DSC03613.JPG';
import img3616 from '../assets/DSC03616.JPG';
import img3622 from '../assets/DSC03622.JPG';
import img3624 from '../assets/DSC03624.JPG';
import img3625 from '../assets/DSC03625.JPG';
import img3653 from '../assets/DSC03653.JPG';
import img3660 from '../assets/DSC03660.JPG';
import img3671 from '../assets/DSC03671.JPG';
import img3681 from '../assets/DSC03681.JPG';
import img3684 from '../assets/DSC03684.JPG';

const categories = [
  "All",
  "Campus Infrastructure",
  "Academics",
  "Innovation Lab",
  "Sports Arena",
  "Cultural & Events"
];

const galleryItems = [
  {
    id: 1,
    title: "Main School Entrance & Green Campus",
    category: "Campus Infrastructure",
    src: img3605,
    span: "col-span-2 row-span-2 h-80 md:h-96"
  },
  {
    id: 2,
    title: "Smart Classroom Interactive Session",
    category: "Academics",
    src: img3611,
    span: "h-44 md:h-48"
  },
  {
    id: 3,
    title: "AI & Aerospace Robotics Studio",
    category: "Innovation Lab",
    src: img3613,
    span: "h-44 md:h-48"
  },
  {
    id: 4,
    title: "Science & Physics Research Lab",
    category: "Innovation Lab",
    src: img3616,
    span: "h-44 md:h-48"
  },
  {
    id: 5,
    title: "Annual Sports Complex & Athletics Track",
    category: "Sports Arena",
    src: img3622,
    span: "h-44 md:h-48"
  },
  {
    id: 6,
    title: "Cambridge English Language Speech Lab",
    category: "Academics",
    src: img3624,
    span: "h-44 md:h-48"
  },
  {
    id: 7,
    title: "Vidwan Integrated JEE & NEET Prep Centre",
    category: "Academics",
    src: img3625,
    span: "h-44 md:h-48"
  },
  {
    id: 8,
    title: "Hostel Boarding & Dining Complex",
    category: "Campus Infrastructure",
    src: img3653,
    span: "h-44 md:h-48"
  },
  {
    id: 9,
    title: "Cohen Talks & Seminar Auditorium",
    category: "Cultural & Events",
    src: img3660,
    span: "h-44 md:h-48"
  },
  {
    id: 10,
    title: "Classroom Collaborative Project Work",
    category: "Academics",
    src: img3671,
    span: "h-44 md:h-48"
  },
  {
    id: 11,
    title: "E-Library & Digital Resource Centre",
    category: "Campus Infrastructure",
    src: img3681,
    span: "h-44 md:h-48"
  },
  {
    id: 12,
    title: "RouteSafe Fleet & Transport Station",
    category: "Campus Infrastructure",
    src: img3684,
    span: "h-44 md:h-48"
  }
];

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [likes, setLikes] = useState({});

  const toggleLike = (e, id) => {
    e.stopPropagation();
    setLikes(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const filteredItems = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const handleNext = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((prev) => (prev + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
    }
  };

  const selectedImg = selectedIdx !== null ? filteredItems[selectedIdx] : null;

  return (
    <section className="py-20 sm:py-24 bg-cream-100 border-t border-cream-200 relative overflow-hidden">
      {/* Floating Animated Parachute, Paper Plane & Nature Leaf Elements */}
      <style>{`
        @keyframes floatParachuteG {
          0% { transform: translateY(-30px) translateX(0px) rotate(-4deg); opacity: 0.3; }
          50% { transform: translateY(140px) translateX(-20px) rotate(6deg); opacity: 0.9; }
          100% { transform: translateY(280px) translateX(15px) rotate(-4deg); opacity: 0.3; }
        }
        @keyframes floatLeafG {
          0% { transform: translateY(80px) translateX(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-120px) translateX(22px) rotate(90deg); opacity: 0.9; }
          100% { transform: translateY(-240px) translateX(-15px) rotate(180deg); opacity: 0.3; }
        }
        @keyframes floatPlaneG {
          0% { transform: translateY(120px) translateX(-20px) rotate(-15deg); opacity: 0.2; }
          50% { transform: translateY(-40px) translateX(30px) rotate(10deg); opacity: 0.9; }
          100% { transform: translateY(-200px) translateX(-25px) rotate(-20deg); opacity: 0.2; }
        }
        .animate-para-g { animation: floatParachuteG 14s ease-in-out infinite alternate; }
        .animate-leaf-g { animation: floatLeafG 12s ease-in-out infinite; }
        .animate-plane-g { animation: floatPlaneG 15s ease-in-out infinite; }
      `}</style>

      {/* Floating Elements on Margins */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden sm:block overflow-hidden">
        {/* Floating Parachute */}
        <div className="absolute top-[10%] left-[2%] w-12 animate-para-g opacity-85">
          <svg viewBox="0 0 60 80" className="w-full h-auto filter drop-shadow-md">
            <defs>
              <linearGradient id="gal-para-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF4D6D" />
                <stop offset="50%" stopColor="#FFB703" />
                <stop offset="100%" stopColor="#00F5D4" />
              </linearGradient>
            </defs>
            <path d="M5,35 A25,25 0 0,1 55,35 Z" fill="url(#gal-para-grad)" />
            <line x1="5" y1="35" x2="27" y2="60" stroke="#718096" strokeWidth="1.2" />
            <line x1="17.5" y1="35" x2="28.5" y2="60" stroke="#718096" strokeWidth="1.2" />
            <line x1="42.5" y1="35" x2="31.5" y2="60" stroke="#718096" strokeWidth="1.2" />
            <line x1="55" y1="35" x2="33" y2="60" stroke="#718096" strokeWidth="1.2" />
            <rect x="25" y="60" width="10" height="8" rx="2" fill="#D97706" />
          </svg>
        </div>

        {/* Paper Air Plane */}
        <div className="absolute top-[42%] left-[1.5%] w-10 animate-plane-g opacity-80" style={{ animationDelay: '1s' }}>
          <svg viewBox="0 0 50 50" className="w-full h-auto filter drop-shadow-md">
            <path d="M2,24 L46,2 L28,46 L22,30 Z" fill="#E8C547" opacity="0.9" />
            <path d="M22,30 L46,2 L28,46 Z" fill="#C9A227" opacity="0.8" />
          </svg>
        </div>

        {/* Floating Green Leaf */}
        <div className="absolute top-[60%] right-[2.5%] w-8 animate-leaf-g opacity-85" style={{ animationDelay: '2s' }}>
          <svg viewBox="0 0 40 50" className="w-full h-auto filter drop-shadow-sm">
            <defs>
              <linearGradient id="gal-leaf-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#52B788" />
                <stop offset="100%" stopColor="#1B4332" />
              </linearGradient>
            </defs>
            <path d="M20,2 C32,10 38,24 20,44 C2,24 8,10 20,2 Z" fill="url(#gal-leaf-grad)" />
            <path d="M20,2 Q20,23 20,44" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" />
            <path d="M20,44 Q20,48 18,50" stroke="#1B4332" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" /> Campus Gallery &amp; Press Corner
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy-900 font-bold">
              Moments That Matter at CIS
            </h2>
            <p className="text-navy-700/75 text-sm sm:text-base mt-2 max-w-xl">
              Explore real high-definition captures of our 10-acre campus, smart classrooms, labs, sports facilities, and events.
            </p>
          </div>

          {/* Mini Stats Highlights Strip */}
          <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-2xl border border-cream-300 shadow-sm text-xs font-semibold text-navy-900">
            <span className="flex items-center gap-1.5 text-gold-600">
              <Camera className="w-4 h-4" /> 500+ HD Captures
            </span>
            <span className="text-cream-400">•</span>
            <span className="flex items-center gap-1.5 text-emerald-600">
              <Layers className="w-4 h-4" /> 10 Acres
            </span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-navy-900 text-gold-400 shadow-md scale-105'
                  : 'bg-white text-navy-800 border border-cream-300 hover:border-gold-500/50 hover:bg-cream-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedIdx(idx)}
              className={`rounded-3xl overflow-hidden shadow-lg border border-cream-300 hover:border-gold-500/80 relative group cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl ${
                item.span || 'h-44 md:h-48'
              }`}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                <div className="flex items-center justify-between">
                  {/* Heart / Like Button */}
                  <button
                    onClick={(e) => toggleLike(e, item.id)}
                    className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-white hover:bg-rose-500 hover:text-white transition flex items-center gap-1 border border-white/30"
                  >
                    <Heart className={`w-3.5 h-3.5 ${likes[item.id] ? 'fill-rose-500 text-rose-500' : 'text-white'}`} />
                    <span>{likes[item.id] || 0}</span>
                  </button>

                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                    <Maximize2 className="w-4 h-4 text-gold-400" />
                  </div>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-gold-400 bg-navy-950/80 px-2.5 py-1 rounded-full w-fit mb-1 inline-block border border-gold-500/30">
                    {item.category}
                  </span>
                  <h4 className="font-bold text-xs sm:text-sm text-white leading-tight">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Image Modal Lightbox with Prev/Next Navigation */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] bg-navy-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedIdx(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-navy-900 rounded-3xl overflow-hidden border border-gold-500/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-navy-950/80 text-white hover:bg-gold-500 hover:text-navy-950 transition border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-navy-950/80 text-white hover:bg-gold-500 hover:text-navy-950 transition border border-white/10 shadow-xl"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-navy-950/80 text-white hover:bg-gold-500 hover:text-navy-950 transition border border-white/10 shadow-xl"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="max-h-[72vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={selectedImg.src}
                alt={selectedImg.title}
                className="w-full h-full object-contain max-h-[72vh]"
              />
            </div>
            <div className="p-5 bg-navy-950 text-white flex justify-between items-center border-t border-white/10">
              <div>
                <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">
                  {selectedImg.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold mt-0.5">{selectedImg.title}</h3>
              </div>
              <span className="text-xs text-white/50 font-medium">
                {selectedIdx + 1} of {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
