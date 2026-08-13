import React from "react";
import { Target, Compass, Quote, ArrowRight, Download } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const talks = [
  {
    id: 1,
    image:
      "https://coheninternationalschool.com/assets/img/cohen-talk/talk_1750239612.jpg",
  },
  {
    id: 2,
    image:
      "https://coheninternationalschool.com/assets/img/cohen-talk/talk_1703569676.jpeg",
  },
  {
    id: 3,
    image:
      "https://coheninternationalschool.com/assets/img/cohen-talk/talk_1785073874.jpeg",
  },
];

export default function About({ openChairmanModal }) {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cream-100 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <p className="text-gold-600 font-medium tracking-widest uppercase text-sm mb-3">
              About the School
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-navy-900 leading-tight mb-6">
              A Temple of Learning
              <br />
              <span className="italic text-navy-700">
                Next to IIT Bhubaneswar
              </span>
            </h2>
            <p className="text-navy-700/80 text-lg leading-relaxed mb-6">
              Cohen International School (CIS) is a unique CBSE Senior Secondary
              school spread over 10 acres of lush greenery at the foothills of
              Barunei Hills, Jatani. Founded in 2015 by visionary educationists,
              it stands as a beacon of holistic, career-oriented education in
              Odisha.
            </p>
            <p className="text-navy-700/80 leading-relaxed mb-8">
              Our pedagogy —{" "}
              <strong>Collaborative, Instrumental & Self-Paced (CIS)</strong> —
              transforms classrooms into vibrant learning spaces. From Nursery
              to Class XII, students experience Project-Based Learning, Design
              Thinking, Cambridge English, Artificial Intelligence, Coding &
              Robotics, alongside integrated coaching for IIT-JEE and NEET at no
              extra cost.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-cream-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <p className="font-semibold text-navy-900">Vision</p>
                  <p className="text-sm text-navy-700/70 mt-1">
                    World-class academics that help every child pursue dreams in
                    academics, arts, sports or management.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-cream-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                  <Compass className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <p className="font-semibold text-navy-900">Mission</p>
                  <p className="text-sm text-navy-700/70 mt-1">
                    Know, Learn & Outshine — empowering students with holistic
                    growth and global citizenship.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/brocher.pdf"
                download="brocher.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md hover:scale-105 transition flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Brochure</span>
              </a>
              <span className="px-4 py-2 rounded-full bg-navy-900 text-white text-sm font-medium">
                CBSE Affiliated (#1530280)
              </span>
              <span className="px-4 py-2 rounded-full bg-gold-500/15 text-gold-700 text-sm font-medium">
                Subhadra Charitable Trust
              </span>
              <span className="px-4 py-2 rounded-full bg-gold-500/15 text-gold-700 text-sm font-medium">
                10 Acre Campus
              </span>
              <span className="px-4 py-2 rounded-full bg-gold-500/15 text-gold-700 text-sm font-medium">
                Boarding Available
              </span>
            </div>
          </div>

          <div className="relative reveal">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-cream-200 group">
              <img
                src="/board.png"
                alt="School Campus & Chairman"
                className="w-full h-[540px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-400 text-xs font-medium mb-3">
                  <Quote className="w-3.5 h-3.5" /> Founder Chairman's Vision
                </div>
                <h3 className="font-display text-2xl lg:text-3xl text-white mb-2">
                  Chairman’s Message
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4 italic">
                  “Cohen International School is built as a temple of learning
                  where curiosity is nurtured, values are instilled, and every
                  student is empowered to lead.”
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gold-400 text-sm font-semibold">
                      — Er. Jyoti Ranjan Tripathy
                    </p>
                    <p className="text-white/60 text-xs">
                      Alumnus, IIT Kharagpur | Founder Chairman, CIS
                    </p>
                  </div>
                  <button
                    onClick={openChairmanModal}
                    className="px-4 py-2 bg-gold-500 text-navy-900 text-xs font-semibold rounded-full hover:bg-gold-400 transition shadow-lg flex items-center gap-1.5"
                  >
                    Read Full Message <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-gold-500 flex flex-col items-center justify-center shadow-xl animate-float">
              <span className="font-display text-3xl text-navy-900 font-bold">
                <AnimatedCounter end={10} suffix="+" duration={1800} />
              </span>
              <span className="text-navy-900 text-xs font-medium text-center leading-tight px-2">
                Years of Excellence
              </span>
            </div>
            {/* Stats */}
            <div className="mt-16 rounded-[2rem] bg-gold-500/10 border border-gold-400/30 p-6 shadow-2xl backdrop-blur-xl reveal">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="text-center sm:text-left">
                  <p className="font-display text-3xl sm:text-4xl text-gold-500 font-semibold">
                    <AnimatedCounter end={10} suffix="+" duration={2000} />
                  </p>
                  <p className="text-navy-950/80 text-sm mt-1">
                    Acre Green Campus
                  </p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-display text-3xl sm:text-4xl text-gold-500 font-semibold">
                    <AnimatedCounter end={1} prefix="#" duration={1500} />
                  </p>
                  <p className="text-navy-950/80 text-sm mt-1">
                    CBSE in Bhubaneswar
                  </p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-display text-3xl sm:text-4xl text-gold-500 font-semibold">
                    <AnimatedCounter start={2000} end={2015} duration={2200} />
                  </p>
                  <p className="text-navy-950/80 text-sm mt-1">
                    Year of Foundation
                  </p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-display text-3xl sm:text-4xl text-gold-500 font-semibold">
                    <AnimatedCounter end={100} suffix="%" duration={2000} />
                  </p>
                  <p className="text-navy-950/80 text-sm mt-1">
                    Smart Digital Ecosystem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 lg:mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl text-navy-900 text-center mb-10 lg:mb-14">
            Cohen-Talks
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {talks.map((talk) => (
              <article
                key={talk.id}
                className="group relative overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_14px_35px_rgba(15,23,42,0.08)]"
              >
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src={talk.image}
                    alt="Cohen Talks"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
