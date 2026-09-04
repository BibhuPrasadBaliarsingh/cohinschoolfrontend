import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Globe,
  Lightbulb,
  Cpu,
  Bot,
  Landmark,
  Volume2,
  Microscope,
  MessageSquare,
  Compass,
  BookOpen,
  Mic,
  Trophy,
  Music,
  ArrowRight,
  Sparkles,
  BookMarked,
  GraduationCap,
  CheckCircle2,
  Trophy as ChessIcon
} from 'lucide-react';
import chessImg from '../assets/chess.png';

const cvapPrograms = [
  {
    icon: Globe,
    title: "Cambridge English",
    desc: "Preparing students for global success",
    category: "Global Communication"
  },
  {
    icon: Lightbulb,
    title: "Project Based Learning (PBL)",
    desc: "Empowering young minds through hands-on learning with PBL",
    category: "Experiential Learning"
  },
  {
    icon: BookMarked,
    title: "Theme Based Learning",
    desc: "Connecting interdisciplinary concepts for real-world contextual understanding",
    category: "Thematic Pedagogy"
  },
  {
    icon: Cpu,
    title: "Design Thinking & STEAM Learning",
    desc: "Inspiring innovation and shaping leaders: Where design thinking meets STEAM",
    category: "Innovation & Tech"
  },
  {
    icon: Bot,
    title: "Artificial Intelligence",
    desc: "Empowering the next generation with AI education",
    category: "Future Tech"
  },
  {
    icon: Landmark,
    title: "Cohen Model United Nations (CMUN)",
    desc: "Shaping future diplomats through critical thinking and collaboration",
    category: "Diplomacy & Leadership"
  },
  {
    icon: Volume2,
    title: "Phonics & Communications",
    desc: "Empowering language mastery for effective expression",
    category: "Language Mastery"
  },
  {
    icon: Microscope,
    title: "Scientific Inquiry",
    desc: "Nurturing critical thinkers through the art of inquiry",
    category: "Research & Logic"
  },
  {
    icon: MessageSquare,
    title: "Cohen Talks",
    desc: "Where ideas ignite and inspire change",
    category: "Thought Leadership"
  },
  {
    icon: Compass,
    title: "Astronomy & Astrophysics",
    desc: "Journey through the stars: Explore space at our science camp",
    category: "Space Science"
  },
  {
    icon: BookOpen,
    title: "Learning Engagements",
    desc: "Bringing concepts to life through immersive learning journeys",
    category: "Immersive Learning"
  },
  {
    icon: Mic,
    title: "Eloquence Essence Classes",
    desc: "Find Your Voice, Shape Your World",
    category: "Public Speaking"
  },
  {
    icon: Trophy,
    title: "Sports & Athletics",
    desc: "Cricket, Football, Volleyball, Basketball, Roll Ball, Skating, Athletics. Strength in unity: Building character through teamwork and sports",
    category: "Physical Excellence"
  },
  {
    icon: Music,
    title: "Music, Dance, Drama, and More",
    desc: "From rhythm to rhyme: Embrace artistry in music, dance and drama",
    category: "Creative Arts"
  },
  {
    icon: ChessIcon,
    image: chessImg,
    title: "Chess in Education (THINK TURF)",
    desc: "In collaboration with THINK TURF for Grades 1-6. FREE for first 2 months — building concentration, logical thinking, speed, accuracy & decision-making.",
    category: "Cognitive Mind Sports"
  }
];

