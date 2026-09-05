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
  Trophy as ChessIcon
} from 'lucide-react';
import chessImg from '../assets/chess.png';

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
    icon: MessageSquare,
    title: "Cohen Talks",
    desc: "A signature flagship keynote series where ideas ignite: top industry leaders, CEOs, and scientists inspire students.",
    category: "Thought Leadership",
    link: "/cohen-talk"
  },
  {
    icon: Compass,
    title: "Astronomy & Astrophysics",
    desc: "Journey through the cosmos: Telescope stargazing, night sky observation camps, rocket physics, and space exploration.",
    category: "Space Science"
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

  const visiblePrograms = cvapPrograms.slice(0, 3);

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
                onClick={() => navigate(item.link || '/cvap')}
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

        {/* View More Button (Navigates to dedicated CVAP page) */}
        <div className="mt-10 flex items-center justify-center text-center">
          <button
            type="button"
            onClick={() => navigate('/cvap')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 text-navy-950 font-extrabold text-sm hover:brightness-110 transition shadow-xl cursor-pointer hover:scale-105"
          >
            <span>View More</span>
            <ArrowRight className="w-4 h-4 text-navy-950" />
          </button>
        </div>
      </div>
    </section>
  );
}
