import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mic,
  Calendar,
  MapPin,
  Clock,
  Sparkles,
  Users,
  Award,
  ArrowRight,
  X,
  Maximize2,
  Lightbulb,
  Globe,
  Briefcase,
  Grid,
  List,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import HeaderBanner from "../components/HeaderBanner";
import PageWrapper from "../components/PageWrapper";

const talkItems = [
  {
    id: 1,
    title: "Future of Work - Are you ready?",
    category: "Career & Industry",
    date: "Wednesday, September 11, 2024",
    time: "1:30 PM to 2:30 PM",
    venue: "APJ Abdul Kalam Auditorium",
    speakers: [
      { name: "Ms. Suniti Nanda", title: "Founder and CEO of Maxx Up" },
      { name: "Mr. Parijat Garg", title: "Director and COO of Maxx Up" },
    ],
    image: "/images/cohen-talk/talk_1.jpg",
    description:
      "The workshop will be led by two renowned experts: • Ms. Suniti Nanda, Founder and CEO of Maxx Up • Mr. Parijat Garg, Director and COO of Maxx Up. Empowering students with essential tools for future careers and corporate leadership.",
    tag: "CAREER KEYNOTE",
  },
  {
    id: 2,
    title: "Newton's Playground",
    category: "STEM & Innovation",
    date: "December 17, 2023",
    time: "10:00 AM to 1:00 PM",
    venue: "Science Complex Pavilion",
    speakers: [
      { name: "Senior Science Panel", title: "Atal Tinkering Lab Mentors" },
    ],
    image: "/images/cohen-talk/talk_2.jpeg",
    description:
      "Celebrating another inspiring edition of CohenTalks: 17th December, 2023. Live hands-on physics experiments, mechanics demonstrations, and creative STEM learning.",
    tag: "STEM WORKSHOP",
  },
  {
    id: 3,
    title: "Cohen Talks on Chess in Education",
    category: "Arts & Leadership",
    date: "27th July, 2026",
    time: "11:00 AM to 1:00 PM",
    venue: "Cohen Grand Auditorium",
    speakers: [
      {
        name: "Swayangsu Satyakam",
        title: "FIDE Lead School Instructor & National Coach",
      },
    ],
    image: "/images/cohen-talk/talk_3.jpeg",
    description:
      "Cohen International School successfully hosted Cohen Talks on Chess in Education, highlighting the role of chess in developing strategic thinking, mental focus, confidence, and academic discipline.",
    tag: "COGNITIVE MASTERY",
  },
  {
    id: 4,
    title: "Origin of Mass",
    category: "STEM & Innovation",
    date: "22nd March 2021 (Monday)",
    time: "10:00 AM to 11:00 AM",
    venue: "APJ Abdul Kalam Auditorium",
    speakers: [
      {
        name: "Prof. Bedangadas Mohanty",
        title: "Professor, National Institute of Science Education and Research (NISER), Bhubaneswar",
      },
    ],
    image: "/images/smart_campus_banner.png",
    description:
      "Awarded with Prestigious Shanti Swarup Bhatnagar Prize. Keynote session on quantum mechanics, particle physics, nuclear physics, and fundamental science research.",
    tag: "PHYSICS LECTURE",
  },
  {
    id: 5,
    title: "Universe and its Evolution",
    category: "STEM & Innovation",
    date: "25th March 2021 (Wednesday)",
    time: "11:30 AM to 12:30 PM",
    venue: "APJ Abdul Kalam Auditorium",
    speakers: [
      {
        name: "Prof. Ajit Mohan Srivastava",
        title: "Professor, Institute of Physics, Bhubaneswar (Ph.D. Syracuse University USA)",
      },
    ],
    image: "/images/academics_banner.png",
    description:
      "A deep dive into astrophysics, cosmic expansion, high energy physics, and the fascinating history of the universe.",
    tag: "ASTROPHYSICS",
  },
  {
    id: 6,
    title: "Lets Make Our Own Robot",
    category: "STEM & Innovation",
    date: "6th Dec. 2020",
    time: "09:00 AM to 10:00 AM",
    venue: "Online Live Session",
    speakers: [
      {
        name: "Mr. Sakyasingha Mahapatra",
        title: "Founder, SakRobotix Lab Pvt Ltd",
      },
    ],
    image: "/images/smart_campus_banner.png",
    description:
      "Hands-on workshop introducing students to robotics engineering, sensor integration, microcontroller programming, and future automation.",
    tag: "ROBOTICS LAB",
  },
  {
    id: 7,
    title: "Why/How THINGS FLY?",
    category: "STEM & Innovation",
    date: "14th Nov 2020",
    time: "10:00 AM to 11:00 AM",
    venue: "Indian Institute of Technology (IIT), Bhubaneswar",
    speakers: [
      {
        name: "Dr. Seema Bahinipati",
        title: "Indian Institute of Technology (IIT), Bhubaneswar",
      },
    ],
    image: "/images/facilities_banner.png",
    description:
      "Aerospace masterclass explaining the physics of aerodynamics, lift, thrust, jet propulsion, and aviation technology.",
    tag: "AEROSPACE",
  },
  {
    id: 8,
    title: "Paint your Tomorrow - Digital Re-Imagination",
    category: "Career & Industry",
    date: "7th Nov 2020",
    time: "06:00 PM to 07:00 PM",
    venue: "Online Live Session",
    speakers: [
      {
        name: "Mr. Sushovan Mohapatra",
        title: "Program Manager, Tata Consultancy Services (TCS)",
      },
    ],
    image: "/images/about_banner.png",
    description:
      "Digital re-imagination journey from place to space, exploring software innovation, cloud ecosystems, and career transformation.",
    tag: "DIGITAL INNOVATION",
  },
  {
    id: 9,
    title: "Career Opportunities in Science and Technology",
    category: "Career & Industry",
    date: "5th July 2020",
    time: "10:00 AM to 11:00 AM",
    venue: "Online Live Session",
    speakers: [
      {
        name: "Prof. Tapan Gandhi",
        title: "Department of Electrical Engineering, Indian Institute of Technology (IIT) Delhi",
      },
    ],
    image: "/images/academics_banner.png",
    description:
      "Guidance session on emerging technology domains, IIT research ecosystems, interdisciplinary engineering, and career roadmaps.",
    tag: "CAREER GUIDANCE",
  },
  {
    id: 10,
    title: "Pursuing Your Passion in Science: Overcoming Challenges",
    category: "STEM & Innovation",
    date: "28th June 2020",
    time: "10:00 AM to 11:00 AM",
    venue: "Online Live Session",
    speakers: [
      {
        name: "Dr. Nikhilesh Dhar",
        title: "Post Doctoral Scholar UC, Ph.D. Syracuse University NY USA",
      },
    ],
    image: "/images/facilities_banner.png",
    description:
      "Inspiring talk on scientific perseverance, international research scholarships, overcoming academic hurdles, and global biological sciences.",
    tag: "MOTIVATIONAL",
  },
];

