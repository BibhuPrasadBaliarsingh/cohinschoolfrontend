import React, { useEffect } from 'react';
import { X, Quote } from 'lucide-react';

export default function PrincipalModal({ closeModal }) {
  // Prevent background body scroll when Principal Modal is open
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
      aria-labelledby="principal-modal-title"
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
              <h3 id="principal-modal-title" className="font-display text-lg sm:text-xl text-white font-semibold leading-tight">
                Principal's Desk
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
              src="/images/about_principal.jpg"
              alt="Principal Jagjeevan R.D. Dash"
              className="w-32 h-36 rounded-2xl object-cover object-top shadow-lg border-2 border-gold-500 flex-shrink-0"
            />
            <div>
              <h4 className="font-display text-2xl text-navy-900 font-bold mb-0.5">Jagjeevan R.D. Dash</h4>
              <p className="text-gold-600 text-xs font-extrabold uppercase tracking-wider mb-1">
                Principal, Cohen International School
              </p>
              <p className="text-xs text-navy-700 font-semibold mb-2">
                M.Sc Botany &amp; Gold Medalist - M.A. Sociology, B.Ed (Kurukshetra University)
              </p>
              <p className="text-xs text-navy-700 leading-relaxed font-medium">principal@coheninternationalschool.com</p>
            </div>
          </div>

          <div className="space-y-4 text-sm text-navy-700/90 leading-relaxed font-sans">
            <p className="font-semibold text-navy-900 text-base">Dear Students and Parents,</p>
            <p>
              I would like to take this opportunity to warmly welcome you to CIS. We are fully committed to guiding our community of learners
              towards holistic development. As an international school, CIS develops the whole child as a responsible learner, striving for
              personal excellence within a thought-provoking academic environment. Duly accredited, CIS operates at the highest standards
              ensuring proper education, life-skills and strong moral values. CIS is steadfast in its vision to build independent, caring and
              responsible citizens, who integrate perspectives, think critically and are unwavering in contributing towards shaping up a more
              sustainable world.
            </p>
            <p>
              At CIS, we believe in the philosophy of imparting holistic education. Education can not be confined only to books. One can learn a
              lot from nature and the environment around. The best way to educate a kid is to teach him/her to let their imagination grow. In
              order to achieve this, we have set our parameters high in all areas, be it in-class education or outdoor sports, be it science
              laboratories or art studios, be it a reading club or a musical session. We believe in the concept of in-class lectures coupled
              with demonstration classes, either in class itself or in the Science and Maths laboratories. Just as a picture is worth a thousand
              words, a practical demonstrations is worth a thousand theoretical lectures.
            </p>
            <p>
              We have Literature &amp; Oration, Science &amp; Maths , Music &amp; Dance, indoor &amp; outdoor Sports clubs. “All work and no play
              makes Jack a dull boy.” This profound statement is put to action in our indoor gaming facilities and outdoor sports activities. We
              encourage Yoga and self-defence training. Besides sports, we ensure that students have a leisure hour as well to unwind and recapture
              the lessons taught.
            </p>
            <p className="font-medium text-navy-900">We all look forward to welcoming you all to the CIS family.</p>
          </div>

          <div className="pt-4 border-t border-cream-200 flex items-center justify-between">
            <div>
              <p className="font-display text-lg text-navy-900 font-bold">Best Wishes</p>
              <p className="text-sm font-bold text-navy-900">Jagjeevan R.D. Dash</p>
              <p className="text-xs font-semibold text-navy-700">Principal, Cohen International School</p>
              <p className="text-xs text-navy-500">M.Sc Botany &amp; Gold Medalist - M.A. Sociology, B.Ed (Kurukshetra University)</p>
              <a href="mailto:principal@coheninternationalschool.com" className="text-xs text-gold-600 font-semibold hover:underline">
                principal@coheninternationalschool.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
