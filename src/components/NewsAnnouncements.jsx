import React, { useState } from "react";
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
  Download
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

const defaultEventsData = [
  {
    id: "evt-001",
    day: "26",
    month: "July",
    year: "2026",
    title: "JEE (Advanced) 2026 : Odisha State Rank 2",
    studentName: "Aryasmman Pradhan",
    rank: "AIR 314 (Odisha State Rank-2)",
    category: "JEE Advanced Result",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    posterBadge: "2-Yr School Integrated Program",
    summary:
      "Master Aryasmman Pradhan scores All India Rank 314 & Odisha State Rank 2 in JEE (Advanced) 2026 examination under Cohen Vidwan Integrated Program.",
    fullNotice:
      "Cohen International School proudly congratulates Aryasmman Pradhan for achieving AIR 314 and Odisha State Rank 2 in JEE (Advanced) 2026. Enrolled in the 2-Year School Integrated Coaching Program, Aryasmman attributes his success to regular mock tests, 1-on-1 faculty mentorship, and state-of-the-art campus learning environment.",
    pdfUrl: "https://www.cbse.gov.in/cbsesite/documents/circular_result.pdf"
  },
  {
    id: "evt-002",
    day: "26",
    month: "July",
    year: "2026",
    title: "JEE (Advanced) 2026 : Odisha State Rank 1",
    studentName: "Bhavesh Patra",
    rank: "AIR 29 (Odisha State Rank-1)",
    category: "JEE Advanced Result",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    posterBadge: "2-Yr School Integrated Program",
    summary:
      "Master Bhavesh Patra creates history by securing All India Rank 29 & Odisha State Rank 1 in JEE (Advanced) 2026.",
    fullNotice:
      "Bhavesh Patra has topped the state of Odisha with All India Rank 29 in JEE (Advanced) 2026. As a student of the Cohen Vidwan Integrated Batch, Bhavesh demonstrated outstanding analytical mastery and dedication.",
    pdfUrl: "https://www.cbse.gov.in/cbsesite/documents/circular_result.pdf"
  },
  {
    id: "evt-003",
    day: "16",
    month: "February",
    year: "2026",
    title: "JEE Main 2026 Success - 100%ile Result",
    studentName: "Bhavesh Patra & Aryasmman Pradhan",
    rank: "State Rank 1 & State Rank 3",
    category: "JEE Main Result",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop",
    posterBadge: "First Time in Odisha 100%ile",
    summary:
      "Historical landmark achievement: CIS students secure 100 NTA percentile score in JEE Main 2026 Session 1.",
    fullNotice:
      "For the first time in Odisha, Cohen International School integrated batch students Bhavesh Patra and Aryasmman Pradhan achieved 100%ile NTA scores in JEE Main 2026.",
    pdfUrl: "#"
  },
  {
    id: "evt-004",
    day: "10",
    month: "August",
    year: "2026",
    title: "Admissions Open 2026-27 : Nursery to Grade XII",
    studentName: "CIS Admissions Directorate",
    rank: "Integrated IIT-JEE | NEET | IISER | Olympiads",
    category: "Admissions",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=800&auto=format&fit=crop",
    posterBadge: "Session 2026-27 Intake",
    summary:
      "Registrations open for Day Boarding & Residential Hostels with integrated competitive coaching.",
    fullNotice:
      "Admissions for Academic Session 2026-27 are now open. Parents can submit online applications for Nursery to Grade XII with integrated IIT-JEE & NEET coaching options.",
    pdfUrl: "https://drive.google.com/file/d/1gQa9u2EHouQNeoMaA7HTFnNi7pBrRwDt/view"
  }
];

export default function NewsAnnouncements({ openAdmissionModal }) {
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";

  const [events, setEvents] = useState(defaultEventsData);
  const [activeCategory, setActiveCategory] = useState("All");
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
    if (activeCategory === "All") return true;
    return evt.category === activeCategory;
  });

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
        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format&fit=crop",
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
    <section id="news-events" className="py-16 sm:py-20 bg-white dark:bg-[#06121E] text-navy-950 dark:text-white relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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

        {/* CATEGORY FILTER TABS */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 font-bold shadow-md"
                  : "bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-white/70 hover:bg-gray-200 dark:hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* EVENT POSTERS GRID (Matching Screenshot Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white dark:bg-navy-950/80 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* TOP POSTER MEDIA CONTAINER */}
              <div className="relative aspect-[4/3] overflow-hidden bg-navy-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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

              {/* BOTTOM DATE & TITLE BANNER (Exact Replica of Screenshot) */}
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

      </div>

      {/* FULL EVENT DETAILS MODAL */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-white dark:bg-navy-900 border border-gold-500/30 rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl space-y-4 relative text-navy-950 dark:text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-3 border-b border-gray-200 dark:border-white/10">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-gold-400 mb-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{selectedEvent.day} {selectedEvent.month} {selectedEvent.year}</span>
                  <span>•</span>
                  <span>{selectedEvent.category}</span>
                </div>
                <h3 className="font-serif text-xl font-bold">{selectedEvent.title}</h3>
              </div>
              <button onClick={() => setSelectedEvent(null)} className="p-1 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden aspect-video bg-navy-950">
              <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-gray-700 dark:text-white/80 leading-relaxed">
              <p className="font-bold text-navy-900 dark:text-gold-300">{selectedEvent.summary}</p>
              <p>{selectedEvent.fullNotice}</p>
            </div>

            <div className="pt-3 border-t border-gray-200 dark:border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="w-4 h-4" /> Verified CIS Release
              </div>
              {selectedEvent.pdfUrl && selectedEvent.pdfUrl !== "#" && (
                <a
                  href={selectedEvent.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-gold-500 text-navy-950 font-bold hover:bg-gold-400 text-xs transition flex items-center gap-1.5"
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
            className="bg-navy-900 border border-gold-500/40 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-4 relative text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Megaphone className="w-5 h-5 text-gold-400" />
                <h3 className="font-display text-lg font-bold text-white">
                  Deploy / Publish New Event Poster
                </h3>
              </div>
              <button onClick={() => setShowDeployModal(false)} className="text-white/60 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

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
      )}

    </section>
  );
}
