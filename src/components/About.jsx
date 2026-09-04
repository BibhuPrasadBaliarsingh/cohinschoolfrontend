import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Target, Compass, Quote, ArrowRight, Download, Sparkles, ChevronDown, ChevronUp, Atom, GraduationCap, FlaskConical, Microscope } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";



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
    <section id="about" className="py-12 lg:py-16 relative overflow-hidden bg-white text-navy-900">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cream-100 to-transparent pointer-events-none"></div>

      {/* Floating Academic & Science Animations: Atoms, Graduation Caps, Math Symbols, Greek Letters */}
      <style>{`
        @keyframes floatAcademic1 {
          0% { transform: translateY(0px) rotate(0deg) scale(0.95); opacity: 0.4; }
          50% { transform: translateY(-40px) rotate(15deg) scale(1.1); opacity: 0.95; }
          100% { transform: translateY(0px) rotate(0deg) scale(0.95); opacity: 0.4; }
        }
        @keyframes floatAcademic2 {
          0% { transform: translateY(0px) rotate(0deg) scale(1); opacity: 0.35; }
          50% { transform: translateY(45px) rotate(-18deg) scale(1.15); opacity: 0.9; }
          100% { transform: translateY(0px) rotate(0deg) scale(1); opacity: 0.35; }
        }
        @keyframes pulseAtom {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        .animate-academic-1 { animation: floatAcademic1 10s ease-in-out infinite; }
        .animate-academic-2 { animation: floatAcademic2 12s ease-in-out infinite; }
        .animate-atom-spin { animation: pulseAtom 16s linear infinite; }
      `}</style>

      {/* Floating Academic Elements Container (Left & Right Margins) */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden sm:block overflow-hidden">
        {/* Floating Science Atom - Left Upper Margin */}
        <div className="absolute top-[10%] left-[2.5%] p-3.5 rounded-2xl bg-white/90 shadow-xl border border-gold-400/40 text-gold-600 animate-academic-1">
          <Atom className="w-8 h-8 text-gold-500 animate-atom-spin" />
        </div>

        {/* Floating Graduation Cap - Right Upper Margin */}
        <div className="absolute top-[16%] right-[3%] p-3.5 rounded-2xl bg-navy-900 shadow-xl border border-gold-400/40 text-gold-400 animate-academic-2">
          <GraduationCap className="w-8 h-8 text-gold-400" />
        </div>

        {/* Floating Greek & Math Symbols Pill (π, β, γ, E=mc², + - ×) - Left Middle Margin */}
        <div className="absolute top-[42%] left-[2%] px-3.5 py-2.5 rounded-2xl bg-gradient-to-r from-navy-900 to-navy-800 text-gold-400 font-serif text-sm font-bold shadow-xl border border-gold-400/40 animate-academic-2 flex items-center gap-2">
          <span className="text-base font-extrabold text-gold-300">π</span>
          <span className="text-xs text-white/70">•</span>
          <span className="text-base font-extrabold text-gold-400">β</span>
          <span className="text-xs text-white/70">•</span>
          <span className="text-base font-extrabold text-gold-300">γ</span>
          <span className="text-xs text-gold-400 font-mono bg-white/10 px-2 py-0.5 rounded">+ − × ÷</span>
        </div>

        {/* Floating Chemistry Flask & Lab - Left Lower Margin */}
        <div className="absolute top-[68%] left-[3%] p-3.5 rounded-2xl bg-white/90 shadow-xl border border-emerald-400/40 text-emerald-600 animate-academic-1">
          <FlaskConical className="w-7 h-7 text-emerald-600" />
        </div>

        {/* Floating Physics & Math Formula Pill (α + β = γ | √x | ∞) - Right Middle Margin */}
        <div className="absolute top-[52%] right-[2.5%] px-3.5 py-2.5 rounded-2xl bg-white/90 shadow-xl border border-gold-400/40 text-navy-900 font-serif text-xs font-bold animate-academic-1 flex items-center gap-2">
          <span className="text-sm font-bold text-navy-900 font-mono">E = mc²</span>
          <span className="text-xs text-navy-400">•</span>
          <span className="text-sm font-bold text-gold-600">√x</span>
          <span className="text-xs text-navy-400">•</span>
          <span className="text-sm font-bold text-navy-900">∞</span>
        </div>

        {/* Floating Microscope / Research Icon - Right Lower Margin */}
        <div className="absolute top-[76%] right-[3%] p-3.5 rounded-2xl bg-navy-900 shadow-xl border border-sky-400/40 text-sky-400 animate-academic-2">
          <Microscope className="w-7 h-7 text-sky-400" />
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
                Near to IIT Bhubaneswar
              </span>
            </h2>
            <p className="text-navy-700/80 text-lg leading-relaxed mb-6">
              Cohen International School (CIS) is a unique CBSE Senior Secondary
              school spread over 10 acres of lush greenery at the foothills of
              Barunei Hills, Jatani. Founded in 2015 by visionary educationists,
              it stands as a beacon of holistic, career-oriented education in
              Odisha.
            </p>
            <p className="text-navy-700/80 text-lg leading-relaxed mb-6">
              Our pedagogy —{" "}
              <strong>Collaborative, Instrumental & Engaging (CIS)</strong> —
              transforms classrooms into vibrant learning spaces. From Nursery
              to Class XII, students experience Theme-Based Learning, Project-Based Learning, Design
              Thinking, Cambridge English, Artificial Intelligence, Coding &
              Robotics, alongside integrated coaching for IIT-JEE and NEET at no
              extra cost.
            </p>

            {/* Motto Badge */}
            <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-gold-600" /> Motto: Enabling Excellence, Through Harmony
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
                        Cohen International School is committed to motivate, encourage and inculcate every student with the mantra of <strong>"Know, Learn and Outshine the World"</strong>. Our motto is <strong>'Enabling Excellence, Through Harmony'</strong>. We believe each child is special, empowering them through best-in-class academics, sports &amp; creative learning with goal-oriented development.
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
              <a
                href="https://www.subhadracharitabletrust.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-gold-500/15 text-gold-700 hover:bg-gold-500/25 hover:text-gold-800 text-sm font-medium transition cursor-pointer"
              >
                Subhadra Charitable Trust
              </a>
              <a
                href="https://sciencemovement.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-emerald-500/15 text-emerald-700 hover:bg-emerald-500/25 hover:text-emerald-800 text-sm font-medium transition cursor-pointer flex items-center gap-1"
              >
                Science Movement
              </a>
              <a
                href="http://vidwanclasses.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-purple-500/15 text-purple-700 hover:bg-purple-500/25 hover:text-purple-800 text-sm font-medium transition cursor-pointer flex items-center gap-1"
              >
                Vidwan Classes
              </a>
              <span className="px-4 py-2 rounded-full bg-gold-500/15 text-gold-700 text-sm font-medium">
                10 Acres Campus
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

            {/* Floating Gold Circular Stamp Seal (Direct Image Reference) */}
            <div className="absolute -top-7 -right-7 sm:-top-8 sm:-right-8 w-36 h-36 sm:w-40 sm:h-40 animate-float z-20 select-none group cursor-pointer">
              <div className="relative w-full h-full -rotate-12 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500">
                <img
                  src="/images/over_2_decades_stamp.png"
                  alt="Over 2 Decades of Excellence Stamp"
                  className="w-full h-full object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.35)]"
                />
              </div>
            </div>
            {/* Stats */}
            <div className="mt-16 rounded-[2rem] bg-gold-500/10 border border-gold-400/30 p-6 shadow-2xl backdrop-blur-xl reveal">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="text-center sm:text-left">
                  <p className="font-display text-3xl sm:text-4xl text-gold-500 font-semibold">
                    <AnimatedCounter end={10} suffix="+" duration={2000} />
                  </p>
                  <p className="text-navy-950/80 text-sm mt-1">
                    Acres Green Campus
                  </p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-display text-3xl sm:text-4xl text-gold-500 font-semibold">
                    <AnimatedCounter end={1} prefix="#" duration={1500} />
                  </p>
                  <p className="text-navy-950/80 text-sm mt-1">
                    CBSE School in Bhubaneswar
                  </p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-display text-3xl sm:text-4xl text-gold-500 font-semibold">
                    <AnimatedCounter start={2000} end={2015} duration={2200} useGrouping={false} />
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
    </section>
  );
}
