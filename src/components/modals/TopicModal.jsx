import React from 'react';
import { X, CheckCircle2, Info } from 'lucide-react';
import { topicData } from '../../constants/modalData';

export default function TopicModal({ closeModal, openAdmissionModal, topicKey = 'academics' }) {
  const t = topicData[topicKey] || topicData.academics;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-backdrop"
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="topic-modal-title"
    >
      <div
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-cream-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 sm:h-72 overflow-hidden rounded-t-3xl">
          <img src={t.image} alt={t.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/60 to-transparent" />
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close modal"
            className="absolute top-4 right-4 bg-navy-900/80 text-white p-2 rounded-full hover:bg-navy-900 transition focus-visible:ring-2 focus-visible:ring-gold-400"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="px-3 py-1 rounded-full bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-wider mb-2 inline-block">
              {t.badge}
            </span>
            <h3 id="topic-modal-title" className="font-display text-2xl sm:text-3xl text-white font-bold leading-tight">
              {t.title}
            </h3>
            <p className="text-white/80 text-xs mt-1">{t.tag}</p>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-navy-800 text-base leading-relaxed font-medium bg-cream-100 p-4 rounded-2xl border border-cream-200">
            {t.intro}
          </p>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-600">Key Highlights &amp; Modules</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {t.sections.map((s, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white border border-cream-200 shadow-sm">
                  <h5 className="font-semibold text-navy-900 text-sm mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
                    {s.head}
                  </h5>
                  <p className="text-xs text-navy-700/80 leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-cream-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-navy-600">
              <Info className="w-4 h-4 text-gold-600" />
              <span>Need personal guidance? Speak with our admission desk.</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  closeModal();
                  openAdmissionModal?.('register');
                }}
                className="px-5 py-2.5 bg-white border border-navy-900 text-navy-900 text-xs font-semibold rounded-full hover:bg-cream-100 transition"
              >
                Register Interest
              </button>
              <button
                type="button"
                onClick={() => {
                  closeModal();
                  openAdmissionModal?.('apply');
                }}
                className="px-5 py-2.5 bg-gold-500 text-navy-900 text-xs font-bold rounded-full hover:bg-gold-400 transition shadow"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
