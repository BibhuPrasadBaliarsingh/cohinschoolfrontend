import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderBanner from '../components/HeaderBanner';
import {
  BookOpen,
  Mic,
  HelpCircle,
  FlaskConical,
  Calculator,
  Music,
  Activity,
  Trophy,
  CheckCircle2,
  Sparkles,
  Users,
  Calendar,
  Award
} from 'lucide-react';

const CLUBS = [
  {
    id: 'literature',
    name: 'Literature "Stanza"',
    tabLabel: 'Literature "Stanza"',
    icon: BookOpen,
    tagline: 'Unleashing imagination through words and reading',
    description:
      '"Stanza" members will have weekly book reading sessions. The idea of this club is to enjoy the pleasures of reading. This will not only improve their vocabulary but also give wings to their imagination.',
    highlights: [
      'Weekly interactive book reading & discussion circles',
      'Creative writing workshops & poetry slams',
      'Vocabulary enrichment & literary newsletters',
      'Annual Book Fair & Author interaction sessions'
    ],
    schedule: 'Every Wednesday, 3:30 PM - 4:30 PM'
  },
  {
    id: 'oration',
    name: 'Oration "Rhetoric"',
    tabLabel: 'Oration "Rhetoric"',
    icon: Mic,
    tagline: 'Mastering the art of public speaking & persuasive speech',
    description:
      'A good speech stays in our minds and hearts forever. Public speaking is a habit that can be greatly improved in the activities of this club. "Rhetoric" plans to have weekly debates, elocutions; Just-a-Minute (JAM) sessions on various topics.',
    highlights: [
      'Weekly debate competitions & Model UN simulations',
      'Just-a-Minute (JAM) spontaneous speaking games',
      'Elocution & declamation skill workshops',
      'Inter-school oratorical contests preparation'
    ],
    schedule: 'Every Thursday, 3:30 PM - 4:30 PM'
  },
  {
    id: 'quiz',
    name: 'Quiz "Link"',
    tabLabel: 'Quiz "Link"',
    icon: HelpCircle,
    tagline: 'Connecting knowledge, logic, and rapid thinking',
    description:
      'Knowledge is power. "Link" quiz club aims to sharpen general knowledge, logical reasoning, and quick thinking skills through competitive trivia sessions, inter-house quiz bowls, and current affairs discussions.',
    highlights: [
      'Buzzer-round inter-house trivia contests',
      'Current affairs analysis & daily news quizzes',
      'Logical reasoning & lateral thinking puzzles',
      'Participation in CBSE Heritage & National Quizzes'
    ],
    schedule: 'Every Tuesday, 3:30 PM - 4:30 PM'
  },
  {
    id: 'science',
    name: 'Science "H-cross"',
    tabLabel: 'Science "H-cross"',
    icon: FlaskConical,
    tagline: 'Fostering scientific curiosity & hands-on discovery',
    description:
      '"H-cross" fosters scientific curiosity, experimental thinking, and hands-on discovery. Members engage in interactive science models, STEM projects, astronomy sessions, and scientific exhibitions.',
    highlights: [
      'Hands-on laboratory experiments & working prototypes',
      'Robotics & STEM project mentorship',
      'Stargazing & astronomy observatory nights',
      'Annual CIS Science & Technology Expo'
    ],
    schedule: 'Every Friday, 3:30 PM - 4:30 PM'
  },
  {
    id: 'maths',
    name: 'Maths "Y-axis"',
    tabLabel: 'Maths "Y-axis"',
    icon: Calculator,
    tagline: 'Exploring the geometry and beauty of numbers',
    description:
      'Mathematics is the language of logic. "Y-axis" club engages students in fun problem-solving, mathematical puzzles, Speed Math, Vedic Mathematics, and preparation for national & international Olympiads.',
    highlights: [
      'Vedic Math & mental calculation shortcuts',
      'Olympiad & competitive problem solving',
      'Math origami, geometry models & games',
      'Pi Day celebrations & Math treasure hunts'
    ],
    schedule: 'Every Monday, 3:30 PM - 4:30 PM'
  },
  {
    id: 'music',
    name: 'Music "Raaga"',
    tabLabel: 'Music "Raaga"',
    icon: Music,
    tagline: 'Harmonizing melodies across classical and contemporary genres',
    description:
      '"Raaga" nurtures musical talent and expression across vocal and instrumental disciplines. Members practice Indian classical, fusion, western music, and choir performances for school events.',
    highlights: [
      'Vocal training in classical & contemporary music',
      'Instrumental ensembles (Keyboard, Guitar, Tabla, Drums)',
      'School choir leading morning assembly songs',
      'Annual musical concerts & band competitions'
    ],
    schedule: 'Every Thursday, 3:30 PM - 4:30 PM'
  },
  {
    id: 'dance',
    name: 'Dance "Rhythm"',
    tabLabel: 'Dance "Rhythm"',
    icon: Activity,
    tagline: 'Celebrating culture and emotion through expressive movement',
    description:
      '"Rhythm" brings art to life through motion and creative expression. The club focuses on classical, contemporary, and folk dance forms, improving agility, stage presence, and rhythm.',
    highlights: [
      'Classical Odissi & Indian folk dance choreography',
      'Modern contemporary & hip-hop routines',
      'Rhythm conditioning & flexibility exercises',
      'Major state & national level dance showcases'
    ],
    schedule: 'Every Friday, 3:30 PM - 4:30 PM'
  },
  {
    id: 'sports',
    name: 'Sports "Agility"',
    tabLabel: 'Sports "Agility"',
    icon: Trophy,
    tagline: 'Building physical endurance, teamwork, and athletic mastery',
    description:
      'The Sports Club promotes physical fitness, teamwork, sportsmanship, and mental resilience. Students receive specialized coaching in basketball, football, badminton, chess, and track & field athletics.',
    highlights: [
      'Professional coaching for basketball, football & cricket',
      'Grandmaster chess training & tactical strategy',
      'Track & field athletics and fitness drills',
      'Inter-school tournaments & Annual Sports Meet'
    ],
    schedule: 'Every Saturday, 8:00 AM - 10:00 AM'
  }
];

