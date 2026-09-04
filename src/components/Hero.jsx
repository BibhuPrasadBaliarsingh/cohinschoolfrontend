import React, { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  UserPlus,
  PlayCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Award,
  Users,
  BookOpen,
  MapPin,
} from "lucide-react";

import coursolImg from "../assets/coursol.jpg";
import img3613 from "../assets/DSC03613.JPG";
import img3660 from "../assets/DSC03660.JPG";
import img3622 from "../assets/DSC03622.JPG";
import img3684 from "../assets/DSC03684.JPG";
import jeetopers from "../assets/jeetopers.png";
import neetresult from "../assets/neetresult.png";
import jeerankimg from "../assets/jeerankimg.png";

import mobCoursol1 from "../assets/mobileimage/coursol1.png";
import mobCoursol2 from "../assets/mobileimage/coursol2.png";
import mobCoursol3 from "../assets/mobileimage/coursol3.png";
import mobCoursol4 from "../assets/mobileimage/coursol4.png";
import mobCoursol5 from "../assets/mobileimage/coursol5.png";
import mobCoursol6 from "../assets/mobileimage/coursol6.png";
import mobCoursol7 from "../assets/mobileimage/coursol7.png";
import mobCoursol8 from "../assets/mobileimage/coursol8.png";

const heroSlides = [
  {
    id: 1,
    src: coursolImg,
    fit: "fill",
    mobileSrc: mobCoursol1,
    accent: "Shaping Tomorrow's Leaders",
    headline: ["Inspiring", "Future", "Leaders"],
    sub: "CBSE Affiliated • Nursery to Class XII • World-Class Infrastructure & Holistic Growth",
  },
  // {
  //   id: 2,
  //   src: jeeAdvance1,
  //   mobileSrc: mobCoursol2,
  //   fit: "fill",
  //   accent: "JEE (Advanced) Ranks & Excellence",
  //   headline: ["Proven", "JEE Advanced", "Success"],
  //   sub: "Odisha State Top Ranks in JEE (Advanced) with 1-on-1 Vidwan Classes Mentorship.",
  // },
  {
    id: 2,
    src: img3613,
    mobileSrc: mobCoursol6,
    fit: "fill",
    accent: "Welcome to Cohen International School",
    headline: ["Excellence", "Without", "Boundaries"],
    sub: "CBSE Affiliated • Nursery to Class XII • Cambridge English Partner",
  },
  {
    id: 3,
    src: jeetopers,
    mobileSrc: mobCoursol2,
    fit: "fill",
    accent: "Integrated Competitive Coaching",
    headline: ["Empowering", "Future IITians,", "NEET/Medicos & Scientists"],
    sub: "Comprehensive integrated school batch program for JEE (Main & Advanced) and NEET.",
  },
  {
    id: 4,
    src: jeerankimg,
    mobileSrc: mobCoursol8,
    fit: "fill",
    accent: "JEE Main & Advanced Ranks",
    headline: ["Proven", "JEE Rank", "Success"],
    sub: "Outstanding top ranks and competitive entrance excellence in JEE Main & Advanced.",
  },
  {
    id: 5,
    src: neetresult,
    mobileSrc: mobCoursol7,
    fit: "fill",
    accent: "NEET (UG) Medical Entrance Excellence",
    headline: ["Proven", "NEET (UG)", "Success"],
    sub: "Top medical entrance ranks produced with expert faculty mentorship & integrated coaching.",
  },
  {
    id: 6,
    src: img3660,
    mobileSrc: mobCoursol3,
    fit: "fill",
    accent: "Where Every Child Thrives",
    headline: ["Sports,", "Passion &", "Joy"],
    sub: "Holistic development through world-class sports infrastructure and guided athletics.",
  },
  {
    id: 7,
    src: img3622,
    mobileSrc: mobCoursol5,
    fit: "fill",
    accent: "10 Acres of Green Learning",
    headline: ["A Campus", "Like No", "Other"],
    sub: "Pollution-free, lush 10-acres campus nestled beside IIT Bhubaneswar at Barunei Hills.",
  },
  {
    id: 8,
    src: img3684,
    mobileSrc: mobCoursol4,
    fit: "fill",
    accent: "STEM & Innovation Labs",
    headline: ["Build.", "Innovate.", "Launch."],
    sub: "Drone labs, aerospace studios, AI robotics, and hands-on STEM from Class I onwards.",
  },
];

const stats = [
  { Icon: Award, value: 2015, suffix: "", label: "Founded" },
  { Icon: Users, value: 1200, suffix: "+", label: "Students" },
  { Icon: BookOpen, value: 55, suffix: "+", label: "Expert Faculty" },
  { Icon: MapPin, value: 10, suffix: " Acres", label: "Green Campus" },
];

