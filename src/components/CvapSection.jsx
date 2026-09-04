import React, { useState } from 'react';
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
  ChevronDown,
  ChevronUp,
  Camera,
  Maximize2,
  Trophy as ChessIcon
} from 'lucide-react';
import chessImg from '../assets/chess.png';

import ns2022_1 from '../assets/pdf_images/nightsky2022_img_1.jpg';
import ns2022_3 from '../assets/pdf_images/nightsky2022_img_3.jpg';
import ns2022_6 from '../assets/pdf_images/nightsky2022_img_6.jpg';
import ns2023_1 from '../assets/pdf_images/nightsky2023_img_1.jpg';
import ns2023_3 from '../assets/pdf_images/nightsky2023_img_3.jpg';
import ns2023_4 from '../assets/pdf_images/nightsky2023_img_4.jpg';
import ns2023_6 from '../assets/pdf_images/nightsky2023_img_6.jpg';
import ns2023_10 from '../assets/pdf_images/nightsky2023_img_10.jpg';

const cvapPrograms = [
  {
    icon: Globe,
    title: "Cambridge English",
    desc: "Preparing students for global success with English proficiency & communication.",
    category: "Global Communication"
  },
  {
    icon: Lightbulb,
    title: "Project Based Learning (PBL)",
    desc: "Empowering young minds through hands-on experiential learning with PBL.",
    category: "Experiential Learning"
  },
  {
    icon: BookMarked,
    title: "Theme Based Learning",
    desc: "Connecting interdisciplinary concepts for real-world contextual understanding.",
    category: "Thematic Pedagogy"
  },
  {
    icon: Cpu,
    title: "Design Thinking & STEAM Learning",
    desc: "Inspiring innovation and shaping leaders: Where design thinking meets STEAM.",
    category: "Innovation & Tech"
  },
  {
    icon: Bot,
    title: "Artificial Intelligence",
    desc: "Empowering the next generation with future tech and AI education.",
    category: "Future Tech"
  },
  {
    icon: Landmark,
    title: "Cohen Model United Nations (CMUN)",
    desc: "Shaping future diplomats through critical thinking, debate, and collaboration.",
    category: "Diplomacy & Leadership"
  },
  {
    icon: Volume2,
    title: "Phonics & Communications",
    desc: "Empowering language mastery and phonetics for effective expression.",
    category: "Language Mastery"
  },
  {
    icon: Microscope,
    title: "Scientific Inquiry",
    desc: "Nurturing critical thinkers through the art of scientific inquiry.",
    category: "Research & Logic"
  },
  {
    icon: MessageSquare,
    title: "Cohen Talks",
    desc: "Where ideas ignite and inspire change through keynotes from leaders.",
    category: "Thought Leadership"
  },
  {
    icon: Compass,
    title: "Astronomy & Astrophysics",
    desc: "Journey through the stars: Explore space at our science camps and observatories.",
    category: "Space Science"
  },
  {
    icon: BookOpen,
    title: "Learning Engagements",
    desc: "Bringing concepts to life through immersive learning journeys.",
    category: "Immersive Learning"
  },
  {
    icon: Mic,
    title: "Eloquence Essence Classes",
    desc: "Find Your Voice, Shape Your World through public speaking workshops.",
    category: "Public Speaking"
  },
  {
    icon: Trophy,
    title: "Sports & Athletics",
    desc: "Cricket, Football, Basketball, Roll Ball, Skating, Athletics: Building character & fitness.",
    category: "Physical Excellence"
  },
  {
    icon: Music,
    title: "Music, Dance, Drama, and More",
    desc: "From rhythm to rhyme: Embrace artistry in music, dance, and drama.",
    category: "Creative Arts"
  },
  {
    icon: ChessIcon,
    image: chessImg,
    title: "Chess in Education (THINK TURF)",
    desc: "In collaboration with THINK TURF for Grades 1-6. FREE for first 2 months — building logical thinking & concentration.",
    category: "Cognitive Mind Sports"
  }
];

