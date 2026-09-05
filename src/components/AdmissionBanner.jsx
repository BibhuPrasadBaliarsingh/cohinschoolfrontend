import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight, GraduationCap, Cpu } from "lucide-react";
import img3620 from "../assets/DSC03620.JPG";
import cambridgeLogo from "../assets/partener/CAMBRIDGE.png";
import iitMadrasLogo from "../assets/partener/iitmadras.png";

const partnerSlides = [
  {
    id: 1,
    type: "cambridge",
    title: "University of Cambridge",
    subtitle: "Proud to be a Cambridge English Educational Partner",
    logoUrl: cambridgeLogo,
    badgeType: "logo",
    badgeValue: "/logo.png"
  },
  {
    id: 2,
    type: "iit-madras",
    title: "IIT Madras",
    subtitle: "Proud to be Associated with Indian Institute of Technology Madras",
    logoUrl: iitMadrasLogo,
    badgeType: "logo",
    badgeValue: "/logo.png"
  }
];

const floatingStudySymbols = [
  { id: "s1", symbol: "%", side: "left", pos: "1.0%", size: "1.9rem", duration: "9.5s", delay: "0.5s", color: "#FFD700" },
  { id: "s2", symbol: "π", side: "left", pos: "3.5%", size: "1.8rem", duration: "11s", delay: "2.8s", color: "#00F5D4" },
  { id: "s3", symbol: "α", side: "left", pos: "6.0%", size: "1.6rem", duration: "13s", delay: "5.2s", color: "#FF4D6D" },
  { id: "s4", symbol: "atom", side: "left", pos: "8.5%", size: "2.2rem", duration: "10.5s", delay: "1.2s", color: "#E0AAFF" },
  { id: "s5", symbol: "√", side: "left", pos: "11.0%", size: "1.7rem", duration: "12s", delay: "3.8s", color: "#70E000" },
  { id: "s6", symbol: "λ", side: "left", pos: "13.5%", size: "1.6rem", duration: "14s", delay: "6.5s", color: "#FF9E00" },
  { id: "s7", symbol: "Ω", side: "left", pos: "16.0%", size: "1.5rem", duration: "11.5s", delay: "2.0s", color: "#38B6FF" },

  { id: "s8", symbol: "%", side: "right", pos: "1.0%", size: "2.0rem", duration: "10s", delay: "1.0s", color: "#38B6FF" },
  { id: "s9", symbol: "β", side: "right", pos: "3.5%", size: "1.6rem", duration: "12.5s", delay: "3.5s", color: "#FFB703" },
  { id: "s10", symbol: "γ", side: "right", pos: "6.0%", size: "1.7rem", duration: "10.5s", delay: "0.2s", color: "#FF758F" },
  { id: "s11", symbol: "atom", side: "right", pos: "8.5%", size: "2.4rem", duration: "11.8s", delay: "4.8s", color: "#00F5D4" },
  { id: "s12", symbol: "∞", side: "right", pos: "11.0%", size: "1.9rem", duration: "13.5s", delay: "2.2s", color: "#C77DFF" },
  { id: "s13", symbol: "∫", side: "right", pos: "13.5%", size: "1.8rem", duration: "12.2s", delay: "5.8s", color: "#E8C547" },
  { id: "s14", symbol: "Δ", side: "right", pos: "16.0%", size: "1.6rem", duration: "11s", delay: "1.5s", color: "#52B788" },
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

  const currentPartner = partnerSlides[activePartnerIndex] || partnerSlides[0] || {};

  return (
    <div className="w-full relative z-30 py-6 sm:py-8 px-3 sm:px-6 lg:px-8 overflow-hidden">
      <style>{`
        @keyframes symbolFloatUp {
          0% { transform: translateY(80px) translateX(0) rotate(0deg) scale(0.8); opacity: 0; }
          15% { opacity: 0.9; }
          50% { transform: translateY(-140px) translateX(18px) rotate(15deg) scale(1.05); opacity: 0.95; }
          85% { opacity: 0.75; }
          100% { transform: translateY(-380px) translateX(-12px) rotate(-15deg) scale(0.8); opacity: 0; }
        }
        .animate-symbol-rise {
          animation-name: symbolFloatUp;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      `}</style>

      {/* Floating Science & Study Symbols (Pi, Alpha, Beta, Gamma, Atom, Sigma, Delta) */}
      {floatingStudySymbols.map((s) => (
        <div
          key={s.id}
          className="absolute bottom-0 pointer-events-none z-20 animate-symbol-rise flex items-center justify-center select-none"
          style={{
            [s.side]: s.pos,
            width: s.symbol === "atom" ? "36px" : "auto",
            fontSize: s.size,
            color: s.color,
            animationDuration: s.duration,
            animationDelay: s.delay,
            filter: `drop-shadow(0 0 10px ${s.color}66)`,
          }}
        >
          {s.symbol === "atom" ? (
            <svg viewBox="0 0 40 40" className="w-8 h-8 filter drop-shadow-md">
              <circle cx="20" cy="20" r="3.5" fill={s.color} />
              <ellipse cx="20" cy="20" rx="16" ry="6" fill="none" stroke={s.color} strokeWidth="1.6" transform="rotate(0 20 20)" opacity="0.85" />
              <ellipse cx="20" cy="20" rx="16" ry="6" fill="none" stroke={s.color} strokeWidth="1.6" transform="rotate(60 20 20)" opacity="0.85" />
              <ellipse cx="20" cy="20" rx="16" ry="6" fill="none" stroke={s.color} strokeWidth="1.6" transform="rotate(120 20 20)" opacity="0.85" />
            </svg>
          ) : (
            <span className="font-serif font-black tracking-wider leading-none drop-shadow-md">
              {s.symbol}
            </span>
          )}
        </div>
      ))}

      <div className="max-w-6xl mx-auto space-y-5 sm:space-y-6 relative z-10">

        {/* 1. COMPACT SLIM ADMISSION BANNER - EXACT 100px HEIGHT */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold-500/40 flex flex-col md:flex-row items-stretch md:h-[160px] group hover:shadow-gold-500/20 transition-all duration-300 bg-[#0B1C2C]">

          {/* Student Image Container */}
          <div className="w-full md:w-4/12 relative h-28 md:h-full bg-navy-950 overflow-hidden flex-shrink-0">
            <img
              src={img3620}
              alt="Happy Students - Cohen International School"
              className="w-full h-full object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-500"
            />
            {/* Gradient Overlay for Mobile blending into navy */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0B1C2C]/90 via-transparent to-transparent md:from-transparent" />
          </div>

          {/* Middle Text Container */}
          <div className="w-full md:w-5/12 px-4 py-2 flex flex-col justify-center text-white bg-[#0B1C2C] md:h-full">
            <div className="flex items-center gap-1.5 text-gold-400 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-0.5">
              <Sparkles className="w-3 h-3 text-gold-400 flex-shrink-0" />
              <span>Nursery to Class XI Admissions Open</span>
            </div>
            <h3 className="font-serif text-base sm:text-lg md:text-xl font-extrabold text-white leading-tight">
              Admissions Going On for <span className="text-gold-400">AY 2027-2028</span>
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 font-medium leading-tight">
              Integrated IIT-JEE, NEET &amp; CBSE Board • Residential &amp; Day Scholar
            </p>
          </div>

          {/* Right CTA Button Container */}
          <div className="w-full md:w-3/12 p-3 flex items-center justify-center bg-[#0B1C2C] md:border-l border-gold-500/20 md:h-full">
            <button
              onClick={() => openAdmissionModal?.()}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-gold-400 via-amber-400 to-gold-500 hover:from-gold-300 hover:to-amber-300 text-navy-950 font-extrabold text-xs sm:text-sm shadow-md shadow-gold-500/20 flex items-center justify-center gap-1.5 group/btn transition-all duration-300 transform active:scale-95"
            >
              <span className="whitespace-nowrap">Apply Now</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform text-navy-950 flex-shrink-0" />
            </button>
          </div>

        </div>

        {/* 2. AUTOMATIC PARTNERSHIP CAROUSEL */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-2xl bg-[#0B1C2C] border border-gold-500/40 rounded-2xl p-4 sm:p-6 shadow-2xl transition-all">

            {/* Prev/Next Carousel Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-navy-950/90 hover:bg-gold-500 hover:text-navy-950 text-gold-400 transition flex items-center justify-center z-20 border border-gold-500/40 shadow-lg active:scale-90"
              aria-label="Previous Partner"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-navy-950/90 hover:bg-gold-500 hover:text-navy-950 text-gold-400 transition flex items-center justify-center z-20 border border-gold-500/40 shadow-lg active:scale-90"
              aria-label="Next Partner"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* SLIDE CONTENT AREA */}
            <div className="px-8 sm:px-12 flex items-center justify-center min-h-[135px] sm:min-h-[140px]">
              <div className="flex flex-col items-center justify-center w-full gap-3 text-center animate-fadeIn">

                {/* Logo / Icon Header */}
                <div className="flex items-center justify-center gap-3">
                  {currentPartner.logoUrl ? (
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-2 border-[#D4AF37] shadow-lg flex items-center justify-center p-1 overflow-hidden flex-shrink-0">
                      <img
                        src={currentPartner.logoUrl}
                        alt={currentPartner.title}
                        className="w-full h-full object-contain transform scale-105"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-navy-900 text-gold-400 flex items-center justify-center rounded-full font-bold text-sm shadow-md border-2 border-[#D4AF37] flex-shrink-0">
                      {currentPartner.icon ? (
                        <currentPartner.icon className="w-6 h-6 text-gold-400" />
                      ) : (
                        "CIS"
                      )}
                    </div>
                  )}

                  <div className="text-left">
                    <h4 className="font-serif text-xl sm:text-2xl md:text-3xl font-extrabold text-[#F45B69] leading-tight tracking-tight">
                      {currentPartner.title}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm font-bold text-white tracking-tight mt-0.5">
                      {currentPartner.subtitle}
                    </p>
                  </div>
                </div>

                {/* Bottom Badge / Pill */}
                {currentPartner.badgeType === "logo" ? (
                  <div className="h-9 flex items-center justify-center bg-white px-4 rounded-xl border border-gray-200 shadow-sm max-w-full">
                    <img src={currentPartner.badgeValue} alt="Cohen Logo" className="h-6 sm:h-7 w-auto object-contain" />
                  </div>
                ) : (
                  <div className="min-h-[34px] py-1.5 px-4 sm:px-5 flex items-center justify-center bg-gradient-to-r from-gold-400 to-amber-400 text-navy-950 font-extrabold text-[11px] sm:text-xs md:text-sm rounded-full border border-gold-300 shadow-sm max-w-full text-center leading-tight">
                    <span>{currentPartner.badgeValue}</span>
                  </div>
                )}

              </div>
            </div>

            {/* Bottom Dots Indicator */}
            <div className="flex justify-center items-center gap-2 mt-3 sm:mt-4">
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

