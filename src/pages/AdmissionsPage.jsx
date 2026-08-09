import React from 'react';
import PageWrapper from '../components/PageWrapper';
import HeaderBanner from '../components/HeaderBanner';
import Admissions from '../components/Admissions';
import { CheckCircle2, ShieldCheck, HelpCircle, FileText, Award } from 'lucide-react';

export default function AdmissionsPage({ openAdmissionModal }) {
  return (
    <PageWrapper>
      <HeaderBanner
        title="Admissions 2026–27 & Fee Structure"
        subtitle="Transparent admission process, merit scholarships, and indicative annual fee calculator for day scholars and boarders."
        badge="Session 2026–27 Open"
        breadcrumb="Admissions"
        bgImage="/images/admissions_banner.png"
      />

      <Admissions openAdmissionModal={openAdmissionModal} />

      {/* Required Documents & Criteria */}
      <section className="py-20 bg-cream-100 border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Required Documents */}
            <div className="bg-white p-8 rounded-3xl border border-cream-200 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl text-navy-900 font-bold">
                  Checklist of Required Documents
                </h3>
              </div>
              <ul className="space-y-3.5 text-sm text-navy-800">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span>Child’s Official Birth Certificate (issued by Municipal Corporation / Panchayat)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span>Transfer Certificate (TC) & Conduct Certificate from previous school</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span>Report Card / Marksheet of previous class passed</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span>6 Recent Passport-Size Photographs of Student & 2 of Parents</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span>Aadhaar Card copies of Student and Parents</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span>Blood Group & Medical Fitness Certificate</span>
                </li>
              </ul>
            </div>

            {/* Right: Scholarships & Merit */}
            <div className="bg-navy-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gold-500 text-navy-900 flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-2xl font-bold">
                    Merit Scholarships & Fee Concessions
                  </h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Cohen Educational Trust rewards academic brilliance and sports excellence with generous fee waivers:
                </p>
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white/10 border border-white/15">
                    <h4 className="font-semibold text-gold-400 text-sm">Class X Board Merit Award</h4>
                    <p className="text-xs text-white/80 mt-1">
                      Up to 100% tuition fee waiver for students scoring 95%+ in Class X Board exams joining Class XI Science.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/10 border border-white/15">
                    <h4 className="font-semibold text-gold-400 text-sm">Olympiad & NTSE Rankers</h4>
                    <p className="text-xs text-white/80 mt-1">
                      Special concessions for state/national level Science, Math, and Cyber Olympiad medalists.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/10 border border-white/15">
                    <h4 className="font-semibold text-gold-400 text-sm">Sibling & Defence Discount</h4>
                    <p className="text-xs text-white/80 mt-1">
                      10% discount on tuition fees for younger siblings and children of Armed Forces personnel.
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => openAdmissionModal('apply')}
                className="mt-6 w-full py-4 bg-gold-500 text-navy-900 font-bold rounded-2xl hover:bg-gold-400 transition"
              >
                Apply for Merit Scholarship →
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
