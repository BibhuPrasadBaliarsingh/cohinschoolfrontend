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

import img3681 from '../assets/DSC03681.JPG';
import img3684 from '../assets/DSC03684.JPG';
import acadmic2Img from '../assets/acadmic2.png';
import olympiadImg from '../assets/olympiad.png';
import gImg10 from '../assets/galary/image copy 9.png';
import gImg15 from '../assets/galary/image copy 14.png';
import gImg21 from '../assets/galary/image copy 20.png';
import gImg22 from '../assets/galary/image copy 21.png';

const CLUBS = [
  {
    id: 'literature',
    name: 'Literature "Stanza"',
    tabLabel: 'Literature "Stanza"',
    icon: BookOpen,
    img: acadmic2Img,
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
    img: gImg10,
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
    img: olympiadImg,
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
    img: img3681,
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
    img: img3684,
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
    img: gImg15,
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
    img: gImg21,
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
    img: gImg22,
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
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(CLUBS[0].id);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Handle URL search param ?tab=id if passed from homepage shortcut
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams.get('tab');
    if (tabParam && CLUBS.some((c) => c.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [location.search, location.pathname]);

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
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-10 md:p-14 text-center animate-fadeIn overflow-hidden">
          {/* Main Club Activity Featured Image Banner */}
          <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden mb-8 shadow-md">
            <img
              src={currentClub.img}
              alt={currentClub.name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent flex items-end p-6 text-left">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#2ea44f] text-white rounded-full text-xs font-bold uppercase tracking-wider mb-2 shadow-sm">
                  <IconComponent className="w-3.5 h-3.5" /> {currentClub.name}
                </span>
                <p className="text-white text-base sm:text-xl font-semibold leading-snug drop-shadow-md">
                  {currentClub.tagline}
                </p>
              </div>
            </div>
          </div>

          {/* Main Title */}
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
              Explore All Clubs at Cohen International School
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
                  className={`group rounded-2xl text-left border overflow-hidden transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-navy-900 text-white border-gold-500 shadow-xl ring-2 ring-gold-500/50 scale-[1.02]'
                      : 'bg-white text-navy-950 border-gray-200 hover:border-emerald-500 hover:shadow-md'
                  }`}
                >
                  <div className="relative h-32 w-full overflow-hidden bg-navy-950">
                    <img
                      src={club.img}
                      alt={club.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className={`absolute inset-0 ${
                        isSelected
                          ? 'bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent'
                          : 'bg-gradient-to-t from-black/60 via-transparent to-transparent'
                      }`}
                    />
                    <div
                      className={`absolute bottom-2.5 left-2.5 w-8 h-8 rounded-lg flex items-center justify-center ${
                        isSelected
                          ? 'bg-gold-500 text-navy-950'
                          : 'bg-white/90 text-emerald-700 backdrop-blur-sm'
                      }`}
                    >
                      <ClubIcon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="p-4 flex-1">
                    <h3 className="font-bold text-sm mb-1">{club.name}</h3>
                    <p
                      className={`text-xs line-clamp-2 ${
                        isSelected ? 'text-white/80' : 'text-gray-600'
                      }`}
                    >
                      {club.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