export default function CvapSection() {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const visiblePrograms = isExpanded ? cvapPrograms : cvapPrograms.slice(0, 6);

  return (
    <section id="cvap-section" className="py-12 lg:py-16 bg-navy-950 text-white relative overflow-hidden border-t border-gold-500/20">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" /> Value-Addition Programs Ecosystem
          </div>
          <h2 className="font-display text-4xl lg:text-5xl text-white mb-4 font-bold">
            CVAP - Cohen Value Addition Programs
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed font-medium">
            15 signature value-addition programs fostering Theme Based Learning, AI technology, space science, diplomacy, public speaking, and cognitive sports alongside CBSE excellence.
          </p>
        </div>

        {/* CVAP Program Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {visiblePrograms.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                onClick={() => navigate('/cvap')}
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

                  <h3 className="font-display text-base sm:text-lg text-white mb-2 group-hover:text-gold-400 transition-colors font-bold leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-gold-400 group-hover:translate-x-1.5 transition-transform mt-2">
                  <span>Explore Program</span> <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* View More / Show Less Toggle Button & Link to Dedicated Page */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-center">
          <button
            type="button"
            onClick={() => {
              setIsExpanded(!isExpanded);
              if (isExpanded) {
                const el = document.getElementById('cvap-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 text-navy-950 font-extrabold text-sm hover:brightness-110 transition shadow-xl cursor-pointer hover:scale-105"
          >
            {isExpanded ? (
              <>
                <span>Show Less Programs</span>
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                <span>View All {cvapPrograms.length} CVAP Programs &amp; Astronomy Reports</span>
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => navigate('/cvap')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm hover:bg-white/20 transition cursor-pointer hover:scale-105"
          >
            <span>Open Dedicated CVAP Page</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </button>
        </div>

        {/* CVAP Astronomy & Night Sky Observation Photo Gallery (From PDF Publications) */}
        <div className="mt-14 pt-10 border-t border-white/15 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5 text-gold-400" /> Astronomy &amp; Night Sky Observation Photos
          </div>
          <h3 className="font-display text-xl sm:text-2xl lg:text-3xl text-white font-bold mb-3">
            Night Sky Observation &amp; Space Science Camps
          </h3>
          <p className="text-white/70 text-xs sm:text-sm max-w-2xl mx-auto mb-8">
            Glimpses of Cohen International School students participating in Night Sky Observation stargazing camps, telescope celestial tracking, and astrophysics workshops.
          </p>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: ns2023_1, title: "Night Sky Camp 2023", sub: "Telescope Stargazing" },
              { img: ns2022_1, title: "Night Sky Camp 2022", sub: "Celestial Mapping" },
              { img: ns2023_3, title: "Astrophysics Workshop", sub: "Space Science" },
              { img: ns2022_3, title: "Observation Session", sub: "Lunar & Planetary Tracking" },
              { img: ns2023_4, title: "Stargazing Expedition", sub: "Night Sky Camp" },
              { img: ns2022_6, title: "Student Astrophotography", sub: "Telescope Lab" },
              { img: ns2023_6, title: "Celestial Observation", sub: "Space Science Camp" },
              { img: ns2023_10, title: "Night Sky Report 2023", sub: "Astrophysics Conclave" }
            ].map((pic, i) => (
              <div
                key={i}
                onClick={() => navigate('/cvap')}
                className="relative group rounded-2xl overflow-hidden border border-white/15 bg-navy-900 aspect-[4/3] cursor-pointer shadow-lg hover:border-gold-400 transition-all duration-300 hover:scale-[1.03]"
              >
                <img
                  src={pic.img}
                  alt={pic.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity p-3 flex flex-col justify-end text-left">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-gold-400">{pic.sub}</span>
                  <p className="text-xs font-bold text-white leading-tight">{pic.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
