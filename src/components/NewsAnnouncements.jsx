import React, { useState } from "react";
import { Link } from "react-router-dom";
import img3605 from "../assets/jeeadvance1.jpeg";
import img3611 from "../assets/jeeadvance2.jpeg";
import img3604 from "../assets/jeeadvance3.jpeg";
import img3620 from "../assets/jeeadvance4.jpeg";
import img3625 from "../assets/jeeadvance5.jpeg";
import img3681 from "../assets/jeeadvance6.jpeg";
import img3684 from "../assets/jeeadvance4.jpeg";
import officialLogo from "../assets/cohen_official_logo.png";
import officialBanner1 from "../assets/jeeadvance3.jpeg";
import officialBanner2 from "../assets/jeeadvance6.jpeg";
import officialBanner3 from "../assets/jeeadvance5.jpeg";
import chessImg from "../assets/chess.png";
import indepImg from "../assets/galary/image.png";
import saimunImg from "../assets/galary/image copy 26.png";
import phonicsImg from "../assets/galary/image copy 28.png";
import juliusImg from "../assets/galary/image copy 24.png";

import {
  Calendar,
  PlusCircle,
  X,
  Printer,
  Megaphone,
  Upload,
  Trash2,
  Edit3,
  ExternalLink,
  ShieldCheck,
  Award,
  Sparkles,
  Eye,
  Search,
  CheckCircle2,
  FileText,
  Download,
  ArrowRight,
  ChevronUp
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

const defaultEventsData = [
  {
    id: "evt-indep-15aug",
    day: "15",
    month: "August",
    year: "2026",
    title: "80th Independence Day & Flag Hoisting Ceremony",
    studentName: "CIS Cultural Committee & Student Council",
    rank: "Patriotic Parade & Flag Hoisting",
    category: "Cultural & Events",
    image: indepImg,
    fallbackUrl: officialLogo,
    posterBadge: "15th August • Independence Day",
    summary:
      "Cohen International School celebrated 80th Independence Day with patriotic fervor, march-past parade, tri-color flag hoisting, and cultural musical tributes.",
    fullNotice:
      "Dear Parents and Students,\n\nCohen International School celebrated 80th Independence Day on 15th August with solemn patriotic pride and fervor across campus.\n\nThe tri-color National Flag was unfurled by school dignitaries followed by the National Anthem, march-past parade by student house captain squads, patriotic choir performances, and leadership message.\n\nHappy Independence Day!\n\nRegards,\nCohen International School",
    pdfUrl: "#"
  },
  {
    id: "evt-001",
    day: "26",
    month: "July",
    year: "2026",
    title: "JEE (Advanced) 2026 : Odisha State Rank 1",
    studentName: "Bhavesh Patra",
    rank: "AIR 29 (Odisha State Rank 1)",
    category: "JEE Advanced Result",
    image: img3611,
    fallbackUrl: officialLogo,
    posterBadge: "AIR 29 • State Rank 1",
    summary:
      "Master Bhavesh Patra creates history by securing All India Rank 29 & Odisha State Rank 1 in JEE (Advanced) 2026 under the Cohen Vidwan Integrated Program.",
    fullNotice:
      "Cohen International School proudly congratulates Bhavesh Patra for achieving AIR 29 and Odisha State Rank 1 in JEE (Advanced) 2026. Enrolled in the 2-Year School Integrated Coaching Program, Bhavesh demonstrated extraordinary analytical mastery, problem-solving skills, and dedication under 1-on-1 faculty mentorship.",
    pdfUrl: "https://drive.google.com/file/d/1gQa9u2EHouQNeoMaA7HTFnNi7pBrRwDt/view"
  },
  {
    id: "evt-002",
    day: "26",
    month: "July",
    year: "2026",
    title: "JEE (Advanced) 2026 : Odisha State Rank 2",
    studentName: "Aryasmman Pradhan",
    rank: "AIR 314 (Odisha State Rank 2)",
    category: "JEE Advanced Result",
    image: img3605,
    fallbackUrl: officialLogo,
    posterBadge: "AIR 314 • State Rank 2",
    summary:
      "Master Aryasmman Pradhan scores All India Rank 314 & Odisha State Rank 2 in JEE (Advanced) 2026 examination under Cohen Vidwan Integrated Program.",
    fullNotice:
      "Cohen International School proudly congratulates Aryasmman Pradhan for achieving AIR 314 and Odisha State Rank 2 in JEE (Advanced) 2026. As a student of the Cohen Vidwan Integrated Batch, Aryasmman attributes his success to regular mock tests, 1-on-1 faculty mentorship, and state-of-the-art campus learning environment.",
    pdfUrl: "https://drive.google.com/file/d/1gQa9u2EHouQNeoMaA7HTFnNi7pBrRwDt/view"
  },
  {
    id: "evt-saimun-2026",
    day: "24",
    month: "July",
    year: "2026",
    title: "Cohenites won accolades at SAIMUN 2026",
    studentName: "Cohen International School MUN Delegation",
    rank: "Outstanding Performance & Accolades",
    category: "MUN & Leadership",
    image: saimunImg,
    fallbackUrl: officialLogo,
    posterBadge: "SAIMUN 2026 • Model UN Accolades",
    summary:
      "Proud Moment for Cohen International School! Cohenites won accolades at SAIMUN 2026 (SAI Model United Nations Conference) for their remarkable performance, confidence, and diplomatic leadership.",
    fullNotice:
      "Proud Moment for Cohen International School!\n\nHearty Congratulations to our talented students for their remarkable performance at SAIMUN 2026 (SAI Model United Nations Conference) and for making COHEN INTERNATIONAL SCHOOL proud on this prestigious platform!\n\nHonoring Voices. Inspiring Change. Leading Tomorrow.\n\nYour dedication, confidence, and commitment reflect the true spirit of Cohen. Well Done, Champions!\n\nKeep Shining!",
    pdfUrl: "#"
  },
  {
    id: "evt-phonics-preprimary",
    day: "18",
    month: "August",
    year: "2026",
    title: "Phonics Show by Cohenites of our Pre-Primary wing",
    studentName: "Pre-Primary Wing Scholars",
    rank: "Phonetics & Spoken Fluency Showcase",
    category: "Pre-Primary & Academics",
    image: phonicsImg,
    fallbackUrl: officialLogo,
    posterBadge: "Pre-Primary Wing • Phonics Show",
    summary:
      "Little Cohenites of our Pre-Primary wing delivered an enchanting Phonics Show, demonstrating phonetics, pronunciation, and early literacy skills through interactive rhymes, flashcards, and storytelling.",
    fullNotice:
      "Cohen International School celebrated the Phonics Show organized by our Pre-Primary Wing.\n\nOur youngest scholars captivated the audience with confident phonetics pronunciation, sound-spelling mastery, rhythmic rhymes, and interactive vocabulary games.\n\nHearty congratulations to our little learners, pre-primary teachers, and supportive parents!",
    pdfUrl: "#"
  },
  {
    id: "evt-julius-caesar",
    day: "12",
    month: "August",
    year: "2026",
    title: "Outstanding performance by Cohenites in English play “Julius Caesar”",
    studentName: "CIS Dramatic Society & Literary Club",
    rank: "Theatrical Drama & Public Speaking",
    category: "Cultural & Drama",
    image: juliusImg,
    fallbackUrl: officialLogo,
    posterBadge: "Literary & Drama • Julius Caesar",
    summary:
      "Student actors of Cohen International School delivered a spellbinding theatrical performance of Shakespearean masterpiece 'Julius Caesar', winning high praise for voice modulation, stage presence, and elocution.",
    fullNotice:
      "Cohen International School's Literary Club and Drama Troupe presented an outstanding theatrical staging of William Shakespeare's 'Julius Caesar'.\n\nStudents showcased exceptional stage confidence, eloquent dialogue delivery, classical attire, and dramatic expression, captivating an audience of parents, guests, and fellow scholars.\n\nKudos to our talented student actors and drama directors!",
    pdfUrl: "#"
  },
  {
    id: "evt-rath-yatra-2026",
    day: "07",
    month: "July",
    year: "2026",
    title: "Rath Yatra 2026 - Celebrations",
    studentName: "CIS Cultural Association",
    rank: "Cultural Heritage & Festivities",
    category: "Cultural & Events",
    image: officialBanner2,
    fallbackUrl: officialLogo,
    posterBadge: "Rath Yatra 2026 • Sacred Celebrations",
    summary:
      "Cohen International School celebrated the auspicious Rath Yatra 2026 with traditional devotion, student chariot pulling, devotional songs, and cultural presentations reflecting Odisha's rich heritage.",
    fullNotice:
      "Dear Parents and Students,\n\nCohen International School celebrated the holy occasion of Rath Yatra 2026 on campus with spiritual devotion and cultural grandeur.\n\nScholars participated in chariot pulling, traditional Odissi music and dance performances, and art exhibitions depicting Lord Jagannath's divine journey.\n\nJai Jagannath!\n\nRegards,\nCohen International School",
    pdfUrl: "#"
  },
  {
    id: "evt-yoga-day-2026",
    day: "21",
    month: "June",
    year: "2026",
    title: "International Yoga Day Celebration",
    studentName: "CIS Sports & Wellness Department",
    rank: "Mindfulness & Physical Wellness",
    category: "Health & Wellness",
    image: img3625,
    fallbackUrl: officialLogo,
    posterBadge: "21st June • International Yoga Day",
    summary:
      "Students and faculty of Cohen International School observed International Yoga Day with mass Surya Namaskar, pranayama breathing exercises, and yoga posture demonstrations promoting mental clarity and wellness.",
    fullNotice:
      "Cohen International School celebrated International Yoga Day on 21st June across campus.\n\nLed by certified yoga instructors, students from Nursery to Grade XII along with faculty members engaged in morning pranayama, meditation, and posture drills emphasizing physical fitness, mental harmony, and emotional well-being.\n\nYoga for Harmony & Peace!",
    pdfUrl: "#"
  },
  {
    id: "evt-chess-001",
    day: "28",
    month: "August",
    year: "2026",
    title: "Introduction of Chess in Curriculum (Grades 1 to 6)",
    studentName: "CIS & THINK TURF Collaboration",
    rank: "FREE for First 2 Months",
    category: "Academic & Sports",
    image: chessImg,
    fallbackUrl: officialLogo,
    posterBadge: "THINK TURF Chess Program • Grades 1–6",
    summary:
      "Cohen International School in collaboration with THINK TURF introduces Chess into the curriculum for Grades 1 to 6 to boost concentration, logic & cognitive mastery. FREE for 2 months!",
    fullNotice:
      "Dear Parents,\n\nWe are pleased to inform you that Cohen International School, in collaboration with THINK TURF, is introducing Chess as part of the school curriculum for Grades 1 to 6.\n\nChess will help students develop concentration, logical and cognitive thinking, speed, accuracy, problem-solving, and decision-making skills, which can also contribute to improved examination performance.\n\nThe programme will be FREE for the first two months. Thereafter, students may continue the programme by paying a nominal course fee.\n\nWe encourage all students to actively participate.\n\nRegards,\nCohen International School",
    pdfUrl: "#"
  },
  {
    id: "evt-003",
    day: "14",
    month: "August",
    year: "2026",
    title: "SAIMUN 2026 & KIIT International MUN Honors",
    studentName: "CIS Delegation Team",
    rank: "Best Delegation & Diplomacy Awards",
    category: "Academic Events",
    image: officialBanner1,
    fallbackUrl: officialLogo,
    posterBadge: "Model United Nations 2026",
    summary:
      "CIS Model United Nations delegates achieve outstanding honors and diplomacy awards at SAIMUN 2026 and KIIT International MUN.",
    fullNotice:
      "The student delegation from Cohen International School showcased remarkable debate skills, policy analysis, and resolution drafting at SAIMUN 2026 and the 13th KIIT International School Model UN, bringing home top honors and diplomatic commendations.",
    pdfUrl: "#"
  },
  {
    id: "evt-004",
    day: "20",
    month: "February",
    year: "2026",
    title: "2nd Edition COHEN Edu-Conclave 2.0 Summit",
    studentName: "Research & STEM Directorate",
    rank: "National Innovation Forum",
    category: "Academic Events",
    image: officialBanner2,
    fallbackUrl: officialLogo,
    posterBadge: "Edu-Conclave 2.0 Summit",
    summary:
      "Annual research and scientific conclave bringing together renowned scientists, educators, and young student innovators at CIS campus.",
    fullNotice:
      "The 2nd Edition of COHEN Edu-Conclave 2.0 brought together eminent academicians, scientists, and student researchers to showcase cutting-edge science projects, aerospace models, and interactive AI demonstrations.",
    pdfUrl: "https://drive.google.com/file/d/1ZEhZZBteZk5CJUki4epbHZPXR84jeucv/view"
  },
  {
    id: "evt-005",
    day: "05",
    month: "March",
    year: "2026",
    title: "ISRO-Inspired Aerospace & Drone Tech Launch",
    studentName: "CIS Innovation Hub",
    rank: "First in Odisha Aerospace Lab",
    category: "Academic Events",
    image: img3684,
    fallbackUrl: officialLogo,
    posterBadge: "Aerospace & Satellite Lab",
    summary:
      "Official launch of Odisha's pioneer school-level Aerospace & Satellite Engineering Program with interactive drone simulation labs.",
    fullNotice:
      "Cohen International School launches the first-of-its-kind Aerospace & Drone Technology curriculum in Odisha. Students gain hands-on experience in aerodynamics, satellite propulsion, rocket model building, and autonomous drone flight controllers.",
    pdfUrl: "https://coheninternationalschool.com/aerospace"
  },
  {
    id: "evt-006",
    day: "10",
    month: "August",
    year: "2026",
    title: "Admissions Open for AY 2027-2028 : Nursery to Class XI",
    studentName: "CIS Admissions Directorate",
    rank: "Integrated IIT-JEE | NEET | IISER | Olympiads",
    category: "Admissions",
    image: officialBanner3,
    fallbackUrl: officialLogo,
    posterBadge: "Session AY 2027-2028 Intake",
    summary:
      "Registrations open for Day Boarding & Residential Hostels with integrated competitive coaching.",
    fullNotice:
      "Admissions for Academic Session AY 2027-2028 are now open. Parents can submit online applications for Nursery to Class XI with integrated IIT-JEE & NEET coaching options.",
    pdfUrl: "https://drive.google.com/file/d/1gQa9u2EHouQNeoMaA7HTFnNi7pBrRwDt/view"
  }
];

export default function NewsAnnouncements({ openAdmissionModal, isPage = false }) {
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";

  const [events, setEvents] = useState(defaultEventsData);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showDeployModal, setShowDeployModal] = useState(false);

  // Form state for Admin Event Deployment
  const [deployTitle, setDeployTitle] = useState("");
  const [deployDay, setDeployDay] = useState(new Date().getDate().toString());
  const [deployMonth, setDeployMonth] = useState(
    new Date().toLocaleString("en-US", { month: "long" })
  );
  const [deployCategory, setDeployCategory] = useState("JEE Advanced Result");
  const [deployBadge, setDeployBadge] = useState("School Integrated Program");
  const [deployImage, setDeployImage] = useState("");
  const [deploySummary, setDeploySummary] = useState("");
  const [deployFullNotice, setDeployFullNotice] = useState("");

  const categories = ["All", "JEE Advanced Result", "JEE Main Result", "Admissions", "Academic Events"];

  const filteredEvents = events.filter((evt) => {
    const matchesCategory = activeCategory === "All" || evt.category === activeCategory;
    const matchesSearch = !searchQuery ||
      evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (evt.studentName && evt.studentName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (evt.posterBadge && evt.posterBadge.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const displayedEvents = isPage ? filteredEvents : filteredEvents.slice(0, 3);

  const handleDeploySubmit = (e) => {
    e.preventDefault();
    if (!deployTitle || !deploySummary) return;

    const newEvent = {
      id: `evt-${Date.now()}`,
      day: deployDay || "01",
      month: deployMonth || "August",
      year: new Date().getFullYear().toString(),
      title: deployTitle,
      studentName: "Published Announcement",
      rank: deployBadge || "Official Notice",
      category: deployCategory,
      image:
        deployImage ||
        img3620,
      posterBadge: deployBadge || "Official Circular",
      summary: deploySummary,
      fullNotice: deployFullNotice || deploySummary,
      pdfUrl: "#"
    };

    setEvents([newEvent, ...events]);
    // Reset form
    setDeployTitle("");
    setDeploySummary("");
    setDeployFullNotice("");
    setDeployImage("");
    setShowDeployModal(false);
  };

  const handleDeleteEvent = (id) => {
    if (window.confirm("Are you sure you want to delete this event poster?")) {
      setEvents(events.filter((item) => item.id !== id));
    }
  };

  return (
    <section id="news-events" className="py-12 lg:py-16 bg-navy-950 text-white relative overflow-hidden">
      {/* Background Image with Soft Dark Tint */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/images/about_banner.png"
          alt="News & Events Background"
          className="w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* SECTION HEADER: Matches Screenshot (Green italic "Latest" + Bold "News & Events") */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-emerald-600 dark:text-emerald-400 font-serif italic text-2xl font-bold block mb-1">
            Latest
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight">
            News &amp; Events
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />



        </div>

        {/* SEARCH BAR & CATEGORY FILTER TABS */}
        <div className="flex flex-col items-center justify-center gap-6 mb-10">
          {isPage && (
            <div className="relative max-w-md w-full">
              <Search className="w-4 h-4 text-white/50 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search circulars, results, achievements..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 bg-navy-900/90 border border-white/15 rounded-full text-xs text-white placeholder-white/50 focus:outline-none focus:border-gold-400 shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-xs"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          )}

          <div className="flex items-center justify-center flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${activeCategory === cat
                  ? "bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 font-bold shadow-md"
                  : "bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-white/70 hover:bg-gray-200 dark:hover:bg-white/10"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* EVENT POSTERS GRID */}
        {displayedEvents.length === 0 ? (
          <div className="text-center py-12 bg-white/5 rounded-2xl border border-white/10 max-w-md mx-auto">
            <Search className="w-8 h-8 text-gold-400 mx-auto mb-3 opacity-60" />
            <p className="text-sm font-semibold text-white/90">No news or announcements found</p>
            <p className="text-xs text-white/50 mt-1">Try selecting a different category or clearing your search term.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedEvents.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white dark:bg-navy-950/80 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* TOP POSTER MEDIA CONTAINER */}
                <div className="relative w-full h-80 sm:h-96 overflow-hidden bg-[#06121E]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.src = item.fallbackUrl || "/logo.png";
                    }}
                    className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-500"
                    style={{ objectFit: "fill" }}
                  />

                  {/* Poster Graphic Badge Overlay */}
                  <div className="absolute top-3 left-3 bg-navy-950/85 backdrop-blur-md text-gold-400 text-[10px] font-bold px-3 py-1 rounded-full border border-gold-500/30 uppercase tracking-wider shadow">
                    {item.posterBadge}
                  </div>

                  {/* Hover overlay with detail viewer trigger */}
                  <div className="absolute inset-0 bg-navy-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button
                      onClick={() => setSelectedEvent(item)}
                      className="p-3 rounded-full bg-gold-500 text-navy-950 font-bold shadow-xl hover:scale-110 transition flex items-center gap-1.5 text-xs"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Notice</span>
                    </button>

                    {isAdmin && (
                      <button
                        onClick={() => handleDeleteEvent(item.id)}
                        className="p-3 rounded-full bg-rose-600 text-white font-bold shadow-xl hover:scale-110 transition text-xs"
                        title="Delete Event"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* BOTTOM DATE & TITLE BANNER */}
                <div className="flex items-stretch bg-white dark:bg-navy-950 border-t border-gray-100 dark:border-white/10">

                  {/* Left Navy Date Box */}
                  <div className="bg-[#0B1C2C] text-white px-5 py-4 flex flex-col items-center justify-center flex-shrink-0 min-w-[85px] border-r border-navy-800">
                    <span className="font-display text-2xl font-extrabold leading-none text-white">
                      {item.day}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gold-400 mt-1">
                      {item.month}
                    </span>
                  </div>

                  {/* Right Title Block */}
                  <div className="p-4 flex-1 flex flex-col justify-center">
                    <h3
                      onClick={() => setSelectedEvent(item)}
                      className="font-serif text-base font-bold text-navy-900 dark:text-white hover:text-emerald-600 dark:hover:text-gold-400 transition-colors cursor-pointer line-clamp-2 leading-snug"
                    >
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-gray-500 dark:text-white/50 mt-1 font-medium">
                      {item.rank}
                    </p>
                  </div>

                </div>

                {/* Admin Bar Footer if Admin */}
                {isAdmin && (
                  <div className="px-4 py-2 bg-amber-500/10 border-t border-amber-500/20 flex items-center justify-between text-[11px] text-amber-500 font-bold">
                    <span>Admin Mode Active</span>
                    <div className="flex items-center gap-2">
                      <button onClick={() => setSelectedEvent(item)} className="hover:underline flex items-center gap-1">
                        <Edit3 className="w-3 h-3" /> Edit
                      </button>
                      <span>•</span>
                      <button onClick={() => handleDeleteEvent(item.id)} className="hover:underline text-rose-400 flex items-center gap-1">
                        <Trash2 className="w-3 h-3" /> Delete
                      </button>
                    </div>
                  </div>
                )}

              </div>
            ))}
          </div>
        )}

        {/* VIEW ALL NEWS POSTS PAGE LINK BUTTON (Only on Homepage section) */}
        {!isPage && (
          <div className="mt-12 text-center">
            <Link
              to="/news"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-sm shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>View All News Posts</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>

      {/* FULL EVENT DETAILS MODAL */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-white dark:bg-navy-900 border border-gold-500/30 rounded-3xl p-5 sm:p-7 max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl relative text-navy-950 dark:text-white overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-3.5 border-b border-gray-200 dark:border-white/10 flex-shrink-0">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-gold-400 mb-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{selectedEvent.day} {selectedEvent.month} {selectedEvent.year}</span>
                  <span>•</span>
                  <span>{selectedEvent.category}</span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold leading-snug">{selectedEvent.title}</h3>
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-white/80 hover:bg-gold-500 hover:text-navy-950 transition flex-shrink-0 cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto space-y-4 py-4 pr-1 flex-1 custom-scrollbar">
              <div className="rounded-2xl overflow-hidden bg-[#06121E] w-full border border-gold-500/20 shadow-md flex items-center justify-center p-1">
                <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-auto max-h-[350px] object-contain rounded-xl" />
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-gray-700 dark:text-white/80 leading-relaxed">
                {selectedEvent.summary && (
                  <p className="font-bold text-navy-900 dark:text-gold-300">{selectedEvent.summary}</p>
                )}
                {selectedEvent.fullNotice && (
                  <p className="whitespace-pre-line text-gray-700 dark:text-white/80">{selectedEvent.fullNotice}</p>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-3 border-t border-gray-200 dark:border-white/10 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="w-4 h-4" /> Verified CIS Release
              </div>
              {selectedEvent.pdfUrl && selectedEvent.pdfUrl !== "#" && (
                <a
                  href={selectedEvent.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-gold-500 text-navy-950 font-bold hover:bg-gold-400 text-xs transition flex items-center gap-1.5 shadow"
                >
                  <Download className="w-3.5 h-3.5" /> Download Circular
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ADMIN DEPLOY / PUBLISH NEW EVENT MODAL */}
      {showDeployModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setShowDeployModal(false)}
        >
          <div
            className="bg-navy-900 border border-gold-500/40 rounded-3xl p-6 sm:p-8 max-w-lg w-full max-h-[90vh] flex flex-col shadow-2xl relative text-white overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 flex-shrink-0">
              <div className="flex items-center gap-2">
                <Megaphone className="w-5 h-5 text-gold-400" />
                <h3 className="font-display text-lg font-bold text-white">
                  Deploy / Publish New Event Poster
                </h3>
              </div>
              <button onClick={() => setShowDeployModal(false)} className="text-white/60 hover:text-white p-1 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto flex-1 pr-1 py-2 custom-scrollbar space-y-4">
              <p className="text-xs text-white/70">
                Fill out details to publish a live news item to the school homepage. (Frontend State Simulator for Admin).
              </p>

              <form onSubmit={handleDeploySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-white/90 mb-1">Event Title *</label>
                  <input
                    type="text"
                    required
                    value={deployTitle}
                    onChange={(e) => setDeployTitle(e.target.value)}
                    placeholder="e.g. JEE (Advanced) 2026 : Odisha State Rank 1"
                    className="w-full px-3.5 py-2.5 bg-navy-950 border border-white/20 rounded-xl text-xs text-white focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-white/90 mb-1">Date Number *</label>
                    <input
                      type="text"
                      required
                      value={deployDay}
                      onChange={(e) => setDeployDay(e.target.value)}
                      placeholder="e.g. 26"
                      className="w-full px-3.5 py-2.5 bg-navy-950 border border-white/20 rounded-xl text-xs text-white focus:outline-none focus:border-gold-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/90 mb-1">Month Name *</label>
                    <input
                      type="text"
                      required
                      value={deployMonth}
                      onChange={(e) => setDeployMonth(e.target.value)}
                      placeholder="e.g. July"
                      className="w-full px-3.5 py-2.5 bg-navy-950 border border-white/20 rounded-xl text-xs text-white focus:outline-none focus:border-gold-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-white/90 mb-1">Category</label>
                    <select
                      value={deployCategory}
                      onChange={(e) => setDeployCategory(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-navy-950 border border-white/20 rounded-xl text-xs text-white focus:outline-none focus:border-gold-400"
                    >
                      {categories.filter((c) => c !== "All").map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/90 mb-1">Poster Tag</label>
                    <input
                      type="text"
                      value={deployBadge}
                      onChange={(e) => setDeployBadge(e.target.value)}
                      placeholder="e.g. 2-Yr Integrated Program"
                      className="w-full px-3.5 py-2.5 bg-navy-950 border border-white/20 rounded-xl text-xs text-white focus:outline-none focus:border-gold-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/90 mb-1">Poster Image URL (Optional)</label>
                  <input
                    type="text"
                    value={deployImage}
                    onChange={(e) => setDeployImage(e.target.value)}
                    placeholder="https://... (Leave blank for default high-res poster)"
                    className="w-full px-3.5 py-2.5 bg-navy-950 border border-white/20 rounded-xl text-xs text-white focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/90 mb-1">Summary *</label>
                  <input
                    type="text"
                    required
                    value={deploySummary}
                    onChange={(e) => setDeploySummary(e.target.value)}
                    placeholder="Brief summary text"
                    className="w-full px-3.5 py-2.5 bg-navy-950 border border-white/20 rounded-xl text-xs text-white focus:outline-none focus:border-gold-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-500 transition text-xs shadow-lg flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Deploy &amp; Publish Poster (Live Preview)</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
