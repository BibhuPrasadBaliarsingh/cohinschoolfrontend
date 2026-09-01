import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin
} from 'lucide-react';

import img3604 from '../assets/DSC03604.JPG';
import img3605 from '../assets/DSC03605.JPG';
import img3611 from '../assets/DSC03611.JPG';
import img3612 from '../assets/DSC03612.JPG';
import img3613 from '../assets/DSC03613.JPG';
import img3616 from '../assets/DSC03616.JPG';
import img3620 from '../assets/DSC03620.JPG';
import img3622 from '../assets/DSC03622.JPG';
import img3624 from '../assets/DSC03624.JPG';
import img3625 from '../assets/DSC03625.JPG';
import img3653 from '../assets/DSC03653.JPG';
import img3660 from '../assets/DSC03660.JPG';
import img3671 from '../assets/DSC03671.JPG';
import img3681 from '../assets/DSC03681.JPG';
import img3684 from '../assets/DSC03684.JPG';

const galleryItems = [
  {
    id: 1,
    title: "Main Campus Gateway & Botanical Sanctuary",
    category: "Campus Infrastructure",
    src: img3605,
    location: "Central Campus Quad",
    tag: "CAPTAIN SQUAD",
    stat: "10-Acre Sanctuary",
    resolution: "4K UHD",
    description: "Expansive 10-acre eco-conscious architectural landscape with lush green lawns and state-of-the-art security entrances."
  },
  {
    id: 2,
    title: "AI & Aerospace Robotics Hub",
    category: "Innovation Lab",
    src: img3613,
    location: "Tech Innovation Pavilion",
    tag: "STRIKER LAB",
    stat: "3D Printers & AI",
    resolution: "4K UHD",
    description: "Hands-on stem workspace equipping students with robotics kits, 3D printers, and artificial intelligence simulation modules."
  },
  {
    id: 3,
    title: "Football & Athletic Playgrounds",
    category: "Sports Arena",
    src: img3653,
    location: "Athletics Complex",
    tag: "CHAMPION TURF",
    stat: "Grass Football Field",
    resolution: "4K UHD",
    description: "Lush green grass football field and athletic playground supporting soccer matches, athletic training, and physical conditioning."
  },
  {
    id: 4,
    title: "Interactive Smart Tech Studio",
    category: "Academics",
    src: img3611,
    location: "Academic Block A",
    tag: "SMART CLASS",
    stat: "Dual 4K Displays",
    resolution: "HD 1080p",
    description: "Technology-enabled classrooms fitted with interactive smart boards, dual display setups, and ergonomic modular seating."
  },
  {
    id: 5,
    title: "Advanced Physics & Science Research Lab",
    category: "Innovation Lab",
    src: img3616,
    location: "Science Complex",
    tag: "RESEARCH WING",
    stat: "National Olympiad",
    resolution: "HD 1080p",
    description: "Precision-calibrated lab equipment fostering scientific inquiry, practical experiments, and national research olympiads."
  },
  {
    id: 6,
    title: "Cohen Talks Grand Auditorium",
    category: "Cultural & Events",
    src: img3660,
    location: "Cultural Pavilion",
    tag: "CENTER STAGE",
    stat: "1,000 Capacity",
    resolution: "4K UHD",
    description: "State-of-the-art 1,000-seater acoustic theater hosting TEDx-style summits, theatrical plays, and annual galas."
  },
  {
    id: 7,
    title: "Vidwan JEE & NEET Integrated Prep Wing",
    category: "Academics",
    src: img3625,
    location: "Excellence Center",
    tag: "TOP RANKERS",
    stat: "Expert IIT Faculty",
    resolution: "4K UHD",
    description: "Rigorous academic environment where expert faculties guide students through competitive entrance preparation."
  },
  {
    id: 8,
    title: "Robotics Hardware Assembly Station",
    category: "Innovation Lab",
    src: img3612,
    location: "STEM Studio",
    tag: "HARDWARE HUB",
    stat: "Robo Kits",
    resolution: "4K UHD",
    description: "Specialized micro-controller programming and hardware prototyping workbench for aspiring engineers."
  },
  {
    id: 9,
    title: "Cambridge Phonetics & Speech Lab",
    category: "Academics",
    src: img3624,
    location: "Language Center",
    tag: "GLOBAL ACCENT",
    stat: "Phonetic Studio",
    resolution: "HD 1080p",
    description: "Audio-assisted linguistic training suite enhancing public speaking, global accent mastery, and elocution."
  },
  {
    id: 10,
    title: "Indoor Badminton & Sports Arena",
    category: "Sports Arena",
    src: img3620,
    location: "Indoor Sports Center",
    tag: "SMASH COURT",
    stat: "Wooden Floor",
    resolution: "HD 1080p",
    description: "Indoor wooden courts for badminton, table tennis, and yoga sessions supervised by certified athletic coaches."
  },
  {
    id: 11,
    title: "Luxury Boarding Residence & Lounge",
    category: "Campus Infrastructure",
    src: img3604,
    location: "Hostel Zone",
    tag: "HOSTEL LUXE",
    stat: "Nutritious Dining",
    resolution: "4K UHD",
    description: "Hygienic, climate-controlled residential quarters with chef-curated nutritious dining for resident scholars."
  },
  {
    id: 12,
    title: "Collaborative Learning Studio Space",
    category: "Academics",
    src: img3671,
    location: "Innovation Hall",
    tag: "PEER BRAINSTORM",
    stat: "Modular Pods",
    resolution: "HD 1080p",
    description: "Flexible, modern study pods designed to encourage peer brainstorming, group projects, and creative workshops."
  },
  {
    id: 13,
    title: "Digital E-Library & Knowledge Commons",
    category: "Campus Infrastructure",
    src: img3681,
    location: "Knowledge Hub",
    tag: "20K+ BOOKS",
    stat: "Digital Access",
    resolution: "4K UHD",
    description: "Quiet research haven featuring over 20,000 physical volumes alongside digital access to global research journals."
  },
  {
    id: 14,
    title: "Archway Walkway & Botanical Lawn",
    category: "Campus Infrastructure",
    src: img3622,
    location: "North Garden",
    tag: "GREEN CAMPUS",
    stat: "Native Flora",
    resolution: "HD 1080p",
    description: "Serene shaded pathways connecting academic blocks, surrounded by native flora and peaceful seating nooks."
  },
  {
    id: 15,
    title: "RouteSafe Fleet & Transit Terminal",
    category: "Campus Infrastructure",
    src: img3684,
    location: "Transit Hub",
    tag: "GPS ROUTE",
    stat: "AC Buses",
    resolution: "HD 1080p",
    description: "GPS-monitored, air-conditioned bus fleet managed with real-time app tracking for parent peace of mind."
  }
];

