import React from 'react';
import { Link } from 'react-router-dom';

export default function Admissions({ openAdmissionModal }) {
  return (
    <section id="admissions" className="py-12 lg:py-16 relative bg-cream-50/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal">
          <p className="text-gold-600 font-medium tracking-widest uppercase text-sm mb-3">
            Admissions for AY 2027-2028
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-navy-900 mb-4">
            Begin Your Journey With Cohen
          </h2>
          <p className="text-navy-700/80 text-lg mb-10 max-w-3xl leading-relaxed">
            Admissions are open from Nursery to Class XI. Experience a seamless digital admission process powered by our advanced CRM ecosystem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-cream-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-gold-500 text-navy-900 flex items-center justify-center font-bold flex-shrink-0 shadow">
                1
              </div>
              <div>
                <p className="font-semibold text-navy-900 text-base">Online Application</p>
                <p className="text-sm text-navy-700/70 mt-1 leading-relaxed">
                  Fill the multi-step form and upload documents digitally through our admission portal.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-cream-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-gold-500 text-navy-900 flex items-center justify-center font-bold flex-shrink-0 shadow">
                2
              </div>
              <div>
                <p className="font-semibold text-navy-900 text-base">Counselling &amp; Campus Visit</p>
                <p className="text-sm text-navy-700/70 mt-1 leading-relaxed">
                  Our team schedules personal counselling and a guided tour of our 10-acres green campus.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-cream-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-gold-500 text-navy-900 flex items-center justify-center font-bold flex-shrink-0 shadow">
                3
              </div>
              <div>
                <p className="font-semibold text-navy-900 text-base">Entrance / Interaction</p>
                <p className="text-sm text-navy-700/70 mt-1 leading-relaxed">
                  Age-appropriate learning assessment followed by document verification.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-cream-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-gold-500 text-navy-900 flex items-center justify-center font-bold flex-shrink-0 shadow">
                4
              </div>
              <div>
                <p className="font-semibold text-navy-900 text-base">Fee Payment &amp; Confirmation</p>
                <p className="text-sm text-navy-700/70 mt-1 leading-relaxed">
                  Secure online payment and instant admission confirmation with ERP credential issuance.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => openAdmissionModal && openAdmissionModal('apply')}
              className="btn-premium px-8 py-4 bg-navy-900 text-white font-semibold rounded-full hover:bg-gold-500 hover:text-navy-950 transition shadow-lg"
            >
              Start Application
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-navy-900 text-navy-900 font-semibold rounded-full hover:bg-navy-900 hover:text-white transition"
            >
              Book Campus Visit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
