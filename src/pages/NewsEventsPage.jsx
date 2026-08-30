import React from "react";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import NewsAnnouncements from "../components/NewsAnnouncements";
import { Calendar, Megaphone, Sparkles, ShieldCheck, Award } from "lucide-react";

export default function NewsEventsPage({ openAdmissionModal }) {
  return (
    <PageWrapper>
      {/* HERO BANNER FOR NEWS & EVENTS PAGE */}
      <section className="relative py-24 sm:py-32 bg-navy-950 text-white overflow-hidden border-b border-white/10">
        {/* Background Image Overlay with Dark Tint */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img
            src="/images/about_banner.png"
            alt="News & Events Banner"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 " />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider mb-6 animate-pulse">
            <Megaphone className="w-4 h-4" />
            <span>Official Circulars &amp; Campus Media</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            News, Notices &amp; <br />
            <span className="text-gold-400 font-serif italic font-normal">
              Academic Highlights
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/80 leading-relaxed font-light mb-8">
            Stay updated with the latest achievements, state rank notifications, JEE/NEET results, cultural festivals, and official press releases from Cohen International School.
          </p>

          <div className="flex items-center justify-center flex-wrap gap-4 text-xs font-semibold text-white/70">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified Releases</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
              <Award className="w-4 h-4 text-gold-400" />
              <span>State Rank Honors</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>2026 Academic Calendar</span>
            </div>
          </div>
        </div>
      </section>

      {/* ALL NEWS & ANNOUNCEMENTS POSTS GRID */}
      <NewsAnnouncements isPage={true} openAdmissionModal={openAdmissionModal} />

      {/* BOTTOM ADMISSION CALLOUT BANNER */}
      <section className="py-16 bg-navy-950 text-white border-t border-white/10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <Sparkles className="w-8 h-8 text-gold-400 mx-auto mb-4 animate-bounce" />
          <h2 className="text-2xl sm:text-4xl font-extrabold font-serif mb-4">
            Join the Legacy of Odisha State Rankers
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-8 font-light">
            Admissions for AY 2027-2028 are currently open for Day Boarding &amp; Hostels with integrated IIT-JEE &amp; NEET coaching.
          </p>
          <div className="flex items-center justify-center flex-wrap gap-4">
            <button
              onClick={() => openAdmissionModal && openAdmissionModal("apply")}
              className="px-8 py-3.5 rounded-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              Apply for Admissions for AY 2027-2028
            </button>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition"
            >
              Contact Admissions Cell
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
