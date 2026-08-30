import React from 'react';
import { X, Quote } from 'lucide-react';

export default function PrincipalModal({ closeModal }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-backdrop"
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="principal-modal-title"
    >
      <div
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-cream-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-navy-900 px-6 py-5 flex items-center justify-between rounded-t-3xl border-b border-white/10 z-10">
          <div className="flex items-center gap-3">
            <div className="bg-gold-500 p-2 rounded-xl text-navy-900">
              <Quote className="w-6 h-6" />
            </div>
            <div>
              <h3 id="principal-modal-title" className="font-display text-xl text-white font-semibold">
                Principal's Desk
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close modal"
            className="text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition focus-visible:ring-2 focus-visible:ring-gold-400"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-6 text-navy-800">
          <div className="flex flex-col md:flex-row gap-6 items-center bg-cream-100 p-6 rounded-2xl border border-cream-200">
            <img
              src="/images/about_banner.png"
              alt="Principal Cohen International School"
              className="w-32 h-32 rounded-2xl object-cover shadow-lg border-2 border-gold-500 flex-shrink-0"
            />
            <div>
              <h4 className="font-display text-2xl text-navy-900 font-bold mb-1">From the Principal</h4>
              <p className="text-gold-600 text-xs font-semibold uppercase tracking-wider mb-2">
                Principal, Cohen International School
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
              <p className="text-sm font-semibold text-navy-800">Principal</p>
              <p className="text-xs text-navy-500">Cohen International School</p>
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
