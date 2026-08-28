import React from 'react';
import { Sparkles, Check, BookOpen, Layers, Award, Target, Compass, Feather, Star, CheckCircle, Lightbulb, Users, Building, ShieldCheck } from 'lucide-react';

export default function Academics() {
  return (
    <section id="academics" className="py-24 lg:py-32 bg-cream-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── NEP 2020 HEADER SECTION ── */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-700 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-gold-600" /> NEP 2020: 5+3+3+4 School Education Structure
          </div>
          <h2 className="font-display text-4xl lg:text-5xl text-navy-900 mb-4 font-bold">
            Curriculum Designed for Excellence
          </h2>
          <p className="text-navy-700/80 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            The <strong className="text-navy-900">5+3+3+4 structure</strong> is the curricular and pedagogical framework introduced under India’s <strong>National Education Policy (NEP) 2020</strong>. It replaces the old 10+2 system and aligns school education with children’s stages of cognitive development.
          </p>
        </div>

        {/* ── NEP 2020: 4 STAGES GRID ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Foundational Stage */}
          <div className="card-lift p-6 sm:p-7 rounded-3xl bg-white border border-emerald-200 shadow-sm relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold uppercase tracking-wider">
                  5 Years
                </span>
                <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                  Ages 3–8
                </span>
              </div>
              <h3 className="font-display text-xl text-navy-900 font-bold mb-1">
                Foundational Stage
              </h3>
              <p className="text-xs font-bold text-emerald-700 mb-3">
                3 Years Preschool + Classes 1–2
              </p>
              <p className="text-xs sm:text-sm text-navy-700/80 leading-relaxed mb-4">
                Play-based, activity-based learning. Focus on language development, early numeracy, motor skills, social & emotional development, and building curiosity.
              </p>
            </div>
            <div className="pt-3 border-t border-emerald-100 flex items-center gap-2 text-[11px] font-semibold text-emerald-700">
              <CheckCircle className="w-3.5 h-3.5" /> Early Childhood Care &amp; ECCE
            </div>
          </div>

          {/* Preparatory Stage */}
          <div className="card-lift p-6 sm:p-7 rounded-3xl bg-white border border-amber-200 shadow-sm relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold uppercase tracking-wider">
                  3 Years
                </span>
                <span className="text-xs text-amber-800 font-semibold bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                  Ages 8–11
                </span>
              </div>
              <h3 className="font-display text-xl text-navy-900 font-bold mb-1">
                Preparatory Stage
              </h3>
              <p className="text-xs font-bold text-amber-800 mb-3">
                Classes 3–5
              </p>
              <p className="text-xs sm:text-sm text-navy-700/80 leading-relaxed mb-4">
                Discovery-based learning, reading, writing, mathematics, science, arts, physical education, and ethical understanding.
              </p>
            </div>
            <div className="pt-3 border-t border-amber-100 flex items-center gap-2 text-[11px] font-semibold text-amber-800">
              <CheckCircle className="w-3.5 h-3.5" /> Foundational Literacy &amp; Numeracy
            </div>
          </div>

          {/* Middle Stage */}
          <div className="card-lift p-6 sm:p-7 rounded-3xl bg-white border border-sky-200 shadow-sm relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-extrabold uppercase tracking-wider">
                  3 Years
                </span>
                <span className="text-xs text-sky-800 font-semibold bg-sky-50 px-2.5 py-0.5 rounded-md border border-sky-200">
                  Ages 11–14
                </span>
              </div>
              <h3 className="font-display text-xl text-navy-900 font-bold mb-1">
                Middle Stage
              </h3>
              <p className="text-xs font-bold text-sky-800 mb-3">
                Classes 6–8 (CFP Foundation Begins)
              </p>
              <p className="text-xs sm:text-sm text-navy-700/80 leading-relaxed mb-4">
                Experiential learning, introduction to subject teachers, coding, vocational education, critical thinking, problem solving, and exposure to arts & sports.
              </p>
            </div>
            <div className="pt-3 border-t border-sky-100 flex items-center gap-2 text-[11px] font-semibold text-sky-800">
              <CheckCircle className="w-3.5 h-3.5" /> Vocational Skills &amp; Coding
            </div>
          </div>

          {/* Secondary Stage */}
          <div className="card-lift p-6 sm:p-7 rounded-3xl bg-white border border-purple-200 shadow-sm relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-extrabold uppercase tracking-wider">
                  4 Years
                </span>
                <span className="text-xs text-purple-800 font-semibold bg-purple-50 px-2.5 py-0.5 rounded-md border border-purple-200">
                  Ages 14–18
                </span>
              </div>
              <h3 className="font-display text-xl text-navy-900 font-bold mb-1">
                Secondary Stage
              </h3>
              <p className="text-xs font-bold text-purple-800 mb-3">
                Classes 9–12 (CSIP Integrated Prep)
              </p>
              <p className="text-xs sm:text-sm text-navy-700/80 leading-relaxed mb-4">
                Multidisciplinary & flexible learning, choice of subjects across streams, skill development, internships, research orientation, and higher education readiness.
              </p>
            </div>
            <div className="pt-3 border-t border-purple-100 flex items-center gap-2 text-[11px] font-semibold text-purple-800">
              <CheckCircle className="w-3.5 h-3.5" /> Flexible Multidisciplinary Choice
            </div>
          </div>
        </div>

        {/* ── KEY FEATURES OF NEP 5+3+3+4 STRUCTURE ── */}
        <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-[#0F2840] text-white p-8 sm:p-10 rounded-3xl shadow-xl mb-20 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-60 h-60 bg-gold-500/10 rounded-full blur-3xl" />
          
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-gold-400 mb-6 text-center">
            Key Features of the NEP 5+3+3+4 Structure
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="p-4 rounded-2xl bg-white/10 border border-white/10 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-white/90">Includes Early Childhood Care and Education (ECCE) as part of formal schooling.</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 border border-white/10 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-white/90">Emphasizes foundational literacy and numeracy in the early years.</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 border border-white/10 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-white/90">Promotes experiential, inquiry-based, and competency-based learning.</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 border border-white/10 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-white/90">Offers flexible subject choices in secondary school without rigid stream barriers.</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 border border-white/10 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-white/90">Encourages vocational education, coding, and internships from middle school onwards.</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 border border-white/10 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-white/90">Focuses on holistic development through academics, arts, sports, and life skills.</span>
            </div>
          </div>

          <div className="bg-gold-500/20 border border-gold-400/40 p-4 rounded-2xl text-center">
            <p className="text-xs sm:text-sm font-bold text-gold-300 uppercase tracking-wider mb-1">
              GOAL OF NEP 2020 AT COHEN INTERNATIONAL SCHOOL
            </p>
            <p className="text-sm sm:text-base text-white/90 font-medium">
              "To develop happy, responsible, and productive citizens with essential values, life skills and 21st century competencies."
            </p>
          </div>
        </div>

        {/* ── COHEN FLAGSHIP PROGRAMMES: CFP & CSIP ── */}
        <div className="text-center mb-12">
          <span className="text-gold-600 font-bold tracking-widest uppercase text-xs mb-2 block">
            SPECIALIZED ACADEMIC PATHWAYS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-navy-900 font-bold">
            Flagship Academic Programs (CFP &amp; CSIP)
          </h2>
          <p className="text-navy-700/80 max-w-2xl mx-auto text-sm sm:text-base mt-2">
            Tailored programs catering to students across Odisha and other states for complete competitive &amp; board mastery.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          {/* CFP: Cohen Foundation Program */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-cream-300 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-navy-900 text-gold-400 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase">
                  CFP
                </span>
                <span className="text-xs font-bold text-navy-600">Classes 6 to 10</span>
              </div>
              <h3 className="font-display text-2xl text-navy-900 font-bold mb-3">
                Cohen Foundation Program (CFP)
              </h3>
              <p className="text-navy-700/80 text-sm leading-relaxed mb-6">
                A holistic journey fostering critical thinking, problem-solving, and structured pre-foundation coaching for IIT-JEE, NEET &amp; Olympiads.
              </p>
              
              <ul className="space-y-3 text-xs sm:text-sm text-navy-800 font-medium">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span>Conceptual clarity + competitive edge for middle &amp; high schoolers</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span>Weekly tests &amp; dedicated doubt-clearing sessions</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span>Olympiad &amp; Reasoning training with Science camp exposure</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span>Early exposure to Coding, Robotics, AI and Model UN (CMUN)</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-cream-100 border border-cream-200 text-xs text-navy-800 font-semibold">
              Prepares students seamlessly for Class 11 &amp; 12 CSIP Entrance Coaching.
            </div>
          </div>

          {/* CSIP: Cohen School Integrated Program */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-navy-900 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between border-2 border-gold-500/40">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-gold-500/10 rounded-full blur-2xl" />

            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gold-500 text-navy-900 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase">
                  CSIP
                </span>
                <span className="text-xs font-bold text-gold-400">Classes 11 &amp; 12</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-white font-bold mb-2">
                Cohen School Integrated Program (CSIP)
              </h3>
              <p className="text-gold-400 font-semibold text-xs sm:text-sm mb-6">
                Our USPs for CSIP (Grades 11 &amp; 12) — Catering to all students of Odisha &amp; other states
              </p>

              <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm text-white/90">
                <div className="flex items-start gap-2.5 bg-white/5 p-3 rounded-xl border border-white/10">
                  <span className="text-gold-400 font-bold">1.</span>
                  <span>Integrated CBSE schooling + IIT JEE, NEET, NISER, IISER, IISC &amp; Olympiad coaching.</span>
                </div>
                <div className="flex items-start gap-2.5 bg-white/5 p-3 rounded-xl border border-white/10">
                  <span className="text-gold-400 font-bold">2.</span>
                  <span>Entrance faculties are alumni of top IITs &amp; PhD holders / Doctorates / Gold Medalists.</span>
                </div>
                <div className="flex items-start gap-2.5 bg-white/5 p-3 rounded-xl border border-white/10">
                  <span className="text-gold-400 font-bold">3.</span>
                  <span>Regular subjective tests for Board preparations.</span>
                </div>
                <div className="flex items-start gap-2.5 bg-white/5 p-3 rounded-xl border border-white/10">
                  <span className="text-gold-400 font-bold">4.</span>
                  <span>Weekly, fortnightly &amp; monthly CBTs (Computer Based Tests) for entrance exam pattern.</span>
                </div>
                <div className="flex items-start gap-2.5 bg-white/5 p-3 rounded-xl border border-white/10">
                  <span className="text-gold-400 font-bold">5.</span>
                  <span>Rich legacy of Vidwan Classes (est. 2007) — pioneers of IIT JEE &amp; NEET coaching in Odisha.</span>
                </div>
                <div className="flex items-start gap-2.5 bg-white/5 p-3 rounded-xl border border-white/10">
                  <span className="text-gold-400 font-bold">6.</span>
                  <span>Strong alumni network passed out of top IITs, IISC, NISER, IISER, ISI etc.</span>
                </div>
                <div className="flex items-start gap-2.5 bg-white/5 p-3 rounded-xl border border-white/10">
                  <span className="text-gold-400 font-bold">7.</span>
                  <span>Regular PTMs, result analysis &amp; academic journey management by top faculties.</span>
                </div>
                <div className="flex items-start gap-2.5 bg-white/5 p-3 rounded-xl border border-white/10">
                  <span className="text-gold-400 font-bold">8.</span>
                  <span>Safe AC hostel accommodation with own canteen staff providing hygienic &amp; balanced diet.</span>
                </div>
                <div className="flex items-start gap-2.5 bg-white/5 p-3 rounded-xl border border-white/10">
                  <span className="text-gold-400 font-bold">9.</span>
                  <span>Recreational facilities, Sports, &amp; visits to reputed institutes (IIT, NISER, SDI, IOP).</span>
                </div>
                <div className="flex items-start gap-2.5 bg-white/5 p-3 rounded-xl border border-white/10">
                  <span className="text-gold-400 font-bold">10.</span>
                  <span>Seminars at Cohen with resource persons from TIFR, ISRO, IIT, NISER, IOP.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-gold-400 font-semibold">
              <span>Full Coaching Integrated — Zero Extra Fee</span>
              <span>Available for PCM &amp; PCB Streams</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
