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
    <section id="why-choose" className="py-24 lg:py-32 bg-navy-900 text-white relative overflow-hidden">
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
            <Sparkles className="w-3.5 h-3.5 text-gold-400" /> Academic &amp; Value Addition Framework
          </div>
          <h2 className="font-display text-4xl lg:text-5xl text-white mb-4 font-bold">
            What Makes Us Different
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Our unique ecosystem combines standard CBSE excellence with pre-foundation mastery (CFP), full entrance integration (CSIP), and holistic skill building (CVAP).
          </p>
        </div>

        {/* ── FEATURED PILLARS 1 & 2: CFP & CSIP ── */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Pillar 1: CFP */}
          <div
            onClick={() => navigate('/academics')}
            className="cursor-pointer p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-gold-400/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(201,162,39,0.2)] group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gold-500/20 text-gold-400 flex items-center justify-center font-bold">
                    <BookMarked className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-gold-400 uppercase tracking-widest block">CFP</span>
                    <h3 className="font-display text-xl text-white font-bold group-hover:text-gold-400 transition-colors">
                      Cohen Foundation Program
                    </h3>
                  </div>
                </div>
                <span className="text-xs text-gold-400 bg-gold-500/15 border border-gold-400/30 px-3 py-1 rounded-full font-bold">
                  Classes 6 to 10
                </span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                A holistic journey fostering critical thinking and problem-solving with structured pre-foundation coaching for IIT-JEE, NEET &amp; Olympiads.
              </p>
              
              <div className="space-y-2.5 text-xs sm:text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span>Conceptual clarity + early competitive edge for IIT-JEE &amp; NEET</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span>Weekly tests, doubt clearing &amp; Olympiad reasoning training</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span>STEAM, Design Thinking, Coding &amp; Model UN (CMUN) integration</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-gold-400 group-hover:translate-x-1.5 transition-transform">
              <span>Learn More About CFP</span> <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Pillar 2: CSIP */}
          <div
            onClick={() => navigate('/academics')}
            className="cursor-pointer p-8 rounded-3xl bg-gradient-to-br from-gold-500/15 via-navy-800 to-navy-900 border-2 border-gold-400/50 hover:border-gold-400 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(201,162,39,0.3)] group flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gold-500 text-navy-900 flex items-center justify-center font-bold">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-gold-400 uppercase tracking-widest block">CSIP</span>
                    <h3 className="font-display text-xl text-white font-bold group-hover:text-gold-400 transition-colors">
                      Cohen School Integrated Program
                    </h3>
                  </div>
                </div>
                <span className="text-xs text-navy-900 bg-gold-400 px-3 py-1 rounded-full font-extrabold">
                  Classes 11 &amp; 12
                </span>
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Full integrated CBSE schooling with entrance-oriented coaching for IIT JEE, NEET/Medical, NISER, IISER, IISC &amp; Olympiads — catering to students of Odisha &amp; other states.
              </p>
              
              <div className="space-y-2 text-xs text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                  <span>IITian &amp; Doctorate entrance faculties with Vidwan Classes legacy (est. 2007)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                  <span>Subjective Board prep + CBT (Computer Based Tests) entrance exam pattern</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                  <span>Safe AC hostels, canteen, and visits to TIFR, ISRO, IIT, NISER &amp; IOP</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs font-bold text-gold-400 group-hover:translate-x-1.5 transition-transform">
              <span>Explore All 10 CSIP USPs</span> <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* ── PILLAR 3: CVAP (COHEN VALUE ADDITION PROGRAMS) ── */}
        <div className="text-center mb-10 reveal">
          <h3 className="font-display text-2xl sm:text-3xl text-white font-bold mb-2">
            CVAP - Cohen Value Addition Programs
          </h3>
          <p className="text-white/60 max-w-2xl mx-auto text-xs sm:text-sm">
            13 signature programs fostering global communication, AI tech, sports, space science, and public speaking.
          </p>
        </div>

        {/* 13 CVAP Program Cards Grid (Without Grade Numbers) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cvapPrograms.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                onClick={() => navigate('/academics')}
                className="card-cube cursor-pointer p-6 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 hover:border-gold-400/80 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_15px_35px_rgba(201,162,39,0.25)] group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gold-500/20 group-hover:bg-gold-500 group-hover:scale-110 transition-all duration-300 flex items-center justify-center overflow-hidden">
                      {item.image ? (
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      ) : (
                        <IconComp className="w-6 h-6 text-gold-400 group-hover:text-navy-900 transition-colors" />
                      )}
                    </div>
                    <span className="text-[10px] font-bold text-gold-400/90 uppercase tracking-wider bg-gold-500/10 px-2.5 py-1 rounded-full border border-gold-500/20">
                      {item.category}
                    </span>
                  </div>

                  <h4 className="font-display text-base sm:text-lg text-white mb-2 group-hover:text-gold-400 transition-colors font-bold leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-gold-400 group-hover:translate-x-1.5 transition-transform mt-2">
                  <span>Explore Academics</span> <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
