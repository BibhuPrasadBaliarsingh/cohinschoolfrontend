import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Mic,
  HelpCircle,
  FlaskConical,
  Calculator,
  Music,
  Activity,
  Trophy,
  ArrowRight,
  Sparkles,
  Users,
  Calendar
} from 'lucide-react';

const CLUBS_SUMMARY = [
  {
    id: 'literature',
    name: 'Literature "Stanza"',
    tagline: 'Book Reading & Creative Writing',
    icon: BookOpen,
    badgeBg: 'bg-amber-500/10 text-amber-600 border-amber-500/30',
    color: 'from-amber-500 to-gold-500',
    schedule: 'Every Wednesday'
  },
  {
    id: 'oration',
    name: 'Oration "Rhetoric"',
    tagline: 'Public Speaking, Debates & Model UN',
    icon: Mic,
    badgeBg: 'bg-rose-500/10 text-rose-600 border-rose-500/30',
    color: 'from-rose-500 to-red-500',
    schedule: 'Every Thursday'
  },
  {
    id: 'quiz',
    name: 'Quiz "Link"',
    tagline: 'General Knowledge & Logic Bowls',
    icon: HelpCircle,
    badgeBg: 'bg-purple-500/10 text-purple-600 border-purple-500/30',
    color: 'from-purple-500 to-indigo-500',
    schedule: 'Every Tuesday'
  },
  {
    id: 'science',
    name: 'Science "H-Cross"',
    tagline: 'STEM Labs, Robotics & Astronomy',
    icon: FlaskConical,
    badgeBg: 'bg-blue-500/10 text-blue-600 border-blue-500/30',
    color: 'from-blue-500 to-cyan-500',
    schedule: 'Every Friday'
  },
  {
    id: 'maths',
    name: 'Maths "Y-Axis"',
    tagline: 'Vedic Math & Olympiad Problem Solving',
    icon: Calculator,
    badgeBg: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30',
    color: 'from-emerald-500 to-teal-500',
    schedule: 'Every Monday'
  },
  {
    id: 'music',
    name: 'Music "Raaga"',
    tagline: 'Classical Vocals & Band Ensembles',
    icon: Music,
    badgeBg: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/30',
    color: 'from-indigo-500 to-blue-600',
    schedule: 'Every Thursday'
  },
  {
    id: 'dance',
    name: 'Dance "Rhythm"',
    tagline: 'Classical Odissi & Contemporary Dance',
    icon: Activity,
    badgeBg: 'bg-pink-500/10 text-pink-600 border-pink-500/30',
    color: 'from-pink-500 to-rose-500',
    schedule: 'Every Friday'
  },
  {
    id: 'sports',
    name: 'Sports "Agility"',
    tagline: 'Basketball, Football, Chess & Athletics',
    icon: Trophy,
    badgeBg: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/30',
    color: 'from-cyan-500 to-blue-500',
    schedule: 'Every Saturday'
  }
];

export default function ClubsShortcut() {
  return (
    <section className="py-12 sm:py-16 bg-cream-50 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Beyond Books &amp; Academics
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy-900 font-extrabold mb-3">
            Clubs &amp; Co-Curricular Activities
          </h2>
          <p className="text-navy-700/80 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Discover signature student clubs thoughtfully created to inspire creative expression, leadership, critical thinking, and physical athletic mastery.
          </p>
        </div>

        {/* 3 Clubs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10">
          {CLUBS_SUMMARY.slice(0, 3).map((club) => {
            const Icon = club.icon;
            return (
              <Link
                key={club.id}
                to={`/club?tab=${club.id}`}
                className="group relative rounded-2xl bg-white border border-cream-200 shadow-sm hover:shadow-xl hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1 p-5"
              >
                <div>
                  {/* Top Header Row with Icon & Schedule */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-navy-950 text-gold-400 border border-gold-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <Icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <span className="text-[10px] font-semibold text-navy-800 bg-cream-100 px-2.5 py-1 rounded-full border border-cream-200 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-gold-600" /> {club.schedule}
                    </span>
                  </div>

                  {/* Club Title */}
                  <h3 className="font-display text-base font-bold text-navy-900 mb-1.5 group-hover:text-gold-600 transition-colors leading-snug">
                    {club.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs text-navy-700/80 leading-relaxed font-medium mb-4">
                    {club.tagline}
                  </p>
                </div>

                {/* Footer Link Button */}
                <div className="flex items-center justify-between text-xs font-bold text-gold-600 pt-3 border-t border-cream-100 group-hover:text-gold-700">
                  <span>Explore Activities</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Banner Shortcut CTA */}
        <div className="p-6 sm:p-8 rounded-3xl bg-navy-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl border border-gold-500/30 reveal">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold-500/20 border border-gold-500/40 text-gold-400 flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1">
                Explore All Co-Curricular &amp; Student Life Programs
              </h3>
              <p className="text-xs sm:text-sm text-white/70">
                Weekly workshops, debate competitions, science conclaves, and inter-house tournaments.
              </p>
            </div>
          </div>
          <Link
            to="/club"
            className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-gold-400 via-amber-400 to-gold-500 text-navy-950 font-extrabold text-xs sm:text-sm rounded-2xl hover:from-gold-300 hover:to-amber-300 transition shadow-lg flex items-center justify-center gap-2 group whitespace-nowrap cursor-pointer"
          >
            <span>View Full Clubs &amp; Activities Page</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
