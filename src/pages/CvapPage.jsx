import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import HeaderBanner from '../components/HeaderBanner';
import AdmissionBanner from '../components/AdmissionBanner';
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
  Search,
  X,
  CheckCircle2,
  Users,
  Calendar,
  Award,
  Maximize2,
  Trophy as ChessIcon
} from 'lucide-react';

import chessImg from '../assets/chess.png';

import ns2022_1 from '../assets/pdf_images/nightsky2022_img_1.jpg';
import ns2022_3 from '../assets/pdf_images/nightsky2022_img_10.jpg';
import ns2023_1 from '../assets/pdf_images/nightsky2023_img_1.jpg';
import ns2023_3 from '../assets/pdf_images/nightsky2022_img_7.jpg';

import acadmic1Img from '../assets/acadmic1.png';
import acadmic3Img from '../assets/acadmic3.png';
import acadmic4Img from '../assets/acadmic4.png';

const cvapProgramsData = [
  {
    id: "cambridge-english",
    icon: Globe,
    title: "Cambridge English",
    desc: "Preparing students for global communication and international certification through immersive language mastery.",
    category: "Global Communication",
    highlights: [
      "Official Cambridge Assessment English curriculum partner",
      "Interactive phonetics & vocabulary enrichment",
      "Global debate, listening & spoken fluency modules",
      "Prepares students for international university admissions"
    ]
  },
  {
    id: "project-based-learning",
    icon: Lightbulb,
    title: "Project Based Learning (PBL)",
    desc: "Empowering young minds through hands-on, real-world project solving, collaborative research, and interdisciplinary application.",
    category: "Experiential Learning",
    highlights: [
      "Real-world problem solving & team design projects",
      "Interdisciplinary science & social impact challenges",
      "Exhibitions & project defense before academic panels",
      "Boosts retention, practical application & critical thinking"
    ]
  },
  {
    id: "theme-based-learning",
    icon: BookMarked,
    title: "Theme Based Learning",
    desc: "Connecting interdisciplinary concepts across subjects to construct deep thematic knowledge and holistic understanding.",
    category: "Thematic Pedagogy",
    imageTitle: "Academic Theme Photos",
    images: [
      { img: acadmic1Img, title: "Theme Classroom Lab" },
      { img: acadmic3Img, title: "Interactive Workshop" },
      { img: acadmic4Img, title: "Thematic Project Exhibition" }
    ]
  },
  {
    id: "design-thinking-steam",
    icon: Cpu,
    title: "Design Thinking & STEAM Learning",
    desc: "Inspiring innovation and shaping future leaders where human-centered design thinking meets Science, Tech, Engineering, Art & Math.",
    category: "Innovation & Tech",
    highlights: [
      "Human-centered design sprint workshops",
      "Hands-on CAD modeling, 3D printing & electronics",
      "Prototyping solutions for everyday challenges",
      "Annual CIS STEAM Innovation Fair"
    ]
  },
  {
    id: "artificial-intelligence",
    icon: Bot,
    title: "Artificial Intelligence",
    desc: "Empowering the next generation with early AI literacy, machine learning concepts, ethics, and future technology mastery.",
    category: "Future Tech",
    highlights: [
      "Introductory Machine Learning & Python algorithms",
      "Neural networks, Computer Vision & Data Science basics",
      "AI Ethics, digital responsibility & automation labs",
      "Hands-on AI model development from Grade VI onwards"
    ]
  },
  {
    id: "cmun",
    icon: Landmark,
    title: "Cohen Model United Nations (CMUN)",
    desc: "Shaping future diplomats, policy strategists, and leaders through parliamentary debate, global diplomacy, and draft resolutions.",
    category: "Diplomacy & Leadership",
    highlights: [
      "International diplomacy & UN committee simulations",
      "Policy drafting, caucus debate & negotiation skills",
      "Participation in state, national & international MUNs",
      "Develops public speaking, poise & global awareness"
    ]
  },
  {
    id: "phonics-communications",
    icon: Volume2,
    title: "Phonics & Communications",
    desc: "Empowering language mastery, correct pronunciation, and voice modulation for clear, confident articulation.",
    category: "Language Mastery",
    highlights: [
      "Synthetic phonics & sound-spelling mastery for early grades",
      "Accent reduction, rhythm & voice modulation training",
      "Interactive audio lab exercises & storytelling",
      "Lays strong foundation for expressive reading"
    ]
  },
  {
    id: "scientific-inquiry",
    icon: Microscope,
    title: "Scientific Inquiry",
    desc: "Nurturing analytical thinkers through hypothesis testing, laboratory experimentation, research methodology, and evidence-based inquiry.",
    category: "Research & Logic",
    highlights: [
      "Structured scientific method & lab research protocols",
      "Data collection, graphing & statistical interpretation",
      "Guided mentor sessions with university scientists",
      "Science Conclave & Olympiad research preparation"
    ]
  },
  {
    id: "cohen-talks",
    icon: MessageSquare,
    title: "Cohen Talks",
    desc: "A signature flagship keynote series where ideas ignite: top industry leaders, CEOs, and scientists inspire students.",
    category: "Thought Leadership",
    highlights: [
      "Live keynote talks by NISER, IIT & ISRO experts",
      "Corporate career insights from TCS & Maxx Up executives",
      "Interactive Q&A and student mentorship circles",
      "Bridging classroom learning with real-world industry"
    ]
  },
  {
    id: "astronomy-astrophysics",
    icon: Compass,
    title: "Astronomy & Astrophysics",
    desc: "Journey through the cosmos: Telescope stargazing, night sky observation camps, rocket physics, and space exploration.",
    category: "Space Science",
    imageTitle: "Space Observation Photos",
    images: [
      { img: ns2023_1, title: "Night Sky Camp" },
      { img: ns2022_1, title: "Celestial Mapping" },
      { img: ns2023_3, title: "Astrophysics Lab" },
      { img: ns2022_3, title: "Telescope Tracking" }
    ]
  },
  {
    id: "learning-engagements",
    icon: BookOpen,
    title: "Learning Engagements",
    desc: "Bringing theoretical concepts to life through field visits, outdoor exploratory trips, and interactive workshops.",
    category: "Immersive Learning",
    highlights: [
      "Experiential field trips to research labs & heritage sites",
      "Nature walks, ecology camps & botanical studies",
      "Interactive museum visits & industrial exposure",
      "Enhances curiosity beyond textbook boundaries"
    ]
  },
  {
    id: "eloquence-essence",
    icon: Mic,
    title: "Eloquence Essence Classes",
    desc: "Find Your Voice, Shape Your World through public speaking, declamations, elocutions, and spontaneous speech games.",
    category: "Public Speaking",
    highlights: [
      "Just-a-Minute (JAM) spontaneous speaking sessions",
      "Debate techniques, persuasive speech & body language",
      "Stage presence, speech delivery & microphone etiquette",
      "Inter-house & national oratorical competition prep"
    ]
  },
  {
    id: "sports-athletics",
    icon: Trophy,
    title: "Sports & Athletics",
    desc: "Basketball, Football, Cricket, Roll Ball, Skating & Track Athletics: Building physical endurance, teamwork, and sportsmanship.",
    category: "Physical Excellence",
    highlights: [
      "Professional coaching for basketball, football & cricket",
      "Skating rink & roll ball athletic training",
      "Track & field athletics and fitness drills",
      "Annual Sports Meet & CBSE cluster championship participation"
    ]
  },
  {
    id: "music-dance-drama",
    icon: Music,
    title: "Music, Dance, Drama, and More",
    desc: "From rhythm to rhyme: Celebrating cultural expression through classical Odissi, choir, instrumental music, and theatre.",
    category: "Creative Arts",
    highlights: [
      "Vocal training in classical, fusion & choir music",
      "Instrumental ensembles (Keyboard, Guitar, Tabla, Drums)",
      "Classical Odissi & contemporary dance routines",
      "Annual cultural showcases & drama productions"
    ]
  },
  {
    id: "chess-in-education",
    icon: ChessIcon,
    image: chessImg,
    title: "Chess in Education (THINK TURF)",
    desc: "In collaboration with THINK TURF for Grades 1-6. FREE for first 2 months — building concentration, logical thinking & decision-making.",
    category: "Cognitive Mind Sports",
    highlights: [
      "Integrated into weekly curriculum for Grades 1 to 6",
      "FREE for first 2 months with certified FIDE instructors",
      "Boosts concentration, speed, accuracy & exam focus",
      "Tactical openings, endgame puzzles & inter-house chess tournaments"
    ]
  }
];

