import React from 'react';
import { Link } from 'react-router-dom';
import { Mic, Calendar, Clock, MapPin, ArrowRight, Sparkles } from 'lucide-react';

const homeTalks = [
  {
    id: 3,
    title: "Cohen Talks on Chess in Education",
    category: "Arts & Leadership",
    date: "27th July, 2026",
    speaker: "Swayangsu Satyakam (FIDE National Coach)",
    image: "/images/cohen-talk/talk_3.jpeg",
    description: "Highlighting the role of chess in developing strategic thinking, mental focus, confidence, and academic discipline.",
    tag: "COGNITIVE MASTERY"
  },
  {
    id: 1,
    title: "Future of Work - Are You Ready?",
    category: "Career & Industry",
    date: "11th September, 2024",
    speaker: "Ms. Suniti Nanda & Mr. Parijat Garg",
    image: "/images/cohen-talk/talk_1.jpg",
    description: "Empowering students with essential tools for future corporate careers, technological shifts, and industry leadership.",
    tag: "CAREER KEYNOTE"
  },
  {
    id: 2,
    title: "Newton's Playground STEM Conclave",
    category: "STEM & Innovation",
    date: "17th December, 2023",
    speaker: "Senior Science Panel & ATL Mentors",
    image: "/images/cohen-talk/talk_2.jpeg",
    description: "Live hands-on physics experiments, mechanics demonstrations, and creative STEM learning at the Atal Tinkering Lab.",
    tag: "STEM WORKSHOP"
  }
];

export default function CohenTalkSection({ openAdmissionModal }) {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Mic className="w-4 h-4 text-gold-400" />
              <span>Inspiring Keynotes &amp; Dialogues</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Cohen <span className="text-gold-400">Talks</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-white/70 max-w-2xl font-sans">
              Interactive conclaves, scientific lectures, and thought-leadership sessions led by world-class educators, industry CEOs, and scientists.
            </p>
          </div>

          <Link
            to="/cohentalk"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-sm shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Explore All Cohen Talks</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Talk Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {homeTalks.map((talk) => (
            <div
              key={talk.id}
              className="bg-navy-900/80 border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:border-gold-500/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="h-52 w-full overflow-hidden relative bg-navy-950">
                  <img
                    src={talk.image}
                    alt={talk.title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/images/smart_campus_banner.png";
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />
                  
                  <span className="absolute top-3 left-3 bg-gold-500 text-navy-950 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                    {talk.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{talk.date}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white leading-snug group-hover:text-gold-400 transition-colors">
                    {talk.title}
                  </h3>

                  <p className="text-xs text-white/60 font-medium mt-1">
                    🎙️ {talk.speaker}
                  </p>

                  <p className="text-xs text-white/75 mt-3 leading-relaxed font-sans line-clamp-3">
                    {talk.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 border-t border-white/10 bg-navy-950/60 flex items-center justify-between">
                <span className="text-[11px] text-white/50 font-medium">
                  {talk.category}
                </span>
                <Link
                  to="/cohentalk"
                  className="text-xs text-gold-400 font-bold hover:text-white transition flex items-center gap-1"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