const pillars = [
  {
    icon: Lightbulb,
    title: "Thought Leadership",
    desc: "Keynote talks by visionary CEOs, scientists, and academics introducing cutting-edge trends and global perspectives.",
  },
  {
    icon: Briefcase,
    title: "Career Counseling",
    desc: "Direct interaction with industry leaders, corporate executives, and innovators to guide career choices.",
  },
  {
    icon: Globe,
    title: "Global Citizenship",
    desc: "Fostering diplomatic thinking through Model United Nations (MUN) and cross-cultural exchange dialogues.",
  },
  {
    icon: Award,
    title: "Holistic Development",
    desc: "Integrating cognitive sports like Chess, STEM workshops, and eloquence classes alongside CBSE excellence.",
  },
];

export default function CohenTalkPage({ openAdmissionModal }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState("list"); // 'list' or 'grid'
  const [selectedPoster, setSelectedPoster] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const categories = ["All", "Career & Industry", "STEM & Innovation", "Arts & Leadership"];

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const filteredTalks =
    activeCategory === "All"
      ? talkItems
      : talkItems.filter((item) => item.category === activeCategory);

  const totalPages = Math.ceil(filteredTalks.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedTalks = filteredTalks.slice(indexOfFirstItem, indexOfLastItem);

  const scrollToTalksGrid = () => {
    const el = document.getElementById("talks-grid");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      scrollToTalksGrid();
    }
  };

  return (
    <PageWrapper>
      <div className="min-h-screen bg-slate-50 text-navy-950 font-sans pb-20">
        {/* Header Banner */}
        <HeaderBanner
          title="Cohen Talks"
          subtitle="Where Ideas Ignite, Inspire, & Transform Future Leaders"
          bgImage="/images/facilities_banner.png"
          breadcrumb="Cohen Talks"
        />

      {/* Hero Intro Section */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-600 font-semibold text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-gold-500" /> Value-Addition Signature Series
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy-900 font-bold leading-tight">
                Cohen Talks — Inspiring & Empowering Future Leaders
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                <strong className="text-navy-900 font-semibold">Cohen Talks</strong> is a flagship value-addition program organized by Cohen International School (CIS), Bhubaneswar. Designed to provide holistic education beyond the standard academic curriculum, it invites top industry experts, scientists, CEOs, and national coaches to interact with our students.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                From corporate career preparation with Maxx Up, astrophysics with NISER professors, robotics with SakRobotix, flight physics with IIT Bhubaneswar faculty, to cognitive mastery through Chess with FIDE instructors — Cohen Talks shapes confident global leaders.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => openAdmissionModal && openAdmissionModal("apply")}
                  className="px-6 py-3.5 rounded-xl bg-gold-500 text-navy-950 font-bold hover:bg-gold-400 transition shadow-lg flex items-center gap-2"
                >
                  <Sparkles className="w-5 h-5" /> Enquire / Join Next Session
                </button>
                <a
                  href="#talks-grid"
                  className="px-6 py-3.5 rounded-xl border border-navy-900 text-navy-900 font-semibold hover:bg-navy-900 hover:text-white transition flex items-center gap-2"
                >
                  <Mic className="w-5 h-5" /> Explore All {talkItems.length} Sessions
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-navy-950 group">
                <img
                  src="/images/cohen-talk/talk_1.jpg"
                  alt="Cohen Talks Spotlight"
                  className="w-full h-[420px] object-contain bg-white transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent p-6 flex flex-col justify-end">
                  <span className="px-3 py-1 bg-gold-500 text-navy-950 text-xs font-bold rounded-md w-fit mb-2">
                    FEATURED TALK
                  </span>
                  <h3 className="text-white font-bold text-xl">Future of Work - Are You Ready?</h3>
                  <p className="text-slate-300 text-xs mt-1">Suniti Nanda (CEO) & Parijat Garg (COO) • Maxx Up</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Pillars */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl sm:text-4xl text-navy-900 font-bold">
              Core Pillars of Cohen Talks
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              Connecting students directly with experts across science, technology, diplomacy, and career strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-600 flex items-center justify-center mb-4 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-navy-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Talks Archive Section */}
      <section id="talks-grid" className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Heading & View Switcher */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
            <div>
              <span className="text-gold-600 font-bold text-sm uppercase tracking-wider block mb-1">
                COMPLETE ARCHIVE ({talkItems.length} SESSIONS)
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-navy-900 font-bold">
                Cohen Talks
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {/* Category Filter */}
              <div className="flex items-center gap-1 bg-slate-100 p-1.5 rounded-xl border border-slate-200 text-xs sm:text-sm">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-3.5 py-1.5 rounded-lg font-semibold transition ${
                      activeCategory === cat
                        ? "bg-navy-900 text-white shadow-sm"
                        : "text-slate-600 hover:text-navy-900 hover:bg-white/60"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Layout Switcher (List vs Grid) */}
              <div className="flex items-center gap-1 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition ${
                    viewMode === "list"
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "text-slate-600 hover:text-navy-900"
                  }`}
                  title="Official List View"
                >
                  <List className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition ${
                    viewMode === "grid"
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "text-slate-600 hover:text-navy-900"
                  }`}
                  title="Grid View"
                >
                  <Grid className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* List View (Exact replica of official site as shown in screenshot) */}
          {viewMode === "list" ? (
            <div className="space-y-12">
              {paginatedTalks.map((talk) => (
                <div
                  key={talk.id}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                >
                  {/* Left Column: Poster Image - Aspect Square Object Fill (0% cut off) */}
                  <div className="md:col-span-4 lg:col-span-4 flex justify-center">
                    <div className="relative aspect-square w-full max-w-[320px] rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white cursor-pointer group">
                      <img
                        src={talk.image}
                        alt={talk.title}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = "/images/facilities_banner.png";
                        }}
                        className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
                        onClick={() => setSelectedPoster(talk)}
                      />
                      <button
                        onClick={() => setSelectedPoster(talk)}
                        className="absolute bottom-2 right-2 p-2 bg-navy-950/80 hover:bg-gold-500 hover:text-navy-950 text-white rounded-full transition shadow"
                        title="View Full Poster"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Title, Description, Green Read More Button */}
                  <div className="md:col-span-8 lg:col-span-8 space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 bg-gold-500/10 border border-gold-500/30 text-gold-700 font-bold text-xs rounded-full uppercase tracking-wider">
                        {talk.tag}
                      </span>
                      <span className="text-slate-400 text-xs">• {talk.date}</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl text-navy-900 font-bold">
                      {talk.title}
                    </h3>

                    <p className="text-slate-600 text-base leading-relaxed">
                      {talk.description}
                    </p>

                    <div className="text-xs text-slate-500 space-y-1">
                      <p>
                        <strong className="text-navy-900">Speaker(s):</strong>{" "}
                        {talk.speakers.map((s) => `${s.name} (${s.title})`).join(", ")}
                      </p>
                      <p>
                        <strong className="text-navy-900">Venue / Platform:</strong> {talk.venue}
                      </p>
                    </div>

                    {/* Official Green Read More Button (As in user's screenshot) */}
                    <div className="pt-2">
                      <button
                        onClick={() => setSelectedPoster(talk)}
                        className="inline-flex items-center gap-3 bg-[#388e3c] hover:bg-[#2e7d32] text-white font-semibold rounded-lg overflow-hidden shadow transition group"
                      >
                        <span className="px-6 py-3 text-sm">Read More</span>
                        <span className="px-3.5 py-3 bg-white/10 group-hover:bg-white/20 border-l border-white/20 transition">
                          <ArrowRight className="w-4 h-4 text-white" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Grid View */
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {paginatedTalks.map((talk) => (
                <article
                  key={talk.id}
                  className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-white border-b border-slate-100">
                    <img
                      src={talk.image}
                      alt={talk.title}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "/images/facilities_banner.png";
                      }}
                      className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                      onClick={() => setSelectedPoster(talk)}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-navy-900/90 backdrop-blur-md text-gold-400 font-bold text-[11px] rounded-full uppercase tracking-wider border border-gold-400/30">
                        {talk.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-navy-900 text-xl group-hover:text-gold-600 transition mb-3 line-clamp-2">
                        {talk.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {talk.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 space-y-3">
                      <div className="text-xs text-slate-500">
                        <strong>Speakers:</strong> {talk.speakers.map((s) => s.name).join(", ")}
                      </div>
                      <button
                        onClick={() => setSelectedPoster(talk)}
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#388e3c] hover:bg-[#2e7d32] text-white font-semibold py-2.5 px-4 rounded-lg transition text-sm shadow-sm"
                      >
                        Read More <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-slate-500">
                Showing <span className="font-bold text-navy-900">{indexOfFirstItem + 1}</span> to{" "}
                <span className="font-bold text-navy-900">
                  {Math.min(indexOfLastItem, filteredTalks.length)}
                </span>{" "}
                of <span className="font-bold text-navy-900">{filteredTalks.length}</span> sessions
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => changePage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2.5 rounded-xl border border-slate-200 text-navy-900 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 transition"
                  title="Previous Page"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => changePage(page)}
                    className={`w-10 h-10 rounded-xl font-bold text-sm transition ${
                      currentPage === page
                        ? "bg-[#388e3c] text-white shadow-md"
                        : "border border-slate-200 text-navy-900 hover:bg-slate-100"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => changePage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2.5 rounded-xl border border-slate-200 text-navy-900 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 transition"
                  title="Next Page"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Poster Modal */}
      {selectedPoster && (
        <div className="fixed inset-0 z-50 bg-navy-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col max-h-[90vh]">
            <div className="p-4 bg-navy-900 text-white flex items-center justify-between">
              <div>
                <span className="text-gold-400 text-xs font-bold uppercase tracking-wider">
                  {selectedPoster.tag}
                </span>
                <h3 className="font-bold text-lg sm:text-xl text-white">{selectedPoster.title}</h3>
              </div>
              <button
                onClick={() => setSelectedPoster(null)}
                className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-4 overflow-y-auto flex-1 bg-slate-900 flex justify-center items-center">
              <img
                src={selectedPoster.image}
                alt={selectedPoster.title}
                className="max-h-[70vh] w-auto object-contain rounded-xl shadow-lg border border-slate-700"
              />
            </div>

            <div className="p-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-600 space-y-1">
                <p>
                  <strong className="text-navy-900">Speakers:</strong>{" "}
                  {selectedPoster.speakers.map((s) => `${s.name} (${s.title})`).join(" | ")}
                </p>
                <p>
                  <strong className="text-navy-900">Date & Venue:</strong> {selectedPoster.date} • {selectedPoster.venue}
                </p>
              </div>
              <button
                onClick={() => {
                  setSelectedPoster(null);
                  if (openAdmissionModal) openAdmissionModal("apply");
                }}
                className="px-5 py-2.5 bg-gold-500 text-navy-950 font-bold text-sm rounded-xl hover:bg-gold-400 transition shadow"
              >
                Inquire for Next Session
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-navy-950 text-white border-t border-gold-500/20">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <span className="px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-400 text-xs font-bold uppercase tracking-wider">
            VALUE-ADDITION AT COHEN INTERNATIONAL SCHOOL
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Empower Your Child with World-Class Thought Leadership
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            Experience how Cohen Talks, MUN, STEM labs, and CBSE academics combine to shape confident, global achievers.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => openAdmissionModal && openAdmissionModal("apply")}
              className="px-8 py-4 bg-gold-500 text-navy-950 font-bold rounded-xl hover:bg-gold-400 transition shadow-xl text-base flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" /> Apply for Admission AY 2026-27
            </button>
            <Link
              to="/about"
              className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition text-base"
            >
              Learn More About CIS
            </Link>
          </div>
        </div>
      </section>
    </div>
    </PageWrapper>
  );
}