export default function Gallery() {
  const [squadIdx, setSquadIdx] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [likes, setLikes] = useState({});
  const [copied, setCopied] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check window width for mobile responsive 3D card spacing
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Automatic Smooth Carousel Scroll (Autoplay every 3.5s)
  useEffect(() => {
    if (selectedIdx !== null || isPaused) return;

    const timer = setInterval(() => {
      setSquadIdx((prev) => (prev + 1) % galleryItems.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [selectedIdx, isPaused]);

  const toggleLike = (e, id) => {
    e.stopPropagation();
    setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleNextSquad = useCallback(() => {
    setSquadIdx((prev) => (prev + 1) % galleryItems.length);
  }, []);

  const handlePrevSquad = useCallback(() => {
    setSquadIdx((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  }, []);

  const handleNextLightbox = useCallback(() => {
    if (selectedIdx !== null) {
      setSelectedIdx((prev) => (prev + 1) % galleryItems.length);
    }
  }, [selectedIdx]);

  const handlePrevLightbox = useCallback(() => {
    if (selectedIdx !== null) {
      setSelectedIdx((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
    }
  }, [selectedIdx]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIdx !== null) {
        if (e.key === "ArrowRight") handleNextLightbox();
        if (e.key === "ArrowLeft") handlePrevLightbox();
        if (e.key === "Escape") setSelectedIdx(null);
      } else {
        if (e.key === "ArrowRight") handleNextSquad();
        if (e.key === "ArrowLeft") handlePrevSquad();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx, handleNextLightbox, handlePrevLightbox, handleNextSquad, handlePrevSquad]);

  const copyShareLink = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const selectedImg = selectedIdx !== null ? galleryItems[selectedIdx] : null;

  // Compute 3D stage positions (Left, Center, Right)
  const getSquadPositionIndex = (index) => {
    const total = galleryItems.length;
    const diff = (index - squadIdx + total) % total;
    if (diff === 0) return 0; // Center
    if (diff === 1 || diff === -(total - 1)) return 1; // Right 1
    if (diff === total - 1 || diff === -1) return -1; // Left 1
    return 99; // Hidden offstage
  };

  return (
    <section className="py-12 lg:py-16 bg-white text-navy-950 border-t border-cream-200 relative overflow-hidden selection:bg-rose-500 selection:text-white">

      {/* Floating Animated CSS Keyframes */}
      <style>{`
        @keyframes floatCapG {
          0% { transform: translateY(0px) rotate(-8deg); }
          50% { transform: translateY(-30px) rotate(10deg); }
          100% { transform: translateY(0px) rotate(-8deg); }
        }
        @keyframes floatFlowerG {
          0% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-35px) rotate(120deg) scale(1.15); }
          100% { transform: translateY(0px) rotate(240deg) scale(1); }
        }
        @keyframes floatBubbleG1 {
          0% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.6; }
          50% { transform: translateY(-45px) translateX(15px) scale(1.2); opacity: 0.95; }
          100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.6; }
        }
        @keyframes floatBubbleG2 {
          0% { transform: translateY(0px) translateX(0px) scale(1.1); opacity: 0.5; }
          50% { transform: translateY(40px) translateX(-20px) scale(0.9); opacity: 0.95; }
          100% { transform: translateY(0px) translateX(0px) scale(1.1); opacity: 0.5; }
        }
        /* Infinite Flying Rockets behind images */
        @keyframes flyRocketL2R {
          0% {
            transform: translate(-150px, 500px) rotate(42deg) scale(0.7);
            opacity: 0;
          }
          8% { opacity: 0.95; }
          92% { opacity: 0.95; }
          100% {
            transform: translate(1450px, -450px) rotate(42deg) scale(0.95);
            opacity: 0;
          }
        }
        @keyframes flyRocketR2L {
          0% {
            transform: translate(1450px, 550px) rotate(-42deg) scale(0.7);
            opacity: 0;
          }
          8% { opacity: 0.95; }
          92% { opacity: 0.95; }
          100% {
            transform: translate(-200px, -450px) rotate(-42deg) scale(0.95);
            opacity: 0;
          }
        }
        .animate-float-cap { animation: floatCapG 7s ease-in-out infinite; }
        .animate-float-flower { animation: floatFlowerG 11s ease-in-out infinite; }
        .animate-float-bubble-1 { animation: floatBubbleG1 8s ease-in-out infinite; }
        .animate-float-bubble-2 { animation: floatBubbleG2 9.5s ease-in-out infinite; }
        .animate-rocket-l2r { animation: flyRocketL2R 13s linear infinite; }
        .animate-rocket-r2l { animation: flyRocketR2L 15s linear infinite; animation-delay: 4.5s; }
      `}</style>

      {/* Floating Elements Container (Left & Right Margins) */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden sm:block overflow-hidden">

        {/* LEFT MARGIN FLOATING ITEMS */}

        {/* 1. Graduation Cap (Left Top) */}
        <div className="absolute top-[12%] left-[3%] w-14 animate-float-cap opacity-90 filter drop-shadow-lg">
          <svg viewBox="0 0 100 80" className="w-full h-auto">
            {/* Cap Top Diamond */}
            <polygon points="50,10 95,30 50,50 5,30" fill="#0B1C2C" />
            <polygon points="50,15 88,30 50,45 12,30" fill="#12283A" />
            {/* Cap Skull Base */}
            <path d="M25,38 L25,58 C25,68 75,68 75,58 L75,38 Z" fill="#0B1C2C" />
            {/* Gold Tassel */}
            <path d="M50,30 Q30,35 22,50" fill="none" stroke="#E8C547" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="22" cy="52" r="4" fill="#C9A227" />
          </svg>
        </div>

        {/* 2. Math Formula Pill (Left Mid) */}
        <div className="absolute top-[45%] left-[2%] px-3.5 py-2.5 rounded-2xl bg-navy-900 text-gold-400 font-serif text-xs font-bold shadow-xl border border-gold-400/40 animate-float-bubble-1 flex items-center gap-2">
          <span className="text-sm font-extrabold text-gold-300">π</span>
          <span className="text-xs text-white/50">•</span>
          <span className="text-sm font-extrabold text-gold-400">β</span>
          <span className="text-xs text-white/50">•</span>
          <span className="text-xs font-mono bg-white/10 px-2 py-0.5 rounded text-gold-300">+ − × ÷</span>
        </div>

        {/* 3. Floating Atom Icon (Left Bottom) */}
        <div className="absolute top-[75%] left-[4%] p-3.5 rounded-2xl bg-white/90 shadow-xl border border-cyan-400/40 text-cyan-600 animate-float-bubble-2 flex items-center gap-2">
          <span className="text-sm font-bold text-navy-900 font-mono">E = mc²</span>
        </div>


        {/* RIGHT MARGIN FLOATING ITEMS */}

        {/* 4. Science Atom Orbit (Right Top) */}
        <div className="absolute top-[15%] right-[3%] p-3.5 rounded-2xl bg-white/90 shadow-xl border border-gold-400/40 text-gold-600 animate-float-flower flex items-center gap-2">
          <span className="text-base font-serif font-extrabold text-gold-600">α + β = γ</span>
        </div>

        {/* 5. Math Symbol Badge (Right Mid) */}
        <div className="absolute top-[48%] right-[2%] px-3.5 py-2.5 rounded-2xl bg-navy-900 text-gold-400 font-serif text-xs font-bold shadow-xl border border-gold-400/40 animate-float-bubble-2 flex items-center gap-2">
          <span className="text-sm font-bold text-gold-300">√x</span>
          <span className="text-xs text-white/50">•</span>
          <span className="text-sm font-bold text-gold-400">∫ dx</span>
          <span className="text-xs text-white/50">•</span>
          <span className="text-sm font-bold text-gold-300">∞</span>
        </div>

        {/* 6. Graduation Cap 2 (Right Bottom) */}
        <div className="absolute top-[72%] right-[3.5%] w-14 animate-float-cap opacity-90 filter drop-shadow-lg" style={{ animationDelay: '2s' }}>
          <svg viewBox="0 0 100 80" className="w-full h-auto">
            <polygon points="50,10 95,30 50,50 5,30" fill="#0B1C2C" />
            <polygon points="50,15 88,30 50,45 12,30" fill="#E8C547" opacity="0.3" />
            <path d="M25,38 L25,58 C25,68 75,68 75,58 L75,38 Z" fill="#0B1C2C" />
            <path d="M50,30 Q70,35 78,50" fill="none" stroke="#FF4D6D" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="78" cy="52" r="4" fill="#FF4D6D" />
          </svg>
        </div>

      </div>

      {/* Background Arena & Flying Rockets Layer (BEHIND IMAGES AT Z-0) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">

        {/* Rocket 1: Flying Left to Right, Bottom to Top */}
        <div className="absolute bottom-0 left-0 w-24 sm:w-28 animate-rocket-l2r filter drop-shadow-[0_0_20px_rgba(225,29,72,0.6)]">
          <svg viewBox="0 0 100 120" className="w-full h-auto">
            <defs>
              <linearGradient id="rocketFlameL2R" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFB703" />
                <stop offset="50%" stopColor="#FF4D6D" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            {/* Fire Exhaust Trail */}
            <path d="M40,90 Q50,125 60,90 Z" fill="url(#rocketFlameL2R)" />
            <path d="M44,90 Q50,115 56,90 Z" fill="#FFE600" />
            {/* Rocket Body */}
            <path d="M50,10 Q70,40 68,90 L32,90 Q30,40 50,10 Z" fill="#0B1C2C" />
            {/* Crimson Nosecone */}
            <path d="M50,10 Q65,35 66,45 L34,45 Q35,35 50,10 Z" fill="#E11D48" />
            {/* Gold Porthole Window */}
            <circle cx="50" cy="58" r="10" fill="#E8C547" stroke="#0B1C2C" strokeWidth="2.5" />
            <circle cx="50" cy="58" r="5" fill="#38BDF8" />
            {/* Side Wings / Fins */}
            <path d="M32,70 L15,92 L32,90 Z" fill="#BE123C" />
            <path d="M68,70 L85,92 L68,90 Z" fill="#BE123C" />
          </svg>
        </div>

        {/* Rocket 2: Flying Right to Left, Bottom to Top */}
        <div className="absolute bottom-0 right-0 w-24 sm:w-28 animate-rocket-r2l filter drop-shadow-[0_0_20px_rgba(201,162,39,0.6)]">
          <svg viewBox="0 0 100 120" className="w-full h-auto">
            <defs>
              <linearGradient id="rocketFlameR2L" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00F5D4" />
                <stop offset="60%" stopColor="#3A86EF" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            {/* Fire Exhaust Trail */}
            <path d="M40,90 Q50,125 60,90 Z" fill="url(#rocketFlameR2L)" />
            <path d="M44,90 Q50,115 56,90 Z" fill="#80E9FF" />
            {/* Rocket Body */}
            <path d="M50,10 Q70,40 68,90 L32,90 Q30,40 50,10 Z" fill="#12283A" />
            {/* Gold Accent Nosecone */}
            <path d="M50,10 Q65,35 66,45 L34,45 Q35,35 50,10 Z" fill="#C9A227" />
            {/* Cyan Porthole Window */}
            <circle cx="50" cy="58" r="10" fill="#0B1C2C" stroke="#C9A227" strokeWidth="2.5" />
            <circle cx="50" cy="58" r="5" fill="#00F5D4" />
            {/* Side Wings / Fins */}
            <path d="M32,70 L15,92 L32,90 Z" fill="#A8861F" />
            <path d="M68,70 L85,92 L68,90 Z" fill="#A8861F" />
          </svg>
        </div>

        {/* Stadium Floodlight Grid Overlay */}
        <svg viewBox="0 0 1440 900" className="w-full h-full object-cover text-navy-900/10 stroke-current fill-none opacity-15">
          <g strokeWidth="0.8">
            <path d="M-100,250 Q720,-50 1540,250" />
            <path d="M-100,320 Q720,20 1540,320" />
            <path d="M-100,400 Q720,100 1540,400" />
            <path d="M-100,500 Q720,200 1540,500" />
            <line x1="120" y1="0" x2="120" y2="400" strokeWidth="1.5" stroke="#C9A227" opacity="0.4" />
            <line x1="1320" y1="0" x2="1320" y2="400" strokeWidth="1.5" stroke="#C9A227" opacity="0.4" />
          </g>
        </svg>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[35rem] bg-gradient-to-b from-rose-500/5 via-gold-500/10 to-transparent rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Clean Centered Header */}
        <div className="flex flex-col items-center text-center mb-3 sm:mb-6">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-navy-950 tracking-wider uppercase leading-none"
          >
            CAMPUS <span className="bg-gradient-to-r from-gold-600 via-gold-500 to-amber-600 bg-clip-text text-transparent italic">GALLERY</span>
          </motion.h2>

          {/* Active Photo Info Header Above Image */}
          {galleryItems[squadIdx] && (
            <motion.div
              key={galleryItems[squadIdx].id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 text-center max-w-xl mx-auto px-4"
            >
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-gold-700 bg-gold-100/80 px-3 py-1 rounded-full border border-gold-300/50 inline-block mb-1 shadow-xs">
                {galleryItems[squadIdx].category}
              </span>
              <h3 className="text-base sm:text-2xl font-extrabold text-navy-950 font-display leading-tight">
                {galleryItems[squadIdx].title}
              </h3>
              <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs text-navy-700 font-medium mt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-rose-500" /> {galleryItems[squadIdx].location}
                </span>
                <span>•</span>
                <span className="text-emerald-700 font-semibold">{galleryItems[squadIdx].resolution}</span>
              </div>
            </motion.div>
          )}
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
              className="absolute left-1 sm:left-6 z-40 p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-rose-700 to-rose-600 text-white hover:bg-gold-400 hover:text-navy-950 transition-all duration-300 shadow-[0_10px_30px_rgba(225,29,72,0.6)] border border-white/20 active:scale-95 group"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-4 h-4 sm:w-7 sm:h-7 stroke-[3] group-hover:-translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleNextSquad}
              className="absolute right-1 sm:right-6 z-40 p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-rose-700 to-rose-600 text-white hover:bg-gold-400 hover:text-navy-950 transition-all duration-300 shadow-[0_10px_30px_rgba(225,29,72,0.6)] border border-white/20 active:scale-95 group"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-4 h-4 sm:w-7 sm:h-7 stroke-[3] group-hover:translate-x-1 transition-transform" />
            </button>

            {/* 3D Rendered Cards */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              {galleryItems.map((item, idx) => {
                const pos = getSquadPositionIndex(idx);
                if (pos === 99) return null; // Hidden offstage

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
                      else setSelectedIdx(squadIdx);
                    }}
                    className={`absolute w-[220px] sm:w-[380px] md:w-[440px] aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-2xl border-2 transition-all ${isCenter
                        ? "border-gold-500 shadow-[0_25px_70px_rgba(201,162,39,0.35)]"
                        : "border-cream-300 shadow-xl"
                      }`}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Dark Overlay with Title & Info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/10 to-transparent p-3 sm:p-6 flex flex-col justify-between">
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-widest bg-rose-600 text-white px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-lg">
                          {item.tag}
                        </span>
                        <span className="text-[9px] sm:text-xs font-mono font-bold text-gold-400 bg-navy-950/80 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-gold-400/30">
                          {item.stat}
                        </span>
                      </div>

                      {isCenter && (
                        <div className="text-left hidden sm:block">
                          <span className="text-xs font-extrabold text-gold-400 uppercase tracking-widest block">
                            {item.category}
                          </span>
                          <h3 className="text-2xl font-black text-white font-display leading-tight mt-0.5">
                            {item.title}
                          </h3>
                          <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10">
                            <span className="text-xs text-slate-300 flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-rose-500" /> {item.location}
                            </span>
                            <span className="text-xs font-bold text-gold-400 flex items-center gap-1">
                              <Maximize2 className="w-3 h-3" /> Fullscreen HD
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

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
              className="relative max-w-5xl w-full bg-navy-900 rounded-3xl overflow-hidden border border-gold-500/40 shadow-2xl flex flex-col lg:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedIdx(null)}
                className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-navy-950/80 text-white hover:bg-gold-500 hover:text-navy-950 transition border border-white/20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex-1 bg-black flex items-center justify-center min-h-[350px]">
                <img src={selectedImg.src} alt={selectedImg.title} className="w-full h-full object-contain max-h-[75vh]" />
              </div>

              <div className="w-full lg:w-[360px] bg-navy-950 p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase text-navy-950 bg-gold-400 px-3 py-1 rounded-full">
                    {selectedImg.tag}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white font-display mt-3">{selectedImg.title}</h3>
                  <p className="text-slate-300 text-sm font-light mt-3">{selectedImg.description}</p>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <button
                    onClick={(e) => toggleLike(e, selectedImg.id)}
                    className="flex-1 py-3 rounded-xl bg-white/10 hover:bg-rose-500 text-white font-bold text-xs transition flex items-center justify-center gap-2"
                  >
                    <Heart className={`w-4 h-4 ${likes[selectedImg.id] ? 'fill-rose-500 text-rose-500' : 'text-white'}`} />
                    <span>Like ({likes[selectedImg.id] || 0})</span>
                  </button>
                  <button
                    onClick={copyShareLink}
                    className="py-3 px-4 rounded-xl bg-gold-500 text-navy-950 font-bold text-xs hover:bg-gold-400 transition"
                  >
                    {copied ? "Copied!" : "Share"}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