function useCountUp(target, duration, active) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    const tick = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return val;
}

function StatItem({ stat, animate }) {
  const count = useCountUp(stat.value, 1800, animate);
  const { Icon } = stat;
  return (
    <div className="hero-stat-card flex items-center justify-start sm:justify-center gap-3 sm:gap-4 p-3.5 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md transition-all duration-300 hover:border-gold-500/40 hover:bg-white/[0.06]">
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gold-500/25 to-gold-500/10 border border-gold-500/40 flex items-center justify-center flex-shrink-0 shadow-[0_4px_15px_rgba(201,162,39,0.15)]">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold-400" />
      </div>
      <div>
        <div className="text-lg sm:text-2xl font-black bg-gradient-to-r from-white via-white to-gold-400 bg-clip-text text-transparent leading-tight tracking-tight">
          {animate ? count : 0}{stat.suffix}
        </div>
        <div className="text-[10px] sm:text-xs font-bold text-white/65 uppercase tracking-widest mt-0.5 sm:mt-1">
          {stat.label}
        </div>
      </div>
    </div>
  );
}

export default function Hero({ openAdmissionModal, openVirtualTour }) {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(null);
  const [textIn, setTextIn] = useState(true);
  const [statsActive, setStatsActive] = useState(false);
  const timerRef = useRef(null);

  const advance = (next) => {
    clearInterval(timerRef.current);
    setTextIn(false);
    setPrev(active);
    setTimeout(() => {
      setActive(next);
      setTextIn(true);
      setPrev(null);
    }, 520);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => advance((active + 1) % heroSlides.length), 6500);
    return () => clearInterval(timerRef.current);
  }, [active]);

  useEffect(() => {
    const t = setTimeout(() => setStatsActive(true), 1000);
    return () => clearTimeout(t);
  }, []);

  const slide = heroSlides[active];

  const transBase = {
    transition: "opacity 0.48s cubic-bezier(0.4,0,0.2,1), transform 0.52s cubic-bezier(0.4,0,0.2,1)",
  };

  const textStyle = (delay = 0) => ({
    ...transBase,
    transitionDelay: textIn ? `${delay}ms` : "0ms",
    opacity: textIn ? 1 : 0,
    transform: textIn ? "translateY(0)" : "translateY(18px)",
  });

  const wordStyle = (i) => ({
    display: "inline-block",
    ...transBase,
    transitionDelay: textIn ? `${100 + i * 90}ms` : "0ms",
    opacity: textIn ? 1 : 0,
    transform: textIn ? "translateY(0) skewY(0deg)" : "translateY(28px) skewY(2deg)",
    marginRight: "0.3em",
  });

  return (
    <div
      id="hero"
      aria-label="Cohen International School Hero"
      style={{
        position: "relative",
        width: "100%",
        background: "#070f1a",
      }}
    >
      {/* ── Main Hero Banner Viewport ───────────────────── */}
      <div
        className="hero-banner-viewport"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "#070f1a",
        }}
      >
        {/* ── Background slides ──────────────────────────── */}
        {heroSlides.map((s, i) => (
          <div
            key={s.id}
            className="hero-slide-item"
            style={{
              position: "absolute", inset: 0, zIndex: 0,
              transition: "opacity 1.1s cubic-bezier(0.4,0,0.2,1)",
              opacity: i === active ? 1 : 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              background: "#070f1a",
            }}
          >
            {/* Ambient blurred backdrop for contain mode posters */}
            {s.fit === "contain" && (
              <div
                style={{
                  position: "absolute",
                  inset: "-10%",
                  width: "120%",
                  height: "120%",
                  backgroundImage: `url(${s.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "blur(30px) brightness(0.35)",
                  transform: "scale(1.1)",
                }}
              />
            )}
            <picture
              className="hero-slide-picture"
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                zIndex: 1,
                display: "block",
              }}
            >
              {s.mobileSrc && (
                <source media="(max-width: 768px)" srcSet={s.mobileSrc} />
              )}
              <img
                className="hero-slide-img"
                src={s.src}
                alt={s.accent}
                fetchPriority={i === 0 ? "high" : "low"}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                width="1920"
                height="1080"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: s.fit || "cover",
                  objectPosition: "center center",
                  animation: i === active && s.fit !== "contain" ? "heroBgZoom 7s ease forwards" : "none",
                  transformOrigin: "center center",
                }}
              />
            </picture>
          </div>
        ))}

        {/* ── Soft dark tint layer for white text readability ─────────────────────────── */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "rgba(0, 0, 0, 0.35)",
          pointerEvents: "none"
        }} />

        {/* ── Animated particles ────────────────────────── */}
        <style>{`
          @keyframes heroBgZoom {
            from { transform: scale(1.0); }
            to   { transform: scale(1.07); }
          }
          @keyframes particleDrift {
            0%   { transform: translateY(0) translateX(0) scale(1);   opacity: 0; }
            20%  { opacity: 1; }
            80%  { opacity: 0.5; }
            100% { transform: translateY(-120px) translateX(30px) scale(0.4); opacity: 0; }
          }
          @keyframes scrollBounce {
            0%, 100% { transform: translateY(0); }
            50%       { transform: translateY(6px); }
          }
          @keyframes shimmerSlide {
            0%   { left: -100%; }
            100% { left: 200%; }
          }
          @keyframes pulseRing {
            0%   { transform: scale(0.9); opacity: 0.6; }
            100% { transform: scale(1.5); opacity: 0; }
          }
          .hero-cta-primary:hover { transform: translateY(-3px) scale(1.03); box-shadow: 0 18px 40px -10px rgba(201,162,39,0.55) !important; }
          .hero-cta-secondary:hover { background: rgba(255,255,255,0.18) !important; transform: translateY(-2px); }
          .hero-bullet-dot:hover { background: rgba(201,162,39,0.5) !important; }
          .hero-stat-card:hover { border-color: rgba(201,162,39,0.4) !important; background: rgba(201,162,39,0.08) !important; transform: translateY(-2px); }
          .hero-arrow-btn:hover {
            background: rgba(201, 162, 39, 0.92) !important;
            color: #070f1a !important;
            border-color: #E8C547 !important;
            transform: translateY(-50%) scale(1.12) !important;
            box-shadow: 0 12px 32px rgba(201, 162, 39, 0.5) !important;
          }
          .hero-arrow-btn:active {
            transform: translateY(-50%) scale(0.95) !important;
          }

          @media (max-width: 768px) {
            .hero-banner-viewport {
              min-height: 100vh !important;
              min-height: 100dvh !important;
            }
            .hero-content-container {
              padding: 100px 20px 70px !important;
            }
            .hero-slide-picture,
            .hero-slide-img {
              width: 100% !important;
              height: 100% !important;
              object-fit: fill !important;
              object-position: center center !important;
              animation: none !important;
            }
            .hero-arrow-btn {
              width: 40px !important;
              height: 40px !important;
            }
            .hero-arrow-left {
              left: 10px !important;
            }
            .hero-arrow-right {
              right: 10px !important;
            }
          }
        `}</style>

        {/* ── Left & Right Carousel Navigation Arrows ────────────────── */}
        <button
          type="button"
          onClick={() => advance((active - 1 + heroSlides.length) % heroSlides.length)}
          aria-label="Previous Slide"
          className="hero-arrow-btn hero-arrow-left"
          style={{
            position: "absolute",
            left: "24px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 25,
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            background: "rgba(7, 15, 26, 0.6)",
            border: "1.5px solid rgba(201, 162, 39, 0.5)",
            color: "#C9A227",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            backdropFilter: "blur(12px)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <ChevronLeft size={28} />
        </button>

        <button
          type="button"
          onClick={() => advance((active + 1) % heroSlides.length)}
          aria-label="Next Slide"
          className="hero-arrow-btn hero-arrow-right"
          style={{
            position: "absolute",
            right: "24px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 25,
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            background: "rgba(7, 15, 26, 0.6)",
            border: "1.5px solid rgba(201, 162, 39, 0.5)",
            color: "#C9A227",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            backdropFilter: "blur(12px)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <ChevronRight size={28} />
        </button>

        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            aria-hidden="true"
            style={{
              position: "absolute",
              borderRadius: "50%",
              background: `rgba(201,162,39,${0.15 + (i % 3) * 0.08})`,
              width: `${3 + (i % 4) * 2}px`,
              height: `${3 + (i % 4) * 2}px`,
              left: `${(i * 7.3) % 100}%`,
              bottom: `${10 + (i * 13) % 40}%`,
              zIndex: 2,
              animation: `particleDrift ${4 + (i % 5)}s ${i * 0.7}s infinite ease-out`,
            }}
          />
        ))}

        {/* ── Main content ──────────────────────────────── */}
        <div
          className="hero-content-container"
          style={{
            position: "relative", zIndex: 10,
            width: "100%", maxWidth: "1280px",
            margin: "0 auto",
            padding: "130px 32px 140px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >

          {/* Accent line */}
          <p style={{
            ...textStyle(50),
            color: "rgba(255,255,255,0.62)",
            fontSize: "clamp(0.85rem, 1.5vw, 1.05rem)",
            fontWeight: 500,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: "12px",
            minHeight: "1.5em",
          }}>
            {slide.accent}
          </p>

          {/* Headline */}
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.07,
            marginBottom: "28px",
            textShadow: "0 4px 32px rgba(0,0,0,0.45)",
            letterSpacing: "-0.01em",
            minHeight: "clamp(6rem, 14vw, 11rem)",
          }}>
            {slide.headline.map((word, wi) => (
              <span key={`${active}-${wi}`} style={wordStyle(wi)}>
                {wi === 0
                  ? <span style={{ color: "#C9A227" }}>{word}</span>
                  : word
                }
              </span>
            ))}
          </h1>

          {/* Gold rule */}
          <div style={{
            ...transBase,
            transitionDelay: textIn ? "360ms" : "0ms",
            width: textIn ? "88px" : "0px",
            height: "3px",
            background: "linear-gradient(90deg, #C9A227, rgba(201,162,39,0.2))",
            borderRadius: "2px",
            marginBottom: "24px",
            overflow: "hidden",
          }} />

          {/* Subtitle */}
          <p style={{
            ...textStyle(420),
            color: "rgba(255,255,255,0.78)",
            fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)",
            maxWidth: "600px",
            minHeight: "56px",
            lineHeight: 1.75,
            marginBottom: "40px",
            fontWeight: 400,
          }}>
            {slide.sub}
          </p>

          {/* CTAs */}
          <div style={{
            ...textStyle(500),
            display: "flex", flexWrap: "wrap", gap: "16px",
            marginBottom: "44px",
          }}>
            <button
              id="hero-apply-btn"
              onClick={() => openAdmissionModal?.("apply")}
              className="hero-cta-primary"
              style={{
                position: "relative",
                display: "inline-flex", alignItems: "center", gap: "10px",
                padding: "15px 32px",
                borderRadius: "999px",
                background: "linear-gradient(135deg, #C9A227 0%, #E8C547 50%, #C9A227 100%)",
                backgroundSize: "200% auto",
                color: "#0B1C2C",
                fontWeight: 800,
                fontSize: "0.95rem",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 8px 28px -6px rgba(201,162,39,0.45)",
                transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s ease",
                overflow: "hidden",
              }}
            >
              <UserPlus size={18} />
              Apply for Admissions for AY 2027-2028
              {/* Pulse ring */}
              <span style={{
                position: "absolute", inset: 0, borderRadius: "999px",
                border: "2px solid rgba(201,162,39,0.6)",
                animation: "pulseRing 2s 1.5s infinite ease-out",
              }} />
            </button>

            <button
              id="hero-tour-btn"
              onClick={() => openVirtualTour?.()}
              className="hero-cta-secondary"
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                padding: "15px 28px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "0.95rem",
                cursor: "pointer",
                backdropFilter: "blur(12px)",
                transition: "background 0.25s ease, transform 0.25s ease",
              }}
            >
              <PlayCircle size={18} color="#C9A227" />
              Virtual Campus Tour
            </button>
          </div>

          {/* Slide bullets & Scroll prompt */}
          <div style={{ display: "flex", gap: "24px", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => advance(i)}
                  className="hero-bullet-dot"
                  aria-label={`Slide ${i + 1}`}
                  style={{
                    width: i === active ? "36px" : "10px",
                    height: "10px",
                    borderRadius: "999px",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    background: i === active
                      ? "linear-gradient(90deg,#C9A227,#E8C547)"
                      : "rgba(255,255,255,0.25)",
                    transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                    boxShadow: i === active ? "0 0 12px rgba(201,162,39,0.5)" : "none",
                  }}
                />
              ))}
            </div>

            <a
              href="#hero-stats"
              aria-label="Scroll down"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "999px",
                border: "1px solid rgba(201,162,39,0.35)",
                background: "rgba(201,162,39,0.08)",
                backdropFilter: "blur(8px)",
                color: "#C9A227",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                animation: "scrollBounce 2s ease-in-out infinite",
              }}
            >
              <span>Scroll</span>
              <ChevronDown size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* ── Stats bar ─────────────────────────────────── */}
      <div
        id="hero-stats"
        className="relative w-full z-10 bg-gradient-to-b from-[#070f1a]/85 to-[#070f1a]/96 backdrop-blur-xl border-t border-gold-500/25 px-4 sm:px-6 py-4 sm:py-6 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 items-center">
          {stats.map((s, i) => (
            <StatItem key={i} stat={s} animate={statsActive} />
          ))}
        </div>
      </div>
    </div>
  );
}

