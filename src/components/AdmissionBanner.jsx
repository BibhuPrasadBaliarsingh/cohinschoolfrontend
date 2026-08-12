import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

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
    <div className="w-full relative z-30 -mt-10 sm:-mt-14 mb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* 1. FLOATING GREEN ADMISSION BANNER */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-emerald-500/30 flex flex-col md:flex-row items-stretch bg-[#38A169] group hover:shadow-emerald-600/30 transition-all duration-300">
          
          {/* Left Student Image Container */}
          <div className="md:w-5/12 relative min-h-[160px] sm:min-h-[180px] bg-navy-950 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop"
              alt="Happy Students - Cohen International School"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#38A169]/80 hidden md:block" />
          </div>

          {/* Middle Green Text Container */}
          <div className="md:w-5/12 bg-[#38A169] p-6 sm:p-8 flex flex-col justify-center text-white">
            <div className="flex items-center gap-2 text-emerald-100 text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Nursery to Class XI Admissions</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Admission Going on
            </h3>
            <p className="text-xs text-white/90 mt-1 font-medium hidden sm:block">
              Integrated IIT-JEE, NEET &amp; CBSE Board Curriculum 2026–27
            </p>
          </div>

          {/* Right Darker Green Action Button Area */}
          <div className="md:w-2/12 bg-[#2E7D32] hover:bg-[#256628] transition-colors p-6 flex items-center justify-center cursor-pointer border-t md:border-t-0 md:border-l border-white/20">
            <button
              onClick={() => openAdmissionModal?.()}
              className="w-full h-full flex items-center justify-center gap-2 text-white font-bold text-base sm:text-lg group-hover:scale-105 transition-transform"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* 2. AUTOMATIC PARTNERSHIP CAROUSEL (Cambridge, IIT Madras, CBSE & AI Robotics) */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-2xl bg-white dark:bg-navy-950 border-2 border-navy-900 dark:border-gold-500/40 rounded-2xl p-4 sm:p-5 shadow-xl transition-all">
            
            {/* Prev/Next Carousel Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 text-navy-900 dark:text-white transition z-10"
              aria-label="Previous Partner"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 text-navy-900 dark:text-white transition z-10"
              aria-label="Next Partner"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* SLIDE CONTENT AREA */}
            <div className="px-8 flex items-center justify-center min-h-[64px]">
              
              {/* SLIDE 1: CAMBRIDGE */}
              {currentPartner.type === "cambridge" && (
                <div className="flex items-center justify-center w-full gap-4 sm:gap-6 flex-wrap animate-fadeIn">
                  <div className="flex items-center gap-3">
                    
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-2 border-amber-500/50 shadow-md flex items-center justify-center p-0.5 overflow-hidden flex-shrink-0">
                      <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaEraxQx1v-Lh1VjgS42JWliHK4qq8h7jY0xkfkNS6qFqRkrYDxFimRXk&s=10"
                      alt="Cambridge Assessment English Logo"
                      className="h-12 sm:h-16 w-auto object-contain flex-shrink-0 bg-white p-1 rounded-xl border border-gray-200 shadow-sm"
                    />
                    </div>
                    <div className="text-left">
                      <span className="font-serif text-lg sm:text-2xl font-bold text-[#A6192E] dark:text-rose-400 block leading-none">
                        CAMBRIDGE
                      </span>
                      <span className="text-xs font-bold text-gray-700 dark:text-white/80 block mt-0.5 tracking-tight">
                        English Educational Partner
                      </span>
                    </div>
                  </div>

                  {/* Cohen Logo Badge */}
                  <div className="bg-white px-3.5 py-2 rounded-xl border border-gray-200 flex items-center shadow-sm">
                    <img src="/logo.png" alt="Cohen Logo" className="h-10 sm:h-12 w-auto object-contain" />
                  </div>
                  
                </div>
              )}

              {/* SLIDE 2: IIT MADRAS SCHOOLCONNECT */}
              {currentPartner.type === "iit-madras" && (
                <div className="flex items-center justify-center w-full gap-4 sm:gap-6 flex-wrap animate-fadeIn">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-2 border-amber-500/50 shadow-md flex items-center justify-center p-0.5 overflow-hidden flex-shrink-0">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb1FYrHxMuDS9yjiKKMOuYXa-oBc5i8wswHhen_16K9CT85ATq_GgBVnA&s=10"
                        alt="IIT Madras Emblem Logo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="font-serif text-2xl sm:text-3xl font-black text-[#B22222] dark:text-rose-400 leading-none">
                        IIT Madras
                      </h4>
                      <p className="font-sans text-xs sm:text-sm font-extrabold text-[#1F2937] dark:text-white tracking-tight mt-1">
                        SchoolConnect program
                      </p>
                    </div>
                  </div>

                  {/* Yellow Oval Pill Badge: "Partner With Cohen International school" */}
                  <div className="bg-[#D4E157] text-[#1E3A8A] font-extrabold text-xs sm:text-sm px-4 py-1.5 rounded-full border border-[#9E9D24] shadow-sm flex items-center gap-1">
                    <span>Partner With Cohen International school</span>
                  </div>
                </div>
              )}

              {/* SLIDE 3: CBSE VIDWAN */}
              {currentPartner.type === "cbse-vidwan" && (
                <div className="flex items-center justify-between w-full flex-wrap gap-4 animate-fadeIn">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-navy-900 text-gold-400 flex items-center justify-center rounded-xl font-bold text-sm shadow border border-gold-400/40">
                      CIS
                    </div>
                    <div className="text-left">
                      <span className="font-serif text-base sm:text-lg font-bold text-navy-900 dark:text-white block leading-none">
                        Vidwan Coaching Partner
                      </span>
                      <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 block mt-0.5">
                        Integrated IIT-JEE &amp; NEET Prep
                      </span>
                    </div>
                  </div>

                  <div className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-bold text-xs px-3.5 py-1.5 rounded-full border border-emerald-500/30">
                    CBSE Board Affiliated
                  </div>
                </div>
              )}

              {/* SLIDE 4: STEM AI & ROBOTICS */}
              {currentPartner.type === "ai-robotics" && (
                <div className="flex items-center justify-between w-full flex-wrap gap-4 animate-fadeIn">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-xl font-bold text-sm shadow">
                      AI
                    </div>
                    <div className="text-left">
                      <span className="font-serif text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400 block leading-none">
                        STEM AI &amp; Robotics Studio
                      </span>
                      <span className="text-[11px] font-semibold text-gray-600 dark:text-white/70 block mt-0.5">
                        Future Tech Academy Certification
                      </span>
                    </div>
                  </div>

                  <div className="bg-blue-500/10 text-blue-600 dark:text-blue-300 font-bold text-xs px-3.5 py-1.5 rounded-full border border-blue-500/30">
                    10-Acre Smart Campus
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Dots Indicator */}
            <div className="flex justify-center items-center gap-1.5 mt-2">
              {partnerSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActivePartnerIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === activePartnerIndex ? "w-6 bg-gold-500" : "w-1.5 bg-gray-300 dark:bg-white/30"
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
