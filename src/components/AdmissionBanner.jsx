import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import img3620 from "../assets/DSC03620.JPG";

const partnerSlides = [
  {
    id: 1,
    type: "cambridge",
    title: "CAMBRIDGE",
    subtitle: "English Educational Partner",
    color: "#A6192E",
    pillText: "Official Language Partner"
  },
  {
    id: 2,
    type: "iit-madras",
    title: "IIT Madras",
    subtitle: "SchoolConnect program",
    pillText: "Partner With Cohen International school",
    pillColor: "bg-lime-200 text-blue-950 border-lime-400"
  },
];

const floatingBalloons = [
  // LEFT SIDE BALLOONS (3 Balloons)
  { id: "l1", side: "left", pos: "1.2%", size: 38, duration: "9s", delay: "0s", colors: { top: "#FFD700", mid: "#E6AC00", base: "#B38600" } },
  { id: "l2", side: "left", pos: "5.5%", size: 28, duration: "12s", delay: "3.5s", colors: { top: "#FF4D6D", mid: "#C77DFF", base: "#7B2CBF" } },
  { id: "l3", side: "left", pos: "9.8%", size: 44, duration: "10s", delay: "6.5s", colors: { top: "#00F5D4", mid: "#00BBF9", base: "#0077B6" } },

  // RIGHT SIDE BALLOONS (3 Balloons)
  { id: "r1", side: "right", pos: "1.2%", size: 40, duration: "9.5s", delay: "1.5s", colors: { top: "#FF758F", mid: "#FF4D6D", base: "#C70039" } },
  { id: "r2", side: "right", pos: "5.5%", size: 30, duration: "11s", delay: "4.8s", colors: { top: "#FFB703", mid: "#FB8500", base: "#D90429" } },
  { id: "r3", side: "right", pos: "9.8%", size: 42, duration: "13s", delay: "2.8s", colors: { top: "#E0AAFF", mid: "#9D4EDD", base: "#3C096C" } },
];

const floatingLeaves = [
  // LEFT SIDE LEAVES
  { id: "fl1", side: "left", pos: "3.2%", size: 28, duration: "11s", delay: "1.8s", colors: { top: "#52B788", base: "#1B4332" } },
  { id: "fl2", side: "left", pos: "7.8%", size: 24, duration: "14s", delay: "5.2s", colors: { top: "#74C69D", base: "#2D6A4F" } },

  // RIGHT SIDE LEAVES
  { id: "fr1", side: "right", pos: "3.2%", size: 30, duration: "12s", delay: "2.5s", colors: { top: "#95D5B2", base: "#40916C" } },
  { id: "fr2", side: "right", pos: "7.8%", size: 26, duration: "15s", delay: "6.0s", colors: { top: "#52B788", base: "#1B4332" } },
];

