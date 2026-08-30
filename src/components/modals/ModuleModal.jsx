import React from 'react';
import { Link } from 'react-router-dom';
import { X, CheckCircle, ExternalLink, LogIn } from 'lucide-react';
import { modulesData } from '../../constants/modalData';

export default function ModuleModal({ closeModal, openLoginModal, moduleKey }) {
  const rawKey = moduleKey;
  const normalizedKey =
    rawKey === 'teacher-erp'
      ? 'teacher'
      : rawKey === 'student-portal'
      ? 'student'
      : rawKey === 'parent-app'
      ? 'parent'
      : rawKey === 'transport-tms'
      ? 'transport'
      : rawKey === 'fee-gateway'
      ? 'finance'
      : rawKey === 'hostel-management'
      ? 'hostel'
      : rawKey;

  const m = modulesData[normalizedKey] || modulesData[rawKey];
  if (!m) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="module-modal-title"
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-navy-900 px-6 py-5 flex items-center justify-between rounded-t-3xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-500 flex items-center justify-center text-navy-900 font-bold">★</div>
            <h3 id="module-modal-title" className="font-display text-xl text-white">
              {m.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close modal"
            className="text-white/70 hover:text-white focus-visible:ring-2 focus-visible:ring-gold-400 p-1 rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6">
          <p className="text-navy-700/80 mb-6">{m.desc}</p>
          <ul className="space-y-3 mb-6">
            {m.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-navy-800">{f}</span>
              </li>
            ))}
          </ul>

          {normalizedKey === 'student' ? (
            <Link
              to="/student/dashboard"
              onClick={closeModal}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg transition"
            >
              <ExternalLink className="w-4 h-4" /> Launch Public Student Portal →
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => {
                closeModal();
                openLoginModal?.(normalizedKey);
              }}
              className="w-full py-3.5 bg-navy-900 hover:bg-navy-800 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg transition"
            >
              <LogIn className="w-4.5 h-4.5 text-gold-400" /> Open {m.title}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