export default function CvapPage({ openAdmissionModal }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLightBoxImg, setActiveLightBoxImg] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const categories = [
    "All",
    "Global Communication",
    "Experiential Learning",
    "Innovation & Tech",
    "Future Tech",
    "Diplomacy & Leadership",
    "Space Science",
    "Physical Excellence",
    "Creative Arts",
    "Cognitive Mind Sports"
  ];

  const filteredPrograms = cvapProgramsData.filter((prog) => {
    const matchesCategory = activeCategory === "All" || prog.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      prog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageWrapper>
      <div className="min-h-screen bg-slate-50 text-navy-950 font-sans">
        {/* Header Banner */}
        <HeaderBanner
          title="CVAP - Value Addition Programs"
          subtitle="Discover 15 signature programs fostering Theme Based Learning, AI tech, space science, diplomacy, public speaking & holistic excellence."
          breadcrumb="CVAP Programs"
          badge="Co-Curricular & Skill Building"
          bgImage="/images/academics_banner.png"
        />

        {/* Main Content Area */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Intro Section */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" /> Beyond Standard CBSE Academics
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
              Cohen Value Addition Programs (CVAP)
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              At Cohen International School, we complement standard CBSE academic rigor with <strong>15 specialized CVAP pillars</strong> designed to empower students with future-ready skills, international certifications, cognitive sports, and scientific inquiry.
            </p>
          </div>

          {/* Search Bar & Category Filter Tabs */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
              <div className="relative w-full md:w-96">
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search CVAP programs (e.g. AI, Chess, Astronomy)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-xs sm:text-sm text-navy-950 focus:outline-none focus:border-gold-500 transition"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-navy-950"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="text-xs font-bold text-slate-500">
                Showing <span className="text-gold-600 font-extrabold">{filteredPrograms.length}</span> of {cvapProgramsData.length} programs
              </div>
            </div>

            {/* Category Filter Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    activeCategory === cat
                      ? "bg-navy-900 text-white font-bold shadow-md"
                      : "bg-slate-100 text-slate-700 hover:bg-gold-500/15 hover:text-navy-950"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Program Cards Grid */}
          {filteredPrograms.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 shadow-sm max-w-md mx-auto">
              <Search className="w-10 h-10 text-gold-500 mx-auto mb-3 opacity-60" />
              <p className="text-base font-bold text-navy-900">No programs found</p>
              <p className="text-xs text-slate-500 mt-1">Try clearing your search term or selecting another category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPrograms.map((prog) => {
                const IconComp = prog.icon;
                return (
                  <div
                    key={prog.id}
                    className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 group"
                  >
                    <div>
                      {/* Top Header Row */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-14 h-14 rounded-2xl bg-gold-500/15 border border-gold-500/30 text-gold-600 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors duration-300 flex items-center justify-center overflow-hidden flex-shrink-0">
                          {prog.image ? (
                            <img src={prog.image} alt={prog.title} className="w-full h-full object-cover" />
                          ) : (
                            <IconComp className="w-7 h-7" />
                          )}
                        </div>
                        <span className="text-[10px] font-extrabold text-gold-700 uppercase tracking-wider bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
                          {prog.category}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="font-display text-xl font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                        {prog.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {prog.desc}
                      </p>

                      {/* Key Program Highlights or Images */}
                      {prog.images && prog.images.length > 0 ? (
                        <div className="pt-3 border-t border-slate-100 mb-5">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-navy-950 flex items-center gap-1.5 mb-2.5">
                            <Sparkles className="w-3.5 h-3.5 text-gold-600" /> {prog.imageTitle || "Program Photos"}:
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            {prog.images.map((pic, idx) => (
                              <div
                                key={idx}
                                onClick={() => setActiveLightBoxImg(pic)}
                                className="group/img relative rounded-lg overflow-hidden h-20 sm:h-22 border border-slate-200 shadow-xs bg-navy-950 cursor-pointer hover:border-gold-500 hover:scale-[1.03] transition-all duration-300"
                              >
                                <img
                                  src={pic.img}
                                  alt={pic.title}
                                  className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent opacity-75 group-hover/img:opacity-90 transition-opacity p-1.5 flex flex-col justify-end">
                                  <span className="text-[9px] font-bold text-gold-400 leading-tight">{pic.title}</span>
                                </div>
                                <div className="absolute top-1.5 right-1.5 p-1 rounded-full bg-navy-950/80 text-gold-400 opacity-0 group-hover/img:opacity-100 transition-opacity">
                                  <Maximize2 className="w-3 h-3" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : prog.highlights ? (
                        <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                          <p className="text-xs font-bold uppercase tracking-wider text-navy-950 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-gold-600" /> Program Highlights:
                          </p>
                          {prog.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </main>

        {/* Admission Banner */}
        <AdmissionBanner openAdmissionModal={openAdmissionModal} />

        {/* Full-Screen Lightbox Image Zoom Modal */}
        {activeLightBoxImg && (
          <div
            className="fixed inset-0 z-[300] bg-navy-950/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setActiveLightBoxImg(null)}
          >
            <div
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveLightBoxImg(null)}
                className="absolute -top-4 -right-4 z-20 p-2.5 rounded-full bg-navy-900 border border-gold-500/50 text-white hover:bg-gold-500 hover:text-navy-950 transition shadow-2xl cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={activeLightBoxImg.img}
                alt={activeLightBoxImg.title}
                className="w-full h-full max-h-[85vh] object-contain rounded-2xl border border-gold-500/40 shadow-2xl bg-navy-950"
              />
              <div className="mt-3 text-center">
                <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">{activeLightBoxImg.title}</h4>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageWrapper>
  );
}
