import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Target, Compass, Quote, ArrowRight, Download, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const talks = [
  {
    id: 1,
    image: "/images/cohen-talk/talk_1.jpg",
    day: "11",
    month: "September",
    title: "COHEN Talks",
  },
  {
    id: 2,
    image: "/images/cohen-talk/talk_2.jpeg",
    day: "17",
    month: "December",
    title: 'Cohen Talks "Newtons Playground"',
  },
  {
    id: 3,
    image: "/images/cohen-talk/talk_3.jpeg",
    day: "27",
    month: "July",
    title: "Cohen Talks on Chess in Education",
  },
];

export default function About({ openChairmanModal }) {
  const [showFullVision, setShowFullVision] = useState(false);
  const [showFullMission, setShowFullMission] = useState(false);

  useEffect(() => {
    const els = document.querySelectorAll("#about .reveal, #about .reveal-left, #about .reveal-right");
    els.forEach((el) => {
      el.classList.add("active-reveal");
    });
  }, []);

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden bg-white text-navy-900">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cream-100 to-transparent pointer-events-none"></div>

      {/* Floating Parachutes, Leaves & Hot Air Balloon Animations on White Background */}
      <style>{`
        @keyframes parachuteGlide {
          0% {
            transform: translateY(-40px) translateX(0px) rotate(-4deg);
            opacity: 0.3;
          }
          20% {
            opacity: 0.95;
          }
          50% {
            transform: translateY(160px) translateX(-30px) rotate(6deg);
            opacity: 1;
          }
          80% {
            opacity: 0.9;
          }
          100% {
            transform: translateY(320px) translateX(20px) rotate(-6deg);
            opacity: 0.3;
          }
        }
        @keyframes leafFlutter {
          0% {
            transform: translateY(100px) translateX(0px) rotate(0deg) scale(0.9);
            opacity: 0.3;
          }
          30% {
            transform: translateY(-60px) translateX(28px) rotate(55deg) scale(1.08);
            opacity: 0.95;
          }
          70% {
            transform: translateY(-180px) translateX(-22px) rotate(160deg) scale(0.95);
            opacity: 0.85;
          }
          100% {
            transform: translateY(-290px) translateX(15px) rotate(260deg) scale(0.9);
            opacity: 0.3;
          }
        }
        @keyframes hotAirFloat {
          0% {
            transform: translateY(140px) translateX(0px) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            opacity: 0.95;
          }
          60% {
            transform: translateY(-120px) translateX(22px) rotate(5deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-320px) translateX(-15px) rotate(-5deg);
            opacity: 0.3;
          }
        }
        .animate-parachute {
          animation: parachuteGlide 15s ease-in-out infinite alternate;
        }
        .animate-leaf-flutter {
          animation: leafFlutter 13s ease-in-out infinite;
        }
        .animate-hotair {
          animation: hotAirFloat 17s ease-in-out infinite;
        }
      `}</style>

      {/* Floating Elements Container (Left & Right Margins) */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden sm:block overflow-hidden">
        {/* Parachute 1 - Left Upper Margin */}
        <div className="absolute top-[12%] left-[2%] w-14 animate-parachute opacity-90">
          <svg viewBox="0 0 60 80" className="w-full h-auto filter drop-shadow-md">
            <defs>
              <linearGradient id="para-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF4D6D" />
                <stop offset="33%" stopColor="#FFB703" />
                <stop offset="66%" stopColor="#00F5D4" />
                <stop offset="100%" stopColor="#7209B7" />
              </linearGradient>
            </defs>
            <path d="M5,35 A25,25 0 0,1 55,35 Z" fill="url(#para-grad-1)" />
            <path d="M17.5,35 A25,25 0 0,1 42.5,35 Z" fill="rgba(255,255,255,0.35)" />
            <path d="M25,35 A25,25 0 0,1 35,35 Z" fill="rgba(255,255,255,0.5)" />
            <line x1="5" y1="35" x2="27" y2="60" stroke="#718096" strokeWidth="1.2" />
            <line x1="17.5" y1="35" x2="28.5" y2="60" stroke="#718096" strokeWidth="1.2" />
            <line x1="42.5" y1="35" x2="31.5" y2="60" stroke="#718096" strokeWidth="1.2" />
            <line x1="55" y1="35" x2="33" y2="60" stroke="#718096" strokeWidth="1.2" />
            <rect x="25" y="60" width="10" height="8" rx="2" fill="#D97706" />
          </svg>
        </div>

        {/* Parachute 2 - Right Middle Margin */}
        <div className="absolute top-[48%] right-[2.5%] w-16 animate-parachute opacity-90" style={{ animationDelay: "4s" }}>
          <svg viewBox="0 0 60 80" className="w-full h-auto filter drop-shadow-md">
            <defs>
              <linearGradient id="para-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00F5D4" />
                <stop offset="50%" stopColor="#00BBF9" />
                <stop offset="100%" stopColor="#4361EE" />
              </linearGradient>
            </defs>
            <path d="M5,35 A25,25 0 0,1 55,35 Z" fill="url(#para-grad-2)" />
            <path d="M17.5,35 A25,25 0 0,1 42.5,35 Z" fill="rgba(255,255,255,0.35)" />
            <line x1="5" y1="35" x2="27" y2="60" stroke="#718096" strokeWidth="1.2" />
            <line x1="17.5" y1="35" x2="28.5" y2="60" stroke="#718096" strokeWidth="1.2" />
            <line x1="42.5" y1="35" x2="31.5" y2="60" stroke="#718096" strokeWidth="1.2" />
            <line x1="55" y1="35" x2="33" y2="60" stroke="#718096" strokeWidth="1.2" />
            <rect x="25" y="60" width="10" height="8" rx="2" fill="#92400E" />
          </svg>
        </div>

        {/* Natural Green Leaf 1 - Left Lower Margin */}
        <div className="absolute top-[65%] left-[3.5%] w-9 animate-leaf-flutter opacity-90" style={{ animationDelay: "1.5s" }}>
          <svg viewBox="0 0 40 50" className="w-full h-auto filter drop-shadow-sm">
            <defs>
              <linearGradient id="about-leaf-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#52B788" />
                <stop offset="100%" stopColor="#1B4332" />
              </linearGradient>
            </defs>
            <path d="M20,2 C32,10 38,24 20,44 C2,24 8,10 20,2 Z" fill="url(#about-leaf-1)" />
            <path d="M20,2 Q20,23 20,44" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" />
            <path d="M20,14 C24,11 27,10 29,11" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" fill="none" />
            <path d="M20,22 C25,18 29,17 31,18" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" fill="none" />
            <path d="M20,14 C16,11 13,10 11,11" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" fill="none" />
            <path d="M20,22 C15,18 11,17 9,18" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" fill="none" />
            <path d="M20,44 Q20,48 18,50" stroke="#1B4332" strokeWidth="1.5" fill="none" />
          </svg>
        </div>

        {/* Natural Green Leaf 2 - Right Upper Margin */}
        <div className="absolute top-[18%] right-[3.5%] w-8 animate-leaf-flutter opacity-90" style={{ animationDelay: "5.5s" }}>
          <svg viewBox="0 0 40 50" className="w-full h-auto filter drop-shadow-sm">
            <defs>
              <linearGradient id="about-leaf-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#74C69D" />
                <stop offset="100%" stopColor="#2D6A4F" />
              </linearGradient>
            </defs>
            <path d="M20,2 C32,10 38,24 20,44 C2,24 8,10 20,2 Z" fill="url(#about-leaf-2)" />
            <path d="M20,2 Q20,23 20,44" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" />
            <path d="M20,14 C24,11 27,10 29,11" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" fill="none" />
            <path d="M20,22 C25,18 29,17 31,18" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" fill="none" />
            <path d="M20,14 C16,11 13,10 11,11" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" fill="none" />
            <path d="M20,22 C15,18 11,17 9,18" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" fill="none" />
            <path d="M20,44 Q20,48 18,50" stroke="#2D6A4F" strokeWidth="1.5" fill="none" />
          </svg>
        </div>

        {/* Hot Air Balloon - Right Lower Margin */}
        <div className="absolute top-[75%] right-[1.8%] w-16 animate-hotair opacity-90" style={{ animationDelay: "2.8s" }}>
          <svg viewBox="0 0 60 90" className="w-full h-auto filter drop-shadow-md">
            <defs>
              <linearGradient id="hab-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF9F1C" />
                <stop offset="50%" stopColor="#FF4081" />
                <stop offset="100%" stopColor="#7C4DFF" />
              </linearGradient>
            </defs>
            <path d="M30,5 C48,5 55,25 45,50 C40,62 36,65 30,65 C24,65 20,62 15,50 C5,25 12,5 30,5 Z" fill="url(#hab-grad-1)" />
            <ellipse cx="23" cy="20" rx="4" ry="12" fill="rgba(255,255,255,0.35)" transform="rotate(-15 23 20)" />
            <line x1="22" y1="65" x2="26" y2="78" stroke="#555" strokeWidth="1.2" />
            <line x1="38" y1="65" x2="34" y2="78" stroke="#555" strokeWidth="1.2" />
            <rect x="24" y="78" width="12" height="9" rx="2" fill="#8D6E63" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <p className="text-gold-600 font-medium tracking-widest uppercase text-sm mb-3">
              About the School
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-navy-900 leading-tight mb-6">
              A Temple of Learning
              <br />
              <span className="italic text-navy-700">
                Next to IIT Bhubaneswar
              </span>
            </h2>
            <p className="text-navy-700/80 text-lg leading-relaxed mb-6">
              Cohen International School (CIS) is a unique CBSE Senior Secondary
              school spread over 10 acres of lush greenery at the foothills of
              Barunei Hills, Jatani. Founded in 2015 by visionary educationists,
              it stands as a beacon of holistic, career-oriented education in
              Odisha.
            </p>
            <p className="text-navy-700/80 leading-relaxed mb-8">
              Our pedagogy —{" "}
              <strong>Collaborative, Instrumental & Self-Paced (CIS)</strong> —
              transforms classrooms into vibrant learning spaces. From Nursery
              to Class XII, students experience Project-Based Learning, Design
              Thinking, Cambridge English, Artificial Intelligence, Coding &
              Robotics, alongside integrated coaching for IIT-JEE and NEET at no
              extra cost.
            </p>

            {/* Motto Badge */}
            <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-gold-600" /> Motto: Excellence Through Harmony
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-10 items-start">
              {/* Our Vision Card */}
              <div className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-cream-200 shadow-sm hover:shadow-md transition">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-gold-600" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-navy-900 text-base">Our Vision</p>
                  <p className="text-xs sm:text-sm text-navy-700/80 mt-1 leading-relaxed">
                    {showFullVision ? (
                      "We envisage CIS as a unique international school that gives education a new name by breaking typical characteristics, moulding the future of students by optimising educational opportunities and imparting Knowledge, Insight, Innovation, Technology & Transformation."
                    ) : (
                      "We envisage CIS as a unique international school that gives education a new name by breaking typical characteristics..."
                    )}
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowFullVision(!showFullVision)}
                    className="mt-2.5 inline-flex items-center gap-1 text-xs font-bold text-gold-600 hover:text-gold-700 transition focus:outline-none"
                  >
                    <span>{showFullVision ? "Read Less" : "Read More"}</span>
                    {showFullVision ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Our Mission Card */}
              <div className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-cream-200 shadow-sm hover:shadow-md transition">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                  <Compass className="w-5 h-5 text-gold-600" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-navy-900 text-base">Our Mission</p>
                  <p className="text-xs sm:text-sm text-navy-700/80 mt-1 leading-relaxed">
                    {showFullMission ? (
                      <>
                        Cohen International School is committed to motivate, encourage and inculcate every student with the mantra of <strong>"Know, Learn and Outshine the World"</strong>. Our motto is <strong>'Excellence Through Harmony'</strong>. We believe each child is special, empowering them through best-in-class academics, sports &amp; creative learning with goal-oriented development.
                      </>
                    ) : (
                      <>
                        Cohen International School is committed to motivate, encourage and inculcate every student with the mantra of <strong>"Know, Learn and Outshine the World"</strong>...
                      </>
                    )}
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowFullMission(!showFullMission)}
                    className="mt-2.5 inline-flex items-center gap-1 text-xs font-bold text-gold-600 hover:text-gold-700 transition focus:outline-none"
                  >
                    <span>{showFullMission ? "Read Less" : "Read More"}</span>
                    {showFullMission ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/brocher.pdf"
                download="brocher.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md hover:scale-105 transition flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Brochure</span>
              </a>
              <span className="px-4 py-2 rounded-full bg-navy-900 text-white text-sm font-medium">
                CBSE Affiliated (#1530280)
              </span>
              <span className="px-4 py-2 rounded-full bg-gold-500/15 text-gold-700 text-sm font-medium">
                Subhadra Charitable Trust
              </span>
              <span className="px-4 py-2 rounded-full bg-gold-500/15 text-gold-700 text-sm font-medium">
                10 Acre Campus
              </span>
              <span className="px-4 py-2 rounded-full bg-gold-500/15 text-gold-700 text-sm font-medium">
                Boarding Available
              </span>
            </div>
          </div>

          <div className="relative reveal-right">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-cream-200 group">
              <img
                src="/chairman.jpg"
                alt="Founder Chairman Er. Jyoti Ranjan Tripathy"
                loading="lazy"
                decoding="async"
                width="600"
                height="540"
                className="w-full h-[540px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-400 text-xs font-medium mb-3">
                  <Quote className="w-3.5 h-3.5" /> Founder Chairman's Vision
                </div>
                <h3 className="font-display text-2xl lg:text-3xl text-white mb-2">
                  Chairman’s Message
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4 italic">
                  “Cohen International School is built as a temple of learning
                  where curiosity is nurtured, values are instilled, and every
                  student is empowered to lead.”
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gold-400 text-sm font-semibold">
                      — Er. Jyoti Ranjan Tripathy
                    </p>
                    <p className="text-white/60 text-xs">
                      Alumnus, IIT Kharagpur | Founder Chairman, CIS
                    </p>
                  </div>
                  <button
                    onClick={openChairmanModal}
                    className="px-4 py-2 bg-gold-500 text-navy-900 text-xs font-semibold rounded-full hover:bg-gold-400 transition shadow-lg flex items-center gap-1.5"
                  >
                    Read Full Message <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-gold-500 flex flex-col items-center justify-center shadow-xl animate-float">
              <span className="font-display text-3xl text-navy-900 font-bold">
                <AnimatedCounter end={10} suffix="+" duration={1800} />
              </span>
              <span className="text-navy-900 text-xs font-medium text-center leading-tight px-2">
                Years of Excellence
              </span>
            </div>
            {/* Stats */}
            <div className="mt-16 rounded-[2rem] bg-gold-500/10 border border-gold-400/30 p-6 shadow-2xl backdrop-blur-xl reveal">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="text-center sm:text-left">
                  <p className="font-display text-3xl sm:text-4xl text-gold-500 font-semibold">
                    <AnimatedCounter end={10} suffix="+" duration={2000} />
                  </p>
                  <p className="text-navy-950/80 text-sm mt-1">
                    Acre Green Campus
                  </p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-display text-3xl sm:text-4xl text-gold-500 font-semibold">
                    <AnimatedCounter end={1} prefix="#" duration={1500} />
                  </p>
                  <p className="text-navy-950/80 text-sm mt-1">
                    CBSE in Bhubaneswar
                  </p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-display text-3xl sm:text-4xl text-gold-500 font-semibold">
                    <AnimatedCounter start={2000} end={2015} duration={2200} />
                  </p>
                  <p className="text-navy-950/80 text-sm mt-1">
                    Year of Foundation
                  </p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-display text-3xl sm:text-4xl text-gold-500 font-semibold">
                    <AnimatedCounter end={100} suffix="%" duration={2000} />
                  </p>
                  <p className="text-navy-950/80 text-sm mt-1">
                    Smart Digital Ecosystem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 lg:mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl text-navy-900 text-center mb-10 lg:mb-14">
            Cohen-Talks
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {talks.map((talk) => (
              <article
                key={talk.id}
                className="group relative overflow-hidden rounded-[16px] border border-slate-200 bg-white shadow-[0_14px_35px_rgba(15,23,42,0.08)] flex flex-col justify-between cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                <Link to="/cohentalk" className="flex flex-col h-full justify-between">
                  <div className="aspect-square w-full overflow-hidden bg-white">
                    <img
                      src={talk.image}
                      alt={talk.title}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "/images/facilities_banner.png";
                      }}
                      className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Bottom Date & Title Bar */}
                  <div className="flex items-stretch bg-white border-t border-slate-100 min-h-[72px]">
                    <div className="bg-[#0b2545] text-white px-4 py-2.5 flex flex-col items-center justify-center min-w-[80px] flex-shrink-0">
                      <span className="font-display text-2xl sm:text-3xl font-bold leading-none">
                        {talk.day}
                      </span>
                      <span className="text-[11px] font-medium mt-1 leading-none text-white/90">
                        {talk.month}
                      </span>
                    </div>

                    <div className="p-3 sm:p-4 flex items-center">
                      <h4 className="font-display font-semibold text-navy-900 text-sm sm:text-base leading-snug group-hover:text-gold-600 transition line-clamp-2">
                        {talk.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 text-center">
            <Link
              to="/cohentalk"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-navy-900 text-white hover:bg-gold-500 hover:text-navy-950 font-bold rounded-xl shadow-lg transition-all duration-300 group"
            >
              <span>View All Cohen-Talks</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
