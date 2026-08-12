import React, { useState, useEffect } from "react";
import { Sparkles, UserPlus, PlayCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const heroSlides = [
  {
    id: 1,
    type: "image",
    title: "Campus Entrance",
    subtitle:
      "A green campus with smart classrooms and modern learning spaces.",
    src: "/bg.png",
  },
  {
    id: 2,
    type: "video",
    title: "Virtual Campus Tour",
    subtitle: "See our campus in motion with a short video tour.",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster: "/bg.png",
  },
  {
    id: 3,
    type: "image",
    title: "Smart Campus Life",
    subtitle: "Images of labs, sports, and collaborative student spaces.",
    src: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1920&auto=format&fit=crop",
  },
];

export default function Hero({ openAdmissionModal, openVirtualTour }) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".hero-overlay", {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) =>
        current === heroSlides.length - 1 ? 0 : current + 1,
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 shadow-[0_0_140px_rgba(0,0,0,0.95)]">
        {heroSlides[activeSlide].type === "video" ? (
          <video
            key={heroSlides[activeSlide].src}
            src={heroSlides[activeSlide].src}
            poster={heroSlides[activeSlide].poster}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            key={heroSlides[activeSlide].src}
            src={heroSlides[activeSlide].src}
            alt={heroSlides[activeSlide].title}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Decorative ambient lighting elements */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 hero-overlay">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-gold-400 text-xs font-medium tracking-wider uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
              Admissions Open 2026–27
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Excellence
              <br />
              <span className="text-gold-400 italic">Through Harmony</span>
            </h1>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
              Ranked #1 CBSE School in Bhubaneswar. A 10-acre green campus next
              to IIT Bhubaneswar — where world-class academics, integrated
              IIT-JEE & NEET coaching, AI & Robotics, and holistic growth create
              future leaders.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-navy-950 shadow-xl shadow-gold-500/20 hover:bg-gold-300 transition"
              >
                Apply Now
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm text-white hover:bg-white/20 transition"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>

        <div className="absolute left-0 right-0 bottom-12 flex justify-center">
          <div className="flex items-center gap-3">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === activeSlide ? "bg-gold-400" : "bg-white/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
