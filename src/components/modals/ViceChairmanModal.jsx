import React, { useEffect } from 'react';
import { X, Quote } from 'lucide-react';

export default function ViceChairmanModal({ closeModal }) {
  // Prevent background body scroll when Vice Chairman Modal is open
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
      aria-labelledby="vc-modal-title"
    >
      <div
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] sm:max-h-[90vh] flex flex-col shadow-2xl border border-cream-200 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed Header */}
        <div className="bg-navy-900 px-5 sm:px-6 py-4 flex items-center justify-between rounded-t-3xl border-b border-white/10 shrink-0 z-10">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-500 p-2 rounded-xl text-navy-900 flex-shrink-0">
              <Quote className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 id="vc-modal-title" className="font-display text-lg sm:text-xl text-white font-semibold leading-tight">
                Vice Chairman’s Desk
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
              src="/images/about_vc.jpg"
              alt="Mr. Vikas Bahinipati Vice Chairman"
              className="w-32 h-36 rounded-2xl object-cover object-top shadow-lg border-2 border-emerald-500 flex-shrink-0"
            />
            <div>
              <h4 className="font-display text-2xl text-navy-900 font-bold mb-1">Mr. Vikas Bahinipati</h4>
              <p className="text-emerald-600 text-xs font-bold uppercase tracking-wider mb-2">
                Vice Chairman, Cohen International School
              </p>
              <p className="text-xs text-navy-700 leading-relaxed font-medium">
                MBA from Maastricht School of Management, The Netherlands | 25+ Years Corporate &amp; Academic Leadership
              </p>
              <p className="text-xs text-navy-600 mt-1 font-semibold">vicechairman@coheninternationalschool.com</p>
            </div>
          </div>

          <div className="space-y-4 text-sm text-navy-700/90 leading-relaxed font-sans">
            <p className="font-semibold text-navy-900 text-base">Greetings to All Students, Parents &amp; Well-Wishers,</p>
            <p>
              At Cohen International School, we believe that true education goes beyond textbooks—it is about inspiring young minds to discover their unique potential, cultivate character, and build resilience for tomorrow's global challenges.
            </p>
            <p>
              Our state-of-the-art campus, innovative STEM curriculum, and holistic sports programs are thoughtfully designed to nurture well-rounded leaders. We are committed to fostering an environment where every child feels valued, supported, and motivated to achieve academic excellence.
            </p>
            <p>
              Education is a collaborative journey between students, educators, and parents. With over 25 years of corporate and administrative experience spanning across global institutions, my mission is to ensure that CIS provides international standard operational excellence, cutting-edge digital infrastructure, and a nurturing environment for every student.
            </p>
            <p className="italic font-medium text-navy-900">
              "Empowering students to think globally, act responsibly, and achieve excellence through harmony."
            </p>
          </div>

          <div className="pt-4 border-t border-cream-200 flex items-center justify-between">
            <div>
              <p className="font-display text-lg text-navy-900 font-bold">Mr. Vikas Bahinipati</p>
              <p className="text-xs text-navy-600 font-semibold">Vice Chairman, Cohen International School</p>
              <p className="text-xs text-navy-500">MBA, Maastricht School of Management (The Netherlands)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
