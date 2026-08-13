import React, { useRef } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight, Award, GraduationCap, Building2 } from 'lucide-react';

const testimonialsList = [
  {
    id: 1,
    quote:
      "First of all, I would like to thank the management to take initiative and start an international school of such high order near IIT Bhubaneswar. When a new school starts, parents always remain anxious, but after interacting with Mr. Tripathy, the chairman, I was really motivated with his vision towards imparting holistic education and admitted both my kids to CIS.",
    name: "Dr. U. C. Sahoo",
    title: "Faculty, IIT Bhubaneswar",
    relation: "Parent of LKG & Grade VII Students",
    badge: "IIT Bhubaneswar Faculty",
    initials: "US",
    accentColor: "from-blue-500 to-indigo-600"
  },
  {
    id: 2,
    quote:
      "As a parent and being in the teaching profession myself, I would like to share my views regarding the Vidwan integrated classes at Cohen International School. My sons are very satisfied with the teaching methods, clear explanations, regular doubt clearing, and weekly tests rendered by the faculties.",
    name: "Dr. R. L. Panda",
    title: "Parent & Senior Educator",
    relation: "Parent of Vidwan JEE Class Student",
    badge: "Educator & Parent",
    initials: "RP",
    accentColor: "from-emerald-500 to-teal-600"
  },
  {
    id: 3,
    quote:
      "CIS, an acronym of COHEN INTERNATIONAL SCHOOL, is not simply a school; rather it's a Learning Villa. In fact, pedagogy at CIS is Collaborative (C), Instrumental (I) and Self-Paced (S). The educationists are cooperative, learned, and display immense patience.",
    name: "Lt Cdr Raj Kumar",
    title: "B.Sc. in Mathematics (Hons.) with Distinction",
    relation: "Parent of CIS Student",
    badge: "Defence Officer & Scholar",
    initials: "RK",
    accentColor: "from-amber-500 to-gold-600"
  },
  {
    id: 4,
    quote:
      "The Cohen International School (Vidwan classes) has taken an outstanding initiative. The classes are really worthful, with frequent doubt clearing, online examination systems, and highly experienced faculty members. Keep up the great work!",
    name: "Sujay Kumar Biswal",
    title: "Father of Alok R. Biswal",
    relation: "Parent of Grade X Student",
    badge: "Parent Testimony",
    initials: "SB",
    accentColor: "from-purple-500 to-rose-600"
  }
];

// Duplicate the array to create a seamless infinite marquee effect
const marqueeItems = [...testimonialsList, ...testimonialsList];

export default function Testimonials() {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-slate-900 via-navy-950 to-slate-900 text-white relative overflow-hidden border-t border-gold-500/20">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Quote className="w-3.5 h-3.5" /> Parents Speak • Live Feedback
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Trusted by Educators &amp; Parents
          </h2>
          <p className="text-white/70 max-w-2xl text-sm sm:text-base mt-2">
            Hover over any testimonial to pause the smooth right-to-left marquee scroll.
          </p>
        </div>

        {/* Manual Control Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold-500 hover:text-navy-950 border border-white/20 text-white transition flex items-center justify-center shadow-lg"
            aria-label="Scroll Left"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollRight}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold-500 hover:text-navy-950 border border-white/20 text-white transition flex items-center justify-center shadow-lg"
            aria-label="Scroll Right"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* INFINITE RIGHT-TO-LEFT MARQUEE CAROUSEL CONTAINER */}
      <div className="w-full overflow-hidden relative">
        {/* Left & Right Fade Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

        <div
          ref={containerRef}
          className="animate-marquee-rtl flex gap-6 px-4 py-2 hover:[animation-play-state:paused]"
        >
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[360px] sm:w-[450px] flex-shrink-0 bg-navy-900/90 rounded-3xl p-7 border border-white/10 hover:border-gold-400/50 transition-all duration-300 shadow-2xl flex flex-col justify-between group hover:scale-[1.02]"
            >
              <div>
                {/* Rating Stars & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-gold-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-gold-400 bg-gold-500/10 px-3 py-0.5 rounded-full border border-gold-500/30">
                    {item.badge}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-white/85 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${item.accentColor} text-white flex items-center justify-center font-extrabold text-sm shadow-md flex-shrink-0`}>
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-white font-bold text-base leading-tight group-hover:text-gold-400 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-gold-400/90 text-xs font-semibold mt-0.5">
                    {item.title}
                  </p>
                  <p className="text-white/50 text-[11px] mt-0.5">
                    {item.relation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
