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
    <div className="w-full relative z-30 pt-6 pb-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* 1. COMPACT SLIM ADMISSION BANNER */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-emerald-500/30 flex flex-col md:flex-row items-stretch group hover:shadow-emerald-700/30 transition-all duration-300">
          
          {/* Left Student Image Container - Sleek height */}
          <div className="md:w-4/12 relative min-h-[110px] sm:min-h-[130px] max-h-[140px] bg-navy-950 overflow-hidden">
            <img
              src={img3620}
              alt="Happy Students - Cohen International School"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#2E7D32]/80 hidden md:block" />
          </div>

          {/* Middle Text Container — Slim & punchy */}
          <div className="md:w-6/12 px-5 py-3.5 sm:px-6 sm:py-4 flex flex-col justify-center text-white" style={{ background: "linear-gradient(135deg, #2E7D32 0%, #38A169 60%, #4CAF50 100%)" }}>
            <div className="flex items-center gap-1.5 text-emerald-100 text-[11px] font-bold uppercase tracking-wider mb-0.5">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>Nursery to Class XI Admissions Open</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-white leading-tight">
              Admissions Going On 2026–27
            </h3>
            <p className="text-[11px] sm:text-xs text-white/90 mt-1 font-medium truncate">
              Integrated IIT-JEE, NEET & CBSE Board • Residential & Day Scholar
            </p>
          </div>

          {/* Right CTA — Slim single action block */}
          <div className="md:w-2/12 hover:brightness-110 transition-all px-4 py-3 flex items-center justify-center cursor-pointer border-t md:border-t-0 md:border-l border-white/20" style={{ background: "#1B5E20" }}>
            <button
              onClick={() => openAdmissionModal?.()}
              className="w-full flex items-center justify-center gap-2 text-white font-bold text-sm sm:text-base group-hover:scale-105 transition-transform"
            >
              <span className="whitespace-nowrap">Apply Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-300 flex-shrink-0" />
            </button>
          </div>

        </div>

        {/* 2. AUTOMATIC PARTNERSHIP CAROUSEL (Cambridge, IIT Madras, CBSE & AI Robotics) */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-2xl bg-[#090D16] border-2 border-[#54461B] rounded-2xl p-5 sm:p-6 shadow-2xl transition-all">
            
            {/* Prev/Next Carousel Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#162032] hover:bg-[#202E46] text-white/90 transition flex items-center justify-center z-10 border border-white/10"
              aria-label="Previous Partner"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#162032] hover:bg-[#202E46] text-white/90 transition flex items-center justify-center z-10 border border-white/10"
              aria-label="Next Partner"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* SLIDE CONTENT AREA */}
            <div className="px-8 flex items-center justify-center min-h-[90px]">
              
              {/* SLIDE 1: CAMBRIDGE */}
              {currentPartner.type === "cambridge" && (
                <div className="flex flex-col items-center justify-center w-full gap-3 animate-fadeIn">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-2 border-[#D4AF37] shadow-md flex items-center justify-center p-1 overflow-hidden flex-shrink-0">
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

                  {/* Cohen Logo Badge */}
                  <div className="bg-white px-3.5 py-2 rounded-xl border border-gray-200 flex items-center shadow-sm">
                    <img src="/logo.png" alt="Cohen Logo" className="h-10 sm:h-12 w-auto object-contain" />
                  </div>
                </div>
              )}

              {/* SLIDE 2: IIT MADRAS SCHOOLCONNECT */}
              {currentPartner.type === "iit-madras" && (
                <div className="flex flex-col items-center justify-center w-full gap-3 animate-fadeIn">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-2 border-[#D4AF37] shadow-md flex items-center justify-center p-1 overflow-hidden flex-shrink-0">
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

                  {/* Lime-Yellow Oval Pill Badge */}
                  <div className="bg-[#D4E157] text-[#1E3A8A] font-extrabold text-xs sm:text-sm px-5 py-1.5 rounded-full border border-[#9E9D24] shadow-sm flex items-center gap-1 mt-0.5">
                    <span>Partner With Cohen International school</span>
                  </div>
                </div>
              )}

              {/* SLIDE 3: CBSE VIDWAN */}
              {currentPartner.type === "cbse-vidwan" && (
                <div className="flex flex-col items-center justify-center w-full gap-3 animate-fadeIn">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-navy-900 text-gold-400 flex items-center justify-center rounded-full font-bold text-sm shadow-md border-2 border-[#D4AF37]">
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

                  <div className="bg-[#D4E157] text-[#1E3A8A] font-extrabold text-xs sm:text-sm px-5 py-1.5 rounded-full border border-[#9E9D24] shadow-sm flex items-center gap-1 mt-0.5">
                    <span>CBSE Board Affiliated Coaching</span>
                  </div>
                </div>
              )}

              {/* SLIDE 4: STEM AI & ROBOTICS */}
              {currentPartner.type === "ai-robotics" && (
                <div className="flex flex-col items-center justify-center w-full gap-3 animate-fadeIn">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 text-white flex items-center justify-center rounded-full font-bold text-sm shadow-md border-2 border-[#D4AF37]">
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

                  <div className="bg-[#D4E157] text-[#1E3A8A] font-extrabold text-xs sm:text-sm px-5 py-1.5 rounded-full border border-[#9E9D24] shadow-sm flex items-center gap-1 mt-0.5">
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
                  className={`h-2 rounded-full transition-all ${
                    index === activePartnerIndex ? "w-7 bg-[#D4E157]" : "w-2 bg-gray-600"
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
