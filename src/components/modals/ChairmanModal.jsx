import React from 'react';
import { X, Quote } from 'lucide-react';

export default function ChairmanModal({ closeModal }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-backdrop"
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="chairman-modal-title"
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
              <h3 id="chairman-modal-title" className="font-display text-xl text-white font-semibold">
                Founder Chairman’s Desk
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
              src="/chairman.jpg"
              alt="Jyoti Ranjan Tripathy Founder Chairman"
              className="w-32 h-32 rounded-2xl object-cover shadow-lg border-2 border-gold-500 flex-shrink-0"
            />
            <div>
              <h4 className="font-display text-2xl text-navy-900 font-bold mb-1">Jyoti Ranjan Tripathy</h4>
              <p className="text-gold-600 text-xs font-semibold uppercase tracking-wider mb-2">
                Founder &amp; Chairman, Cohen International School
              </p>
              <p className="text-xs text-navy-700 leading-relaxed">
                B.Tech (Honours), IIT Kharagpur | Educationist &amp; Visionary behind integrated schooling models in Odisha.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-sm text-navy-700/90 leading-relaxed font-sans">
            <p>
              CIS is a unique school, which is a temple of learning and a stepping stone to every kid's dreams. Our first step paves the
              road to our destination and hence, beginnings do matter a lot. My humble beginning with a passion to learn, courage to face
              obstacles, 'never say never' attitude laid the foundation for my life's principles and my vision. As a kid, I always felt the
              need to have an educational institution that not only offers world-class academics, but also helps students pursue their
              dreams, whether it is in academics or art or sports or management. CIS is the brainchild of my vision and the relentless
              efforts of like-minded people. I urge you all to pay a visit to our lovely campus. Our school will leave no stone unturned to
              groom your wards and shape their future well. We strive to provide quality education with equal importance to core human
              values. Our aim is to see our students grow up as self-reliant, confident and content individuals.
            </p>
            <p className="italic font-medium text-navy-900">
              "The woods are lovely, dark and deep, But I have promises to keep, And miles to go before I sleep, And miles to go before I
              sleep." - Robert Frost
            </p>
          </div>

          <div className="pt-4 border-t border-cream-200 flex items-center justify-between">
            <div>
              <p className="font-display text-lg text-navy-900 font-bold">Er. Jyoti Ranjan Tripathy</p>
              <p className="text-xs text-navy-500">Founder Chairman, Cohen Educational Trust</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
