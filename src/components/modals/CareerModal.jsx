import React, { useState, useEffect } from 'react';
import { X, Briefcase, CheckCircle } from 'lucide-react';

export default function CareerModal({ closeModal, role = 'General Faculty Application' }) {
  const [submitting, setSubmitting] = useState(false);

  // Lock background body scroll when Career Form Modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleCareerSubmit = (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    alert(
      `Thank you for applying! Your application for '${role}' has been logged in our HRMS system. Our recruitment desk will review your profile and contact you.`
    );
    setSubmitting(false);
    closeModal();
  };

  return (
    <div
      className="fixed inset-0 z-[120] bg-navy-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fadeIn"
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="career-modal-title"
    >
      <div
        className="bg-white rounded-3xl max-w-xl w-full max-h-[85vh] sm:max-h-[90vh] flex flex-col shadow-2xl border border-cream-200 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-navy-900 px-5 sm:px-6 py-4 flex items-center justify-between rounded-t-3xl border-b border-white/10 shrink-0 z-10">
          <div className="flex items-center gap-3">
            <div className="bg-gold-500 p-2 rounded-xl text-navy-900 flex-shrink-0">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 id="career-modal-title" className="font-display text-lg sm:text-xl text-white font-semibold leading-tight">
                Faculty &amp; Staff Application
              </h3>
              <p className="text-xs text-gold-400">Position: {role}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close modal"
            className="text-white/70 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form className="p-5 sm:p-6 space-y-4 overflow-y-auto flex-1 overscroll-contain text-left" onSubmit={handleCareerSubmit}>
          <div>
            <label htmlFor="career-position" className="text-xs font-semibold text-navy-800 block mb-1">
              Position Applied For *
            </label>
            <input
              id="career-position"
              type="text"
              readOnly
              value={role}
              className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-cream-300 text-sm font-semibold text-navy-900 cursor-not-allowed"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="career-fullname" className="text-xs font-semibold text-navy-800 block mb-1">
                Applicant Full Name *
              </label>
              <input
                id="career-fullname"
                required
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                placeholder="Full name"
              />
            </div>
            <div>
              <label htmlFor="career-mobile" className="text-xs font-semibold text-navy-800 block mb-1">
                Mobile Number *
              </label>
              <input
                id="career-mobile"
                required
                type="tel"
                className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label htmlFor="career-email" className="text-xs font-semibold text-navy-800 block mb-1">
                Email Address *
              </label>
              <input
                id="career-email"
                required
                type="email"
                className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                placeholder="name@domain.com"
              />
            </div>
            <div>
              <label htmlFor="career-qualification" className="text-xs font-semibold text-navy-800 block mb-1">
                Highest Qualification *
              </label>
              <select
                id="career-qualification"
                required
                className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
              >
                <option value="">Select Qualification</option>
                <option>B.Tech / B.E / M.Tech</option>
                <option>M.Sc (Physics/Chem/Math/Bio)</option>
                <option>M.A / B.A + B.Ed</option>
                <option>B.Ed / M.Ed</option>
                <option>Ph.D / Doctorate</option>
                <option>Montessori / NTT Certified</option>
                <option>B.P.Ed / M.P.Ed (Sports)</option>
                <option>Graduate / Postgraduate (Other)</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="career-experience" className="text-xs font-semibold text-navy-800 block mb-1">
                Teaching / Work Experience (Years) *
              </label>
              <select
                id="career-experience"
                required
                className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
              >
                <option value="">Select Experience</option>
                <option>Fresher (0 - 1 Year)</option>
                <option>1 to 3 Years</option>
                <option>3 to 5 Years</option>
                <option>5 to 10 Years</option>
                <option>10+ Years (Senior Faculty)</option>
              </select>
            </div>
            <div>
              <label htmlFor="career-city" className="text-xs font-semibold text-navy-800 block mb-1">
                Current City / Location *
              </label>
              <input
                id="career-city"
                required
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                placeholder="e.g. Bhubaneswar, Cuttack"
              />
            </div>
          </div>

          <div>
            <label htmlFor="career-resume-url" className="text-xs font-semibold text-navy-800 block mb-1">
              Link to Resume / LinkedIn Profile
            </label>
            <input
              id="career-resume-url"
              type="url"
              className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
              placeholder="Google Drive URL / LinkedIn link"
            />
          </div>

          <div>
            <label htmlFor="career-cover-note" className="text-xs font-semibold text-navy-800 block mb-1">
              Key Achievements / Brief Cover Note
            </label>
            <textarea
              id="career-cover-note"
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
              placeholder="Mention JEE/NEET results produced, awards, or subject expertise..."
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-4 bg-navy-900 text-white font-semibold rounded-2xl hover:bg-navy-800 transition flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
          >
            <CheckCircle className="w-5 h-5 text-gold-400" /> Submit Job Application → HRMS Log
          </button>
        </form>
      </div>
    </div>
  );
}
