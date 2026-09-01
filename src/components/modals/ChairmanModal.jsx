import React, { useEffect } from 'react';
import { X, Quote } from 'lucide-react';

export default function ChairmanModal({ closeModal }) {
  // Prevent background body scroll when Chairman Modal is open
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
      aria-labelledby="chairman-modal-title"
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
              <h3 id="chairman-modal-title" className="font-display text-lg sm:text-xl text-white font-semibold leading-tight">
                Founder Chairman’s Desk
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

        {/* Scrollable Content Body (Touch-scrolling enabled for mobile) */}
        <div className="p-5 sm:p-8 space-y-6 text-navy-800 overflow-y-auto flex-1 overscroll-contain text-left">
          <div className="flex flex-col md:flex-row gap-5 md:gap-6 items-center bg-cream-100 p-5 sm:p-6 rounded-2xl border border-cream-200">
            <img
              src="/chairman.jpg"
              alt="Jyoti Ranjan Tripathy Founder Chairman"
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover shadow-lg border-2 border-gold-500 flex-shrink-0"
            />
            <div className="text-center md:text-left">
              <h4 className="font-display text-xl sm:text-2xl text-navy-900 font-bold mb-1">Jyoti Ranjan Tripathy</h4>
              <p className="text-gold-600 text-xs font-semibold uppercase tracking-wider mb-2">
                Founder &amp; Chairman, Cohen International School
              </p>
              <p className="text-xs text-navy-700 leading-relaxed">
                B.Tech (Honours), IIT Kharagpur | Educationist &amp; Visionary behind integrated schooling models in Odisha.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-navy-700/90 leading-relaxed font-sans">
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
            <p className="italic font-medium text-navy-900 bg-gold-500/10 p-4 rounded-xl border-l-4 border-gold-500">
              "The woods are lovely, dark and deep, But I have promises to keep, And miles to go before I sleep, And miles to go before I
              sleep." - Robert Frost
            </p>
          </div>

          <div className="pt-4 border-t border-cream-200 flex items-center justify-between">
            <div>
              <p className="font-display text-base sm:text-lg text-navy-900 font-bold">Er. Jyoti Ranjan Tripathy</p>
              <p className="text-xs text-navy-500">Founder Chairman, Cohen Educational Trust</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
