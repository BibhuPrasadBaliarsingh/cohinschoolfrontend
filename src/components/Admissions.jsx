import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const feeMap = {
  pre: { day: 75000, board: 145000 },
  primary: { day: 85000, board: 155000 },
  middle: { day: 95000, board: 165000 },
  high: { day: 105000, board: 175000 },
  senior: { day: 125000, board: 195000 }
};

export default function Admissions({ openAdmissionModal }) {
  const [feeClass, setFeeClass] = useState('pre');
  const [isBoarding, setIsBoarding] = useState(false);
  const [includeTransport, setIncludeTransport] = useState(false);
  const [feeResult, setFeeResult] = useState(75000);

  useEffect(() => {
    let fee = isBoarding ? feeMap[feeClass].board : feeMap[feeClass].day;
    if (includeTransport) fee += 18000;
    setFeeResult(fee);
  }, [feeClass, isBoarding, includeTransport]);

  return (
    <section id="admissions" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <p className="text-gold-600 font-medium tracking-widest uppercase text-sm mb-3">Admissions 2026–27</p>
            <h2 className="font-display text-4xl lg:text-5xl text-navy-900 mb-6">
              Begin Your Journey<br />With Cohen
            </h2>
            <p className="text-navy-700/80 text-lg mb-8">
              Admissions are open from Nursery to Class XI. Experience a seamless digital admission process powered by our advanced CRM.
            </p>

            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold-500 text-navy-900 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="font-semibold text-navy-900">Online Application</p>
                  <p className="text-sm text-navy-700/70">Fill the multi-step form and upload documents digitally.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold-500 text-navy-900 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="font-semibold text-navy-900">Counselling & Campus Visit</p>
                  <p className="text-sm text-navy-700/70">Our team schedules personal counselling and a guided campus tour.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold-500 text-navy-900 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="font-semibold text-navy-900">Entrance / Interaction</p>
                  <p className="text-sm text-navy-700/70">Age-appropriate assessment followed by document verification.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold-500 text-navy-900 flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <p className="font-semibold text-navy-900">Fee Payment & Confirmation</p>
                  <p className="text-sm text-navy-700/70">Secure online payment and instant admission confirmation.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => openAdmissionModal('apply')}
                className="btn-premium px-8 py-4 bg-navy-900 text-white font-semibold rounded-full"
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

          {/* Fee Calculator */}
          <div className="reveal">
            <div className="p-8 rounded-3xl bg-white border border-cream-200 shadow-xl">
              <h3 className="font-display text-2xl text-navy-900 mb-2">Quick Fee Estimator</h3>
              <p className="text-sm text-navy-600 mb-6">Get an indicative annual estimate (demo purposes)</p>

              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-navy-800 mb-2 block">Class Level</label>
                  <select
                    value={feeClass}
                    onChange={(e) => setFeeClass(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 focus:outline-none focus:ring-2 focus:ring-gold-500/40"
                  >
                    <option value="pre">Pre-Primary (Nursery–UKG)</option>
                    <option value="primary">Primary (I–V)</option>
                    <option value="middle">Middle (VI–VIII)</option>
                    <option value="high">High School (IX–X)</option>
                    <option value="senior">Senior Secondary (XI–XII)</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-navy-800 mb-2 block">Boarding</label>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setIsBoarding(false)}
                      className={`flex-1 py-3 rounded-xl border-2 text-sm font-medium transition ${
                        !isBoarding
                          ? 'border-gold-500 bg-gold-500/10 text-navy-900'
                          : 'border-cream-200 text-navy-700'
                      }`}
                    >
                      Day Scholar
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsBoarding(true)}
                      className={`flex-1 py-3 rounded-xl border-2 text-sm font-medium transition ${
                        isBoarding
                          ? 'border-gold-500 bg-gold-500/10 text-navy-900'
                          : 'border-cream-200 text-navy-700'
                      }`}
                    >
                      Boarding
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-navy-800 mb-2 block">Transport Required?</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeTransport}
                      onChange={(e) => setIncludeTransport(e.target.checked)}
                      className="w-5 h-5 rounded accent-gold-500"
                    />
                    <span className="text-sm text-navy-700">Yes, include transport fees</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-cream-200">
                  <p className="text-sm text-navy-600">Estimated Annual Fee</p>
                  <p className="font-display text-4xl text-navy-900 mt-1">
                    ₹ {feeResult.toLocaleString('en-IN')}
                  </p>
                  <p className="text-xs text-navy-500 mt-2">
                    *Indicative only. Final fees shared during counselling. Scholarships available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
