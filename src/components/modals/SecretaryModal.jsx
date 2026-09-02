import React, { useEffect } from 'react';
import { X, Quote } from 'lucide-react';

export default function SecretaryModal({ closeModal }) {
  // Prevent background body scroll when Secretary Modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[120] bg-navy-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fadeIn"
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="sec-modal-title"
    >
      <div
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] sm:max-h-[90vh] flex flex-col shadow-2xl border border-cream-200 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed Header */}
        <div className="bg-navy-900 px-5 sm:px-6 py-4 flex items-center justify-between rounded-t-3xl border-b border-white/10 shrink-0 z-10">
          <div className="flex items-center gap-3">
            <div className="bg-gold-500 p-2 rounded-xl text-navy-900 flex-shrink-0">
              <Quote className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 id="sec-modal-title" className="font-display text-lg sm:text-xl text-white font-semibold leading-tight">
                Secretary’s Desk
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close modal"
            className="text-white/70 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-8 space-y-6 text-navy-800 overflow-y-auto flex-1 overscroll-contain text-left">
          <div className="flex flex-col md:flex-row gap-6 items-center bg-cream-100 p-6 rounded-2xl border border-cream-200">
            <img
              src="/images/about_seceratry.jpg"
              alt="Mr. Janmejay Mandal Secretary"
              className="w-32 h-36 rounded-2xl object-cover object-top shadow-lg border-2 border-gold-500 flex-shrink-0"
            />
            <div>
              <h4 className="font-display text-2xl text-navy-900 font-bold mb-1">Mr. Janmejay Mandal</h4>
              <p className="text-gold-600 text-xs font-bold uppercase tracking-wider mb-2">
                Secretary, Cohen International School
              </p>
              <p className="text-xs text-navy-700 leading-relaxed font-medium">
                MBA from Utkal University, Bhubaneswar | 16+ Years Experience in Education &amp; Student Counselling
              </p>
              <p className="text-xs text-navy-600 mt-1 font-semibold">secretary@coheninternationalschool.com</p>
            </div>
          </div>

          <div className="space-y-4 text-sm text-navy-700/90 leading-relaxed font-sans">
            <p className="font-semibold text-navy-900 text-base">Greetings to All Students, Parents &amp; Academic Partners,</p>
            <p>
              At Cohen International School, we are deeply committed to fostering an atmosphere of continuous learning, intellectual curiosity, and moral integrity. Our mission is to guide every student toward academic excellence while building essential life skills for the 21st century.
            </p>
            <p>
              With over 16 years of experience in student counselling and academic administration across major Indian metropolitan cities, I take great pride in facilitating strong student-parent-school partnerships. As Co-Convenor of the "Science Movement", we actively organize state-level science conclaves, Olympiad mentorships, and practical STEM exposures.
            </p>
            <p>
              We ensure that our 10-acre campus is backed by seamless digital administration, responsive parent portals, transparent admissions, and world-class student welfare systems.
            </p>
            <p className="italic font-medium text-navy-900">
              "Dedicated to empowering young minds with knowledge, values, and unwavering confidence to outshine the world."
            </p>
          </div>

          <div className="pt-4 border-t border-cream-200 flex items-center justify-between">
            <div>
              <p className="font-display text-lg text-navy-900 font-bold">Mr. Janmejay Mandal</p>
              <p className="text-xs text-navy-600 font-semibold">Secretary, Cohen International School</p>
              <p className="text-xs text-navy-500">MBA, Utkal University (Bhubaneswar)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
