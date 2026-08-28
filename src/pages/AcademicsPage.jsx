import React from 'react';
import PageWrapper from '../components/PageWrapper';
import HeaderBanner from '../components/HeaderBanner';
import Academics from '../components/Academics';
import { BookOpen, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AcademicsPage({ openAdmissionModal }) {
  return (
    <PageWrapper>
      <HeaderBanner
        title="Academics & Integrated JEE/NEET Coaching"
        subtitle="CBSE Senior Secondary Curriculum integrated with Vidwan Classes competitive mentorship — with zero hidden coaching fees."
       
        breadcrumb="Academics"
        bgImage="/images/academics_banner.png"
      />

      <Academics />

      {/* Senior Secondary Stream Focus */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-400 font-medium tracking-widest uppercase text-xs mb-2 block">
              Classes XI & XII Streams
            </span>
            <h2 className="font-display text-4xl text-white font-bold mb-4">
              Senior Secondary Specialization Streams
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Tailored academic pathways equipping students for engineering, medical, management, and humanities careers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stream 1 */}
            <div className="p-7 rounded-3xl bg-white/5 border border-white/10 hover:border-gold-400/60 transition">
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center font-bold text-lg mb-4">
                PCM
              </div>
              <h3 className="font-display text-xl text-white font-semibold mb-2">Science (PCM + JEE)</h3>
              <p className="text-white/70 text-xs leading-relaxed mb-4">
                Physics, Chemistry, Mathematics, English & Computer Science integrated with IIT-JEE Main & Advanced prep.
              </p>
              <span className="text-xs text-gold-400 font-semibold block">Includes Vidwan JEE Mentorship</span>
            </div>

            {/* Stream 2 */}
            <div className="p-7 rounded-3xl bg-white/5 border border-white/10 hover:border-gold-400/60 transition">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg mb-4">
                PCB
              </div>
              <h3 className="font-display text-xl text-white font-semibold mb-2">Science (PCB + NEET)</h3>
              <p className="text-white/70 text-xs leading-relaxed mb-4">
                Physics, Chemistry, Biology, English & Biotechnology integrated with NEET Medical Entrance prep.
              </p>
              <span className="text-xs text-emerald-400 font-semibold block">Includes Medical Mock Tests</span>
            </div>

            {/* Stream 3 */}
            <div className="p-7 rounded-3xl bg-white/5 border border-white/10 hover:border-gold-400/60 transition">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-lg mb-4">
                COM
              </div>
              <h3 className="font-display text-xl text-white font-semibold mb-2">Commerce & Finance</h3>
              <p className="text-white/70 text-xs leading-relaxed mb-4">
                Accountancy, Business Studies, Economics, Applied Math & Entrepreneurship with CA Foundation orientation.
              </p>
              <span className="text-xs text-purple-400 font-semibold block">Includes CA/CS Orientation</span>
            </div>

            {/* Stream 4 */}
            <div className="p-7 rounded-3xl bg-white/5 border border-white/10 hover:border-gold-400/60 transition">
              <div className="w-12 h-12 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-lg mb-4">
                HUM
              </div>
              <h3 className="font-display text-xl text-white font-semibold mb-2">Humanities & Arts</h3>
              <p className="text-white/70 text-xs leading-relaxed mb-4">
                Political Science, History, Psychology, Economics & English preparing students for Civil Services & Law.
              </p>
              <span className="text-xs text-rose-400 font-semibold block">Includes CLAT & IAS Prep</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cream-100 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-navy-900 mb-3">Ready to Join the AY 2027-2028 Academic Batch?</h2>
          <p className="text-navy-700/80 mb-6 text-sm">
            Calculate your estimated fees on our Admissions page or fill the online application form.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => openAdmissionModal('apply')}
              className="btn-premium px-8 py-3.5 bg-navy-900 text-white font-semibold rounded-full shadow-lg"
            >
              Apply Online Now
            </button>
            <Link
              to="/admissions"
              className="px-8 py-3.5 bg-gold-500 text-navy-900 font-semibold rounded-full hover:bg-gold-400 transition"
            >
              Check Fee Estimator
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