export default function WhyChoose() {
  const navigate = useNavigate();

  return (
    <section id="why-choose" className="py-12 lg:py-16 bg-navy-900 text-white relative overflow-hidden">
      {/* Background Image with Tint */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/images/about_banner.png"
          alt="Campus Facilities Background"
          className="w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050D16]/85 via-[#050D16]/0 to-[#050D16]/60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" /> Flagship Academic Programs (CFP &amp; CSIP)
          </div>
          <h2 className="font-display text-4xl lg:text-5xl text-white mb-4 font-bold">
            What Makes Us Different
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Our unique ecosystem combines standard CBSE excellence with pre-foundation mastery (CFP), full entrance integration (CSIP), and holistic skill building (CVAP).
          </p>
        </div>        {/* ── FEATURED PILLARS 1 & 2: CFP & CSIP ── */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          {/* Pillar 1: CFP */}
          <div
            onClick={() => navigate('/academics')}
            className="lg:col-span-5 cursor-pointer p-7 sm:p-8 rounded-3xl bg-white text-navy-900 border border-cream-300 shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-navy-900 text-gold-400 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase">
                  CFP
                </span>
                <span className="text-xs font-bold text-navy-600">Classes 6 to 10</span>
              </div>
              <h3 className="font-serif text-2xl text-navy-900 font-bold mb-3">
                Cohen Foundation Program (CFP)
              </h3>
              <p className="text-navy-700/80 text-sm leading-relaxed mb-5">
                A holistic journey fostering critical thinking, problem-solving, and structured pre-foundation coaching for IIT-JEE, NEET &amp; Olympiads.
              </p>

              {/* Core Feature Highlights Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-cream-100/70 border border-cream-200">
                  <p className="text-xs font-bold text-navy-900">Pre-Foundation</p>
                  <p className="text-[11px] text-navy-700/70 mt-0.5">IIT-JEE &amp; NEET Early Edge</p>
                </div>
                <div className="p-3 rounded-xl bg-cream-100/70 border border-cream-200">
                  <p className="text-xs font-bold text-navy-900">Olympiad Prep</p>
                  <p className="text-[11px] text-navy-700/70 mt-0.5">Logical &amp; Mental Reasoning</p>
                </div>
                <div className="p-3 rounded-xl bg-cream-100/70 border border-cream-200">
                  <p className="text-xs font-bold text-navy-900">STEAM &amp; AI</p>
                  <p className="text-[11px] text-navy-700/70 mt-0.5">Robotics, Coding &amp; CMUN</p>
                </div>
                <div className="p-3 rounded-xl bg-cream-100/70 border border-cream-200">
                  <p className="text-xs font-bold text-navy-900">Weekly Assessment</p>
                  <p className="text-[11px] text-navy-700/70 mt-0.5">Regular Tests &amp; Doubt Sessions</p>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-navy-800 font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span>Conceptual clarity + competitive edge for middle &amp; high schoolers</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span>Weekly tests &amp; dedicated doubt-clearing sessions</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span>Olympiad &amp; Reasoning training with Science camp exposure</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span>Early exposure to Coding, Robotics, AI and Model UN (CMUN)</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-cream-100 border border-cream-200 text-xs text-navy-800 font-semibold flex items-center justify-between">
              <span>Prepares students seamlessly for Class 11 &amp; 12 CSIP Entrance Coaching.</span>
              <ArrowRight className="w-4 h-4 text-gold-600 flex-shrink-0 ml-2" />
            </div>
          </div>

          {/* Pillar 2: CSIP */}
          <div
            onClick={() => navigate('/academics')}
            className="lg:col-span-7 cursor-pointer p-8 rounded-3xl bg-navy-900 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between border-2 border-gold-500/40 hover:border-gold-400 transition-all duration-300"
          >
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-gold-500/10 rounded-full blur-2xl" />

            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gold-500 text-navy-900 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase">
                  CSIP
                </span>
                <span className="text-xs font-bold text-gold-400">Classes 11 &amp; 12</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold mb-2">
                Cohen School Integrated Program (CSIP)
              </h3>
              <p className="text-gold-400 font-semibold text-xs sm:text-sm mb-6">
                Our USPs for CSIP (Grades 11 &amp; 12) — Catering to all students of Odisha &amp; other states
              </p>

              <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm text-white/90">
                <div className="flex items-start gap-2.5 bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <span className="text-gold-400 font-bold">1.</span>
                  <span>Integrated CBSE schooling + IIT JEE, NEET, NISER, IISER, IISC &amp; Olympiad coaching.</span>
                </div>
                <div className="flex items-start gap-2.5 bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <span className="text-gold-400 font-bold">2.</span>
                  <span>Entrance faculties are alumni of top IITs &amp; PhD holders / Doctorates / Gold Medalists.</span>
                </div>
                <div className="flex items-start gap-2.5 bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <span className="text-gold-400 font-bold">3.</span>
                  <span>Regular subjective tests for Board preparations.</span>
                </div>
                <div className="flex items-start gap-2.5 bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <span className="text-gold-400 font-bold">4.</span>
                  <span>Weekly, fortnightly &amp; monthly CBTs (Computer Based Tests) for entrance exam pattern.</span>
                </div>
                <div className="flex items-start gap-2.5 bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <span className="text-gold-400 font-bold">5.</span>
                  <span>Rich legacy of Vidwan Classes (est. 2007) — pioneers of IIT JEE &amp; NEET coaching in Odisha.</span>
                </div>
                <div className="flex items-start gap-2.5 bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <span className="text-gold-400 font-bold">6.</span>
                  <span>Strong alumni network passed out of top IITs, IISC, NISER, IISER, ISI etc.</span>
                </div>
                <div className="flex items-start gap-2.5 bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <span className="text-gold-400 font-bold">7.</span>
                  <span>Regular PTMs, result analysis &amp; academic journey management by top faculties.</span>
                </div>
                <div className="flex items-start gap-2.5 bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <span className="text-gold-400 font-bold">8.</span>
                  <span>Safe AC hostel accommodation with own canteen staff providing hygienic &amp; balanced diet.</span>
                </div>
                <div className="flex items-start gap-2.5 bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <span className="text-gold-400 font-bold">9.</span>
                  <span>Recreational facilities, Sports, &amp; visits to reputed institutes (IIT, NISER, SDI, IOP).</span>
                </div>
                <div className="flex items-start gap-2.5 bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <span className="text-gold-400 font-bold">10.</span>
                  <span>Seminars at Cohen with resource persons from TIFR, ISRO, IIT, NISER, IOP.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-gold-400 font-semibold">
              <span>Full Coaching Integrated — Zero Extra Fee</span>
              <span className="flex items-center gap-1">Available for PCM &amp; PCB Streams <ArrowRight className="w-3.5 h-3.5" /></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
