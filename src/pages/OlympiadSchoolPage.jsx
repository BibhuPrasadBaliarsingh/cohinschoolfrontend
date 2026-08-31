import React from 'react';
import PageWrapper from '../components/PageWrapper';
import HeaderBanner from '../components/HeaderBanner';
import { Award, BookOpen, Brain, Sparkles, CheckCircle2, Trophy, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import olympiadImg from '../assets/olympiad.png';

export default function OlympiadSchoolPage({ openAdmissionModal }) {
  return (
    <PageWrapper>
      {/* Header Banner - Matches Image 1 from screenshot */}
      <HeaderBanner
        title="Olympiad School"
        subtitle="Nurturing Logical Thinking, Analytical Mastery & Competitive Excellence at Cohen Olympiad School."
        breadcrumb="Olympiad School"
        bgImage="/bg.png"
      />

      {/* Main Content Section - Matches Image 2 layout */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Heading & Subheading from screenshot */}
          <div className="mb-12">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1b365d] mb-2">
              Olympiad School
            </h1>
            <p className="text-gray-600 text-base sm:text-lg font-sans">
              Olympiad School
            </p>
          </div>

          {/* Logo & Overview Card */}
          <div className="grid md:grid-cols-12 gap-10 items-center mb-16 p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm">
            {/* Left: COS Logo Image */}
            <div className="md:col-span-5 flex justify-center">
              <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-md max-w-sm flex items-center justify-center">
                <img
                  src={olympiadImg}
                  alt="Cohen Olympiad School Logo"
                  className="max-h-60 w-auto object-contain"
                />
              </div>
            </div>

            {/* Right: Overview text */}
            <div className="md:col-span-7 space-y-5 text-gray-700 text-base sm:text-lg leading-relaxed">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" /> Cohen Olympiad School (COS)
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-950">
                Building Early Analytical &amp; Competitive Foundation
              </h2>
              <p>
                Cohen Olympiad School (COS) is a dedicated wing within Cohen International School designed to ignite young minds, foster deep logical thinking, and prepare students for prestigious national and international competitive olympiads.
              </p>
              <p>
                Through specialized mentorship, problem-solving workshops, and interactive reasoning drills, students from Class 1 onwards develop high-order thinking skills (HOTS) that lay a robust foundation for future competitive examinations like IIT-JEE, NEET, NTSE, and KVPY.
              </p>
            </div>
          </div>

          {/* Olympiad Specialization Pillars */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-gold-600 font-bold uppercase tracking-widest text-xs mb-2 block">
                COMPETITIVE WINGS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950">
                Olympiad &amp; Foundation Disciplines
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl mb-4">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-navy-950 mb-2">Maths Olympiad (IMO)</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Speed math, Vedic mathematics, logical geometry, and problem solving for International Mathematics Olympiad.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-blue-500 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xl mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-navy-950 mb-2">Science Olympiad (NSO)</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Experimental physics, chemistry models, biology aptitude, and National Science Olympiad preparation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-purple-500 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xl mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-navy-950 mb-2">Cyber &amp; AI Olympiad</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Coding, algorithmic reasoning, artificial intelligence basics, and National Cyber Olympiad mentorship.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-rose-500 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xl mb-4">
                  <Trophy className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-navy-950 mb-2">NTSE &amp; Foundation</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Mental Ability Test (MAT) &amp; Scholastic Aptitude Test (SAT) prep for early competitive dominance.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-navy-950 via-navy-900 to-navy-800 text-white text-center shadow-xl">
            <h2 className="font-display text-2xl sm:text-4xl font-bold mb-4">
              Enroll Your Child in Cohen Olympiad School
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base mb-8">
              Give your child an early competitive advantage with our expert faculty and specialized Olympiad curriculum.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={() => openAdmissionModal?.('apply')}
                className="btn-premium px-8 py-3.5 bg-gold-500 text-navy-950 font-bold rounded-full hover:bg-gold-400 transition"
              >
                Apply for Olympiad Wing
              </button>
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition inline-flex items-center gap-2"
              >
                Enquire Office <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </PageWrapper>
  );
}