export default function ClubPage() {
  const [activeTab, setActiveTab] = useState(CLUBS[0].id);
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const currentClub = CLUBS.find((c) => c.id === activeTab) || CLUBS[0];
  const IconComponent = currentClub.icon;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-navy-950">
      {/* Hero Header Banner */}
      <HeaderBanner
        title="Club"
        subtitle="Discover student clubs, co-curricular societies, and creative excellence at Cohen International School."
        breadcrumb="Club"
        badge="Co-Curricular & Student Life"
      />

      {/* Green Navigation Bar matching user design */}
      <div className="bg-[#2ea44f] shadow-md sticky top-16 z-30 border-b-2 border-green-800 transition-all">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar py-0">
            {CLUBS.map((club) => {
              const isActive = activeTab === club.id;
              return (
                <button
                  key={club.id}
                  type="button"
                  onClick={() => setActiveTab(club.id)}
                  className={`flex-shrink-0 px-4 py-3.5 text-sm sm:text-base font-semibold transition-all duration-200 border-b-4 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-white text-[#2ea44f] border-[#1b5e20] shadow-sm font-bold'
                      : 'text-white border-transparent hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span>{club.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active Club Content Section */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-10 md:p-14 text-center animate-fadeIn">
          {/* Main Title - Matches exact styling from screenshots */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1b365d] mb-6 tracking-wide">
            {currentClub.name}
          </h1>

          {/* Description Text - Exact quote and format */}
          <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-sans text-center mb-10">
            {currentClub.description}
          </p>

          {/* Decorative Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-gold-500 mx-auto rounded-full mb-10" />

          {/* Key Club Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto mt-6">
            {currentClub.highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100/80 hover:bg-emerald-50 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base font-medium text-slate-800 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Club Info Footer Meta */}
          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 max-w-3xl mx-auto text-left text-xs sm:text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-600" />
              <span>
                <strong>Session Timing:</strong> {currentClub.schedule}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gold-600" />
              <span>
                <strong>Eligibility:</strong> Classes I to XII
              </span>
            </div>
          </div>
        </div>

        {/* All Clubs Grid Overview */}
        <section className="mt-16 sm:mt-20">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Student Societies
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-950">
              Explore All Clubs at Cohen International
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CLUBS.map((club) => {
              const ClubIcon = club.icon;
              const isSelected = activeTab === club.id;
              return (
                <button
                  key={club.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(club.id);
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                  className={`p-5 rounded-2xl text-left border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-navy-900 text-white border-gold-500 shadow-lg scale-102'
                      : 'bg-white text-navy-950 border-gray-200 hover:border-emerald-500 hover:shadow-md'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                      isSelected ? 'bg-gold-500 text-navy-950' : 'bg-emerald-100 text-emerald-700'
                    }`}
                  >
                    <ClubIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base mb-1">{club.name}</h3>
                  <p
                    className={`text-xs line-clamp-2 ${
                      isSelected ? 'text-white/80' : 'text-gray-600'
                    }`}
                  >
                    {club.tagline}
                  </p>
                </button>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