export default function AdmissionBanner({ openAdmissionModal }) {
  const [activePartnerIndex, setActivePartnerIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePartnerIndex((prev) => (prev + 1) % partnerSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActivePartnerIndex((prev) => (prev === 0 ? partnerSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActivePartnerIndex((prev) => (prev + 1) % partnerSlides.length);
  };

  const currentPartner = partnerSlides[activePartnerIndex];

  return (
    <div className="w-full relative z-30 py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Infinite Balloon & Leaf Rise CSS Keyframe Animations */}
      <style>{`
        @keyframes balloonFloatUp {
          0% {
            transform: translateY(110px) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.95;
          }
          50% {
            transform: translateY(-160px) translateX(15px) rotate(6deg);
            opacity: 1;
          }
          85% {
            opacity: 0.9;
          }
          100% {
            transform: translateY(-440px) translateX(-12px) rotate(-6deg);
            opacity: 0;
          }
        }
        @keyframes leafFloatUp {
          0% {
            transform: translateY(100px) translateX(0) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: 0.9;
          }
          40% {
            transform: translateY(-140px) translateX(-22px) rotate(45deg);
          }
          75% {
            transform: translateY(-290px) translateX(20px) rotate(-35deg);
            opacity: 0.85;
          }
          100% {
            transform: translateY(-440px) translateX(-15px) rotate(90deg);
            opacity: 0;
          }
        }
        .animate-balloon-rise {
          animation-name: balloonFloatUp;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
        .animate-leaf-rise {
          animation-name: leafFloatUp;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      `}</style>

      {/* 6 Floating Balloons on Left & Right Sides moving to top infinitely */}
      {floatingBalloons.map((b) => (
        <div
          key={b.id}
          className="absolute bottom-0 pointer-events-none z-20 animate-balloon-rise hidden sm:block"
          style={{
            [b.side]: b.pos,
            width: `${b.size}px`,
            animationDuration: b.duration,
            animationDelay: b.delay,
          }}
        >
          <svg viewBox="0 0 50 75" className="w-full h-auto filter drop-shadow-lg">
            <defs>
              <radialGradient id={`balloon-grad-${b.id}`} cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor={b.colors.top} />
                <stop offset="65%" stopColor={b.colors.mid} />
                <stop offset="100%" stopColor={b.colors.base} />
              </radialGradient>
            </defs>
            {/* Balloon Body */}
            <ellipse cx="25" cy="26" rx="20" ry="24" fill={`url(#balloon-grad-${b.id})`} />
            {/* Balloon Reflection Highlight */}
            <ellipse cx="16" cy="16" rx="5" ry="8" fill="#FFFFFF" opacity="0.5" transform="rotate(-20 16 16)" />
            {/* Balloon Knot */}
            <polygon points="22,50 28,50 25,54" fill={b.colors.base} />
            {/* Balloon String */}
            <path d="M25,54 Q19,62 26,69 T23,76" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="1.4" />
          </svg>
        </div>
      ))}

      {/* Floating Green Leaves moving to top infinitely */}
      {floatingLeaves.map((l) => (
        <div
          key={l.id}
          className="absolute bottom-0 pointer-events-none z-20 animate-leaf-rise hidden sm:block opacity-90"
          style={{
            [l.side]: l.pos,
            width: `${l.size}px`,
            animationDuration: l.duration,
            animationDelay: l.delay,
          }}
        >
          <svg viewBox="0 0 40 50" className="w-full h-auto filter drop-shadow-md">
            <defs>
              <linearGradient id={`leaf-grad-${l.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={l.colors.top} />
                <stop offset="100%" stopColor={l.colors.base} />
              </linearGradient>
            </defs>
            {/* Leaf Blade */}
            <path
              d="M20,2 C32,10 38,24 20,44 C2,24 8,10 20,2 Z"
              fill={`url(#leaf-grad-${l.id})`}
            />
            {/* Center Vein */}
            <path
              d="M20,2 Q20,23 20,44"
              fill="none"
              stroke="rgba(255,255,255,0.45)"
              strokeWidth="1.2"
            />
            {/* Side Veins */}
            <path d="M20,14 C24,11 27,10 29,11" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" fill="none" />
            <path d="M20,22 C25,18 29,17 31,18" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" fill="none" />
            <path d="M20,14 C16,11 13,10 11,11" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" fill="none" />
            <path d="M20,22 C15,18 11,17 9,18" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" fill="none" />
            {/* Stem */}
            <path d="M20,44 Q20,48 18,50" stroke={l.colors.base} strokeWidth="1.5" fill="none" />
          </svg>
        </div>
      ))}

      <div className="max-w-6xl mx-auto space-y-6 relative z-10">

        {/* 1. COMPACT SLIM ADMISSION BANNER */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold-500/40 flex flex-col md:flex-row items-stretch group hover:shadow-gold-500/20 transition-all duration-300">

          {/* Left Student Image Container - Sleek height */}
          <div className="md:w-4/12 relative min-h-[110px] sm:min-h-[130px] max-h-[140px] bg-navy-950 overflow-hidden">
            <img
              src={img3620}
              alt="Happy Students - Cohen International School"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Middle Text Container — Deep Navy matching Logo */}
          <div className="md:w-6/12 px-5 py-3.5 sm:px-6 sm:py-4 flex flex-col justify-center text-white bg-[#0B1C2C]">
            <div className="flex items-center gap-1.5 text-gold-400 text-[11px] font-bold uppercase tracking-wider mb-0.5">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Nursery to Class XII Admissions Open</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-white leading-tight">
              Admissions Going On <span className="text-gold-400">2026–27</span>
            </h3>
            <p className="text-[11px] sm:text-xs text-white/80 mt-1 font-medium truncate">
              Integrated IIT-JEE, NEET &amp; CBSE Board • Residential &amp; Day Scholar
            </p>
          </div>

          {/* Right CTA — Metallic Gold Accent Button */}
          <div className="md:w-2/12 hover:brightness-110 transition-all px-4 py-3 flex items-center justify-center cursor-pointer border-t md:border-t-0 md:border-l border-gold-500/30 bg-gold-500">
            <button
              onClick={() => openAdmissionModal?.()}
              className="w-full flex items-center justify-center gap-2 text-navy-950 font-extrabold text-sm sm:text-base group-hover:scale-105 transition-transform"
            >
              <span className="whitespace-nowrap">Apply Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-navy-950 flex-shrink-0" />
            </button>
          </div>

        </div>

        {/* 2. AUTOMATIC PARTNERSHIP CAROUSEL (Cambridge, IIT Madras, CBSE & AI Robotics) */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-2xl bg-[#0B1C2C] border-2 border-gold-500/30 rounded-2xl p-5 sm:p-6 shadow-2xl transition-all">

            {/* Prev/Next Carousel Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-navy-950/80 hover:bg-gold-500 hover:text-navy-950 text-white transition flex items-center justify-center z-10 border border-gold-500/30 shadow-lg"
              aria-label="Previous Partner"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-navy-950/80 hover:bg-gold-500 hover:text-navy-950 text-white transition flex items-center justify-center z-10 border border-gold-500/30 shadow-lg"
              aria-label="Next Partner"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* SLIDE CONTENT AREA - Fixed Height Container prevents layout jumps */}
            <div className="px-6 sm:px-8 flex items-center justify-center min-h-[140px] h-[140px]">

              {/* SLIDE 1: CAMBRIDGE */}
              {currentPartner.type === "cambridge" && (
                <div className="flex flex-col items-center justify-center w-full gap-2.5 animate-fadeIn">
                  <div className="flex items-center gap-3.5">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-[#D4AF37] shadow-md flex items-center justify-center p-1 overflow-hidden flex-shrink-0">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaEraxQx1v-Lh1VjgS42JWliHK4qq8h7jY0xkfkNS6qFqRkrYDxFimRXk&s=10"
                        alt="Cambridge Assessment English Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#F45B69] leading-none tracking-tight">
                        CAMBRIDGE
                      </h4>
                      <p className="font-sans text-xs sm:text-sm font-extrabold text-white tracking-tight mt-1">
                        English Educational Partner
                      </p>
                    </div>
                  </div>

                  {/* Standardized Height Bottom Badge */}
                  <div className="h-9 flex items-center justify-center bg-white px-4 rounded-xl border border-gray-200 shadow-sm">
                    <img src="/logo.png" alt="Cohen Logo" className="h-6 sm:h-7 w-auto object-contain" />
                  </div>
                </div>
              )}

              {/* SLIDE 2: IIT MADRAS SCHOOLCONNECT */}
              {currentPartner.type === "iit-madras" && (
                <div className="flex flex-col items-center justify-center w-full gap-2.5 animate-fadeIn">
                  <div className="flex items-center gap-3.5">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-[#D4AF37] shadow-md flex items-center justify-center p-1 overflow-hidden flex-shrink-0">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb1FYrHxMuDS9yjiKKMOuYXa-oBc5i8wswHhen_16K9CT85ATq_GgBVnA&s=10"
                        alt="IIT Madras Emblem Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#F45B69] leading-none tracking-tight">
                        IIT Madras
                      </h4>
                      <p className="font-sans text-xs sm:text-sm font-extrabold text-white tracking-tight mt-1">
                        SchoolConnect program
                      </p>
                    </div>
                  </div>

                  {/* Standardized Height Bottom Badge */}
                  <div className="h-9 flex items-center justify-center bg-gold-400 text-navy-950 font-extrabold text-xs sm:text-sm px-5 rounded-full border border-gold-300 shadow-sm">
                    <span>Partner With Cohen International school</span>
                  </div>
                </div>
              )}

              {/* SLIDE 3: CBSE VIDWAN */}
              {currentPartner.type === "cbse-vidwan" && (
                <div className="flex flex-col items-center justify-center w-full gap-2.5 animate-fadeIn">
                  <div className="flex items-center gap-3.5">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 bg-navy-900 text-gold-400 flex items-center justify-center rounded-full font-bold text-sm shadow-md border-2 border-[#D4AF37] flex-shrink-0">
                      CIS
                    </div>
                    <div className="text-left">
                      <h4 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#F45B69] leading-none tracking-tight">
                        Vidwan Partner
                      </h4>
                      <p className="font-sans text-xs sm:text-sm font-extrabold text-white tracking-tight mt-1">
                        Integrated IIT-JEE &amp; NEET Prep
                      </p>
                    </div>
                  </div>

                  {/* Standardized Height Bottom Badge */}
                  <div className="h-9 flex items-center justify-center bg-gold-400 text-navy-950 font-extrabold text-xs sm:text-sm px-5 rounded-full border border-gold-300 shadow-sm">
                    <span>CBSE Board Affiliated Coaching</span>
                  </div>
                </div>
              )}

              {/* SLIDE 4: STEM AI & ROBOTICS */}
              {currentPartner.type === "ai-robotics" && (
                <div className="flex flex-col items-center justify-center w-full gap-2.5 animate-fadeIn">
                  <div className="flex items-center gap-3.5">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 bg-navy-900 text-gold-400 flex items-center justify-center rounded-full font-bold text-sm shadow-md border-2 border-[#D4AF37] flex-shrink-0">
                      AI
                    </div>
                    <div className="text-left">
                      <h4 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#F45B69] leading-none tracking-tight">
                        STEM &amp; AI Studio
                      </h4>
                      <p className="font-sans text-xs sm:text-sm font-extrabold text-white tracking-tight mt-1">
                        Future Tech Academy Certification
                      </p>
                    </div>
                  </div>

                  {/* Standardized Height Bottom Badge */}
                  <div className="h-9 flex items-center justify-center bg-gold-400 text-navy-950 font-extrabold text-xs sm:text-sm px-5 rounded-full border border-gold-300 shadow-sm">
                    <span>10-Acre Smart Campus Facilities</span>
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Dots Indicator */}
            <div className="flex justify-center items-center gap-2 mt-4">
              {partnerSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActivePartnerIndex(index)}
                  className={`h-2 rounded-full transition-all ${index === activePartnerIndex ? "w-7 bg-gold-400" : "w-2 bg-white/30"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
