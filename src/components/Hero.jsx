import React, { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  UserPlus,
  PlayCircle,
  ChevronDown,
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

import mobCoursol1 from "../assets/mobileimage/coursol1.png";
import mobCoursol2 from "../assets/mobileimage/coursol2.png";
import mobCoursol3 from "../assets/mobileimage/coursol3.png";
import mobCoursol4 from "../assets/mobileimage/coursol4.png";
import mobCoursol5 from "../assets/mobileimage/coursol5.png";
import mobCoursol6 from "../assets/mobileimage/coursol6.png";

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
    mobileSrc: mobCoursol3,
    fit: "fill",
    accent: "Welcome to Cohen International",
    headline: ["Excellence", "Without", "Boundaries"],
    sub: "CBSE Affiliated • Nursery to Class XII • Cambridge English Partner",
  },
  {
    id: 3,
    src: jeetopers,
    mobileSrc: mobCoursol4,
    fit: "fill",
    accent: "Integrated Competitive Coaching",
    headline: ["Empowering", "Future", "IITians"],
    sub: "Comprehensive integrated school batch program for JEE (Main & Advanced) and NEET.",
  },
  {
    id:  4,
    src: img3660,
    mobileSrc: mobCoursol5,
    fit: "fill",
    accent: "Where Every Child Thrives",
    headline: ["Sports,", "Passion &", "Joy"],
    sub: "Holistic development through world-class sports infrastructure and guided athletics.",
  },
  {
    id: 5,
    src: img3622,
    mobileSrc: mobCoursol6,
    fit: "fill",
    accent: "10 Acres of Green Learning",
    headline: ["A Campus", "Like No", "Other"],
    sub: "Pollution-free, lush 10-acre campus nestled beside IIT Bhubaneswar at Barunei Hills.",
  },
  {
    id: 6,
    src: img3684,
    mobileSrc: mobCoursol6,
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
  { Icon: MapPin, value: 10, suffix: " Ac", label: "Green Campus" },
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
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "16px",
      padding: "16px 20px",
      borderRadius: "16px",
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.06)",
      backdropFilter: "blur(10px)",
      transition: "all 0.3s ease",
    }}
      className="hero-stat-card"
    >
      <div style={{
        width: 48, height: 48, borderRadius: "14px",
        background: "linear-gradient(135deg, rgba(201,162,39,0.25) 0%, rgba(201,162,39,0.08) 100%)",
        border: "1px solid rgba(201,162,39,0.4)",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
        boxShadow: "0 4px 15px rgba(201,162,39,0.15)",
      }}>
        <Icon size={22} color="#E8C547" />
      </div>
      <div>
        <div style={{
          fontSize: "1.65rem",
          fontWeight: 900,
          background: "linear-gradient(135deg, #FFFFFF 40%, #E8C547 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          lineHeight: 1.1,
          letterSpacing: "-0.02em"
        }}>
          {animate ? count : 0}{stat.suffix}
        </div>
        <div style={{
          fontSize: "0.75rem",
          fontWeight: 600,
          color: "rgba(255,255,255,0.65)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginTop: 4
        }}>
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
          }
        `}</style>

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
        style={{
          position: "relative",
          width: "100%",
          zIndex: 11,
          background: "linear-gradient(180deg, rgba(7,15,26,0.85) 0%, rgba(7,15,26,0.96) 100%)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(201,162,39,0.25)",
          padding: "24px 20px",
          boxShadow: "0 -10px 40px rgba(0,0,0,0.5)",
        }}
      >
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
          alignItems: "center",
        }}>
          {stats.map((s, i) => (
            <StatItem key={i} stat={s} animate={statsActive} />
          ))}
        </div>
      </div>
    </div>
  );
}

