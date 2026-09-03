import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import HeaderBanner from '../components/HeaderBanner';
import { Target, Compass, Sparkles, CheckCircle2, Award, Heart, BookOpen, Sun, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import visionImg from '../assets/vision.png';
import missionImg from '../assets/mission.png';

export default function MissionPage({ openAdmissionModal }) {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (id) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  return (
    <PageWrapper>
      {/* HEADER BANNER */}
      <HeaderBanner
        title="Our Vision & Mission"
        subtitle="Moulding the Future of Students — Enabling Excellence, Through Harmony"
        breadcrumb="Vision & Mission"
        bgImage="/images/about_banner.png"
      />

      {/* ── SECTION 1: OUR VISION ── */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Graphic Image */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-cream-200 group max-w-[420px] w-full mx-auto">
                <img
                  src={visionImg}
                  alt="Cohen Vision Graphic"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold-500/20 rounded-full blur-2xl pointer-events-none" />
            </div>

            {/* Right Vision Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900 text-gold-400 text-xs font-bold uppercase tracking-widest shadow-sm">
                <Target className="w-4 h-4 text-gold-400" /> Vision Statement
              </div>
              
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 leading-tight">
                Our Vision
              </h2>

              <p className="text-navy-700/90 text-base sm:text-lg leading-relaxed font-medium">
                We envisage Cohen International School as one of those unique international schools that will give education a new name by breaking typical characteristics and moulding the future of students by optimising educational opportunities as the cornerstone of learning procedure.
              </p>

              <p className="text-navy-700/80 text-sm sm:text-base leading-relaxed">
                Cohen International School also believes in enriching childhood by imparting <strong className="text-navy-900 font-bold">Knowledge, Insight, Innovation, Technology and Transformation</strong> in accordance with global needs.
              </p>

              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-2xl bg-cream-100 border border-cream-200 text-center">
                  <span className="font-bold text-navy-900 text-xs uppercase tracking-wider block">Knowledge</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-cream-100 border border-cream-200 text-center">
                  <span className="font-bold text-navy-900 text-xs uppercase tracking-wider block">Insight</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-cream-100 border border-cream-200 text-center">
                  <span className="font-bold text-navy-900 text-xs uppercase tracking-wider block">Innovation</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-cream-100 border border-cream-200 text-center">
                  <span className="font-bold text-navy-900 text-xs uppercase tracking-wider block">Technology</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-cream-100 border border-cream-200 text-center col-span-2 sm:col-span-2">
                  <span className="font-bold text-navy-900 text-xs uppercase tracking-wider block">Transformation</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 2: OUR MISSION ── */}
      <section className="py-20 sm:py-24 bg-cream-100 border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Graphic Image (Placed on left to match site) */}
            <div className="lg:col-span-6 relative order-1 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-cream-300 group max-w-[420px] w-full mx-auto">
                <img
                  src={missionImg}
                  alt="Cohen Mission Sunrise Child Graphic"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold-500/20 rounded-full blur-2xl pointer-events-none" />
            </div>

            {/* Right Mission Content */}
            <div className="lg:col-span-6 space-y-6 order-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-700 text-xs font-bold uppercase tracking-widest shadow-sm">
                <Compass className="w-4 h-4 text-gold-600" /> Mission Statement
              </div>

              <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 leading-tight">
                Our Mission
              </h2>

              <div className="p-4 rounded-2xl bg-navy-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md border border-gold-500/30">
                <div>
                  <span className="text-gold-400 font-extrabold text-[11px] uppercase tracking-wider block">SCHOOL MOTTO</span>
                  <span className="text-base font-bold">Enabling Excellence, Through Harmony</span>
                </div>
                <div className="sm:border-l sm:border-white/20 sm:pl-4">
                  <span className="text-gold-400 font-extrabold text-[11px] uppercase tracking-wider block">STUDENT MANTRA</span>
                  <span className="text-sm font-semibold">Know, Learn &amp; Outshine the World</span>
                </div>
              </div>

              <p className="text-navy-700/90 text-base sm:text-lg leading-relaxed font-medium">
                Cohen International School is committed to motivate, encourage and inculcate every student with the mantra of <strong>know, learn and outshine the world</strong>. Our motto is <strong>'Enabling Excellence, Through Harmony'</strong>.
              </p>

              <p className="text-navy-700/80 text-sm sm:text-base leading-relaxed">
                We believe that each child is special and our mission to help the kids explore the various fields available and choose one of their own interest. Cohen International School in its pursuit for imparting holistic education, empowers students by best in class academics &amp; sports, imbibes &amp; inculcates creative learning with goal-oriented, overall development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: 4 SALIENT FEATURES OF MISSION ── */}
      <section className="py-20 sm:py-24 bg-navy-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" /> Core Mission Pillars
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-white font-bold mb-4">
              4 Salient Features of Our Mission
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed">
              Foundational pillars driving our pursuit of holistic education and overall development.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {[
              {
                id: 1,
                icon: BookOpen,
                badge: "01. Academic Core",
                title: "Holistic Education",
                shortText: "We aim at becoming a world-class teaching institution, one that will lay the foundation stone...",
                fullText: "We aim at becoming a world-class teaching institution, one that will lay the foundation stone for intellectual minds and a compassionate heart.",
                iconBg: "bg-gold-500/20 text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950",
                badgeColor: "text-gold-400",
                hoverBorder: "hover:border-gold-400/60",
                btnColor: "text-gold-400 hover:text-gold-300",
              },
              {
                id: 2,
                icon: Heart,
                badge: "02. Health & Yoga",
                title: "Physical and Mental Wellness",
                shortText: "A sound mind resides in a sound body. We value the importance of physical fitness and mental wellness...",
                fullText: "A sound mind resides in a sound body. We value the importance of physical fitness and mental wellness. CIS curriculum will include sports, Yoga activities and sessions for catering to the emotional needs of each child.",
                iconBg: "bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-navy-950",
                badgeColor: "text-emerald-400",
                hoverBorder: "hover:border-emerald-400/60",
                btnColor: "text-emerald-400 hover:text-emerald-300",
              },
              {
                id: 3,
                icon: Award,
                badge: "03. Moral Values",
                title: "Intellectual Development",
                shortText: "We aim at imparting knowledge that not only kindles the minds but also touches their heart...",
                fullText: "We aim at imparting knowledge that not only kindles the minds but also touches their heart. Our curriculum will include human values, gender equality, outreach activities, moral education in addition to the formal education.",
                iconBg: "bg-purple-500/20 text-purple-400 group-hover:bg-purple-500 group-hover:text-navy-950",
                badgeColor: "text-purple-400",
                hoverBorder: "hover:border-purple-400/60",
                btnColor: "text-purple-400 hover:text-purple-300",
              },
              {
                id: 4,
                icon: Sun,
                badge: "04. Talent Platform",
                title: "Follow Your Dream",
                shortText: "CIS offers the right platform to harness the unique talents of each kid, and groom them to excel...",
                fullText: "CIS offers the right platform to harness the unique talents of each kid, and groom them to be excel in the fields of their choice, be it academics, fine arts, sports.",
                iconBg: "bg-sky-500/20 text-sky-400 group-hover:bg-sky-500 group-hover:text-navy-950",
                badgeColor: "text-sky-400",
                hoverBorder: "hover:border-sky-400/60",
                btnColor: "text-sky-400 hover:text-sky-300",
              },
            ].map((feature) => {
              const Icon = feature.icon;
              const isExpanded = !!expandedCards[feature.id];
              return (
                <div
                  key={feature.id}
                  className={`p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/15 ${feature.hoverBorder} transition-all duration-300 shadow-xl flex flex-col justify-between h-full min-h-[300px] group`}
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl ${feature.iconBg} flex items-center justify-center font-bold mb-4 transition-colors`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`${feature.badgeColor} font-bold text-xs uppercase tracking-widest block mb-1.5`}>
                      {feature.badge}
                    </span>
                    <h3 className="font-display text-lg text-white font-bold mb-2 min-h-[56px] flex items-start">
                      {feature.title}
                    </h3>
                    <p className="text-white/75 text-xs sm:text-sm leading-relaxed transition-all duration-200">
                      {isExpanded ? feature.fullText : feature.shortText}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleCard(feature.id)}
                    className={`mt-4 pt-2 inline-flex items-center gap-1.5 text-xs font-bold ${feature.btnColor} transition-colors focus:outline-none cursor-pointer self-start`}
                  >
                    <span>{isExpanded ? "Read Less" : "Read More"}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="py-16 bg-gold-500 text-navy-950 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
            Experience Enabling Excellence, Through Harmony
          </h2>
          <p className="text-navy-900/80 mb-6 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Join the AY 2027-2028 batch at Cohen International School and empower your child's future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => openAdmissionModal('apply')}
              className="px-8 py-3.5 bg-navy-900 text-white font-bold rounded-full hover:bg-navy-800 transition shadow-lg text-sm"
            >
              Apply Online Now
            </button>
            <Link
              to="/about"
              className="px-8 py-3.5 bg-white text-navy-950 font-bold rounded-full hover:bg-gray-100 transition shadow text-sm flex items-center gap-2"
            >
              <span>Explore About Us</span> <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
